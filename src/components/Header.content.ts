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
	},
} satisfies Dictionary;

export default headerContent;
