<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M19.5 6h-2V5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v1h-2c-1.655 0-3 1.345-3 3v9c0 1.655 1.345 3 3 3h15c1.655 0 3-1.345 3-3V9c0-1.655-1.345-3-3-3M8 5c0-.275.225-.5.5-.5h7c.275 0 .5.225.5.5v1H8zm13 13c0 .825-.675 1.5-1.5 1.5h-15c-.825 0-1.5-.675-1.5-1.5v-5h5.5v1c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-1H21zm-11-4v-1h4v1zm11-2.5H3V9c0-.825.675-1.5 1.5-1.5h15c.825 0 1.5.675 1.5 1.5z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
