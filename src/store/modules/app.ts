import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      count: 0
    }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
