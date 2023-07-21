import type { Meta, StoryObj } from 'storybook-framework-qwik';
import '../../global.css';
import { TagList, type TagListProps } from './tag-list';

const meta: Meta<TagListProps> = {
  title: 'TagList',
  tags: ['autodocs'],
  component: TagList,
  args: {
    data: [],
  },
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
    data: ['stuff', { label: 'things' }],
  },
  render: (props) => <TagList {...props} />,
};
