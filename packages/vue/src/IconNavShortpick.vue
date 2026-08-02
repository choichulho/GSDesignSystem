<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M19.5 3h-11C5.475 3 3 5.829 3 9.286v9.952C3 22.695 5.475 25 8.5 25h11c3.025 0 5.5-2.305 5.5-5.762V9.286C25 5.829 22.525 3 19.5 3m4.125 16.238c0 2.62-1.833 4.19-4.125 4.19h-11c-2.292 0-4.125-1.57-4.125-4.19V9.286c0-2.62 1.833-4.715 4.125-4.715h11c2.292 0 4.125 2.096 4.125 4.715z"/><path stroke="currentColor" stroke-width="1.5" d="M8.75 8.622c0-.639.723-1.111 1.382-.747l9.658 5.377h.002a.838.838 0 0 1 0 1.495l-.002.001-9.658 5.376c-.66.364-1.382-.107-1.382-.746z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
