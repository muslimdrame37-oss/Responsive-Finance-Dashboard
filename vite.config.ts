import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  server: {
    port: 5173,
    strictPort: true, // fait échouer le démarrage si le port est pris, au lieu de changer de port
  },
  plugins: [react(), tailwindcss()],
})
