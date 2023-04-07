import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/posts": "http://localhost:5000", // THIS IS BACKEND'S URL,  THE FRONTEND'S URL IS FROM -> http://localhost:5173
    },
  },
  plugins: [react()],
});
