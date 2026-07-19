import { TanStackDevtools } from "@tanstack/react-devtools";
import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { inject } from "@vercel/analytics";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useThemeSync } from "../lib/theme-store";
import appCss from "../styles.css?url";

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
							? JSON.parse(themeStoreStr).state.theme 
							: "system";
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
		<div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
			<Header />
			<main className="grow">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
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
