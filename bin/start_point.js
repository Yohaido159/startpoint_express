#!/usr/bin/env node

const execSync = require('child_process').execSync;
const fs = require('fs');
const path = require('path');

const repo = 'https://github.com/username/startpoint-express.git';
const destination = process.argv[2] || 'my-app';

console.log(`Downloading repository from ${repo}...`);
execSync(`git clone ${repo} ${destination}`);


