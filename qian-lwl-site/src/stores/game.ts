import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
  state: () => ({
    title: '千连万理',
    description: '由大工Galgame同好会打造。'
  })
})
