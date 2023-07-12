<template>
    <svg aria-hidden="true" class="svg-icon" :style="svgStyle">
        <use :xlink:href="symbolId" :fill="color" />
    </svg>
</template>
<script setup lang="ts">
import { computed } from 'vue';

interface IProps {
    /** 图标名称 */
    name: string;
    /** 图标大小 */
    size?: number;
    /** 图标颜色 */
    color?: string;
}

const props = defineProps<IProps>();

const symbolId = computed(() => `#icon-${props.name}`);
const svgStyle = computed(() => ({
    width: `${props.size}px`,
    height: `${props.size}px`,
    color: props.color,
}));
</script>
<style lang="scss">
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    color: currentColor;
    overflow: hidden;
}
</style>