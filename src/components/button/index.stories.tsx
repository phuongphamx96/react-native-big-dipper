import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Button, ButtonProps } from 'react-native';

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    title: 'Hello world',
  },
};
export default ButtonMeta;

type ButtonStory = ComponentStory<typeof Button>;

export const Basic: ButtonStory = (args: ButtonProps) => <Button {...args} />;
