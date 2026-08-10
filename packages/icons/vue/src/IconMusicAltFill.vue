<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M19 3.5v2.03c0 .675-.445 1.265-1.095 1.445l-5.9 1.65v9.835c0 2.4-2.12 3.545-3.5 3.545a2.5 2.5 0 0 1-2.5-2.5c0-1.175.705-2.085 1.9-2.42l2.045-.57a.75.75 0 0 0 .55-.725V4.975c0-.68.455-1.275 1.11-1.45l5.5-1.475A1.502 1.502 0 0 1 19 3.5"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
