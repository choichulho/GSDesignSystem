<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M12.45 4c.5-.05 1 .3 1.2.8l4.95 13.6c.25.65-.1 1.35-.75 1.6s-1.35-.1-1.6-.75l-1.28-3.5H8.964L7.7 19.25c-.25.65-.95 1-1.6.75s-1-.95-.75-1.6l4.9-13.6c.2-.5.7-.8 1.2-.8zm-2.58 9.25h4.184L11.95 7.5z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
