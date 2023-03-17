import {ColorMode, type StorageManager} from 'native-base';

import {loadString, saveString} from '../utils/storage';

export const THEME_KEY = '@native-playground/color-mode';

const colorModeManager: StorageManager = {
  get: async () => {
    let val = await loadString(THEME_KEY);
    return val === 'dark' ? 'dark' : 'light';
  },
  set: async (value: ColorMode) => {
    if (value) {
      await saveString(THEME_KEY, value);
    }
  },
};

export default colorModeManager;
