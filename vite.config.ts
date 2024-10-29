import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import deno from "@deno/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), deno()],
  assetsInclude: ["**/*.jpg", "**/*.png", "**/*.gif"],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
});
