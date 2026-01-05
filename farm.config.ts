import { defineConfig } from "@farmfe/core";
import preact from "@preact/preset-vite";
import farmPostcssPlugin from "@farmfe/js-plugin-postcss";

import path from "path";

export default defineConfig({
	plugins: [farmPostcssPlugin()],
	vitePlugins: [preact()],
	server: {
		port: 5173,
	},
	compilation: {
		external: ["node:fs"],
		resolve: {
			alias: {
				"~/": path.join(process.cwd(), "src/"),
			},
		},
	},
});
