<script lang="ts" setup>
import { useCopilotStore } from "@/src/store/copilot";

// Components
import CopilotChat from "@/components/TheCopilot/CopilotChat.vue";

// General State
const store = useCopilotStore();
</script>

<template>
  <div class="flex flex-col gap-4 px-6 py-4 w-full h-full">
    <CopilotChat 
      v-for="(chat, key) in store.chatHistoric"
      :key="`copilot-chat-${key}`"
      :from="(chat.from as string)" 
      :text="(chat.question as string)"
    />
  </div>
</template>
