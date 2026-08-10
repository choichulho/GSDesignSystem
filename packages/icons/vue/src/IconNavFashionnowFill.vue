<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M19 1a8 8 0 0 1 8 8v10a8 8 0 0 1-7.588 7.99L19 27H9l-.412-.01a8 8 0 0 1-7.577-7.578L1 19V9a8 8 0 0 1 8-8zM9 6.5v16h3.152v-6.282h5.935v-3.044h-5.935v-3.63H19V6.5z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
