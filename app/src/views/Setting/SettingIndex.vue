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
import CloseCmp from './Components/CloseCmp.vue';
import UserInfo from './Components/UserInfo.vue';
import UsageCmp from './Components/UsageCmp.vue';
import UtilCmp from './Components/UtilCmp.vue';
import EventCmp from './Components/EventCmp.vue';
import HomeConfig from './Components/HomeConfig.vue';
import OtherCmp from './Components/OtherCmp.vue';
</script>
<style lang="scss">
@import '@/assets/styles/setting.scss';
</style>
