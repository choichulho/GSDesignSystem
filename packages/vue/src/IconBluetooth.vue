<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M17.405 15.915 12.74 12l4.66-3.91a.76.76 0 0 0 0-1.16l-5.665-4.755a.76.76 0 0 0-1.245.58V9.93L7.28 6.72a.75.75 0 0 0-1.06 1.06L10.44 12l-4.22 4.22a.745.745 0 0 0 0 1.06c.145.145.34.22.53.22s.385-.075.53-.22l3.22-3.22v7.18a.75.75 0 0 0 .76.755.75.75 0 0 0 .485-.175l5.66-4.75a.76.76 0 0 0 0-1.16zm-5.4-11.535 3.725 3.125-3.725 3.125zm.005 15.24v-6.25l3.725 3.125z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
