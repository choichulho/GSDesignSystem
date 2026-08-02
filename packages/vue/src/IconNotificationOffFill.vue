<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M12.757 2.538a7.47 7.47 0 0 1 4.137 1.782L2.455 18.757A1.98 1.98 0 0 1 2 17.5v-.257a3 3 0 0 1 .878-2.122l1.629-1.628V10a7.5 7.5 0 0 1 6.75-7.462V1.75a.75.75 0 1 1 1.5 0zM10.007 19.5c0 1.102.897 2 2 2s2-.898 2-2zm9.5-5.993 1.614 1.614A3 3 0 0 1 22 17.242v.258a2 2 0 0 1-2 2h-4.493a3.5 3.5 0 1 1-7 0h-2.55l-2.28 2.28a.75.75 0 0 1-1.06-1.06l1.234-1.235H3.85l14.08-14.08v.001l2.187-2.187a.75.75 0 0 1 1.06 1.061l-2.435 2.436A7.44 7.44 0 0 1 19.507 10z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
