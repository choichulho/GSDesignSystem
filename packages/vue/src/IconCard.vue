<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M4 19h16c.827 0 1.5-.673 1.5-1.5V10h-19v7.5c0 .827.673 1.5 1.5 1.5M20 5H4c-.827 0-1.5.673-1.5 1.5V8h19V6.5c0-.827-.673-1.5-1.5-1.5M4 3.5h16c1.65 0 3 1.35 3 3v11c0 1.65-1.35 3-3 3H4c-1.649 0-3-1.35-3-3v-11c0-1.65 1.351-3 3-3m1.5 9h3c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
