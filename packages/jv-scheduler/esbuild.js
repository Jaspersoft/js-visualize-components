const { build } = require("esbuild");
const npmDts = require("npm-dts");
const packageJson = require("./package.json");

const { dependencies } = packageJson;
const { Generator } = npmDts;

new Generator({
  entry: "src/index.ts",
  output: "dist/index.d.ts",
})
  .generate()
  .catch(console.error);

const isProd = process.env.NODE_ENV === "production";

const sharedConfig = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: isProd,
  sourcemap: !isProd,
  format: "esm",
  tsconfig: "tsconfig.json",
  target: "es6",
  external: Object.keys(dependencies),
};

build({
  ...sharedConfig,
  platform: "browser",
  outfile: "dist/index.js",
}).catch(console.error);

build({
  ...sharedConfig,
  outfile: "dist/index.esm.js",
  platform: "browser",
  format: "esm", // for ESM
}).catch(console.error);
