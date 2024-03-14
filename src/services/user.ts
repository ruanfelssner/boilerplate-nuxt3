import { fetchGet } from './config'
import type { User } from '@/types/user'

export default {
  getUser(): Promise<User> {
    return fetchGet('/')
  },
  getUserById(id: number): Promise<User> {
    return fetchGet(`/user/${id}`)
  }
}
