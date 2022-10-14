import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { MoreScreen, OverviewScreen } from '@rnbd/screens';
import { memo } from 'react';

import { MORE_SCREEN, OVERVIEW_SCREEN } from '../../utils';
import { BottomTabBar } from './components';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTab = () => {
  const renderTabBar = (props: BottomTabBarProps) => {
    return <BottomTabBar {...props} />;
  };

  return (
    <Navigator screenOptions={{ headerShown: false }} tabBar={renderTabBar}>
      <Screen name={OVERVIEW_SCREEN} component={OverviewScreen} />
      <Screen name={MORE_SCREEN} component={MoreScreen} />
    </Navigator>
  );
};

export default memo(BottomTab);
