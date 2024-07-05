// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import {  AntDesignContainer} from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import { App } from 'vue'
import './tailwind.postcss'

export default {
    ...DefaultTheme,
    enhanceApp({ app }: { app: App }) {
        app.component('preview', AntDesignContainer)
    },

}
