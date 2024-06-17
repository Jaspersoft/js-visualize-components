import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.js";
import { JVStylesProvider } from '@jaspersoft/jv-ui-components';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <JVStylesProvider>
      <App title="Visualize Plugins Sandbox"/>
  </JVStylesProvider>
);
