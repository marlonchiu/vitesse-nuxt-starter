import { createGlobalState, useStorage } from '@vueuse/core'

import { computed, shallowRef } from 'vue'

// 无持久性（存储在内存中）
export const useGlobalState = createGlobalState(

  () => {
    // state
    const count = shallowRef(0)

    // 计算属性
    const doubleCount = computed(() => count.value * 2)

    // 动作
    function increment() {
      count.value++
    }
    // 动作
    function decrement() {
      count.value--
    }

    return { count, doubleCount, increment, decrement }
  },
)

// 持久化存储
export const useGlobalState2 = createGlobalState(
  () => {
    // state
    const count = shallowRef(0)

    // 存储
    const countStorage = useStorage('count', 0)

    // 动作
    function increment() {
      count.value++
    }
    // 动作
    function decrement() {
      count.value--
    }

    // 获取
    count.value = countStorage.value

    // 监听
    watchEffect(() => {
      countStorage.value = count.value
    })

    // 获取
    const doubleCount = computed(() => count.value * 2)
    return { count, doubleCount, increment, decrement }
  },
)
