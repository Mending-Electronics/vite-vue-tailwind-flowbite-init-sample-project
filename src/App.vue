<script setup>
import { FwbAlert } from 'flowbite-vue'
</script>


<template>
  <fwb-alert type="success">
    Success! You can now use Flowbite Vue in your Vue application 🎉
  </fwb-alert>
</template>


<style scoped>
@reference "./style.css";

.custom-class {
  @apply border rounded p-3;
}
</style>

