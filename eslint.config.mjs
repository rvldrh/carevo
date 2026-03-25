import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    rules: {
      /**
       * =========================
       * TYPESCRIPT
       * =========================
       */
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": "error",

      /**
       * =========================
       * REACT
       * =========================
       */
      "react/no-array-index-key": "warn",

      /**
       * =========================
       * GENERAL
       * =========================
       */
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);