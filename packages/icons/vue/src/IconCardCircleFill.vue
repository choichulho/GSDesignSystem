<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m4.545-14.83h-9.09A1.71 1.71 0 0 0 5.75 8.876v.852h12.5v-.852a1.71 1.71 0 0 0-1.705-1.704M7.74 13.13a.57.57 0 0 1 .568-.569h1.704a.57.57 0 0 1 .569.569v1.136a.57.57 0 0 1-.569.568H8.307a.57.57 0 0 1-.568-.568zm-1.99 1.995a1.71 1.71 0 0 0 1.706 1.705h9.09a1.71 1.71 0 0 0 1.705-1.705v-3.761H5.75z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
