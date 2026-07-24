import {
	Cancel01Icon,
	Comment01Icon,
	ComputerIcon,
	Globe02Icon,
	Moon01Icon,
	Store01Icon,
	Sun01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link as RouterLink, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useIntlayer, useLocale } from "react-intlayer";
import { type Theme, useTheme } from "#/lib/theme-store";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
	const location = useLocation();
	const { theme, setTheme } = useTheme();
	const { locale, setLocale } = useLocale();
	const {
		englishOption,
		zuluOption,
		bannerPrompt,
		bannerLinkText,
		appGalleryBannerPrompt,
		appGalleryBannerLinkText,
		themeToggle,
		lightTheme,
		darkTheme,
		systemTheme,
	} = useIntlayer("header");

	const isHomePage = location.pathname === "/";

	const [showAppGalleryBanner, setShowAppGalleryBanner] = useState(false);

	useEffect(() => {
		const dismissed = localStorage.getItem(
			"his-word-appgallery-banner-dismissed",
		);
		if (!dismissed) {
			setShowAppGalleryBanner(true);
		}
	}, []);

	const dismissBanner = () => {
		localStorage.setItem("his-word-appgallery-banner-dismissed", "true");
		setShowAppGalleryBanner(false);
	};

	const currentIcon = () => {
		switch (theme) {
			case "light":
				return Sun01Icon;
			case "dark":
				return Moon01Icon;
			default:
				return ComputerIcon;
		}
	};

	return (
		<div className="w-full">
			{showAppGalleryBanner && isHomePage ? (
				<div className="w-full bg-red-500/5 hover:bg-red-500/10 border-b border-red-500/10 py-2.5 px-4 text-xs text-center flex items-center justify-center gap-1.5 transition-all duration-300 relative">
					<div className="flex flex-wrap items-center justify-center gap-1.5 pr-6">
						<span className="inline-flex items-center justify-center bg-red-500 text-white font-bold px-1.5 py-0.5 rounded text-[8px] tracking-wider uppercase mr-1 shrink-0 animate-pulse">
							New Launch
						</span>
						<HugeiconsIcon
							icon={Store01Icon}
							size={14}
							className="text-red-500 shrink-0"
						/>
						<span className="text-muted-foreground">
							{appGalleryBannerPrompt}
						</span>
						<a
							href="https://appgallery.huawei.com/app/C118209837"
							target="_blank"
							rel="noopener noreferrer"
							className="text-red-500 font-semibold hover:underline hover:opacity-90 flex items-center gap-0.5"
						>
							{appGalleryBannerLinkText} &rarr;
						</a>
					</div>
					<button
						type="button"
						onClick={dismissBanner}
						className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground/60 hover:text-foreground hover:bg-muted/20 transition-colors focus:outline-none"
						aria-label="Dismiss banner"
					>
						<HugeiconsIcon icon={Cancel01Icon} size={14} />
					</button>
				</div>
			) : (
				isHomePage && (
					<div className="hidden md:flex w-full bg-primary/5 hover:bg-primary/10 border-b border-primary/10 py-2.5 px-4 text-xs text-center flex-wrap items-center justify-center gap-1.5 transition-all duration-300">
						<HugeiconsIcon
							icon={Comment01Icon}
							size={14}
							className="text-primary shrink-0"
						/>
						<span className="text-muted-foreground">{bannerPrompt}</span>
						<a
							href="https://www.sakhiledumisa.com/blog/his-word-quietly"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary font-semibold hover:underline hover:opacity-90 flex items-center gap-0.5"
						>
							{bannerLinkText} &rarr;
						</a>
					</div>
				)
			)}

			<header className=" py-4 px-6 flex items-center justify-between bg-transparent sticky top-0 z-50">
				<div className="invisible md:visible md:flex items-center gap-4">
					<RouterLink to="/" className="hover:opacity-80 transition-opacity">
						<img
							src="/logo192.png"
							alt="His Word App Logo"
							className="h-14 w-14 rounded-lg"
						/>
					</RouterLink>
				</div>

				<div className="flex items-center gap-4">
					{/* Language Selection Dropdown */}
					<DropdownMenu>
						<DropdownMenuTrigger>
							<Button
								variant="ghost"
								size="icon"
								aria-label="Language selection"
								className="rounded-full text-muted-foreground hover:text-primary"
							>
								<HugeiconsIcon icon={Globe02Icon} size={20} />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuRadioGroup
								value={locale}
								onValueChange={(val) =>
									setLocale(val as Parameters<typeof setLocale>[0])
								}
							>
								<DropdownMenuRadioItem value="en">
									<span>{englishOption}</span>
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="zu">
									<span>{zuluOption}</span>
								</DropdownMenuRadioItem>
							</DropdownMenuRadioGroup>
						</DropdownMenuContent>
					</DropdownMenu>

					{/* Theme Selector Dropdown */}
					<DropdownMenu>
						<DropdownMenuTrigger>
							<Button
								variant="ghost"
								size="icon"
								aria-label={themeToggle}
								className="rounded-full text-muted-foreground hover:text-primary"
							>
								<HugeiconsIcon icon={currentIcon()} size={20} />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuRadioGroup
								value={theme}
								onValueChange={(val) => setTheme(val as Theme)}
							>
								<DropdownMenuRadioItem value="light">
									<div className="flex items-center gap-2">
										<HugeiconsIcon icon={Sun01Icon} size={18} />
										<span>{lightTheme}</span>
									</div>
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="dark">
									<div className="flex items-center gap-2">
										<HugeiconsIcon icon={Moon01Icon} size={18} />
										<span>{darkTheme}</span>
									</div>
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="system">
									<div className="flex items-center gap-2">
										<HugeiconsIcon icon={ComputerIcon} size={18} />
										<span>{systemTheme}</span>
									</div>
								</DropdownMenuRadioItem>
							</DropdownMenuRadioGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</header>
		</div>
	);
}
