<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M7.5 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0M12 4c4.754 0 8.872 3.048 10.893 7.494.143.316.143.697 0 1.012C20.872 16.953 16.754 20 12 20s-8.87-3.047-10.892-7.494a1.24 1.24 0 0 1 0-1.012C3.128 7.048 7.246 4 12 4m-3 8c0-1.655 1.346-3 3-3 1.655 0 3 1.345 3 3s-1.345 3-3 3c-1.654 0-3-1.345-3-3" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
