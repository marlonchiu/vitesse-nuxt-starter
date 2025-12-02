<script setup>
import { injectLocal, provideLocal } from '@vueuse/core'

provideLocal('MyInjectionKey', 1)
// const injectedValue = injectLocal('MyInjectionKey') // injectedValue === 1
</script>

<template>
  <div>
    父组件: provideLocal
  </div>
</template>
