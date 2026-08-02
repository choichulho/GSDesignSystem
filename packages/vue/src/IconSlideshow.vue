<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M16.25 4h-8.5a.749.749 0 1 1 0-1.5h8.5a.749.749 0 1 1 0 1.5M5.75 6.5h12.5a.749.749 0 1 0 0-1.5H5.75a.749.749 0 1 0 0 1.5M9.67 17v-4.995a.5.5 0 0 1 .75-.435l4.33 2.5c.335.19.335.67 0 .865l-4.33 2.5A.501.501 0 0 1 9.67 17"/><path fill="currentColor" fill-rule="evenodd" d="M5.5 7.5h13c1.655 0 3 1.345 3 3v8c0 1.655-1.345 3-3 3h-13c-1.655 0-3-1.345-3-3v-8c0-1.655 1.345-3 3-3m13 12.5c.825 0 1.5-.675 1.5-1.5v-8c0-.825-.675-1.5-1.5-1.5h-13C4.675 9 4 9.675 4 10.5v8c0 .825.675 1.5 1.5 1.5z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
