<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M10.012 12.56a.573.573 0 0 1 .568.57v1.136a.57.57 0 0 1-.568.568H8.307a.57.57 0 0 1-.569-.568V13.13c0-.312.257-.57.569-.57z"/><path fill="currentColor" fill-rule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m-6.25 9.363v3.762a1.71 1.71 0 0 0 1.705 1.704h9.09a1.71 1.71 0 0 0 1.705-1.704v-3.762zM7.454 7.17A1.71 1.71 0 0 0 5.75 8.875v.852h12.5v-.852a1.71 1.71 0 0 0-1.705-1.705z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
