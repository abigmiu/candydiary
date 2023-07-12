<template>
    <NavigationCmp title="账号设置"></NavigationCmp>

    <div class="setting-wrapper account-page">
        <div class="box"></div>
        <div class="item flex items-center" @click="onJumpEditInfo">
            <div class="left">编辑用户信息</div>

            <Icon class="arrow">
                <ArrowBackIosFilled></ArrowBackIosFilled>
            </Icon>
        </div>

        <div>
            <div class="title">账号绑定</div>
            <div class="item">
                <div class="left">邮箱{{ userInfo.email ? '：' + userInfo.email : '' }}</div>
                <div class="right">{{ userInfo.email ? '已绑定' : '去绑定' }}</div>
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
import { ArrowBackIosFilled } from '@vicons/material';
import { Icon } from '@vicons/utils';
import { useRouter } from 'vue-router';

import NavigationCmp from '@/components/NavigationCmp.vue';
import { useUserStore } from '@/stores/user';

const router = useRouter();

const userStore = useUserStore();
const userInfo = userStore.userInfo;

const onJumpEditInfo = () => {
    router.push({
        name: 'Account.Edit'
    });
};
</script>
<style lang="scss">
@import '@/assets/styles/setting.scss';
</style>
