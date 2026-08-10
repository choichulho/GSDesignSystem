<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M18.75 9a.749.749 0 1 1 0 1.5h-.5a.749.749 0 1 1 0-1.5z"/><path fill="currentColor" fill-rule="evenodd" d="M16.5 2a2 2 0 0 1 2 2v1.5h1c1.655 0 3 1.345 3 3v7c0 1.655-1.345 3-3 3h-1V20a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-1.5h-1c-1.655 0-3-1.345-3-3v-7c0-1.655 1.345-3 3-3h1V4a2 2 0 0 1 2-2zM7 13.5V20c0 .275.225.5.5.5h9c.275 0 .5-.225.5-.5v-6.5zM4.5 7C3.675 7 3 7.675 3 8.5v7c0 .825.675 1.5 1.5 1.5h1v-4.25c0-.415.335-.75.75-.75h11.5c.415 0 .75.335.75.75V17h1c.825 0 1.5-.675 1.5-1.5v-7c0-.825-.675-1.5-1.5-1.5zm3-3.5c-.275 0-.5.225-.5.5v1.5h10V4c0-.275-.225-.5-.5-.5z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
