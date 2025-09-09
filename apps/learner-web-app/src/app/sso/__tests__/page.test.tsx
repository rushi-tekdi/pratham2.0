import React from 'react';
import {
  render,
  screen,
  waitFor,
  act,
} from '../../../__tests__/utils/sso-test-utils';
import { useRouter, useSearchParams } from 'next/navigation';
import SSOPage from '../page';
import {
  mockPost,
  mockGetUserId,
  mockProfileCompletionCheck,
  mockGetAcademicYear,
  mockShowToastMessage,
  mockTelemetryFactory,
  mockLogEvent,
  resetAllMocks,
} from '../../../__tests__/mocks/api-mocks';
import {
  generateValidSSOParams,
  generateInvalidSSOParams,
  generatePartialSSOParams,
  mockSuccessfulSSOResponse,
  mockFailedSSOResponse,
  mockUserIdResponse,
  mockProfileCompletionResponse,
  mockAcademicYearResponse,
} from '../../../__tests__/utils/sso-test-utils';

// Mock next/navigation
const mockRouterPush = jest.fn();
const mockSearchParamsGet = jest.fn();

(useRouter as jest.Mock).mockReturnValue({
  push: mockRouterPush,
  replace: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  refresh: jest.fn(),
  prefetch: jest.fn(),
});

(useSearchParams as jest.Mock).mockReturnValue({
  get: mockSearchParamsGet,
});

describe('SSOPage', () => {
  beforeEach(() => {
    resetAllMocks();
    jest.clearAllMocks();
    mockRouterPush.mockClear();
    mockSearchParamsGet.mockClear();
  });

  describe('Component Rendering', () => {
    it('should render loading state initially', () => {
      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );

      render(<SSOPage />);

      expect(screen.getByTestId('sso-loading')).toBeInTheDocument();
      expect(screen.getByText(/Authenticating/i)).toBeInTheDocument();
    });

    it('should render header component', () => {
      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );

      render(<SSOPage />);

      expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    });

    it('should render welcome GIF', () => {
      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );

      render(<SSOPage />);

      const welcomeImage = screen.getByAltText('Welcome');
      expect(welcomeImage).toBeInTheDocument();
    });
  });

  describe('Parameter Validation', () => {
    it('should handle valid SSO parameters', async () => {
      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );
      mockPost.mockResolvedValue(mockSuccessfulSSOResponse);
      mockGetUserId.mockResolvedValue(mockUserIdResponse);
      mockProfileCompletionCheck.mockResolvedValue(
        mockProfileCompletionResponse
      );
      mockGetAcademicYear.mockResolvedValue(mockAcademicYearResponse);

      await act(async () => {
        render(<SSOPage />);
      });

      await waitFor(() => {
        expect(mockPost).toHaveBeenCalledWith(
          'https://api.test.com/user/sso/authenticate',
          {
            accessToken: validParams.accesstoken,
            userId: validParams.USER_ID,
            tenantId: validParams.tenantid,
            roleId: 'STUDENT',
            ssoProvider: validParams.env,
          }
        );
      });
    });

    it('should handle missing required parameters', async () => {
      const invalidParams = generateInvalidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => invalidParams[key as keyof typeof invalidParams]
      );

      await act(async () => {
        render(<SSOPage />);
      });

      await waitFor(() => {
        expect(mockShowToastMessage).toHaveBeenCalledWith(
          expect.stringContaining('Missing required parameters'),
          'error'
        );
      });

      expect(mockPost).not.toHaveBeenCalled();
    });

    it('should handle partial parameters correctly', async () => {
      const partialParams = generatePartialSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => partialParams[key as keyof typeof partialParams]
      );

      await act(async () => {
        render(<SSOPage />);
      });

      await waitFor(() => {
        expect(mockShowToastMessage).toHaveBeenCalledWith(
          expect.stringContaining('Missing required parameters'),
          'error'
        );
      });
    });

    it('should validate each required parameter individually', async () => {
      const testCases = [
        { env: null, tenantid: 'test', accesstoken: 'test', USER_ID: 'test' },
        { env: 'test', tenantid: null, accesstoken: 'test', USER_ID: 'test' },
        { env: 'test', tenantid: 'test', accesstoken: null, USER_ID: 'test' },
        { env: 'test', tenantid: 'test', accesstoken: 'test', USER_ID: null },
      ];

      for (const params of testCases) {
        resetAllMocks();
        mockSearchParamsGet.mockImplementation(
          (key: string) => params[key as keyof typeof params]
        );

        await act(async () => {
          render(<SSOPage />);
        });

        await waitFor(() => {
          expect(mockShowToastMessage).toHaveBeenCalledWith(
            expect.stringContaining('Missing required parameters'),
            'error'
          );
        });
      }
    });
  });

  describe('API Integration', () => {
    it('should call SSO authenticate API with correct parameters', async () => {
      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );
      mockPost.mockResolvedValue(mockSuccessfulSSOResponse);
      mockGetUserId.mockResolvedValue(mockUserIdResponse);
      mockProfileCompletionCheck.mockResolvedValue(
        mockProfileCompletionResponse
      );

      await act(async () => {
        render(<SSOPage />);
      });

      await waitFor(() => {
        expect(mockPost).toHaveBeenCalledWith(
          'https://api.test.com/user/sso/authenticate',
          {
            accessToken: 'valid-access-token-123',
            userId: 'test-user-456',
            tenantId: 'test-tenant-123',
            roleId: 'STUDENT',
            ssoProvider: 'newton',
          }
        );
      });
    });

    it('should handle successful SSO authentication', async () => {
      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );
      mockPost.mockResolvedValue(mockSuccessfulSSOResponse);
      mockGetUserId.mockResolvedValue(mockUserIdResponse);
      mockProfileCompletionCheck.mockResolvedValue(
        mockProfileCompletionResponse
      );
      mockGetAcademicYear.mockResolvedValue(mockAcademicYearResponse);

      await act(async () => {
        render(<SSOPage />);
      });

      await waitFor(
        () => {
          expect(mockGetUserId).toHaveBeenCalled();
          expect(mockProfileCompletionCheck).toHaveBeenCalled();
          expect(mockGetAcademicYear).toHaveBeenCalled();
        },
        { timeout: 5000 }
      );
    });

    it('should handle API authentication failure', async () => {
      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );
      mockPost.mockResolvedValue(mockFailedSSOResponse);

      await act(async () => {
        render(<SSOPage />);
      });

      await waitFor(() => {
        expect(mockShowToastMessage).toHaveBeenCalledWith(
          'SSO Authentication failed. Please try again.',
          'error'
        );
      });
    });

    it('should handle network errors during API calls', async () => {
      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );
      mockPost.mockRejectedValue(new Error('Network error'));

      await act(async () => {
        render(<SSOPage />);
      });

      await waitFor(() => {
        expect(mockShowToastMessage).toHaveBeenCalledWith(
          expect.stringContaining('error'),
          'error'
        );
      });
    });
  });

  describe('User Data Management', () => {
    it('should store user data in localStorage after successful authentication', async () => {
      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );
      mockPost.mockResolvedValue(mockSuccessfulSSOResponse);
      mockGetUserId.mockResolvedValue(mockUserIdResponse);
      mockProfileCompletionCheck.mockResolvedValue(
        mockProfileCompletionResponse
      );
      mockGetAcademicYear.mockResolvedValue(mockAcademicYearResponse);

      const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

      await act(async () => {
        render(<SSOPage />);
      });

      await waitFor(
        () => {
          expect(setItemSpy).toHaveBeenCalledWith('token', expect.any(String));
          expect(setItemSpy).toHaveBeenCalledWith('userId', expect.any(String));
          expect(setItemSpy).toHaveBeenCalledWith('name', expect.any(String));
        },
        { timeout: 5000 }
      );

      setItemSpy.mockRestore();
    });

    it('should handle user data extraction correctly', async () => {
      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );
      mockPost.mockResolvedValue(mockSuccessfulSSOResponse);
      mockGetUserId.mockResolvedValue(mockUserIdResponse);
      mockProfileCompletionCheck.mockResolvedValue(
        mockProfileCompletionResponse
      );

      const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

      await act(async () => {
        render(<SSOPage />);
      });

      await waitFor(
        () => {
          expect(setItemSpy).toHaveBeenCalledWith('userId', 'test-user-456');
          expect(setItemSpy).toHaveBeenCalledWith('name', 'Test');
        },
        { timeout: 5000 }
      );

      setItemSpy.mockRestore();
    });
  });

  describe('Navigation and Routing', () => {
    it('should redirect to dashboard after successful authentication', async () => {
      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );
      mockPost.mockResolvedValue(mockSuccessfulSSOResponse);
      mockGetUserId.mockResolvedValue(mockUserIdResponse);
      mockProfileCompletionCheck.mockResolvedValue(
        mockProfileCompletionResponse
      );
      mockGetAcademicYear.mockResolvedValue(mockAcademicYearResponse);

      await act(async () => {
        render(<SSOPage />);
      });

      await waitFor(
        () => {
          expect(mockRouterPush).toHaveBeenCalledWith('/dashboard');
        },
        { timeout: 5000 }
      );
    });

    it('should redirect to profile completion if profile is incomplete', async () => {
      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );
      mockPost.mockResolvedValue(mockSuccessfulSSOResponse);
      mockGetUserId.mockResolvedValue(mockUserIdResponse);
      mockProfileCompletionCheck.mockResolvedValue({
        ...mockProfileCompletionResponse,
        isProfileComplete: false,
      });

      await act(async () => {
        render(<SSOPage />);
      });

      await waitFor(
        () => {
          expect(mockRouterPush).toHaveBeenCalledWith('/profile');
        },
        { timeout: 5000 }
      );
    });

    it('should redirect to login page on authentication failure', async () => {
      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );
      mockPost.mockResolvedValue(mockFailedSSOResponse);

      await act(async () => {
        render(<SSOPage />);
      });

      await waitFor(
        () => {
          expect(mockRouterPush).toHaveBeenCalledWith('/login');
        },
        { timeout: 5000 }
      );
    });
  });

  describe('Telemetry and Analytics', () => {
    it('should fire telemetry events for successful authentication', async () => {
      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );
      mockPost.mockResolvedValue(mockSuccessfulSSOResponse);
      mockGetUserId.mockResolvedValue(mockUserIdResponse);
      mockProfileCompletionCheck.mockResolvedValue(
        mockProfileCompletionResponse
      );
      mockGetAcademicYear.mockResolvedValue(mockAcademicYearResponse);

      await act(async () => {
        render(<SSOPage />);
      });

      await waitFor(
        () => {
          expect(mockTelemetryFactory.interact).toHaveBeenCalledWith(
            expect.objectContaining({
              edata: expect.objectContaining({
                id: 'sso-login-success',
                type: 'CLICK',
              }),
            })
          );
        },
        { timeout: 5000 }
      );
    });

    it('should fire Google Analytics events', async () => {
      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );
      mockPost.mockResolvedValue(mockSuccessfulSSOResponse);
      mockGetUserId.mockResolvedValue(mockUserIdResponse);
      mockProfileCompletionCheck.mockResolvedValue(
        mockProfileCompletionResponse
      );

      await act(async () => {
        render(<SSOPage />);
      });

      await waitFor(
        () => {
          expect(mockLogEvent).toHaveBeenCalledWith(
            expect.objectContaining({
              action: 'sso_login_success',
            })
          );
        },
        { timeout: 5000 }
      );
    });

    it('should fire error telemetry events for failed authentication', async () => {
      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );
      mockPost.mockResolvedValue(mockFailedSSOResponse);

      await act(async () => {
        render(<SSOPage />);
      });

      await waitFor(() => {
        expect(mockTelemetryFactory.interact).toHaveBeenCalledWith(
          expect.objectContaining({
            edata: expect.objectContaining({
              id: 'sso-login-error',
              type: 'CLICK',
            }),
          })
        );
      });
    });
  });

  describe('Error Handling', () => {
    it('should handle missing environment variables gracefully', async () => {
      // Temporarily remove env var
      const originalEnv = process.env.NEXT_PUBLIC_MIDDLEWARE_URL;
      delete process.env.NEXT_PUBLIC_MIDDLEWARE_URL;

      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );

      await act(async () => {
        render(<SSOPage />);
      });

      await waitFor(() => {
        expect(mockShowToastMessage).toHaveBeenCalledWith(
          expect.stringContaining('Configuration error'),
          'error'
        );
      });

      // Restore env var
      process.env.NEXT_PUBLIC_MIDDLEWARE_URL = originalEnv;
    });

    it('should prevent duplicate authentication calls', async () => {
      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );
      mockPost.mockResolvedValue(mockSuccessfulSSOResponse);

      await act(async () => {
        render(<SSOPage />);
      });

      // Wait for first call to complete
      await waitFor(() => {
        expect(mockPost).toHaveBeenCalledTimes(1);
      });

      // Verify no additional calls are made
      expect(mockPost).toHaveBeenCalledTimes(1);
    });

    it('should handle component unmounting during async operations', async () => {
      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );

      // Mock a delayed response
      mockPost.mockImplementation(
        () =>
          new Promise((resolve) => {
            setTimeout(() => resolve(mockSuccessfulSSOResponse), 1000);
          })
      );

      const { unmount } = render(<SSOPage />);

      // Unmount component before async operation completes
      act(() => {
        unmount();
      });

      // Should not cause errors or warnings
      await waitFor(() => {
        expect(mockPost).toHaveBeenCalled();
      });
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA labels for loading state', () => {
      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );

      render(<SSOPage />);

      const loadingElement = screen.getByRole('status');
      expect(loadingElement).toHaveAttribute('aria-live', 'polite');
    });

    it('should have proper heading structure', () => {
      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );

      render(<SSOPage />);

      const heading = screen.getByRole('heading');
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/Authenticating/i);
    });
  });

  describe('Performance', () => {
    it('should complete authentication flow within reasonable time', async () => {
      const validParams = generateValidSSOParams();
      mockSearchParamsGet.mockImplementation(
        (key: string) => validParams[key as keyof typeof validParams]
      );
      mockPost.mockResolvedValue(mockSuccessfulSSOResponse);
      mockGetUserId.mockResolvedValue(mockUserIdResponse);
      mockProfileCompletionCheck.mockResolvedValue(
        mockProfileCompletionResponse
      );

      const startTime = Date.now();

      await act(async () => {
        render(<SSOPage />);
      });

      await waitFor(
        () => {
          expect(mockRouterPush).toHaveBeenCalled();
        },
        { timeout: 3000 }
      );

      const endTime = Date.now();
      const duration = endTime - startTime;

      expect(duration).toBeLessThan(3000); // Should complete within 3 seconds
    });
  });
});
