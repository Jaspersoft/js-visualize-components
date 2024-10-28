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
      name: "@jaspersoft/jv-ui-components",
      entry: resolve(__dirname, "material-ui/index.ts"),
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
    copyPublicDir: false,
  },
});
