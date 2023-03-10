import { defineConfig } from 'vitepress'
import { enConfig } from './en'
import { sharedConfig } from './shared'
import { zhConfig } from './zh'
import { fileURLToPath} from 'node:url'

export default defineConfig({
  ...sharedConfig,
  base:'/watermark-page/',
  vite:{
    resolve: {
      alias: {
        // '@': fileURLToPath(new URL('./src', import.meta.url)),
        'watermark-page': fileURLToPath(new URL('../../../watermark-page/src', import.meta.url)),
      },
    },
  },
  locales: {
    root: { label: '简体中文', lang: 'zh-CN', link: '/', ...zhConfig },
  },
})
