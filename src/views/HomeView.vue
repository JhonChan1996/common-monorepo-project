<script setup>
import { cButton } from '@common/components';
</script>

<template>
  <div class="warp">
    <cButton />
  </div>
</template>
<style scoped>
.warp {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
