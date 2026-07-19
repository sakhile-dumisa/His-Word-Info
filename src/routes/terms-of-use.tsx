import {
	Agreement01Icon,
	AlertCircleIcon,
	ArrowLeftIcon,
	Book01Icon,
	ComputerUserIcon,
	Contact01Icon,
	CourtLawIcon,
	InformationCircleIcon,
	InformationSquareIcon,
	Share02Icon,
	Shield02Icon,
	SystemUpdate01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { createFileRoute, Link as RouterLink } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useIntlayer } from "react-intlayer";
import { SITE_TITLE, SITE_URL } from "../lib/site";

export const Route = createFileRoute("/terms-of-use")({
	head: () => {
		const title = `Terms of Use | ${SITE_TITLE}`;
		const description =
			"Terms governing access to and use of the His Word application and website, including local storage, user conduct, intellectual property, and content ownership.";
		const url = `${SITE_URL}/terms-of-use`;

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
				{ property: "og:image", content: `${SITE_URL}/images/terms.png` },
				{ property: "og:image:width", content: "1200" },
				{ property: "og:image:height", content: "630" },
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:image", content: `${SITE_URL}/images/terms.png` },
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
		item5Content1,
		item5Content2,
		item6Title,
		item6Content,
		item7Title,
		item7Content,
		item8Title,
		item8Content,
		item9Title,
		item9Content1,
		item9Content2,
		item10Title,
		item10Content,
		item11Title,
		item11ContentText,
		item11PrivacyText,
		item11PrivacyLink,
	} = useIntlayer("terms-of-use");

	const effectiveDate = "July 18, 2026";

	const termsItems = [
		{
			id: "1",
			title: item1Title,
			icon: Agreement01Icon,
			content: item1Content,
		},
		{
			id: "2",
			title: item2Title,
			icon: Book01Icon,
			content: item2Content,
		},
		{
			id: "3",
			title: item3Title,
			icon: InformationCircleIcon,
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
			icon: CourtLawIcon,
			content: (
				<>
					{item5Content1}
					<a
						href="https://sakhiledumisa.com"
						target="_blank"
						rel="noopener noreferrer"
						className="underline underline-offset-4 hover:text-foreground"
					>
						Sakhile Dumisa
					</a>
					{item5Content2}
				</>
			),
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
			icon: Share02Icon,
			content: item7Content,
		},
		{
			id: "8",
			title: item8Title,
			icon: InformationSquareIcon,
			content: item8Content,
		},
		{
			id: "9",
			title: item9Title,
			icon: Shield02Icon,
			content: (
				<>
					{item9Content1}
					<a
						href="https://sakhiledumisa.com"
						target="_blank"
						rel="noopener noreferrer"
						className="underline underline-offset-4 hover:text-foreground"
					>
						Sakhile Dumisa
					</a>{" "}
					{item9Content2}
				</>
			),
		},
		{
			id: "10",
			title: item10Title,
			icon: SystemUpdate01Icon,
			content: item10Content,
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
					{termsItems.map((item) => (
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
							icon={Contact01Icon}
							className="text-muted-foreground size-5 shrink-0"
						/>
						<h2 className="text-xl font-semibold text-foreground">
							{item11Title}
						</h2>
					</div>
					<div className="text-sm text-muted-foreground pl-7 space-y-2">
						<p>{item11ContentText}</p>
						<p>
							{item11PrivacyText}
							<RouterLink
								to="/privacy-policy"
								className="underline underline-offset-4 hover:text-foreground"
							>
								{item11PrivacyLink}
							</RouterLink>
							.
						</p>
					</div>
				</motion.section>
			</motion.article>
		</main>
	);
}
