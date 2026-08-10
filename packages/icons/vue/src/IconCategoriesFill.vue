<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M16.75 2h-8.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5m2 2.5H6.25a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5M6 7h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
