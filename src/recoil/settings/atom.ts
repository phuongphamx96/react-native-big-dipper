import { atom } from 'recoil';

import {
  DateFormat,
  FontFamily,
  Language,
  SettingsState,
  Theme,
} from './types';

export const settingsAtom = atom<SettingsState>({
  key: 'settings',
  default: {
    theme: Theme.LIGHT,
    language: Language.ENGLISH,
    dateFormat: DateFormat.LOCALE,
    fontFamily: FontFamily.GOOGLE_SANS,
  },
});
