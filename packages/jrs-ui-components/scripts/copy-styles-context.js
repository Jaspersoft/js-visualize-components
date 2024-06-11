/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

// create a script that copies a folder to another location
const fs = require('fs');
const path = require('path');

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
  // source = js-visualize-plugins/packages/jrs-ui-components/dist/styles
  // target = js-visualize-plugins/packages/test-app/dist/jasper-ui.css
  copyFolder(
    path.resolve(__dirname, '../dist'),
    path.resolve(__dirname, '../../test-app/dist')
  );
} else {
  // These are the following paths to use:
  // src = js-visualize-plugins/packages/jrs-ui-components/styles
  // target = js-visualize-plugins/packages/jrs-ui-components/dist/styles
  copyFolder(
    path.resolve(__dirname, '../styles'),
    path.resolve(__dirname, '../dist/styles')
  );
}
