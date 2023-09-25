<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { useCopilotStore } from "@/src/store/copilot";
import gsap from "gsap";

// Components
import CoButton from "@/components/Button/ButtonGray.vue";

// General State
const store = useCopilotStore();
const actions = ref<HTMLElement | null>(null);
const answer = ref<String | null>(null);

// Watch
watch(
  () => store.actions,
  () => {
    const children = gsap.utils.selector(actions.value)("button");

    // Kill Animation
    gsap.killTweensOf(children);
    gsap.set(children, { opacity: 0, translateY: "15%" });

    // Start Animation
    gsap.to(children, {
      opacity: 1,
      translateY: 0,
      rotate: 0,
      stagger: 0.1,
      delay: 0.3,
      ease: "Power4.easeOut",
    });
  }
);

// Computed
const isChatEmpty = computed((): boolean => store.chatHistoric.length === 0);

// Methods
const onSendAnswer = () => {
  if (answer.value) {
    store.onAskCopilot(answer.value as string);
    answer.value = null;
  }
};
</script>

<template>
  <footer class="px-6 py-4 w-full">
    <!-- Buttons with Actions -->
    <client-only>
      <div
        class="mb-4 flex justify-end gap-4 mx-auto"
        ref="actions"
        v-show="!isChatEmpty"
      >
        <co-button
          v-for="(action, key) in store.actions"
          :key="`copilot-action-${key}`"
          @click="store.onAskCopilot(action)"
          >{{ action }}</co-button
        >
      </div>
    </client-only>

    <form @submit.prevent="onSendAnswer()">
      <!-- Interaction by text -->
      <div class="flex w-full items-center mb-4">
        <div
          class="flex flex-col w-full flex-grow relative border border-black/10 rounded-xl shadow-xs bg-white"
        >
          <textarea
            class="block p-4 pr-16 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500"
            placeholder="Talk to Bob!"
            v-model="(answer as string)"
          />
          <button
            class="absolute p-2 rounded-md md:bottom-4 md:p-2 md:right-4 right-2 text-white bottom-1.5 transition-colors disabled:opacity-40 bg-[#38A169]"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
      <!-- -->
      <div class="flex items-center justify-between">
        <div>
          <p class="font-medium text-[#808080]">
            Hold down Alt to speak to Bob
          </p>
        </div>
        <div>
          <button
            type="button"
            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Close Chat
          </button>
        </div>
      </div>
    </form>
  </footer>
</template>
