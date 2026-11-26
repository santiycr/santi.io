import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const copy = readFileSync(join(root, "content/site.ts"), "utf8");

const bannedInCopy = [
  ["em dash", "\u2014"],
  ["en dash", "\u2013"],
  ["WhatsApp", "WhatsApp"],
  ["wa.me", "wa.me"],
  ["Universal Analytics", "UA-151746859"],
];

const failures = [];
for (const [label, needle] of bannedInCopy) {
  if (copy.includes(needle)) failures.push(`content/site.ts contains ${label}`);
}
const self = new URL(import.meta.url).pathname;

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === ".next" || name === ".git") continue;
    const path = join(dir, name);
    if (path === self) continue;
    const stat = statSync(path);
    if (stat.isDirectory()) walk(path, acc);
    else if (/\.(tsx?|jsx?|mjs|css|json|md|svg)$/.test(name)) acc.push(path);
  }
  return acc;
}

const bannedInRepo = ["@material-ui", "next-ga", "react-d3-cloud", "UA-151746859", "wa.me"];
for (const file of walk(root)) {
  const text = readFileSync(file, "utf8");
  for (const needle of bannedInRepo) {
    if (text.includes(needle)) failures.push(`${file} contains ${needle}`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("content check passed");
