
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://fongbrandon1928.github.io/portfolio/',
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
    'index.csr.html': {size: 907, hash: '2871f3855994a422041ed2df56add549a0d333ea5c23f5fc3c1380a193acf075', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1103, hash: 'e7060a6c3434538fdaf64385f9a1cb612a16ccb68565c620a4672b21818fbd55', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 10077, hash: 'f738abe8c3dfaa2dac41c7741998ae6d36c19f14ee4c17ffcddcbb3dd7c6e57f', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10465, hash: 'c8b9beeed15ff25193c964fdc450eb5fa331d7cc93a5b81970adc90872119337', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-RIWSI5AK.css': {size: 192, hash: 'OKChrtmONkw', text: () => import('./assets-chunks/styles-RIWSI5AK_css.mjs').then(m => m.default)}
  },
};
