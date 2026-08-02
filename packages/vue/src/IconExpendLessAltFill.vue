<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M8.279 13.813 12 10.09l3.72 3.72a.75.75 0 0 0 1.061-1.06l-4.248-4.248-.002-.003a.747.747 0 0 0-1.064.003l-4.249 4.25a.75.75 0 1 0 1.061 1.06" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
