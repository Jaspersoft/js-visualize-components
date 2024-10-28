/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import fs from "fs";
import path from "path";

const copyJVClassNameSetup = (source, target, fileName) => {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }
  const targetPath = path.join(target, fileName);
  fs.copyFileSync(source, targetPath);
};

copyJVClassNameSetup(
  path.resolve(
    path.join(process.cwd(), "material-ui", "JVMuiClassNameSetup.ts"),
  ),
  path.resolve(path.join(process.cwd(), "dist", "material-ui")),
  "JVMuiClassNameSetup.ts",
);

copyJVClassNameSetup(
  path.resolve(
    path.join(process.cwd(), "material-ui", "JVMuiClassNameSetup-js.js"),
  ),
  path.resolve(path.join(process.cwd(), "dist", "material-ui")),
  "JVMuiClassNameSetup-js.js",
);
