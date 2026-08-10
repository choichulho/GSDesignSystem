<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M20.5 2h-17a3 3 0 0 0-3 3v4a3 3 0 0 0 1.99 2.826.754.754 0 0 0 1.01-.708.75.75 0 0 0-.505-.706A1.5 1.5 0 0 1 2 9V5a1.5 1.5 0 0 1 1.5-1.5h17A1.5 1.5 0 0 1 22 5v4c0 .65-.416 1.205-.995 1.412a.75.75 0 0 0-.505.706c0 .521.518.883 1.01.708A3 3 0 0 0 23.5 9V5a3 3 0 0 0-3-3M14 19h1a1 1 0 0 0 1-1v-1.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1V18a1 1 0 0 0 1 1m2 1.5a1.5 1.5 0 0 0 1.5-1.5V8H11v12.5zM6.5 8v11A1.5 1.5 0 0 0 8 20.5h.5V8zM5 19V7.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 .75.75V19c0 1.65-1.35 3-3 3H8c-1.65 0-3-1.35-3-3" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
