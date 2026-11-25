import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "We spent 45 minutes in a meeting deciding the email would have taken 45 seconds — then scheduled a follow-up meeting to confirm our decision.";

// Gate assert: 1-200 chars, single line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200) throw new Error("entry length out of gate: " + ENTRY.length);
if (ENTRY.includes("\n") || ENTRY.trim().length === 0) throw new Error("entry must be one non-blank line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
