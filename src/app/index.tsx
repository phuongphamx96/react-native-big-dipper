import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from '@rnbd/navigation';
import { Fragment, memo } from 'react';
import { SystemBars } from 'react-native-bars';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';

import { useApp } from './hooks';

const App = () => {
  const { isDark, paperTheme } = useApp();

  return (
    <Fragment>
      <SystemBars
        barStyle={isDark ? 'light-content' : 'dark-content'}
        animated
      />
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <PaperProvider theme={paperTheme}>
          <NavigationContainer>
            <AppStack />
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </Fragment>
  );
};

const RNBD = () => {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
};

export default memo(RNBD);
