const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

// 1. Locate project and monorepo workspace roots
const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// 2. Watch all monorepo directories so Metro can resolve local shared workspace packages
config.watchFolders = [monorepoRoot];

// 3. Resolve node_modules from customer-app first, then monorepo root
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

module.exports = config;

