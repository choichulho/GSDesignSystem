<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M12 23h.015c.3 0 .6-.09.86-.27l5.57-3.9a6 6 0 0 0 2.56-4.915V4.51c0-.68-.455-1.275-1.11-1.45L12.39 1.05A1.5 1.5 0 0 0 12 1q-.195-.001-.39.05l-7.5 2.01C3.455 3.235 3 3.83 3 4.51v9.385c0 1.96.955 3.79 2.56 4.915l5.595 3.92c.255.18.55.27.845.27m7.5-18.49L12 2.5v18.993l.01.007 5.57-3.9a4.5 4.5 0 0 0 1.92-3.685z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
