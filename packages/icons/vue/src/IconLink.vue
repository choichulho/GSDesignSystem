<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M10.251 16.5H7.159c-2.395 0-4.488-1.803-4.648-4.192A4.504 4.504 0 0 1 7 7.5h3.251a.75.75 0 0 0 0-1.5H7.199c-3.304 0-6.137 2.585-6.198 5.887A6 6 0 0 0 7 18h3.251a.75.75 0 0 0 0-1.5M16.803 6h-3.052a.75.75 0 1 0 0 1.5h3.092c2.394 0 4.489 1.803 4.649 4.192a4.505 4.505 0 0 1-4.49 4.808h-3.25a.75.75 0 1 0 0 1.5h3.25a6 6 0 0 0 6-6.113C22.94 8.585 20.105 6 16.802 6M7.75 12.75h8.5a.75.75 0 1 0 0-1.5h-8.5a.75.75 0 0 0 0 1.5" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
