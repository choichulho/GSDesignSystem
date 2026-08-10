<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M18 4H6a3 3 0 0 0-3 3v2.25a.75.75 0 0 0 1.5 0V7A1.5 1.5 0 0 1 6 5.5h12A1.5 1.5 0 0 1 19.5 7v2.25a.75.75 0 0 0 1.5 0V7a3 3 0 0 0-3-3m2.25 10a.75.75 0 0 0-.75.75V17a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 17v-2.25a.75.75 0 0 0-1.5 0V17a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-2.25a.75.75 0 0 0-.75-.75m-17.5-2.75h18.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
