import Text from '@rnbd/components/text';
import { Fragment, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { RadioButton, TouchableRipple } from 'react-native-paper';

import ScrollView from '../../scroll_view';
import { useBaseDialog } from '../base_dialog';
import { SelectionDialogProps } from './types';

export const useSelectionDialog = <T extends string>({
  title,
  value,
  onValueChange,
  options,
}: SelectionDialogProps<T>) => {
  const onSelect = useCallback(
    (newValue: string) => {
      return () => {
        onValueChange(newValue);
      };
    },
    [onValueChange],
  );

  return useBaseDialog({
    title: { children: title },
    scrollArea: {
      children: (
        <ScrollView>
          <RadioButton.Group onValueChange={onValueChange} value={value}>
            {options.map((option) => {
              return (
                <TouchableRipple
                  key={option.value}
                  onPress={onSelect(option.value)}
                  style={styles.option}>
                  <Fragment>
                    <RadioButton.Android value={option.value} />
                    <Text numberOfLines={1} style={styles.label}>
                      {option.label}
                    </Text>
                  </Fragment>
                </TouchableRipple>
              );
            })}
          </RadioButton.Group>
        </ScrollView>
      ),
      style: styles.border,
    },
  });
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
  border: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
});
