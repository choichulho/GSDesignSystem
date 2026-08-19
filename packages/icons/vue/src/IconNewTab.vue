<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M9.25 4a.75.75 0 0 1 0 1.5H5A1.5 1.5 0 0 0 3.5 7v12A1.5 1.5 0 0 0 5 20.5h12a1.5 1.5 0 0 0 1.5-1.5v-5.25a.75.75 0 0 1 1.5 0V19c0 1.65-1.35 3-3 3H5c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3zM19 1c.413 0 .75.337.75.75v2.5h2.5c.413 0 .75.338.75.75s-.337.75-.75.75h-2.5v2.5c0 .412-.337.75-.75.75a.75.75 0 0 1-.75-.75v-2.5h-2.5A.75.75 0 0 1 15 5c0-.412.338-.75.75-.75h2.5v-2.5c0-.413.337-.75.75-.75"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
