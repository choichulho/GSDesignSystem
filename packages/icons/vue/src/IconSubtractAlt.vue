<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M7 12a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 7 12"/><path fill="currentColor" fill-rule="evenodd" d="M12 22C6.475 22 2 17.525 2 12S6.475 2 12 2s10 4.475 10 10-4.475 10-10 10m0-1.5c4.685 0 8.5-3.815 8.5-8.5S16.685 3.5 12 3.5 3.5 7.315 3.5 12s3.815 8.5 8.5 8.5" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
