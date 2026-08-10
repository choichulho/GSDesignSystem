<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M2 10c0-4.42 3.58-8 8-8s8 3.58 8 8a7.97 7.97 0 0 1-1.382 4.498l4.942 4.942a1.499 1.499 0 1 1-2.12 2.12l-4.942-4.942A7.97 7.97 0 0 1 10 18c-4.42 0-8-3.58-8-8m13.5 0c0-3.035-2.465-5.5-5.5-5.5A5.503 5.503 0 0 0 4.5 10c0 3.035 2.465 5.5 5.5 5.5s5.5-2.465 5.5-5.5" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
