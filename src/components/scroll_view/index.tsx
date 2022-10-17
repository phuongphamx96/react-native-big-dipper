import { useTheme } from '@rnbd/utils/theme';
import { FC, memo } from 'react';
import { ScrollView as RNScrollView, ScrollViewProps } from 'react-native';

const ScrollView: FC<ScrollViewProps> = (props) => {
  const { dark } = useTheme();
  return <RNScrollView indicatorStyle={dark ? 'white' : 'black'} {...props} />;
};

export default memo(ScrollView);
