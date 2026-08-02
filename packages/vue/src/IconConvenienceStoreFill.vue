<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M12 7.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 7.5"/><path fill="currentColor" fill-rule="evenodd" d="M20.5 19.5h1.75a.749.749 0 1 1 0 1.5H1.75a.749.749 0 1 1 0-1.5H3.5V12h-1c-.83 0-1.5-.67-1.5-1.5V6c0-.83.67-1.5 1.5-1.5h3.902A3 3 0 0 1 9 3h6c1.109 0 2.078.604 2.598 1.5H21.5c.83 0 1.5.67 1.5 1.5v4.5c0 .83-.67 1.5-1.5 1.5h-1zM6 7.5H2.5V9H6zm15.5 0H18V9h3.5zM9 4.5c-.825 0-1.5.675-1.5 1.5v6c0 .825.675 1.5 1.5 1.5h6c.825 0 1.5-.675 1.5-1.5V6c0-.825-.675-1.5-1.5-1.5zM10 18v1.5h4V18c0-.83-.67-1.5-1.5-1.5h-1c-.83 0-1.5.67-1.5 1.5" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
