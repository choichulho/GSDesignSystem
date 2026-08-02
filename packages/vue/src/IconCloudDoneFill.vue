<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="m16.784 10.728-5.621 5.62a.75.75 0 0 1-1.061 0l-2.886-2.885a.75.75 0 1 1 1.06-1.06l2.356 2.355 5.091-5.09a.75.75 0 1 1 1.06 1.06m3.696.382C20.276 7.15 17.01 4 13 4a7.49 7.49 0 0 0-6.64 4.018C6.24 8.01 6.122 8 6 8a6 6 0 1 0 0 12h13.5a4.5 4.5 0 0 0 .98-8.89" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
