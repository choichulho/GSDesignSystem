<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M12 2c-.63 0-1.265.215-1.78.65l-8.945 7.49a.77.77 0 1 0 .99 1.18L3 10.705V19c0 1.655 1.345 3 3 3h12c1.655 0 3-1.345 3-3v-8.295l.735.615a.769.769 0 1 0 .99-1.18L13.78 2.65A2.76 2.76 0 0 0 12 2M4.5 19V9.449l6.71-5.619a1.216 1.216 0 0 1 1.58 0l6.71 5.618V19c0 .825-.675 1.5-1.5 1.5h-2.5V16a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v4.5H6c-.825 0-1.5-.675-1.5-1.5m5.5 1.5h4V16c0-.275-.225-.5-.5-.5h-3c-.275 0-.5.225-.5.5z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
