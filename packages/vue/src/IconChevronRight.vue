<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M9.753 5c.19 0 .385.075.53.22l6.25 6.25c.145.145.22.34.22.53s-.075.385-.22.53l-6.25 6.25a.75.75 0 0 1-.53.22.754.754 0 0 1-.75-.74c0-.195.07-.39.22-.54l5.72-5.72-5.72-5.72a.746.746 0 0 1 .435-1.275q.051-.006.095-.005"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
