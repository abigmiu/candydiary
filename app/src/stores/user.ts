import type { IUserInfo } from "@/types/user";

import { defineStore } from "pinia";

interface UserState {
    userInfo: nullable<IUserInfo>;
    token: nullable<string>;
}

export const useUserStore = defineStore('user', {
    state: (): UserState => ({
        userInfo: null,
        token: null,
    }),
    actions: {
        setUserInfo(userInfo: IUserInfo) {
            this.$state.userInfo = userInfo;
        },
        setToken(token: string) {
            this.$state.token = token;
        }
    },
    persist: {
        enabled: true,
        strategies: [{
            storage: localStorage
        }]
    }
})