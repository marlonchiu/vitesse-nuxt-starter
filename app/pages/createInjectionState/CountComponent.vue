<!-- CountComponent.vue -->
<script setup lang="ts">
import { useCounterStore } from './useCounterStore'

// 使用非空断言操作符来忽略未提供存储的情况。
const { count, double } = useCounterStore()!
// 如果要允许组件在未提供存储的情况下工作，可以改用以下代码：
// const { count, double } = useCounterStore() ?? { count: ref(0), double: ref(0) }
// 同样，您可以使用另一个钩子来提供默认值
// const { count, double } = useCounterStoreWithDefaultValue()
// 或者抛出错误
// const { count, double } = useCounterStoreOrThrow()
</script>

<template>
  <ul>
    <li>
      计数: {{ count }}
    </li>
    <li>
      两倍: {{ double }}
    </li>
  </ul>
</template>
