import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import UnoCSS from 'unocss/vite';

import { fileURLToPath, URL } from 'node:url';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx(), UnoCSS()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                // additionalData: `@import '@/assets/styles/_variable.scss';`,
                additionalData: (content: string, filename: string) => {
                    let result = content;
                    // 设置页面引入setting.scss
                    const settingPages = path.resolve(__dirname, 'src/Setting');
                    if (filename.startsWith(settingPages)) {
                        result = `@import '@/assets/styles/setting.scss';${result}`
                    }
                    result = `@import '@/assets/styles/_variable.scss';${result}`
                    return result;
                }
            }
                
        }
    }
});
