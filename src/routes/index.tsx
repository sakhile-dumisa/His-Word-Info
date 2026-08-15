import {
	BookOpen01Icon,
	Database01Icon,
	Folder01Icon,
	HighlighterIcon,
	PaintBrush01Icon,
	Search01Icon,
	Share01Icon,
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
		heroDescription,
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
		<motion.main
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="min-h-screen bg-background mt-2"
		>
			<div className="mx-auto max-w-2xl px-4 py-6 md:mt-6 space-y-16">
				{/* Hero Section showcasing Interface & Design */}
				<motion.header variants={itemVariants} className="space-y-6 text-center">
					<div className="space-y-3">
						<div className="flex items-center justify-center gap-3">
							<img
								src="/logo192.png"
								alt="His Word App Logo"
								className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl shadow-xs"
							/>
							<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
								{heroTitle}
							</h1>
						</div>
						<p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
							{heroDescription}
						</p>
					</div>

					{/* Interactive Interface & Design Carousel Showcase */}
					<div className="pt-2">
						<Carousel hideHeader />
					</div>

					{/* Minimalistic Verse Quote & About Text */}
					<div className="space-y-3 pt-6 border-t border-border/40 text-center flex flex-col items-center max-w-xl mx-auto">
						<p className="text-sm sm:text-base text-foreground/90 leading-relaxed font-medium">
							{verseText}
						</p>
						<p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
							{aboutText}
						</p>
					</div>
				</motion.header>

				{/* How It Works Section */}
				<motion.section variants={itemVariants} className="space-y-6">
					<h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">
						{howItWorksTitle}
					</h2>
					<div className="relative pl-1">
						{/* Polished continuous timeline connector */}
						<div className="absolute left-4.25 top-4 bottom-6 w-px bg-linear-to-b from-border via-border/60 to-transparent" />

						<div className="space-y-6">
							{[
								{
									title: step1Title,
									desc: step1Desc,
									icon: BookOpen01Icon,
								},
								{
									title: step2Title,
									desc: step2Desc,
									icon: HighlighterIcon,
								},
								{
									title: step3Title,
									desc: step3Desc,
									icon: Search01Icon,
								},
								{
									title: step4Title,
									desc: step4Desc,
									icon: Share01Icon,
								},
							].map((step, idx) => (
								<div key={idx} className="flex items-start gap-4 group relative">
									{/* Modern Node Badge */}
									<div className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-background text-foreground shadow-xs group-hover:border-foreground/40 group-hover:bg-muted/30 transition-all duration-200">
										<HugeiconsIcon
											icon={step.icon}
											size={18}
											className="text-foreground/80 group-hover:text-foreground transition-colors"
										/>
									</div>

									{/* Step Content */}
									<div className="space-y-1 pt-1 flex-1">
										<h3 className="text-sm font-medium text-foreground tracking-tight">
											{step.title}
										</h3>
										<p className="text-sm text-muted-foreground leading-relaxed">
											{step.desc}
										</p>
									</div>
								</div>
							))}
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
			</div>
		</motion.main>
	);
}
