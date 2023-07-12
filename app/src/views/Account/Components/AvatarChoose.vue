<!-- 头像选取 -->
<template>
    <div class="avatar-edit" v-if="showEdit">
        <div class="edit-body">
            <div class="base-grid"></div>
            <img :src="imgSrc" class="img-content" ref="imgRef" />
        </div>
        <div class="edit-menu">
            <div class="action-btn" @click="onGiveUp">取消</div>
            <div class="action-btn" @click="onConfirm">选取</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineExpose, ref } from 'vue';
import { baseAjax } from '@/utils/axios';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

const showEdit = ref(false);
const imgSrc = ref('');
const imgRef = ref<HTMLImageElement | null>(null);

/** 创建input 元素选取图片 */
const onWakeFile = () => {
    let inputEl: HTMLInputElement | null = document.createElement('input');
    inputEl.type = 'file';
    inputEl.accept = '.png, .jpg, .jpeg';
    inputEl.onchange = () => {
        const files = inputEl!.files;
        if (!files || !files[0]) {
            console.error('未选取到文件');
            return;
        }
        const file = files[0];
        console.log(file);
        imgSrc.value = URL.createObjectURL(file);
        showEdit.value = true;
        inputEl!.remove();
        inputEl = null;
    };
    inputEl.click();
};

const onGiveUp = () => {
    URL.revokeObjectURL(imgSrc.value);
    imgSrc.value = '';
};

const onConfirm = () => {
    let canvas: HTMLCanvasElement | null = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.height = 100;
    canvas.width = 100;
    ctx!.drawImage(imgRef.value!, 0, 0, 100, 100);
    const dataUrl = canvas.toDataURL();
    console.log(dataUrl);
    baseAjax
        .request({
            url: 'user',
            method: 'PATCH',
            data: {
                avatar: dataUrl
            }
        })
        .then(() => {
            canvas = null;
            showEdit.value = false;

            userStore.setUserInfo({
                avatar: dataUrl
            });
        });
};

defineExpose({
    onWakeFile
});
</script>

<style lang="scss" scoped>
.avatar-edit {
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.edit-body {
    flex: 1;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    .base-grid {
        width: 81vw;
        height: 81vw;
        border: 1px solid white;
        position: relative;
        box-shadow: 0px 0px 0px 99999px rgba(#000, 0.4);

        &::before {
            content: '';
            display: block;
            height: 27vw;
            width: 100%;
            border: 1px solid white;
            border-left: none;
            border-right: none;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }

        &::after {
            content: '';
            display: block;
            height: 100%;
            width: 27vw;
            border: 1px solid white;
            border-top: none;
            border-bottom: none;
            margin: 0 auto;
        }
    }
}

.edit-menu {
    // position: absolute;
    // bottom: 0;
    // left: 0;
    // right: 0;
    height: 50px;
    line-height: 50px;
    background-color: $light-color;
    display: flex;
    justify-content: space-between;
    z-index: 1;
}

.action-btn {
    height: 100%;

    padding: 0 30px;
    color: white;
}

.img-content {
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    z-index: -1;
}
</style>
