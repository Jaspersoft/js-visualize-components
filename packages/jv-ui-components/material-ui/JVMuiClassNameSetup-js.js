/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */
import { unstable_ClassNameGenerator as MuiClassNameGenerator } from "@mui/material/className";

MuiClassNameGenerator.configure((componentName) => {
  return `jv-${componentName}`;
});
