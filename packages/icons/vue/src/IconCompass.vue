<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M12 11a1.002 1.002 0 0 1 0 2.005A1.002 1.002 0 0 1 12 11"/><path fill="currentColor" fill-rule="evenodd" d="M16.26 6.765c.665 0 1.18.675.895 1.375l-2.445 5.98a1.1 1.1 0 0 1-.59.59l-5.98 2.445a.983.983 0 0 1-1.295-1.295L9.29 9.88a1.1 1.1 0 0 1 .59-.59l5.98-2.445q.204-.081.4-.08m-5.65 3.845-1.92 4.7 4.7-1.92 1.92-4.7z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M12 2c5.525 0 10 4.475 10 10s-4.475 10-10 10S2 17.525 2 12 6.475 2 12 2m0 1.5c-4.685 0-8.5 3.815-8.5 8.5s3.815 8.5 8.5 8.5 8.5-3.815 8.5-8.5-3.815-8.5-8.5-8.5" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
