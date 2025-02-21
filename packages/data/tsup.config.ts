import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'ts/object/index.ts',
    'ts/array/index.ts',
    'ts/array/regions.ts',
    'ts/array/provinces.ts',
    'ts/array/communes.ts',
  ],
  format: ['esm', 'cjs'],
  dts: true,
  outDir: 'dist',
  clean: true,
});
