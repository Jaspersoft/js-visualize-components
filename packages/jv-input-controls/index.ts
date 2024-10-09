/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */
// This line is necessary to setting up the styles
// refer to: https://v5.mui.com/material-ui/experimental-api/classname-generator/
import "@jaspersoft/jv-ui-components/material-ui/JVMuiClassNameSetup";
import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
import "./src/i18n";

// the JavaScript approach:
export { renderInputControls } from "./src/methods";

// The React Approach:
export { InputControls } from "./src/InputControls";

// types
export type { InputControlsConfig } from "./src/InputControls";
