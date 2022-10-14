import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useState } from 'react';

export const useBottomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  const [index, setIndex] = useState(0);

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
    const isFocused = state.index === newIndex;
    const newRoute = state.routes[newIndex];

    const event = navigation.emit({
      type: 'tabPress',
      target: newRoute.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(newRoute.name);
      setIndex(newIndex);
    }
  };

  return {
    navigationState: { index, routes },
    onIndexChange,
  };
};
