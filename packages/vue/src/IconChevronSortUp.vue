<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M7.22 14.53c.145.145.34.22.53.22s.385-.075.53-.22L12 10.81l3.72 3.72c.165.165.38.235.595.215A.745.745 0 0 0 17 14a.75.75 0 0 0-.22-.53l-4.25-4.25A.75.75 0 0 0 12 9a.75.75 0 0 0-.53.22l-4.25 4.25a.74.74 0 0 0-.215.6c.015.17.09.33.215.46"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
