import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { equals } from 'ramda';
import { useTranslation } from 'react-i18next';

export const useBottomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  const { t } = useTranslation();

  const routes = [
    {
      key: 'overview',
      title: t('screen.overview.title'),
      focusedIcon: 'view-dashboard',
      unfocusedIcon: 'view-dashboard-outline',
    },
    {
      key: 'more',
      title: t('screen.more.title'),
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
