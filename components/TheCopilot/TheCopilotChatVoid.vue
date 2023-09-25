<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useCopilotStore } from "@/src/store/copilot";
import gsap from "gsap";

// Components
import CoButton from "@/components/Button/ButtonGray.vue";

// General State
const store = useCopilotStore();
const heading = ref(null);
const paragraph = ref(null);
const actions = ref<HTMLElement | null>(null);

// Lyfecycle
onMounted((): void => {
  doInitAnimation();
});

// Methods
const doInitAnimation = (): void => {
  const tl = gsap.timeline();
  tl.addLabel("start", ">");

  // Set
  const actionChildrens = gsap.utils.selector(actions.value)("button");
  gsap.set([heading.value, paragraph.value, actionChildrens], {
    opacity: 0,
    translateY: "15%",
  });
  gsap.set(actionChildrens, { rotate: "3deg" });

  // Animation
  tl.to(
    heading.value,
    { opacity: 1, translateY: 0, ease: "Power4.easeOut" },
    "start+=0.1"
  );
  tl.to(
    paragraph.value,
    { opacity: 1, translateY: 0, ease: "Power4.easeOut" },
    "start+=0.1"
  );
  tl.to(
    actionChildrens,
    {
      opacity: 1,
      translateY: 0,
      rotate: 0,
      stagger: 0.1,
      ease: "Power4.easeOut",
    },
    "start+=0.2"
  );

  // Start Animation
  tl.play();
};
</script>

<template>
  <div
    class="flex flex-col justify-center gap-4 px-6 py-4 w-full h-full text-center"
  >
    <h2 ref="heading" class="text-gray-2 text-xl font-medium">
      Let's start creating your company value propositions
    </h2>
    <p ref="paragraph" class="text-gray-3">
      You can ask Bob anything about how to start to create your company value
      propositions or choose some actions to build for you. buttons
    </p>

    <!-- For with fake data -->
    <div class="mt-4 flex gap-4 mx-auto" ref="actions">
      <co-button
        v-for="(action, key) in store.actions"
        :key="`copilot-action-${key}`"
        @click="store.onAskCopilot(action)"
      >
        {{ action }}
      </co-button>
    </div>
  </div>
</template>
