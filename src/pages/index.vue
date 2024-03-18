<template>
  <ff-container>
    <ff-button
      button-text="Primary"
      size="medium"
      type="primary"
    >
      <h2>teste do teste</h2>
    </ff-button>
  </ff-container>
</template>
<script>
import { userService } from '~/logic/services'

export default {
  async mounted() {
    const data = await userService.getUser()
    console.log(data)
  },
  methods: {
    async getUser() {
      const data = await userService.getUser()
      console.log(data)
    }
  }
}
</script>
<style lang="scss" scoped>
.button {
  color: red;
  &:hover {
    color: blue;
  }
}
</style>
<!-- <script setup>
import { useUserStore } from '@/store/user'
const store = useUserStore()
console.log(store)
</script> -->
