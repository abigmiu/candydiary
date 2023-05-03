<template>
    <div class="switch-wrapper" :class="{ active: modelValue }" @click="onClick">
        <div class="pointer"></div>
    </div>
</template>
<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        modelValue: boolean
    }>(),
    {
        modelValue: false
    }
)
const emits = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

const onClick = () => {
    emits('update:modelValue', !props.modelValue)
}
</script>

<style lang="scss" scoped>
.switch-wrapper {
    width: 36px;
    height: 16px;
    position: relative;
    background-color: #a8a8a8;
    border-radius: 20px;
    transition: all 0.3s;

    &.active {
        background-color: #cae8d6;

        .pointer {
            background-color: #52b177;
            transform: translateX(20px);
            &:active {
                box-shadow: 0px 0px 0px 7px rgba(#e9e9e9, 0.3);
            }
        }
    }
}

.pointer {
    width: 24px;
    height: 24px;
    transition: all 0.3s;
    border-radius: 50%;
    position: absolute;
    top: -4px;
    left: -4px;
    background-color: #e9e9e9;
    box-shadow: 0px 1px 0px 1px rgb(206 206 206);
    &:active {
        box-shadow: 0px 0px 0px 7px rgba(#52b177, 0.3);
    }
}
</style>
