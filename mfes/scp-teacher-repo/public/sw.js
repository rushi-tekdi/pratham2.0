if(!self.define){let e,c={};const s=(s,a)=>(s=new URL(s+".js",a).href,c[s]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=c,document.head.appendChild(e)}else e=s,importScripts(s),c()})).then((()=>{let e=c[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(c[t])return;let i={};const n=e=>s(e,t),o={module:{uri:t},exports:i,require:n};c[t]=Promise.all(a.map((e=>o[e]||n(e)))).then((e=>(r(...e),i)))}}define(["./workbox-495fd258"],(function(e){"use strict";importScripts(),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"/scp-teacher-repo/_next/static/T8SeDegUy3QvDMTGDtY9U/_buildManifest.js",revision:"ed8c7e213840773382197c0598167b02"},{url:"/scp-teacher-repo/_next/static/T8SeDegUy3QvDMTGDtY9U/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/scp-teacher-repo/_next/static/chunks/1007-67e103d7d76875d6.js",revision:"67e103d7d76875d6"},{url:"/scp-teacher-repo/_next/static/chunks/1126.906ba739d96d95b3.js",revision:"906ba739d96d95b3"},{url:"/scp-teacher-repo/_next/static/chunks/1137.ab228e26ccb90d6b.js",revision:"ab228e26ccb90d6b"},{url:"/scp-teacher-repo/_next/static/chunks/1242.af9d7d0b5bea8e84.js",revision:"af9d7d0b5bea8e84"},{url:"/scp-teacher-repo/_next/static/chunks/1345.5a27a8c5a5ab54fc.js",revision:"5a27a8c5a5ab54fc"},{url:"/scp-teacher-repo/_next/static/chunks/1531.1ecbde4e0a147f72.js",revision:"1ecbde4e0a147f72"},{url:"/scp-teacher-repo/_next/static/chunks/1569-2a33b4d48be892e2.js",revision:"2a33b4d48be892e2"},{url:"/scp-teacher-repo/_next/static/chunks/1811-a9f41c0cc840f242.js",revision:"a9f41c0cc840f242"},{url:"/scp-teacher-repo/_next/static/chunks/186-067fb5ef8b8991d3.js",revision:"067fb5ef8b8991d3"},{url:"/scp-teacher-repo/_next/static/chunks/1932-625089812cc690c1.js",revision:"625089812cc690c1"},{url:"/scp-teacher-repo/_next/static/chunks/2042-e778a66dbbda3f5c.js",revision:"e778a66dbbda3f5c"},{url:"/scp-teacher-repo/_next/static/chunks/2068.aa2699a5f71fdb1d.js",revision:"aa2699a5f71fdb1d"},{url:"/scp-teacher-repo/_next/static/chunks/2258.ccfff9d9c52337d7.js",revision:"ccfff9d9c52337d7"},{url:"/scp-teacher-repo/_next/static/chunks/2400.c65f435452829939.js",revision:"c65f435452829939"},{url:"/scp-teacher-repo/_next/static/chunks/2402-bbed59e17e20641e.js",revision:"bbed59e17e20641e"},{url:"/scp-teacher-repo/_next/static/chunks/2407-7bccd8b8e60d5454.js",revision:"7bccd8b8e60d5454"},{url:"/scp-teacher-repo/_next/static/chunks/2433-45112c118dc5bc48.js",revision:"45112c118dc5bc48"},{url:"/scp-teacher-repo/_next/static/chunks/2477-551a4b8433b3d870.js",revision:"551a4b8433b3d870"},{url:"/scp-teacher-repo/_next/static/chunks/2531-40562afdf699b62b.js",revision:"40562afdf699b62b"},{url:"/scp-teacher-repo/_next/static/chunks/2616-e9573b5cc5a06452.js",revision:"e9573b5cc5a06452"},{url:"/scp-teacher-repo/_next/static/chunks/2657.1ff7208acdeea846.js",revision:"1ff7208acdeea846"},{url:"/scp-teacher-repo/_next/static/chunks/267-a19e8028a34b0da1.js",revision:"a19e8028a34b0da1"},{url:"/scp-teacher-repo/_next/static/chunks/2740-67dccacbd74abe43.js",revision:"67dccacbd74abe43"},{url:"/scp-teacher-repo/_next/static/chunks/2750.ec2b5aa81e4547bb.js",revision:"ec2b5aa81e4547bb"},{url:"/scp-teacher-repo/_next/static/chunks/2816-2aa5faced5b1f6e1.js",revision:"2aa5faced5b1f6e1"},{url:"/scp-teacher-repo/_next/static/chunks/2864-ae94535ecc935ecf.js",revision:"ae94535ecc935ecf"},{url:"/scp-teacher-repo/_next/static/chunks/2876-ae5f49b496436fa7.js",revision:"ae5f49b496436fa7"},{url:"/scp-teacher-repo/_next/static/chunks/2951-4632a7a58c40ebdb.js",revision:"4632a7a58c40ebdb"},{url:"/scp-teacher-repo/_next/static/chunks/3160-175c67b043081eb2.js",revision:"175c67b043081eb2"},{url:"/scp-teacher-repo/_next/static/chunks/3272-217f845cdafc82b0.js",revision:"217f845cdafc82b0"},{url:"/scp-teacher-repo/_next/static/chunks/3386-51d6e3eb741581ff.js",revision:"51d6e3eb741581ff"},{url:"/scp-teacher-repo/_next/static/chunks/3448-c2ca8bcdd93abf08.js",revision:"c2ca8bcdd93abf08"},{url:"/scp-teacher-repo/_next/static/chunks/3509.59f677e199beb4bc.js",revision:"59f677e199beb4bc"},{url:"/scp-teacher-repo/_next/static/chunks/3684-23f78aee6ccb3ac8.js",revision:"23f78aee6ccb3ac8"},{url:"/scp-teacher-repo/_next/static/chunks/3687-132b97fe0a239495.js",revision:"132b97fe0a239495"},{url:"/scp-teacher-repo/_next/static/chunks/37.c924e961adcd88fe.js",revision:"c924e961adcd88fe"},{url:"/scp-teacher-repo/_next/static/chunks/3894.4f0483eac8dca9ec.js",revision:"4f0483eac8dca9ec"},{url:"/scp-teacher-repo/_next/static/chunks/4038-d58506697d3bd53b.js",revision:"d58506697d3bd53b"},{url:"/scp-teacher-repo/_next/static/chunks/442-d11962892ba32930.js",revision:"d11962892ba32930"},{url:"/scp-teacher-repo/_next/static/chunks/4747.edb1de835763851b.js",revision:"edb1de835763851b"},{url:"/scp-teacher-repo/_next/static/chunks/4957.9a44e80dbd5e6056.js",revision:"9a44e80dbd5e6056"},{url:"/scp-teacher-repo/_next/static/chunks/4b72cc6c.74845a71501d2b62.js",revision:"74845a71501d2b62"},{url:"/scp-teacher-repo/_next/static/chunks/5011-5ebd11b5b813fc02.js",revision:"5ebd11b5b813fc02"},{url:"/scp-teacher-repo/_next/static/chunks/5221.0fcaa76742d64d2d.js",revision:"0fcaa76742d64d2d"},{url:"/scp-teacher-repo/_next/static/chunks/5466-7f9edb9ffc30217c.js",revision:"7f9edb9ffc30217c"},{url:"/scp-teacher-repo/_next/static/chunks/5542-8193fc4a2b7890b9.js",revision:"8193fc4a2b7890b9"},{url:"/scp-teacher-repo/_next/static/chunks/5572-6b85a0ba836830c0.js",revision:"6b85a0ba836830c0"},{url:"/scp-teacher-repo/_next/static/chunks/5701-9972fe16d1e987cd.js",revision:"9972fe16d1e987cd"},{url:"/scp-teacher-repo/_next/static/chunks/5717-af2e86f85ccf5120.js",revision:"af2e86f85ccf5120"},{url:"/scp-teacher-repo/_next/static/chunks/5975-aa4eccda49b2a8bb.js",revision:"aa4eccda49b2a8bb"},{url:"/scp-teacher-repo/_next/static/chunks/6122-3e2360d4934888d1.js",revision:"3e2360d4934888d1"},{url:"/scp-teacher-repo/_next/static/chunks/6544-49faed123a5d4847.js",revision:"49faed123a5d4847"},{url:"/scp-teacher-repo/_next/static/chunks/6568-9885612da8f13063.js",revision:"9885612da8f13063"},{url:"/scp-teacher-repo/_next/static/chunks/6723-13623dae02580fd5.js",revision:"13623dae02580fd5"},{url:"/scp-teacher-repo/_next/static/chunks/6731-ff44a57e9cf2380c.js",revision:"ff44a57e9cf2380c"},{url:"/scp-teacher-repo/_next/static/chunks/6765-838bb240e87432a1.js",revision:"838bb240e87432a1"},{url:"/scp-teacher-repo/_next/static/chunks/7114-3bbfb57b11a3356f.js",revision:"3bbfb57b11a3356f"},{url:"/scp-teacher-repo/_next/static/chunks/7128.faea2fe2a99acc05.js",revision:"faea2fe2a99acc05"},{url:"/scp-teacher-repo/_next/static/chunks/7196-b409adfb1f04e7e3.js",revision:"b409adfb1f04e7e3"},{url:"/scp-teacher-repo/_next/static/chunks/7280-2da632f74ff54f64.js",revision:"2da632f74ff54f64"},{url:"/scp-teacher-repo/_next/static/chunks/7300-afee4e42eb1cbe56.js",revision:"afee4e42eb1cbe56"},{url:"/scp-teacher-repo/_next/static/chunks/7338.4dcfe58555f9c727.js",revision:"4dcfe58555f9c727"},{url:"/scp-teacher-repo/_next/static/chunks/7719-0a43fd7515344f13.js",revision:"0a43fd7515344f13"},{url:"/scp-teacher-repo/_next/static/chunks/7742-cd867a02d482fc5c.js",revision:"cd867a02d482fc5c"},{url:"/scp-teacher-repo/_next/static/chunks/7802-7504a368580ef96c.js",revision:"7504a368580ef96c"},{url:"/scp-teacher-repo/_next/static/chunks/7983-c47065c436167af4.js",revision:"c47065c436167af4"},{url:"/scp-teacher-repo/_next/static/chunks/8157.819d9cdda27e5f67.js",revision:"819d9cdda27e5f67"},{url:"/scp-teacher-repo/_next/static/chunks/8296-1d8f43e522975164.js",revision:"1d8f43e522975164"},{url:"/scp-teacher-repo/_next/static/chunks/8354-78c84373d06adf3b.js",revision:"78c84373d06adf3b"},{url:"/scp-teacher-repo/_next/static/chunks/8372-8f0d8fba2af2a735.js",revision:"8f0d8fba2af2a735"},{url:"/scp-teacher-repo/_next/static/chunks/8497-8fa3294f7e25e7fb.js",revision:"8fa3294f7e25e7fb"},{url:"/scp-teacher-repo/_next/static/chunks/853-70d0d055012893a4.js",revision:"70d0d055012893a4"},{url:"/scp-teacher-repo/_next/static/chunks/86.38d5f4d270b3847c.js",revision:"38d5f4d270b3847c"},{url:"/scp-teacher-repo/_next/static/chunks/8693-60f3e31bde5a3474.js",revision:"60f3e31bde5a3474"},{url:"/scp-teacher-repo/_next/static/chunks/8704-8ff7a34ad3d09eba.js",revision:"8ff7a34ad3d09eba"},{url:"/scp-teacher-repo/_next/static/chunks/888-f9aba28ffd81fbae.js",revision:"f9aba28ffd81fbae"},{url:"/scp-teacher-repo/_next/static/chunks/8912-d44f2cf0c35aafaa.js",revision:"d44f2cf0c35aafaa"},{url:"/scp-teacher-repo/_next/static/chunks/9222-bf6a609f2b4d5997.js",revision:"bf6a609f2b4d5997"},{url:"/scp-teacher-repo/_next/static/chunks/9341-44f5946ed86b77f4.js",revision:"44f5946ed86b77f4"},{url:"/scp-teacher-repo/_next/static/chunks/935-3a5d3ca578a0079a.js",revision:"3a5d3ca578a0079a"},{url:"/scp-teacher-repo/_next/static/chunks/9380-a7aaff4084b210df.js",revision:"a7aaff4084b210df"},{url:"/scp-teacher-repo/_next/static/chunks/9675.13660b6e1f7f2bf4.js",revision:"13660b6e1f7f2bf4"},{url:"/scp-teacher-repo/_next/static/chunks/9733-d89f57a9bda8556c.js",revision:"d89f57a9bda8556c"},{url:"/scp-teacher-repo/_next/static/chunks/976.71b5df7b7293ee86.js",revision:"71b5df7b7293ee86"},{url:"/scp-teacher-repo/_next/static/chunks/9895.bff6d082c9c1cf8d.js",revision:"bff6d082c9c1cf8d"},{url:"/scp-teacher-repo/_next/static/chunks/framework.80a304c0b696494c.js",revision:"80a304c0b696494c"},{url:"/scp-teacher-repo/_next/static/chunks/main-be7e3f20c218d108.js",revision:"be7e3f20c218d108"},{url:"/scp-teacher-repo/_next/static/chunks/noop-511adb5ca57bbad3.js",revision:"511adb5ca57bbad3"},{url:"/scp-teacher-repo/_next/static/chunks/pages/404-143da6bce80d1b52.js",revision:"143da6bce80d1b52"},{url:"/scp-teacher-repo/_next/static/chunks/pages/_app-a7a2faf921e44e02.js",revision:"a7a2faf921e44e02"},{url:"/scp-teacher-repo/_next/static/chunks/pages/_error-98187055a72e1c59.js",revision:"98187055a72e1c59"},{url:"/scp-teacher-repo/_next/static/chunks/pages/assessments-2e4fcfc6168bbb47.js",revision:"2e4fcfc6168bbb47"},{url:"/scp-teacher-repo/_next/static/chunks/pages/assessments/user/%5BuserId%5D-1e26c12dd86975db.js",revision:"1e26c12dd86975db"},{url:"/scp-teacher-repo/_next/static/chunks/pages/assessments/user/%5BuserId%5D/subject/%5BsubjectId%5D-642d2445ac90864e.js",revision:"642d2445ac90864e"},{url:"/scp-teacher-repo/_next/static/chunks/pages/attendance-history-5121ffc7dd88e1cd.js",revision:"5121ffc7dd88e1cd"},{url:"/scp-teacher-repo/_next/static/chunks/pages/attendance-overview-87ccca1c8d8966a7.js",revision:"87ccca1c8d8966a7"},{url:"/scp-teacher-repo/_next/static/chunks/pages/blocks/components/FilterModalCenter-d7f984a5a19b636e.js",revision:"d7f984a5a19b636e"},{url:"/scp-teacher-repo/_next/static/chunks/pages/board-enrollment-8a410295110f345f.js",revision:"8a410295110f345f"},{url:"/scp-teacher-repo/_next/static/chunks/pages/board-enrollment/student-detail/%5BuserId%5D-609aee43d7fa8492.js",revision:"609aee43d7fa8492"},{url:"/scp-teacher-repo/_next/static/chunks/pages/centers-c173d764b855927a.js",revision:"c173d764b855927a"},{url:"/scp-teacher-repo/_next/static/chunks/pages/centers/%5BcohortId%5D-c70da6630ca8e9ec.js",revision:"c70da6630ca8e9ec"},{url:"/scp-teacher-repo/_next/static/chunks/pages/centers/%5BcohortId%5D/events/%5Bdate%5D-98714679def02c80.js",revision:"98714679def02c80"},{url:"/scp-teacher-repo/_next/static/chunks/pages/course-hierarchy/%5Bidentifier%5D-177152b448ed929a.js",revision:"177152b448ed929a"},{url:"/scp-teacher-repo/_next/static/chunks/pages/create-password-be172579d5598bba.js",revision:"be172579d5598bba"},{url:"/scp-teacher-repo/_next/static/chunks/pages/curriculum-planner-a43578e136d5d5dc.js",revision:"a43578e136d5d5dc"},{url:"/scp-teacher-repo/_next/static/chunks/pages/curriculum-planner/center/%5BcohortId%5D-93593b3742517ca7.js",revision:"93593b3742517ca7"},{url:"/scp-teacher-repo/_next/static/chunks/pages/dashboard-7dac69785d332be0.js",revision:"7dac69785d332be0"},{url:"/scp-teacher-repo/_next/static/chunks/pages/edit-password-6c5c874e14b413df.js",revision:"6c5c874e14b413df"},{url:"/scp-teacher-repo/_next/static/chunks/pages/forgot-password-2c695d877837e1e0.js",revision:"2c695d877837e1e0"},{url:"/scp-teacher-repo/_next/static/chunks/pages/index-b482d6d874091df1.js",revision:"b482d6d874091df1"},{url:"/scp-teacher-repo/_next/static/chunks/pages/learner-attendance-history-e077774d3d972222.js",revision:"e077774d3d972222"},{url:"/scp-teacher-repo/_next/static/chunks/pages/learner/%5BuserId%5D-d86d92a627f78bca.js",revision:"d86d92a627f78bca"},{url:"/scp-teacher-repo/_next/static/chunks/pages/login-49be6d280a90a202.js",revision:"49be6d280a90a202"},{url:"/scp-teacher-repo/_next/static/chunks/pages/logout-b546a79549599fd4.js",revision:"b546a79549599fd4"},{url:"/scp-teacher-repo/_next/static/chunks/pages/observation-91d79254b360d380.js",revision:"91d79254b360d380"},{url:"/scp-teacher-repo/_next/static/chunks/pages/observation/%5BobservationId%5D-f58b5c79f29410ac.js",revision:"f58b5c79f29410ac"},{url:"/scp-teacher-repo/_next/static/chunks/pages/observation/%5BobservationId%5D/questionary-3ad325d1554537ea.js",revision:"3ad325d1554537ea"},{url:"/scp-teacher-repo/_next/static/chunks/pages/play/content/%5Bidentifier%5D-02cfb179784522d8.js",revision:"02cfb179784522d8"},{url:"/scp-teacher-repo/_next/static/chunks/pages/reset-password-89dd0f6c8631c50e.js",revision:"89dd0f6c8631c50e"},{url:"/scp-teacher-repo/_next/static/chunks/pages/support-request-97a133362c28b7b7.js",revision:"97a133362c28b7b7"},{url:"/scp-teacher-repo/_next/static/chunks/pages/topic-detail-view-34812fd3c63f1c48.js",revision:"34812fd3c63f1c48"},{url:"/scp-teacher-repo/_next/static/chunks/pages/unauthorized-a63bae64abbbfb11.js",revision:"a63bae64abbbfb11"},{url:"/scp-teacher-repo/_next/static/chunks/pages/user-profile/%5BuserId%5D-d0160f1b4ccd3f45.js",revision:"d0160f1b4ccd3f45"},{url:"/scp-teacher-repo/_next/static/chunks/pages/youthboard-88c2041564a01b70.js",revision:"88c2041564a01b70"},{url:"/scp-teacher-repo/_next/static/chunks/pages/youthboard/campDetails/%5BsurveyCamp%5D-74047f18d156810f.js",revision:"74047f18d156810f"},{url:"/scp-teacher-repo/_next/static/chunks/pages/youthboard/survey/%5BsurveyName%5D-c86f7da1d27c4b1e.js",revision:"c86f7da1d27c4b1e"},{url:"/scp-teacher-repo/_next/static/chunks/pages/youthboard/surveys-26004478a9116c3f.js",revision:"26004478a9116c3f"},{url:"/scp-teacher-repo/_next/static/chunks/pages/youthboard/user-profile/%5BuserId%5D-1796c0f282c8dff9.js",revision:"1796c0f282c8dff9"},{url:"/scp-teacher-repo/_next/static/chunks/pages/youthboard/village-camp-survyey/%5BvillageSurveyName%5D-a60c7b672cf7f9f4.js",revision:"a60c7b672cf7f9f4"},{url:"/scp-teacher-repo/_next/static/chunks/pages/youthboard/villageDetails/%5BvillageName%5D-652b2264e7e9f9b1.js",revision:"652b2264e7e9f9b1"},{url:"/scp-teacher-repo/_next/static/chunks/pages/youthboard/villageSurveys-1658298674f2ffd4.js",revision:"1658298674f2ffd4"},{url:"/scp-teacher-repo/_next/static/chunks/pages/youthboard/villages-a591bfdbf79742b7.js",revision:"a591bfdbf79742b7"},{url:"/scp-teacher-repo/_next/static/chunks/pages/youthboard/volunteer-profile/%5Bid%5D-9330f8bbab655feb.js",revision:"9330f8bbab655feb"},{url:"/scp-teacher-repo/_next/static/chunks/pages/youthboard/volunteerList-bb0a8e1e2f6a6a57.js",revision:"bb0a8e1e2f6a6a57"},{url:"/scp-teacher-repo/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/scp-teacher-repo/_next/static/chunks/webpack-2d34da306db70a46.js",revision:"2d34da306db70a46"},{url:"/scp-teacher-repo/_next/static/css/4b493483bd6625e6.css",revision:"4b493483bd6625e6"},{url:"/scp-teacher-repo/_next/static/css/762e159a388d8374.css",revision:"762e159a388d8374"},{url:"/scp-teacher-repo/_next/static/css/c292771fb4302bb4.css",revision:"c292771fb4302bb4"},{url:"/scp-teacher-repo/_next/static/css/f08150324baca4d3.css",revision:"f08150324baca4d3"},{url:"/scp-teacher-repo/_next/static/media/0484562807a97172-s.p.woff2",revision:"b550bca8934bd86812d1f5e28c9cc1de"},{url:"/scp-teacher-repo/_next/static/media/404.6d628fa3.png",revision:"d6c11ef667079b261f98700fae366901"},{url:"/scp-teacher-repo/_next/static/media/4c285fdca692ea22-s.p.woff2",revision:"42d3308e3aca8742731f63154187bdd7"},{url:"/scp-teacher-repo/_next/static/media/5fb25f343c7550ca-s.woff2",revision:"b1ee7ba0b4c946e20d7859cddf2aa203"},{url:"/scp-teacher-repo/_next/static/media/6245472ced48d3be-s.p.woff2",revision:"335da181ffc3c425a4abf0e8fc0f1e42"},{url:"/scp-teacher-repo/_next/static/media/6c9a125e97d835e1-s.woff2",revision:"889718d692d5bfc6019cbdfcb5cc106f"},{url:"/scp-teacher-repo/_next/static/media/7108afb8b1381ad1-s.p.woff2",revision:"d5a9cbc34d22ffd5c4eb636dcca02f5d"},{url:"/scp-teacher-repo/_next/static/media/7db6c35d839a711c-s.p.woff2",revision:"de2b6fe4e663c0669007e5b501c2026b"},{url:"/scp-teacher-repo/_next/static/media/7ede3623c9ddac57-s.woff2",revision:"352bd40859f4f3744377e2ad51836740"},{url:"/scp-teacher-repo/_next/static/media/8888a3826f4a3af4-s.p.woff2",revision:"792477d09826b11d1e5a611162c9797a"},{url:"/scp-teacher-repo/_next/static/media/9e82d62334b205f4-s.p.woff2",revision:"1c2ea932e7620e3a752301d0e54d3d91"},{url:"/scp-teacher-repo/_next/static/media/Board.aefe63a8.svg",revision:"64ba1caa6582b46307496df5d5be599d"},{url:"/scp-teacher-repo/_next/static/media/Epub.4c3af416.svg",revision:"57b7e94ee7a7dd3af7313a6948767c31"},{url:"/scp-teacher-repo/_next/static/media/HTML.afe7bcdf.svg",revision:"adf3402f83d0d4371f40e6121241c76c"},{url:"/scp-teacher-repo/_next/static/media/MP4.2c2b3693.svg",revision:"8a61c467ab15e2ed95372dffdd678270"},{url:"/scp-teacher-repo/_next/static/media/PDF.2aae125e.svg",revision:"fcca9bed7e68b7dcb3c152dfc4dc224b"},{url:"/scp-teacher-repo/_next/static/media/Pratham-Logo.f44438eb.png",revision:"1b8d68a94a615c607f09047c3565c537"},{url:"/scp-teacher-repo/_next/static/media/Qml.112420ce.svg",revision:"188471d2cb3c63776082897db74db8d3"},{url:"/scp-teacher-repo/_next/static/media/Support.ca852e9c.svg",revision:"209b868991325f2621d052f811a31547"},{url:"/scp-teacher-repo/_next/static/media/SurveyFrame1.00f65a6e.png",revision:"97934443925a25031b24f63c48fb0d1e"},{url:"/scp-teacher-repo/_next/static/media/SurveyFrame2.f0909aeb.png",revision:"d68924be1b4df9a6febc25bd7d79a3a4"},{url:"/scp-teacher-repo/_next/static/media/Unit.e14188f7.png",revision:"8977b39609cbfef4f6d8e4fa26188358"},{url:"/scp-teacher-repo/_next/static/media/a1386beebedccca4-s.woff2",revision:"d3aa06d13d3cf9c0558927051f3cb948"},{url:"/scp-teacher-repo/_next/static/media/apartment.8489d4b9.png",revision:"dc2785e2f5fc2c86a0b7c9a31b806b46"},{url:"/scp-teacher-repo/_next/static/media/appLogo.3f4d8345.png",revision:"1dd3c376e6e6be5f7476c65bd307d005"},{url:"/scp-teacher-repo/_next/static/media/assessment.e3593f75.svg",revision:"c5e614c08dee34aa0073920ecc93b02a"},{url:"/scp-teacher-repo/_next/static/media/b8442747db2a9bad-s.woff2",revision:"bdb143282b9fa3a5da7f074b6f81e124"},{url:"/scp-teacher-repo/_next/static/media/b957ea75a84b6ea7-s.p.woff2",revision:"0bd523f6049956faaf43c254a719d06a"},{url:"/scp-teacher-repo/_next/static/media/bgEpub.1bc71a85.svg",revision:"94ed716f60d6045549454efe8a4e176b"},{url:"/scp-teacher-repo/_next/static/media/bgHtml.34052160.svg",revision:"5ba4a8f9697b01286492bfa44189eaa5"},{url:"/scp-teacher-repo/_next/static/media/bgMP4 .3a7ba3f1.svg",revision:"c76c53c622bb088d150c5786f66e267b"},{url:"/scp-teacher-repo/_next/static/media/bgPDF.c472fa0f.svg",revision:"66b10b1100269bff0e5d1be4c265b7fc"},{url:"/scp-teacher-repo/_next/static/media/bgQml.c586db62.svg",revision:"af3b4d444f7f710e69d6e70987372826"},{url:"/scp-teacher-repo/_next/static/media/bgUnit.18613f86.png",revision:"e277c890fe101981d594154f5a943198"},{url:"/scp-teacher-repo/_next/static/media/bgYouTube.88ef8c9a.svg",revision:"868360675ced350e8d50f933512463fc"},{url:"/scp-teacher-repo/_next/static/media/bgh5p.0e99f71f.png",revision:"f3cf8ca2b8b3ab3f63528e6353f19ec4"},{url:"/scp-teacher-repo/_next/static/media/c3bc380753a8436c-s.woff2",revision:"5a1b7c983a9dc0a87a2ff138e07ae822"},{url:"/scp-teacher-repo/_next/static/media/calendar.cc6f86a9.svg",revision:"53c356ac2ca2f88f16688bf11959d5d9"},{url:"/scp-teacher-repo/_next/static/media/checkMark.64064b29.svg",revision:"eb3f49a32dfa76f040f432e3659d2408"},{url:"/scp-teacher-repo/_next/static/media/checkbook.50e8b84e.svg",revision:"dae59419694eea09ccb27a1148a7cb04"},{url:"/scp-teacher-repo/_next/static/media/decorationBg.75e79682.png",revision:"a25bf7a874a9279e192b61dd0837f43d"},{url:"/scp-teacher-repo/_next/static/media/eafabf029ad39a43-s.p.woff2",revision:"43751174b6b810eb169101a20d8c26f8"},{url:"/scp-teacher-repo/_next/static/media/f10b8e9d91f3edcb-s.woff2",revision:"63af7d5e18e585fad8d0220e5d551da1"},{url:"/scp-teacher-repo/_next/static/media/f54d3b402c212b9e-s.woff2",revision:"07771519abf754f445a139aedac251dc"},{url:"/scp-teacher-repo/_next/static/media/fe0777f1195381cb-s.woff2",revision:"f2a04185547c36abfa589651236a9849"},{url:"/scp-teacher-repo/_next/static/media/h5p.a30a4035.png",revision:"e0849351db71332156a1317d7416e23c"},{url:"/scp-teacher-repo/_next/static/media/login-image.febfbcca.jpg",revision:"eac24e5d007c449b8b4d438d42925c90"},{url:"/scp-teacher-repo/_next/static/media/logo-light.18e3a461.png",revision:"f15c7edbbe5094d9ee109f80a8f55cfd"},{url:"/scp-teacher-repo/_next/static/media/menuIcon.9612beb2.svg",revision:"f00b4bc9001a821b63f691c5d7039dd3"},{url:"/scp-teacher-repo/_next/static/media/mp.1c53accf.png",revision:"47af8097f71d76992c393017a29eb9b6"},{url:"/scp-teacher-repo/_next/static/media/surveyForm.d2c43a9a.svg",revision:"435a34b2bd760795104cc49e2a00c1bc"},{url:"/scp-teacher-repo/_next/static/media/youtube.409551c8.svg",revision:"257c24177870961f42c50c6f1c86bc3a"},{url:"/scp-teacher-repo/decorationBg.png",revision:"a25bf7a874a9279e192b61dd0837f43d"},{url:"/scp-teacher-repo/firebase-messaging-sw.js",revision:"2f26585f801cc243376162ceb3dafa85"},{url:"/scp-teacher-repo/icon-192x192.png",revision:"a97bcfafee65e0f6090d9ec89b04cd90"},{url:"/scp-teacher-repo/icon-256x256.png",revision:"be40dfe4a8eea57a4282983f0561cd70"},{url:"/scp-teacher-repo/icon-384x384.png",revision:"c54f75b05de696df97b2c9d7a5d8b6d5"},{url:"/scp-teacher-repo/icon-512x512.png",revision:"8bf8039f5392aaaa7ea32874dbd3786b"},{url:"/scp-teacher-repo/images/404.png",revision:"d6c11ef667079b261f98700fae366901"},{url:"/scp-teacher-repo/images/appLogo.png",revision:"1dd3c376e6e6be5f7476c65bd307d005"},{url:"/scp-teacher-repo/images/favicon.ico",revision:"f15c7edbbe5094d9ee109f80a8f55cfd"},{url:"/scp-teacher-repo/images/logo-dark.png",revision:"4f5ea9f20441aa983de63894aefb740b"},{url:"/scp-teacher-repo/images/logo-light.png",revision:"f15c7edbbe5094d9ee109f80a8f55cfd"},{url:"/scp-teacher-repo/locales/en/common.json",revision:"ca4ee9ad62b9d4b13b92948958e11dc8"},{url:"/scp-teacher-repo/locales/hi/common.json",revision:"5e4738bdc454e3c1e8f1ca24f0b4c68a"},{url:"/scp-teacher-repo/locales/ml/common.json",revision:"7e68a8ad7e8fb8dd69edea0b665108c4"},{url:"/scp-teacher-repo/locales/mr/common.json",revision:"c2ee6d4dd8cc53c4470e1cdc832f8f03"},{url:"/scp-teacher-repo/locales/or/common.json",revision:"7ddc404b5888017f1e4a3cfe3281a1ca"},{url:"/scp-teacher-repo/locales/ur/common.json",revision:"a9c41fee57f115c1d9b6cdd120cf4616"},{url:"/scp-teacher-repo/manifest.json",revision:"c37f72a68879cd348ce5bf1634dad525"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/scp-teacher-repo",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:c,event:s,state:a})=>c&&"opaqueredirect"===c.type?new Response(c.body,{status:200,statusText:"OK",headers:c.headers}):c}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const c=e.pathname;return!c.startsWith("/api/auth/")&&!!c.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
