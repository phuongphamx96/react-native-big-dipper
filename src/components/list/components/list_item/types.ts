import { ListItemProps as PaperListItemProps } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { EllipsizeProp } from 'react-native-paper/lib/typescript/types';

export type ListItemProps = {
  formattedTitle?: string;
  formattedDescription?: string;
  leftIcon?: IconSource;
  rightIcon?: IconSource;
} & Partial<Omit<PaperListItemProps, 'theme'>>;

export type TextProps = {
  selectable: boolean;
  ellipsizeMode: EllipsizeProp | undefined;
  color: string;
  fontSize: number;
};
