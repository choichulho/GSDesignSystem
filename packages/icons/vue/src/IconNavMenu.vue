<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M4.75 5h18.5a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1 0-1.5m18.5 8.25H4.75a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5m0 8.25H4.75a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
