import 'kleur/colors';
import { p as decodeKey } from './chunks/astro/server_p_1oTWR1.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CtdlfDm-.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/andregordon/Developer/_CLIENTS/faithangels-astro/","cacheDir":"file:///Users/andregordon/Developer/_CLIENTS/faithangels-astro/node_modules/.astro/","outDir":"file:///Users/andregordon/Developer/_CLIENTS/faithangels-astro/dist/","srcDir":"file:///Users/andregordon/Developer/_CLIENTS/faithangels-astro/src/","publicDir":"file:///Users/andregordon/Developer/_CLIENTS/faithangels-astro/public/","buildClientDir":"file:///Users/andregordon/Developer/_CLIENTS/faithangels-astro/dist/client/","buildServerDir":"file:///Users/andregordon/Developer/_CLIENTS/faithangels-astro/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"links/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/links","isIndex":false,"type":"page","pattern":"^\\/links\\/?$","segments":[[{"content":"links","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/links.astro","pathname":"/links","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"site":"http://localhost:4321/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/andregordon/Developer/_CLIENTS/faithangels-astro/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/Users/andregordon/Developer/_CLIENTS/faithangels-astro/src/pages/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/andregordon/Developer/_CLIENTS/faithangels-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/andregordon/Developer/_CLIENTS/faithangels-astro/src/pages/post/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/andregordon/Developer/_CLIENTS/faithangels-astro/src/pages/links.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/links@_@astro":"pages/links.astro.mjs","\u0000@astro-page:src/pages/post/[slug]@_@astro":"pages/post/_slug_.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astro-page:src/pages/[slug]@_@astro":"pages/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_LAJ6EhdC.mjs","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DHF1rn3Y.mjs","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/src/components/InteractiveCards":"_astro/InteractiveCards.DJGkRV84.js","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/src/components/Navigation":"_astro/Navigation.BYK_K0m-.js","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/src/components/ModalDonation":"_astro/ModalDonation.B7PU5K8o.js","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/src/components/ContactForm":"_astro/ContactForm.CDbEGcga.js","@astrojs/react/client.js":"_astro/client.BgfXtVzO.js","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.DZnDNxNb.js","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.Cd1haESD.js","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/node_modules/sanity/lib/_chunks-es/VideoPlayer.mjs":"_astro/VideoPlayer.KQAKU8AJ.js","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.CnUtIwMz.js","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.CbdGefS0.js","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/node_modules/sanity/lib/_chunks-es/resources5.mjs":"_astro/resources5.ZGcCnI3f.js","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.BjmQDlwB.js","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.BqUoi7Aj.js","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.C60szoZ-.js","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.DwXRS5QU.js","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/node_modules/@sanity/vision/lib/_chunks-es/resources.mjs":"_astro/resources.DmzcZVQC.js","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/node_modules/@sanity/vision/lib/_chunks-es/SanityVision.mjs":"_astro/SanityVision.DJY7aM4Q.js","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.Dycy9Zf1.js","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.DUmH2pAE.js","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.CUfadqjD.js","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/node_modules/sanity/lib/_chunks-es/resources6.mjs":"_astro/resources6.QxZ0cz_F.js","/Users/andregordon/Developer/_CLIENTS/faithangels-astro/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.DFnTOubb.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.FffjcIJ_.css","/favicon.svg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.DZnDNxNb.js","/_astro/ContactForm.CDbEGcga.js","/_astro/InteractiveCards.DJGkRV84.js","/_astro/ModalDonation.B7PU5K8o.js","/_astro/Navigation.BYK_K0m-.js","/_astro/SanityVision.DJY7aM4Q.js","/_astro/VideoPlayer.KQAKU8AJ.js","/_astro/ViteDevServerStopped.BqUoi7Aj.js","/_astro/browser.BFHXJ9FJ.js","/_astro/button.DApJSPhv.js","/_astro/client.BgfXtVzO.js","/_astro/client.C-IhworF.js","/_astro/index.BltLtR-s.js","/_astro/index.Dycy9Zf1.js","/_astro/index2.DUmH2pAE.js","/_astro/index3.CUfadqjD.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/refractor.DwXRS5QU.js","/_astro/resources.CbdGefS0.js","/_astro/resources.DmzcZVQC.js","/_astro/resources2.Cd1haESD.js","/_astro/resources3.BjmQDlwB.js","/_astro/resources4.CnUtIwMz.js","/_astro/resources5.ZGcCnI3f.js","/_astro/resources6.QxZ0cz_F.js","/_astro/stegaEncodeSourceMap.C60szoZ-.js","/_astro/studio-component.AYYuBsNf.js","/_astro/studio-component.DFnTOubb.js","/avatars/nappy-qYiujptY5pE-unsplash.webp","/avatars/ricardo-fontes-mendes-IHARyoUjceI-unsplash.webp","/avatars/shimo-yann-G9ZsvG_q_co-unsplash@1.5x.webp","/images/Abbie Townsend for The New York Times.webp","/images/giuseppe-cantiello-FhLJfTG8xWM-unsplash.webp","/images/ina-ramos-og6jTcsXqAY-unsplash.webp","/images/melissa-jamaica-damage-02-gty-jef-251030_1761826692706_hpMain.avif","/images/pexels-julia-m-cameron-6994962.webp","/images/pexels-kampus-7551583.webp","/images/shimo-yann-CimX4A-6ZBo-unsplash.webp","/images/shimo-yann-G9ZsvG_q_co-unsplash.webp","/images/woman-cooking-outside.webp","/svg/DrinkBottle20Regular.svg","/svg/Faith Angels Logo KO.svg","/svg/Faith Angels Logo V2.svg","/svg/Faith Angels Logo.svg","/webfonts/GreatVibes/greatvibes-regular-webfont.woff","/webfonts/GreatVibes/greatvibes-regular-webfont.woff2","/webfonts/Lato/lato-bold-webfont.woff","/webfonts/Lato/lato-bold-webfont.woff2","/webfonts/Lato/lato-italic-webfont.woff","/webfonts/Lato/lato-italic-webfont.woff2","/webfonts/Lato/lato-regular-webfont.woff","/webfonts/Lato/lato-regular-webfont.woff2","/webfonts/Montserrat/montserrat-italic-variablefont_wght-webfont.woff","/webfonts/Montserrat/montserrat-italic-variablefont_wght-webfont.woff2","/webfonts/Montserrat/montserrat-variablefont_wght-webfont.woff","/webfonts/Montserrat/montserrat-variablefont_wght-webfont.woff2","/webfonts/Ruberoid/Ruberoid-Regular.woff","/webfonts/Ruberoid/Ruberoid-Regular.woff2","/webfonts/Sacramento/sacramento-regular-webfont.woff","/webfonts/Sacramento/sacramento-regular-webfont.woff2","/404.html","/links/index.html","/robots.txt","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"+GRAzQtY6zn9RuZZ6aDwHcUkk/7OvKZRv/Oa1HcAyIs="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
