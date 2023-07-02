import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/Home/HomePage.vue')
        },
        {
            path: '/setting',
            name: 'Setting',
            component: () => import('@/views/Setting/SettingIndex.vue')
        },
        {
            path: '/account',
            name: 'Account',
            component: () => import('@/views/Account/AccountPage.vue')
        },
        {
            path: '/account-edit',
            name: 'Account.Edit',
            component: () => import('@/views/Account/EditInfo.vue')
        },
        {
            path: '/combo',
            name: 'Combo',
            component: () => import('@/views/Combo/ComboPage.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/Account/LoginAndRegister.vue')
        }
    ]
});

export default router;
