// One-line office joke for make.fun's "Make the AI Judge Laugh: Office Jokes".
// The grader runs this as `node /bot/main.ts`; it must write exactly one joke,
// a single line under 200 characters, to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I put 'as discussed' in an email about something we never discussed, and three people replied agreeing with me.";

// Gate (RULES.txt): UTF-8 text of 1 to 199 characters, not only white space,
// a single line. Count code points, not UTF-16 units.
const chars = [...joke];
if (chars.length < 1 || chars.length > 199) {
  throw new Error(`joke is ${chars.length} characters, must be 1-199`);
}
if (joke.trim().length === 0) {
  throw new Error("joke must not be only white space");
}
if (/[\r\n]/.test(joke)) {
  throw new Error("joke must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, joke, "utf8");
