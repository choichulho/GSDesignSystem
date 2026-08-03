<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M11.295 11.295c.39-.39 1.025-.39 1.415 0s.39 1.025 0 1.415-1.025.39-1.415 0a1 1 0 0 1 0-1.415"/><path fill="currentColor" fill-rule="evenodd" d="M12 2c5.525 0 10 4.475 10 10s-4.475 10-10 10S2 17.525 2 12 6.475 2 12 2m5.155 6.14a.985.985 0 0 0-1.295-1.295L9.88 9.29a1.1 1.1 0 0 0-.59.59l-2.445 5.98a.985.985 0 0 0 1.295 1.295l5.98-2.445a1.1 1.1 0 0 0 .59-.59z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
