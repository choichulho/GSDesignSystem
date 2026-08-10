<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M17 21c.827 0 1.5-.673 1.5-1.5v-15c0-.827-.673-1.5-1.5-1.5H7c-.827 0-1.5.673-1.5 1.5v15c0 .827.673 1.5 1.5 1.5zM7 1.5h10a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-15a3 3 0 0 1 3-3M8.75 6h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5m6.5 3.5h-6.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5M8.75 13h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
