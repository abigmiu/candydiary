<template>
    <NavigationCmp title="账号设置"></NavigationCmp>

    <div class="setting-wrapper">
        <div class="box"></div>
        <div class="item">
            <div class="left">编辑用户信息</div>
            <div class="right">
                <Icon class="arrow">
                    <ArrowBackIosFilled></ArrowBackIosFilled>
                </Icon>
            </div>
        </div>

        <div>
            <div class="title">账号绑定</div>
            <div class="item">
                <div class="left">邮箱</div>
                <div class="right">去绑定</div>
            </div>
            <div class="item">
                <div class="left">QQ</div>
                <div class="right">去绑定</div>
            </div>
            <div class="item">
                <div class="left">微博</div>
                <div class="right">去绑定</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ArrowBackIosFilled } from '@vicons/material'
import { Icon } from '@vicons/utils'
import NavigationCmp from '@/components/NavigationCmp.vue'
</script>
<style lang="scss">
@import '@/assets/styles/setting.scss';
</style>
