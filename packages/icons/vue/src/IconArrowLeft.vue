<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M11.53 19.78a.72.72 0 0 0 .215-.47.76.76 0 0 0-.215-.595L5.56 12.75h14.695c.41 0 .745-.335.745-.745v-.01a.747.747 0 0 0-.745-.745h-14.7l5.97-5.97a.75.75 0 0 0 0-1.06A.74.74 0 0 0 11 4c-.19 0-.385.07-.535.22L3.22 11.465c-.15.15-.22.34-.22.535s.07.385.22.535l7.25 7.25c.145.145.34.22.53.22s.385-.075.53-.22z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
