import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1", // Use IPv4 instead of the default ::1 (IPv6)
    port: 3000, // Change the port to avoid conflicts (default is 5173)
  },
});
