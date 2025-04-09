
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 32222, hash: 'f34eeaecabee128e76a72a3a8b073a3798c8e19d41ab85ef907dcc7774a2ea2d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 31585, hash: '9ce695673ad59181b9f0b8ff3735bf65f8017bb3b1ecf4e1a02fedc4adad2fd7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 59969, hash: 'a37c9aa3c3ce439a449bb0a1ff5225c195de4c0384cdb8b9565b0bd268de08cb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QKAT3YCZ.css': {size: 74154, hash: 'YTIwClbKyz4', text: () => import('./assets-chunks/styles-QKAT3YCZ_css.mjs').then(m => m.default)}
  },
};
