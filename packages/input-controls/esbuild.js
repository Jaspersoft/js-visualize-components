const { build } = require("esbuild");

const isProd = process.env.NODE_ENV === 'production';

const sharedConfig = {
  entryPoints: ["index.ts"],
  bundle: true,
  minify: isProd,
  sourcemap: !isProd,
  format: 'esm',
};

build({
  ...sharedConfig,
  platform: 'node',
  outfile: "dist/index.js",
});