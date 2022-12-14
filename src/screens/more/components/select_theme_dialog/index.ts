import { useSelectionDialog } from '@rnbd/components';
import { Theme } from '@rnbd/recoil/settings';
import { useTranslation } from 'react-i18next';

import { useSelectTheme } from './hooks';

export const useSelectThemeDialog = () => {
  const { t } = useTranslation();
  const { options, theme, onSelectTheme } = useSelectTheme();

  const SelectThemeDialog = useSelectionDialog<Theme>({
    title: t('screen.more.selectThemeDialog.title'),
    value: theme,
    onValueChange: (value) => {
      onSelectTheme(value as Theme);
      SelectThemeDialog.close();
    },
    options,
  });

  return SelectThemeDialog;
};
