<!-- RootComponent.vue -->
<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue'
import CountComponent from './CountComponent.vue'
import { useProvideCounterStore } from './useCounterStore'

useProvideCounterStore(0)
</script>

<template>
  <div>
    <!-- <slot /> -->
    <CountComponent />
    <ButtonComponent />
  </div>
</template>
