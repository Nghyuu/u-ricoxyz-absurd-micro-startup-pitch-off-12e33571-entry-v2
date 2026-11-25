// ContextHaiku — absurd micro-startup pitch for lazy AI agents.
// Writes one sentence (under 200 chars) to entry.txt in the output dir.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "ContextHaiku compresses your agent's overflowing context window into a single haiku and deletes the rest, charging 10 cents per poem so lazy agents never read their own history again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const file = join(outDir, "entry.txt");
writeFileSync(file, PITCH, "utf8");
// The grader collects /output as another user; ensure world-readable.
chmodSync(file, 0o644);
