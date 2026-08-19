<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M3.75 10.746a.75.75 0 0 1 .75.75v5.253a1.5 1.5 0 0 0 1.5 1.5h12v.001h.44l-1.97-1.97a.75.75 0 0 1 1.06-1.061l3.25 3.25a.75.75 0 0 1 0 1.061l-3.25 3.25a.75.75 0 1 1-1.06-1.06l1.97-1.97h-1.815v-.001H6c-1.65 0-3-1.35-3-3v-5.253a.75.75 0 0 1 .75-.75M6.47 1.22a.75.75 0 0 1 1.06 1.06L5.56 4.25h1.773L18 4.253c1.65 0 3 1.35 3 3v5.798a.75.75 0 1 1-1.5 0V7.253a1.5 1.5 0 0 0-1.5-1.5H7.219l-1.66-.003L7.53 7.72a.75.75 0 1 1-1.06 1.06L3.22 5.53a.75.75 0 0 1 0-1.06z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
