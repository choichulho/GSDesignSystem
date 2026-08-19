<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M9.5 13a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 9.5 21h-5A1.5 1.5 0 0 1 3 19.5v-5A1.5 1.5 0 0 1 4.5 13zm-5 6.5h5v-5h-5zM18 3c1.65 0 3 1.35 3 3v9c0 1.65-1.35 3-3 3h-3.25a.75.75 0 0 1 0-1.5H18a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 18 4.5H9A1.5 1.5 0 0 0 7.5 6v3.25a.75.75 0 0 1-1.5 0V6c0-1.65 1.35-3 3-3z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
