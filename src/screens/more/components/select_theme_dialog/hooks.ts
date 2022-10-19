import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme, themeState } from '@rnbd/recoil/settings';
import { THEME_KEY } from '@rnbd/utils/constants/storage_keys';
import { equals } from 'ramda';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

import { ThemeOption } from './types';

export const useThemeOptions = (): ThemeOption[] => {
  const { t } = useTranslation();

  return [
    {
      value: Theme.LIGHT,
      label: t('screen.more.selectThemeDialog.options.light'),
    },
    {
      value: Theme.DARK,
      label: t('screen.more.selectThemeDialog.options.dark'),
    },
    {
      value: Theme.SYSTEM_DEFAULT,
      label: t('screen.more.common.options.systemDefault'),
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
