import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@rnbd/utils/theme';
import { FC, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ScreenProps } from './types';

const Screen: FC<ScreenProps> = ({ children, header }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const headerBackgroundColor = colors.elevation.level2;

  const renderHeader = () => {
    if (header) {
      return (
        <Appbar.Header style={{ backgroundColor: headerBackgroundColor }}>
          {header.canBack && <Appbar.BackAction onPress={navigation.goBack} />}
          <Appbar.Content {...header.content} />
          {header.action?.map((action, index) => {
            return <Appbar.Action key={index} {...action} />;
          })}
        </Appbar.Header>
      );
    }
    return null;
  };

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={[
        styles.container,
        {
          backgroundColor: header ? headerBackgroundColor : colors.background,
        },
      ]}>
      {renderHeader()}
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default memo(Screen);
