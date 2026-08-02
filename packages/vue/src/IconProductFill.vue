<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M15 3h3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h3v3a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 15 6zM6.75 18h6.5a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0 0 1.5m3.5-4.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5" clip-rule="evenodd"/><path fill="currentColor" d="M13.5 6h-3V3h3z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
