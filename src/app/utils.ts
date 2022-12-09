import { themeFromSourceColor } from '@material/material-color-utilities';
import { FontFamily } from '@rnbd/recoil/settings';
import { rgba2rgb } from '@rnbd/utils/color';
import { getFontFamilyName } from '@rnbd/utils/theme';
import { TextVariant } from '@rnbd/utils/theme/types';
import Color from 'color';
import { clone, equals, mapObjIndexed, mergeDeepRight } from 'ramda';
import { MD3DarkTheme, MD3LightTheme, MD3Theme } from 'react-native-paper';

const ALPHA_LEVEL1 = 0.05;
const ALPHA_LEVEL2 = 0.08;
const ALPHA_LEVEL3 = 0.11;
const ALPHA_LEVEL4 = 0.12;
const ALPHA_LEVEL5 = 0.14;

export const createTheme = (
  isDark: boolean,
  fontFamily: FontFamily,
): MD3Theme => {
  const paperTheme = isDark ? MD3DarkTheme : MD3LightTheme;

  const {
    schemes: { dark, light },
    palettes: { primary },
  } = themeFromSourceColor(Color('#FD3B4C').rgbNumber());

  const colors = mapObjIndexed((item) => {
    return Color(item).hexa();
  }, (isDark ? dark : light).toJSON());

  const customFonts = clone(paperTheme.fonts);

  const RGBA_DARK = primary.tone(80);
  const RGB_DARK = primary.tone(80);
  const RGBA_LIGHT = primary.tone(40);
  const RGB_LIGHT = primary.tone(99);

  const getElevationColor = (rgba: number, rgb: number, alpha: number) => {
    return rgba2rgb(Color(rgba).alpha(alpha), Color(rgb), isDark).string();
  };

  if (!equals(fontFamily, FontFamily.SYSTEM_DEFAULT)) {
    Object.keys(customFonts).forEach((key) => {
      customFonts[key as TextVariant].fontFamily =
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        getFontFamilyName(fontFamily, key as TextVariant)!;
    });
  }

  return mergeDeepRight(paperTheme, {
    fonts: customFonts,
    colors: {
      ...colors,
      elevation: isDark
        ? {
            level0: 'transparent',
            level1: getElevationColor(RGBA_DARK, RGB_DARK, ALPHA_LEVEL1),
            level2: getElevationColor(RGBA_DARK, RGB_DARK, ALPHA_LEVEL2),
            level3: getElevationColor(RGBA_DARK, RGB_DARK, ALPHA_LEVEL3),
            level4: getElevationColor(RGBA_DARK, RGB_DARK, ALPHA_LEVEL4),
            level5: getElevationColor(RGBA_DARK, RGB_DARK, ALPHA_LEVEL5),
          }
        : {
            level0: 'transparent',
            level1: getElevationColor(RGBA_LIGHT, RGB_LIGHT, ALPHA_LEVEL1),
            level2: getElevationColor(RGBA_LIGHT, RGB_LIGHT, ALPHA_LEVEL2),
            level3: getElevationColor(RGBA_LIGHT, RGB_LIGHT, ALPHA_LEVEL3),
            level4: getElevationColor(RGBA_LIGHT, RGB_LIGHT, ALPHA_LEVEL4),
            level5: getElevationColor(RGBA_LIGHT, RGB_LIGHT, ALPHA_LEVEL5),
          },
    },
  });
};
