<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="m11.468 8.502.001-.002a.75.75 0 0 1 1.062 0l.002.003 4.248 4.248a.75.75 0 0 1-1.06 1.061L12 10.092l-3.722 3.72a.75.75 0 1 1-1.06-1.06l4.248-4.248z"/><path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-1.5c4.687 0 8.5-3.813 8.5-8.5S16.687 3.5 12 3.5 3.5 7.313 3.5 12s3.813 8.5 8.5 8.5" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
