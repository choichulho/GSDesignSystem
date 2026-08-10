<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M13 16.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0m-4.882-.164a.75.75 0 1 0 1.06 1.06l6.718-6.718a.75.75 0 1 0-1.06-1.06zM9 8.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m3-7c-1.655 0-3 1.346-3 3V5h6v-.5c0-1.654-1.345-3-3-3M16.5 5H18a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1.5v-.5a4.5 4.5 0 1 1 9 0zm-7 5.5a.5.5 0 1 0-1.001.001A.5.5 0 0 0 9.5 10.5M15 16a.5.5 0 1 0 .001 1.001A.5.5 0 0 0 15 16" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
