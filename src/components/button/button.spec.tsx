import { createDOM } from '@builder.io/qwik/testing';
import { describe, expect, it } from 'vitest';
import { Button, ButtonProps } from './button';

const classList = (el: Element | null) => [...Object.values(el?.classList as object)];

async function setup(overrides: ButtonProps = {}): Promise<{
  defaultButton: Element | null,
  modifiedButton: Element | null
}> {
  const {
    screen,
    render
  } = await createDOM();
  await render(<>
    <Button id="default"/>
    <Button id="modified" {...overrides}/>
  </>);
  const defaultButton = screen.querySelector('#default');
  const modifiedButton = screen.querySelector('#modified');

  return {
    defaultButton,
    modifiedButton
  };
}

describe('Button', () => {
  it('creates a simple button', async () => {
    const { defaultButton } = await setup();

    expect(defaultButton)
      .toBeTruthy();
    expect(defaultButton?.nodeName)
      .toEqual('BUTTON');
  });

  it('allows button corners to be square', async () => {
    const {
      defaultButton,
      modifiedButton
    } = await setup({ rounded: false });

    expect(classList(defaultButton))
      .toContain('rounded');
    expect(classList(modifiedButton))
      .not
      .toContain('rounded');
  });

  it('allows size to be adjusted', async () => {
    const {
      defaultButton,
      modifiedButton
    } = await setup({ size: 'xl' });

    expect(classList(defaultButton))
      .toContain('text-base');
    expect(classList(defaultButton))
      .not
      .toContain('text-xl');

    expect(classList(modifiedButton))
      .toContain('text-xl');
    expect(classList(modifiedButton))
      .not
      .toContain('text-base');
  });

  it('allows font-weight to be adjusted', async () => {
    const {
      defaultButton,
      modifiedButton
    } = await setup({ weight: 'extrabold' });

    expect(classList(defaultButton))
      .toContain('font-medium');
    expect(classList(defaultButton))
      .not
      .toContain('font-extrabold');

    expect(classList(modifiedButton))
      .toContain('font-extrabold');
    expect(classList(modifiedButton))
      .not
      .toContain('font-medium');
  });

  it('allows uppercase to be turned off', async () => {
    const {
      defaultButton,
      modifiedButton
    } = await setup({ uppercase: false });

    expect(classList(defaultButton))
      .toContain('uppercase');
    expect(classList(modifiedButton))
      .not
      .toContain('uppercase');
  });

  it('allows all classes to be overridden using classes', async () => {
    const {
      defaultButton,
      modifiedButton
    } = await setup({
      classes: {
        'inline-block': false,
        'bg-dark-blue': false,
        'bg-light-blue': true,
      }
    });

    expect(classList(defaultButton))
      .toContain('inline-block');
    expect(classList(defaultButton))
      .toContain('bg-dark-blue');
    expect(classList(defaultButton))
      .not
      .toContain('bg-light-blue');

    expect(classList(modifiedButton))
      .toContain('bg-light-blue');
    expect(classList(modifiedButton))
      .not
      .toContain('bg-dark-blue');
    expect(classList(modifiedButton))
      .not
      .toContain('inline-block');

  });
});
