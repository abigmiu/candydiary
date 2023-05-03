<template>
    <div class="setting-card" :class="computedClass"></div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(
    defineProps<{
        radius: boolean
        horizontalPadding: boolean
    }>(),
    {
        radius: false,
        horizontalPadding: false
    }
)

const computedClass = computed(() => {
    return {
        radius: props.radius,
        'horizontal-padding': props.horizontalPadding
    }
})
</script>
<style lang="scss" scoped>
.setting-card {
    background-color: #ffffff;
    padding: 10px 0;

    &.horizontal-padding {
        padding-left: 20px;
        padding-right: 20px;
    }
    &.radius {
        border-radius: 8px;
    }
}
</style>
