<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M20 5.5c.825 0 1.5.675 1.5 1.5v11c0 .825-.675 1.5-1.5 1.5H4c-.825 0-1.5-.675-1.5-1.5V7c0-.825.675-1.5 1.5-1.5zM20 4H4C2.35 4 1 5.35 1 7v11c0 1.65 1.35 3 3 3h16c1.65 0 3-1.35 3-3V7c0-1.65-1.35-3-3-3"/><path fill="currentColor" fill-rule="evenodd" d="M9 9a.749.749 0 1 1 0 1.5A.749.749 0 1 1 9 9m0-1.5a2.247 2.247 0 0 0-2.25 2.25A2.247 2.247 0 0 0 9 12a2.247 2.247 0 0 0 2.25-2.25A2.247 2.247 0 0 0 9 7.5m6.25 1h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5m0 3.5h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5m-3.52 3.5a2 2 0 0 0-1.73-1H8c-.735 0-1.385.405-1.73 1zM8 13h2c1.935 0 3.5 1.565 3.5 3.5 0 .275-.225.5-.5.5H5a.5.5 0 0 1-.5-.5C4.5 14.565 6.065 13 8 13" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
