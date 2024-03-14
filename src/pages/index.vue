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
import { UserService } from '@/services'
export default {
  async mounted() {
    try {
      const data = await UserService.getUser()
      console.log(data, 'data')
    } catch (e) {
      console.log(e, 'error')
    }
  }
}
</script>
<!-- <script setup>
import { useUserStore } from '@/store/user'
const store = useUserStore()
console.log(store)
</script> -->
