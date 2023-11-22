#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = (command) => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`failed to execute command: ${command}`);
    return false;
  }

  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/DennohKim/starknet-project-starter ${repoName}`;
const installDependenciesCommand = `
  cd ${repoName} && 
  cd client && npm install && cd .. &&
  cd starknet_forge && snforge test
`;

console.log(`Cloning starknet project starter kit into ${repoName}...`);

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) {
  process.exit(-1);
}

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDependenciesCommand);
if (!installedDeps) {
  process.exit(-1);
}

console.log(
  `Congratulations! You are ready to build dapps on starknet! 🦛 💻 . Follow the following command to get started`
);

console.log(`cd ${repoName} && cd client && npm run dev`);
