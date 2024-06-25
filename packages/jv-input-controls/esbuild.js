const { build } = require('esbuild');
const npmDts = require('npm-dts');
import packageJson from './package.json' assert { type: 'json' };

const { dependencies } = packageJson;
const { Generator } = npmDts;

new Generator({
  entry: 'index.ts',
  output: 'dist/index.d.ts'
}).generate();
const isProd = process.env.NODE_ENV === 'production';

const sharedConfig = {
  entryPoints: [ 'index.ts' ],
  bundle: true,
  minify: isProd,
  sourcemap: !isProd,
  format: 'esm',
  tsconfig: 'tsconfig.json',
  target: 'es6',
  external: Object.keys(dependencies)
};

build({
  ...sharedConfig,
  platform: 'browser',
  outfile: 'dist/index.js'
}).catch(console.error);

build({
  ...sharedConfig,
  outfile: 'dist/index.esm.js',
  platform: 'browser',
  format: 'esm'// for ESM
}).catch(console.error);

