import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from '@rnbd/navigation';
import { useEffect } from 'react';
import { SystemBars } from 'react-native-bars';
import { hide } from 'react-native-bootsplash';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  useEffect(() => {
    hide({ fade: true });
  }, []);

  return (
    <SafeAreaProvider>
      <SystemBars barStyle="dark-content" animated />
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
