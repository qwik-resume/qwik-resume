import { JSX } from '@builder.io/qwik/jsx-runtime';
import { createDOM } from '@builder.io/qwik/testing';

/**
 * UserEvent type used to represent a function that triggers an event on a DOM element.
 * @typedef UserEvent
 * @type {function}
 * @param {string | Element | keyof HTMLElementTagNameMap | null} queryOrElement The target of the
 *   event.
 * @param {string | keyof WindowEventMap} eventNameCamel The name of the event to trigger.
 * @param {any} eventPayload The data to attach to the event. The type is any due to the
 *   requirements of the Qwik framework.
 * @return {Promise<void>}
 */
type UserEvent = (
  queryOrElement: string | Element | keyof HTMLElementTagNameMap | null,
  eventNameCamel: string | keyof WindowEventMap,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  eventPayload?: any
) => Promise<void>;

/**
 * Creates and renders a JSX element, then selects matching elements based on a selector.
 * @param {JSX.Element} jsxElement The JSX element to create and render.
 * @param {string} selector A selector used to match elements in the rendered output.
 * @return {Promise<{elements: Element[], userEvent: UserEvent}>} An object containing an array of
 *   matching elements and a userEvent function.
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

  // The NodeList from querySelectorAll is not iterable in this context, so converting to an array
  const targets = Array.from(screen.querySelectorAll(selector));

  return { elements: targets, userEvent };
};

/**
 * Creates and renders a JSX element, then returns matching elements based on a selector.
 * @param {JSX.Element} jsxElement The JSX element to create and render.
 * @param {string} selector A selector used to match elements in the rendered output.
 * @return {Promise<Element[]>} An array of matching elements.
 */
export const createElement = async (
  jsxElement: JSX.Element,
  selector = '*',
): Promise<Element[]> => {
  const { elements } = await createElementWithUserEvent(jsxElement, selector);

  return elements;
};
