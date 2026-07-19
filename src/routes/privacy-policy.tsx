import {
	AlertCircleIcon,
	ArrowLeftIcon,
	ComputerUserIcon,
	Contact01Icon,
	Database01Icon,
	InformationCircleIcon,
	LegalDocument01Icon,
	Share01Icon,
	Shield01Icon,
	SystemUpdate01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { createFileRoute, Link as RouterLink } from "@tanstack/react-router";
import { motion } from "motion/react";
import { EMAIL, SITE_TITLE, SITE_URL } from "../lib/site";

const PRIVACY_DATA = [
	{
		id: "1",
		title: "1. Offline-First & Local Storage",
		icon: Database01Icon,
		content:
			"His Word is designed to be fully functional offline. All user-generated data—including your reflections/journal entries, reading history, verse highlights, custom book bookmarks, and theme configurations—is stored locally on your device via AsyncStorage. This data is never sent to, stored on, or processed by remote servers.",
	},
	{
		id: "2",
		title: "2. Device Permissions",
		icon: Shield01Icon,
		content:
			"To support its features, the application requests access to specific hardware capabilities on your device: Accelerometer sensors (to detect the shake gesture for screenshot capture), Notifications (to schedule and display your custom daily devotionals), and Haptics (for tactile vibration feedback). No telemetry or sensory data from these permissions is collected or shared.",
	},
	{
		id: "3",
		title: "3. On-Device Image Sharing",
		icon: Share01Icon,
		content:
			"When using the visual sharing engine to export verses or reflections, the rendering of the final PNG image is performed entirely on your device using a local HTML5 Canvas inside a secure WebView. The resulting image is passed directly to your device's native sharing sheet and is not uploaded to any cloud storage.",
	},
	{
		id: "4",
		title: "4. No Accounts or Authentication",
		icon: ComputerUserIcon,
		content:
			"You do not need to create an account, register an email, or sign in to use the His Word application. We do not maintain user profile databases, nor do we associate your reading progress or search history with any personal identity.",
	},
	{
		id: "5",
		title: "5. Website Traffic & Analytics",
		icon: InformationCircleIcon,
		content:
			"If you browse this informational website, basic anonymous metrics (such as page views, browser types, and referral paths) may be collected through Vercel or Google Analytics to help us monitor performance. This is separate from the mobile app, which remains entirely offline and telemetry-free.",
	},
	{
		id: "6",
		title: "6. Data Control & Deletion",
		icon: AlertCircleIcon,
		content:
			"Since all mobile application data resides on your physical device, you maintain absolute control over it. You can modify or delete your journaling entries and highlights at any time directly in the app. Uninstalling the application will permanently erase all locally stored data from your device.",
	},
	{
		id: "7",
		title: "7. Changes to this Policy",
		icon: SystemUpdate01Icon,
		content:
			"We may update this privacy standard from time to time to align with new features or underlying OS changes. Continued use of the mobile application or website following updates constitutes your acknowledgement of the revised privacy practices.",
	},
	{
		id: "8",
		title: "8. Developer & Contact Info",
		icon: Contact01Icon,
		content: (
			<>
				His Word is developed and maintained by{" "}
				<a
					href="https://sakhiledumisa.com"
					target="_blank"
					rel="noopener noreferrer"
					className="underline underline-offset-4 hover:text-foreground"
				>
					Sakhile Dumisa
				</a>
				. If you have any inquiries, feedback, or concerns regarding your
				privacy or the application's functionality, please reach out via email
				at{" "}
				<a
					href={`mailto:${EMAIL}`}
					className="underline underline-offset-4 hover:text-foreground"
				>
					{EMAIL}
				</a>
				.
			</>
		),
	},
];

export const Route = createFileRoute("/privacy-policy")({
	head: () => {
		const title = `Privacy Policy | ${SITE_TITLE}`;
		const description =
			"Privacy policy for His Word, detailing our offline-first local storage, device permissions, and image sharing systems.";
		const url = `${SITE_URL}/privacy`;

		return {
			links: [
				{ rel: "canonical", href: url },
				{ rel: "alternate", href: url, hrefLang: "en" },
			],
			meta: [
				{ title },
				{ name: "description", content: description },
				{ name: "robots", content: "index, follow" },
				{ property: "og:type", content: "article" },
				{ property: "og:title", content: title },
				{ property: "og:description", content: description },
				{ property: "og:url", content: url },
				{ property: "og:image", content: `${SITE_URL}/images/privacy.png` },
				{ property: "og:image:width", content: "1200" },
				{ property: "og:image:height", content: "630" },
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:image", content: `${SITE_URL}/images/privacy.png` },
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
			staggerChildren: 0.1,
			delayChildren: 0.05,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 15 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
			ease: [0.16, 1, 0.3, 1] as const,
		},
	},
};

function RouteComponent() {
	const effectiveDate = "July 18, 2026";

	return (
		<main className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8">
			<motion.article
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="mx-auto w-full max-w-3xl space-y-8"
			>
				<motion.div variants={itemVariants}>
					<RouterLink
						to="/"
						className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
					>
						<HugeiconsIcon icon={ArrowLeftIcon} size={16} className="mr-2" />
						Back
					</RouterLink>
				</motion.div>

				<motion.header variants={itemVariants} className="space-y-3">
					<h1 className="text-3xl font-semibold tracking-tight text-foreground">
						Privacy Policy
					</h1>
					<p className="text-sm text-muted-foreground">
						Effective date: {effectiveDate}
					</p>
					<p className="text-sm text-muted-foreground text-balance">
						This policy outlines how the His Word application, developed by{" "}
						<a
							href="https://sakhiledumisa.com"
							target="_blank"
							rel="noopener noreferrer"
							className="underline underline-offset-4 hover:text-foreground"
						>
							Sakhile Dumisa
						</a>
						, operates as a local, offline-first platform, and details how
						device permissions, local storage, and website metrics are managed.
					</p>
				</motion.header>

				<motion.div variants={itemVariants} className="space-y-8">
					{PRIVACY_DATA.map((item) => (
						<section key={item.id} className="space-y-2">
							<div className="flex items-center gap-2">
								<HugeiconsIcon
									icon={item.icon}
									className="text-primary size-5 shrink-0"
								/>
								<h2 className="text-xl font-semibold text-foreground">
									{item.title}
								</h2>
							</div>
							<div className="text-sm text-muted-foreground leading-relaxed pl-7">
								{item.content}
							</div>
						</section>
					))}
				</motion.div>

				<motion.section
					variants={itemVariants}
					className="space-y-2 pt-4 border-t border-border"
				>
					<div className="flex items-center gap-2">
						<HugeiconsIcon
							icon={LegalDocument01Icon}
							className="text-primary size-5 shrink-0"
						/>
						<h2 className="text-xl font-semibold text-foreground">
							9. Related Terms
						</h2>
					</div>
					<div className="text-sm text-muted-foreground pl-7">
						Please also review our{" "}
						<RouterLink
							to="/terms-of-use"
							className="underline underline-offset-4 hover:text-foreground"
						>
							Terms of Use
						</RouterLink>
						.
					</div>
				</motion.section>
			</motion.article>
		</main>
	);
}
