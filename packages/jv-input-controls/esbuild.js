import { build } from 'esbuild';
import npmDts from 'npm-dts';
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
  tsconfig: 'tsconfig.json',
  sourcemap: !isProd,
  external: Object.keys(dependencies)
};

build({
  ...sharedConfig,
  platform: 'browser',
  outfile: 'dist/index.js'
});

build({
  ...sharedConfig,
  outfile: 'dist/index.esm.js',
  platform: 'browser',
  format: 'esm'// for ESM
});
