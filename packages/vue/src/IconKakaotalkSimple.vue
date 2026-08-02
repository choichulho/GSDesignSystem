<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M11.977 2.7C6.455 2.716 1.987 6.266 2 10.629c.008 2.805 1.867 5.263 4.66 6.657l-.932 3.524a.285.285 0 0 0 .273.378c.062 0 .125-.02.177-.062l4.047-2.748q.876.123 1.798.122c5.522-.016 9.99-3.565 9.977-7.929-.013-4.363-4.5-7.887-10.023-7.871" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
