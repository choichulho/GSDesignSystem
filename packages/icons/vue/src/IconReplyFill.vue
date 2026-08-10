<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M11.5 8.095v-3.51c0-.805-.6-1.53-1.4-1.585-.46-.03-.88.15-1.17.45l-7.49 7.495C1.145 11.235 1 11.62 1 12s.145.765.44 1.055l7.49 7.49c.295.3.71.48 1.17.45.805-.05 1.405-.775 1.405-1.58V16.08c3.835 0 6.905 1.99 9.165 4.65a.75.75 0 0 0 1.325-.46q.009-.24.01-.48c0-6.12-4.71-11.695-10.5-11.695z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
