<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M7 1.5h5v6a2 2 0 0 0 2 2h6v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3v-15c0-1.65 1.35-3 3-3M19.897 8H14a.5.5 0 0 1-.5-.5V1.59c.322.093.622.26.863.503l5.058 5.106c.224.227.38.503.476.801" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
