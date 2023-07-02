<!-- 登录和注册 -->
<template>
    <div class="login-page">
        <div class="tab-wrapper">
            <div class="tab-box">
                <div class="tab-item">登录</div>
                <div class="tab-item">注册</div>
                <div class="tab-item cursor"></div>
            </div>

        </div>
        <div class="content-wrapper">
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

        <div class="other-wrapper">
            <div class="other-title">------其他登录方式-------</div>
        </div>
    </div>
</template>

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
        }
    }


}

.content-wrapper {
    width: 100%;
    margin: 40px;
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
