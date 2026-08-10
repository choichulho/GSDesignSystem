<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M14.195 2c.765 0 1.535.295 2.12.88l4.24 4.24a3.006 3.006 0 0 1 0 4.245L11.42 20.5h9.83a.749.749 0 1 1 0 1.5H6.4c-.275 0-.55-.076-.78-.23a3.7 3.7 0 0 1-.62-.505l-2.83-2.83a4 4 0 0 1 0-5.655l9.905-9.9a3 3 0 0 1 2.12-.88M3.165 13.77a2.6 2.6 0 0 0 0 3.67l2.83 2.83q.127.125.267.23h3.135q.14-.105.268-.23l-.005-.005 1.21-1.21-6.495-6.495z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
