#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

function printUsageAndExit(exitCode = 1) {
  const msg = [
    'Usage:',
    '  node scripts/render_resume.mjs <path/to/resume.md>',
    '',
    'Environment variables:',
    '  MD_TO_PDF_NO_SANDBOX=1   Force Chromium --no-sandbox (useful in containers)',
    '',
    'Notes:',
    '  - Always injects resume.css for consistent formatting.',
    '  - Runs md-to-pdf via npx, so Node.js must be installed.',
  ].join('\n');
  console.error(msg);
  process.exit(exitCode);
}

const inputArg = process.argv[2];
if (!inputArg || inputArg === '-h' || inputArg === '--help') {
  printUsageAndExit(inputArg ? 0 : 1);
}

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');

const inputPath = path.isAbsolute(inputArg)
  ? inputArg
  : path.resolve(process.cwd(), inputArg);

if (!fs.existsSync(inputPath)) {
  console.error(`ERROR: Input file not found: ${inputPath}`);
  process.exit(2);
}

const cssPath = path.join(repoRoot, 'resume.css');
if (!fs.existsSync(cssPath)) {
  console.error(`ERROR: resume.css not found at repo root: ${cssPath}`);
  process.exit(3);
}

const isLinux = process.platform === 'linux';
const isContainerLike = isLinux && (fs.existsSync('/.dockerenv') || process.env.CODESPACES === 'true' || process.env.REMOTE_CONTAINERS === 'true');
const isRoot = typeof process.getuid === 'function' && process.getuid() === 0;

const wantsNoSandbox =
  process.env.MD_TO_PDF_NO_SANDBOX === '1' ||
  (isLinux && (isContainerLike || isRoot));

const npxCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';

const args = [
  '--yes',
  'md-to-pdf',
  '--basedir',
  repoRoot,
  '--stylesheet',
  cssPath,
];

if (wantsNoSandbox) {
  const launchOptions = {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  };
  args.push('--launch-options', JSON.stringify(launchOptions));
}

args.push(inputPath);

const result = spawnSync(npxCmd, args, {
  cwd: repoRoot,
  stdio: 'inherit',
  windowsHide: true,
});

if (result.error) {
  console.error(`ERROR: Failed to run ${npxCmd}: ${result.error.message}`);
  process.exit(4);
}

process.exit(result.status ?? 0);