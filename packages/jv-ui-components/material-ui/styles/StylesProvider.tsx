import {
  createTheme as MuiCreateTheme,
  StyledEngineProvider as MuiStyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { DefaultTheme as MuiDefaultTheme } from "@mui/system";
import { ComponentType, FC, ReactNode } from "react";

interface ThemeProviderProps<Theme = MuiDefaultTheme> {
  children?: ReactNode;
  theme: Partial<Theme> | ((outerTheme: Theme) => Theme);
}

type CreateStylesProviderType = {
  children: ReactNode;
};
const GenerateClassNameOptions = {
  seed: "jv",
};

const CreateMuiThemeOptions = {};
const muiTheme = MuiCreateTheme(CreateMuiThemeOptions);

function createStylesProvider<Theme = MuiDefaultTheme>(
  theme: ThemeProviderProps<Theme>["theme"],
  ThemeProvider: ComponentType<ThemeProviderProps<Theme>> = MuiThemeProvider,
): FC<CreateStylesProviderType> {
  return ({ children }) => (
    <MuiStyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MuiStyledEngineProvider>
  );
}

const StylesProvider = createStylesProvider(muiTheme);

export type { ThemeProviderProps, CreateStylesProviderType };

export {
  GenerateClassNameOptions,
  CreateMuiThemeOptions,
  createStylesProvider,
  StylesProvider,
};
