<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="m13.065 2.28 2.041 6.45 6.766-.05c.567-.005.961.37 1.086.82.116.417 0 .9-.427 1.204l-5.505 3.935 2.14 6.42c.172.513-.036.986-.396 1.251a1.096 1.096 0 0 1-1.326 0L12 18.29l-5.443 4.02a1.096 1.096 0 0 1-1.326 0 1.1 1.1 0 0 1-.397-1.252l2.14-6.419-5.504-3.935A1.09 1.09 0 0 1 1.042 9.5c.125-.45.52-.825 1.086-.82l6.766.05 2.041-6.45c.165-.52.615-.78 1.065-.78s.9.26 1.065.78" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M12 1.5c-.45 0-.9.26-1.065.78L8.894 8.731l-6.766-.052a1.1 1.1 0 0 0-1.086.821c-.116.417 0 .9.427 1.204l5.505 3.935-2.14 6.419c-.345 1.035.845 1.9 1.722 1.252L12 18.29z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
