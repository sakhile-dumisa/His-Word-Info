import { type Dictionary, t } from "intlayer";

const termsOfUseContent = {
	key: "terms-of-use",
	content: {
		pageTitle: t({
			en: "Terms of Use",
			zu: "Imigomo Yokusetshenziswa",
		}),
		pageSubtitle: t({
			en: "These terms of use govern your access to and use of the His Word application and related features on this website, developed by Sakhile Dumisa.",
			zu: "Le miyalelo nemigomo yokusebenzisa ilawula ukufinyelela kwakho nokusebenzisa i-app ye-His Word nezici ezihlobene kule webhusayithi, eyakhiwe ngu-Sakhile Dumisa.",
		}),
		backLink: t({
			en: "Back to Home",
			zu: "Buyela Ekhaya",
		}),
		item1Title: t({
			en: "1. Acceptance of Terms",
			zu: "1. Ukwamukelwa Kwemigomo",
		}),
		item1Content: t({
			en: "By accessing this website or using the His Word mobile application, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not access the site or use the application.",
			zu: "Ngokungena kule webhusayithi noma ukusebenzisa i-app yeselula ye-His Word, uvuma ukuboshwa yile Migomo Yokusetshenziswa. Uma ungavumelani nale migomo, sicela ungangeni kule sayithi noma usebenzise i-app.",
		}),
		item2Title: t({
			en: "2. Description of Service",
			zu: "2. Incazelo Yesevisi",
		}),
		item2Content: t({
			en: "His Word is a local, offline-first Bible reading application featuring dual translations, reading logs, custom devotional scheduling, reflection journaling, and visual scripture sharing. The service also includes this informational website. All app features are designed to run locally on your device.",
			zu: "I-His Word iyinhlangano yendawo esebenza ngaphandle kwe-inthanethi kuqala yokufunda iBhayibheli ehlanganisa izinguqulo ezimbili, izingodo zokufunda, ukuhlelwa kwemikhuleko, ukubhala phansi imicabango, nokwabelana ngemibhalo. Le sevisi ihlanganisa nale webhusayithi. Zonke izici ze-app zenzelwe ukuthi zisebenze kudivayisi yakho.",
		}),
		item3Title: t({
			en: "3. Website Analytics & Caching",
			zu: "3. Amamethrikhi Wewebhusayithi ne-Caching",
		}),
		item3Content: t({
			en: "To monitor traffic and improve performance on this informational website, we use anonymous analytics tools (such as Vercel and Google Analytics). The mobile application itself operates entirely offline and does not track your personal activities, search history, or reading metrics.",
			zu: "Ukuze sigade ithrafikhi futhi sithuthukise ukusebenza kule webhusayithi efundisayo, sisebenzisa amathuluzi okuhlaziya angaziwa (njenge-Vercel ne-Google Analytics). Uhlelo lokusebenza lweselula lusebenza ngokungaxhunyiwe ku-inthanethi ngokuphelele futhi alulandeli imisebenzi yakho, umlando wosesho, noma amamethrikhi wokufunda.",
		}),
		item4Title: t({
			en: "4. User Conduct & Local Content",
			zu: "4. Ukuziphatha Komsebenzisi Nokuqukethwe Kwasendaweni",
		}),
		item4Content: t({
			en: "You are solely responsible for any content you input into the application, such as journaling reflections and highlights. Although these reflections are stored entirely locally on your device, you agree to use the application and its shareable outputs (such as generated scripture images) only for lawful purposes.",
			zu: "Uwena kuphela onesibopho sanoma yikuphi okuqukethwe okufaka kuhlelo lokusebenza, njengokubhala phansi imicabango nokugqamile. Nakuba lokhu kubhaliwe kugcinwa endaweni kudivayisi yakho, uvuma ukusebenzisa i-app kanye nemiphumela yayo engabiwa (njengezithombe zeBhayibheli ezikhiqiziwe) ngezinhloso ezisemthethweni kuphela.",
		}),
		item5Title: t({
			en: "5. Intellectual Property",
			zu: "5. Impahla Yengqondo",
		}),
		item5Content1: t({
			en: "All website designs, copywriting, original graphics, source code, and application assets are the exclusive intellectual property of the developer, ",
			zu: "Yonke imiklamo yewebhusayithi, ukubhala, imidwebo yokuqala, ikhodi yomthombo, kanye nempahla ye-app iyimpahla yengqondo ekhethekile kanjiniyela, ",
		}),
		item5Content2: t({
			en: ". The Bible translations (ASV & WEB) are in the public domain. You may freely capture screenshots, share reflections, and generate sharing images for personal, educational, or non-commercial devotional use.",
			zu: ". Izinguquko zeBhayibheli (ASV & WEB) zisendaweni yomphakathi. Ungathwebula izithombe zesikrini ngokukhululekile, wabelane ngemikhuleko, futhi ukhiqize izithombe zokwabelana ngezinhloso zomuntu siqu, zemfundo, noma ezingezona ezokuthengisa.",
		}),
		item6Title: t({
			en: "6. No Professional or Theological Counsel",
			zu: "6. Akukho Kululekwa Kwezemfundo Noma Kwezenkolo",
		}),
		item6Content: t({
			en: "The content provided on this website and within the daily devotionals is for informational and personal study purposes only. Devotional materials represent personal and curated reflections and do not constitute formal theological doctrine, pastoral guidance, or absolute truth.",
			zu: "Okuqukethwe okuhlinzekwe kule webhusayithi nangaphakathi kwemikhuleko yansuku zonke kwenzelwe ulwazi nokufunda komuntu siqu kuphela. Izinto zokukhuleka zimelela imicabango yomuntu siqu futhi azifaki imfundiso yenkolo esemthethweni, isikhombisi sikamalusi, noma iqiniso eliphelele.",
		}),
		item7Title: t({
			en: "7. Third-Party Links & Integrations",
			zu: "7. Izixhumanisi Nezinhlelo Ezivela Kwabanye",
		}),
		item7Content: t({
			en: "Our website or application may reference external resources or facilitate sharing images to external applications (like native system share sheets). We do not assume responsibility for the content, privacy policies, or terms of use of any third-party websites or services.",
			zu: "Iwebhusayithi noma uhlelo lwethu lokusebenza lungase lubhekisele ezinsizeni zangaphandle noma likhuthaze ukwabelana ngezithombe ezinhlelweni zangaphandle (njengephepha lokwabelana lesistimu). Asizibophezeli ngokuqukethwe, inqubomgomo yobumfihlo, noma imigomo yokusebenzisa yewebhusayithi noma izinsiza zangaphandle.",
		}),
		item8Title: t({
			en: "8. Disclaimer of Warranties",
			zu: "8. Ukuzihlangula Kweziqinisekiso",
		}),
		item8Content: t({
			en: "The website and the His Word mobile application are provided 'as is' and 'as available' without warranties of any kind, either express or implied. While we strive to maintain high-quality offline access and seamless caching, we do not warrant that the application will be completely error-free or uninterrupted.",
			zu: "Iwebhusayithi kanye ne-app yeselula ye-His Word kuhlinzekwa 'njengoba linjalo' nangendlela 'etholakalayo' ngaphandle kwanoma yiziphi iziqinisekiso, eziveziwe noma ezishiwoyo. Nakuba sizama ukugcina ukufinyelela okungaxhunyiwe ku-inthanethi okuyikhwalithi ephezulu, asiqinisekisi ukuthi i-app izoba ngaphandle kwamaphutha ngokuphelele.",
		}),
		item9Title: t({
			en: "9. Limitation of Liability",
			zu: "9. Umkhawulo Wesibopho",
		}),
		item9Content1: t({
			en: "To the maximum extent permitted by law, developer ",
			zu: "Kufinyelela emkhawulweni ovunyelwe umthetho, unjiniyela ",
		}),
		item9Content2: t({
			en: " shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data (including local reflections, bookmarks, or highlights) arising out of your use or inability to use the application.",
			zu: " ngeke abesibopho sanoma yikuphi ukulimala okungaqondile, okwenzekile, okukhethekile, noma ukulahlekelwa kwedatha (kuhlanganise nokubhalwe endaweni, amabhukumaka, noma ukugqamile) okuvela ekusebenziseni noma ekuhlulekeni kwakho ukusebenzisa i-app.",
		}),
		item10Title: t({
			en: "10. Changes to These Terms",
			zu: "10. Izinguquko Kule Migomo",
		}),
		item10Content: t({
			en: "These terms may be updated periodically. Your continued use of the website or the mobile application after updates are published constitutes acceptance of the modified Terms of Use.",
			zu: "Le migomo ingase ibuyekezwe ngezikhathi ezithile. Ukusebenzisa kwakho okuqhubekayo kwewebhusayithi noma i-app kulandela ukushicilelwa kwezibuyekezo kukhombisa ukwamukela kwakho Imigomo ebuyekeziwe.",
		}),
		item11Title: t({
			en: "11. Contact & Privacy",
			zu: "11. Ukuxhumana Naye Nobumfihlo",
		}),
		item11ContentText: t({
			en: "Questions about these terms can be directed through the contact options listed on the homepage.",
			zu: "Imibuzo mayelana nale migomo ingaqondiswa ngezindlela zokuxhumana ezibalwe ekhasini eliyisiqalo.",
		}),
		item11PrivacyText: t({
			en: "Please also review our ",
			zu: "Sicela uphinde ubuyekeze yethu ",
		}),
		item11PrivacyLink: t({
			en: "Privacy Policy",
			zu: "Inqubomgomo Yobumfihlo",
		}),
	},
} satisfies Dictionary;

export default termsOfUseContent;
