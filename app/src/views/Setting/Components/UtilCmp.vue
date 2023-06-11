<template>
    <div class="box">
        <div class="item">
            <div class="left">
                <Icon class="icon">
                    <LockOutlined></LockOutlined>
                </Icon>
                <span class="item-text">指纹应用锁</span>
            </div>
            <div class="right">
                <CustomSwitch v-model="lock"></CustomSwitch>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <Icon class="icon">
                    <StorageFilled></StorageFilled>
                </Icon>
                <span class="item-text">备份（导入导出）</span>
            </div>
            <div class="right">
                <Icon class="arrow">
                    <ArrowBackIosFilled></ArrowBackIosFilled>
                </Icon>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <Icon class="icon">
                    <RefreshFilled></RefreshFilled>
                </Icon>
                <span class="item-text">恢复7天内数据</span>
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
import { LockOutlined, StorageFilled, ArrowBackIosFilled, RefreshFilled } from '@vicons/material'
import { Icon } from '@vicons/utils'

import CustomSwitch from '@/components/CustomSwitch.vue'

const lock = ref(false)
</script>
