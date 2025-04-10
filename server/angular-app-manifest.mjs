
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 32212, hash: '65b901316dbfe9f35b67e3a03e319b171396eb7ea86b7f5d116deee3e5a0b147', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 31575, hash: 'ea7c8c1fdbfb134925568927db35ffaf823175f8c88a5d0ee2ed1476cb69be2c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52185, hash: 'e2ccab9b061643e4be0fae3835982b5f5d532b44033c619563498121b69beb22', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QKAT3YCZ.css': {size: 74154, hash: 'YTIwClbKyz4', text: () => import('./assets-chunks/styles-QKAT3YCZ_css.mjs').then(m => m.default)}
  },
};
