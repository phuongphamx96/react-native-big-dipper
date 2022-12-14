import Text from '@rnbd/components/text';
import { FC, memo } from 'react';

import { FormattedTextProps } from './types';

const FormattedText: FC<FormattedTextProps> = ({ text, ...props }) => {
  return (
    <Text
      selectable={props.selectable}
      ellipsizeMode={props.ellipsizeMode}
      style={{ color: props.color, fontSize: props.fontSize }}>
      {text}
    </Text>
  );
};

export default memo(FormattedText);
