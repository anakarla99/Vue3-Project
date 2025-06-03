import { defineStore } from 'pinia'
import api from '@/services/api'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    selectedProduct: null,
    loading: false,
  }),
  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        const res = await api.get('/products/published/web');
        this.products = res.data;
      } catch (err) {
        console.error(err);
        alert('Ocurrió un error al cargar los productos. Intente más tarde.');
      } finally {
        this.loading = false;
      }
    },

    async fetchProductDetails(id: string) {
      this.loading = true;
      try {
        const res = await api.get(`/products/${id}/details`);
        this.selectedProduct = res.data;
      } catch (err) {
        console.error(err);
        alert('Ocurrió un error al cargar los productos. Intente más tarde.');
      } finally {
        this.loading = false;
      }
    }
  }
})
