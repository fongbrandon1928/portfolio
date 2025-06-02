
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-6EWLYJXC.js"
    ],
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4VVJFZQ6.js"
    ],
    "route": "/portfolio/projects"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 874, hash: '51004ad7e75d4f0734a1d60ae965d9ca9d5f1e75579fc5fa4efbeaff5753f286', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1070, hash: 'cd0c5b6825b0f6471bb3cb96a14f460d6ca95ff28318ac3868522ab8ea66c2b0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 10044, hash: '8998f7779cf56b2091280ec448950c31dc7d09c6a96459ff9e0a0085db449ff0', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10432, hash: 'a9d7067ef5215c14e2717a4a5a5abcae27157707c5ffacc0721f74b3ede8157a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-RIWSI5AK.css': {size: 192, hash: 'OKChrtmONkw', text: () => import('./assets-chunks/styles-RIWSI5AK_css.mjs').then(m => m.default)}
  },
};
