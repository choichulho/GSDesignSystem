<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M21 17c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4V9h18zM9.51 3 6.905 7.5H3V7c0-2.2 1.8-4 4-4zm3.395 4.5H8.64l2.6-4.5h4.27zm4.33-4.49C19.325 3.135 21 4.88 21 7v.5h-6.36z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
