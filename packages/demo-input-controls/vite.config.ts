/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import libCss from "vite-plugin-libcss";
import { dependencies } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libCss()],
  build: {
    rollupOptions: {
      external: [...Object.keys(dependencies || {}), "react/jsx-runtime"],
    },
  },
  server: {
    port: 8000,
  },
});
