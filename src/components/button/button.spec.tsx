import { createDOM } from '@builder.io/qwik/testing';
import { describe, expect, test } from 'vitest';
import { Button, ButtonProps, ButtonSize, ButtonWeight } from './button';

async function createButton(props: ButtonProps = {}): Promise<HTMLElement> {
  const { render, screen } = await createDOM();

  await render(<Button {...props} />);
  return screen.querySelector('button') as HTMLElement;
}

describe('Button', () => {
  test('creates a simple button', async () => {
    const button = await createButton();

    expect(button).toBeTruthy();
    expect(button?.nodeName).toEqual('BUTTON');
  });

  test('setting id sets the button\'s id attribute', async () => {
    const button = await createButton({ id: 'test-id' });

    expect(button?.id).toEqual('test-id');
  });

  test.each([
    'bg-dark-blue',
    'font-medium',
    'inline-block',
    'px-4',
    'py-2',
    'rounded',
    'shadow',
    'text-[white]',
    'text-base',
    'uppercase',
  ])('default button has "%s" class', async (className) => {
    const button = await createButton();

    expect(button?.classList?.contains(className)).toBe(true);
  });

  test('setting rounded to false removes rounded class', async () => {
    const button = await createButton({ rounded: false });

    expect(button?.classList.contains('rounded')).toBe(false);
  });

  test.each(
    Object.values(ButtonSize)
      .filter((value) => value !== ButtonSize.BASE)
      .map((value) => [value, `text-${value}`]) as [ButtonSize, string][],
  )(
    'changing size to %s sets a %s class',
    async (size, expected) => {
      const button = await createButton({ size });
      const classList = button?.classList;

      console.log({ size });
      console.log({ classList });
      expect(classList?.contains(expected)).toBe(true);
      expect(classList?.contains('text-base')).toBe(false);
    },
  );

  test.each(
    Object.values(ButtonWeight)
      .filter((value) => value !== ButtonWeight.MEDIUM)
      .map((value) => [value, `font-${value}`]) as [ButtonWeight, string][],
  )(
    'changing weight to %s sets a %s class',
    async (weight, expected) => {
      const button = await createButton({ weight });
      const classList = button?.classList;

      expect(classList.contains(expected)).toBe(true);
      expect(classList?.contains('font-medium')).toBe(false);
    },
  );

  test('setting uppercase to false removes uppercase class', async () => {
    const button = await createButton({ uppercase: false });

    expect(button?.classList?.contains('uppercase')).toBe(false);
  });

  test('classes can be overridden or added with the classes property', async () => {
    const classes = {
      'bg-dark-blue': false,
      'bg-light-blue': true,
      'text-[white]': false,
      'text-[black]': true,
    };

    const button = await createButton({ classes });
    const classList = button?.classList;

    Object.entries(classes).forEach(([className, expected]) =>
      expect(classList.contains(className)).toBe(expected),
    );
  });

  test('clicking the button triggers the onClick$ handler', async () => {
    const { render, userEvent } = await createDOM();
    const testThings = { stuff: 'not-set' };

    await render(<Button onClick$={() => {
      testThings.stuff = 'things';
    }} />);

    expect(testThings.stuff).toEqual('not-set');

    await userEvent('button', 'click');

    expect(testThings.stuff).toEqual('things');
  });
});
