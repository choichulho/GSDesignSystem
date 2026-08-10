<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M4.5 3h5c.825 0 1.5.675 1.5 1.5v5c0 .825-.675 1.5-1.5 1.5h-5C3.676 11 3 10.325 3 9.5v-5C3 3.675 3.676 3 4.5 3m5 6.5h-5v-5h5zm5-6.5h5c.825 0 1.5.675 1.5 1.5v5c0 .825-.675 1.5-1.5 1.5h-5c-.824 0-1.5-.675-1.5-1.5v-5c0-.825.676-1.5 1.5-1.5m5 6.5h-5v-5h5zM9.5 13h-5c-.824 0-1.5.675-1.5 1.5v5c0 .825.676 1.5 1.5 1.5h5c.825 0 1.5-.675 1.5-1.5v-5c0-.825-.675-1.5-1.5-1.5m-5 6.5h5v-5h-5zm10-6.5h5c.825 0 1.5.675 1.5 1.5v5c0 .825-.675 1.5-1.5 1.5h-5c-.824 0-1.5-.675-1.5-1.5v-5c0-.825.676-1.5 1.5-1.5m5 6.5h-5v-5h5z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
