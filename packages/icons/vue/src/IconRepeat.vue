<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="m5.56 4.25 1.97-1.97a.749.749 0 1 0-1.06-1.06L3.22 4.47a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 0 0 1.06-1.06L5.56 5.75l1.659.003h10.78a1.5 1.5 0 0 1 1.5 1.5v5.798a.75.75 0 1 0 1.5 0V7.253c0-1.65-1.35-3-3-3L7.334 4.25zm12.44 14H6a1.5 1.5 0 0 1-1.5-1.5v-5.253a.75.75 0 0 0-1.5 0v5.252c0 1.651 1.35 3 3 3h10.625v.002h1.816l-1.971 1.97a.75.75 0 0 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06l-3.25-3.251a.75.75 0 0 0-1.06 1.06l1.97 1.971z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
