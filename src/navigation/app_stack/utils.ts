import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { noop } from '@rnbd/utils/common';

// screen names
export const BOTTOM_TAB = 'BOTTOM_TAB';
export const OVERVIEW_SCREEN = 'OVERVIEW_SCREEN';
export const MORE_SCREEN = 'MORE_SCREEN';

export const DefaultScreenOptions: NativeStackNavigationOptions = {
  header: noop,
  animation: 'slide_from_right',
};
