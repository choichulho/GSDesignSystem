<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M21.49 5.895c-.33 0-.665.11-.955.355L17 9.215V7.5c0-1.655-1.345-3-3-3H4c-1.655 0-3 1.345-3 3v9c0 1.655 1.345 3 3 3h10c1.655 0 3-1.345 3-3v-1.805l3.535 2.965c.29.245.625.355.955.355.775 0 1.51-.61 1.51-1.505V7.395c0-.895-.735-1.505-1.51-1.505zm-9.51 7.015-4.195 2.445a1.05 1.05 0 0 1-1.58-.91V9.55c0-.81.88-1.315 1.58-.91l4.195 2.445a1.05 1.05 0 0 1 0 1.815z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
