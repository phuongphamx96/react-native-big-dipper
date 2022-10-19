import {
  dateFormatState,
  fontFamilyState,
  languageState,
  themeState,
} from '@rnbd/recoil/settings';
import { indexBy, prop } from 'ramda';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';

import {
  useDateFormatOptions,
  useFontFamilyOptions,
  useLanguageOptions,
  useSelectDateFormatDialog,
  useSelectFontFamilyDialog,
  useSelectLanguageDialog,
  useSelectThemeDialog,
  useThemeOptions,
} from './components';
import { Section } from './types';

export const useMore = () => {
  const { t } = useTranslation();

  const themeOptions = useThemeOptions();
  const theme = useRecoilValue(themeState);
  const SelectThemeDialog = useSelectThemeDialog();

  const languageOptions = useLanguageOptions();
  const language = useRecoilValue(languageState);
  const SelectLanguageDialog = useSelectLanguageDialog();

  const dateFormatOptions = useDateFormatOptions();
  const dateFormat = useRecoilValue(dateFormatState);
  const SelectDateFormatDialog = useSelectDateFormatDialog();

  const fontFamilyOptions = useFontFamilyOptions();
  const fontFamily = useRecoilValue(fontFamilyState);
  const SelectFontFamilyDialog = useSelectFontFamilyDialog();

  const sections: Section[] = [
    {
      title: t('screen.more.sections.settings.title'),
      items: [
        {
          formattedTitle: t('screen.more.sections.settings.items.theme.title'),
          formattedDescription: indexBy(prop('value'), themeOptions)[theme]
            .label,
          leftIcon: 'theme-light-dark',
          onPress: SelectThemeDialog.open,
        },
        {
          formattedTitle: t(
            'screen.more.sections.settings.items.language.title',
          ),
          formattedDescription: indexBy(prop('value'), languageOptions)[
            language
          ].label,
          leftIcon: 'translate',
          onPress: SelectLanguageDialog.open,
        },
        {
          formattedTitle: t(
            'screen.more.sections.settings.items.dateFormat.title',
          ),
          formattedDescription: indexBy(prop('value'), dateFormatOptions)[
            dateFormat
          ].label,
          leftIcon: 'clock-outline',
          onPress: SelectDateFormatDialog.open,
        },
        {
          formattedTitle: t(
            'screen.more.sections.settings.items.fontFamily.title',
          ),
          formattedDescription: indexBy(prop('value'), fontFamilyOptions)[
            fontFamily
          ].label,
          leftIcon: 'format-font',
          onPress: SelectFontFamilyDialog.open,
        },
      ],
    },
  ];

  return {
    sections,
    SelectThemeDialog,
    SelectLanguageDialog,
    SelectDateFormatDialog,
    SelectFontFamilyDialog,
  };
};
