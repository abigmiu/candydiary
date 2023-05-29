<template>
    <div>
        <div class="calendar-wrapper flex">
            <div class="left">
                <div class="month">
                    <span>{{ currentMonth }}</span>
                    <span class="month-text">月</span>
                </div>
                <div class="lunar">四月初六</div>
                <div class="day-distance">今天</div>
            </div>
            <div class="right flex-1">
                <div class="week-bar flex justify-between">
                    <div class="week-bar-item" v-for="(week, index) in weekDay" :key="index">
                        {{ week }}
                    </div>
                </div>
                <div class="day-panel">
                    <div
                        class="day-panel--row flex justify-between"
                        v-for="(row, index) in calendarData"
                        :key="index"
                    >
                        <div class="day-panel--col" v-for="(col, index) in row" :key="index">
                            {{ col.day }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-between actions">
        <div class="left">
            <Icon>
                <CalendarMonthTwotone></CalendarMonthTwotone>
            </Icon>
        </div>
        <div class="right">
            <Icon class="icon">
                <MailOutlineFilled></MailOutlineFilled>
            </Icon>
            <Icon class="icon">
                <SearchRound></SearchRound>
            </Icon>
            <Icon class="icon" @click="onJumpSetting">
                <SettingsFilled></SettingsFilled>
            </Icon>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Icon } from '@vicons/utils';
import {
    CalendarMonthTwotone,
    SearchRound,
    SettingsFilled,
    MailOutlineFilled
} from '@vicons/material';

import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Calendar } from '@/utils/calendar';

const router = useRouter();

const weekDay = ['一', '二', '三', '四', '五', '六', '日'];

const calendar = new Calendar();
const currentMonth = computed(() => calendar.currentMonthIndex + 1);
const calendarData = ref(calendar.render());

/** 跳转设置 */
const onJumpSetting = () => {
    router.push({
        name: 'Setting'
    });
};
</script>

<style lang="scss" scoped>
.calendar-wrapper {
    padding: 10px 10px 10px 0;
    background-color: #fff;
}
.week-bar-item,
.day-panel--col {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
}

.left {
    text-align: center;
    .month {
        margin-top: 10px;
        font-size: 22px;
        font-weight: 500;

        &-text {
            font-weight: 400;
            font-size: 12px;
        }
    }

    .lunar {
        margin-top: 5px;
        font-size: 10px;
        line-height: 18px;
    }
    .day-distance {
        font-size: 10px;
        line-height: 18px;
    }
}

.actions {
    background: #fff;
    padding: 5px 10px;
    font-size: 22px;

    .icon {
        margin-left: 10px;
    }
}
</style>
