<script setup lang="ts">
import { useGlobalState, useGlobalState2 } from './store'

const { count, increment, decrement, doubleCount } = useGlobalState2()
</script>

<template>
  <div>
    <div>count：{{ count }}</div>
    <div>doubleCount：{{ doubleCount }}</div>
    <button class="btn" @click="increment">
      +1
    </button>
    <button class="btn" @click="decrement">
      -1
    </button>
  </div>
</template>
