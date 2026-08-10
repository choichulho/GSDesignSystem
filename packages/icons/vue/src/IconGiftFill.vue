<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M18.075 6.5H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-7.25v-6H15c1.24 0 2.25-.897 2.25-2s-1.01-2-2.25-2-2.25.898-2.25 2v2h-1.5v-2c0-1.102-1.01-2-2.25-2s-2.25.898-2.25 2c0 1.103 1.01 2 2.25 2h2.25v6H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h1.925a3.33 3.33 0 0 1-.675-2C5.25 2.567 6.928 1 9 1c1.229 0 2.316.554 3 1.406C12.684 1.554 13.771 1 15 1c2.072 0 3.75 1.567 3.75 3.5 0 .744-.251 1.433-.675 2M3.5 20a3 3 0 0 0 3 3h4.75v-9H3.5zm9.25 3h4.75a3 3 0 0 0 3-3v-6h-7.75z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
