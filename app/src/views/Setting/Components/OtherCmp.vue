<template>
    <div class="box">
        <div class="item">
            <div class="left">
                <span class="item-text">意见反馈</span>
            </div>
            <div class="right">
                <Icon class="arrow">
                    <ArrowBackIosFilled></ArrowBackIosFilled>
                </Icon>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <span class="item-text">评分故意一下开发者吧❤️❤️❤️</span>
            </div>
            <div class="right">
                <Icon class="arrow">
                    <ArrowBackIosFilled></ArrowBackIosFilled>
                </Icon>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <span class="item-text">记录时间推荐使用[方舟]</span>
            </div>
            <div class="right">
                <Icon class="arrow">
                    <ArrowBackIosFilled></ArrowBackIosFilled>
                </Icon>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowBackIosFilled } from '@vicons/material'
import { Icon } from '@vicons/utils'

import CustomSwitch from '@/components/CustomSwitch.vue'

const homeEventEntry = ref(false)
const editEventEntry = ref(false)
</script>
