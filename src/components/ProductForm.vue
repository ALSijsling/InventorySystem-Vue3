<script setup>
    import { ref } from 'vue'
    import router from './../router/index.js'

    const props = defineProps(['product', 'buttonValue'])
    const emit = defineEmits(['submitProduct'])

    const product = ref({...props.product})

    const onSubmit = () => {
        emit('submitProduct', product.value)
        router.push('/')
    }
</script>

<template>
    <div class="max-w-fit">
        <form @submit.prevent="onSubmit">
            <div class="my-4 mx-auto">
                <label for="name" class="block mx-4">Name of Product</label>
                <input v-model="product.name" id="name" type="text" class="border border-slate-500 border-solid rounded-md pl-2" required>
            </div>
            <div class="my-4 mx-auto">
                <label for="minAmount" class="block mx-4">Amount needed</label>
                <input v-model="product.minimumAmount" id="minAmount" type="number" min="0" class="border border-slate-500 border-solid rounded-md pl-2" required>
            </div>
            <div class="my-4 mx-auto">
                <label for="amount" class="block mx-4">Amount in inventory</label>
                <input v-model="product.actualAmount" id="amount" type="number" min="0" class="border border-slate-500 border-solid rounded-md pl-2" required>
            </div>
            <div class="inline-flex">
                <button type="submit" class="mt-4 px-4 py-2 bg-blue-600 text-slate-100 rounded-lg">{{props.buttonValue}}</button>
                <button @click="router.push('/')" class="mt-4 ml-2 px-4 py-2 bg-gray-600 text-slate-100 rounded-lg">Cancel</button>
            </div>
        </form>
    </div>
</template>