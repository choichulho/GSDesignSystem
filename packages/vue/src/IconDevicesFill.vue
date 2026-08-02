<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M6 2h14a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3h-5.5V18h1.884c.479 0 .866.387.866.866v.268a.866.866 0 0 1-.866.866H10.25v-2h1.25v-2.5H10v-4c0-1.655-1.345-3-3-3H3V5a3 3 0 0 1 3-3m-3.5 8H7a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 7 22H2.5A1.5 1.5 0 0 1 1 20.5v-9A1.5 1.5 0 0 1 2.5 10" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
