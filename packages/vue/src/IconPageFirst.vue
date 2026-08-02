<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M10.376 12.123c0-.153.046-.307.14-.437l.079-.093 6.25-6.25a.75.75 0 0 1 1.14.969l-.08.092-5.72 5.72 5.72 5.72a.75.75 0 0 1 0 1.06.75.75 0 0 1-.977.073l-.084-.072-6.249-6.25a.75.75 0 0 1-.21-.415zm-4.5-7.249a.75.75 0 0 1 1.493-.101l.006.101v14.5a.75.75 0 0 1-1.493.102l-.007-.102z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
