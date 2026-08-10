<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M4 3h12c1.65 0 3 1.35 3 3v2.75c0 .4-.35.75-.75.75s-.75-.35-.75-.75V6c0-.85-.65-1.5-1.5-1.5H4c-.85 0-1.5.65-1.5 1.5v8c0 .85.65 1.5 1.5 1.5h3.75c.4 0 .75.35.75.75s-.35.75-.75.75H4c-1.65 0-3-1.35-3-3V6c0-1.65 1.35-3 3-3m2.4 6.5H5.25c-.4 0-.75.35-.75.75s.35.75.75.75h3c.4 0 .75-.35.75-.75v-3c0-.4-.35-.75-.75-.75s-.75.35-.75.75v1.2L5.3 6.2a.9.9 0 0 0-1.1 0c-.3.25-.25.8 0 1.1zm14.1 3c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1h-8c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1zm0-1.5h-8c-1.4 0-2.5 1.1-2.5 2.5v5c0 1.4 1.1 2.5 2.5 2.5h8c1.4 0 2.5-1.1 2.5-2.5v-5c0-1.4-1.1-2.5-2.5-2.5" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
