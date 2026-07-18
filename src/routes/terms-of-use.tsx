import { Button } from "@heroui/react";
import { ArrowLeftIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	createFileRoute,
	Link as RouterLink,
	useCanGoBack,
	useRouter,
} from "@tanstack/react-router";
import { SITE_TITLE, SITE_URL } from "../lib/site";

const TERMS_DATA = [
	{
		id: "1",
		title: "1. Acceptance of Terms",
		content:
			"By accessing this website or using the His Word mobile application, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not access the site or use the application.",
	},
	{
		id: "2",
		title: "2. Description of Service",
		content:
			"His Word is a local, offline-first Bible reading application featuring dual translations, reading logs, custom devotional scheduling, reflection journaling, and visual scripture sharing. The service also includes this informational website. All app features are designed to run locally on your device.",
	},
	{
		id: "3",
		title: "3. Website Analytics & Caching",
		content:
			"To monitor traffic and improve performance on this informational website, we use anonymous analytics tools (such as Vercel and Google Analytics). The mobile application itself operates entirely offline and does not track your personal activities, search history, or reading metrics.",
	},
	{
		id: "4",
		title: "4. User Conduct & Local Content",
		content:
			"You are solely responsible for any content you input into the application, such as journaling reflections and highlights. Although these reflections are stored entirely locally on your device, you agree to use the application and its shareable outputs (such as generated scripture images) only for lawful purposes.",
	},
	{
		id: "5",
		title: "5. Intellectual Property",
		content:
			"All website designs, copywriting, original graphics, source code, and application assets are the exclusive intellectual property of the developer, Sakhile Dumisa. The Bible translations (ASV & WEB) are in the public domain. You may freely capture screenshots, share reflections, and generate sharing images for personal, educational, or non-commercial devotional use.",
	},
	{
		id: "6",
		title: "6. No Professional or Theological Counsel",
		content:
			"The content provided on this website and within the daily devotionals is for informational and personal study purposes only. Devotional materials represent personal and curated reflections and do not constitute formal theological doctrine, pastoral guidance, or absolute truth.",
	},
	{
		id: "7",
		title: "7. Third-Party Links & Integrations",
		content:
			"Our website or application may reference external resources or facilitate sharing images to external applications (like native system share sheets). We do not assume responsibility for the content, privacy policies, or terms of use of any third-party websites or services.",
	},
	{
		id: "8",
		title: "8. Disclaimer of Warranties",
		content:
			"The website and the His Word mobile application are provided 'as is' and 'as available' without warranties of any kind, either express or implied. While we strive to maintain high-quality offline access and seamless caching, we do not warrant that the application will be completely error-free or uninterrupted.",
	},
	{
		id: "9",
		title: "9. Limitation of Liability",
		content:
			"To the maximum extent permitted by law, developer Sakhile Dumisa shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data (including local reflections, bookmarks, or highlights) arising out of your use or inability to use the application.",
	},
	{
		id: "10",
		title: "10. Changes to These Terms",
		content:
			"These terms may be updated periodically. Your continued use of the website or the mobile application after updates are published constitutes acceptance of the modified Terms of Use.",
	},
];

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

function RouteComponent() {
	const effectiveDate = "July 18, 2026";
	const router = useRouter();
	const canGoBack = useCanGoBack();

	return (
		<main className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8">
			<article className="mx-auto w-full max-w-3xl space-y-8">
				<div>
					<Button
						variant="ghost"
						onClick={() => {
							if (canGoBack) {
								router.history.back();
								return;
							}
							router.navigate({ to: "/" });
						}}
						className="pl-0 text-muted-foreground hover:text-foreground"
					>
						<HugeiconsIcon icon={ArrowLeftIcon} size={16} className="mr-2" />
						Back
					</Button>
				</div>

				<header className="space-y-3">
					<h1 className="text-3xl font-semibold tracking-tight text-foreground">
						Terms of Use
					</h1>
					<p className="text-sm text-muted-foreground">
						Effective date: {effectiveDate}
					</p>
					<p className="text-sm text-muted-foreground text-balance">
						These terms of use govern your access to and use of the His Word
						application and related features on this website, developed by
						Sakhile Dumisa.
					</p>
				</header>

				<div className="space-y-8">
					{TERMS_DATA.map((item) => (
						<section key={item.id} className="space-y-2">
							<h2 className="text-xl font-semibold text-foreground">
								{item.title}
							</h2>
							<p className="text-sm text-muted-foreground leading-relaxed">
								{item.content}
							</p>
						</section>
					))}
				</div>

				<section className="space-y-2 pt-4 border-t border-border">
					<h2 className="text-xl font-semibold text-foreground">
						11. Contact & Privacy
					</h2>
					<p className="text-sm text-muted-foreground">
						Questions about these terms can be directed through the contact
						options listed on the homepage.
					</p>
					<p className="text-sm text-muted-foreground">
						Please also review our{" "}
						<RouterLink
							to="/privacy-policy"
							className="underline underline-offset-4 hover:text-foreground"
						>
							Privacy Policy
						</RouterLink>
						.
					</p>
				</section>
			</article>
		</main>
	);
}
