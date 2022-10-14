import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OverviewScreen } from '@rnbd/screens';
import { memo } from 'react';

import { OVERVIEW_SCREEN } from './utils';

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={OVERVIEW_SCREEN} component={OverviewScreen} />
  </Stack.Navigator>
);

export default memo(AppStack);
