<template>
    <div class="setting-wrapper">
        <CloseCmp></CloseCmp>
        <UserInfo></UserInfo>
        <UsageCmp></UsageCmp>
        <UtilCmp></UtilCmp>
        <EventCmp></EventCmp>
        <HomeConfig></HomeConfig>
        <OtherCmp></OtherCmp>

        <div class="app-info">
            <div class="tip">每一条记录，都是在时间上刻下的印记</div>
            <div class="tip">[ 时间戳日记 ]</div>

            <div class="logo-wrapper">
                <img src="@/assets/images/logo.png" class="logo" />
            </div>
            <div class="app-version">5.1.2 - 22121200</div>
            <div class="check">检查更新</div>

            <div class="logout">登出</div>

            <div class="actions">隐私政策</div>
            <div class="actions">注销账号</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import CloseCmp from './Components/CloseCmp.vue'
import UserInfo from './Components/UserInfo.vue'
import UsageCmp from './Components/UsageCmp.vue'
import UtilCmp from './Components/UtilCmp.vue'
import EventCmp from './Components/EventCmp.vue'
import HomeConfig from './Components/HomeConfig.vue'
import OtherCmp from './Components/OtherCmp.vue'
</script>
<style lang="scss" scoped>
.setting-wrapper {
    padding: 10px 20px;
}

.app-info {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .tip {
        font-size: 16px;
        text-align: center;
        line-height: 1.5;
    }

    .logo {
        width: 50px;
        height: 50px;
    }

    .app-version {
        margin-top: 20px;
        font-size: 12px;
        color: #d3d3d3;
    }

    .check {
        margin-top: 1xc0px;
        font-size: 12px;
        color: #74c193;
    }

    .logout {
        width: 60%;
        text-align: center;
        color: #74c193;
        border: 1px solid #74c193;
        padding: 10px 0;
        font-size: 20px;
        margin-bottom: 50px;
    }

    .actions {
        font-size: 14px;
        color: #616161;
    }
}
</style>
