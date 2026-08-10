<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M16.151 4c-1.6 0-3.19 1.223-4.154 2.136-1.519-1.415-2.924-2.13-4.184-2.13-1.641 0-2.965.524-4.045 1.601A5.97 5.97 0 0 0 2 9.865a5.97 5.97 0 0 0 1.768 4.256c.606.607 6.584 7.255 6.66 7.341.419.416.975.646 1.566.646s1.147-.23 1.578-.66a8586 8586 0 0 1 6.663-7.186A5.98 5.98 0 0 0 22 10a5.97 5.97 0 0 0-1.765-4.253C19.056 4.572 17.72 4 16.15 4" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
