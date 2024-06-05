const { build } = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass');

const isProd = process.env.NODE_ENV === 'production';

const sharedConfig = {
  entryPoints: [ 'styles/styles.ts' ],
  bundle: true,
  minify: isProd,
  sourcemap: !isProd,
  format: 'esm'
};

build({
  ...sharedConfig,
  platform: 'node',
  outfile: isProd ? 'dist/bundle.js' : 'public/bundle.js',
  plugins: [ sassPlugin() ],
  loader: {
    '.png': 'dataurl',
    '.jpg': 'dataurl',
    '.woff': 'dataurl',
    '.woff2': 'dataurl',
    '.eot': 'dataurl',
    '.ttf': 'dataurl',
    '.svg': 'dataurl',
    '.gif': 'dataurl'
  }
}).catch(err => console.error(err));