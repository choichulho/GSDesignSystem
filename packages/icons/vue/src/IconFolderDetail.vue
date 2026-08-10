<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M12.4 4.1h7.45A3.15 3.15 0 0 1 23 7.25v5a.75.75 0 0 1-1.5 0v-5a1.65 1.65 0 0 0-1.65-1.65H12.4a3.08 3.08 0 0 1-2.335-1.074l-.7-.816a.6.6 0 0 0-.456-.21H5.15A1.65 1.65 0 0 0 3.5 5.15v10.7c0 .911.739 1.65 1.65 1.65h5.6a.75.75 0 0 1 0 1.5h-5.6A3.15 3.15 0 0 1 2 15.85V5.15A3.15 3.15 0 0 1 5.15 2h3.759a2.1 2.1 0 0 1 1.595.734l.7.816c.299.35.736.55 1.195.55m1.35 10.4h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5m8.5 3h-8.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5m-8.5 3h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
