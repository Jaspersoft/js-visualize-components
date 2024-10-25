import react from "@vitejs/plugin-react";
import { join, resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.json"),
    }),
  ],
  root: join(__dirname),
  build: {
    outDir: "dist/material-ui",
    sourcemap: true,
    minify: true,
    lib: {
      entry: {
        main: resolve(__dirname, "material-ui/index.ts"),
        setup: resolve(__dirname, "material-ui/JVMuiClassNameSetup.ts"),
      },
      name: "@jaspersoft/jv-ui-components",
      fileName: (format, entryName) => {
        if (entryName === "setup") {
          return `JVMuiClassNameSetup.${format}.js`;
        }
        return `index.${format}.js`;
      },
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      output: {
        globals: {
          "@mui/system": "MuiSystem",
        },
      },
    },
    copyPublicDir: false,
  },
});
