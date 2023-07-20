import { describe, expect, test } from 'vitest';
import { TagList } from './tag-list';
import { createElement } from '~/services/testing';

describe('TagList', () => {
  test('renders a tag list component instance', async () => {
    const [tagList] = await createElement(<TagList />, '.tag-list');

    expect(tagList).toBeTruthy();
  });

  test('allows a developer to provide an array of text options to choose from', async () => {
    const data = ['a', 'b', 'c'];
    const tagListItems = await createElement(<TagList data={data} />, '.tag-list .tag-list-item');

    expect(tagListItems.length).toEqual(3);
    expect(tagListItems.map(item => item.textContent)).toEqual(data);
  });

  test('allows a developer to provide objects in the array', async () => {
    const data = ['a', { label: 'BEE', value: 'b' }, 'c'];
    const tagListItems = await createElement(<TagList data={data} />, '.tag-list .tag-list-item');

    expect(tagListItems.map(item => item.textContent)).toEqual(['a', 'BEE', 'c']);
  });

  test(
    'allows a developer to indicate a different property than the default for the list',
    async () => {
    },
  );

  test('displays a dropdown when user types', async () => {
  });

  test('allows a user to select an option from the dropdown', async () => {
  });

  test('allows a user to add a new item to the dropdown', async () => {
  });

  test(
    'displays each selected option inside the text box as a button with an `X` to remove',
    async () => {
    },
  );

  test('removes a selected option from the text box when its `X` button is clicked', async () => {
  });

  describe('case sensitivity', () => {
    test('allows a developer to indicate that text entries are case-sensitive', async () => {
    });

    test('uses existing entry when text matches, even if not same case', async () => {
    });

    test(
      'adds new entry, even when text matches if not same case and case-sensitivity is on',
      async () => {
      },
    );
  });

  describe('onAdd event', async () => {
    test('triggers an onAdd event when a new item is selected or added', async () => {
    });

    test(
      'provides the item that was added to the list when the onAdd event is triggered',
      async () => {
      },
    );
  });

  describe('onDelete', async () => {
    test('triggers an onDelete event when an item is removed from the list', async () => {
    });

    test(
      'provides the item that was deleted from the list when the onDelete event is triggered',
      async () => {
      },
    );
  });
});
