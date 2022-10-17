import { dateFormatState, themeState } from '@rnbd/recoil/settings';
import { indexBy, prop } from 'ramda';
import { List } from 'react-native-paper';
import { useRecoilValue } from 'recoil';

import {
  useDateFormatOptions,
  useSelectDateFormatDialog,
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

  const sections: Section[] = [
    {
      title: 'Settings',
      items: [
        {
          title: 'Theme',
          description: indexBy(prop('value'), themeOptions)[theme].label,
          left: () => {
            return <List.Icon icon="theme-light-dark" />;
          },
          onPress: SelectThemeDialog.open,
        },
        {
          title: 'Date format',
          description: indexBy(prop('value'), dateFormatOptions)[dateFormat]
            .label,
          left: () => {
            return <List.Icon icon="clock-outline" />;
          },
          onPress: SelectDateFormatDialog.open,
        },
      ],
    },
  ];

  return {
    sections,
    SelectThemeDialog,
    SelectDateFormatDialog,
  };
};
