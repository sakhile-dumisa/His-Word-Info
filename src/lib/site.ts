export const SITE_TITLE = "His Word - Izwi Lakhe";
export const SITE_DESCRIPTION =
	"His Word is a bible study platform for everyone. ";
export const SITE_URL = "https://izwi.sakhiledumisa.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/sakhile-dumisa";
export const X_URL = "https://x.com/sakhiledumisa0";
export const EMAIL = "izwi@sakhiledumisa.com";
export const CREDLY_URL = "https://www.credly.com/users/sakhile-dumisa";

export interface SocialLinkItem {
	key:
		| "x"
		| "credly"
		| "linkedin"
		| "github"
		| "youtube"
		| "instagram"
		| "threads"
		| "website"
		| "email";
	href: string;
	label: string;
}

export interface PrimaryActionItem {
	key: "resume" | "contact";
	href: string;
	label: string;
	variant: "primary" | "secondary";
}

export const SOCIAL_LINKS: SocialLinkItem[] = [
	{ key: "x", href: X_URL, label: "X" },
	{ key: "credly", href: CREDLY_URL, label: "credly" },
	{ key: "linkedin", href: LINKEDIN_URL, label: "LinkedIn" },
	{ key: "github", href: "https://github.com/sakhile-dumisa", label: "GitHub" },
	{
		key: "instagram",
		href: "https://www.instagram.com/dumisasakhile",
		label: "Instagram",
	},
	{
		key: "threads",
		href: "https://www.threads.com/@dumisasakhile",
		label: "Threads",
	},
	{ key: "website", href: SITE_URL, label: "Website" },
	{ key: "email", href: "mailto:izwi@sakhiledumisa.com", label: "Email" },
];

export const PRIMARY_ACTIONS: PrimaryActionItem[] = [
	{
		key: "resume",
		href: "https://freelance.sakhiledumisa.com/",
		label: "Available for Freelance",
		variant: "secondary",
	},
	{
		key: "contact",
		href: "mailto:izwi@sakhiledumisa.com",
		label: "Get in touch",
		variant: "primary",
	},
];
