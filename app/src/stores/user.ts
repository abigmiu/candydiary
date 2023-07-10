import type { IUserInfo } from '@/types/user';


import { defineStore } from 'pinia';
interface UserState {
    userInfo: nullable<IUserInfo>;
    token: nullable<string>;
}

export const useUserStore = defineStore('user', {
    state: (): UserState => ({
        userInfo: null,
        token: null,
    }),
    getters: {
        isLogin(state) {
            return state.token;
        }
    },
    actions: {
        setUserInfo(userInfo: IUserInfo) {
            this.$state.userInfo = userInfo;
        },
        setToken(token: string) {
            this.$state.token = token;
        },
        logout() {
            this.$state.userInfo = null;
            this.$state.token = null;
        }
    },
    persist: {
        enabled: true,
        strategies: [{
            storage: localStorage
        }]
    }
});