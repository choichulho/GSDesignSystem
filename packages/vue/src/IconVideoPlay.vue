<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M20.535 6.25c.29-.245.625-.355.955-.355V5.89c.775 0 1.51.61 1.51 1.505v9.115c0 .895-.735 1.505-1.51 1.505-.33 0-.665-.11-.955-.355L17 14.695V16.5c0 1.655-1.345 3-3 3H4c-1.655 0-3-1.345-3-3v-9c0-1.655 1.345-3 3-3h10c1.655 0 3 1.345 3 3v1.715zM14 18c.825 0 1.5-.675 1.5-1.5v-9c0-.825-.675-1.5-1.5-1.5H4c-.825 0-1.5.675-1.5 1.5v9c0 .825.675 1.5 1.5 1.5zm3-5.26 4.5 3.775V7.4L17 11.175zM6.205 9.555c0-.815.88-1.32 1.58-.91v.01L11.98 11.1a1.05 1.05 0 0 1 0 1.815L7.785 15.36c-.7.405-1.58-.1-1.58-.91z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
