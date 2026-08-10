<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M4 19.5h17.25a.75.75 0 0 1 0 1.5H4a2 2 0 0 1-2-2V3.75a.75.75 0 0 1 1.5 0V19a.5.5 0 0 0 .5.5m14.5-12C18.5 6.122 17.378 5 16 5a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5 1.378 0 2.5-1.121 2.5-2.5m1.5 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0M9 12.25a1.251 1.251 0 0 0-2.5 0 1.251 1.251 0 0 0 2.5 0m1.5 0a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0m9 3.75a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M17 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
