<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M21.5 4a2 2 0 0 0-2.515-1.93l-11 2.94A1.996 1.996 0 0 0 6.5 6.94v8.85a.75.75 0 0 1-.55.725l-2.045.57c-1.195.335-1.9 1.245-1.9 2.42a2.5 2.5 0 0 0 2.5 2.5c1.38 0 3.5-1.145 3.5-3.545L8 18.455v-7.46l12-3.209v6.499a.75.75 0 0 1-.55.725l-2.045.57c-1.195.335-1.9 1.245-1.9 2.42a2.5 2.5 0 0 0 2.5 2.5c1.38 0 3.5-1.145 3.5-3.545H21.5z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
