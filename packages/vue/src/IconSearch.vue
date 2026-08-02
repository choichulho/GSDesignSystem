<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M3.5 10c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5A6.51 6.51 0 0 1 3.5 10m18.207 10.293L16.315 14.9A7.96 7.96 0 0 0 18 10a8 8 0 1 0-8 8 7.96 7.96 0 0 0 4.9-1.685l5.393 5.392a1 1 0 1 0 1.414-1.414" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
