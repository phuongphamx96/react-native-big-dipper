import { Text, useBaseDialog } from '@rnbd/components';
import { Language } from '@rnbd/recoil/settings';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { RadioButton, TouchableRipple } from 'react-native-paper';

import { useSelectLanguage } from './hooks';

const useSelectLanguageDialog = () => {
  const { t } = useTranslation();
  const { options, language, onSelectLanguage } = useSelectLanguage();

  const onSelect = (value: Language) => {
    onSelectLanguage(value);
    SelectLanguageDialog.close();
  };

  const SelectLanguageDialog = useBaseDialog({
    title: { children: t('screen.more.SelectLanguageDialog.title') },
    content: {
      children: (
        <RadioButton.Group
          // @ts-ignore
          onValueChange={onSelect}
          value={language}>
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

  return SelectLanguageDialog;
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

export default useSelectLanguageDialog;
