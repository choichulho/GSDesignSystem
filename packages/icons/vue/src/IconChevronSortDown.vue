<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M16.78 10.22a.75.75 0 0 0-.53-.22.75.75 0 0 0-.53.22L12 13.94l-3.72-3.72a.75.75 0 0 0-1.06-.005.754.754 0 0 0 0 1.065l4.25 4.25c.145.145.34.22.53.22s.385-.075.53-.22l4.25-4.25a.74.74 0 0 0 .215-.6.76.76 0 0 0-.215-.46"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
