import { ListItemProps } from '@rnbd/components/list/components/list_item/types';

export type Section = {
  title: string;
  items: Omit<ListItemProps, 'theme'>[];
};
