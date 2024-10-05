/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */
import { Config } from "jest";

const conf: Config = {
  verbose: true,
  watchPathIgnorePatterns: ["node_modules", "dist", "coverage", "build"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.([tj]s|[tj]sx)$": "babel-jest",
  },
};

export default conf;
