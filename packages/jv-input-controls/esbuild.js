const { build } = require('esbuild');

const isProd = process.env.NODE_ENV === 'production';

const sharedConfig = {
  entryPoints: ["index.ts"],
  bundle: true,
  minify: isProd,
  sourcemap: !isProd,
  format: 'iife',
};

build({
  ...sharedConfig,
  platform: 'browser',
  outfile: 'dist/index.js'
});
