<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M21 17c0 1.378-1.122 2.5-2.5 2.5V12c1.378 0 2.5 1.121 2.5 2.5zM3 17v-2.5C3 13.121 4.122 12 5.5 12v7.5A2.503 2.503 0 0 1 3 17m15.5-6.5v-1a6.5 6.5 0 1 0-13 0v1a4 4 0 0 0-4 4V17a4 4 0 0 0 4 4H6a1 1 0 0 0 1-1V9.5c0-2.757 2.243-5 5-5s5 2.243 5 5V20a1 1 0 0 0 1 1h.5a4 4 0 0 0 4-4v-2.5a4 4 0 0 0-4-4" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
