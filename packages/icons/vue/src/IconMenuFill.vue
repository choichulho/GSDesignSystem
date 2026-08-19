<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M3.25 3h17.5a1.25 1.25 0 1 1 0 2.5H3.25a1.25 1.25 0 1 1 0-2.5m17.5 7.75H3.25a1.25 1.25 0 1 0 0 2.5h17.5a1.25 1.25 0 1 0 0-2.5m0 7.75H3.25a1.25 1.25 0 1 0 0 2.5h17.5a1.25 1.25 0 1 0 0-2.5"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
