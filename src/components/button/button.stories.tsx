import type { Meta, StoryObj } from 'storybook-framework-qwik';
import '../../global.css';
import { Button, type ButtonProps } from './button';

// NOTE: I wanted to do an `action` for `onClick$`, however, event handlers need to be wrapped in
//       $() in Qwik, and storybook does not seem to do this by default, so it would error.
const meta: Meta<ButtonProps> = {
  title: 'Button',
  tags: ['autodocs'],
  component: Button,
  args: {},
  argTypes: {
    classes: {
      control: { type: 'object' },
    },
    rounded: {
      control: 'boolean',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl'],
    },
    uppercase: {
      control: 'boolean',
    },
    weight: {
      control: { type: 'select' },
      options: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
    },
  },
};

type Story = StoryObj<ButtonProps>;

export default meta;

export const Primary: Story = {
  args: {
    classes: {
      'bg-dark-blue': true,
      'inline-block': true,
      'px-4': true,
      'py-2': true,
      'text-[white]': true,
      shadow: true,
    },
    rounded: true,
    size: 'base',
    weight: 'medium',
    uppercase: true,
  },
  render: (props) => <Button {...props}>Button Text</Button>,
};
