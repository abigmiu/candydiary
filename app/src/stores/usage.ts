import type { IUserUsage } from '@/types/usage';

import { defineStore } from 'pinia';

interface UsageState {
    storage: IUserUsage
}

export const useUsageStore = defineStore('usage', {
    state: (): UsageState => ({
        storage: {
            used: 0,
            total: 0,
        }
    }),
    actions: {
        setUsage(data: IUserUsage) {
            this.$state.storage = data;
        }
    },
    persist: {
        strategies: [
            {
                storage: localStorage
            }
        ]
    }
});