import {
	ComputerIcon,
	Moon01Icon,
	Sun01Icon,
	TranslateIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link as RouterLink } from "@tanstack/react-router";
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
	const { theme, setTheme } = useTheme();
	const { locale, setLocale } = useLocale();
	const { englishOption, zuluOption } = useIntlayer("header");

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
							<HugeiconsIcon icon={TranslateIcon} size={20} />
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
							aria-label="Theme toggle"
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
									<span>Light</span>
								</div>
							</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="dark">
								<div className="flex items-center gap-2">
									<HugeiconsIcon icon={Moon01Icon} size={18} />
									<span>Dark</span>
								</div>
							</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="system">
								<div className="flex items-center gap-2">
									<HugeiconsIcon icon={ComputerIcon} size={18} />
									<span>System</span>
								</div>
							</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
}
