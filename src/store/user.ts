import { defineStore } from 'pinia'

import { User } from '~/logic/types'

export const useUserStore = defineStore('userStore', () => {
  const user = ref<User>({
    id: '',
    name: '',
    email: ''
  })

  return {
    user,
    persist: true
  }
})
