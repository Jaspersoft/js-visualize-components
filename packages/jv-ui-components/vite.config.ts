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
      entry: resolve(__dirname, "material-ui/index.ts"),
      name: "@jaspersoft/jv-ui-components",
      fileName: (format) => `index.${format}.js`,
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
