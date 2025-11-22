import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react(), tailwindcss(), svgr()],
	test: {
		environment: "jsdom",
		setupFiles: "./src/setupTests.ts",
		globals: true,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
});
