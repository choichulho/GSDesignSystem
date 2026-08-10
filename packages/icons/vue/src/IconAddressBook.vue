<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M17.5 21c.827 0 1.5-.673 1.5-1.5v-15c0-.827-.673-1.5-1.5-1.5h-10C6.673 3 6 3.673 6 4.5v15c0 .827.673 1.5 1.5 1.5zM7.5 1.5h10a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-2h-.25a.75.75 0 0 1 0-1.5h.25v-3.5h-.25a.75.75 0 0 1 0-1.5h.25V7.5h-.25a.75.75 0 0 1 0-1.5h.25V4.5a3 3 0 0 1 3-3m5 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 3.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-3.129 3.5c.445-.594 1.242-1 2.13-1h2c.888 0 1.687.407 2.13 1zm4.13-2.5h-2c-2.198 0-3.996 1.6-4 3.557.001.245.224.443.5.443h9c.275 0 .497-.198.5-.443C17.494 14.6 15.696 13 13.5 13" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
