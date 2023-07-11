/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is rendered outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import {
  renderToStream,
  type RenderToStreamOptions, RenderToStreamResult,
} from '@builder.io/qwik/server';
import { manifest } from '@qwik-client-manifest';
import Root from './root';

/**
 * Creates a server-side document, rendering the root node of the document
 * @param {RenderToStreamOptions} opts Options for rendering the root node.
 *   Details can be found at: https://qwik.builder.io/api/qwik-server/#rendertostreamoptions
 *
 * @return Promise<RenderToStreamResult>
 */
export default function entrySSR(opts: RenderToStreamOptions) : Promise<RenderToStreamResult> {
  return renderToStream(<Root />, {
    manifest,
    ...opts,
    // Use container attributes to set attributes on the html tag.
    // eslint-disable-next-line id-length
    containerAttributes: {
      lang: 'en-us',
      ...opts.containerAttributes,
    },
  });
}
