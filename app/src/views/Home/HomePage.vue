<template>
    <div>
        <HomeCalendar></HomeCalendar>
        <NavBar></NavBar>
        <div class="list">
            <CardItem></CardItem>
            <CardItem></CardItem>
            <CardItem></CardItem>
            <CardItem></CardItem>
            <CardItem></CardItem>
            <CardItem></CardItem>
            <CardItem></CardItem>

            <CardItem></CardItem>
            <CardItem></CardItem>
            <CardItem></CardItem>
            <CardItem></CardItem>
            <CardItem></CardItem>
        </div>
    </div>
</template>

<script lang="ts" setup>
import NavBar from './Components/NavBar.vue';
import CardItem from './Components/CardItem.vue';
import HomeCalendar from './Components/HomeCalendar.vue';
</script>

<style scoped>
.list {
    padding: 0 10px;
}
</style>
