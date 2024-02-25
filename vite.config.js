import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: {
          protocol: "http",
          host: "localhost",
          port: 5000,
        },
        credentials: true,
        changeOrigin: true,
      },
    },
  },
});
