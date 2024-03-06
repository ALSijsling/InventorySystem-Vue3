<script setup>
    import { getAllProducts } from "./../../store/Inventory.js"
    import ProductsTable from "./../../components/ProductsTable.vue"
</script>

<template>
    <ProductsTable :products="getAllProducts()" />
</template>