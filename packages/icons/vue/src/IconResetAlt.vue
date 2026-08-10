<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M19 6.25 5.566 6.245l2.426-2.426c.283-.283.34-.748.081-1.053a.75.75 0 0 0-1.104-.046L3.22 6.47a.75.75 0 0 0 0 1.06l3.75 3.75a.75.75 0 0 0 1.104-.045c.259-.305.202-.77-.081-1.053L5.561 7.75H19a1.5 1.5 0 0 1 1.5 1.5v9.25A1.5 1.5 0 0 1 19 20H7a1.5 1.5 0 0 1-1.5-1.5v-3.75a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9.25a3 3 0 0 0-3-3" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
