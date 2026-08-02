<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M18 20.5c.827 0 1.5-.673 1.5-1.5V8c0-.827-.673-1.5-1.5-1.5h-1.5v1.25a.75.75 0 0 1-1.5 0V6.5H9v1.25a.75.75 0 0 1-1.5 0V6.5H6c-.827 0-1.5.673-1.5 1.5v11c0 .827.673 1.5 1.5 1.5zm-6-19c-1.655 0-3 1.346-3 3V5h6v-.5c0-1.654-1.345-3-3-3M16.5 5H18a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1.5v-.5a4.5 4.5 0 1 1 9 0zm-1.134 4.899a.75.75 0 0 1 .53 1.28L9.18 17.897a.748.748 0 1 1-1.061-1.06l6.718-6.719a.75.75 0 0 1 .53-.22M8.5 11a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2.5 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0m3.5 6a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M13 17a2 2 0 1 1 4 0 2 2 0 0 1-4 0" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
