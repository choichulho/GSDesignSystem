<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M11.25 6V3.85A1.996 1.996 0 0 1 12 0a2 2 0 0 1 2 2c0 .835-.52 1.555-1.25 1.85V6H18c1.655 0 3 1.345 3 3v10c0 1.655-1.345 3-3 3H6c-1.655 0-3-1.345-3-3V9c0-1.655 1.345-3 3-3zM0 11.75a.749.749 0 1 1 1.5 0v4.5a.749.749 0 1 1-1.5 0zM23.25 11a.75.75 0 0 0-.75.75v4.5a.749.749 0 1 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75M8.5 15.5c.55 0 1-.45 1-1V13c0-.55-.45-1-1-1s-1 .45-1 1v1.5c0 .55.45 1 1 1m7 0c.55 0 1-.45 1-1V13c0-.55-.45-1-1-1s-1 .45-1 1v1.5c0 .55.45 1 1 1" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
