<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';

import RouterHistory from './router/history';
import router from './router';

const routerHistory = new RouterHistory();
let isBack = false; // 当前是否是返回操作
let transitionName = ref<'default' | 'pop' | 'push'>('default'); // 过渡动画名称
let transitionMode = ref<'in-out' | 'out-in' | 'default'>('default'); // 过渡模式

// 监听路由变化
window.addEventListener('popstate', () => {
    isBack = true;
    routerHistory.pop();
});
router.beforeEach((to, from, next) => {
    setTimeout(() => {
        if (isBack) {
            transitionName.value = 'pop';
            transitionMode.value = 'out-in';
            isBack = false;
        } else {
            transitionName.value = 'push';
            transitionMode.value = 'default';
            routerHistory.push(to.path);
        }
        next();
    }, 0);
});
</script>

<template>
    <KeepAlive>
        <RouterView v-slot="{ Component }">
        <!-- <Transition :name="transitionName" :mode="transitionMode"> -->
            <Component :is="Component" />
        <!-- </Transition> -->
    </RouterView>
    </KeepAlive>
    
</template>

<style lang="scss">
$transition: all 0.4s linear;
@mixin bg {
    background-color: $bg-color;
}
@mixin fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}
.push {
    &-enter-from {
        @include bg;
        @include fixed;
        transform: translateY(100px);
        opacity: 0.8;
    }
    &-enter-active {
        @include bg;
        @include fixed;
        transition: $transition;
    }
    &-enter-to {
        @include bg;
        @include fixed;
        transform: translateY(0);
        opacity: 1;
    }

    &-leave-active {
        transition: $transition;
    }
}
.pop {
    &-leave-from {
        transform: translateY(0);
        opacity: 1;
    }
    &-leave-active {
        transition: $transition;
    }
    &-leave-to {
        transform: translateY(100px);
        opacity: 0.8;
    }
}
</style>
