import { useTheme } from '@rnbd/utils/theme';
import { FC, memo } from 'react';
import { Button as PaperButton, ButtonProps } from 'react-native-paper';

const Button: FC<Omit<ButtonProps, 'theme'>> = ({ labelStyle, ...rest }) => {
  const { fontFamily } = useTheme('labelLarge');

  return (
    <PaperButton
      {...rest}
      labelStyle={[
        {
          fontFamily,
        },
        labelStyle,
      ]}
    />
  );
};

export default memo(Button);
