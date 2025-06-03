<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Tienda</h1>
    <SkeletonGrid v-if="isLoading" />
    <ProductGrid
      v-else
      :products="products"
      @view-details="goToDetails"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductStore } from '@/store/productStore';
import ProductGrid from '@/components/ProductGrid.vue';
import { onMounted } from 'vue';
import { useProductStore } from '@/store/productStore';

const store = useProductStore()
const { products, isLoading } = store
const router = useRouter()

onMounted(() => {
  store.fetchProducts()
})

function goToDetails(id: number) {
  router.push({ name: 'ProductDetails', params: { id } })
}
</script>
