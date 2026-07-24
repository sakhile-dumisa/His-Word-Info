import {
	Cancel01Icon,
	Comment01Icon,
	GithubIcon,
	InstagramIcon,
	Linkedin01Icon,
	MailAtSign01Icon,
	NewTwitterIcon,
	RssIcon,
	Store01Icon,
	ThreadsIcon,
	YoutubeIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link as RouterLink } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useIntlayer } from "react-intlayer";
import { SOCIAL_LINKS } from "#/lib/site";

export default function Footer() {
	const year = new Date().getFullYear();
	const {
		termsOfService,
		privacyPolicy,
		allRightsReserved,
		seeSitemap,
		blogPrompt,
		blogLinkText,
		downloadAppGallery,
	} = useIntlayer("footer");

	const [showFeedbackWidget, setShowFeedbackWidget] = useState(false);

	useEffect(() => {
		const dismissed = localStorage.getItem(
			"his-word-feedback-widget-dismissed",
		);
		if (!dismissed) {
			setShowFeedbackWidget(true);
		}
	}, []);

	const dismissFeedbackWidget = () => {
		localStorage.setItem("his-word-feedback-widget-dismissed", "true");
		setShowFeedbackWidget(false);
	};

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
		<footer className="border-t border-border/40 py-10 px-4">
			<div className="flex flex-wrap items-center justify-center gap-2 text-muted-foreground">
				{SOCIAL_LINKS.map((item) => {
					const Icon = socialIcons[item.key as keyof typeof socialIcons];
					if (!Icon) return null;

					const href = item.key === "website" ? "/sitemap.xml" : item.href;
					const tooltipLabel = item.key === "website" ? seeSitemap : item.label;
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

			<div className="mt-6 flex justify-center">
				<a
					href="https://appgallery.huawei.com/app/C118209837"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 text-xs font-semibold hover:bg-primary/15 hover:border-primary/30 transition-all select-none duration-200 active:scale-95"
				>
					<HugeiconsIcon icon={Store01Icon} size={14} className="shrink-0" />
					<span>{downloadAppGallery}</span>
				</a>
			</div>

			<div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
				<RouterLink
					to="/terms-of-use"
					className="transition-colors hover:text-primary"
				>
					{termsOfService}
				</RouterLink>
				<span aria-hidden="true" className="text-border">
					•
				</span>
				<RouterLink
					to="/privacy-policy"
					className="transition-colors hover:text-primary"
				>
					{privacyPolicy}
				</RouterLink>
			</div>

			<p className="pt-5 text-center text-xs text-muted-foreground/60">
				© {year} His Word. {allRightsReserved}
			</p>

			{showFeedbackWidget && (
				<div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-40 w-[calc(100%-2rem)] sm:max-w-xs p-4 rounded-xl bg-card/95 backdrop-blur-md border border-border/80 shadow-2xl flex flex-col gap-2 text-left transition-all duration-300">
					<button
						type="button"
						onClick={dismissFeedbackWidget}
						className="absolute right-2 top-2 rounded-full p-1 text-muted-foreground/60 hover:text-foreground hover:bg-muted/30 transition-colors focus:outline-none cursor-pointer"
						aria-label="Dismiss feedback widget"
					>
						<HugeiconsIcon icon={Cancel01Icon} size={12} />
					</button>
					<div className="flex items-start gap-2.5 pr-4">
						<HugeiconsIcon
							icon={Comment01Icon}
							size={16}
							className="text-primary shrink-0 mt-0.5"
						/>
						<div className="space-y-1">
							<p className="text-[11px] text-muted-foreground leading-normal font-medium">
								{blogPrompt}
							</p>
							<a
								href="https://www.sakhiledumisa.com/blog/his-word-quietly"
								target="_blank"
								rel="noopener noreferrer"
								className="text-xs text-primary font-semibold hover:underline inline-flex items-center gap-0.5"
							>
								{blogLinkText} &rarr;
							</a>
						</div>
					</div>
				</div>
			)}
		</footer>
	);
}
