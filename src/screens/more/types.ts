import { ListItemProps } from 'react-native-paper';

export type Section = {
  title: string;
  items: Omit<ListItemProps, 'theme'>[];
};
