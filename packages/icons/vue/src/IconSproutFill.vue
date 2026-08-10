<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M10.5 14.5h-1C5.36 14.5 2 11.14 2 7V5.23c0-.4.325-.73.73-.73H4.5a7.5 7.5 0 0 1 6.605 3.945A8.63 8.63 0 0 1 19.125 3h2.035c.465 0 .84.375.84.84v2.035a8.623 8.623 0 0 1-8.625 8.625H12v7.75a.75.75 0 0 1-1.5 0z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
