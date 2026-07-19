import { useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "light" | "dark" | "system";

interface ThemeState {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
	persist(
		(set) => ({
			theme: "system",
			setTheme: (theme) => set({ theme }),
		}),
		{
			name: "theme-store",
		},
	),
);

/**
 * A hook that returns the theme and setTheme function.
 * Avoids hydration mismatch errors by returning "system" during SSR
 * and initializing to the persisted state only after the component mounts on the client.
 */
export function useTheme() {
	const store = useThemeStore();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return {
		theme: mounted ? store.theme : "system",
		setTheme: store.setTheme,
		mounted,
	};
}

export function useThemeSync() {
	const store = useThemeStore();
	const location = useLocation();

	// biome-ignore lint/correctness/useExhaustiveDependencies: trigger theme color sync on navigation
	useEffect(() => {
		const root = window.document.documentElement;

		const applyTheme = () => {
			const activeTheme = store.theme;
			const isDark =
				activeTheme === "dark" ||
				(activeTheme === "system" &&
					window.matchMedia("(prefers-color-scheme: dark)").matches);

			if (isDark) {
				root.classList.add("dark");
			} else {
				root.classList.remove("dark");
			}

			let metaThemeColor = document.querySelector('meta[name="theme-color"]');
			if (!metaThemeColor) {
				metaThemeColor = document.createElement("meta");
				metaThemeColor.setAttribute("name", "theme-color");
				document.head.appendChild(metaThemeColor);
			}
			metaThemeColor.setAttribute("content", isDark ? "#000000" : "#ffffff");
		};

		applyTheme();

		if (store.theme === "system") {
			const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
			const listener = () => applyTheme();
			mediaQuery.addEventListener("change", listener);
			return () => {
				mediaQuery.removeEventListener("change", listener);
			};
		}
	}, [store.theme, location.pathname]);
}
