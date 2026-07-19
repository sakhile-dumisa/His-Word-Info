import { type Dictionary, t } from "intlayer";

const carouselContent = {
	key: "carousel",
	content: {
		sectionTitle: t({
			en: "Interface & Design",
			zu: "Isixhumi Se-interface & Idizayini",
		}),
		sectionSubtitle: t({
			en: "Explore the clean, distraction-free interface of His Word, built with system accent support and typography designed for focus.",
			zu: "Hlola isixhumi esihlanzekile, esingenaziphazamiso se-His Word, esakhiwe ngokusekelwa kwe-system accent ne-typography eyenzelwe ukugxila.",
		}),
		tabScreenshots: t({
			en: "Screenshots",
			zu: "Izithombe Zesikrini",
		}),
		tabCollage: t({
			en: "All-in-One Collage",
			zu: "I-Collage Yonke-Ku-One",
		}),
		clickToExpand: t({
			en: "Click to Expand",
			zu: "Chofoza ukuze Ukhulise",
		}),
		clickToZoom: t({
			en: "Click to Zoom Collage",
			zu: "Chofoza ukuze Usondeze I-Collage",
		}),
	},
} satisfies Dictionary;

export default carouselContent;
