const { build } = require('esbuild');

const isProd = process.env.NODE_ENV === 'production';

const sharedConfig = {
  entryPoints: [ 'src/index.js' ],
  bundle: true,
  minify: isProd,
  sourcemap: !isProd,
  target: 'es2015',
};

build({
  ...sharedConfig,
  platform: 'browser',
  outfile: 'dist/bundle.js'
});