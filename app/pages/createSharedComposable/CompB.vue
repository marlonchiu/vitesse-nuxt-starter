<script setup lang="ts">
import { createSharedComposable, useMouse } from '@vueuse/core'

const useSharedMouse = createSharedComposable(useMouse)
// 将重用先前的状态，不会注册新的事件监听器
const { x, y } = useSharedMouse()
</script>

<template>
  <div>
    <label for="">CompB</label>
    <ul>
      <li>
        x: {{ x }}
      </li>
      <li>
        y: {{ y }}
      </li>
    </ul>
  </div>
</template>
