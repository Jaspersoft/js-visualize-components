import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { JVStylesProvider } from '@jaspersoft/jv-ui-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
      <JVStylesProvider>
          <App />
      </JVStylesProvider>
);

