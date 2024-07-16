import { JVStylesProvider } from "@jaspersoft/jv-ui-components";
import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";

createRoot(document.getElementById("root")!).render(
  <JVStylesProvider>
    <App title="Visualize Plugins Sandbox" />
  </JVStylesProvider>,
);
