<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M14.25 17a.75.75 0 0 0 .75-.75v-8.5a.75.75 0 0 0-1.282-.529l-4.43 4.192A.75.75 0 0 0 9 12c0 .24.114.45.289.587l4.429 4.191a.75.75 0 0 0 .532.222" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
