import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme, themeState } from '@rnbd/recoil/settings';
import { THEME_KEY } from '@rnbd/utils/constants/storage_keys';
import { equals } from 'ramda';
import { useRecoilState } from 'recoil';

import { ThemeOption } from './types';

export const useThemeOptions = (): ThemeOption[] => {
  return [
    {
      value: Theme.LIGHT,
      label: 'Light',
    },
    {
      value: Theme.DARK,
      label: 'Dark',
    },
    {
      value: Theme.DEVICE,
      label: 'System default',
    },
  ];
};

export const useSelectTheme = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const options = useThemeOptions();

  const onSelectTheme = async (newTheme: Theme) => {
    try {
      if (!equals(theme, newTheme)) {
        await AsyncStorage.setItem(THEME_KEY, newTheme);
        setTheme(newTheme);
      }
    } catch (error) {
      console.error('onSelectTheme', error);
    }
  };

  return { options, theme, setTheme, onSelectTheme };
};
