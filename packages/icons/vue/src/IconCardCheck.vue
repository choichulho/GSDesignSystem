<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M2.5 6V5A1.5 1.5 0 0 1 4 3.5h15A1.5 1.5 0 0 1 20.5 5v1zM19 2H4C2.35 2 1 3.35 1 5v10c0 1.65 1.35 3 3 3h5.75a.75.75 0 0 0 0-1.5H4A1.5 1.5 0 0 1 2.5 15V9h18v.75a.75.75 0 1 0 1.5 0V5c0-1.65-1.35-3-3-3M5.505 11.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zm6.495 5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m9.5 0c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.795 4 4 4 4-1.794 4-4m-1.75-2a.75.75 0 0 0-.53.22l-2.713 2.712-.72-.72a.75.75 0 0 0-1.061 0 .75.75 0 0 0 0 1.061l1.225 1.225.025.026a.75.75 0 0 0 .531.22.75.75 0 0 0 .547-.237l3.227-3.227a.751.751 0 0 0-.531-1.28" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
