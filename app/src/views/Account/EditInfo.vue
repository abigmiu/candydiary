<!-- 编辑资料 -->
<template>
    <NavigationCmp title="编辑资料"></NavigationCmp>

    <div class="setting-wrapper edit-info">
        <!-- 头像 -->
        <div class="item" @click="onChooseAvatar">
            <div class="left">头像</div>
            <div class="right flex items-center">
                <img :src="userInfo.avatar" class="avatar" />
                <Icon class="arrow">
                    <ArrowBackIosFilled></ArrowBackIosFilled>
                </Icon>
            </div>
        </div>
        <!-- 昵称 -->
        <div class="item" @click="onShowNicknameModal">
            <div class="left">昵称</div>
            <div class="right flex items-center">
                <span>{{ userInfo.nickname }}</span>
                <Icon class="arrow">
                    <ArrowBackIosFilled></ArrowBackIosFilled>
                </Icon>
            </div>
        </div>
        <!-- 性别 -->
        <div class="item">
            <div class="left">性别</div>
            <div class="right flex items-center">
                <span>{{ userInfo.sex }}</span>
                <Icon class="arrow">
                    <ArrowBackIosFilled></ArrowBackIosFilled>
                </Icon>
            </div>
        </div>
        <!-- 生日 -->
        <div class="item">
            <div class="left">生日</div>
            <div class="right flex items-center">
                <span>{{ userInfo.birthday }}</span>
                <Icon class="arrow">
                    <ArrowBackIosFilled></ArrowBackIosFilled>
                </Icon>
            </div>
        </div>
        <!-- 签名 -->
        <div class="item">
            <div class="left">签名</div>
            <div class="right flex items-center">
                <span>{{ userInfo.signature }}</span>
                <Icon class="arrow">
                    <ArrowBackIosFilled></ArrowBackIosFilled>
                </Icon>
            </div>
        </div>
    </div>

    <div class="modal-mask flex-center" v-if="nickNameVisible">
        <div class="modal-card">
            <div class="title">昵称：</div>
            <input @input="onNicknameInput" type="text" class="input-area" v-model.trim="nicknameForInput"
                :maxlength="nicknameLimitLen" autofocus="true" />
            <div class="text-count">{{ nicknameLen }}/{{ nicknameLimitLen }}</div>
            <div class="flex justify-end">
                <div class="action-item" @click="hiddenNicknameModal">取消</div>
                <div class="action-item" @click="confirmNickname">确定</div>
            </div>
        </div>
    </div>

    <Teleport to="body">
        <AvatarChoose ref="avatarChooseRef"></AvatarChoose>
    </Teleport>
</template>
<script setup lang="ts">
import { ArrowBackIosFilled } from '@vicons/material';
import { Icon } from '@vicons/utils';
import { ref } from 'vue';

import AvatarChoose from './Components/AvatarChoose.vue';

import { useUserStore } from '@/stores/user';
import NavigationCmp from '@/components/NavigationCmp.vue';

const userStore = useUserStore();
const userInfo = userStore.userInfo!;


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

const avatarChooseRef = ref<null | typeof AvatarChoose>(null);
const onChooseAvatar = () => {
    avatarChooseRef.value.onWakeFile();
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
