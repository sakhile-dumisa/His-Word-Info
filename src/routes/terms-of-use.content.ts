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
			zu: "Le migomo yokusetshenziswa ilawula ukufinyelela kwakho nokusebenzisa uhlelo lokusebenza lwe-His Word kanye nezici ezihlobene kule webhusayithi, eyakhiwe ngu-Sakhile Dumisa.",
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
			zu: "Ngokungena kule webhusayithi noma ngokusebenzisa uhlelo lweselula lwe-His Word, uvuma ukuboshwa yile Migomo Yokusetshenziswa. Uma ungavumelani nale migomo, sicela ungangeni kule sayithi noma usebenzise uhlelo lokusebenza.",
		}),
		item2Title: t({
			en: "2. Description of Service",
			zu: "2. Incazelo Yesevisi",
		}),
		item2Content: t({
			en: "His Word is a local, offline-first Bible reading application featuring dual translations, reading logs, custom devotional scheduling, reflection journaling, and visual scripture sharing. The service also includes this informational website. All app features are designed to run locally on your device.",
			zu: "I-His Word iwuhlelo lokufunda iBhayibheli olusebenza endaweni ngaphandle kwe-inthanethi oluhlanganisa izinguqulo ezimbili, amarekhodi wokufunda, ukuhlela amavesi osuku, ukubhala amanothi okuzindla, nokwabelana ngemibhalo ebukekayo. Le sevisi ihlanganisa nale webhusayithi. Zonke izici zohlelo zenzelwe ukuthi zisebenze ngqo kudivayisi yakho.",
		}),
		item3Title: t({
			en: "3. Website Analytics & Caching",
			zu: "3. Amamethrikhi Ewebhusayithi ne-Caching",
		}),
		item3Content: t({
			en: "To monitor traffic and improve performance on this informational website, we use anonymous analytics tools (such as Vercel and Google Analytics). The mobile application itself operates entirely offline and does not track your personal activities, search history, or reading metrics.",
			zu: "Ukuze sigade ukusebenza futhi sithuthukise iwebhusayithi, sisebenzisa amathuluzi okuhlaziya angaziwa (njenge-Vercel ne-Google Analytics). Uhlelo lokusebenza lweselula lusebenza ngokuphelele ngaphandle kwe-inthanethi futhi alulandeli imisebenzi yakho, umlando wosesho, noma amarekhodi akho okufunda.",
		}),
		item4Title: t({
			en: "4. User Conduct & Local Content",
			zu: "4. Ukuziphatha Komsebenzisi Nokuqukethwe Kwasendaweni",
		}),
		item4Content: t({
			en: "You are solely responsible for any content you input into the application, such as journaling reflections and highlights. Although these reflections are stored entirely locally on your device, you agree to use the application and its shareable outputs (such as generated scripture images) only for lawful purposes.",
			zu: "Uwena kuphela onesibopho sanoma yikuphi okuqukethwe okufaka ohlelweni, njengamanothi okuzindla namavesi agqanyisiwe. Nakuba lokhu kubhalwe endaweni kudivayisi yakho kuphela, uvuma ukusebenzisa uhlelo kanye nezithombe ezikhiqiziwe ngezinhloso ezisemthethweni kuphela.",
		}),
		item5Title: t({
			en: "5. Intellectual Property",
			zu: "5. Impahla Yengqondo",
		}),
		item5Content1: t({
			en: "All website designs, copywriting, original graphics, source code, and application assets are the exclusive intellectual property of the developer, ",
			zu: "Yonke imiklamo yewebhusayithi, imibhalo, imidwebo yokuqala, ikhodi yomthombo, kanye nempahla yohlelo lokusebenza iyimpahla yengqondo ekhethekile kanjiniyela, ",
		}),
		item5Content2: t({
			en: ". The Bible translations (ASV & WEB) are in the public domain. You may freely capture screenshots, share reflections, and generate sharing images for personal, educational, or non-commercial devotional use.",
			zu: ". Izinguqulo zeBhayibheli (ASV & WEB) zisendaweni yomphakathi (public domain). Ungathwebula izithombe zesikrini ngokukhululekile, wabelane ngokuzindla kwakho, futhi ukhiqize amakhadi ezithombe ngezinhloso zomuntu siqu, zemfundo, noma zokuzindla ezingezona ezokuhweba.",
		}),
		item6Title: t({
			en: "6. No Professional or Theological Counsel",
			zu: "6. Akukho Kululekwa Ngokwezemfundo Noma Kwezenkolo",
		}),
		item6Content: t({
			en: "The content provided on this website and within the daily devotionals is for informational and personal study purposes only. Devotional materials represent personal and curated reflections and do not constitute formal theological doctrine, pastoral guidance, or absolute truth.",
			zu: "Okuqukethwe okuhlinzekwe kule webhusayithi nangaphakathi kwamavesi osuku kwenzelwe ulwazi nokufunda komuntu siqu kuphela. Imibhalo yokuzindla imelela imicabango ekhethiwe futhi ayifaki imfundiso yenkolo esemthethweni, iseluleko sikamalusi, noma iqiniso eliphelele.",
		}),
		item7Title: t({
			en: "7. Third-Party Links & Integrations",
			zu: "7. Izixhumanisi Nezinhlelo Zangaphandle",
		}),
		item7Content: t({
			en: "Our website or application may reference external resources or facilitate sharing images to external applications (like native system share sheets). We do not assume responsibility for the content, privacy policies, or terms of use of any third-party websites or services.",
			zu: "Iwebhusayithi noma uhlelo lwethu lokusebenza lungase lubhekisele ezinsizeni zangaphandle noma lukusize ukwabelana ngezithombe ezinhlelweni zangaphandle (njengewindi lokwabelana lesistimu). Asizibophezeli ngokuqukethwe, inqubomgomo yobumfihlo, noma imigomo yokusebenzisa yezinsiza zangaphandle.",
		}),
		item8Title: t({
			en: "8. Disclaimer of Warranties",
			zu: "8. Ukuzihlangula Kweziqinisekiso",
		}),
		item8Content: t({
			en: "The website and the His Word mobile application are provided 'as is' and 'as available' without warranties of any kind, either express or implied. While we strive to maintain high-quality offline access and seamless caching, we do not warrant that the application will be completely error-free or uninterrupted.",
			zu: "Iwebhusayithi kanye nohlelo lweselula lwe-His Word kuhlinzekwa 'njengoba lunjalo' nangendlela 'etholakalayo' ngaphandle kwanoma yiziphi iziqinisekiso, eziveziwe noma ezishiwoyo. Nakuba sizama ukugcina ukufinyelela okungaxhunyiwe ku-inthanethi okusezingeni eliphezulu, asiqinisekisi ukuthi uhlelo luzoba ngaphandle kwamaphutha ngokuphelele.",
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
			zu: " ngeke abe nesibopho sanoma yikuphi ukulimala okungaqondile, okwenzekile, okukhethekile, noma ukulahlekelwa kwedatha (kuhlanganise namanothi endaweni, amabhukumaka, noma amavesi agqanyisiwe) okuvela ekusebenziseni noma ekuhlulekeni kwakho ukusebenzisa uhlelo.",
		}),
		item10Title: t({
			en: "10. Changes to These Terms",
			zu: "10. Izinguquko Kule Migomo",
		}),
		item10Content: t({
			en: "These terms may be updated periodically. Your continued use of the website or the mobile application after updates are published constitutes acceptance of the modified Terms of Use.",
			zu: "Le migomo ingase ibuyekezwe ngezikhathi ezithile. Ukusebenzisa kwakho okuqhubekayo kwewebhusayithi noma kohlelo lweselula kulandela ukushicilelwa kwezibuyekezo kukhombisa ukwamukela kwakho Imigomo ebuyekeziwe.",
		}),
		item11Title: t({
			en: "11. Contact & Privacy",
			zu: "11. Ukuxhumana Nobumfihlo",
		}),
		item11ContentText: t({
			en: "Questions about these terms can be directed through the contact options listed on the homepage.",
			zu: "Imibuzo mayelana nale migomo ingaqondiswa ngezindlela zokuxhumana ezibalwe ekhasini eliyisiqalo.",
		}),
		item11PrivacyText: t({
			en: "Please also review our ",
			zu: "Sicela uphinde ubuyekeze ",
		}),
		item11PrivacyLink: t({
			en: "Privacy Policy",
			zu: "Inqubomgomo Yobumfihlo",
		}),
	},
} satisfies Dictionary;

export default termsOfUseContent;
