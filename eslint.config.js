import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import vitest from "eslint-plugin-vitest";
import storybook from "eslint-plugin-storybook";
import importPlugin from "eslint-plugin-import";

export default [
  {
    ignores: ["dist", ".eslintrc.cjs"],
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      parser: typescriptParser,
      globals: globals.browser,
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@typescript-eslint": typescriptEslint,
      import: importPlugin,
      vitest,
      storybook,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // Base rules
      ...js.configs.recommended.rules,

      // TypeScript rules
      ...typescriptEslint.configs.recommended.rules,

      // React rules
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,

      // React hooks rules
      ...reactHooks.configs.recommended.rules,

      // Vitest rules
      ...vitest.configs.recommended.rules,

      // Storybook rules
      ...storybook.configs.recommended.rules,

      // Prettier rules
      ...prettier.rules,

      // Custom rules
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "vitest/consistent-test-it": ["error", { fn: "test" }],
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "object",
            "type",
            "index",
          ],
          "newlines-between": "always",
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: { order: "asc", caseInsensitive: true },
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
          ],
        },
      ],
    },
  },
];
