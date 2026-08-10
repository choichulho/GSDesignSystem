<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="m16.787 11.403-2.503 1.789.973 2.918a.507.507 0 0 1-.782.569L12 14.85l-2.474 1.83a.508.508 0 0 1-.783-.57l.973-2.917-2.502-1.789a.507.507 0 0 1 .299-.92l3.075.024.928-2.933a.508.508 0 0 1 .968 0l.928 2.933 3.075-.024a.508.508 0 0 1 .3.92m4.044 5.285A9.95 9.95 0 0 0 22.001 12c0-5.523-4.478-10-10-10C6.476 2 2 6.477 2 12s4.476 10 10 10a9.95 9.95 0 0 0 4.606-1.13l4.085 1.095a1 1 0 0 0 1.225-1.225z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
