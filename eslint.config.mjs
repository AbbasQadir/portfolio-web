import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

// `next/typescript` is not used here: routed through FlatCompat it resolves
// @typescript-eslint v8 via its legacy entry point and fails with
// "couldn't find the config ./configs/base". typescript-eslint's own flat
// config gives the same rules without the shim.
const eslintConfig = [
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
  ...compat.extends("next/core-web-vitals"),
  ...tseslint.configs.recommended,
];

export default eslintConfig;
