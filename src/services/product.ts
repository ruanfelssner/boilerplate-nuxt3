import { fetchGet } from './config'
import type { Product } from '@/types/product'

export default {
  getProduct(id: number): Promise<Product> {
    return fetchGet(`/product/${id}`)
  }
}
