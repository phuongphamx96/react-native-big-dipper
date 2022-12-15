import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { orientationTypeState } from '@rnbd/recoil/app';
import { noop } from '@rnbd/utils/common';
import { useTheme } from '@rnbd/utils/theme';
import { includes, or } from 'ramda';
import { FC, memo } from 'react';
import { StyleSheet } from 'react-native';
import { hasNotch, isTablet } from 'react-native-device-info';
import { OrientationType } from 'react-native-orientation-locker';
import { BottomNavigation } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecoilValue } from 'recoil';

import { useBottomTabBar } from './hooks';

const BottomTabBar: FC<BottomTabBarProps> = (props) => {
  const { colors } = useTheme();
  const { navigationState, onIndexChange } = useBottomTabBar(props);
  const orientationType = useRecoilValue(orientationTypeState);
  const barStyle = { backgroundColor: colors.elevation.level2 };

  const bottomNavigation = (
    <BottomNavigation
      compact={or(
        includes(orientationType, [
          OrientationType['LANDSCAPE-LEFT'],
          OrientationType['LANDSCAPE-RIGHT'],
        ]),
        isTablet(),
      )}
      navigationState={navigationState}
      onIndexChange={onIndexChange}
      renderScene={noop}
      style={styles.container}
      barStyle={barStyle}
    />
  );

  if (hasNotch()) {
    return bottomNavigation;
  }

  return (
    <SafeAreaView edges={['bottom']} style={barStyle}>
      {bottomNavigation}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
});

export default memo(BottomTabBar);
