import { Text, useBaseDialog } from '@rnbd/components';
import { FontFamily } from '@rnbd/recoil/settings';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { RadioButton, TouchableRipple } from 'react-native-paper';

import { useSelectFontFamily } from './hooks';

export const useSelectFontFamilyDialog = () => {
  const { t } = useTranslation();
  const { options, fontFamily, onSelectFontFamily } = useSelectFontFamily();

  const onSelect = (value: FontFamily) => {
    onSelectFontFamily(value);
    SelectFontFamilyDialog.close();
  };

  const SelectFontFamilyDialog = useBaseDialog({
    title: { children: t('screen.more.selectFontFamilyDialog.title') },
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
