import { ReactNode } from 'react';
import { AppbarActionProps, AppbarContentProps } from 'react-native-paper';

export type ScreenProps = {
  children: ReactNode;
  header?: {
    canBack?: boolean;
    content: Omit<AppbarContentProps, 'theme'>;
    action?: AppbarActionProps[];
  };
};
