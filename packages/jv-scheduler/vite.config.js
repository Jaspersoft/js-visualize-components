import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import libCss from "vite-plugin-libcss";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src/**/*.ts+(|x)", "**/*.mts"],
      outputDir: "dist",
      staticImport: true,
    }),
    libCss(),
  ],
  build: {
    sourcemap: true,
    outDir: "dist",
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      external: ["react", "react-dom", "i18next-http-backend", "moment"],
    },
  },
});
