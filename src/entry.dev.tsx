/*
 * WHAT IS THIS FILE?
 *
 * Development entry point using only client-side modules:
 * - Do not use this mode in production!
 * - No SSR
 * - No portion of the application is pre-rendered on the server.
 * - All the application is running eagerly in the browser.
 * - More code is transferred to the browser than in SSR mode.
 * - Optimizer/Serialization/Deserialization code is not exercised!
 */
import { render, type RenderOptions } from '@builder.io/qwik';
import Root from './root';

/**
 * Allows testing components in a real Qwik app environment.
 * However, it's important to note that this file won't be part of the final library.
 *
 * @param {RenderOptions} opts - options specifically for dev/client render.
 *   More details at https://qwik.builder.io/api/qwik-server/#renderoptions
 *
 * @return Promise<RenderResult>
 */
export default function entryDev(opts: RenderOptions) {
  return render(document, <Root />, opts);
}
