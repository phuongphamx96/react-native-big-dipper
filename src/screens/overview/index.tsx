import { memo } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Overview = () => {
  return (
    <SafeAreaView>
      <Text>Overview</Text>
    </SafeAreaView>
  );
};

export default memo(Overview);