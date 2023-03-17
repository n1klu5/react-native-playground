import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('i18n-js', () => ({
  currentLocale: () => 'en',
  t: (key: string, params: Record<string, string>) => {
    return `${key} ${JSON.stringify(params)}`;
  },
}));

jest.useFakeTimers();

export {};
