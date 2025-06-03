import { defineStore } from 'pinia'
import api from '@/services/api'

interface Product {
  id: number
  name: string
  image: string
  price: number
}

interface ProductDetails extends Product {
  description: string
}

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
    selectedProduct: null as ProductDetails | null,
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

    async fetchProductDetails(id: number) {
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
