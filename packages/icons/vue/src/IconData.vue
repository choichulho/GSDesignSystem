<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M6.5 5c0-.827-.673-1.5-1.5-1.5S3.5 4.173 3.5 5 4.173 6.5 5 6.5 6.5 5.827 6.5 5M8 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m13.25.75h-8.5a.75.75 0 0 1 0-1.5h8.5a.75.75 0 0 1 0 1.5M5 20.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5M5 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6m7.75 2.25h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5M19 13.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5M19 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6M2.75 11.25h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
