<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M14 5a.75.75 0 0 0-.53.22l-6.25 6.25A.75.75 0 0 0 7 12c0 .19.075.385.22.53l6.25 6.25c.145.145.34.22.53.22a.754.754 0 0 0 .75-.74c0-.195-.07-.39-.22-.54L8.81 12l5.72-5.72a.74.74 0 0 0 .215-.605.746.746 0 0 0-.655-.67c-.03 0-.06-.005-.095-.005z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
