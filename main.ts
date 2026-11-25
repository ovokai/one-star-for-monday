import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Booked 9 a.m., seated 9:45. Cold coffee, sighing waiter, gray ambience. The 'fresh start' special? Last week's leftovers. One star.";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry + "\n", "utf8");
} catch {
  writeFileSync("entry.txt", entry + "\n", "utf8");
}

console.log(entry);
