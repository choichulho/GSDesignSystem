<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M17.999 8.975h-2.655L16.7 3.23A1 1 0 0 0 15.726 2H8.241a1 1 0 0 0-.973.77l-2.24 9.5A1 1 0 0 0 6 13.5h3.352l-1.366 8.63c-.122.765.855 1.19 1.331.58l9.468-12.12A1 1 0 0 0 18 8.975" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
