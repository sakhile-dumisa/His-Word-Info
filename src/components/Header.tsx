import { Button, Dropdown } from "@heroui/react";
import {
	ComputerIcon,
	Moon01Icon,
	Sun01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link as RouterLink } from "@tanstack/react-router";
import { type Theme, useTheme } from "#/lib/theme-store";

export default function Header() {
	const { theme, setTheme } = useTheme();

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
				<Dropdown>
					<Dropdown.Trigger>
						<Button
							isIconOnly
							variant="ghost"
							aria-label="Theme toggle"
							className="rounded-full text-muted-foreground hover:text-primary"
						>
							<HugeiconsIcon icon={currentIcon()} size={20} />
						</Button>
					</Dropdown.Trigger>
					<Dropdown.Popover>
						<Dropdown.Menu onAction={(key) => setTheme(key as Theme)}>
							<Dropdown.Item id="light" textValue="Light">
								<div className="flex items-center gap-2">
									<HugeiconsIcon icon={Sun01Icon} size={18} />
									<span>Light</span>
								</div>
							</Dropdown.Item>
							<Dropdown.Item id="dark" textValue="Dark">
								<div className="flex items-center gap-2">
									<HugeiconsIcon icon={Moon01Icon} size={18} />
									<span>Dark</span>
								</div>
							</Dropdown.Item>
							<Dropdown.Item id="system" textValue="System">
								<div className="flex items-center gap-2">
									<HugeiconsIcon icon={ComputerIcon} size={18} />
									<span>System</span>
								</div>
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown.Popover>
				</Dropdown>
			</div>
		</header>
	);
}
