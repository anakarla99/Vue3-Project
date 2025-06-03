<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @view-details="onViewDetails"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductStore } from '@/store/productStore';
import ProductCard from './ProductCard.vue';

defineProps<{
  products: {
    id: number
    name: string
    image: string
    price: number
  }[]
}>()
defineEmits(['view-details'])

const onViewDetails = (id: number) => {
  emit('view-details', id)
}

const store = useProductStore();

onMounted(() => {
  store.fetchProducts();
});
</script>
