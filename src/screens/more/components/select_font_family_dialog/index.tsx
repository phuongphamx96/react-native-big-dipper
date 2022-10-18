import { Text, useBaseDialog } from '@rnbd/components';
import { FontFamily } from '@rnbd/recoil/settings';
import { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { RadioButton, TouchableRipple } from 'react-native-paper';

import { useSelectFontFamily } from './hooks';

const useSelectFontFamilyDialog = () => {
  const { options, fontFamily, onSelectFontFamily } = useSelectFontFamily();

  const onSelect = (value: FontFamily) => {
    onSelectFontFamily(value);
    SelectFontFamilyDialog.close();
  };

  const SelectFontFamilyDialog = useBaseDialog({
    title: { children: 'Select font family' },
    content: {
      children: (
        <RadioButton.Group
          // @ts-ignore
          onValueChange={onSelect}
          value={fontFamily}>
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

  return SelectFontFamilyDialog;
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

export default useSelectFontFamilyDialog;
