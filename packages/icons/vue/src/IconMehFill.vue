<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2M8.75 8.5c.965 0 1.75.785 1.75 1.75S9.715 12 8.75 12 7 11.215 7 10.25 7.785 8.5 8.75 8.5m7 8h-7.5a.749.749 0 1 1 0-1.5h7.5a.749.749 0 1 1 0 1.5m-.5-4.5c-.965 0-1.75-.785-1.75-1.75s.785-1.75 1.75-1.75S17 9.285 17 10.25 16.215 12 15.25 12" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
