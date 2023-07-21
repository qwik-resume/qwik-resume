import { describe, expect, test } from 'vitest';
import { TagList } from './tag-list';
import { createElement } from '~/services/testing';

describe('TagList', () => {
  test('renders an instance of the tag list component', async () => {
    const [tagList] = await createElement(<TagList />, '.tag-list');

    expect(tagList).toBeTruthy();
  });

  test('accepts an array of text options provided by a developer', async () => {
    const data = ['a', 'b', 'c'];
    const tagListItems = await createElement(<TagList data={data} />, '.tag-list .tag-list-item');

    expect(tagListItems.length).toEqual(3);
    expect(tagListItems.map(item => item.textContent)).toEqual(data);
  });

  test('accepts objects in the provided array', async () => {
    const data = ['a', { label: 'BEE', value: 'b' }, 'c'];
    const tagListItems = await createElement(<TagList data={data} />, '.tag-list .tag-list-item');

    expect(tagListItems.map(item => item.textContent)).toEqual(['a', 'BEE', 'c']);
  });

  test.skip(
    'allows a developer to indicate a different property than the default for the list',
    async () => {
    },
  );

  test.skip('displays a dropdown when user types', async () => {
  });

  test.skip('allows a user to select an option from the dropdown', async () => {
  });

  test.skip('allows a user to add a new item to the dropdown', async () => {
  });

  test.skip(
    'displays each selected option inside the text box as a button with an `X` to remove',
    async () => {
    },
  );

  test.skip(
    'removes a selected option from the text box when its `X` button is clicked',
    async () => {
    },
  );

  describe('Case Sensitivity', () => {
    test.skip('allows a developer to indicate that text entries are case-sensitive', async () => {
    });

    test.skip('uses existing entry when text matches, even if not same case', async () => {
    });

    test.skip(
      'adds new entry, even when text matches if not same case and case-sensitivity is on',
      async () => {
      },
    );
  });

  describe('onAdd Event', async () => {
    test.skip('triggers an onAdd event when a new item is selected or added', async () => {
    });

    test.skip(
      'provides the item that was added to the list when the onAdd event is triggered',
      async () => {
      },
    );
  });

  describe('onDelete', async () => {
    test.skip('triggers an onDelete event when an item is removed from the list', async () => {
    });

    test.skip(
      'provides the item that was deleted from the list when the onDelete event is triggered',
      async () => {
      },
    );
  });
});
