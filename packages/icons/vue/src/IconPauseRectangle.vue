<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M4.5 4h15a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3M21 7c0-.827-.673-1.5-1.5-1.5h-15C3.673 5.5 3 6.173 3 7v10c0 .827.673 1.5 1.5 1.5h15c.827 0 1.5-.673 1.5-1.5zM10.25 8h-1a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75m4.5 0h-1a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
