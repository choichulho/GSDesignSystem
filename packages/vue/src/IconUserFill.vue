<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M12 12a5 5 0 1 0-.001-10.001A5 5 0 0 0 12 12m-2 2c-4.394 0-7.991 3.2-8 7.114v-.005.02-.015c.003.49.45.886 1 .886h18c.55 0 .997-.396 1-.886v.015-.02.005C21.991 17.2 18.395 14 14 14z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
