const { createTypeDocApp } = require('./typedoc-markdown')
const path = require('path')

createTypeDocApp({
  name: 'API Documentation',
  tsconfig: path.resolve(__dirname, './typedoc.tsconfig.json'),
  // entryPointStrategy: 'packages',
  githubPages: false,
  disableSources: true,
  entryPoints: [path.resolve(__dirname, '../add-page-watermark/src/index.ts')],
}).build()
