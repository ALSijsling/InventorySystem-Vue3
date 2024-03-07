<script setup>
    import ProductForm from '../../components/ProductForm.vue'
    import { addProduct } from "../../store/Inventory"

    const product = {}
</script>

<template>
    <ProductForm @submitProduct="(product) => addProduct(product)" :product="product" buttonValue="Add Product"/>
</template>