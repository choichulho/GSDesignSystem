<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M12 6.5c-.55 0-1 .45-1 1l.25 5.75a.749.749 0 1 0 1.5 0L13 7.5c0-.55-.45-1-1-1m0 8.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"/><path fill="currentColor" fill-rule="evenodd" d="M11.61 1.05Q11.805.999 12 1c.13 0 .265.015.39.05l7.505 2.01c.655.175 1.11.77 1.11 1.45v9.405c0 1.96-.955 3.79-2.56 4.915l-5.57 3.9a1.51 1.51 0 0 1-1.72 0L5.56 18.81A6 6 0 0 1 3 13.895V4.51c0-.68.455-1.275 1.11-1.45zm7.89 3.46L12 2.5 4.495 4.51v9.385c0 1.465.72 2.845 1.92 3.685l5.595 3.92 5.57-3.9a4.5 4.5 0 0 0 1.92-3.685z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
