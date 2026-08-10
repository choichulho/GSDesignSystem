<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="m8.5 7.5 5.818-5.43c.639-.596 1.682-.143 1.682.732v18.397c0 .875-1.043 1.328-1.682.731L8.5 16.5H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zm9.893 1.157c.328-.275.83-.23 1.079.118A5.46 5.46 0 0 1 20.5 11.97a5.47 5.47 0 0 1-1.074 3.263c-.252.341-.75.384-1.074.111l-.003-.002a.74.74 0 0 1-.13-1.003A3.97 3.97 0 0 0 19 11.97c0-.86-.273-1.658-.737-2.31-.221-.312-.189-.736.105-.981z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
