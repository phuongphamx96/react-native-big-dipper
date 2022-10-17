import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { equals } from 'ramda';

export const useBottomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  const routes = [
    {
      key: 'overview',
      title: 'Overview',
      focusedIcon: 'view-dashboard',
      unfocusedIcon: 'view-dashboard-outline',
    },
    {
      key: 'more',
      title: 'More',
      focusedIcon: 'forwardburger',
    },
  ];

  const onIndexChange = (newIndex: number) => {
    const isFocused = equals(state.index, newIndex);
    const newRoute = state.routes[newIndex];

    const event = navigation.emit({
      type: 'tabPress',
      target: newRoute.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(newRoute.name);
    }
  };

  return {
    navigationState: { index: state.index, routes },
    onIndexChange,
  };
};
