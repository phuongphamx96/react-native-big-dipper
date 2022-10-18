import {
  dateFormatState,
  fontFamilyState,
  themeState,
} from '@rnbd/recoil/settings';
import { indexBy, prop } from 'ramda';
import { useRecoilValue } from 'recoil';

import {
  useDateFormatOptions,
  useFontFamilyOptions,
  useSelectDateFormatDialog,
  useSelectFontFamilyDialog,
  useSelectThemeDialog,
  useThemeOptions,
} from './components';
import { Section } from './types';

export const useMore = () => {
  const themeOptions = useThemeOptions();
  const theme = useRecoilValue(themeState);
  const SelectThemeDialog = useSelectThemeDialog();

  const dateFormatOptions = useDateFormatOptions();
  const dateFormat = useRecoilValue(dateFormatState);
  const SelectDateFormatDialog = useSelectDateFormatDialog();

  const fontFamilyOptions = useFontFamilyOptions();
  const fontFamily = useRecoilValue(fontFamilyState);
  const SelectFontFamilyDialog = useSelectFontFamilyDialog();

  const sections: Section[] = [
    {
      title: 'Settings',
      items: [
        {
          formattedTitle: 'Theme',
          formattedDescription: indexBy(prop('value'), themeOptions)[theme]
            .label,
          leftIcon: 'theme-light-dark',
          onPress: SelectThemeDialog.open,
        },
        {
          formattedTitle: 'Date format',
          formattedDescription: indexBy(prop('value'), dateFormatOptions)[
            dateFormat
          ].label,
          leftIcon: 'clock-outline',
          onPress: SelectDateFormatDialog.open,
        },
        {
          formattedTitle: 'Font family',
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
    SelectDateFormatDialog,
    SelectFontFamilyDialog,
  };
};
