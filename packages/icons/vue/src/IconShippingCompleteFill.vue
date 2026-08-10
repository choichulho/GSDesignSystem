<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M16.5 9.5c1.275 0 2.47.35 3.5.945V5c0-1.655-1.345-3-3-3h-3v3c0 .83-.67 1.5-1.5 1.5h-3C8.67 6.5 8 5.83 8 5V2H5C3.345 2 2 3.345 2 5v12c0 1.655 1.345 3 3 3h5.445a6.93 6.93 0 0 1-.945-3.5c0-3.86 3.14-7 7-7m-4-7.5h-3v3h3zM11 16.5c0-3.04 2.46-5.5 5.5-5.5s5.5 2.46 5.5 5.5-2.46 5.5-5.5 5.5-5.5-2.46-5.5-5.5m5.325 2.27 3.045-3.045a.75.75 0 0 0-1.06-1.06l-2.515 2.515-1.1-1.1a.75.75 0 0 0-1.06 1.06l1.63 1.63a.75.75 0 0 0 1.06 0" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
