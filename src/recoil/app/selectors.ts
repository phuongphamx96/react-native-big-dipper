import { mergeDeepRight } from 'ramda';
import { selector } from 'recoil';

import { appAtom } from './atom';
import { AppState } from './types';

export const appLoadingState = selector({
  key: 'appLoadingState',
  get: ({ get }) => {
    return get(appAtom).appLoading;
  },
  set: ({ get, set }, appLoading) => {
    set(appAtom, mergeDeepRight(get(appAtom), { appLoading }) as AppState);
  },
});

export const orientationTypeState = selector({
  key: 'orientationTypeState',
  get: ({ get }) => {
    return get(appAtom).orientationType;
  },
  set: ({ get, set }, orientationType) => {
    set(appAtom, mergeDeepRight(get(appAtom), { orientationType }) as AppState);
  },
});
