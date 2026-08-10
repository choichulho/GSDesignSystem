<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="m12.01 8.415 7.295 7.295a.992.992 0 0 0 1.705-.555 1.01 1.01 0 0 0-.27-.835l-.025-.025-7.99-8A1.02 1.02 0 0 0 12.01 6c-.26 0-.51.1-.705.295l-8 8a.995.995 0 0 0 .675 1.715 1 1 0 0 0 .71-.28l.025-.025z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
