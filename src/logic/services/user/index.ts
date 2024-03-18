import type { User } from '~/logic/types/user'
import { HttpAdapter } from '../../adapter/HttpAdapter'

export class UserService {
  constructor(private httpAdapter: HttpAdapter) {
    this.httpAdapter = httpAdapter
  }
  async getUser(): Promise<User> {
    return this.httpAdapter.get({
      url: 'http://google.com/'
    })
  }
  async getHome(): Promise<any> {
    return this.httpAdapter.get({
      url: '/asdasdasd'
    })
  }
  async getUserById(id: number): Promise<User> {
    return this.httpAdapter.get({
      url: `/user/${id}`
    })
  }
}
