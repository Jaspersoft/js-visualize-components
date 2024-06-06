import React, { FC, ComponentType } from 'react';
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
    seed: 'jr'
};

export const CreateMuiThemeOptions = {};

ClassNameGenerator.configure((componentName: string) => {
    return `jv-${componentName}`
});
const muiTheme = createTheme(CreateMuiThemeOptions);

export function createStylesProvider<Theme = DefaultTheme>(
    theme: ThemeProviderProps<Theme>['theme'],
    ThemeProvider: ComponentType<ThemeProviderProps<Theme>> = MuiThemeProvider
): FC<CreateStylesProviderType> {
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