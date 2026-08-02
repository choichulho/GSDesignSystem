<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M4 19.5h17.25a.75.75 0 0 1 0 1.5H4a2 2 0 0 1-2-2V3.75a.75.75 0 0 1 1.5 0V19a.5.5 0 0 0 .5.5M18.5 8a1.5 1.5 0 1 0-.001-3.001A1.5 1.5 0 0 0 18.5 8M16 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-4.5-6.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M8 16a1.5 1.5 0 1 0-.001-3.001A1.5 1.5 0 0 0 8 16" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
