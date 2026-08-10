<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="m8.415 12.01 7.29-7.29a.992.992 0 0 0-.555-1.705 1.01 1.01 0 0 0-.835.27l-.025.025-7.995 7.99a.997.997 0 0 0 0 1.415l8 8c.19.195.435.295.69.305a1 1 0 0 0 .725-.28.99.99 0 0 0 0-1.435z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
