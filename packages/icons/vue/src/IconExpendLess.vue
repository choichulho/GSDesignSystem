<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M5 15c0-.19.075-.385.22-.53l6.25-6.25A.75.75 0 0 1 12 8c.19 0 .385.075.53.22l6.25 6.25c.145.145.22.34.22.53a.754.754 0 0 1-.74.75.76.76 0 0 1-.54-.22L12 9.81l-5.72 5.72a.74.74 0 0 1-.605.215.746.746 0 0 1-.67-.655c0-.03-.005-.06-.005-.095z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
