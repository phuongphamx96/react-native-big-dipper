import AsyncStorage from '@react-native-async-storage/async-storage';
import { DateFormat, dateFormatState } from '@rnbd/recoil/settings';
import { DATE_FORMAT_KEY } from '@rnbd/utils/constants/storage_keys';
import { equals } from 'ramda';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

import { DateFormatOption } from './types';

export const useDateFormatOptions = (): DateFormatOption[] => {
  const { t } = useTranslation();

  return [
    {
      value: DateFormat.LOCALE,
      label: t('screen.more.selectDateFormatDialog.options.locale'),
    },
    {
      value: DateFormat.UTC,
      label: 'UTC',
    },
  ];
};

export const useDateFormat = () => {
  const [dateFormat, setDateFormat] = useRecoilState(dateFormatState);
  const options = useDateFormatOptions();

  const onSelectDateFormat = async (newDateFormat: DateFormat) => {
    try {
      if (!equals(dateFormat, newDateFormat)) {
        await AsyncStorage.setItem(DATE_FORMAT_KEY, newDateFormat);
        setDateFormat(newDateFormat);
      }
    } catch (error) {
      console.error('onSelectDateFormat', error);
    }
  };

  return { options, dateFormat, setDateFormat, onSelectDateFormat };
};
