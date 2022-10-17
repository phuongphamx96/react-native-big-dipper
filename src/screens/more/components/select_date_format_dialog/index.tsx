import { useBaseDialog } from '@rnbd/components';
import { DateFormat } from '@rnbd/recoil/settings';
import { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { RadioButton, Text, TouchableRipple } from 'react-native-paper';

import { useDateFormat } from './hooks';

const useSelectDateFormatDialog = () => {
  const { options, dateFormat, onSelectDateFormat } = useDateFormat();

  const onSelect = (value: DateFormat) => {
    onSelectDateFormat(value);
    SelectDateFormatDialog.close();
  };

  const SelectDateFormatDialog = useBaseDialog({
    title: { children: 'Select date format' },
    content: {
      children: (
        <RadioButton.Group
          // @ts-ignore
          onValueChange={onSelect}
          value={dateFormat}>
          {options.map(({ label, value }, index) => {
            return (
              <TouchableRipple
                key={index}
                onPress={() => {
                  onSelect(value);
                }}
                style={styles.option}>
                <Fragment>
                  <RadioButton.Android value={value} />
                  <Text numberOfLines={1} style={styles.label}>
                    {label}
                  </Text>
                </Fragment>
              </TouchableRipple>
            );
          })}
        </RadioButton.Group>
      ),
    },
  });

  return SelectDateFormatDialog;
};

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  label: {
    flexShrink: 1,
  },
});

export default useSelectDateFormatDialog;
