<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M17.856 13.247h-1.54l-.855 3.19a.75.75 0 0 1-.724.555h-.023a.75.75 0 0 1-.693-.492l-1.916-5.264L10.19 16.5a.75.75 0 0 1-.693.491h-.022a.75.75 0 0 1-.724-.553l-.855-3.191h-1.54a.75.75 0 1 1 0-1.5h1.138l-.751-2.802a.75.75 0 1 1 1.449-.389l1.396 5.211 1.492-4.1a.75.75 0 0 1 .705-.493l.016.002v-.002h.602v.004l.024-.004a.75.75 0 0 1 .704.493l1.492 4.1 1.397-5.21a.75.75 0 0 1 1.449.388l-.751 2.802h1.137a.75.75 0 1 1 0 1.5M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
