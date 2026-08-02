<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M18.238 9c-.2 0-.4.05-.55.2l-5.694 5.75L6.299 9.2c-.15-.15-.35-.2-.55-.2s-.4.05-.549.2a.9.9 0 0 0 0 1.1l6.244 6.25c.15.15.35.2.55.2s.4-.05.55-.2l6.244-6.25c.3-.3.3-.75 0-1.05-.15-.2-.35-.25-.55-.25"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
