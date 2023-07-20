import { component$ } from '@builder.io/qwik';

export interface TagListProps {
  data?: string[];
}

/**
 * TagList component
 */
export const TagList = component$<TagListProps>((props: TagListProps = {}) => (
  <div class='tag-list border border-black shadow w-full rounded h-10 px-1 py-1'>
    {props?.data?.map((item: string) => (
      <div class='tag-list-item'>{item}</div>
    ))}
    <div contentEditable='true'></div>
  </div>
));
