import { Text, useBaseDialog } from '@rnbd/components';
import { Theme } from '@rnbd/recoil/settings';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { RadioButton, TouchableRipple } from 'react-native-paper';

import { useSelectTheme } from './hooks';

export const useSelectThemeDialog = () => {
  const { t } = useTranslation();
  const { options, theme, onSelectTheme } = useSelectTheme();

  const onSelect = (value: Theme) => {
    onSelectTheme(value);
    SelectThemeDialog.close();
  };

  const SelectThemeDialog = useBaseDialog({
    title: { children: t('screen.more.selectThemeDialog.title') },
    content: {
      children: (
        <RadioButton.Group
          // @ts-ignore
          onValueChange={onSelect}
          value={theme}>
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

  return SelectThemeDialog;
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
