<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M20 4H4C2.35 4 1 5.35 1 7v11c0 1.65 1.35 3 3 3h16c1.65 0 3-1.35 3-3V7c0-1.65-1.35-3-3-3M9 8a2 2 0 1 1 .001 3.999A2 2 0 0 1 9 8m3.57 9H5.43a.43.43 0 0 1-.43-.43A2.57 2.57 0 0 1 7.57 14h2.855a2.57 2.57 0 0 1 2.57 2.57.43.43 0 0 1-.43.43zm5.68-3.41h-2.5a.749.749 0 1 1 0-1.5h2.5a.749.749 0 1 1 0 1.5m0-3.5h-2.5a.749.749 0 1 1 0-1.5h2.5a.749.749 0 1 1 0 1.5"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
