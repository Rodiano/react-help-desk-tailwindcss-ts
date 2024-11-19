import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), viteTsconfigPaths()],
	css: {
		preprocessorOptions: {
			scss: {
				api: "modern-compiler",
			},
		},
	},
	build: {
		lib: {
			entry: path.resolve("src/index.tsx"),
			name: "react-help-desk-tailwindcss-ts",
			fileName: (format) => `react-help-desk-tailwindcss-ts.${format}.ts`,
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
				},
			},
		},
	},
});
