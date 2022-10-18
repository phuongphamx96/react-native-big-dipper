import { useTheme } from '@rnbd/utils/theme';
import { FC, memo } from 'react';
import { Text as PaperText, TextProps } from 'react-native-paper';

const Text: FC<TextProps> = ({ variant, style, ...rest }) => {
  const { fontFamily } = useTheme(variant);
  return (
    <PaperText
      {...rest}
      variant={variant}
      style={[
        {
          fontFamily,
        },
        style,
      ]}
    />
  );
};

export default memo(Text);
