<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="m13.06 12 3.715-3.715c.13-.13.205-.3.215-.475a.747.747 0 0 0-1.275-.585L12 10.94 8.28 7.22A.75.75 0 0 0 7.75 7a.754.754 0 0 0-.75.75c0 .195.075.385.22.53L10.94 12l-3.72 3.72a.75.75 0 0 0-.22.53.754.754 0 0 0 .735.75.76.76 0 0 0 .545-.22L12 13.06l3.72 3.72c.145.145.34.22.53.22s.385-.075.53-.22a.76.76 0 0 0 0-1.06z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
