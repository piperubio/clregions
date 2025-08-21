AGENTS guide for clregions

Build/lint/test
- Monorepo uses pnpm. Install: pnpm i
- Core package build: pnpm -w -F @clregions/core build
- Data package build: pnpm -w -F @clregions/data build
- Lint/typecheck core: pnpm -F @clregions/core lint (tsc)
- Lint/typecheck data: pnpm -F @clregions/data lint (tsc)
- Format (Biome): pnpm biome format --write .
- Check (Biome): pnpm biome check .
- Core tests (Vitest): pnpm -F @clregions/core test
- Run a single test: pnpm -F @clregions/core vitest run packages/core/test/index.test.ts -t "name or pattern"
- Coverage: pnpm -F @clregions/core test:coverage

Code style
- Language: TypeScript (ESM). Node >=18. Use "type": "module" semantics in packages; default export/import.
- Imports: absolute within package root; prefer explicit subpath exports defined in package exports; no deep imports into src of other package.
- Formatting: Biome 1.9.x with ultracite preset. Run biome check/format; do not hand-tune.
- Types: strict TS; prefer explicit return types for public APIs; avoid any; use readonly where possible; narrow with predicates and in-guards.
- Naming: camelCase for vars/functions, PascalCase for types/classes, CONSTANT_CASE for const enums; file names kebab-case or lowerCamel consistent with existing files (keep .ts).
- Errors: throw Error with clear message; avoid throwing strings; return Result-like unions only for internal helpers; surface errors rather than swallowing.
- Testing: Vitest 3; colocate tests under packages/*/test; use describe/it; prefer toEqual for data; keep deterministic.
- Commits/CI: use changesets; pnpm -F <pkg> ci runs format+check+lint+build+exports.

Misc
- No Cursor or Copilot rule files present.
- Data package also includes Python assets; Biome ignores .py/.ipynb. Do not modify generated dist; source in ts/ and scripts.
