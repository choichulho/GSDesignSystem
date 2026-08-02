<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="m14.057 10.852-2.009-6.198h-.118l-2.02 6.198zM5.904 15.89c0-.258.064-.537.204-.945l4.028-11.398C10.512 2.473 11.04 2 12.016 2c.978 0 1.504.462 1.87 1.547l4.028 11.398c.118.354.182.644.182.913 0 .644-.462 1.052-1.16 1.052-.655 0-1.042-.333-1.289-1.16l-1.01-3.03H9.331l-1.01 3.03c-.258.838-.623 1.16-1.278 1.16-.677 0-1.14-.397-1.14-1.02M20 22H4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
