
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/My-Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/My-Portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 32225, hash: '3bce40cd2c67d23f10f5f0d9743a465012f59eccbc487885c0f82d8502a80aaa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 31588, hash: 'cac88d2e98e1cb202220205c538e94423a20b8cf25671f2bcadab4a440f894f2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 59972, hash: '1c2a6aad88217fda2af6b251b9feec2e5c0d41eb6c318a08c8828e0c969efdd9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QKAT3YCZ.css': {size: 74154, hash: 'YTIwClbKyz4', text: () => import('./assets-chunks/styles-QKAT3YCZ_css.mjs').then(m => m.default)}
  },
};
