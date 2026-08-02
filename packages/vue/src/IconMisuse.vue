<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M3.5 12c0 4.687 3.813 8.5 8.5 8.5s8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5S3.5 7.313 3.5 12M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m13.72-4.78a.75.75 0 1 1 1.06 1.06L13.06 12l3.72 3.72a.75.75 0 1 1-1.06 1.06L12 13.06l-3.72 3.72a.75.75 0 1 1-1.06-1.06L10.94 12 7.22 8.28a.75.75 0 1 1 1.06-1.06L12 10.94z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
