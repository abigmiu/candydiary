<template>
    <div class="box">
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
            <ArrowBackIosFilled></ArrowBackIosFilled>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ArrowBackIosFilled } from '@vicons/material'
</script>
<style lang="scss" scoped>
.box {
    border-radius: 5px;
    background-color: #ffffff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.info {
    display: flex;
    align-items: center;
}
.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
}
.nickname {
    margin-left: 5px;
}
.email-code {
    margin-top: 5px;
    padding: 2px 10px;
    background-color: rgb(231, 128, 107);
    border-radius: 4px;
    color: rgba(#fff, $alpha: 0.8);
    display: inline-block;
}

.right {
    transform: rotate(180deg);
}
</style>
