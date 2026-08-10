<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M9 1H7.5v2a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V1H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2m10.5 8.25V7.5a3 3 0 0 0-3-3h-1.75a.75.75 0 0 1 0-1.5h1.75A4.5 4.5 0 0 1 21 7.5v1.75a.75.75 0 0 1-1.5 0M7.5 19h1.75a.75.75 0 0 1 0 1.5H7.5A4.5 4.5 0 0 1 3 16v-1.75a.75.75 0 0 1 1.5 0V16a3 3 0 0 0 3 3m12-4v-2H21a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h1.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
