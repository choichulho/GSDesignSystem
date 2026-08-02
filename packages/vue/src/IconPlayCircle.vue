<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m18.5 0c0-4.687-3.813-8.5-8.5-8.5S3.5 7.313 3.5 12s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5M9.071 15.332V8.668a.667.667 0 0 1 1-.578l5.772 3.332a.667.667 0 0 1 0 1.155l-5.771 3.332a.667.667 0 0 1-1-.577" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
