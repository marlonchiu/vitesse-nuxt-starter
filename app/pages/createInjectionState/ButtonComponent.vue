<!-- ButtonComponent.vue -->
<script setup lang="ts">
import { useCounterStore } from './useCounterStore'

// 使用非空断言操作符来忽略未提供存储的情况。
const { increment } = useCounterStore()!
</script>

<template>
  <button @click="increment">
    +
  </button>
</template>
