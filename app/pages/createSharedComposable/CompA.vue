<script setup lang="ts">
import { useSharedComposable } from './useSharedComposable'

const { x, y } = useSharedComposable()
</script>

<template>
  <div>
    <label for="">CompA</label>
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
