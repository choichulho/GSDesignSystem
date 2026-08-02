<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M16.5 3V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V1.75a.75.75 0 0 1 1.5 0V3a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5M18 8a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-7A.5.5 0 0 1 6 8zM4 8.5v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2M6 21v1.25a.75.75 0 0 0 1.5 0V21a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v1.25a.75.75 0 0 0 1.5 0V21a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
