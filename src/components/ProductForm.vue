<script setup>
    import { ref } from 'vue'
    import router from './../router/index.js'

    const props = defineProps(['product'])
    const emit = defineEmits(['submitProduct'])

    const product = ref({...props.product})

    const onSubmit = () => {
        emit('submitProduct', product.value)
        router.push('/')
    }
</script>

<template>
    <form @submit.prevent="onSubmit">
        <div class="inline-flex">
            <button type="submit" class="m-6 px-4 py-2 bg-blue-600 text-slate-100 rounded-lg">Add Product</button>
            <button @click="router.push('/')" class="m-6 px-4 py-2 bg-gray-600 text-slate-100 rounded-lg">Cancel</button>
        </div>
    </form>
</template>