<template>
  <div class="p-4" v-if="product">
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
