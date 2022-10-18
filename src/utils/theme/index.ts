import { FontFamily, fontFamilyState } from '@rnbd/recoil/settings';
import { cond, equals } from 'ramda';
import { MD3Theme, useTheme as usePaperTheme } from 'react-native-paper';
import { useRecoilValue } from 'recoil';

import { TextVariant } from './types';

const mediumVariants: TextVariant[] = [
  'titleMedium',
  'titleSmall',
  'labelLarge',
  'labelMedium',
  'labelSmall',
  'bodyLarge',
  'bodyMedium',
  'bodySmall',
];

export const getFontFamilyName = (
  fontFamily: FontFamily,
  variant?: TextVariant,
) => {
  if (equals(fontFamily, FontFamily.SYSTEM_DEFAULT)) {
    return undefined;
  }

  return variant && mediumVariants.includes(variant)
    ? `${fontFamily}-Medium`
    : `${fontFamily}-Regular`;
};

export const useTheme = (variant?: TextVariant) => {
  const fontFamily = useRecoilValue(fontFamilyState);
  return {
    ...(usePaperTheme() as MD3Theme),
    fontFamily: getFontFamilyName(fontFamily, variant),
  };
};
