<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M19 17.5h3.25a.75.75 0 0 1 0 1.5H19v3.25a.75.75 0 0 1-1.5 0V19H8a3 3 0 0 1-3-3V6.5H1.75a.75.75 0 0 1 0-1.5H5V1.75a.75.75 0 0 1 1.5 0V16c0 .827.673 1.5 1.5 1.5zM17.5 14V8c0-.827-.673-1.5-1.5-1.5H9.5V5H16a3 3 0 0 1 3 3v6z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
