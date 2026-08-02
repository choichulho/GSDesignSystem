<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="m23.75 11.5-2-3.5c-.35-.6-1-1-1.75-1h-3.5V6c0-1.65-1.35-3-3-3H3C1.35 3 0 4.35 0 6v10c0 1.65 1.35 3 3 3h1.05c.25 1.15 1.25 2 2.45 2s2.2-.85 2.45-2h7.75c.25 1.15 1.25 2 2.45 2s2.2-.85 2.45-2h.4c1.1 0 2-.9 2-2v-4.5c0-.35-.1-.7-.25-1m-17.25 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M20 8.5c.2 0 .35.1.45.25l1.45 2.5c.2.35-.05.75-.45.75H17c-.3 0-.5-.2-.5-.5V9c0-.3.2-.5.5-.5zm-.85 11c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
