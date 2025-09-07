import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"   // ✅ use this

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
