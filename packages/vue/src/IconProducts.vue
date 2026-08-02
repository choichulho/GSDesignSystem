<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M12 21.561a2 2 0 0 1-1.25.439h-7.5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3.063a2 2 0 0 1-.063-.5V4a2 2 0 0 1 2-2h7.5a2 2 0 0 1 2 2v6.5q0 .26-.063.5h3.063a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7.5c-.473 0-.908-.164-1.25-.439M16.25 10.5a.5.5 0 0 1-.5.5h-7.5a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h1.5v2a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-2h1.5a.5.5 0 0 1 .5.5zm-5 2.5a.5.5 0 0 0-.5-.5h-1.5v2a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1v-2h-1.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7.5a.5.5 0 0 0 .5-.5zm3.5-.5h-1.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-1.5v2a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1zM11.25 5h1.5V3.5h-1.5zm-5 9h1.5v-1.5h-1.5zm11.5 0h-1.5v-1.5h1.5z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
