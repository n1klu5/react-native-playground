import React from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import {AppNavigator} from './app/navigators';
import {ErrorBoundary} from './app/screens/errorScreen';
import {ThemeProvider} from './app/theme';
import Config from './app/config';

function App(): JSX.Element {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ThemeProvider>
        <ErrorBoundary catchErrors={Config.catchErrors}>
          <AppNavigator />
        </ErrorBoundary>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
