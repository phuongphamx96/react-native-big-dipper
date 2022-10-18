import { themeFromSourceColor } from '@material/material-color-utilities';
import { FontFamily } from '@rnbd/recoil/settings';
import { rgba2rgb } from '@rnbd/utils/color';
import Color from 'color';
import { clone, equals, mapObjIndexed, mergeDeepRight } from 'ramda';
import { MD3DarkTheme, MD3LightTheme, MD3Theme } from 'react-native-paper';
import { MD3Typescale } from 'react-native-paper/lib/typescript/types';

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

  if (!equals(fontFamily, FontFamily.SYSTEM_DEFAULT)) {
    Object.keys(customFonts).forEach((key) => {
      customFonts[
        key as keyof MD3Typescale
      ].fontFamily = `${fontFamily}-Regular`;
    });
  }

  return mergeDeepRight(paperTheme, {
    fonts: customFonts,
    colors: {
      ...colors,
      elevation: isDark
        ? {
            level0: 'transparent',
            level1: rgba2rgb(
              Color(primary.tone(80)).alpha(0.05),
              Color(primary.tone(80)),
              isDark,
            ).string(),
            level2: rgba2rgb(
              Color(primary.tone(80)).alpha(0.08),
              Color(primary.tone(80)),
              isDark,
            ).string(),
            level3: rgba2rgb(
              Color(primary.tone(80)).alpha(0.11),
              Color(primary.tone(80)),
              isDark,
            ).string(),
            level4: rgba2rgb(
              Color(primary.tone(80)).alpha(0.12),
              Color(primary.tone(80)),
              isDark,
            ).string(),
            level5: rgba2rgb(
              Color(primary.tone(80)).alpha(0.14),
              Color(primary.tone(80)),
              isDark,
            ).string(),
          }
        : {
            level0: 'transparent',
            level1: rgba2rgb(
              Color(primary.tone(40)).alpha(0.05),
              Color(primary.tone(99)),
              isDark,
            ).string(),
            level2: rgba2rgb(
              Color(primary.tone(40)).alpha(0.08),
              Color(primary.tone(99)),
              isDark,
            ).string(),
            level3: rgba2rgb(
              Color(primary.tone(40)).alpha(0.11),
              Color(primary.tone(99)),
              isDark,
            ).string(),
            level4: rgba2rgb(
              Color(primary.tone(40)).alpha(0.12),
              Color(primary.tone(99)),
              isDark,
            ).string(),
            level5: rgba2rgb(
              Color(primary.tone(40)).alpha(0.14),
              Color(primary.tone(99)),
              isDark,
            ).string(),
          },
    },
  });
};
