<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M13.5 7.722c0 .153.124.278.278.278h4.324L13.5 3.354zM5.5 19.5c0 .827.673 1.5 1.5 1.5h10c.828 0 1.5-.673 1.5-1.5v-10h-4.722A1.78 1.78 0 0 1 12 7.722V3H7c-.827 0-1.5.673-1.5 1.5zm6.5-18h1.034c.475 0 .93.19 1.263.527l5.188 5.237c.33.333.515.783.515 1.251V19.5c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3v-15c0-1.65 1.35-3 3-3zm-.75 10.25c0-.412.338-.75.75-.75.413 0 .75.338.75.75v2.5h2.5c.413 0 .75.338.75.75s-.337.75-.75.75h-2.5v2.5c0 .413-.337.75-.75.75a.75.75 0 0 1-.75-.75v-2.5h-2.5A.75.75 0 0 1 8 15c0-.412.338-.75.75-.75h2.5z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
