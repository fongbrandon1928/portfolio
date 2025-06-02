
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/git-live/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-6EWLYJXC.js"
    ],
    "route": "/git-live"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4VVJFZQ6.js"
    ],
    "route": "/git-live/projects"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 873, hash: '03fc42599b281edf78aa9fb1c515ea2548b9e9e51eaf787348cb590c31c60793', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1069, hash: 'c10c0b223f074fa313fc3a609303cc6afe78db3da4a6365416c0d6bcd6c09885', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 10043, hash: 'ae961ecf631b6cb0420ac5d2198b1882307563a863bbef92604ca99144e15ead', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10431, hash: 'be69171b22c3cc15785df17e330edc9771f87792f62900ba2dd322e41bfaa258', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-RIWSI5AK.css': {size: 192, hash: 'OKChrtmONkw', text: () => import('./assets-chunks/styles-RIWSI5AK_css.mjs').then(m => m.default)}
  },
};
