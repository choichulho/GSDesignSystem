<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="currentColor" fill-rule="evenodd" d="M14 2h1.5a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2H11v2c0 .275.225.5.5.5h2c.275 0 .5-.225.5-.5zm6.605 12.51c.295.015.585.115.83.315l.005.005c.4.325.58.785.56 1.24-.02.405-.2.8-.535 1.08L16.52 21.3c-.54.45-1.225.7-1.93.7H3.5c-.83 0-1.5-.67-1.5-1.5V18c0-.63.295-1.22.8-1.6l2.4-1.8c.52-.39 1.15-.6 1.8-.6h6c.925 0 1.655.835 1.47 1.795-.135.715-.8 1.205-1.525 1.205H10a.749.749 0 1 0 0 1.5h4.46c.47 0 .925-.17 1.285-.47l3.75-3.145c.315-.265.72-.395 1.11-.375" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M2 2h20v20H2z"/></clipPath></defs>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
