import { createInjectionState } from '@vueuse/core'
// useCounterStore.ts
import { computed, shallowRef } from 'vue'
// 自定义 injectionKey
const CounterStoreKey = 'counter-store'
const [useProvideCounterStore, useCounterStore] = createInjectionState((initialValue: number) => {
  // state
  const count = shallowRef(initialValue)

  // 计算属性
  const double = computed(() => count.value * 2)

  // 动作
  function increment() {
    count.value++
  }

  return { count, double, increment }
}, { injectionKey: CounterStoreKey })

export { useProvideCounterStore }
// 如果想隐藏 `useCounterStore` 并将其包装在默认值逻辑或抛出错误逻辑中，请不要导出 `useCounterStore`
export { useCounterStore }

export function useCounterStoreWithDefaultValue() {
  return useCounterStore() ?? {
    count: shallowRef(0),
    double: shallowRef(0),
    increment: () => {},
  }
}

export function useCounterStoreOrThrow() {
  const counterStore = useCounterStore()
  if (counterStore == null)
    throw new Error('请在适当的父组件上调用 `useProvideCounterStore`')
  return counterStore
}
