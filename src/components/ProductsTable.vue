<script setup>
    import { ref } from "vue"
    import router from "../router"
    import TableData from "./TableData.vue"

    const props = defineProps(["products"])
    const products = ref(props.products)
</script>

<template>
    <table>
        <thead class="border-b-2 border-stone-500 border-solid">
            <tr class="font-bold">
                <TableData>Product</TableData>
                <TableData>minimumAmount</TableData>
                <TableData>actualAmount</TableData>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="products.id">
                <TableData>{{ product.name }}</TableData>
                <TableData>{{ product.minimumAmount }}</TableData>
                <TableData><input v-model="product.actualAmount" type="number" min="0" class="border border-slate-500 border-solid rounded-md pl-2" /></TableData>
                <TableData><router-link :to="{name: 'Edit', params:{id: product.id}}" class="m-6 px-2 py-1 bg-blue-800 text-slate-100 rounded-lg">Edit</router-link></TableData>
            </tr>
        </tbody>
    </table>

    <button @click="router.push('Create')" class="m-6 px-4 py-2 bg-blue-600 text-slate-100 rounded-lg">Add Product</button>
</template>