<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M11 13.5a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0z"/><path fill="currentColor" fill-rule="evenodd" d="m13.42 1.509 7.912 7.065A2 2 0 0 1 22 10.066V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8.784c0-.571.243-1.114.669-1.493l8.088-7.216A2 2 0 0 1 12.088 1c.477 0 .953.17 1.332.508M19 20.5c.827 0 1.5-.673 1.5-1.5v-8.933a.5.5 0 0 0-.167-.373l-7.912-7.067a.5.5 0 0 0-.333-.127.5.5 0 0 0-.333.127L3.667 9.842a.5.5 0 0 0-.167.373V19c0 .827.673 1.5 1.5 1.5z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
