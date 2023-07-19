import type { Meta, StoryObj } from 'storybook-framework-qwik';
import '../../global.css';
import { TagList } from './tag-list';

// NOTE: I wanted to do an `action` for `onClick$`, however, event handlers need to be wrapped in
//       $() in Qwik, and storybook does not seem to do this by default, so it would error.
const meta: Meta = {
  title: 'TagList',
  tags: ['autodocs'],
  component: TagList,
};

type Story = StoryObj;

export default meta;

export const Primary: Story = { render: () => <TagList /> };
