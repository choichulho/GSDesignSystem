<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M21 12h-3V9.75a.75.75 0 0 0-1.5 0V12h-3.75V9.75a.75.75 0 0 0-1.5 0V12H7.5V9.75a.75.75 0 0 0-1.5 0V12H3V8.386q0-.097.035-.187l1.103-2.756A1.49 1.49 0 0 1 5.533 4.5H18.47c.617 0 1.163.37 1.393.943l1.103 2.756q.035.09.035.187zm-1.5 7a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-5.5h9zm2.857-11.357-1.102-2.757A3 3 0 0 0 18.469 3H5.532a3 3 0 0 0-2.786 1.886L1.642 7.643a2 2 0 0 0-.143.743V12A1.5 1.5 0 0 0 3 13.5v6.75a.75.75 0 0 0 1.5 0V13.5H9V19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5.5a1.5 1.5 0 0 0 1.5-1.5V8.386c0-.255-.049-.507-.143-.743" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
