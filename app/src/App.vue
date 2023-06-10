<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import RouterHistory from './router/history';
import router from './router';

const routerHistory = new RouterHistory();
let isBack = false; // 当前是否是返回操作
let transitionName = ref<'default' | 'pop' | 'push'>('default'); // 过渡动画名称

// 监听路由变化
window.addEventListener('popstate', () => {
    isBack = true;
    routerHistory.pop();
});
router.beforeEach((to, from, next) => {
    setTimeout(() => {
        if (isBack) {
            // 如果是返回操作，则不需要记录历史
            transitionName.value = 'pop';
            isBack = false;
        } else {
            // 记录路由历史
            transitionName.value = 'push';
            routerHistory.push(to.path);
        }
        next();
    }, 0);
});
</script>

<template>
    <RouterView v-slot="{ Component }">
        <Transition :name="transitionName">
            <Component :is="Component" />
        </Transition>
    </RouterView>
</template>

<style lang="scss">
.push {
    &-enter-from {
        transform: translateY(100px);
        opacity: 0.2;
    }
    &-enter-active {
        transition: all 0.3s;
    }
    &-enter-to {
        transform: translateY(0);
        opacity: 1;
    }
}
.pop {
    &-leave-from {
        transform: translateY(0);
        opacity: 1;
    }
    &-leave-active {
        transition: all 0.3s;
    }
    &-leave-to {
        transform: translateY(100px);
        opacity: 0.2;
    }
}
</style>
