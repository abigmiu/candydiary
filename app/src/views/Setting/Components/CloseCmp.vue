<!-- 关闭按钮 -->
<template>
    <div class="close-wrapper"></div>
</template>
<style lang="scss" scoped>
.close-wrapper {
    position: sticky;
    top: 10px;
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
    background-color: rgba(#cccccc, 1);
    border-radius: 50%;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 2px;
        height: 10px;
        background-color: #ffffff;
        top: 50%;
        left: 50%;
    }
    &::before {
        transform: translate(-50%, -50%) rotate(45deg);
    }
    &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
}
</style>
