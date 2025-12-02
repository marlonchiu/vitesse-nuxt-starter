import { createSharedComposable, useMouse } from '@vueuse/core'

export function useSharedComposable() {
  const useSharedMouse = createSharedComposable(useMouse)
  // 将重用先前的状态，不会注册新的事件监听器
  const { x, y } = useSharedMouse()

  return { x, y }
}
