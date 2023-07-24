import { $, component$ } from '@builder.io/qwik';

/**
 * @typedef TagListDataItem
 * @type {string | Record<string, any>}
 * @description Defines the type of data items for the tag list. Can be a string or an object with
 *   any properties. By default, the `label` property will be used. Whatever property is used for
 *   the text, must be a string.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TagListDataItem = string | { label?: string; [key: string]: any };

/**
 * @typedef TagListProps
 * @type {object}
 * @property {TagListDataItem[]} data - The data for the tag list.
 */
export interface TagListProps {
  data?: TagListDataItem[];
  labelKey?: string;
}

/**
 * Creates a function that extracts a label from a string or object in tag list data.
 * @param {string} [labelKey = 'label'] - The key that should be used to extract the label from the
 *   object.
 * @return {(item: TagListDataItem) => string} - The function to extract a label from a
 *   `TagListDataItem`.
 */
const extractLabel = (labelKey = 'label') => (item: TagListDataItem): string => {
  if (typeof item === 'string') {
    return item;
  }

  const label = item[labelKey];
  if (typeof label === 'string') {
    return label;
  }

  throw new Error('Value or label property must be a string.');
};

/**
 * Renders a tag list item. These appear as items that have been chosen.
 * @param {string} label - The label for the tag list item.
 * @return {JSX.Element} - The tag list item component.
 */
const renderTagListItem = (label: string) => (
  <div class='tag-list-item inline-flex items-center border rounded h-full px-1 mx-1'>
    <p class='inline-block flex-initial'>{label}</p>
  </div>
);

/**
 * Renders a tag list entry. This is where new tags are entered.
 * @return {JSX.Element} - The tag list entry component.
 */
const renderTagListEntry = () => (
  <div class='tag-list-entry inline-flex items-center h-full px-1 mx-1'>
    <p contentEditable='true' class='inline-block w-60 outline-0'></p>
  </div>
);

const renderDropdownList = $(() => <div class=''></div>);

/**
 * TagList component.
 * @param {TagListProps} props - The props for the TagList component.
 * @return {JSX.Element} - The TagList component.
 */
export const TagList = component$<TagListProps>((props: TagListProps = {}) => {
  const selected = props.data
    ?.map(extractLabel(props.labelKey))
    ?.map(renderTagListItem);

  return (
    <div class='tag-list border shadow w-full rounded h-10 px-1 py-1'>
      {selected}
      {renderTagListEntry()}
      {renderDropdownList()}
    </div>
  );
});
