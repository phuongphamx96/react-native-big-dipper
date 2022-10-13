import { useEffect } from 'react';
import { hide } from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    hide({ fade: true });
  }, []);

  return null;
};

export default App;
