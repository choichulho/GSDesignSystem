<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M12.47 19.78a.75.75 0 0 1-.215-.465.75.75 0 0 1 .215-.595l5.97-5.97H3.745A.747.747 0 0 1 3 12.005v-.01c0-.41.335-.745.745-.745h14.7l-5.97-5.97a.76.76 0 0 1-.215-.45.75.75 0 0 1 .705-.83c.205-.01.415.06.57.22l7.245 7.245a.757.757 0 0 1 0 1.07l-7.25 7.25a.75.75 0 0 1-1.06 0z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
