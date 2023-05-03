<template>
    <div class="title">事件</div>
    <div class="box">
        <div class="item">
            <div class="left">
                <span class="item-text">事件管理</span>
            </div>
            <div class="right">
                <Icon class="arrow">
                    <ArrowBackIosFilled></ArrowBackIosFilled>
                </Icon>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <span class="item-text">首页事件入口</span>
            </div>
            <div class="right">
                <CustomSwitch v-model="homeEventEntry"></CustomSwitch>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <span class="item-text">日记编辑页事件入口</span>
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

<style lang="scss" scoped>
.title {
    margin-top: 20px;
    font-size: 14px;
    margin-bottom: 5px;
    color: #898989;
}
.box {
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

    &-text {
        font-size: 18px;
    }
}

.arrow {
    transform: rotate(180deg);
}
</style>
