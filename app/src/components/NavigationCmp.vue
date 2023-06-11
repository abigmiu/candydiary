<!-- 顶部导航栏 -->
<template>
    <div class="navigation-wrapper">
        <div class="left">
            <Icon class="arrow" @click="goBack">
                <ArrowBackOutlined></ArrowBackOutlined>
            </Icon>
            <div class="title">{{ title }}</div>
        </div>

        <slot name="right"></slot>
    </div>
</template>
<script setup lang="ts">
import { Icon } from '@vicons/utils'
import { ArrowBackOutlined } from '@vicons/material'
import { useRouter } from 'vue-router';

const router = useRouter()

const props = defineProps<{
    title?: string
}>()

let backing = false
const goBack = async () => {
    if (backing) return
    backing = true
    await router.back()
    backing = false
}

</script>

<style lang="scss" scoped>
.navigation-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    height: 50px;
    background-color: #ffffff;
    position: sticky;
    top: 0;

    .left {
        display: flex;
        align-items: center;
    }

    .arrow {
        font-size: 20px;
        margin-right: 40px;
    }

    .title {
        font-size: 16px;
    }
}
</style>
