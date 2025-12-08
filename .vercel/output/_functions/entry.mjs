import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DdEqHXKG.mjs';
import { manifest } from './manifest_LAJ6EhdC.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/links.astro.mjs');
const _page3 = () => import('./pages/post/_slug_.astro.mjs');
const _page4 = () => import('./pages/robots.txt.astro.mjs');
const _page5 = () => import('./pages/studio/_---params_.astro.mjs');
const _page6 = () => import('./pages/_slug_.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/links.astro", _page2],
    ["src/pages/post/[slug].astro", _page3],
    ["src/pages/robots.txt.ts", _page4],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page5],
    ["src/pages/[slug].astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "9f1a2c6a-947e-4147-95b6-c615ef526905",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
