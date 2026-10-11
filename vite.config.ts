import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import { intlayer } from "vite-intlayer";

const config = defineConfig({
	resolve: { tsconfigPaths: true },
	define: {
		__dirname: '""',
	},
	plugins: [
		intlayer(),
		devtools(),
		nitro({
			preset: process.env.NITRO_PRESET || "cloudflare-module",
			rollupConfig: { external: [/^@sentry\//, /^cloudflare:/] },
			modules: [
				(nitro) => {
					nitro.hooks.hook("build:before", (nitro) => {
						for (const h of [
							...(nitro.options.handlers || []),
							...(nitro.scannedHandlers || []),
						]) {
							if (typeof h.handler === "string") {
								h.handler = h.handler.replace(/\\/g, "/");
							}
						}
					});
				},
			],
		}),
		tailwindcss(),
		tanstackStart(),
		viteReact(),
	],
});

export default config;
