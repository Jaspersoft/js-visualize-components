import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import libCss from "vite-plugin-libcss";
import * as packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libCss()],
  build: {
    rollupOptions: {
      external: [
        ...Object.keys(packageJson.dependencies || {}),
        "react/jsx-runtime",
      ],
    },
  },
  resolve: {
    alias: {
      "@jaspersoft/jv-input-controls":
        "../../../node_modules/@jaspersoft/jv-input-controls",
    },
  },
});
