<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M2.84 6.045c.28-.08.595-.055.88.11l8.705 5.025c.385.225.575.605.575.995s-.195.775-.575.995L3.72 18.196c-.38.22-.81.195-1.145 0A1.14 1.14 0 0 1 2 17.2V7.15c0-.555.375-.974.84-1.105m10.89.035c.305-.12.665-.115.99.075l8.705 5.025v-.005c.385.225.575.605.575.995s-.195.775-.575.995L14.72 18.19A1.146 1.146 0 0 1 13 17.2V7.15c0-.51.316-.905.73-1.07"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
