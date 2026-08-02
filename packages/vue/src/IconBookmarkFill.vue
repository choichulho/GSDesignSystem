<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M11.295 16.62c.39-.39 1.025-.39 1.415 0l5.085 5.085A.996.996 0 0 0 19.5 21V5a2.98 2.98 0 0 0-.74-1.97A3 3 0 0 0 16.5 2h-9c-.83 0-1.58.335-2.12.88S4.5 4.17 4.5 5v16c0 .515.365.885.79.98a.97.97 0 0 0 .915-.27l5.085-5.085z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
