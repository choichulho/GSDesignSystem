<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M4.383 5.5H20.5a1.5 1.5 0 0 1 1.471 1.786l-1.087 5.596a2 2 0 0 1-1.963 1.618H6.137l.29 1.489c.115.585.63 1.011 1.228 1.011H18.75a.75.75 0 0 1 0 1.5H7.655a2.755 2.755 0 0 1-2.7-2.225L2.503 3.703a.25.25 0 0 0-.246-.203H.75a.75.75 0 0 1 0-1.5h1.508a1.75 1.75 0 0 1 1.717 1.416zM7.5 20a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 7.5 20m10 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 17.5 20" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
