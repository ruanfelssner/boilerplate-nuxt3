import { NitroFetchRequest, $Fetch } from 'nitropack'

const baseUrl = 'https://swapi.py4e.com/api'

export const fetch: $Fetch<any, NitroFetchRequest> = <T>(
  input: RequestInfo,
  init?: RequestInit | undefined
): Promise<Response> => {
  const token = localStorage.getItem('token')
  const headers: HeadersInit = init?.headers || {}
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }
  return window.fetch(`${baseUrl}${input}`, { ...init, headers })
}

const fetchErrorFactory = (error: any) => {
  let e

  if (error.response) {
    e = {
      ...error.response.data,
      code: error.response.status
    }
  } else if (error.request) {
    e = {
      ...error.request,
      code: error.request.status
    }
  } else {
    e = {
      ...error,
      code: null
    }
  }

  return e
}

export const fetchGet = <T>(
  url: string,
  init?: RequestInit | undefined,
  params?: any
): Promise<T> => {
  return fetch(`${url}${params ? `?${new URLSearchParams(params)}` : ''}`, init)
    .then(response => Promise.resolve(response.json()))
    .catch(error => Promise.reject(fetchErrorFactory(error)))
}

export const fetchPost = <T>(
  url: string,
  body: any,
  init?: RequestInit | undefined
): Promise<T> => {
  return fetch(url, { ...init, method: 'POST', body: JSON.stringify(body) })
    .then(response => Promise.resolve(response.json()))
    .catch(error => Promise.reject(fetchErrorFactory(error)))
}

export const fetchPut = <T>(url: string, body: any, init?: RequestInit | undefined): Promise<T> => {
  return fetch(url, { ...init, method: 'PUT', body: JSON.stringify(body) })
    .then(response => Promise.resolve(response.json()))
    .catch(error => Promise.reject(fetchErrorFactory(error)))
}

export const fetchDelete = <T>(url: string, init?: RequestInit | undefined): Promise<T> => {
  return fetch(url, { ...init, method: 'DELETE' })
    .then(response => Promise.resolve(response.json()))
    .catch(error => Promise.reject(fetchErrorFactory(error)))
}

export default {
  fetch,
  fetchGet,
  fetchPost,
  fetchPut,
  fetchDelete
}
