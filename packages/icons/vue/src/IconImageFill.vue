<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M19.5 18c0 .827-.673 1.5-1.5 1.5H6c-.827 0-1.5-.673-1.5-1.5v-1.95l2.69-2.689a1.5 1.5 0 0 1 2.12 0l.772.771a.5.5 0 0 0 .707 0l3.547-3.546a2 2 0 0 1 2.828 0l2.336 2.336zM9 6.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
