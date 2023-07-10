<template>
    <!-- 已登录 -->
    <div class="user-info-box item" @click="jumpAccount" v-if="isLogin">
        <div class="left">
            <div class="info">
                <img :src="userInfo.avatar" class="avatar" />
                <span class="nickname">{{ userInfo.nickname }}</span>
            </div>
            <div class="email-code">@邮编码：{{ userInfo.zipcode }}</div>
        </div>
        <div class="right">
            <Icon>
                <ArrowBackIosFilled></ArrowBackIosFilled>
            </Icon>
        </div>
    </div>
    <!-- 未登录 -->
    <div class="user-info-box item un-login" v-else @click="jumpLogin">
        <div class="left flex items-center">
            <div class="info">
                <img class="avatar default" />
            </div>
            <span class="ml-5">登录 / 注册</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Icon } from '@vicons/utils';
import { ArrowBackIosFilled } from '@vicons/material';
import { useRouter } from 'vue-router';
import { computed } from 'vue'

import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const userInfo = userStore.userInfo;
const isLogin = computed(() => userStore.isLogin)

const router = useRouter();
const jumpAccount = () => {
    router.push({
        name: 'Account'
    });
};
const jumpLogin = () => {
    router.push({
        name: 'Login'
    });
};

</script>

