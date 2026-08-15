import { TanStackDevtools } from "@tanstack/react-devtools";
import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { inject } from "@vercel/analytics";
import { IntlayerProvider } from "react-intlayer";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { NoiseTexture } from "../components/ui/noise-texture";
import { SmoothCursor } from "../components/ui/smooth-cursor";
import appCss from "../globals.css?url";
import { useThemeSync } from "../lib/theme-store";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "His Word",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
		scripts: [
			{
				children: `
					try {
						const themeStoreStr = localStorage.getItem("theme-store");
						const theme = themeStoreStr 
							? JSON.parse(themeStoreStr).state?.theme 
							: "dark";
						if (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
							document.documentElement.classList.add("dark");
						} else {
							document.documentElement.classList.remove("dark");
						}
					} catch (e) {}
				`,
			},
		],
	}),
	component: RootLayout,
	shellComponent: RootDocument,
});

// Initialize Vercel Analytics
inject();

function RootLayout() {
	useThemeSync();

	return (
		<IntlayerProvider>
			<div className="relative flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
				<NoiseTexture className="fixed inset-0 pointer-events-none z-50 opacity-20 dark:opacity-35" />
				<SmoothCursor />
				<Header />
				<main className="grow -mt-10">
					<Outlet />
				</main>
				<Footer />
				<BackToTop />
			</div>
		</IntlayerProvider>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="dark">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
