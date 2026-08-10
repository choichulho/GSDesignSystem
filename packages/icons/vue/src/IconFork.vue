<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M20 18.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5m-16-5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5m16-8c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5m0 8.5a3 3 0 0 0-2.901 2.25H14a.5.5 0 0 1-.5-.5v-7.5a.5.5 0 0 1 .5-.5h3.099A2.998 2.998 0 0 0 23 7a2.998 2.998 0 0 0-5.901-.75H14a2 2 0 0 0-2 2v3H6.902A2.998 2.998 0 0 0 1 12a2.998 2.998 0 0 0 5.902.75H12v3a2 2 0 0 0 2 2h3.099A2.998 2.998 0 0 0 23 17a3 3 0 0 0-3-3" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
