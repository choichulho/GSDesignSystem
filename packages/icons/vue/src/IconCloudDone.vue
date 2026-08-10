<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M6 18.5h13.5c1.654 0 3-1.346 3-3a3.02 3.02 0 0 0-2.346-2.926l-1.113-.248-.059-1.139A5.99 5.99 0 0 0 13 5.5a5.99 5.99 0 0 0-5.312 3.216l-.45.857-.966-.058-.107-.007-.038-.002Q6.064 9.5 6 9.5A4.505 4.505 0 0 0 1.5 14c0 2.481 2.019 4.5 4.5 4.5M13 4c4.01 0 7.276 3.15 7.48 7.11A4.5 4.5 0 0 1 19.5 20H6A6 6 0 1 1 6 8q.133.002.263.012l.098.006A7.49 7.49 0 0 1 13 4m-2.368 10.759 5.091-5.091a.75.75 0 1 1 1.06 1.06l-5.62 5.621a.75.75 0 0 1-1.061 0l-2.886-2.886a.75.75 0 1 1 1.06-1.06z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
