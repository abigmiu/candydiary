import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/setting',
            name: 'Setting',
            component: () => import('@/views/Setting/SettingIndex.vue')
        },
        {
            path: '/account',
            name: 'Account',
            component: () => import('@/views/Account/AccountPage.vue')
        }
    ]
})

export default router
