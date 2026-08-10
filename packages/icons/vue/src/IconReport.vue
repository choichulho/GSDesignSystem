<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M11.25 15.5a.749.749 0 1 1 0 1.5h-2.5a.749.749 0 1 1 0-1.5zm2-3.5a.749.749 0 1 1 0 1.5h-4.5a.749.749 0 1 1 0-1.5zm2-3.5a.749.749 0 1 1 0 1.5h-6.5a.749.749 0 1 1 0-1.5z"/><path fill="currentColor" fill-rule="evenodd" d="M15.5 1.5c.83 0 1.5.67 1.5 1.5v.5c1.655 0 3 1.345 3 3v13c0 1.655-1.345 3-3 3H7c-1.655 0-3-1.345-3-3v-13c0-1.655 1.345-3 3-3V3c0-.83.67-1.5 1.5-1.5zM17 5c0 .83-.67 1.5-1.5 1.5h-7C7.67 6.5 7 5.83 7 5c-.825 0-1.5.675-1.5 1.5v13c0 .825.675 1.5 1.5 1.5h10c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5M8.5 3v2h7V3z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
