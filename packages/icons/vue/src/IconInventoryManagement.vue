<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M9 6.5V4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v2.5zm10 0h-2.5V4a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v2.5H5a3 3 0 0 0-3 3V17a3 3 0 0 0 3 3h6.75a.75.75 0 0 0 0-1.5H5A1.5 1.5 0 0 1 3.5 17V9.5A1.5 1.5 0 0 1 5 8h14a1.5 1.5 0 0 1 1.5 1.5v1.75a.75.75 0 0 0 1.5 0V9.5a3 3 0 0 0-3-3m-4 7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zm4 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM15 19a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zm4 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
