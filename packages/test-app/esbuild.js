const { build } = require('esbuild');
const { resolve } = require('path');
const { copyFolder, copyFile } = require('./scripts/copy-styles-context.js');

const isProd = process.env.NODE_ENV === 'production';

const copyStylesFromJrsUiComponents = ({ target = '' }) => {
  const basePath = resolve(process.cwd(), '..', 'jv-ui-components', 'dist');
  const sourceStylesFolder = resolve(basePath, 'styles');
  const targetStylesFolder = resolve(target, 'styles');
  copyFolder(sourceStylesFolder, targetStylesFolder);
  console.info('styles folder has been copied.');

  const CSS_FILE_NAME = 'jv-ui.css';
  const cssFile = resolve(basePath, CSS_FILE_NAME);
  copyFile({ target: resolve(target, CSS_FILE_NAME), source: cssFile });
  console.info('CSS file has been copied.');
};

const copyPublicToDist = ({ target = '' }) => {
  const source = resolve(process.cwd(), 'public');
  copyFolder(source, target);
  console.info('public folder has been copied.');
};

const sharedConfig = {
  entryPoints: [ 'src/entrypoint.tsx' ],
  bundle: true,
  minify: isProd,
  sourcemap: !isProd,
  format: 'iife'
};

build({
  ...sharedConfig,
  platform: 'browser',
  outfile: 'dist/bundle.js'
})
  .then(() => {
    console.info('Build succeeded. About to copy public folder and styles from jv-ui-components.');
    const distFolder = resolve(process.cwd(), 'dist');
    copyPublicToDist({ target: distFolder });
    copyStylesFromJrsUiComponents({ target: distFolder });
  })
  .catch((error) => console.error('Build failed: ', error));