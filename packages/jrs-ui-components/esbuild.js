import { build } from 'esbuild';

const isProd = process.env.NODE_ENV === 'production';

const sharedConfig = {
  entryPoints: [ 'material-ui/index.ts' ],
  bundle: true,
  minify: isProd,
  sourcemap: !isProd,
  format: 'esm'
};

await build({
  ...sharedConfig,
  platform: 'browser',
  tsconfig: 'tsconfig.json',
  outfile: 'dist/index.js'
})
  .catch((error) => console.error('Build failed: ', error));
