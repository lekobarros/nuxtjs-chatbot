<script lang="ts" setup>
import { useCopilotStore } from "@/src/store/copilot";

// General State
const store = useCopilotStore();

// Components
import TheCopilorHeader from "./TheCopilorHeader.vue";
import TheCopilotChatVoid from "./TheCopilotChatVoid.vue";
import TheCopilotChatHistory from "./TheCopilotChatHistory.vue";
import TheCopilotFooter from "./TheCopilotFooter.vue";

// Methods
const isChatEmpty = (): boolean => store.chatHistoric.length === 0;
</script>

<template>
  <section
    class="flex flex-col w-[672px] h-[595px] max-w-screen-md bg-white rounded-md"
  >
    <!-- Header -->
    <TheCopilorHeader />

    <!-- Content -->
    <div class="flex-1 overflow-y-scroll">
      <TheCopilotChatVoid v-if="isChatEmpty()" />
      <TheCopilotChatHistory v-else />
    </div>

    <!-- Footer -->
    <TheCopilotFooter />
  </section>
</template>
