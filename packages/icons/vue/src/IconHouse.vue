<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M12 2c.63 0 1.265.215 1.78.65l8.945 7.49a.77.77 0 1 1-.99 1.18L21 10.705V19c0 1.655-1.345 3-3 3H6c-1.655 0-3-1.345-3-3v-8.296l-.735.616a.77.77 0 0 1-.495.18.77.77 0 0 1-.495-1.36l8.945-7.49A2.76 2.76 0 0 1 12 2m0 1.54c-.28 0-.56.1-.79.29L4.5 9.448V19c0 .825.675 1.5 1.5 1.5h2.5V16a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v4.5H18c.825 0 1.5-.675 1.5-1.5V9.448L12.79 3.83c-.23-.195-.51-.29-.79-.29M10.5 15.5c-.275 0-.5.225-.5.5v4.5h4V16c0-.275-.225-.5-.5-.5z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
