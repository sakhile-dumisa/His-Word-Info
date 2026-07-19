import { type Dictionary, t } from "intlayer";

const footerContent = {
	key: "footer",
	content: {
		termsOfService: t({
			en: "Terms of Service",
			zu: "Imigomo Yokusetshenziswa",
		}),
		privacyPolicy: t({
			en: "Privacy Policy",
			zu: "Inqubomgomo Yobumfihlo",
		}),
		allRightsReserved: t({
			en: "All rights reserved.",
			zu: "Wonke amalungelo agodliwe.",
		}),
		seeSitemap: t({
			en: "See Sitemap",
			zu: "Bona i-Sitemap",
		}),
	},
} satisfies Dictionary;

export default footerContent;
