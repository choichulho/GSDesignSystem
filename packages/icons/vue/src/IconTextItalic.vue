<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M18.25 5h-8.5a.75.75 0 0 0 0 1.5h3.01l-4.004 11H5.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-3.898l3.999-10.986.003-.014h3.896a.75.75 0 0 0 0-1.5" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
