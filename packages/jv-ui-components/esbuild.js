import { build } from 'esbuild';
import npmDts from 'npm-dts';
import packageJson from './package.json' assert { type: 'json' };

const { dependencies } = packageJson;
const { Generator } = npmDts;

new Generator({
  entry: 'material-ui/index.ts',
  output: 'dist/material-ui/index.d.ts'
}).generate();

const isProd = process.env.NODE_ENV === 'production';

const sharedConfig = {
  entryPoints: [ 'material-ui/index.ts' ],
  bundle: true,
  minify: isProd,
  tsconfig: 'tsconfig.json',
  sourcemap: !isProd,
  external: Object.keys(dependencies)
};

build({
  ...sharedConfig,
  platform: 'browser',
  outfile: 'dist/material-ui/index.js'
});

build({
  ...sharedConfig,
  outfile: 'dist/material-ui/index.esm.js',
  platform: 'browser',
  format: 'esm'// for ESM
});
