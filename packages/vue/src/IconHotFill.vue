<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M10.895.07c-.68-.264-1.39.25-1.37.98C9.68 7.206 3 6.63 3 14.45c0 4.115 3.005 9.18 8.955 9.18s9.094-5.225 9.094-9.18c0-2.615-1.244-4.66-2.114-5.84a.495.495 0 0 0-.885.175A9.4 9.4 0 0 1 17 11.4c-.335.565-1.03 1.485-2.095 1.485-1.175 0-2.095-.83-2.095-1.93 0-2.005 2.43-2.545 2.43-5.385 0-2.564-2.355-4.724-4.345-5.5"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
