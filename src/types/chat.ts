export type chatHistoric = {
  from: String;
  question: String;
}

export type CopilotStore = {
  actions: string[];
  chatHistoric: chatHistoric[]
}