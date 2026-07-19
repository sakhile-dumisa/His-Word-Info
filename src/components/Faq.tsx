import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { EMAIL } from "../lib/site";

export default function FAQ() {
	const categories = [
		{
			title: "App & Features",
			description:
				"General questions about features, translations, and reading tools.",
			items: [
				{
					title: "What translations are supported in His Word?",
					content:
						"His Word includes the American Standard Version (ASV) and the World English Bible (WEB). Both translations are stored fully offline on your device, allowing you to switch between them instantly with zero network delay.",
				},
				{
					title: "Is His Word free to use, and are there ads?",
					content:
						"Yes, His Word is 100% free, open-source, and does not contain any advertisements, subscription models, or hidden in-app purchases.",
				},
				{
					title: "How do the daily devotionals and notifications work?",
					content:
						"The app features a custom notification queue that schedules devotionals locally on your device. It includes holiday-specific reminders (such as Christmas, Easter, and Good Friday) and automatically refreshes its internal queue to make sure you never miss a Verse of the Day.",
				},
				{
					title: "Does the app track what I read?",
					content:
						"No. His Word features a local Reading History tracker that logs your last 10 reading sessions with deduplication and relative timestamps, but this log remains strictly on your device and is not shared with any analytics services.",
				},
				{
					title: "Can I filter scriptures by testament or category?",
					content:
						"Yes. The search and navigation views include dynamic category tags (such as Law, History, Poetry, Gospels, or Epistles), allowing you to quickly filter search results and navigate to specific genres of biblical literature.",
				},
			],
		},
		{
			title: "Privacy & Offline Access",
			description: "How your data and connection status are managed.",
			items: [
				{
					title: "Where is my journaling and reading data stored?",
					content:
						"All data—including your reflections, book bookmarks, reading logs, and color-coded verse highlights—is stored locally on your device using AsyncStorage. None of your data is ever uploaded to external databases or cloud servers.",
				},
				{
					title: "Do I need an active internet connection to read?",
					content:
						"No. His Word is designed as an offline-first application. Once installed, all Bible scriptures, search tools, and devotionals are accessible without internet, cellular data, or server connectivity.",
				},
				{
					title: "What personal details are required to use the app?",
					content:
						"None. There are no sign-up forms, email verifications, profile creations, or social sign-ins. Your identity remains completely anonymous.",
				},
			],
		},
		{
			title: "Performance & Hardware Sensors",
			description:
				"Details on advanced mobile capabilities, caching, and background threads.",
			items: [
				{
					title: "How does the 'Shake-to-Capture' sharing feature work?",
					content:
						"When you shake your device, the app's accelerometer triggers a screenshot capture of your current reader layout. It uses native haptics to give you tactile feedback, then opens your system's share sheet to let you send or save the image.",
				},
				{
					title: "Why does the app request notification and sensor access?",
					content:
						"Notifications are requested to deliver your scheduled daily devotionals. Sensor (accelerometer) permissions are requested solely to detect the shake gesture for screen capturing. None of this data is collected or transmitted off your device.",
				},
				{
					title: "What is the LRU Bible module cache?",
					content:
						"To keep the memory footprint minimal on older devices, the app utilizes a custom Least Recently Used (LRU) cache. It dynamically loads book translations when needed and limits active Bible files in memory to a maximum of 5, preventing memory bloat and app crashes.",
				},
				{
					title: "How does the non-blocking search work?",
					content:
						"Searching a massive text database on mobile can cause lag. His Word splits search queries into asynchronous batches (using timer chunk macros) to run on separate execution cycles. This allows the search bar to stay 100% responsive and lag-free while parsing the entire scripture.",
				},
				{
					title: "How does the high-fidelity image exporter work?",
					content:
						"When you click share, the app uses a hidden WebView to render the scripture, your highlight colors, or reflection text onto a virtual HTML5 Canvas using premium typography. The canvas compiles this into a high-resolution PNG locally for sharing.",
				},
				{
					title: "How can I submit bugs or request features?",
					content: `For support, bug submissions, or feature requests, you can email the developer directly at ${EMAIL}.`,
				},
			],
		},
	];

	return (
		<section
			aria-label="Frequently asked questions"
			className="space-y-12 pt-14"
		>
			<header className="space-y-4">
				<h2 className="text-lg font-bold tracking-tight text-foreground">
					Frequently Asked Questions
				</h2>
				<p className="max-w-md text-sm font-normal leading-relaxed text-muted-foreground">
					Everything you need to know about the His Word application features,
					performance, and data policies.
				</p>
			</header>

			<div className="flex flex-col gap-10">
				{categories.map((category) => (
					<Card key={category.title} className="w-full">
						<CardHeader>
							<CardTitle>{category.title}</CardTitle>
							<CardDescription>{category.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<Accordion
								multiple
								className="w-full border-none shadow-none p-0 rounded-none gap-2 flex flex-col"
							>
								{category.items.map((item) => (
									<AccordionItem
										key={item.title}
										value={item.title}
										className="border-none rounded-lg transition-all"
									>
										<AccordionTrigger className="w-full text-foreground font-medium text-left hover:text-primary hover:no-underline transition-colors text-sm py-3 px-4 flex justify-between items-center [&_svg]:size-4">
											<span>{item.title}</span>
										</AccordionTrigger>
										<AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4 pt-0 px-4">
											{item.content}
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
