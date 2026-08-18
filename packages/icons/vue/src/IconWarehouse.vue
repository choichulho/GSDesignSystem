<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M12 3c.345 0 .69.09 1 .27l6.5 3.75c.93.54 1.5 1.53 1.5 2.6V20.5h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3V9.62c0-1.075.57-2.065 1.5-2.6L11 3.27c.31-.18.655-.27 1-.27m0 1.5a.5.5 0 0 0-.25.065L5.25 8.32c-.465.27-.75.765-.75 1.3V20.5h2v-6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v6h2V9.62c0-.535-.285-1.035-.75-1.3l-6.5-3.755A.5.5 0 0 0 12 4.5m-4 13v3h8v-3zm.5-3.5c-.275 0-.5.225-.5.5V16h8v-1.5c0-.275-.225-.5-.5-.5zm5.25-5.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
