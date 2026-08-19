<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M19 3H5a2 2 0 0 0-2 2v1.758a3 3 0 0 0 .879 2.121l4.828 4.828a1 1 0 0 1 .293.707v7.585a1 1 0 0 0 1.5.866l3.5-2.021a2 2 0 0 0 1-1.733v-4.697a1 1 0 0 1 .293-.707l4.828-4.828A3 3 0 0 0 21 6.758V5a2 2 0 0 0-2-2m0 1.5a.5.5 0 0 1 .5.5v1.758c0 .4-.157.777-.44 1.06l-4.828 4.829a2.48 2.48 0 0 0-.732 1.767v4.698a.5.5 0 0 1-.25.432l-2.75 1.588v-6.718a2.48 2.48 0 0 0-.732-1.767L4.939 7.818a1.5 1.5 0 0 1-.439-1.06V5a.5.5 0 0 1 .5-.5z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
