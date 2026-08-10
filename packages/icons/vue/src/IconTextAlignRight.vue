<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M4.75 6.5h14.5a.75.75 0 0 0 0-1.5H4.75a.75.75 0 0 0 0 1.5m6 4.5h8.5a.75.75 0 0 0 0-1.5h-8.5a.75.75 0 0 0 0 1.5m8.5 4.5H4.75a.75.75 0 0 1 0-1.5h14.5a.75.75 0 0 1 0 1.5m-8.5 4.5h8.5a.75.75 0 0 0 0-1.5h-8.5a.75.75 0 0 0 0 1.5" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
