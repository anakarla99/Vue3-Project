<template>
  <div>
    <div v-if="store.loading" class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="i in 6" :key="i" class="animate-pulse bg-gray-300 h-48 rounded"></div>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ProductCard
        v-for="product in store.products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductStore } from '@/store/productStore';
import ProductCard from './ProductCard.vue';

const store = useProductStore();

onMounted(() => {
  store.fetchProducts();
});
</script>
