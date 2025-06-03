<template>
  <div class="p-6">
    <div v-if="product">
      <img :src="product.image" class="w-full h-60 object-cover rounded" />
      <h2 class="text-3xl font-bold mt-4">{{ product.name }}</h2>
      <p class="mt-2 text-gray-600">{{ product.description }}</p>
      <p class="text-xl text-blue-600 mt-2">${{ product.price }}</p>
    </div>
    <SkeletonDetails v-else />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '@/store/productStore';
import SkeletonDetails from '@/components/SkeletonDetails.vue';

const route = useRoute();
const store = useProductStore();

onMounted(() => {
  store.fetchProductDetails(route.params.id);
  if (!isNaN(id)) {
    store.fetchProductDetails(id)
  };
});

const product = store.selectedProduct;
</script>
