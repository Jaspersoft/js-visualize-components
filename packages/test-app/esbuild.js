import { build } from 'esbuild';
import { resolve } from 'path';
import copyFolder from './scripts/copy-styles-context.js';

const isProd = process.env.NODE_ENV === 'production';

const copyStylesFromJrsUiComponents = ({ target = '' }) => {
  const source = resolve(process.cwd(), '..', 'jrs-ui-components', 'dist');
  copyFolder(source, target);
  console.info('styles folder has been copied.');
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
  format: 'esm'
};

build({
  ...sharedConfig,
  platform: 'browser',
  outfile: 'dist/bundle.js'
})
  .then(() => {
    console.info('Build succeeded. About to copy public folder and styles from jrs-ui-components.');
    const distFolder = resolve(process.cwd(), 'dist');
    copyPublicToDist({ target: distFolder });
    copyStylesFromJrsUiComponents({ target: distFolder });
  })
  .catch((error) => console.error('Build failed: ', error));

