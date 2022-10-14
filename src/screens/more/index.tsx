import { memo } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const More = () => {
  return (
    <SafeAreaView>
      <Text>More</Text>
    </SafeAreaView>
  );
};

export default memo(More);
