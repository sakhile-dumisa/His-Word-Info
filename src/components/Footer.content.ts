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
		blogPrompt: t({
			en: "Want to engage directly and publicly with the developer?",
			zu: "Ufuna ukuxhumana ngqo nonjiniyela esidlangalaleni?",
		}),
		blogLinkText: t({
			en: "Leave a comment on this blog post",
			zu: "Shiya umbono kule bhulogi post",
		}),
		downloadAppGallery: t({
			en: "Explore on AppGallery",
			zu: "Hlola ku-AppGallery",
		}),
	},
} satisfies Dictionary;

export default footerContent;
