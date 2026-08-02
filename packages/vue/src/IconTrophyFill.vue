<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="currentColor" clip-path="url(#a)"><path d="M12.815 15.5h-1.5V20h1.5z"/><path d="M18.065 0h-12c-.55 0-1 .45-1 1v8.5c0 3.865 3.135 7 7 7s7-3.135 7-7V1c0-.55-.45-1-1-1m-3 19h-6a2 2 0 0 0-2 2v3h10v-3a2 2 0 0 0-2-2"/><path d="M17.815 22.5h-11.5a.749.749 0 1 0 0 1.5h11.5a.749.749 0 1 0 0-1.5M6 11.06c-1.93 0-3.5-1.57-3.5-3.5v-3H6v-1.5H2c-.55 0-1 .45-1 1v3.5c0 2.76 2.24 5 5 5zm16-8h-4v1.5h3.5v3c0 1.93-1.57 3.5-3.5 3.5v1.5c2.76 0 5-2.24 5-5v-3.5c0-.55-.45-1-1-1"/></g><defs><clipPath id="a"><path fill="currentColor" d="M1 0h22v24H1z"/></clipPath></defs>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
