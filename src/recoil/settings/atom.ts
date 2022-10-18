import { atom } from 'recoil';

import { DateFormat, FontFamily, SettingsState, Theme } from './types';

export const settingsAtom = atom<SettingsState>({
  key: 'settings',
  default: {
    theme: Theme.LIGHT,
    dateFormat: DateFormat.LOCALE,
    fontFamily: FontFamily.GOOGLE_SANS,
  },
});
