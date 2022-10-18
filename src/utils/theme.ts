import { FontFamily, fontFamilyState } from '@rnbd/recoil/settings';
import { equals } from 'ramda';
import {
  MD3Theme,
  TextProps,
  useTheme as usePaperTheme,
} from 'react-native-paper';
import { useRecoilValue } from 'recoil';

export const useTheme = (variant?: TextProps['variant']) => {
  const fontFamily = useRecoilValue(fontFamilyState);

  const mediumVariants: TextProps['variant'][] = [
    'titleMedium',
    'titleSmall',
    'labelLarge',
    'labelMedium',
    'labelSmall',
    'bodyLarge',
    'bodyMedium',
    'bodySmall',
  ];

  return {
    ...(usePaperTheme() as MD3Theme),
    fontFamily: equals(fontFamily, FontFamily.SYSTEM_DEFAULT)
      ? undefined
      : mediumVariants.includes(variant)
      ? `${fontFamily}-Medium`
      : `${fontFamily}-Regular`,
  };
};
