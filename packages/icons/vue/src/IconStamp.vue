<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M10.5 13v-1c0-1.911-.847-3.931-1.106-4.506l-.043-.087A2.96 2.96 0 0 1 9 6c0-1.654 1.345-3 3-3a3.003 3.003 0 0 1 2.649 4.407q-.023.043-.043.088c-.26.574-1.106 2.596-1.106 4.505v1zm4.5 0v-1c0-1.489.664-3.204.973-3.887a4.5 4.5 0 1 0-7.945 0C8.336 8.796 9 10.512 9 12v1H5.5a3 3 0 0 0-3 3v2A1.5 1.5 0 0 0 4 19.5h16a1.5 1.5 0 0 0 1.5-1.5v-2a3 3 0 0 0-3-3zm3.5 1.5c.827 0 1.5.673 1.5 1.5v2H4v-2c0-.827.673-1.5 1.5-1.5zm1 7.25a.75.75 0 0 0-.75-.75H5.25a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 .75-.75" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
