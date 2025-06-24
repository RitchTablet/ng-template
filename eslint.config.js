import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.eslint.json"],
        sourceType: "module",
        ecmaVersion: 2022,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      prettier,
      "unused-imports": unusedImports,
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-console": "error",
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "no-var": "error",
      "no-magic-numbers": ["warn", { ignore: [0, 1], ignoreArrayIndexes: true }],
      "no-debugger": "error",
      "no-empty-function": "error",
    },
  },
  {
    ignores: ["dist/", "node_modules/"],
  },
];
