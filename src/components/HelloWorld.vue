<script setup lang="ts">
import { useAppStore } from '@/store/modules/app'
defineProps<{ msg: string }>()

const appStore = useAppStore()
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="appStore.increment">
      Pinia count is {{ appStore.count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <p class="read-the-docs">
    Click on the Vite and Vue logos to learn more
  </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
