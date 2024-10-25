import { Config } from "jest";

const conf: Config = {
  verbose: true,
  showSeed: true,
  randomize: true,
  watchPathIgnorePatterns: ["node_modules", "dist", "coverage", "build"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

export default conf;
