import { EllipsizeProp } from 'react-native-paper/lib/typescript/types';

export type TextProps = {
  selectable: boolean;
  ellipsizeMode: EllipsizeProp | undefined;
  color: string;
  fontSize: number;
};

export type FormattedTextProps = { text?: string } & TextProps;
