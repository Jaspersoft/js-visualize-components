import "@jaspersoft/jv-ui-components/material-ui/JVMuiClassNameSetup";
import "./styles/storybook-jv-ui.scss";
import { JVStylesProvider } from "@jaspersoft/jv-ui-components";
import type { Preview } from "@storybook/react";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import {
//   CreateMuiThemeOptions,
//   createStylesProvider,
// } from "../material-ui/styles/StylesProvider";
// import { ThemeProvider as Emotion10ThemeProvider } from '@emotion/react';
// import StyledEngineProvider from '@mui/material/StyledEngineProvider';
// const muiTheme = createTheme(CreateMuiThemeOptions);
// const StylesProvider = createStylesProvider(muiTheme, ThemeProvider);

const preview: Preview = {
  // parameters: {
  //   controls: {
  //     matchers: {
  //       color: /(background|color)$/i,
  //       date: /Date$/i,
  //     },
  //   },
  // },
  decorators: [
    (Story, context) => {
      const { key, ...params } = context;
      return (
        <JVStylesProvider>
          <Story key={key} {...params} />
        </JVStylesProvider>
      );
    },
    // (Story, context) => {
    //   const { key, ...params } = context;
    //   return (
    //     <StyledEngineProvider injectFirst>
    //       <JVStylesProvider>
    //         <Emotion10ThemeProvider theme={muiTheme}>
    //           <StylesProvider>
    //             styles provided
    //             <hr/>
    //             <Story key={key} {...params} />
    //           </StylesProvider>
    //         </Emotion10ThemeProvider>
    //       </JVStylesProvider>
    //     </StyledEngineProvider>
    //   );
    // }
  ],
};

export default preview;
