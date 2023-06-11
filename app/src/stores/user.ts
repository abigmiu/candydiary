import type { IUserInfo } from "@/types/user";

import { defineStore } from "pinia";

interface UserState {
    userInfo: nullable<IUserInfo>;
 }

export const useUserStore = defineStore('user',  { 
    state: (): UserState => ({
        userInfo: null
    })
})