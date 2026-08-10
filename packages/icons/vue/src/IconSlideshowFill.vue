<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M7.75 4h8.5a.749.749 0 1 0 0-1.5h-8.5a.749.749 0 1 0 0 1.5m-2 2.5h12.5a.749.749 0 1 0 0-1.5H5.75a.749.749 0 1 0 0 1.5"/><path fill="currentColor" fill-rule="evenodd" d="M5.5 7.5h13c1.655 0 3 1.345 3 3v8c0 1.655-1.345 3-3 3h-13c-1.655 0-3-1.345-3-3v-8c0-1.655 1.345-3 3-3m4.92 9.935 4.33-2.5v-.005a.498.498 0 0 0 0-.865l-4.33-2.5a.501.501 0 0 0-.75.435v5a.5.5 0 0 0 .75.435" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
