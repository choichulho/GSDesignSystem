<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M21.98 13a2.98 2.98 0 0 0-.855-1.78L12.78 2.88c-.27-.27-.585-.48-.925-.63-.375-.16-.78-.25-1.195-.25H4a1.99 1.99 0 0 0-1.79 1.105C2.075 3.375 2 3.68 2 4v6.655a3 3 0 0 0 .88 2.125l8.345 8.345a2.96 2.96 0 0 0 2.12.88c.385 0 .735-.065 1.085-.2.38-.145.73-.37 1.035-.675l5.655-5.655a2.99 2.99 0 0 0 .86-2.465zM8.06 8.06c-.295.295-.675.44-1.06.44s-.77-.145-1.06-.44a1.5 1.5 0 1 1 2.12 0"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
