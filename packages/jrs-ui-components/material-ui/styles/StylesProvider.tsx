import * as React from 'react';
import {
    ThemeProvider as MuiThemeProvider,
    StyledEngineProvider,
    createTheme,
} from '@mui/material/styles';
import { DefaultTheme } from '@mui/system'
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';

export interface ThemeProviderProps<Theme = DefaultTheme> {
    children?: React.ReactNode;
    theme: Partial<Theme> | ((outerTheme: Theme) => Theme);
}
export type CreateStylesProviderType = {
    children: React.ReactNode
}
export const GenerateClassNameOptions = {
    seed: 'jv'
};

export const CreateMuiThemeOptions = {};

ClassNameGenerator.configure((componentName: string) => {
    return `jv-${componentName}`
});
const muiTheme = createTheme(CreateMuiThemeOptions);

export function createStylesProvider<Theme = DefaultTheme>(
    theme: ThemeProviderProps<Theme>['theme'],
    ThemeProvider: React.ComponentType<ThemeProviderProps<Theme>> = MuiThemeProvider
): React.FC<CreateStylesProviderType> {
    return ({ children }) => (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

const StylesProvider = createStylesProvider(muiTheme);

export { StylesProvider };