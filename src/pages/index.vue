<template>
  <ff-container>
    <ff-button
      button-text="Primary"
      size="medium"
      type="primary"
    />
  </ff-container>
</template>
<script>
import { userService } from '~/logic/services'

export default {
  async mounted() {
    const data = await userService.getUser()
    console.log(data)
  }
}
</script>
<!-- <script setup>
import { useUserStore } from '@/store/user'
const store = useUserStore()
console.log(store)
</script> -->
