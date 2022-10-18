import { mergeDeepRight } from 'ramda';
import { selector } from 'recoil';

import { settingsAtom } from './atom';
import { SettingsState } from './types';

export const themeState = selector({
  key: 'themeState',
  get: ({ get }) => {
    return get(settingsAtom).theme;
  },
  set: ({ get, set }, theme) => {
    set(
      settingsAtom,
      mergeDeepRight(get(settingsAtom), { theme }) as SettingsState,
    );
  },
});

export const dateFormatState = selector({
  key: 'dateFormatState',
  get: ({ get }) => {
    return get(settingsAtom).dateFormat;
  },
  set: ({ get, set }, dateFormat) => {
    set(
      settingsAtom,
      mergeDeepRight(get(settingsAtom), { dateFormat }) as SettingsState,
    );
  },
});

export const fontFamilyState = selector({
  key: 'fontFamilyState',
  get: ({ get }) => {
    return get(settingsAtom).fontFamily;
  },
  set: ({ get, set }, fontFamily) => {
    set(
      settingsAtom,
      mergeDeepRight(get(settingsAtom), { fontFamily }) as SettingsState,
    );
  },
});
