const { build } = require("esbuild");
const { dependencies } = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';

const sharedConfig = {
  entryPoints: ["src/entrypoint.tsx"],
  bundle: true,
  minify: isProd,
  sourcemap: !isProd,
  format: 'esm',
};

build({
  ...sharedConfig,
  platform: 'node',
  outfile: "dist/bundle.js",
});