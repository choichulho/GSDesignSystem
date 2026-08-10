<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M13.93 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12M3.01 23.855A1.003 1.003 0 0 0 4.003 25h19.852c.61 0 1.079-.542.992-1.145A8 8 0 0 0 16.93 17h-6a8 8 0 0 0-7.919 6.855" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
