import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import libCss from "vite-plugin-libcss";
import { join, resolve } from "path";

// @ts-ignore
import packageJson from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.json"),
    }),
    libCss(),
  ],
  root: join(__dirname),
  build: {
    outDir: "dist",
    sourcemap: true,
    minify: true,
    lib: {
      entry: resolve(`${__dirname}/src`, "index.ts"),
      name: "@jaspersoft/jv-scheduler",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.dependencies || {})],
    },
  },
});
