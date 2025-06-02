import { defineStore } from 'pinia'
import axios from 'axios'

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
        const res = await axios.get('/products/published/web');
        this.products = res.data;
      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
      }
    },

    async fetchProductDetails(id: string) {
      this.loading = true;
      try {
        const res = await axios.get(`/products/${id}/details`);
        this.selectedProduct = res.data;
      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
      }
    }
  }
})
