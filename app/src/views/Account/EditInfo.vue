<!-- 编辑资料 -->
<template>
    <NavigationCmp title="编辑资料"></NavigationCmp>

    <div class="setting-wrapper edit-info">
        <!-- 头像 -->
        <div class="item">
            <div class="left">头像</div>
            <div class="right flex items-center">
                <img
                    src="https://img.alicdn.com/i2/63986519/O1CN01AH1zKP1y1kkNYZE61_!!63986519.jpg"
                    class="avatar"
                />
                <Icon class="arrow">
                    <ArrowBackIosFilled></ArrowBackIosFilled>
                </Icon>
            </div>
        </div>
        <!-- 昵称 -->
        <div class="item" @click="onShowNicknameModal">
            <div class="left">昵称</div>
            <div class="right flex items-center">
                <span>幽森的森</span>
                <Icon class="arrow">
                    <ArrowBackIosFilled></ArrowBackIosFilled>
                </Icon>
            </div>
        </div>
        <!-- 性别 -->
        <div class="item">
            <div class="left">性别</div>
            <div class="right flex items-center">
                <span>男</span>
                <Icon class="arrow">
                    <ArrowBackIosFilled></ArrowBackIosFilled>
                </Icon>
            </div>
        </div>
        <!-- 生日 -->
        <div class="item">
            <div class="left">生日</div>
            <div class="right flex items-center">
                <span></span>
                <Icon class="arrow">
                    <ArrowBackIosFilled></ArrowBackIosFilled>
                </Icon>
            </div>
        </div>
        <!-- 签名 -->
        <div class="item">
            <div class="left">签名</div>
            <div class="right flex items-center">
                <span></span>
                <Icon class="arrow">
                    <ArrowBackIosFilled></ArrowBackIosFilled>
                </Icon>
            </div>
        </div>
    </div>

    <div class="modal-mask flex-center" v-if="nickNameVisible">
        <div class="modal-card">
            <div class="title">昵称：</div>
            <input
                @input="onNicknameInput"
                type="text"
                class="input-area"
                v-model.trim="nicknameForInput"
                :maxlength="nicknameLimitLen"
                autofocus="true"
            />
            <div class="text-count">{{ nicknameLen }}/{{ nicknameLimitLen }}</div>
            <div class="flex justify-end">
                <div class="action-item" @click="hiddenNicknameModal">取消</div>
                <div class="action-item" @click="confirmNickname">确定</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import NavigationCmp from '@/components/NavigationCmp.vue';
import { ArrowBackIosFilled } from '@vicons/material';
import { Icon } from '@vicons/utils';
import { ref } from 'vue';

// 昵称
const nickNameVisible = ref(false);
const nicknameForInput = ref('');
const nicknameLen = ref(0);
const nicknameLimitLen = ref(16);
const onNicknameInput = (e: Event) => {
    const el = e.target as HTMLInputElement;
    nicknameLen.value = el.value.length;
};
const hiddenNicknameModal = () => {
    nickNameVisible.value = false;
};
const confirmNickname = () => {
    hiddenNicknameModal();
};
const onShowNicknameModal = () => {
    nickNameVisible.value = true;
};
</script>
<style lang="scss" scoped>
.modal-card {
    width: 70%;
    padding: 20px 15px;
    box-sizing: border-box;
    background-color: #fff;

    .title {
        margin-bottom: 5px;
    }

    .input-area {
        border: 1px solid #cccccc;
        width: 100%;
        box-sizing: border-box;
        padding: 5px;
        line-height: 20px;
        font-size: 14px;
        outline: none;
    }

    .text-count {
        margin: 5px 0;
        color: $light-text-color;
    }

    .action-item {
        margin-left: 20px;
        font-size: 16px;
        color: $light-color;
    }
}
</style>
