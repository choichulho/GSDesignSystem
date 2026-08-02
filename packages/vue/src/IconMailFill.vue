<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="m21.843 5.129-9.056 7.342c-.455.37-1.117.37-1.574 0L2.157 5.13A3 3 0 0 1 4.5 4h15c.949 0 1.793.441 2.343 1.129m-8.111 8.507 8.732-7.08c.021.145.036.293.036.444v10a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V7c0-.151.015-.298.036-.443l8.732 7.08c.502.406 1.117.61 1.732.61a2.75 2.75 0 0 0 1.732-.61" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
