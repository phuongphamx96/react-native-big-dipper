import { useSelectionDialog } from '@rnbd/components';
import { DateFormat } from '@rnbd/recoil/settings';
import { useTranslation } from 'react-i18next';

import { useDateFormat } from './hooks';

export const useSelectDateFormatDialog = () => {
  const { t } = useTranslation();
  const { options, dateFormat, onSelectDateFormat } = useDateFormat();

  const SelectDateFormatDialog = useSelectionDialog<DateFormat>({
    title: t('screen.more.selectDateFormatDialog.title'),
    value: dateFormat,
    onValueChange: (value) => {
      onSelectDateFormat(value as DateFormat);
      SelectDateFormatDialog.close();
    },
    options,
  });

  return SelectDateFormatDialog;
};
