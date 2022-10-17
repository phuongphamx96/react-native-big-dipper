import { atom } from 'recoil';

import { DateFormat, SettingsState, Theme } from './types';

export const settingsAtom = atom<SettingsState>({
  key: 'settings',
  default: {
    theme: Theme.LIGHT,
    dateFormat: DateFormat.LOCALE,
  },
});
