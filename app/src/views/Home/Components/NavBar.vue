<!--首页 navbar-->
<template>
    <div class="sticky-wrapper">
        <div class="wrapper">
            <div class="list">
                <div
                    class="list-item"
                    :class="{ active: item.active }"
                    v-for="(item, index) in menus"
                    :key="item.id"
                    ref="listItemRef"
                    @click="onChangeMenu(index)"
                >
                    {{ item.text }}
                </div>

                <div class="cursor" :style="cursorStyle"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';

interface IMenu {
    text: string;
    active: boolean;
    icon: boolean;
    id: number;
}

let preActiveIndex = 0;
const menus = reactive<IMenu[]>([
    {
        text: '时间轴',
        icon: true,
        id: 1,
        active: true
    },
    {
        text: '统计',
        icon: true,
        id: 2,
        active: false
    },
    {
        text: '标签',
        icon: true,
        id: 3,
        active: false
    },
    {
        text: '图片',
        icon: true,
        id: 4,
        active: false
    }
]);
const onChangeMenu = (index: number) => {
    menus.forEach((item) => {
        item.active = false;
    });
    getMenuItemBoundClientRect(index);
    menus[index].active = true;
};
// 优化这里的代码
const cursorStyle = reactive({
    left: '0px',
    width: '0px'
});
const listItemRef = ref<HTMLDivElement[]>();
const getMenuItemBoundClientRect = (index: number) => {
    const rect = listItemRef.value![index].getBoundingClientRect();
    cursorStyle.left = rect.left + 'px';
    cursorStyle.width = rect.width + 'px';
};
onMounted(() => {
    getMenuItemBoundClientRect(0);
});
</script>

<style lang="scss" scoped>
$wrapperPadding: 10px;
$radius: 20px;
$cursorIndex: 1;
$itemIndex: $cursorIndex + 1;

.sticky-wrapper {
    position: sticky;
    top: 20px;
}
.wrapper {
    padding: $wrapperPadding;
    display: flex;
    justify-content: flex-end;
    position: relative;
}

.list {
    display: flex;
    border-radius: 20px;
    background: #fff;
    overflow: hidden;

    &-item {
        display: block;
        padding: 2px 15px;
        border-radius: $radius;
        z-index: $itemIndex;
        &.active {
            color: #fff;
        }
    }
}

.cursor {
    position: absolute;
    left: 0;
    border-radius: $radius;
    top: $wrapperPadding;
    bottom: $wrapperPadding;
    background: $primary-color;
    z-index: $cursorIndex;
    transition: left 0.3s, width 0.3s;
}
</style>
