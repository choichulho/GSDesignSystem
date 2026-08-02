<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M6 3a.75.75 0 0 0-.53.22L2.72 5.97a.751.751 0 0 0 1.06 1.062L5.25 5.56V18a3 3 0 0 0 3 3h12.5a.75.75 0 0 0 0-1.5H8.25a1.5 1.5 0 0 1-1.5-1.5V5.56l1.47 1.47a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.061L6.53 3.22A.75.75 0 0 0 6 3" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
