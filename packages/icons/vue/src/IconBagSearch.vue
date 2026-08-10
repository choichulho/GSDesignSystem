<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="m11.088 0 .212.01c2.392.154 4.2 2.247 4.2 4.644V5H17a3 3 0 0 1 3 3v1.25a.75.75 0 0 1-1.5 0V8A1.5 1.5 0 0 0 17 6.5h-1.5v1.25a.75.75 0 0 1-1.5 0V6.5H8v1.25a.75.75 0 0 1-1.5 0V6.5H5A1.5 1.5 0 0 0 3.5 8v11A1.5 1.5 0 0 0 5 20.5h5.25a.75.75 0 0 1 0 1.5H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1.5v-.5A4.5 4.5 0 0 1 11.3.01zM16 12a4 4 0 0 1 3.309 6.247l2.472 2.473a.751.751 0 0 1-1.061 1.06l-2.472-2.472A4 4 0 1 1 16 12m0 1.5a2.503 2.503 0 0 0-2.5 2.5c0 1.378 1.122 2.5 2.5 2.5 1.379 0 2.5-1.122 2.5-2.5 0-1.379-1.121-2.5-2.5-2.5M11.395 1.525A3.003 3.003 0 0 0 8 4.5V5h6v-.396c0-1.524-1.093-2.885-2.605-3.079" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
