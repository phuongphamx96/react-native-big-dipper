import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { noop } from '@rnbd/utils/common';
import { memo } from 'react';
import { BottomNavigation } from 'react-native-paper';

import { useBottomTabBar } from './hooks';
import { styles } from './styles';

const BottomTabBar: React.FC<BottomTabBarProps> = (props) => {
  const { navigationState, onIndexChange } = useBottomTabBar(props);

  return (
    <BottomNavigation
      navigationState={navigationState}
      onIndexChange={onIndexChange}
      renderScene={noop}
      style={styles.container}
    />
  );
};

export default memo(BottomTabBar);
