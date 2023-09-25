<script lang="ts" setup>
const props = defineProps({
  text: String
})
</script>

<template>
  <button class="px-3 py-2 bg-gray-100 text-gray-800 text-sm font-medium  rounded-md"><slot /></button>
</template>