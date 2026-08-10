<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M5 3.5h12A1.5 1.5 0 0 1 18.5 5v1.5h-15V5A1.5 1.5 0 0 1 5 3.5m2.25 15H5A1.5 1.5 0 0 1 3.5 17V8h15.75a.75.75 0 0 0 .75-.75V5c0-1.65-1.35-3-3-3H5C3.35 2 2 3.35 2 5v12c0 1.65 1.35 3 3 3h2.25a.75.75 0 0 0 0-1.5m8.75 2a4.505 4.505 0 0 1-4.5-4.5c0-2.482 2.018-4.5 4.5-4.5s4.5 2.018 4.5 4.5-2.018 4.5-4.5 4.5M16 10a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-1.54 4.32a.32.32 0 0 1 .478-.277l2.889 1.668a.333.333 0 0 1 0 .577l-2.889 1.669a.32.32 0 0 1-.479-.277z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
