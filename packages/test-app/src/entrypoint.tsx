import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.js";
import { StylesProvider } from 'jrs-ui-components';


ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
  <StylesProvider>
      <App title="My Testing Application!"/>
  </StylesProvider>
//   </React.StrictMode>
);
