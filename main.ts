// Roast Your Fridge — one original one-line roast, written to entry.txt.
// Deterministic by design: the same single line is written on every run,
// with no trailing newline, so repeated runs produce byte-identical output.
// The roast targets one specific, recognisable detail (the door-open beep)
// and pays off with a twist in the last few words.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My fridge beeps if its door stays open five seconds, as if the cold air were sneaking off to a better kitchen.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
