import React, {PropsWithChildren} from 'react';
import {
  extendTheme,
  NativeBaseProvider,
  type NativeBaseProviderProps,
} from 'native-base';

import colorModeManager from './colorManager';

const newColorTheme = {};

const theme = extendTheme({
  colors: newColorTheme,
  radii: {
    '8xl': 75,
  },
});

interface ThemeProviderProps
  extends PropsWithChildren<NativeBaseProviderProps> {}

export function ThemeProvider({children, ...rest}: ThemeProviderProps) {
  return (
    <NativeBaseProvider
      theme={theme}
      colorModeManager={colorModeManager}
      {...rest}>
      {children}
    </NativeBaseProvider>
  );
}
