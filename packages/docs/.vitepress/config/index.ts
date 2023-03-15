import { defineConfig } from 'vitepress'
import { enConfig } from './en'
import { sharedConfig } from './shared'
import { zhConfig } from './zh'
import { fileURLToPath} from 'node:url'

export default defineConfig({
  ...sharedConfig,
  base:'/add-page-watermark/',
  vite:{
    resolve: {
      alias: {
        // '@': fileURLToPath(new URL('./src', import.meta.url)),
        'add-page-watermark': fileURLToPath(new URL('../../../add-page-watermark/src', import.meta.url)),
      },
    },
  },
  locales: {
    root: { label: '简体中文', lang: 'zh-CN', link: '/', ...zhConfig },
  },
})
