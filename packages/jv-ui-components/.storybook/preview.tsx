import "./styles/storybook-jv-ui.scss";
import "@jaspersoft/jv-ui-components/material-ui/JVMuiClassNameSetup";
import { JVStylesProvider } from "@jaspersoft/jv-ui-components";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import type { Preview } from "@storybook/react";
// import {
//   CreateMuiThemeOptions,
//   createStylesProvider,
// } from "../material-ui/styles/StylesProvider";
//
// const muiTheme = createTheme(CreateMuiThemeOptions);
// const StylesProvider = createStylesProvider(muiTheme, ThemeProvider);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
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
    //     <MuiStyledEngineProvider injectFirst>
    //       <JVStylesProvider>
    //         <Emotion10ThemeProvider theme={muiTheme}>
    //           <StylesProvider>
    //             <Story key={key} {...params} />
    //           </StylesProvider>
    //         </Emotion10ThemeProvider>
    //       </JVStylesProvider>
    //     </MuiStyledEngineProvider>
    //   );
    // },
  ],
};

export default preview;
