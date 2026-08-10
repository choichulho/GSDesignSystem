<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M4 19.5h17.25a.75.75 0 0 1 0 1.5H4a2 2 0 0 1-2-2V3.75a.75.75 0 0 1 1.5 0V19a.5.5 0 0 0 .5.5m7.334-9.363-4.553 4.554a.75.75 0 1 1-1.06-1.06l5.074-5.076a.75.75 0 0 1 .54-.218c.195-.002.39.07.54.218l3.004 3.005 5.84-5.84a.75.75 0 1 1 1.061 1.06l-6.37 6.371a.6.6 0 0 1-.133.092l-.032.018a.74.74 0 0 1-.896-.11z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
