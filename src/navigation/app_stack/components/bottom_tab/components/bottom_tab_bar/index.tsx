import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { noop } from '@rnbd/utils/common';
import { memo } from 'react';
import { BottomNavigation, MD3LightTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useBottomTabBar } from './hooks';
import { styles } from './styles';

const BottomTabBar: React.FC<BottomTabBarProps> = (props) => {
  const { navigationState, onIndexChange } = useBottomTabBar(props);

  return (
    <SafeAreaView
      edges={['bottom']}
      style={{ backgroundColor: MD3LightTheme.colors.elevation.level2 }}>
      <BottomNavigation
        navigationState={navigationState}
        onIndexChange={onIndexChange}
        renderScene={noop}
        style={styles.container}
      />
    </SafeAreaView>
  );
};

export default memo(BottomTabBar);
