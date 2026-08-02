<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="currentColor" fill-rule="evenodd" d="M15.5 5.5c3.585 0 6.5 2.915 6.5 6.5s-2.915 6.5-6.5 6.5A6.506 6.506 0 0 1 9 12c0-3.585 2.915-6.5 6.5-6.5m0-1.5c-4.42 0-8 3.58-8 8s3.58 8 8 8a7.97 7.97 0 0 0 4.622-1.468l5.173 5.173c.195.195.45.295.705.295h.005a1.002 1.002 0 0 0 .705-1.71l-5.111-5.111A7.97 7.97 0 0 0 23.5 12c0-4.42-3.58-8-8-8M1.75 5h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5m3.5 6.25h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5m2 6.25h-5.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M1 4h26v20H1z"/></clipPath></defs>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
