import { jest } from '@jest/globals';

// Mock the RestClient
export const mockPost = jest.fn();
export const mockGet = jest.fn();

jest.mock('@learner/utils/API/RestClient', () => ({
  post: mockPost,
  get: mockGet,
}));

// Mock LoginService
export const mockGetUserId = jest.fn();
jest.mock('@learner/utils/API/LoginService', () => ({
  getUserId: mockGetUserId,
  login: jest.fn(),
}));

// Mock UserService
export const mockProfileCompletionCheck = jest.fn();
jest.mock('@learner/utils/API/userService', () => ({
  profileComplitionCheck: mockProfileCompletionCheck,
}));

// Mock AcademicYearService
export const mockGetAcademicYear = jest.fn();
jest.mock('@learner/utils/API/AcademicYearService', () => ({
  getAcademicYear: mockGetAcademicYear,
}));

// Mock Toast Component
export const mockShowToastMessage = jest.fn();
jest.mock('@learner/components/ToastComponent/Toastify', () => ({
  showToastMessage: mockShowToastMessage,
}));

// Mock Telemetry
export const mockTelemetryFactory = {
  interact: jest.fn(),
  impression: jest.fn(),
  start: jest.fn(),
  end: jest.fn(),
};
jest.mock('@shared-lib-v2/DynamicForm/utils/telemetry', () => ({
  telemetryFactory: mockTelemetryFactory,
}));

// Mock Google Analytics
export const mockLogEvent = jest.fn();
jest.mock('@learner/utils/googleAnalytics', () => ({
  logEvent: mockLogEvent,
}));

// Mock Header Component - completely mock it to avoid LanguageProvider issues
jest.mock('@learner/components/Header/Header', () => {
  return function MockHeader() {
    return require('react').createElement(
      'div',
      { 'data-testid': 'mock-header' },
      'Header'
    );
  };
});

// Mock app constants
jest.mock('@learner/utils/app.constant', () => ({
  RoleId: {
    STUDENT: 'STUDENT',
    TEACHER: 'TEACHER',
    ADMIN: 'ADMIN',
  },
  TenantName: {
    PRATHAM: 'pratham',
  },
}));

// Mock useTranslation hook

// Mock the LanguageContext directly
jest.mock('@shared-lib-v2/DynamicForm/utils/Helper', () => ({
  getDeviceId: jest.fn(() => 'test-device-id'),
}));

// Mock the LanguageContext
jest.mock('@shared-lib-v2/lib/context/LanguageContext', () => ({
  useTranslation: () => ({
    t: (key: string) => key, // Return the key as the translation
    setLanguage: jest.fn(),
  }),
}));

// Mock the specific path that Header is importing from
jest.mock('@shared-lib', () => ({
  useTranslation: () => ({
    t: (key: string) => key, // Return the key as the translation
    setLanguage: jest.fn(),
  }),
}));

// Reset all mocks
export const resetAllMocks = () => {
  mockPost.mockReset();
  mockGet.mockReset();
  mockGetUserId.mockReset();
  mockProfileCompletionCheck.mockReset();
  mockGetAcademicYear.mockReset();
  mockShowToastMessage.mockReset();
  mockTelemetryFactory.interact.mockReset();
  mockTelemetryFactory.impression.mockReset();
  mockTelemetryFactory.start.mockReset();
  mockTelemetryFactory.end.mockReset();
  mockLogEvent.mockReset();
};
