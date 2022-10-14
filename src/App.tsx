import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from '@rnbd/navigation';
import { useEffect } from 'react';
import { SystemBars } from 'react-native-bars';
import { hide } from 'react-native-bootsplash';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

const App = () => {
  useEffect(() => {
    hide({ fade: true });
  }, []);

  return (
    <>
      <SystemBars barStyle="dark-content" animated />
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <PaperProvider>
          <NavigationContainer>
            <AppStack />
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
