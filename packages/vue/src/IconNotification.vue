<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M20.5 17.5a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-.258c0-.4.156-.777.439-1.06l1.628-1.628c.281-.281.44-.664.44-1.062V10c0-3.309 2.691-6 6-6s6 2.691 6 6v3.507c0 .398.158.779.44 1.06l1.614 1.614c.283.284.439.661.439 1.061zm-8.493 4c-1.102 0-2-.898-2-2h4c0 1.102-.897 2-2 2m9.114-6.379-1.614-1.614V10a7.5 7.5 0 0 0-6.75-7.462V1.75a.75.75 0 0 0-1.5 0v.788A7.5 7.5 0 0 0 4.507 10v3.492l-1.628 1.629A3 3 0 0 0 2 17.242v.258a2 2 0 0 0 2 2h4.507a3.5 3.5 0 1 0 7 0H20a2 2 0 0 0 2-2v-.258c0-.795-.317-1.558-.879-2.121" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
