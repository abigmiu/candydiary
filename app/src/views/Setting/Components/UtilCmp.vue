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

<style lang="scss" scoped>
.box {
    margin-top: 20px;
    background-color: #ffffff;
}

.item {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    vertical-align: middle;
    border-bottom: 1px solid #f7f7f7;
    &:last-child {
        border-bottom: none;
    }

    .icon {
        font-size: 24px;
        vertical-align: middle;
    }
    &-text {
        vertical-align: middle;
        font-size: 18px;
        margin-left: 4px;
    }
}

.arrow {
    transform: rotate(180deg);
}
</style>
