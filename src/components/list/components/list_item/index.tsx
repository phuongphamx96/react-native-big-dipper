import { FC, memo, useCallback } from 'react';
import { List } from 'react-native-paper';

import { FormattedText } from './components';
import { TextProps } from './components/formatted_text/types';
import { ListItemProps } from './types';

const ListItem: FC<ListItemProps> = ({
  formattedTitle,
  title,
  formattedDescription,
  description,
  leftIcon,
  rightIcon,
  left,
  right,
  ...rest
}) => {
  const renderFormattedTitle = useCallback(
    (props: TextProps) => {
      return <FormattedText {...props} text={formattedTitle} />;
    },
    [formattedTitle],
  );

  const renderFormattedDescription = useCallback(
    (props: TextProps) => {
      return <FormattedText {...props} text={formattedDescription} />;
    },
    [formattedDescription],
  );

  const renderLeftIcon = useCallback(() => {
    if (leftIcon) {
      return <List.Icon icon={leftIcon} />;
    }
  }, [leftIcon]);

  const renderRightIcon = useCallback(() => {
    if (rightIcon) {
      return <List.Icon icon={rightIcon} />;
    }
  }, [rightIcon]);

  return (
    <List.Item
      {...rest}
      title={formattedTitle ? renderFormattedTitle : title}
      description={
        formattedDescription ? renderFormattedDescription : description
      }
      left={leftIcon ? renderLeftIcon : left}
      right={rightIcon ? renderRightIcon : right}
    />
  );
};

export default memo(ListItem);
