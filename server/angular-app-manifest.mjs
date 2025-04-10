
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/portfolio-v1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/portfolio-v1"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 32245, hash: '1b58fb6340941956d06dbb9f1f214ddfa602b35443794c1610af3da3668fd761', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 31608, hash: '84fc3fac770907b32c0ae09c30cac7921b7cb28926fa876bf834627e20f06e51', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QKAT3YCZ.css': {size: 74154, hash: 'YTIwClbKyz4', text: () => import('./assets-chunks/styles-QKAT3YCZ_css.mjs').then(m => m.default)}
  },
};
