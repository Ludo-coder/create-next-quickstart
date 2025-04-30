#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const projectName = process.argv[2];

if (!projectName) {
  console.error("❌ Please provide a project name");
  console.error("   npx create-next-quickstart my-project");
  process.exit(1);
}

console.log(`🚀 Creating a new Next.js project in ${projectName}`);

execSync(`git clone https://github.com/Ludo-coder/next-start ${projectName}`, {
  stdio: "inherit",
});

const projectPath = path.join(process.cwd(), projectName);

fs.rmSync(path.join(projectPath, ".git"), { recursive: true, force: true });

console.log("✅ Done!");
console.log(`👉 cd ${projectName}`);
