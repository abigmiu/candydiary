<template>
    <div class="usage-box">
        <div class="left">
            <div class="usage-text">
                <span>使用容量：{{ usage }} / {{ total }}</span>
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
import { ref } from 'vue'
import { ArrowBackIosFilled } from '@vicons/material'
import { Icon } from '@vicons/utils'

const usage = ref('192.0KB')
const total = ref('100.0MB')
const progress = ref('1%')
</script>
