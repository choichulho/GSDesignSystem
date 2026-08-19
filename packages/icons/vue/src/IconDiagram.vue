<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M10.252 4.033c.408 0 .748.337.748.754V11a2 2 0 0 0 2 2h6.213c.44 0 .79.378.75.815a9 9 0 0 1-9.987 8.128c-4.127-.456-7.463-3.792-7.92-7.919a9.004 9.004 0 0 1 8.196-9.99M9.5 5.648a7.44 7.44 0 0 0-4.309 2.607 7.48 7.48 0 0 0-1.643 5.604c.38 3.44 3.152 6.213 6.592 6.593.286.032.576.048.86.048a7.454 7.454 0 0 0 7.352-6H13c-1.93 0-3.5-1.57-3.5-3.5z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M13.85 2.003a9 9 0 0 1 8.147 8.147.753.753 0 0 1-.75.817h-7.214a1 1 0 0 1-1-1V2.754a.755.755 0 0 1 .817-.751m.683 7.464h5.85a7.48 7.48 0 0 0-5.85-5.85z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
