import { RadioButtonGroupProps } from 'react-native-paper';

export type Option<T> = {
  value: T;
  label: string;
};

export type SelectionDialogProps<T> = {
  title: string;
  options: Option<T>[];
} & Omit<RadioButtonGroupProps, 'children'>;
