import Text from '@rnbd/components/text';
import { FC, memo } from 'react';
import { List } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

import { ListItemProps, TextProps } from './types';

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
  const renderFormattedText = (props: TextProps, formattedText: string) => {
    return (
      <Text
        selectable={props.selectable}
        ellipsizeMode={props.ellipsizeMode}
        style={{ color: props.color, fontSize: props.fontSize }}>
        {formattedText}
      </Text>
    );
  };

  const renderIcon = (icon: IconSource) => {
    return <List.Icon icon={icon} />;
  };

  return (
    <List.Item
      {...rest}
      title={
        formattedTitle
          ? (props) => {
              return renderFormattedText(props, formattedTitle);
            }
          : title
      }
      description={
        formattedDescription
          ? (props) => {
              return renderFormattedText(props, formattedDescription);
            }
          : description
      }
      left={
        leftIcon
          ? () => {
              return renderIcon(leftIcon);
            }
          : left
      }
      right={
        rightIcon
          ? () => {
              return renderIcon(rightIcon);
            }
          : right
      }
    />
  );
};

export default memo(ListItem);
