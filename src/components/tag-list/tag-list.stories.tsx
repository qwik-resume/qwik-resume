import type { Meta, StoryObj } from 'storybook-framework-qwik';
import '../../global.css';
import { TagList, type TagListProps } from './tag-list';

// NOTE: I wanted to do an `action` for `onClick$`, however, event handlers need to be wrapped in
//       $() in Qwik, and storybook does not seem to do this by default, so it would error.
const meta: Meta<TagListProps> = {
  title: 'TagList',
  tags: ['autodocs'],
  component: TagList,
  args: {},
  argTypes: {
    data: {
      control: 'object',
    },
  },
};

type Story = StoryObj<TagListProps>;

export default meta;

export const Primary: Story = {
  args: {
    data: ['stuff', 'things'],
  },
  render: (props) => <TagList {...props} />,
};
