import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Create a test theme
const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

// Custom render function with providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// Mock implementations for SSO testing
export const mockSearchParams = {
  get: jest.fn(),
};

export const mockRouter = {
  push: jest.fn(),
  replace: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  refresh: jest.fn(),
  prefetch: jest.fn(),
};

// SSO parameter generators
export const generateValidSSOParams = () => ({
  env: 'newton',
  tenantid: 'test-tenant-123',
  accesstoken: 'valid-access-token-123',
  USER_ID: 'test-user-456',
});

export const generateInvalidSSOParams = () => ({
  env: null,
  tenantid: null,
  accesstoken: null,
  USER_ID: null,
});

export const generatePartialSSOParams = () => ({
  env: 'newton',
  tenantid: 'test-tenant-123',
  accesstoken: null,
  USER_ID: null,
});

// Mock API responses
export const mockSuccessfulSSOResponse = {
  data: {
    success: true,
    result: {
      access_token: 'new-access-token',
      refresh_token: 'refresh-token',
      userId: 'test-user-456',
      username: 'testuser',
      firstName: 'Test',
      lastName: 'User',
      tenantData: [
        {
          tenantId: 'test-tenant-123',
          tenantName: 'Test Tenant',
          templateId: 'template-123',
        },
      ],
    },
  },
};

export const mockFailedSSOResponse = {
  data: {
    success: false,
    error: 'Authentication failed',
  },
};

export const mockUserIdResponse = {
  userId: 'test-user-456',
  username: 'testuser',
  firstName: 'Test',
  lastName: 'User',
  tenantData: [
    {
      tenantId: 'test-tenant-123',
      tenantName: 'Test Tenant',
      templateId: 'template-123',
    },
  ],
};

export const mockProfileCompletionResponse = {
  isProfileComplete: true,
  profileData: {
    name: 'Test User',
    email: 'test@example.com',
  },
};

export const mockAcademicYearResponse = {
  result: {
    response: [
      {
        year: '2024-25',
        startDate: '2024-04-01',
        endDate: '2025-03-31',
      },
    ],
  },
};

// Test data constants
export const TEST_CONSTANTS = {
  TENANT_ID: 'test-tenant-123',
  USER_ID: 'test-user-456',
  ACCESS_TOKEN: 'valid-access-token-123',
  SSO_PROVIDER: 'newton',
  ROLE_ID: 'STUDENT',
  API_BASE_URL: 'https://api.test.com',
};

// re-export everything
export * from '@testing-library/react';
export { customRender as render };

// Simple test to satisfy Jest requirement
describe('SSO Test Utils', () => {
  it('should export test utilities', () => {
    expect(generateValidSSOParams).toBeDefined();
    expect(mockSuccessfulSSOResponse).toBeDefined();
  });
});
