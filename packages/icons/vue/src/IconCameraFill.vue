<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M8.5 13c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5"/><path fill="currentColor" fill-rule="evenodd" d="M17.286 5.286H20a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8.286a3 3 0 0 1 3-3h3l1.402-1.603A2 2 0 0 1 9.907 3h4.265a2 2 0 0 1 1.414.586zM17.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7 13a5 5 0 1 0 10 0 5 5 0 0 0-10 0" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
