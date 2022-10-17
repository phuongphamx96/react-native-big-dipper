import {
  DialogActionsProps,
  DialogContentProps,
  DialogIconProps,
  DialogProps,
  DialogScrollAreaProps,
  DialogTitleProps,
} from 'react-native-paper';

export type BaseDialogProps = {
  dialog?: Omit<DialogProps, 'theme'>;
  icon?: Omit<DialogIconProps, 'theme'>;
  title?: Omit<DialogTitleProps, 'theme'>;
  content?: Omit<DialogContentProps, 'theme'>;
  scrollArea?: Omit<DialogScrollAreaProps, 'theme'>;
  actions?: Omit<DialogActionsProps, 'theme'>;
  onOpen?: () => void;
  onClose?: () => void;
};
