<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M9.957 4.5c1.654 0 3 1.346 3 3 0 1.655-1.346 3-3 3s-3-1.345-3-3c0-1.654 1.346-3 3-3m0 7.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M22.78 9.22a.75.75 0 0 0-1.06 0l-3.22 3.22-1.22-1.22a.75.75 0 0 0-1.06 1.06l1.748 1.75v.001a.75.75 0 0 0 1.062 0l.001-.001 3.75-3.75a.75.75 0 0 0 0-1.06M1.005 20.174A7 7 0 0 1 7.957 14h4a7 7 0 0 1 6.951 6.174.75.75 0 0 1-.748.826.756.756 0 0 1-.744-.675 5.51 5.51 0 0 0-5.459-4.825h-4a5.51 5.51 0 0 0-5.459 4.826.75.75 0 1 1-1.493-.152" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
