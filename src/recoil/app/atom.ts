import { OrientationType } from 'react-native-orientation-locker';
import { atom } from 'recoil';

import { AppState } from './types';

export const appAtom = atom<AppState>({
  key: 'app',
  default: {
    appLoading: false,
    orientationType: OrientationType.PORTRAIT,
  },
});
