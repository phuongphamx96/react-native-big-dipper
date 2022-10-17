import AsyncStorage from '@react-native-async-storage/async-storage';
import { orientationTypeState } from '@rnbd/recoil/app';
import {
  DateFormat,
  dateFormatState,
  Theme,
  themeState,
} from '@rnbd/recoil/settings';
import { DATE_FORMAT_KEY, THEME_KEY } from '@rnbd/utils/constants/storage_keys';
import { equals } from 'ramda';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { hide } from 'react-native-bootsplash';
import { useOrientationChange } from 'react-native-orientation-locker';
import { useRecoilState, useSetRecoilState } from 'recoil';

export const useApp = () => {
  const deviceColorScheme = useColorScheme();
  const [theme, setTheme] = useRecoilState(themeState);
  const setOrientationType = useSetRecoilState(orientationTypeState);
  const setDateFormat = useSetRecoilState(dateFormatState);

  const isDark = equals(theme, Theme.DEVICE)
    ? equals(deviceColorScheme, Theme.DARK)
    : equals(theme, Theme.DARK);

  useEffect(() => {
    const initApp = async () => {
      try {
        // restore saved settings
        const [[, savedTheme], [, savedDateFormat]] =
          await AsyncStorage.multiGet([THEME_KEY, DATE_FORMAT_KEY]);
        savedTheme && setTheme(savedTheme as Theme);
        savedDateFormat && setDateFormat(savedDateFormat as DateFormat);
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

  return { isDark };
};

export default useApp;
