<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="m17.33 12.713.01-.014a6.45 6.45 0 0 0 1.156-3.919c-.114-3.463-3.03-6.28-6.5-6.28h-.09C8.374 2.55 5.5 5.466 5.5 9c0 1.328.4 2.606 1.16 3.699l.01.014.009.014 5.32 8.052 5.322-8.052zM11.885 1l.11-.001c4.263 0 7.86 3.459 8 7.73a7.96 7.96 0 0 1-1.423 4.825l-5.946 8.998a.75.75 0 0 1-.626.337.75.75 0 0 1-.626-.337l-5.947-8.998A7.96 7.96 0 0 1 4 9a8 8 0 0 1 7.885-7.999M10.5 9c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5M9 9a3 3 0 1 1 6 0 3 3 0 0 1-6 0" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
