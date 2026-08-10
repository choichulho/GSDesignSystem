<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M7.25 10.925c.19 0 .385.075.53.22l2.545 2.545 5.895-5.895a.75.75 0 0 1 .53-.22c.19 0 .385.075.53.22a.745.745 0 0 1 0 1.06l-6.425 6.425a.75.75 0 0 1-.53.22.75.75 0 0 1-.53-.22L6.72 12.205a.745.745 0 0 1 0-1.06.75.75 0 0 1 .53-.22"/><path fill="currentColor" fill-rule="evenodd" d="M11.61 1.05Q11.805.999 12 1c.13 0 .265.015.39.05l7.505 2.01c.655.175 1.11.77 1.11 1.45v9.405c0 1.96-.955 3.79-2.56 4.915l-5.57 3.9a1.51 1.51 0 0 1-1.72 0L5.56 18.81A6 6 0 0 1 3 13.895V4.51c0-.68.455-1.275 1.11-1.45zm7.89 3.46L12 2.5 4.495 4.51v9.385c0 1.465.72 2.845 1.92 3.685l5.595 3.92 5.57-3.9a4.5 4.5 0 0 0 1.92-3.685z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
