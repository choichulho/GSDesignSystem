<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M17 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0"/><path fill="currentColor" d="M18 19.5a1.5 1.5 0 0 0 1.5-1.5v-5.75a.75.75 0 0 1 1.5 0V18a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8.5a3 3 0 0 1 3-3h10.75a.75.75 0 0 1 0 1.5H4c-.427 0-.81.181-1.083.468l7.356 5.964a1.15 1.15 0 0 0 1.454 0l4.007-3.248a.75.75 0 1 1 .944 1.165l-4.006 3.249a2.65 2.65 0 0 1-1.672.589 2.65 2.65 0 0 1-1.672-.59L2.5 9.062V18A1.5 1.5 0 0 0 4 19.5z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
