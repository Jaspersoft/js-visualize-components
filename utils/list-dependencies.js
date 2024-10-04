/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

const fs = require("fs");
const path = require("path");
const glob = require("glob");
const { execSync } = require("child_process");

const rootDir = path.resolve(".");
const rootPackageJson = require(path.join(rootDir, "package.json"));
const workspaces = rootPackageJson.workspaces.packages.map((s) =>
  path.resolve(rootDir, s),
);

const getExactVersion = (packageName, dirPackageJsonPath) => {
  const result = execSync(
    `yarn list --depth=0 --pattern "${packageName}" --json`,
    { cwd: dirPackageJsonPath },
  ).toString();
  const parsedResult = JSON.parse(result);
  const prevResult = parsedResult.data.trees
    .filter((s) => s.name.startsWith(packageName))
    .find((s) => {
      const split = s.name.split("@");
      if (split.length > 2) {
        return `${split[0]}@${split[1]}` === packageName;
      }
      return split[0] === packageName;
    });
  const resultSplit = prevResult?.name.split("@");
  const version = resultSplit[resultSplit.length - 1];
  return version || "unknown";
};

const getDependencies = (packageJsonPath) => {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  return packageJson.dependencies || {};
};

const listDependencies = () => {
  const allDependencies = {};

  workspaces.forEach((workspace) => {
    const packageJsonPaths = glob.sync(`${workspace}/package.json`);
    packageJsonPaths.forEach((packageJsonPath) => {
      const dirPath = path.dirname(packageJsonPath);
      const packageName = path.basename(dirPath);
      const dependencies = getDependencies(packageJsonPath);
      allDependencies[packageName] = {};

      Object.entries(dependencies).forEach(([name]) => {
        allDependencies[packageName][name] = getExactVersion(name, dirPath);
      });
    });
  });

  return allDependencies;
};

const printDependencies = (dependencies) => {
  console.log(JSON.stringify(dependencies, null, 2));
};

const dependencies = listDependencies();
printDependencies(dependencies);
