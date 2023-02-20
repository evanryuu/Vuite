<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <button @click="router.push('/')">
    Go to home
  </button>
  <button @click="router.push('/about')">
    Go to About
  </button>
  <router-view />
</template>

<style scoped>

</style>
