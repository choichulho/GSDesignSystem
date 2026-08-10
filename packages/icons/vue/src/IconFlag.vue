<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M18.3 11.046 19.29 15H11.5a.5.5 0 0 1-.5-.5A1.5 1.5 0 0 0 9.5 13h-5V4h6a.5.5 0 0 1 .5.5c0 .042.009.082.013.124A1 1 0 0 0 11 4.75v2.5a.75.75 0 1 0 1.5 0V6h6.79l-.99 3.955a2.26 2.26 0 0 0 0 1.09m1.456-.365a.76.76 0 0 1 0-.363l1.221-4.887a.75.75 0 0 0-.727-.931H12.5a2 2 0 0 0-2-2h-6v-.75a.75.75 0 1 0-1.5 0v20.5a.75.75 0 0 0 1.5 0V14.5h5a2 2 0 0 0 2 2h8.75a.75.75 0 0 0 .727-.932z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
