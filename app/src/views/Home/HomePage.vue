<template>
    <div>
        <HomeCalendar></HomeCalendar>
        <NavBar></NavBar>
        <div class="list">
            <CardItem></CardItem>
        </div>
        <button class="write-button">
            写日记
        </button>
    </div>
</template>

<script lang="ts" setup>
import NavBar from './Components/NavBar.vue';
import CardItem from './Components/CardItem.vue';
import HomeCalendar from './Components/HomeCalendar.vue';
</script>

<style lang="scss" scoped>
.list {
    padding: 0 10px;
}

.write-button {
    z-index: 1;
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 5px 10px;
    border-radius: 16px;
    border: none;
    outline: none;
    color: white;
    background-color: $light-color;
}
</style>
