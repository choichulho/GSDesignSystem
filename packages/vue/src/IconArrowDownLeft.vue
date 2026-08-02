<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M6.75 6.418c.19 0 .37.07.5.19.155.135.25.335.25.56v8.44l10.39-10.39a.75.75 0 0 1 1.055 0h.005c.14.144.21.325.22.505a.75.75 0 0 1-.22.555L8.56 16.668H17a.753.753 0 0 1 .75.75.753.753 0 0 1-.75.75H6.755a.74.74 0 0 1-.53-.22.74.74 0 0 1-.225-.53V7.168a.753.753 0 0 1 .75-.75"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
