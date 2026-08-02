<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M4 3.5h16c1.65 0 3 1.35 3 3V8H1V6.5c0-1.65 1.351-3 3-3m1.5 9c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm-1.5 8c-1.649 0-3-1.35-3-3V10h22v7.5c0 1.65-1.35 3-3 3z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
