import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["ts/object/index.ts", "ts/array/index.ts"],
  format: ["esm"],
  dts: true,
  outDir: "dist",
  sourcemap: true,
  clean: true,
});
