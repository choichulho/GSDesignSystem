<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="m13.06 12 4.72-4.72a.75.75 0 0 0 .22-.53.754.754 0 0 0-.75-.75.75.75 0 0 0-.53.22L12 10.94 7.28 6.22A.75.75 0 0 0 6.75 6a.754.754 0 0 0-.75.75c0 .195.075.385.22.53L10.94 12l-4.72 4.72a.75.75 0 0 0-.22.53.754.754 0 0 0 .75.75c.19 0 .385-.075.53-.22L12 13.06l4.72 4.72c.145.145.34.22.53.22a.754.754 0 0 0 .75-.75.75.75 0 0 0-.22-.53z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
