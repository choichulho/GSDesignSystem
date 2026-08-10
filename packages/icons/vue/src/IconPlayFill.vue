<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M20.12 10.265 8.005 3.27a2 2 0 0 0-1-.27 2.02 2.02 0 0 0-1.84 1.2A2 2 0 0 0 5 5.005v13.99c0 .29.06.565.165.805a2.02 2.02 0 0 0 1.84 1.2c.335 0 .675-.085 1-.27l12.115-6.995A1.99 1.99 0 0 0 21.125 12a1.99 1.99 0 0 0-1-1.735z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
