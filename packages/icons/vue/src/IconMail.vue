<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M21 17c0 .827-.673 1.5-1.5 1.5h-15c-.827 0-1.5-.673-1.5-1.5V7.493l7.268 5.893c.502.407 1.117.61 1.732.61s1.23-.203 1.732-.61L21 7.493zM4.5 5.5h15c.407 0 .776.165 1.047.429l-7.76 6.292c-.456.37-1.118.37-1.574 0l-7.76-6.292c.27-.264.64-.429 1.047-.429m15-1.5h-15a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
