import { component$ } from '@builder.io/qwik';

export interface TagListProps {
  data?: (string | Record<string, string>)[];
}

/**
 * TagList component
 */
export const TagList = component$<TagListProps>((props: TagListProps = {}) => (
  <div class='tag-list border shadow w-full rounded h-10 px-1 py-1'>
    {props?.data
      ?.map((item: string | Record<string, string>) => (typeof item === 'string' ? item : item.label))
      ?.map((label) => (
        <div class='tag-list-item inline-flex items-center border rounded h-full px-1 mx-1'>
          <p class='inline-block flex-initial'>{label}</p>
        </div>
      ))}
    <div class='tag-list-entry inline-flex items-center h-full px-1 mx-1'>
      <p contentEditable='true' class='inline-block w-60 outline-0'></p>
    </div>
  </div>
));
