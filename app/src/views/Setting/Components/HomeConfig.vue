<template>
    <div class="title">首页自定义</div>
    <div class="box">
        <div class="item">
            <div class="left">
                <span class="item-text">标签页排序</span>
            </div>
            <div class="right">
                <Icon class="arrow">
                    <ArrowBackIosFilled></ArrowBackIosFilled>
                </Icon>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <span class="item-text">时间轴时间样式</span>
            </div>
            <div class="right">
                <span>数字模式</span>
                <Icon class="arrow">
                    <ArrowBackIosFilled></ArrowBackIosFilled>
                </Icon>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <span class="item-text">日记卡片显示完整文字</span>
            </div>
            <div class="right">
                <CustomSwitch v-model="editEventEntry"></CustomSwitch>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <span class="item-text">那年今日</span>
            </div>
            <div class="right">
                <CustomSwitch v-model="editEventEntry"></CustomSwitch>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <span class="item-text">八度空间</span>
            </div>
            <div class="right">
                <CustomSwitch v-model="editEventEntry"></CustomSwitch>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <span class="item-text">时空邮局</span>
            </div>
            <div class="right">
                <CustomSwitch v-model="editEventEntry"></CustomSwitch>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <span class="item-text">默认显示日历</span>
            </div>
            <div class="right">
                <CustomSwitch v-model="editEventEntry"></CustomSwitch>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <span class="item-text">日历背景气泡</span>
            </div>
            <div class="right">
                <CustomSwitch v-model="editEventEntry"></CustomSwitch>
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
