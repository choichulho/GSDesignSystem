<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m20.5 0c0-5.238-4.262-9.5-9.5-9.5S2.5 6.762 2.5 12s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
