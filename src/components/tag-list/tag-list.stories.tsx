import type { Meta, StoryObj } from 'storybook-framework-qwik';
import '../../global.css';
import { TagList } from './tag-list';

export default {
  title: 'TagList',
  component: TagList,
} as Meta;

export const Primary: StoryObj = {
  render: () => <TagList />,
};
