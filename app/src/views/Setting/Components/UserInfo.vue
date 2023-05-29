<template>
    <div class="user-info-box" @click="jumpAccount">
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
</template>
<script setup lang="ts">
import { Icon } from '@vicons/utils';
import { ArrowBackIosFilled } from '@vicons/material';
import { useRouter } from 'vue-router';

const router = useRouter();
const jumpAccount = () => {
    router.push({
        name: 'Account'
    });
};
</script>
<style lang="scss" scoped></style>
