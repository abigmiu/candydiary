<template>
    <NavigationCmp title="升级套餐"></NavigationCmp>
    <div class="container">
        <button class="pay">去支付</button>
        <ul class="list">
            <li class="list-item" v-for="(item, index) in list" :key="index">
                <div>
                    {{ item.name }}
                    <span class="price">{{ item.price }}</span>
                    <span class="price-unit">元/年</span>
                </div>
                <div class="storage">
                    容量：<span class="highlight">{{ item.storage }}</span>
                </div>
                <div>
                    事件数：<span class="highlight">{{ item.events }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

import NavigationCmp from '@/components/NavigationCmp.vue'
const list = reactive([
    {
        name: '免费版',
        price: 0,
        storage: '100MB',
        events: '300条'
    },
    {
        name: 'mini版',
        price: 12,
        storage: '500MB',
        events: '无限'
    },
    {
        name: '标准版',
        price: 18,
        storage: '1GB',
        events: '无限'
    },
    {
        name: '大容量版',
        price: 28,
        storage: '2GB',
        events: '无限'
    }
])
</script>

<style lang="scss">
.container {
    padding: 20px;

    .pay {
        display: block;
        padding: 5px 20px;
        color: #ffffff;
        font-size: 18px;
        border-radius: 20px;
        background-color: #ee6457;
        outline: none;
        border: none;
        margin: 0 auto;
    }

    .list {
        margin-top: 20px;
        list-style: none;

        &-item {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 10px 8px;
            color: #545454;
            font-size: 16px;

            margin-bottom: 15px;
        }

        .price {
            font-size: 20px;
            color: #db9c32;

            &-unit {
                font-size: 12px;
            }
        }

        .highlight {
            color: #98d3af;
        }

        .storage {
            margin: 8px 0;
        }
    }
}
</style>
