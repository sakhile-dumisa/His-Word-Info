import {
	GithubIcon,
	InstagramIcon,
	Linkedin01Icon,
	MailAtSign01Icon,
	NewTwitterIcon,
	RssIcon,
	ThreadsIcon,
	YoutubeIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link as RouterLink } from "@tanstack/react-router";
import { SOCIAL_LINKS } from "#/lib/site";

export default function Footer() {
	const year = new Date().getFullYear();

	const socialIcons = {
		x: NewTwitterIcon,
		linkedin: Linkedin01Icon,
		github: GithubIcon,
		youtube: YoutubeIcon,
		instagram: InstagramIcon,
		threads: ThreadsIcon,
		website: RssIcon,
		email: MailAtSign01Icon,
	};

	return (
		<footer className="border-t border-border/40 py-10">
			<div className="flex flex-wrap items-center justify-center gap-2 text-muted-foreground">
				{SOCIAL_LINKS.map((item) => {
					const Icon = socialIcons[item.key as keyof typeof socialIcons];
					if (!Icon) return null;

					const href = item.key === "website" ? "/sitemap.xml" : item.href;
					const tooltipLabel =
						item.key === "website" ? "See Sitemap" : item.label;
					const isExternalLink =
						href?.startsWith("http://") || href?.startsWith("https://");

					return (
						<a
							key={item.key}
							href={href}
							aria-label={item.label}
							title={tooltipLabel}
							target={isExternalLink ? "_blank" : undefined}
							rel={isExternalLink ? "noopener noreferrer" : undefined}
							className="rounded-full p-2 transition-all duration-300 text-muted-foreground hover:text-primary hover:scale-110"
						>
							<HugeiconsIcon icon={Icon} size={22} />
						</a>
					);
				})}
			</div>

			<div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
				<RouterLink
					to="/terms-of-use"
					className="transition-colors hover:text-primary"
				>
					Terms of Service
				</RouterLink>
				<span aria-hidden="true" className="text-border">
					•
				</span>
				<RouterLink
					to="/privacy-policy"
					className="transition-colors hover:text-primary"
				>
					Privacy Policy
				</RouterLink>
			</div>

			<p className="pt-5 text-center text-xs text-muted-foreground/60">
				© {year} His Word. All rights reserved.
			</p>
		</footer>
	);
}
