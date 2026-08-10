<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2m3.535 12.475c.29.29.29.77 0 1.06s-.77.29-1.06 0L12 13.06l-2.475 2.475c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06L10.94 12 8.465 9.525a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0L12 10.94l2.475-2.475c.29-.29.77-.29 1.06 0s.29.77 0 1.06L13.06 12z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
