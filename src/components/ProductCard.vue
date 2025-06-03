<template>
  <div class="rounded-xl shadow-md bg-white p-4 hover:shadow-xl transition">
    <img :src="product.image" class="h-40 w-full object-cover rounded-md" />
    <h2 class="text-lg font-bold mt-2">{{ product.name }}</h2>
    <p class="text-gray-700 mt-1">${{ product.price }}</p>
    <button
      @click="$emit('view-details', product.id)"
      class="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      View Details
    </button>
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
