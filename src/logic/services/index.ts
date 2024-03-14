import { HttpAdapter } from '../adapter/HttpAdapter'
import { UserService } from './user'
import { UserServiceMock } from './user/mock'
// const config = useRuntimeConfig()
// console.log(config.public.api.isMockActive)
console.log(process.env)
const MOCK = false

const httpAdapter = new HttpAdapter()
const userService = !MOCK
  ? new UserService(httpAdapter)
  : new UserServiceMock()

export { userService }
