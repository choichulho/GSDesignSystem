<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M10.22 2.65A2.76 2.76 0 0 1 12 2c.63 0 1.265.215 1.78.65l8.945 7.49a.77.77 0 1 1-.99 1.18L21 10.704V19c0 1.655-1.345 3-3 3h-2c-.83 0-1.5-.67-1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5v4c0 .83-.67 1.5-1.5 1.5H6c-1.655 0-3-1.345-3-3v-8.295l-.735.615a.77.77 0 0 1-.495.18.77.77 0 0 1-.495-1.36z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
