import { HttpAdapter } from '../adapter/HttpAdapter'
import { UserService } from './user'
import { UserServiceMock } from './user/mock'
const config = useRuntimeConfig()
const MOCK = config.public.api.isMockActive

const httpAdapter = new HttpAdapter()
const userService = !MOCK
  ? new UserService(httpAdapter)
  : new UserServiceMock()

export { userService }
