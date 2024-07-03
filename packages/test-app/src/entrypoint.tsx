import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.js";
import { JVDatePickerProvider, JVStylesProvider } from '@jaspersoft/jv-ui-components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <JVStylesProvider>
      <JVDatePickerProvider>
          <App title="Visualize Plugins Sandbox"/>
      </JVDatePickerProvider>
  </JVStylesProvider>
);
