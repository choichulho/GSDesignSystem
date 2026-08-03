<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M18.735 15.045h.005l-6.03 6.03a.99.99 0 0 1-1.415 0l-6.03-6.03L12 8.31zM6.99 4.025a5.47 5.47 0 0 1 4.395 1.585l.595.595-7.77 7.78-.595-.595a5.46 5.46 0 0 1-1.58-3.29c-.175-1.6.35-3.26 1.575-4.49a5.5 5.5 0 0 1 3.38-1.585M16.5 4a5.48 5.48 0 0 1 3.89 1.61 5.5 5.5 0 0 1 1.6 4.215 5.47 5.47 0 0 1-1.6 3.565l-.595.595-7.78-7.78.595-.595A5.48 5.48 0 0 1 16.5 4"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
