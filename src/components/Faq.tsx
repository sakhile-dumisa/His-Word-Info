import { useIntlayer } from "react-intlayer";
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
	const {
		sectionTitle,
		sectionSubtitle,
		catAppTitle,
		catAppDesc,
		q1Title,
		q1Content,
		q2Title,
		q2Content,
		q3Title,
		q3Content,
		q4Title,
		q4Content,
		q5Title,
		q5Content,
		catPrivacyTitle,
		catPrivacyDesc,
		q6Title,
		q6Content,
		q7Title,
		q7Content,
		q8Title,
		q8Content,
		catPerfTitle,
		catPerfDesc,
		q9Title,
		q9Content,
		q10Title,
		q10Content,
		q11Title,
		q11Content,
		q12Title,
		q12Content,
		q13Title,
		q13Content,
		q14Title,
		q14Content,
		q14LinkText,
		q14BlogText,
	} = useIntlayer("faq");

	const categories = [
		{
			title: catAppTitle,
			description: catAppDesc,
			items: [
				{
					title: q1Title,
					content: q1Content,
				},
				{
					title: q2Title,
					content: q2Content,
				},
				{
					title: q3Title,
					content: q3Content,
				},
				{
					title: q4Title,
					content: q4Content,
				},
				{
					title: q5Title,
					content: q5Content,
				},
			],
		},
		{
			title: catPrivacyTitle,
			description: catPrivacyDesc,
			items: [
				{
					title: q6Title,
					content: q6Content,
				},
				{
					title: q7Title,
					content: q7Content,
				},
				{
					title: q8Title,
					content: q8Content,
				},
			],
		},
		{
			title: catPerfTitle,
			description: catPerfDesc,
			items: [
				{
					title: q9Title,
					content: q9Content,
				},
				{
					title: q10Title,
					content: q10Content,
				},
				{
					title: q11Title,
					content: q11Content,
				},
				{
					title: q12Title,
					content: q12Content,
				},
				{
					title: q13Title,
					content: q13Content,
				},
				{
					title: q14Title,
					content: (
						<>
							{q14Content}
							<a
								href={`mailto:${EMAIL}`}
								className="underline hover:text-primary transition-colors"
							>
								{EMAIL}
							</a>
							.{q14LinkText}
							<a
								href="https://www.sakhiledumisa.com/blog/his-word-quietly"
								target="_blank"
								rel="noopener noreferrer"
								className="underline hover:text-primary transition-colors"
							>
								{q14BlogText}
							</a>
							.
						</>
					),
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
					{sectionTitle}
				</h2>
				<p className="max-w-md text-sm font-normal leading-relaxed text-muted-foreground">
					{sectionSubtitle}
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
