import { component$ } from '@builder.io/qwik';

/**
 * TagList component
 */
export const TagList = component$(() => (
  <div class='tag-list border border-black shadow w-full rounded h-10 px-1 py-1'>
    <div contentEditable='true'></div>
  </div>
));
