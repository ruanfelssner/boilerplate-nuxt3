import { Helper } from '~/logic/helpers/helper'
import type { User } from '~/logic/types/user'

export class UserServiceMock {
  async getUser(): Promise<User> {
    return (await Helper.delayAsync({
      id: '1',
      name: 'John Doe',
      email: 'teste@teste.com'
    })) as User
  }
}
