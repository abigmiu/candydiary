<!-- 日记卡片 -->
<template>
    <div class="wrapper">
        <div class="aside">
            <div class="time">
                <div class="day-wrapper">
                    <div class="day">17</div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="month">5月</div>

            <div class="card">
                我重建一个简单项目，但在代码中不使用这些依赖的时候，并不会出问题，是否是因为我在代码中使用了
                element-plus 等组件依赖，导致 volar 会去递归的解析 node_modules 中的文件，导致
                CPU，内存使用过大，导致无法对我的正常的代码文件进行代码提示
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
$dateHeight: 24px;
$dateWrapperHeight: $dateHeight + 4;
$border-radius: 20px;
$placeholderHeight: 20px;

.wrapper {
    display: flex;
}
// 左侧栏
.aside {
    background: #fff;
    border-radius: $border-radius;
    margin-right: 20px;
    position: relative;
    .time {
        padding-top: $placeholderHeight;
        position: sticky;
        top: 0;
        background: $bg-color;
        border-radius: 0 0 $border-radius $border-radius;
        overflow: hidden;
    }
    .day-wrapper {
        background-color: #fff;
        padding: 2px;
        border-radius: $border-radius;
        padding-bottom: $placeholderHeight;
    }
    .day {
        width: $dateHeight;
        height: $dateHeight;
        background: $primary-color;
        border-radius: 50%;
        text-align: center;
        color: #fff;
        line-height: $dateHeight;
    }
}

.content {
    padding-top: $placeholderHeight;
}

.month {
    margin: 5px 0;
}
.card {
    padding: 8px;
    border-radius: 4px;
    background: #fff;
    margin-bottom: 15px;
}
</style>
