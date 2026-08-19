<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 1.5c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5M11.125 7a4.125 4.125 0 0 1 3.398 6.462l2.33 2.331a.75.75 0 1 1-1.06 1.06l-2.331-2.33A4.125 4.125 0 1 1 11.125 7m0 1.5A2.63 2.63 0 0 0 8.5 11.125a2.63 2.63 0 0 0 2.625 2.625 2.63 2.63 0 0 0 2.625-2.625A2.63 2.63 0 0 0 11.125 8.5"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
