<template>
  <div class="p-4" v-if="product">
    <h1 class="text-2xl font-bold mb-4">{{ product.name }}</h1>
    <img :src="product.image" class="w-full h-64 object-cover rounded mb-4" />
    <p class="text-lg text-gray-600">{{ product.description }}</p>
  </div>
  <div v-else class="p-4">Cargando...</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '@/store/productStore';

const route = useRoute();
const store = useProductStore();

onMounted(() => {
  store.fetchProductDetails(route.params.id as string);
});

const product = store.selectedProduct;
</script>
