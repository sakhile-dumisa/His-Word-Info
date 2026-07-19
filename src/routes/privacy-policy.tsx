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
import { useIntlayer } from "react-intlayer";
import { EMAIL, SITE_TITLE, SITE_URL } from "../lib/site";

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
	const {
		pageTitle,
		pageSubtitle,
		backLink,
		item1Title,
		item1Content,
		item2Title,
		item2Content,
		item3Title,
		item3Content,
		item4Title,
		item4Content,
		item5Title,
		item5Content,
		item6Title,
		item6Content,
		item7Title,
		item7Content,
		item8Title,
		item8Content1,
		item8Content2,
		relatedTermsTitle,
		relatedTermsText,
		relatedTermsLink,
	} = useIntlayer("privacy-policy");

	const effectiveDate = "July 18, 2026";

	const privacyItems = [
		{
			id: "1",
			title: item1Title,
			icon: Database01Icon,
			content: item1Content,
		},
		{
			id: "2",
			title: item2Title,
			icon: Shield01Icon,
			content: item2Content,
		},
		{
			id: "3",
			title: item3Title,
			icon: Share01Icon,
			content: item3Content,
		},
		{
			id: "4",
			title: item4Title,
			icon: ComputerUserIcon,
			content: item4Content,
		},
		{
			id: "5",
			title: item5Title,
			icon: InformationCircleIcon,
			content: item5Content,
		},
		{
			id: "6",
			title: item6Title,
			icon: AlertCircleIcon,
			content: item6Content,
		},
		{
			id: "7",
			title: item7Title,
			icon: SystemUpdate01Icon,
			content: item7Content,
		},
		{
			id: "8",
			title: item8Title,
			icon: Contact01Icon,
			content: (
				<>
					{item8Content1}
					<a
						href="https://sakhiledumisa.com"
						target="_blank"
						rel="noopener noreferrer"
						className="underline underline-offset-4 hover:text-foreground"
					>
						Sakhile Dumisa
					</a>
					{item8Content2}
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
						{backLink}
					</RouterLink>
				</motion.div>

				<motion.header variants={itemVariants} className="space-y-3">
					<h1 className="text-3xl font-semibold tracking-tight text-foreground">
						{pageTitle}
					</h1>
					<p className="text-sm text-muted-foreground">
						Effective date: {effectiveDate}
					</p>
					<p className="text-sm text-muted-foreground text-balance">
						{pageSubtitle}
					</p>
				</motion.header>

				<motion.div variants={itemVariants} className="space-y-8">
					{privacyItems.map((item) => (
						<section key={item.id} className="space-y-2">
							<div className="flex items-center gap-2">
								<HugeiconsIcon
									icon={item.icon}
									className="text-muted-foreground size-5 shrink-0"
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
							className="text-muted-foreground size-5 shrink-0"
						/>
						<h2 className="text-xl font-semibold text-foreground">
							{relatedTermsTitle}
						</h2>
					</div>
					<div className="text-sm text-muted-foreground pl-7">
						{relatedTermsText}
						<RouterLink
							to="/terms-of-use"
							className="underline underline-offset-4 hover:text-foreground"
						>
							{relatedTermsLink}
						</RouterLink>
						.
					</div>
				</motion.section>
			</motion.article>
		</main>
	);
}
