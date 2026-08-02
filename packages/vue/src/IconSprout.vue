<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M12 14.5h1.375A8.623 8.623 0 0 0 22 5.875V3.84a.84.84 0 0 0-.84-.84h-2.035a8.63 8.63 0 0 0-8.02 5.445A7.5 7.5 0 0 0 4.5 4.5H2.73a.73.73 0 0 0-.73.73V7c0 4.14 3.36 7.5 7.5 7.5h1v7.75a.749.749 0 1 0 1.5 0zm8.5-8.625V4.5h-1.375A7.13 7.13 0 0 0 12 11.625V13h1.375A7.13 7.13 0 0 0 20.5 5.875M10.5 13v-1c0-3.31-2.69-6-6-6h-1v1c0 3.31 2.69 6 6 6z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
