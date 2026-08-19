<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M20.5 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m.5 16a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5zM13 8h-2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2m.5 11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5zm-10-7h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m2 7.5A.5.5 0 0 0 6 19v-5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
