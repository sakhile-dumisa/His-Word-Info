import {
	AppleIcon,
	Book01Icon,
	Book02Icon,
	BookSearchIcon,
	Database01Icon,
	Folder01Icon,
	PaintBrush01Icon,
	PlayStoreIcon,
	Share01Icon,
	Store01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useIntlayer } from "react-intlayer";
import Carousel from "../components/Carousel";
import FAQ from "../components/Faq";
// Import site constants
import { SITE_URL, X_URL } from "../lib/site";

export const Route = createFileRoute("/")({
	loader: async () => {
		return {};
	},
	head: () => {
		const title = "His Word — Offline-First Bible Companion";
		const description =
			"A premium, offline-first Bible app built with Expo and HeroUI. Features dual translations, rich reflections, lag-free search, and shake-to-capture sharing.";
		const socialImage = `${SITE_URL}/images/main.png`;
		const url = SITE_URL;

		return {
			links: [
				{ rel: "canonical", href: url },
				{ rel: "alternate", href: url, hrefLang: "en" },
			],
			meta: [
				{ title },
				{ name: "description", content: description },
				{
					name: "keywords",
					content:
						"His Word, Bible App, Offline Bible, Sakhile Dumisa, ASV, WEB, Bible Journal, Scripture Search, Expo SDK 57, React Native",
				},
				{ name: "author", content: "Sakhile Dumisa" },
				{ name: "robots", content: "index, follow" },
				{ property: "og:type", content: "website" },
				{ property: "og:site_name", content: title },
				{ property: "og:title", content: title },
				{ property: "og:description", content: description },
				{ property: "og:url", content: url },
				{ property: "og:image", content: socialImage },
				{ property: "og:image:width", content: "1200" },
				{ property: "og:image:height", content: "630" },
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:site", content: X_URL.replace("https://x.com/", "@") },
				{
					name: "twitter:creator",
					content: X_URL.replace("https://x.com/", "@"),
				},
				{ name: "twitter:title", content: title },
				{ name: "twitter:description", content: description },
				{ name: "twitter:image", content: socialImage },
				{ name: "twitter:url", content: url },
			],
			scripts: [
				{
					type: "application/ld+json",
					children: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: "His Word",
						operatingSystem: "iOS, Android",
						applicationCategory: "LifestyleApplication, ReferenceApplication",
						offers: {
							"@type": "Offer",
							price: "0.00",
							priceCurrency: "USD",
						},
						author: {
							"@type": "Person",
							name: "Sakhile Dumisa",
							url: SITE_URL,
						},
						description: description,
					}),
				},
				{
					type: "application/ld+json",
					children: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "WebSite",
						name: title,
						url: SITE_URL,
						description: description,
					}),
				},
			],
		};
	},
	component: RouteComponent,
});

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.05,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.16, 1, 0.3, 1] as const,
		},
	},
};

function RouteComponent() {
	const {
		heroTitle,
		verseText,
		aboutText,
		howItWorksTitle,
		step1Title,
		step1Desc,
		step2Title,
		step2Desc,
		step3Title,
		step3Desc,
		step4Title,
		step4Desc,
		underTheHoodTitle,
		hoodCard1Title,
		hoodCard1Desc,
		hoodCard2Title,
		hoodCard2Desc,
		hoodCard3Title,
		hoodCard3Desc,
		hoodCard4Title,
		hoodCard4Desc,
	} = useIntlayer("index");

	return (
		<>
			{/* Floating vertical download buttons for desktop */}
			<div className="fixed left-8 bottom-8 hidden md:flex flex-col gap-4 z-40">
				{/* Apple App Store */}
				<div className="relative group">
					<span className="absolute -top-2 -right-1.5 z-10 text-[9px] font-semibold bg-primary/10 text-primary border border-primary/25 px-2 py-0.5 rounded-full select-none scale-90 group-hover:scale-95 transition-transform">
						Coming Soon
					</span>
					<button
						type="button"
						disabled
						className="flex items-center gap-3 px-4 py-2 rounded-xl bg-card border border-border/80 text-left shadow-xs opacity-60 hover:opacity-75 transition-all select-none cursor-not-allowed w-[150px] focus:outline-none"
					>
						<HugeiconsIcon
							icon={AppleIcon}
							size={24}
							className="text-foreground/80 shrink-0"
						/>
						<div className="flex flex-col leading-none">
							<span className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium">
								Download on the
							</span>
							<span className="text-xs font-semibold text-foreground mt-0.5">
								App Store
							</span>
						</div>
					</button>
				</div>

				{/* Google Play Store */}
				<div className="relative group">
					<span className="absolute -top-2 -right-1.5 z-10 text-[9px] font-semibold bg-primary/10 text-primary border border-primary/25 px-2 py-0.5 rounded-full select-none scale-90 group-hover:scale-95 transition-transform">
						Coming Soon
					</span>
					<button
						type="button"
						disabled
						className="flex items-center gap-3 px-4 py-2 rounded-xl bg-card border border-border/80 text-left shadow-xs opacity-60 hover:opacity-75 transition-all select-none cursor-not-allowed w-[150px] focus:outline-none"
					>
						<HugeiconsIcon
							icon={PlayStoreIcon}
							size={24}
							className="text-foreground/80 shrink-0"
						/>
						<div className="flex flex-col leading-none">
							<span className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium">
								Get it on
							</span>
							<span className="text-xs font-semibold text-foreground mt-0.5">
								Google Play
							</span>
						</div>
					</button>
				</div>

				{/* Huawei AppGallery */}
				<div className="relative group">
					<span className="absolute -top-2 -right-1.5 z-10 text-[9px] font-semibold bg-primary/10 text-primary border border-primary/25 px-2 py-0.5 rounded-full select-none scale-90 group-hover:scale-95 transition-transform">
						Coming Soon
					</span>
					<button
						type="button"
						disabled
						className="flex items-center gap-3 px-4 py-2 rounded-xl bg-card border border-border/80 text-left shadow-xs opacity-60 hover:opacity-75 transition-all select-none cursor-not-allowed w-[150px] focus:outline-none"
					>
						<HugeiconsIcon
							icon={Store01Icon}
							size={24}
							className="text-foreground/80 shrink-0"
						/>
						<div className="flex flex-col leading-none">
							<span className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium">
								Explore it on
							</span>
							<span className="text-xs font-semibold text-foreground mt-0.5">
								AppGallery
							</span>
						</div>
					</button>
				</div>
			</div>

			<motion.main
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="min-h-screen bg-background mt-2"
			>
				<div className="mx-auto max-w-2xl px-4 py-6 md:mt-10 space-y-16">
					{/* Hero Header */}
					<motion.header variants={itemVariants} className="space-y-4">
						<h1 className="text-4xl font-semibold tracking-tight text-foreground justify-center flex items-center gap-3">
							<img
								src="/logo192.png"
								alt="His Word App Logo"
								className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl"
							/>
							<span>{heroTitle}</span>
						</h1>

						{/* Minimalistic Verse Quote & About Text */}
						<div className="space-y-4 pt-4 text-center">
							<p className="text-base text-foreground/85 leading-relaxed">
								{verseText}
							</p>
							<p className="text-sm text-muted-foreground leading-relaxed">
								{aboutText}
							</p>
						</div>
					</motion.header>

					{/* Screenshots Carousel */}
					<motion.section
						variants={itemVariants}
						className="py-2 border-t border-border/30"
					>
						<Carousel />
					</motion.section>

					{/* How It Works Section */}
					<motion.section variants={itemVariants} className="space-y-6">
						<h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">
							{howItWorksTitle}
						</h2>
						<div className="space-y-8 border-l border-border pl-4 ml-1">
							<div className="space-y-2 relative">
								<span className="absolute left-[-21px] top-1.5 flex h-2 w-2 rounded-full bg-foreground" />
								<h3 className="text-base font-medium text-foreground flex items-center gap-2">
									<HugeiconsIcon
										icon={Book01Icon}
										className="text-muted-foreground size-5 shrink-0"
									/>
									<span>{step1Title}</span>
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{step1Desc}
								</p>
							</div>

							<div className="space-y-2 relative">
								<span className="absolute left-[-21px] top-1.5 flex h-2 w-2 rounded-full bg-foreground" />
								<h3 className="text-base font-medium text-foreground flex items-center gap-2">
									<HugeiconsIcon
										icon={Book02Icon}
										className="text-muted-foreground size-5 shrink-0"
									/>
									<span>{step2Title}</span>
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{step2Desc}
								</p>
							</div>

							<div className="space-y-2 relative">
								<span className="absolute left-[-21px] top-1.5 flex h-2 w-2 rounded-full bg-foreground" />
								<h3 className="text-base font-medium text-foreground flex items-center gap-2">
									<HugeiconsIcon
										icon={BookSearchIcon}
										className="text-muted-foreground size-5 shrink-0"
									/>
									<span>{step3Title}</span>
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{step3Desc}
								</p>
							</div>

							<div className="space-y-2 relative">
								<span className="absolute left-[-21px] top-1.5 flex h-2 w-2 rounded-full bg-foreground" />
								<h3 className="text-base font-medium text-foreground flex items-center gap-2">
									<HugeiconsIcon
										icon={Share01Icon}
										className="text-muted-foreground size-5 shrink-0"
									/>
									<span>{step4Title}</span>
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{step4Desc}
								</p>
							</div>
						</div>
					</motion.section>

					{/* Technical Architecture & Specs */}
					<motion.section variants={itemVariants} className="space-y-6">
						<h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">
							{underTheHoodTitle}
						</h2>
						<div className="grid gap-4 sm:grid-cols-2">
							<div className="rounded-lg border border-border p-4 space-y-1.5 bg-muted/10">
								<div className="flex items-center gap-2">
									<HugeiconsIcon
										icon={Database01Icon}
										className="text-muted-foreground size-5 shrink-0"
									/>
									<h4 className="text-sm font-medium text-foreground">
										{hoodCard1Title}
									</h4>
								</div>
								<p className="text-xs text-muted-foreground leading-relaxed">
									{hoodCard1Desc}
								</p>
							</div>
							<div className="rounded-lg border border-border p-4 space-y-1.5 bg-muted/10">
								<div className="flex items-center gap-2">
									<HugeiconsIcon
										icon={PaintBrush01Icon}
										className="text-muted-foreground size-5 shrink-0"
									/>
									<h4 className="text-sm font-medium text-foreground">
										{hoodCard2Title}
									</h4>
								</div>
								<p className="text-xs text-muted-foreground leading-relaxed">
									{hoodCard2Desc}
								</p>
							</div>
							<div className="rounded-lg border border-border p-4 space-y-1.5 bg-muted/10">
								<div className="flex items-center gap-2">
									<HugeiconsIcon
										icon={Folder01Icon}
										className="text-muted-foreground size-5 shrink-0"
									/>
									<h4 className="text-sm font-medium text-foreground">
										{hoodCard3Title}
									</h4>
								</div>
								<p className="text-xs text-muted-foreground leading-relaxed">
									{hoodCard3Desc}
								</p>
							</div>
							<div className="rounded-lg border border-border p-4 space-y-1.5 bg-muted/10">
								<div className="flex items-center gap-2">
									<HugeiconsIcon
										icon={Share01Icon}
										className="text-muted-foreground size-5 shrink-0"
									/>
									<h4 className="text-sm font-medium text-foreground">
										{hoodCard4Title}
									</h4>
								</div>
								<p className="text-xs text-muted-foreground leading-relaxed">
									{hoodCard4Desc}
								</p>
							</div>
						</div>
					</motion.section>

					{/* FAQ Section */}
					<motion.section
						id="faq"
						variants={itemVariants}
						aria-label="Frequently asked questions"
						className="mt-8"
					>
						<FAQ />
					</motion.section>

					{/* Mobile download buttons (small and below accordion) */}
					<motion.section
						variants={itemVariants}
						className="flex flex-wrap gap-3 pt-6 pb-2 justify-center md:hidden"
					>
						{/* Apple App Store */}
						<div className="relative group">
							<span className="absolute -top-1.5 -right-1 z-10 text-[8px] font-semibold bg-primary/10 text-primary border border-primary/25 px-1.5 py-0.5 rounded-full select-none scale-80 group-hover:scale-85 transition-transform">
								Coming Soon
							</span>
							<button
								type="button"
								disabled
								className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-card border border-border/80 text-left shadow-xs opacity-60 hover:opacity-75 transition-all select-none cursor-not-allowed w-[115px] focus:outline-none"
							>
								<HugeiconsIcon
									icon={AppleIcon}
									size={18}
									className="text-foreground/80 shrink-0"
								/>
								<div className="flex flex-col leading-none">
									<span className="text-[7.5px] uppercase tracking-wider text-muted-foreground font-medium">
										Download on the
									</span>
									<span className="text-[10px] font-semibold text-foreground mt-0.5">
										App Store
									</span>
								</div>
							</button>
						</div>

						{/* Google Play Store */}
						<div className="relative group">
							<span className="absolute -top-1.5 -right-1 z-10 text-[8px] font-semibold bg-primary/10 text-primary border border-primary/25 px-1.5 py-0.5 rounded-full select-none scale-80 group-hover:scale-85 transition-transform">
								Coming Soon
							</span>
							<button
								type="button"
								disabled
								className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-card border border-border/80 text-left shadow-xs opacity-60 hover:opacity-75 transition-all select-none cursor-not-allowed w-[115px] focus:outline-none"
							>
								<HugeiconsIcon
									icon={PlayStoreIcon}
									size={18}
									className="text-foreground/80 shrink-0"
								/>
								<div className="flex flex-col leading-none">
									<span className="text-[7.5px] uppercase tracking-wider text-muted-foreground font-medium">
										Get it on
									</span>
									<span className="text-[10px] font-semibold text-foreground mt-0.5">
										Google Play
									</span>
								</div>
							</button>
						</div>

						{/* Huawei AppGallery */}
						<div className="relative group">
							<span className="absolute -top-1.5 -right-1 z-10 text-[8px] font-semibold bg-primary/10 text-primary border border-primary/25 px-1.5 py-0.5 rounded-full select-none scale-80 group-hover:scale-85 transition-transform">
								Coming Soon
							</span>
							<button
								type="button"
								disabled
								className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-card border border-border/80 text-left shadow-xs opacity-60 hover:opacity-75 transition-all select-none cursor-not-allowed w-[115px] focus:outline-none"
							>
								<HugeiconsIcon
									icon={Store01Icon}
									size={18}
									className="text-foreground/80 shrink-0"
								/>
								<div className="flex flex-col leading-none">
									<span className="text-[7.5px] uppercase tracking-wider text-muted-foreground font-medium">
										Explore it on
									</span>
									<span className="text-[10px] font-semibold text-foreground mt-0.5">
										AppGallery
									</span>
								</div>
							</button>
						</div>
					</motion.section>
				</div>
			</motion.main>
		</>
	);
}
