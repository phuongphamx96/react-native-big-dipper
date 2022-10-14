import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
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
