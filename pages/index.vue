<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { useCopilotStore } from '@/src/store/copilot'

// Components
import TheCopilot from '@/components/TheCopilot/index.vue'

// General State
const store = useCopilotStore()

// Lifecycle
onBeforeMount(() => {
  store.onInitCopilot()
})
</script>

<template>
  <div class="flex justify-center items-center w-full min-h-screen p-4 bg-[#7d857f]">
    <TheCopilot />
  </div>
</template>