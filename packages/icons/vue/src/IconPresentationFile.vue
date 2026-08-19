<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M7.5 9.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0zM15.75 14a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .414.336.75.75.75m-4.45-.75v-5.5a.75.75 0 1 1 1.5 0v5.5a.75.75 0 1 1-1.5 0"/><path fill="currentColor" fill-rule="evenodd" d="M12.75 2.5h8.5a.75.75 0 0 1 0 1.5h-.75v10a3 3 0 0 1-3 3h-4.75v4.5h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V17H6.5a3 3 0 0 1-3-3V4h-.75a.75.75 0 0 1 0-1.5h8.5v-.75a.75.75 0 0 1 1.5 0zm4.75 13c.827 0 1.5-.673 1.5-1.5V4H5v10c0 .827.673 1.5 1.5 1.5z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
