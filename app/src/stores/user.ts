import type { IUserInfo } from '@/types/user';
import type { IUserConfig } from '@/types/userConfig';

import { defineStore } from 'pinia';
interface UserState {
    userInfo: nullable<IUserInfo>;
    token: nullable<string>;
    config: IUserConfig;
}

export const useUserStore = defineStore('user', {
    state: (): UserState => ({
        userInfo: null,
        token: null,
        config: {
            fingerprintAppLock: false,
            homeEventEntry: false,
            diaryEditEventEntry: false,
            timelineTimeStyle: 0,
            diaryCardFullText: false,
            todayInHistory: false,
            baduSpace: false,
            timeSpacePostOffice: false,
            defaultShowCalendar: false,
            calendarBackgroundBubble: false
        }
    }),
    getters: {
        isLogin(state) {
            return state.token;
        }
    },
    actions: {
        setUserInfo(userInfo: Partial<IUserInfo>) {
            const newUserInfo = {
                ...this.$state.userInfo,
                ...userInfo
            } as IUserInfo;
            console.log(newUserInfo);
            this.$state.userInfo = newUserInfo;
        },
        setToken(token: string) {
            this.$state.token = token;
        },
        logout() {
            this.$state.userInfo = null;
            this.$state.token = null;
        },
        updateUserConfig(data: Partial<IUserConfig>) {
            this.$state.config = {
                ...this.$state.config,
                ...data
            };
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                storage: localStorage
            }
        ]
    }
});
