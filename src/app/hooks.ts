import AsyncStorage from '@react-native-async-storage/async-storage';
import { orientationTypeState } from '@rnbd/recoil/app';
import {
  DateFormat,
  dateFormatState,
  FontFamily,
  fontFamilyState,
  Language,
  languageState,
  Theme,
  themeState,
} from '@rnbd/recoil/settings';
import {
  DATE_FORMAT_KEY,
  FONT_FAMILY_KEY,
  LANGUAGE_KEY,
  THEME_KEY,
} from '@rnbd/utils/constants/storage_keys';
import { equals } from 'ramda';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { hide } from 'react-native-bootsplash';
import { useOrientationChange } from 'react-native-orientation-locker';
import { useRecoilState, useSetRecoilState } from 'recoil';

export const useApp = () => {
  const deviceColorScheme = useColorScheme();
  const setOrientationType = useSetRecoilState(orientationTypeState);

  const [theme, setTheme] = useRecoilState(themeState);
  const setLanguage = useSetRecoilState(languageState);
  const setDateFormat = useSetRecoilState(dateFormatState);
  const [fontFamily, setFontFamily] = useRecoilState(fontFamilyState);

  const isDark = equals(theme, Theme.SYSTEM_DEFAULT)
    ? equals(deviceColorScheme, Theme.DARK)
    : equals(theme, Theme.DARK);

  useEffect(() => {
    const initApp = async () => {
      try {
        // restore saved settings
        const [
          [, savedTheme],
          [, savedLanguage],
          [, savedDateFormat],
          [, savedFontFamily],
        ] = await AsyncStorage.multiGet([
          THEME_KEY,
          LANGUAGE_KEY,
          DATE_FORMAT_KEY,
          FONT_FAMILY_KEY,
        ]);
        savedTheme && setTheme(savedTheme as Theme);
        savedLanguage && setLanguage(savedLanguage as Language);
        savedDateFormat && setDateFormat(savedDateFormat as DateFormat);
        savedFontFamily && setFontFamily(savedFontFamily as FontFamily);

        hide({ fade: true });
      } catch (error) {
        console.error('initApp', error);
      }
    };

    initApp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useOrientationChange((orientationType) => {
    setOrientationType(orientationType);
  });

  return { isDark, fontFamily };
};

export default useApp;
