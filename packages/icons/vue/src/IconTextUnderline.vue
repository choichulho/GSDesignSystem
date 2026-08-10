<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M7 11.676c0 2.918 1.836 4.89 4.995 4.89 2.995 0 5.005-1.952 5.005-4.851V3.928c0-.57-.328-.928-.85-.928s-.84.357-.84.928v7.748c0 2.058-1.286 3.372-3.315 3.372-2.019 0-3.304-1.304-3.304-3.372V3.928c0-.57-.329-.928-.85-.928-.522 0-.84.357-.84.928zM4.75 21h14.5a.75.75 0 0 0 0-1.5H4.75a.75.75 0 0 0 0 1.5" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
