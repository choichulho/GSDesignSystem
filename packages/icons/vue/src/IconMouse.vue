<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M11 7a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0z"/><path fill="currentColor" fill-rule="evenodd" d="M4 9a8 8 0 0 1 16 0v6a8 8 0 0 1-16 0zm14.5 0c0-3.584-2.916-6.5-6.5-6.5A6.51 6.51 0 0 0 5.5 9v6c0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
