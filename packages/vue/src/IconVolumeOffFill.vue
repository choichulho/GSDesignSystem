<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="currentColor" fill-rule="evenodd" d="m6.5 7.7 5.82-5.43h-.005c.24-.22.54-.3.815-.26A.99.99 0 0 1 14 3v18.4c0 .555-.42.945-.895.995a.98.98 0 0 1-.785-.265L6.5 16.7H3a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zm16.28 2.28-2.22 2.22 2.22 2.22a.75.75 0 0 1-1.06 1.06l-2.22-2.22-2.22 2.22a.75.75 0 0 1-1.06-1.06l2.22-2.22-2.22-2.22a.745.745 0 0 1 0-1.06.745.745 0 0 1 1.06 0l2.22 2.22 2.22-2.22a.745.745 0 0 1 1.06 0 .745.745 0 0 1 0 1.06" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M1 2h22v20.4H1z"/></clipPath></defs>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
