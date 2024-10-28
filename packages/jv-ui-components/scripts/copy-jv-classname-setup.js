/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import fs from "fs";
import path from "path";

const FILE_NAME = "JVMuiClassNameSetup.ts";

const copyJVClassNameSetup = (source, target) => {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }
  const targetPath = path.join(target, FILE_NAME);
  fs.copyFileSync(source, targetPath);
};

copyJVClassNameSetup(
  path.resolve(path.join(process.cwd(), "material-ui", FILE_NAME)),
  path.resolve(path.join(process.cwd(), "dist", "material-ui")),
);
