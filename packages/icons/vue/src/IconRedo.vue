<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="m20.78 8.47-5.25-5.25a.75.75 0 0 0-1.061 1.06l3.96 3.96H9a6 6 0 0 0 0 12h3.24a.75.75 0 1 0 0-1.5H9a4.505 4.505 0 0 1-4.5-4.5c0-2.48 2.02-4.5 4.5-4.5h9.45l-3.98 3.98a.75.75 0 1 0 1.061 1.06l5.25-5.25a.75.75 0 0 0 0-1.06" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
