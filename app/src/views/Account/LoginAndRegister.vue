<!-- 登录和注册 -->
<template>
    <div class="login-page pt-5">
        <div class="tab-wrapper">
            <div class="tab-box">
                <div class="tab-item" @click="changeType('login')">登录</div>
                <div class="tab-item" @click="changeType('register')">注册</div>
                <div class="tab-item cursor" :style="cursorMoveStyle"></div>
            </div>
        </div>
        <div class="content-wrapper" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
            <div class="content-box" :style="contentMoveStyle">
                <div class="content-form">
                    <div class="form-input-wrapper">
                        <input type="text" class="form-input--inner" placeholder="输入你的注册邮箱" />
                    </div>
                    <div class="form-input-wrapper">
                        <input type="text" class="form-input--inner" placeholder="输入你的注册密码" />
                    </div>

                    <div class="flex justify-end">
                        <span class="forget">忘记密码？</span>
                    </div>

                    <button class="action-btn">登录</button>
                </div>
                <div class="content-form">
                    <div class="form-input-wrapper">
                        <input type="text" class="form-input--inner" placeholder="输入你的邮箱" />
                    </div>
                    <div class="form-input-wrapper relative">
                        <input type="text" class="form-input--inner" placeholder="输入收到的验证码" />
                        <button class="code-btn">发验证码到邮箱</button>
                    </div>
                    <div class="form-input-wrapper">
                        <input type="text" class="form-input--inner" placeholder="输入6-32位密码" />
                    </div>

                    <button class="action-btn">注册</button>
                </div>
            </div>

        </div>

        <div class="other-wrapper">
            <div class="other-title">------其他登录方式-------</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const currentType = ref<'login' | 'register'>('login');
const changeType = (type: 'login' | 'register') => {
    currentType.value = type;
    if (type === 'login') {
        moveX.value = 0;
    } else {
        moveX.value = -innerWidth;
    }
};

// === 表单区域滑动
const moveX = ref(0)
const innerWidth = window.innerWidth;
const moveXPercent = computed(() => {
    let percent = (moveX.value / innerWidth) * 100;
    if (percent < -100) percent = -100;
    if (percent > 100) percent = 100;

    return percent;
})
const contentMoveStyle = computed(() => {
    return {
        transform: `translateX(${moveXPercent.value / 2}%)`
    }
})
const cursorMoveStyle = computed(() => {
    return {
        transform: `translateX(${-moveXPercent.value}%)`
    }
})
let isTouchStart = false;
let startX = 0;


/** 滑动开始 */
const onTouchStart = (e: TouchEvent) => {
    isTouchStart = true;
    startX = e.changedTouches[0].clientX;
}
/** 滑动中 */
const onTouchMove = (e: TouchEvent) => {
    if (!isTouchStart) return;
    const clientX = e.changedTouches[0].clientX;
    const diffX = clientX - startX;
    const isLeft = diffX < 0;

    if (!isLeft && moveX.value === 0) return;
    if (isLeft && moveX.value === -innerWidth) return;

    moveX.value = diffX;
}
/** 滑动结束 */
const onTouchEnd = () => {
    if (!isTouchStart) return;
    isTouchStart = false;
    startX = 0;


    if (moveXPercent.value === 0) return;

    if (moveXPercent.value < 0) { // 向左滑动
        if (moveXPercent.value > -30) {
            moveX.value = 0;
        } else {
            moveX.value = -innerWidth;
        }
    } else {
        if (moveXPercent.value > 30) {
            moveX.value = 0;
        } else {
            moveX.value = -innerWidth;
        }
    }
}
</script>

<style lang="scss" scoped>
.login-page {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background-color: white;
}

.tab-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .tab-box {
        display: flex;
        border-radius: 12px;
        overflow: hidden;
        background-color: #b7b7b7;
        position: relative;
    }

    .tab-item {
        padding: 2px 15px;
        color: white;
        z-index: 1;

        &.cursor {
            box-sizing: border-box;
            position: absolute;
            left: 0;
            top: 0;
            width: 50%;
            height: 100%;
            background-color: #282828;
            transition: all 0.3s;
            z-index: 0;
            border-radius: 12px;

            &.register {
                left: 50%;
            }
        }
    }


}


.content-wrapper {
    width: 100%;
    margin: 40px 0;
    overflow-x: hidden;
}

.content-box {
    width: 200%;
    display: flex;
    transition: all 0.3s;
}

.content-form {
    flex: 1;
    padding: 0 20px;
}

.form-input-wrapper {


    .form-input--inner {
        caret-color: $light-color;
        box-sizing: border-box;
        width: 100%;
        border: none;
        outline: none;
        font-size: 12px;
        line-height: 20px;
        padding: 5px 10px;

        border-bottom: 1px solid #f1f1f1;
        margin-bottom: 10px;
    }
}

.forget {
    color: #727272;
}

.action-btn {
    display: block;
    background-color: #282828;
    width: 50%;
    margin: 20px auto;
    border: none;
    border-radius: 18px;
    font-size: 14px;
    color: white;
    padding: 5px;
}

.code-btn {
    position: absolute;
    right: 0;
    border: none;
    outline: none;
    background-color: #ffffff;
    border: 1px solid #cfcecf;
    font-size: 10px;
    padding: 5px;
}

.other-wrapper {
    justify-self: flex-end;
}
</style>
