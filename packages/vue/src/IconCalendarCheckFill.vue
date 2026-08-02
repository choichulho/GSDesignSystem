<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M15.5 6.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0m-8.5 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0M17 4h1c1.65 0 3 1.35 3 3v1.518H3V7c0-1.65 1.35-3 3-3h1V2.75a.75.75 0 0 1 1.5 0V4h7V2.75a.75.75 0 0 1 1.5 0zm-6.174 15.285 6.004-6.005a.75.75 0 1 0-1.06-1.06l-5.475 5.474-2.064-2.063a.75.75 0 0 0-1.061 0 .75.75 0 0 0 0 1.06l2.593 2.594h.001a.747.747 0 0 0 1.06 0zM3 19v-8.982h18V19c0 1.65-1.35 3-3 3H6c-1.65 0-3-1.35-3-3" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
