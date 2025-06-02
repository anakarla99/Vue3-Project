<template>
  <div
    class="bg-white p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
    @click="goToDetails"
  >
    <img :src="product.image" alt="Producto" class="w-full h-48 object-cover rounded mb-2" />
    <h2 class="text-lg font-semibold">{{ product.name }}</h2>
    <p class="text-gray-500">{{ product.price }} USD</p>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps<{
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
  };
}>();

const router = useRouter();
const goToDetails = () => {
  router.push(`/product/${props.product.id}`);
};
</script>
