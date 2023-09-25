<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap'

const props = defineProps({
  from: String,
  text: String
})

// General State
const root = ref<HTMLElement | null>(null)
const generatedPics = props.from == 'Bob' ? 'https://i.pravatar.cc/48?img=1' : 'https://i.pravatar.cc/48?img=48'

// Lifecycle
onMounted((): void => {
  // Animation
  gsap.to(root.value, { 
    startAt: { opacity: 0, translateY: '15%' },
    opacity: 1,
    translateY: 0
  })
})
</script>

<template>
  <div ref="root" class="flex gap-2 w-full">
    <!-- Chat User -->
    <div class="flex items-center justify-center h-12 h-12 rounded-full overflow-hidden">
      <img class="w-12 h-12" :src="generatedPics" width="48" height="48" :alt="`Chat ${props.from} Picture`">
    </div>
    <!-- Chat Info -->
    <div class="flex-1 flex flex-col">
      <div class="flex items-center gap-2 mb-2 pl-2">
        <h3 class="text-gray-900 text-sm font-medium">{{ props.from }}</h3>
      </div>
      <div class="p-4 text-sm bg-gray-100 rounded-t-3xl rounded-r-3xl rounded-b-3xl rounded-l-3xl">
        {{ props.text }}
      </div>
    </div>
  </div>
</template>