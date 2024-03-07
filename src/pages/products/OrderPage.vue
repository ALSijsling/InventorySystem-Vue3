<script setup>
    import { orderProducts } from '../../store/Inventory'

    const products = orderProducts()
</script>

<template>
    <router-link to="/" class="m-6 px-4 py-2 bg-orange-700 text-slate-100 rounded-lg">Home</router-link>
    <ul class="m-6">
       <li v-for="product in products" :key="product.id" class="list-disc">{{ product.name }}</li>
    </ul>
</template>