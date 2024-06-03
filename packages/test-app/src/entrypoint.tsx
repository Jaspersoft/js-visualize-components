import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { StylesProvider } from 'jrs-ui-components/material-ui/styles/StylesProvider';

ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
  <StylesProvider>
      <App title="My Testing Application!"/>
  </StylesProvider>
//   </React.StrictMode>
);
