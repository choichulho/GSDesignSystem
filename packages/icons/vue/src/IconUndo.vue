<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="m3.22 8.47 5.25-5.25a.75.75 0 0 1 1.06 1.06L5.57 8.24H15a6 6 0 0 1 0 12h-3.24a.75.75 0 1 1 0-1.5H15c2.481 0 4.5-2.018 4.5-4.5 0-2.48-2.019-4.5-4.5-4.5H5.55l3.98 3.98a.75.75 0 1 1-1.06 1.06L3.22 9.53a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
