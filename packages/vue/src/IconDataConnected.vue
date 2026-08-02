<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M7.125 20.5H5A1.5 1.5 0 0 1 3.5 19V5A1.5 1.5 0 0 1 5 3.5h2.125a.75.75 0 0 0 0-1.5H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h2.125a.75.75 0 0 0 0-1.5M19 2h-2.375a.75.75 0 0 0 0 1.5H19A1.5 1.5 0 0 1 20.5 5v14a1.5 1.5 0 0 1-1.5 1.5h-2.375a.75.75 0 0 0 0 1.5H19a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3M6.5 8.5c0 1.102.898 2 2 2s2-.898 2-2-.898-2-2-2-2 .898-2 2m7.115 4.054a3.5 3.5 0 1 1-1.06 1.06l-2.17-2.168a3.5 3.5 0 1 1 1.06-1.06z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
