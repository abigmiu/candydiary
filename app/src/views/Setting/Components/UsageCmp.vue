<template>
    <div class="usage-box">
        <div class="left">
            <div class="usage-text">
                <span>使用容量：{{ KbTransform(source.used) }} / {{ KbTransform(source.total) }}</span>
                <span class="upgrade">升级</span>
            </div>
            <div class="progress" :style="{ '--progress': progress }"></div>
        </div>
        <div class="right">
            <Icon>
                <ArrowBackIosFilled></ArrowBackIosFilled>
            </Icon>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { ArrowBackIosFilled } from '@vicons/material';
import { Icon } from '@vicons/utils';

import { IUserUsage } from '@/types/usage';
import { KbTransform } from '@/utils/dataHandle';

const source = reactive<IUserUsage>({
    used: 1920,
    total: 100 * 1024
});
const progress = computed(() => {
    const res = ((source.used / source.total) * 100).toFixed(2);
    return `${res}%`;
});
</script>
