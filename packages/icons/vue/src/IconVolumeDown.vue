<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="m9.524 15.404 4.976 4.645V3.953L9.524 8.598A1.5 1.5 0 0 1 8.5 9H5c-.276 0-.5.226-.5.5v5a.5.5 0 0 0 .5.5h3.5a1.5 1.5 0 0 1 1.024.404m4.794-13.333A1 1 0 0 1 16 2.802V21.2a1 1 0 0 1-1.682.73L8.5 16.5H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h3.5zm4.075 6.586c.328-.275.83-.23 1.079.118a5.46 5.46 0 0 1 1.028 3.196c0 1.222-.4 2.35-1.074 3.262-.252.342-.75.385-1.074.112l-.003-.002a.74.74 0 0 1-.13-1.004A3.97 3.97 0 0 0 19 11.971c0-.86-.273-1.658-.737-2.31-.221-.313-.189-.737.105-.982z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
