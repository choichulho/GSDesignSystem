<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M13 4a7.5 7.5 0 0 0-6.64 4.018C6.24 8.01 6.122 8 6 8a6 6 0 0 0 0 12h13.5a4.5 4.5 0 0 0 .98-8.89C20.277 7.15 17.01 4 13 4m0 1.5a5.99 5.99 0 0 1 5.983 5.688l.058 1.139 1.114.248A3.02 3.02 0 0 1 22.5 15.5c0 1.654-1.346 3-3 3H6A4.505 4.505 0 0 1 1.5 14c0-2.482 2.019-4.5 4.5-4.5q.083.002.165.009l.107.006.966.057.45-.856A5.99 5.99 0 0 1 13 5.5" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
