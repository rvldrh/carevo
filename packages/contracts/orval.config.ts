import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: "./openapi.yaml",
    output: {
      httpClient: "axios",
      target: "./src/api/index.ts",
    },
  },
});
