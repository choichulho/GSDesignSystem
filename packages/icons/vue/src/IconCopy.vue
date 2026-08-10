<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M4.5 15h.75a.75.75 0 0 1 0 1.5H4.5c-1.65 0-3-1.35-3-3v-9c0-1.65 1.35-3 3-3h9c1.65 0 3 1.35 3 3v.75a.75.75 0 0 1-1.5 0V4.5A1.5 1.5 0 0 0 13.5 3h-9A1.5 1.5 0 0 0 3 4.5v9A1.5 1.5 0 0 0 4.5 15m15 6c.827 0 1.5-.673 1.5-1.5v-9c0-.827-.673-1.5-1.5-1.5h-9C9.673 9 9 9.673 9 10.5v9c0 .827.673 1.5 1.5 1.5zm-9-13.5h9c1.65 0 3 1.35 3 3v9c0 1.65-1.35 3-3 3h-9c-1.65 0-3-1.35-3-3v-9c0-1.65 1.35-3 3-3" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
