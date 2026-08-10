<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M12 20.5c-4.687 0-8.5-3.813-8.5-8.5S7.313 3.5 12 3.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m0 5.863a1.182 1.182 0 1 0 0-2.364 1.182 1.182 0 0 0 0 2.364m.921.58 3.678-.395a.65.65 0 1 1 .138 1.293l-3.258.35v3.156q0 .047.01.095l.93 4.784a.65.65 0 0 1-1.276.249l-.876-4.504h-.53l-.877 4.504a.65.65 0 1 1-1.276-.25l.931-4.783a.5.5 0 0 0 .01-.095V9.69l-3.263-.35A.65.65 0 0 1 7.4 8.048l3.678.395a1 1 0 0 0 .107.006h1.628a1 1 0 0 0 .107-.006" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
