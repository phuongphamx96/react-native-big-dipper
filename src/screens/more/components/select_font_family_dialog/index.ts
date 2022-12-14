import { useSelectionDialog } from '@rnbd/components';
import { FontFamily } from '@rnbd/recoil/settings';
import { useTranslation } from 'react-i18next';

import { useSelectFontFamily } from './hooks';

export const useSelectFontFamilyDialog = () => {
  const { t } = useTranslation();
  const { options, fontFamily, onSelectFontFamily } = useSelectFontFamily();

  const SelectFontFamilyDialog = useSelectionDialog<FontFamily>({
    title: t('screen.more.selectFontFamilyDialog.title'),
    value: fontFamily,
    onValueChange: (value) => {
      onSelectFontFamily(value as FontFamily);
      SelectFontFamilyDialog.close();
    },
    options,
  });

  return SelectFontFamilyDialog;
};
