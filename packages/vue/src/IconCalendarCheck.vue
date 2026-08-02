<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M4.5 8.518h15V7c0-.827-.673-1.5-1.5-1.5h-1v.75a.75.75 0 0 1-1.5 0V5.5h-7v.75a.75.75 0 0 1-1.5 0V5.5H6c-.827 0-1.5.673-1.5 1.5zM18 20.5c.827 0 1.5-.673 1.5-1.5v-8.982h-15V19c0 .827.673 1.5 1.5 1.5zM17 4h1c1.65 0 3 1.35 3 3v12c0 1.65-1.35 3-3 3H6c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h1V2.75a.75.75 0 0 1 1.5 0V4h7V2.75a.75.75 0 0 1 1.5 0zM9.794 18.78 7.2 16.185a.751.751 0 0 1 1.061-1.061l2.064 2.064 5.476-5.475a.747.747 0 0 1 1.06 0 .75.75 0 0 1 0 1.06l-6.004 6.005h-.001v.001a.747.747 0 0 1-1.062 0" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
