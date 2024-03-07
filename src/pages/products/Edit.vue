<script setup>
    import { useRoute } from 'vue-router'
    import ProductForm from '../../components/ProductForm.vue'
    import {getProductById, updateProduct } from '../../store/Inventory'

    const route = useRoute()

    const id = route.params.id
    const product = getProductById(id)
</script>

<template>
    <ProductForm @submitProduct="(product) => updateProduct(product)" :product="product" buttonValue="Update Product" />
</template>