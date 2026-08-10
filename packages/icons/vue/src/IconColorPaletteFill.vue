<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M17.5 12.5a1.5 1.5 0 1 1 .001-3.001 1.5 1.5 0 0 1-.001 3M15 8a1.5 1.5 0 1 1 0-3.001 1.5 1.5 0 0 1-.001 3M9 8a1.5 1.5 0 1 1 0-3.001 1.5 1.5 0 0 1-.001 3m0 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-4-6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m17.212-1.426c-1.031-4.328-4.747-7.6-9.175-8.024-7.33-.703-13.3 6.136-11.06 13.666 1.304 4.38 5.456 7.295 10.027 7.284a2 2 0 0 0 1.996-2v-2.875a2 2 0 0 1 2-2h3.473c1.516 0 2.831-1.126 2.979-2.635.106-1.094.04-2.239-.24-3.416" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
