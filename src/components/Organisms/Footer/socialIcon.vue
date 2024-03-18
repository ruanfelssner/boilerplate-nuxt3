<template>
  <a
    :href="link"
    class="placeSocialIcon-item bg-white opacity-100 rounded-full w-7 h-7 inline-flex justify-center items-center mr-4 hover:opacity-80"
    target="_blank"
  >
    <ff-icon :name="name" size="23" />
  </a>
</template>
<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped>
a {
  color: #020125;
}
</style>
