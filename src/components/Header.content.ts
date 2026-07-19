import { type Dictionary, t } from "intlayer";

const headerContent = {
	key: "header",
	content: {
		languageLabel: t({
			en: "Language",
			zu: "Ulimi",
		}),
		englishOption: t({
			en: "English",
			zu: "IsiNgisi",
		}),
		zuluOption: t({
			en: "isiZulu",
			zu: "isiZulu",
		}),
		bannerPrompt: t({
			en: "Want to engage directly and publicly with the developer?",
			zu: "Ufuna ukuxhumana ngqo nonjiniyela esidlangalaleni?",
		}),
		bannerLinkText: t({
			en: "Leave a comment on this blog post",
			zu: "Shiya umbono kule bhulogi post",
		}),
		themeToggle: t({
			en: "Theme toggle",
			zu: "Shintsha itimu",
		}),
		lightTheme: t({
			en: "Light",
			zu: "Okukhanyayo",
		}),
		darkTheme: t({
			en: "Dark",
			zu: "Okumnyama",
		}),
		systemTheme: t({
			en: "System",
			zu: "Isistimu",
		}),
	},
} satisfies Dictionary;

export default headerContent;
