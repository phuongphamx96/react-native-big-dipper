import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { noop } from '@rnbd/utils/common';
import { useTheme } from '@rnbd/utils/theme';
import { FC, memo } from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useBottomTabBar } from './hooks';

const BottomTabBar: FC<BottomTabBarProps> = (props) => {
  const { colors } = useTheme();
  const { navigationState, onIndexChange } = useBottomTabBar(props);

  return (
    <SafeAreaView
      edges={['bottom']}
      style={{ backgroundColor: colors.elevation.level2 }}>
      <BottomNavigation
        compact
        navigationState={navigationState}
        onIndexChange={onIndexChange}
        renderScene={noop}
        style={styles.container}
        barStyle={styles.barStyle}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  barStyle: {
    backgroundColor: 'transparent',
  },
});

export default memo(BottomTabBar);
