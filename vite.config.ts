import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import svgr from "vite-plugin-svgr";
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
});
