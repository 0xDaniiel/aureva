import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::", // allow access on all network interfaces
    port: 8080, // dev server port
    hmr: {
      overlay: false, // hide HMR error overlay in browser
    },
  },
  plugins: [
    react(), // React plugin for Vite
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // path alias for imports
    },
  },
});
