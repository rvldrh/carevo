import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: "./src/api/index.ts",
    outDir: "./dist/api",
    dts: true,
  },
]);
