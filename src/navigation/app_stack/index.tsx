import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { memo } from 'react';

import { BottomTab } from './components';
import { BOTTOM_TAB, DefaultScreenOptions } from './utils';

const { Navigator, Screen } = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Navigator screenOptions={DefaultScreenOptions}>
      <Screen name={BOTTOM_TAB} component={BottomTab} />
    </Navigator>
  );
};

export default memo(AppStack);
