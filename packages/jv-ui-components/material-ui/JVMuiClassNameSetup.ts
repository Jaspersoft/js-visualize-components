import { unstable_ClassNameGenerator as MuiClassNameGenerator } from "@mui/material/className";
MuiClassNameGenerator.configure((componentName: string) => {
  return `jv-${componentName}`;
});
