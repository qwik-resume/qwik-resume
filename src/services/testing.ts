import { JSX } from '@builder.io/qwik/jsx-runtime';
import { createDOM } from '@builder.io/qwik/testing';

type UserEvent = (
  queryOrElement: string | Element | keyof HTMLElementTagNameMap | null,
  eventNameCamel: string | keyof WindowEventMap,
  // the following line is to match what is coming from qwik
  // eslint-disable-next-line
  eventPayload?: any
) => Promise<void>;

/**
 * Takes a JSX element and a selector and
 *  - Renders the element
 *  - Finds all items matching the selector and returns them as an array of elements
 *  - returns a userEvent method for triggering events
 * @param {JSX.Element} jsxElement The JSX.Element to render
 * @param {string} selector The items to find after the element is rendered
 * @return {Promise<{elements: Element[], userEvent: UserEvent}>} An object containing the related
 *   elements and the userEvent function
 */
export const createElementWithUserEvent = async (
  jsxElement: JSX.Element,
  selector = '*',
): Promise<{
  elements: Element[];
  userEvent: UserEvent;
}> => {
  const { render, screen, userEvent } = await createDOM();

  await render(jsxElement);

  const targets = screen.querySelectorAll(selector);

  return { elements: [...Array.from(targets) ?? []], userEvent };
};

/**
 * Takes a JSX element and a selector and
 *   - Renders the element
 *   - Finds all items matching the selector and returns them as an array of elements
 * @param {JSX.Element} jsxElement The JSX.Element to render
 * @param {string} selector The items to find after the element is rendered
 * @return {Promise<Element[]>} The list of Elements that match the selector (if any)
 */
export const createElement = async (
  jsxElement: JSX.Element,
  selector = '*',
): Promise<Element[]> => {
  const { elements } = await createElementWithUserEvent(jsxElement, selector);

  return elements;
};
