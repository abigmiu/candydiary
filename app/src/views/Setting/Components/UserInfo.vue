<template>
    <!-- 已登录 -->
    <div class="user-info-box item" @click="jumpAccount" v-if="userInfo">
        <div class="left">
            <div class="info">
                <img
                    src="https://img.alicdn.com/i2/63986519/O1CN01AH1zKP1y1kkNYZE61_!!63986519.jpg"
                    class="avatar"
                />
                <span class="nickname">李跳跳</span>
            </div>
            <div class="email-code">@邮编码：A01LS7</div>
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
                <img
                    src="https://img.alicdn.com/i2/63986519/O1CN01AH1zKP1y1kkNYZE61_!!63986519.jpg"
                    class="avatar"
                />
            </div>
            <span class="ml-5">登录 / 注册</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Icon } from '@vicons/utils';
import { ArrowBackIosFilled } from '@vicons/material';
import { useRouter } from 'vue-router';

import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const userInfo = userStore.userInfo;

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

