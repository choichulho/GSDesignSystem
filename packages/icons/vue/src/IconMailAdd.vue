<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M21.25 9.5a.75.75 0 0 1-.75-.75V5.493l-7.268 5.893a2.75 2.75 0 0 1-1.732.61c-.616 0-1.23-.203-1.732-.61L2.5 5.493V15A1.5 1.5 0 0 0 4 16.5h6.75a.75.75 0 1 1 0 1.5H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v3.75a.75.75 0 0 1-.75.75m-10.537.721c.456.37 1.119.37 1.575 0l7.76-6.292A1.5 1.5 0 0 0 19 3.5H4c-.409 0-.777.164-1.048.429z" clip-rule="evenodd"/><path fill="currentColor" d="M19.75 16.5h2.5c.412 0 .75.337.75.75s-.338.75-.75.75h-2.5v2.5c0 .413-.338.75-.75.75a.75.75 0 0 1-.75-.75V18h-2.5a.75.75 0 0 1-.75-.75c0-.413.337-.75.75-.75h2.5V14c0-.412.337-.75.75-.75.412 0 .75.338.75.75z"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
