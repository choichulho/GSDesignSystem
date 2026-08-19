<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M11 21a1 1 0 0 1-1 1h-.765a2 2 0 0 1-1.788-1.105l-2.7-5.395H4a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h6.644q.179-.002.356-.023zm9.25-19a.75.75 0 0 1 .75.75v16.5a.75.75 0 0 1-1.5 0v-.364l-7-2.867V5.98l7-2.867V2.75a.75.75 0 0 1 .75-.75"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
