<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div v-for="n in 8" :key="n" class="animate-pulse bg-gray-300 h-60 rounded-md" />
  </div>
</template>
