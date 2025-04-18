import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Divider,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import { useRouter } from "next/router";
import { getFrameworkDetails } from "@/services/coursePlanner";
import { getOptionsByCategory } from "@/utils/Helper";
import coursePlannerStore from "@/store/coursePlannerStore";
import taxonomyStore from "@/store/tanonomyStore";
import Loader from "@/components/Loader";
import { useTranslation } from "next-i18next";
import ProtectedRoute from "../../components/ProtectedRoute";
import { telemetryFactory } from "@/utils/telemetry";
import { TelemetryEventType } from "@/utils/app.constant";
import useStore from "@/store/store";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useTenantConfig from "@/hooks/useTenantConfig";

const Foundation = () => {
  const tenantConfig = useTenantConfig();
  const router = useRouter();
  const { t } = useTranslation();
  const theme = useTheme();
  const userStore = useStore();
  const isActiveYear = userStore.isActiveYearSelected;
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const store = coursePlannerStore();
  const [loading, setLoading] = useState(true);
  const [framework, setFramework] = useState<any[]>([]);
  const [userStateName, setUserStateName] = useState<any>();
  const [role, setRole] = useState<any>();
  const [stateNames, setStateNames] = useState<any[]>([]);

  const setState = taxonomyStore((state) => state.setState);
  const setMatchingstate = coursePlannerStore(
    (state) => state.setMatchingstate
  );
  const setStateassociations = coursePlannerStore(
    (state) => state.setStateassociations
  );
  const setFramedata = coursePlannerStore((state) => state.setFramedata);
  const setBoards = coursePlannerStore((state) => state.setBoards);
  const setBoard = taxonomyStore((state) => state.setBoard);

  useEffect(() => {
    if (!tenantConfig?.COLLECTION_FRAMEWORK) return;
    const fetchStateName = () => {
      if (typeof window !== "undefined") {
        const stateName = localStorage.getItem("stateName");
        const adminInfo = JSON.parse(localStorage.getItem("adminInfo") || "{}");
        const userRole = adminInfo?.role;
        setRole(userRole);
        setUserStateName(stateName || "undefined");
      }
    };

    const fetchFrameworkDetails = async (stateName?: string) => {
      try {
        const data = await getFrameworkDetails(tenantConfig?.COLLECTION_FRAMEWORK);
        const framework = data?.result?.framework;
        setFramework(framework);
        setFramedata(framework);
        const userInfoString = localStorage.getItem('adminInfo');
        const boards = await getOptionsByCategory(framework, "board");
        const boardNames = boards.map((board: any) => board)?.sort();

        const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
        const boardField = userInfo?.customFields?.find((field: any) => field.label === "BOARD");
        const userBoards = boardField ? boardField.selectedValues : null;

        if (userBoards !== null) {
          if (userBoards && boardNames) {
          const normalizedUserBoards = userBoards.map((board: string) => board.toLowerCase());       
            const matchingBoards = boardNames.filter((board: { name: string; }) =>
              normalizedUserBoards.includes(board.name.toLowerCase())
            );
            setBoards(matchingBoards);
          }
        } else if (boardNames) {
          setBoards(boardNames);
        }

        // const states = await getOptionsByCategory(framework, "state");

        // setBoards(boardNames);
        // if (role === "Central Admin CCTA") {
        //   // Get all states and their names
        //   const stateNames = states.map((state: any) => state.name)?.sort();
        //   setStateNames(stateNames);
        //   setState(stateNames);

        //   const stateBoardMapping = states.map((state: any) => {
        //     const stateAssociations = state.associations || [];
        //     const boards = getOptionsByCategory(framework, "board");

        //     const associatedBoards = boards
        //       .filter((board: { code: any }) =>
        //         stateAssociations.some(
        //           (assoc: { code: any; category: string }) =>
        //             assoc.code === board.code && assoc.category === "board"
        //         )
        //       )
        //       .map((board: { name: any; code: any }) => ({
        //         name: board.name,
        //         code: board.code,
        //       }));

        //     return {
        //       stateName: state.name,
        //       boards: associatedBoards,
        //       associations: stateAssociations,
        //     };
        //   });

        //   console.log("State-Board Mapping:", stateBoardMapping);

        //   setBoards(stateBoardMapping);

        //   const allAssociations = stateBoardMapping.flatMap(
        //     (mapping: any) => mapping.associations
        //   );
        //   setStateassociations(allAssociations);
        // } else {
        //   const matchingState = states?.find(
        //     (state: any) => !stateName || state?.name === stateName
        //   );
        //   if (matchingState) {
        //     setState(matchingState?.name);
        //     setMatchingstate(matchingState);
        //     setStateassociations(matchingState?.associations);
        //     const boards = await getOptionsByCategory(framework, "board");
        //     if (boards) {
        //       const associatedBoards = boards
        //         .filter((board: { code: any }) =>
        //           matchingState.associations.some(
        //             (assoc: { code: any; category: string }) =>
        //               assoc.code === board.code && assoc.category === "board"
        //           )
        //         )
        //         .map((board: { name: any; code: any }) => ({
        //           name: board.name,
        //           code: board.code,
        //         }));

        //       const stateBoardMapping = [
        //         {
        //           stateName: matchingState.name,
        //           boards: associatedBoards,
        //           associations: matchingState.associations || [],
        //         },
        //       ];

        //       setBoards(stateBoardMapping);

        //       const allAssociations = stateBoardMapping.flatMap(
        //         (mapping: any) => mapping.associations
        //       );
        //       setStateassociations(allAssociations);
        //     }
        //   }
        // }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStateName();

    if (userStateName === undefined) {
      fetchFrameworkDetails();
    } else if (userStateName) {
      fetchFrameworkDetails(userStateName);
    }

    if (!isActiveYear) {
      router.push("/course-planner");
    }
  }, [tenantConfig, userStateName, isActiveYear]);

  const handleCardClick = (board: any) => {
    // Navigate to the state details page
    // router.push(`/stateDetails?board=${board}`);
    setBoard(board.name);
    router.push(`/subjectDetails?boardDetails=${board.code}&boardName=${board.name}`);
  };

  const handleCopyLink = (state: string) => {
    const link = `${window.location.origin}/course-planner/${state}`;
    navigator.clipboard.writeText(link).then(
      () => {
        alert("Link copied to clipboard");
        const windowUrl = window.location.pathname;
        const cleanedUrl = windowUrl.replace(/^\//, "");
        const env = cleanedUrl.split("/")[0];

        const telemetryInteract = {
          context: {
            env: env,
            cdata: [],
          },
          edata: {
            id: "copy_link",
            type: TelemetryEventType.CLICK,
            subtype: "",
            pageid: cleanedUrl,
          },
        };
        telemetryFactory.interact(telemetryInteract);
      },
      (err) => {
        console.error("Failed to copy link: ", err);
      }
    );
  };

  return (
    <ProtectedRoute>
      <>
        {loading ? (
          <Loader showBackdrop={true} loadingText={t("COMMON.LOADING")} />
        ) : (
          <Box sx={{ pl: "20px" }}>
            <Box sx={{ m: 2 }}>
              <Typography>{t("COURSE_PLANNER.BOARDS")}</Typography>
            </Box>
            <Divider />

            <Grid
              container spacing={2} sx={{ overflow: "hidden", maxWidth: "100%", mt: 2 }}
            >
              {
                store.boards.map((board:any) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={board?.name} >
                    <Box
                      sx={{
                        cursor: "pointer",
                        border: "1px solid #D0C5B4",
                        borderRadius: "8px",
                        padding: "10px",
                        display: "flex",  
                        justifyContent: "space-between",
                        minHeight:'48px',
                        "&:hover": {
                          backgroundColor: "#D0C5B4",
                        },
                        marginTop: "8px"
                      }}
                      onClick={() => handleCardClick(board)}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "18px",
                        }}
                      >
                        <FolderOutlinedIcon />
                        <Typography className="two-line-text">{board?.name}</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}> 
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopyLink(board?.name);
                          }}
                          sx={{ minWidth: "auto", padding: 0 }}
                        >
                          {/* Add any icon or text for the copy link button */}
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                ))
              }
            </Grid>

          </Box>
        )}
      </>
    </ProtectedRoute>
  );
};

export default Foundation;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
