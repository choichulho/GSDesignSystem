<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M12.75 8.25a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0z"/><path fill="currentColor" fill-rule="evenodd" d="M9 3h6c1.024 0 1.906.617 2.292 1.5H21a2 2 0 0 1 2 2V10a2 2 0 0 1-2 2h-.5v7.5h1.75a.749.749 0 1 1 0 1.5H1.75a.749.749 0 1 1 0-1.5H3.5V12H3a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2h3.708A2.5 2.5 0 0 1 9 3m7 2.5c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1zm1.5.5v4.5H21c.275 0 .5-.225.5-.5V9h-1.75a.749.749 0 1 1 0-1.5h1.75v-1c0-.275-.225-.5-.5-.5zm-.05 6A2.5 2.5 0 0 1 15 14H9a2.5 2.5 0 0 1-2.45-2H5v7.5h4v-2c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5v2h4V12zM6.5 10.5V6H3c-.275 0-.5.225-.5.5v1h1.75a.749.749 0 1 1 0 1.5H2.5v1c0 .275.225.5.5.5zm7 9v-2h-3v2z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
