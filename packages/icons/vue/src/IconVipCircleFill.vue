<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m5.875-10.413-5.454 6.622a.546.546 0 0 1-.842 0l-5.455-6.623a.545.545 0 0 1 0-.693l2.632-3.195a.55.55 0 0 1 .42-.198h5.647c.163 0 .317.073.42.199l2.632 3.194a.545.545 0 0 1 0 .693" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
