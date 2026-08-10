<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M20.995 20.5h.76a.749.749 0 1 1 0 1.5h-4.25v-6.395A2.105 2.105 0 0 0 15.4 13.5H8.605A2.105 2.105 0 0 0 6.5 15.605V22H2.25a.749.749 0 1 1 0-1.5h.745V9.62c0-1.075.57-2.065 1.5-2.6l6.5-3.75c.31-.18.66-.27 1.005-.27s.685.09.995.27l6.5 3.75c.93.54 1.5 1.53 1.5 2.6zM10.245 10h3.5a.749.749 0 1 0 0-1.5h-3.5a.749.749 0 1 0 0 1.5M16 15.605c0-.33-.27-.605-.605-.605h-6.79c-.33 0-.605.27-.605.605V17h8zM16 22v-3.5H8V22z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
