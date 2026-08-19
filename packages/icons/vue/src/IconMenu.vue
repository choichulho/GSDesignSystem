<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M2.75 5.5h18.5a.75.75 0 0 0 0-1.5H2.75a.75.75 0 0 0 0 1.5m18.5 5.75H2.75a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5M2.75 18.5h18.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
