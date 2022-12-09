import Button from '@rnbd/components/button';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { Dialog } from 'react-native-paper';

import { BaseDialogProps } from './types';

export const useBaseDialog = ({
  dialog,
  icon,
  title,
  content,
  scrollArea,
  actions,
  onOpen,
  onClose,
}: BaseDialogProps) => {
  const { t } = useTranslation();

  const [visible, setVisible] = useState(false);

  const open = () => {
    if (onOpen) {
      onOpen();
    }
    setVisible(true);
  };

  const close = () => {
    if (onClose) {
      onClose();
    }
    setVisible(false);
  };

  const render = () => {
    return (
      <Dialog
        visible={visible}
        onDismiss={close}
        {...dialog}
        style={[styles.dialog, dialog?.style]}>
        {!!icon && <Dialog.Icon {...icon} />}
        {!!title && <Dialog.Title {...title} />}
        {!!content && (
          <Dialog.Content
            {...content}
            style={[styles.noPaddingHorizontal, content.style]}
          />
        )}
        {!!scrollArea && (
          <Dialog.ScrollArea
            {...scrollArea}
            style={[styles.noPaddingHorizontal, scrollArea.style]}
          />
        )}
        <Dialog.Actions {...actions}>
          <Button onPress={close}>
            {t('component.dialog.baseDialog.actions.close')}
          </Button>
          {actions?.children}
        </Dialog.Actions>
      </Dialog>
    );
  };

  return { visible, open, close, render };
};

const styles = StyleSheet.create({
  dialog: {
    maxHeight: '100%',
  },
  noPaddingHorizontal: {
    paddingHorizontal: 0,
  },
});
