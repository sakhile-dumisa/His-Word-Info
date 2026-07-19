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
	return (
		<motion.main
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="min-h-screen bg-background mt-2"
		>
			<div className="mx-auto max-w-2xl px-4 py-6 md:mt-10 space-y-16">
				{/* Hero Header */}
				<motion.header variants={itemVariants} className="space-y-4">
					<h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl flex items-center gap-3">
						<img
							src="/logo192.png"
							alt="His Word App Logo"
							className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl"
						/>
						<span>His Word</span>
					</h1>
					<p className="text-lg text-foreground leading-relaxed text-balance">
						A modern, high-performance Bible reading and study companion.
						Designed for absolute focus, running entirely offline, and
						engineered with deep respect for your privacy.
					</p>

					<div className="flex flex-wrap gap-4 pt-2 pb-4">
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

					<blockquote className="border-l-2 border-primary/50 pl-4 text-sm text-muted-foreground mt-2 space-y-2">
						<p>
							"In the beginning was the Word, and the Word was with God, and the
							Word was God." — John 1:1. The name <strong>His Word</strong> is
							inspired by this prologue, celebrating scripture as the living
							Word of God.
						</p>
						<p>
							In isiZulu, "His Word" translates to <strong>Izwi Lakhe</strong>,
							which was the original concept and name for the application.
							However, due to copyright restrictions regarding Zulu Bible
							translations, the app is currently available in English only.
						</p>
					</blockquote>
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
						How It Works
					</h2>
					<div className="space-y-8 border-l border-border pl-4 ml-1">
						<div className="space-y-2 relative">
							<span className="absolute left-[-21px] top-1.5 flex h-2 w-2 rounded-full bg-foreground" />
							<h3 className="text-base font-medium text-foreground flex items-center gap-2">
								<HugeiconsIcon
									icon={Book01Icon}
									className="text-primary size-5 shrink-0"
								/>
								<span>1. Fast, Offline Reading</span>
							</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								His Word stores Bible translations (ASV and WEB) locally on your
								device. Toggle between translations instantly, check your
								reading history, and resume exactly where you left off with
								spring-animated controls.
							</p>
						</div>

						<div className="space-y-2 relative">
							<span className="absolute left-[-21px] top-1.5 flex h-2 w-2 rounded-full bg-foreground" />
							<h3 className="text-base font-medium text-foreground flex items-center gap-2">
								<HugeiconsIcon
									icon={Book02Icon}
									className="text-primary size-5 shrink-0"
								/>
								<span>2. Study, Highlight & Journal</span>
							</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Long-press verses to highlight using custom theme-adaptive
								palettes. Author rich-text reflection entries directly inside
								the chapter reader to record your study notes.
							</p>
						</div>

						<div className="space-y-2 relative">
							<span className="absolute left-[-21px] top-1.5 flex h-2 w-2 rounded-full bg-foreground" />
							<h3 className="text-base font-medium text-foreground flex items-center gap-2">
								<HugeiconsIcon
									icon={BookSearchIcon}
									className="text-primary size-5 shrink-0"
								/>
								<span>3. Asynchronous Deep Search</span>
							</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Search across all 66 books instantly. The search engine uses
								smart micro-task chunking to parse keywords over thousands of
								verses without blocking the UI thread, highlighting search
								keywords dynamically.
							</p>
						</div>

						<div className="space-y-2 relative">
							<span className="absolute left-[-21px] top-1.5 flex h-2 w-2 rounded-full bg-foreground" />
							<h3 className="text-base font-medium text-foreground flex items-center gap-2">
								<HugeiconsIcon
									icon={Share01Icon}
									className="text-primary size-5 shrink-0"
								/>
								<span>4. Tactile Shake & Share</span>
							</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Export your journal entries or highlighted scriptures as
								beautiful high-res cards rendered on-device using a local
								canvas. Simply shake your device to capture and share content
								with haptic vibration confirmation.
							</p>
						</div>
					</div>
				</motion.section>

				{/* Technical Architecture & Specs */}
				<motion.section variants={itemVariants} className="space-y-6">
					<h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">
						Under the Hood
					</h2>
					<div className="grid gap-4 sm:grid-cols-2">
						<div className="rounded-lg border border-border p-4 space-y-1.5 bg-muted/10">
							<div className="flex items-center gap-2">
								<HugeiconsIcon
									icon={Database01Icon}
									className="text-primary size-5 shrink-0"
								/>
								<h4 className="text-sm font-medium text-foreground">
									LRU Database Cache
								</h4>
							</div>
							<p className="text-xs text-muted-foreground leading-relaxed">
								Custom Least Recently Used cache system that keeps memory
								footprint minimal by loading book modules dynamically and
								caching only active books.
							</p>
						</div>
						<div className="rounded-lg border border-border p-4 space-y-1.5 bg-muted/10">
							<div className="flex items-center gap-2">
								<HugeiconsIcon
									icon={PaintBrush01Icon}
									className="text-primary size-5 shrink-0"
								/>
								<h4 className="text-sm font-medium text-foreground">
									Multi-Theme Engine
								</h4>
							</div>
							<p className="text-xs text-muted-foreground leading-relaxed">
								Built using Uniwind and custom Metro configurations. Instantly
								switches system accent variables across 4 premium color palettes
								(Green, Pink, Blue, Charcoal).
							</p>
						</div>
						<div className="rounded-lg border border-border p-4 space-y-1.5 bg-muted/10">
							<div className="flex items-center gap-2">
								<HugeiconsIcon
									icon={Folder01Icon}
									className="text-primary size-5 shrink-0"
								/>
								<h4 className="text-sm font-medium text-foreground">
									Local JSON / Storage
								</h4>
							</div>
							<p className="text-xs text-muted-foreground leading-relaxed">
								All metrics, reflections, historical reading records, bookmarks,
								and preferences are saved locally on-device. Zero cloud database
								latency or tracking.
							</p>
						</div>
						<div className="rounded-lg border border-border p-4 space-y-1.5 bg-muted/10">
							<div className="flex items-center gap-2">
								<HugeiconsIcon
									icon={Share01Icon}
									className="text-primary size-5 shrink-0"
								/>
								<h4 className="text-sm font-medium text-foreground">
									Canvas Share Engine
								</h4>
							</div>
							<p className="text-xs text-muted-foreground leading-relaxed">
								Uses a localized off-screen WebView to dynamically compose and
								render typography into a high-res PNG image, which feeds
								directly into native sharing hooks.
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
