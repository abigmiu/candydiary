<template>
    <div class="box">
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

<style lang="scss" scoped>
.box {
    margin-top: 15px;
    border-radius: 5px;
    background-color: #ffffff;
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.left {
    flex: 1;
}
.usage-text {
    color: #adadad;
    display: flex;
    justify-content: space-between;
    .upgrade {
        font-size: 16px;
        color: #dda642;
    }
}

.progress {
    margin-top: 10px;
    border-radius: 4px;
    overflow: hidden;
    height: 4px;
    background-color: #d6d6d6;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 0;
        transition: width 0.3s;
        width: var(--progress);
        background-color: seagreen;
    }
}

.right {
    margin-left: 20px;
    flex-shrink: 0;
    width: 15px;
    transform: rotate(180deg);
}
</style>
