import { useSelectionDialog } from '@rnbd/components';
import { Language } from '@rnbd/recoil/settings';
import { useTranslation } from 'react-i18next';

import { useSelectLanguage } from './hooks';

export const useSelectLanguageDialog = () => {
  const { t } = useTranslation();
  const { options, language, onSelectLanguage } = useSelectLanguage();

  const SelectLanguageDialog = useSelectionDialog<Language>({
    title: t('screen.more.selectLanguageDialog.title'),
    value: language,
    onValueChange: (value) => {
      onSelectLanguage(value as Language);
      SelectLanguageDialog.close();
    },
    options,
  });

  return SelectLanguageDialog;
};
