<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="currentColor" clip-path="url(#a)"><path d="M15.25 6.5h-6.5a.749.749 0 1 0 0 1.5h6.5a.749.749 0 1 0 0-1.5"/><path d="M22.25 19.5H21V6c0-1.655-1.345-3-3-3H6C4.345 3 3 4.345 3 6v13.5H1.75a.749.749 0 1 0 0 1.5h20.5a.749.749 0 1 0 0-1.5m-11 0H9v-4h2.25zM7.5 14v-1.5c0-.275.225-.5.5-.5h8c.275 0 .5.225.5.5V14zm7.5 5.5h-2.25v-4H15zm4.5 0h-3v-4h.75c.415 0 .75-.335.75-.75V12.5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2.25c0 .415.335.75.75.75h.75v4h-3V6c0-.825.675-1.5 1.5-1.5h12c.825 0 1.5.675 1.5 1.5z"/></g><defs><clipPath id="a"><path fill="currentColor" d="M1 3h22v18H1z"/></clipPath></defs>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
