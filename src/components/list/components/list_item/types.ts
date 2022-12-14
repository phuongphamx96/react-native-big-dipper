import { ListItemProps as PaperListItemProps } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

export type ListItemProps = {
  formattedTitle?: string;
  formattedDescription?: string;
  leftIcon?: IconSource;
  rightIcon?: IconSource;
} & Partial<Omit<PaperListItemProps, 'theme'>>;
