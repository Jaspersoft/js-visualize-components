/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

// create a script that copies a folder to another location
const fs = require('fs');
const path = require('path');

const prepareContainingFolder = (src = 'dist') => {
  if (!fs.existsSync(src)) {
    fs.mkdirSync(src);
  } else {
    fs.rmdirSync(src, { recursive: true });
  }
};

const copyFolder = (source, target) => {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }

  fs.readdirSync(source)
    .forEach((element) => {
      const sourcePath = path.join(source, element);
      const targetPath = path.join(target, element);

      if (fs.lstatSync(sourcePath).isFile()) {
        fs.copyFileSync(sourcePath, targetPath);
      } else {
        copyFolder(sourcePath, targetPath);
      }
    });
};

prepareContainingFolder('dist');
copyFolder(
  path.resolve(__dirname, '../styles'),
  path.resolve(__dirname, '../dist/styles')
);