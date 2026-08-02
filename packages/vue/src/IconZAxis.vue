<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M12 2a.75.75 0 0 0-.53.22L8.72 4.97a.751.751 0 0 0 1.06 1.062l1.47-1.471v8.129L4.5 19.44l.001-2.19a.75.75 0 0 0-1.5 0l-.001 4q0 .152.057.284 0 .005.002.008a.75.75 0 0 0 .496.429.7.7 0 0 0 .195.029h4a.75.75 0 0 0 0-1.5H5.561L12 14.061l6.439 6.439H16.25a.75.75 0 0 0 0 1.5h4a.7.7 0 0 0 .195-.029.75.75 0 0 0 .497-.429l.002-.008A.7.7 0 0 0 21 21.25l-.001-4a.75.75 0 1 0-1.5 0l.001 2.19-6.75-6.75V4.56l1.47 1.47a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06l-2.75-2.75A.75.75 0 0 0 12 2" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
