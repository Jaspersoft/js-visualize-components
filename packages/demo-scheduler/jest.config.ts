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
