<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M15.25 7.5h-6.5a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 0 1.5m0 3.5h-6.5a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 0 1.5m-3 3.5h-3.5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 0 1.5M17 1.5H7a3 3 0 0 0-3 3v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-15a3 3 0 0 0-3-3" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
