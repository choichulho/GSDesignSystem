<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M12.912 5.556a.75.75 0 0 1 1.449.389l-3.348 12.5a.75.75 0 0 1-1.449-.389zM7.53 7.22a.75.75 0 0 0-1.062 0L2.22 11.468a.75.75 0 0 0 0 1.064l4.248 4.248a.751.751 0 1 0 1.062-1.062L3.812 12 7.53 8.282a.75.75 0 0 0 0-1.062m14.25 4.248L17.532 7.22a.752.752 0 0 0-1.062 1.062L20.188 12l-3.718 3.718a.751.751 0 0 0 1.062 1.062l4.248-4.248a.75.75 0 0 0 0-1.064" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
