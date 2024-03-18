import {
  NitroFetchRequest,
  $Fetch
} from 'nitropack'

const config = useRuntimeConfig()

const baseUrl = config.public.api.apiBaseUrl

const fetch: $Fetch<any, NitroFetchRequest> = (
  input: RequestInfo,
  init?: RequestInit | undefined
): Promise<Response> => {
  const headers: HeadersInit = init?.headers || {}
  const url =
    typeof input === 'string' &&
    input.includes('http')
      ? input
      : `${baseUrl}${input}`
  return window.fetch(url, {
    ...init,
    headers
  })
}

const fetchErrorFactory = (error: any) => {
  return error
}

interface GetParams {
  url: string
  queryString?: string
  headers?: object
  options?: object
  path?: any
}

interface PostParams {
  url: string
  queryString?: string
  headers?: object
  options?: object
  body?: any
  path?: any
}

export interface IHttpAdapter {
  get(p: GetParams): Promise<any>
  post(p: PostParams): Promise<any>
  request(p: any): Promise<any>
  put(request?: any): Promise<any>
  delete(request?: any): Promise<any>
}

export class HttpAdapter implements IHttpAdapter {
  get(p: GetParams): Promise<any> {
    return fetch(
      `${p.url}${p.queryString ? `?${new URLSearchParams(p.queryString)}` : ''}`
    )
      .then((response: any) =>
        Promise.resolve(response.json())
      )
      .catch((error: any) =>
        Promise.reject(fetchErrorFactory(error))
      )
  }
  post(p: PostParams): Promise<any> {
    return fetch(p.url, {
      method: 'POST',
      body: JSON.stringify(p.body)
    })
      .then((response: any) =>
        Promise.resolve(response.json())
      )
      .catch((error: any) =>
        Promise.reject(fetchErrorFactory(error))
      )
  }
  request(p: any): Promise<any> {
    return fetch(p.url, p.options)
      .then((response: any) =>
        Promise.resolve(response.json())
      )
      .catch((error: any) =>
        Promise.reject(fetchErrorFactory(error))
      )
  }
  put(p: any): Promise<any> {
    return fetch(p.url, {
      method: 'PUT',
      body: JSON.stringify(p.body)
    })
      .then((response: any) =>
        Promise.resolve(response.json())
      )
      .catch((error: any) =>
        Promise.reject(fetchErrorFactory(error))
      )
  }
  delete(p: any): Promise<any> {
    return fetch(p.url, { method: 'DELETE' })
      .then((response: any) =>
        Promise.resolve(response.json())
      )
      .catch((error: any) =>
        Promise.reject(fetchErrorFactory(error))
      )
  }
}
