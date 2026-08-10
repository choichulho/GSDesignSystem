<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M12 3a.75.75 0 0 0-.75.75v10.69L6.685 9.875a.745.745 0 0 0-1.06 0 .745.745 0 0 0 0 1.06l5.845 5.845c.145.145.34.22.53.22s.385-.075.53-.22l5.845-5.845a.745.745 0 0 0 0-1.06.745.745 0 0 0-1.06 0L12.75 14.44V3.75A.75.75 0 0 0 12 3M4.75 19.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
