/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

import { existsSync, mkdirSync, readdirSync, lstatSync, copyFileSync } from 'fs';
import { join } from 'path';

export const copyFile = ({ target = '', source = '' }) => {
  try {
    copyFileSync(source, target);
  } catch (e) {
    console.error('Error copying file: ', e);
  }
};

const copyFolder = (source, target) => {
  if (!existsSync(target)) {
    mkdirSync(target, { recursive: true });
  }

  readdirSync(source)
    .forEach((element) => {
      const sourcePath = join(source, element);
      const targetPath = join(target, element);

      if (lstatSync(sourcePath).isFile()) {
        copyFileSync(sourcePath, targetPath);
      } else {
        copyFolder(sourcePath, targetPath);
      }
    });
};

export default copyFolder;