/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

// create a script that copies a folder to another location

import * as fs from 'node:fs';
import * as path from 'node:path';

const copyFolder = (source, target) => {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
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

// check if param 'dev' is provided when running the script
if (process.argv[2] === 'dev') {
  // copy the styles folder to the dist folder of test-app
  // source = js-visualize-plugins/packages/jv-ui-components/dist/styles
  // target = js-visualize-plugins/packages/test-app/dist/jasper-ui.css
  const sourcePath = path.resolve(process.cwd(), 'dist');
  const targetPath = path.resolve(process.cwd(), '../test-app/dist');
  copyFolder(
    path.resolve(sourcePath, 'styles'),
    targetPath
  );
  fs.copyFileSync(
    path.resolve(sourcePath, 'jasper-ui.css'),
    path.resolve(targetPath, 'jasper-ui.css')
  );
} else {
  // These are the following paths to use:
  // src = js-visualize-plugins/packages/jv-ui-components/styles
  // target = js-visualize-plugins/packages/jv-ui-components/dist/styles
  copyFolder(
    path.resolve(process.cwd(), 'styles'),
    path.resolve(process.cwd(), 'dist/styles')
  );
}
