import { defineStore } from "pinia";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

import { CopilotStore } from "@/src/types/chat";

const doGenerateActions = () => `How do ${faker.word.adjective()}?`;

export const useCopilotStore = defineStore("copilot", {
  state: (): CopilotStore => ({
    actions: [],
    chatHistoric: [],
  }),
  actions: {
    onInitCopilot() {
      const actions = new Array(3).fill(undefined).map(doGenerateActions);
      this.actions = [...actions];
    },
    onAskCopilot(question: string) {
      // Generate random answer using faker.js 
      const ask = { from: "Alex Vasconcelos", question };
      const asnwer = { from: "Bob", question: faker.lorem.paragraph() };
      this.chatHistoric.push(ask);

      // Make a fake request
      setTimeout(() => this.chatHistoric.push(asnwer), 600);

      // Reset random actions
      this.onInitCopilot();
    },
  },
});
