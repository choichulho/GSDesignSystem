<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M9.25 4a.75.75 0 0 1 0 1.5H5A1.5 1.5 0 0 0 3.5 7v12A1.5 1.5 0 0 0 5 20.5h12a1.5 1.5 0 0 0 1.5-1.5v-5.25a.75.75 0 0 1 1.5 0V19c0 1.65-1.35 3-3 3H5c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3zm12-2a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V4.56l-6.22 6.22a.747.747 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l6.22-6.22h-3.69a.75.75 0 0 1 0-1.5z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
