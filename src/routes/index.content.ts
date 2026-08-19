import { type Dictionary, t } from "intlayer";

const indexContent = {
	key: "index",
	content: {
		heroTitle: t({
			en: "His Word",
			zu: "Izwi Lakhe",
		}),
		heroDescription: t({
			en: "A beautifully fast, offline-first Bible companion built for distraction-free reading, deep study, and absolute privacy.",
			zu: "Umngane weBhayibheli osheshayo, osebenza ngaphandle kwe-inthanethi owakhelwe ukufunda okungenaphazamiso, ukutadisha okujulile, kanye nobumfihlo obuphelele.",
		}),
		verseText: t({
			en: '"In the beginning was the Word, and the Word was with God, and the Word was God." — John 1:1',
			zu: '"Ekuqaleni kwakukhona uLizwi, uLizwi wayekuye uNkulunkulu, uLizwi wayenguNkulunkulu." — Johane 1:1',
		}),
		aboutText: t({
			en: 'Inspired by this prologue, His Word is built to celebrate scripture as the living Word of God. The app\'s original concept was titled Izwi Lakhe (isiZulu for "His Word"), but due to copyright restrictions regarding Zulu Bible translations, the companion is currently available in English only.',
			zu: 'I-His Word iphefumulelwe yilesi singeniso, yakhelwe ukubungaza umbhalo ongcwele njengezwi eliphilayo likaNkulunkulu. Umqondo wokuqala walolu hlelo lokusebenza wawunesihloko esithi Izwi Lakhe, kodwa ngenxa yemikhawulo ye-copyright mayelana nokuhunyushwa kweBhayibheli lesiZulu, lolu hlelo okwamanje lutholakala ngesiNgisi kuphela.',
		}),
		howItWorksTitle: t({
			en: "How It Works",
			zu: "Ukusebenza Kwayo",
		}),
		step1Title: t({
			en: "1. Fast, Offline Reading & Audio",
			zu: "1. Ukufunda Okusheshayo & Nomsindo Ongaxhunyiwe ku-Inthanethi",
		}),
		step1Desc: t({
			en: "His Word stores complete Bible translations (ASV and WEB) locally on your device. Switch translations instantly, listen to hands-free Text-to-Speech audio narration, and resume right where you left off with smooth spring animations.",
			zu: "I-His Word igcina izinguqulo eziphelele zeBhayibheli (ASV ne-WEB) ngqo kudivayisi yakho. Shintsha phakathi kwezinguqulo ngokushesha, lalela umsindo wokufundelwa (Text-to-Speech), futhi uqhubeke lapho ugcine khona ngezilawuli ezibushelelezi.",
		}),
		step2Title: t({
			en: "2. Study, Highlight & Journal",
			zu: "2. Tadisha, Gqamisa & Bhala Amanothi",
		}),
		step2Desc: t({
			en: "Highlight verses using curated theme-adaptive palettes and browse through a snap-to-page journal deck. Author rich-text reflection notes directly inside the chapter reader with privacy locks.",
			zu: "Gqamisa amavesi usebenzisa amaphalethi emibala ahambisana netimu yakho bese upheqa amakhadi amanothi. Bhala ukuzindla kwakho ngqo ngaphakathi komfundi wesahluko unelungelo lokukhiya amanothi ayimfihlo.",
		}),
		step3Title: t({
			en: "3. Non-Blocking Deep Search",
			zu: "3. Ukusesha Okujulile Okungenakubambezeleka",
		}),
		step3Desc: t({
			en: "Search across all 66 books instantly. The search engine leverages debounced asynchronous micro-tasks to parse thousands of verses without stuttering the UI, dynamically highlighting matching keywords.",
			zu: "Sesha kuzo zonke izincwadi ezingama-66 ngokushesha. Injini yosesho isebenzisa ukuhlukanisa imisebenzi emincane ukuze ihlole izinkulungwane zamavesi ngaphandle kokubambezela isikrini, igqamise amagama owaseshile.",
		}),
		step4Title: t({
			en: "4. Tactile Shake & Share",
			zu: "4. Nyakazisa & Wabelane",
		}),
		step4Desc: t({
			en: "Export your favorite scriptures and reflection notes as beautifully typeset, high-resolution cards. Simply shake your device while reading to capture and share content with gentle haptic confirmation.",
			zu: "Khipha amavesi owathandayo namanothi akho njengamakhadi amahle ekhwalithi ephezulu kakhulu. Nyakazisa idivayisi yakho ngenkathi ufunda ukuze uthwebule futhi wabelane ngamakhadi ngokuthinta okudlidlizayo.",
		}),
		underTheHoodTitle: t({
			en: "Under the Hood",
			zu: "Ubuchwepheshe Ngaphakathi",
		}),
		hoodCard1Title: t({
			en: "LRU Bible Cache & Instant Load",
			zu: "I-LRU Cache Yokulayisha Ngokushesha",
		}),
		hoodCard1Desc: t({
			en: "Custom Least Recently Used cache system that keeps memory footprint minimal by loading book modules dynamically and caching active chapters for instant navigation.",
			zu: "Isistimu yenqolobane ye-Least Recently Used (LRU) egcina ukusetshenziswa kwenkumbulo kuncane ngokulayisha amamojula ezincwadi ngokushesha nokugcina izahluko ezisebenzayo.",
		}),
		hoodCard2Title: t({
			en: "Uniwind Multi-Theme Engine",
			zu: "Injini Yezitayela ye-Uniwind",
		}),
		hoodCard2Desc: t({
			en: "Built with Uniwind (Tailwind CSS) and HeroUI Native. Instantly switches system accents across 4 curated themes (Default Green, Feminine Rose, Masculine Blue, Neutral Charcoal) in both light and dark modes.",
			zu: "Yakhiwe nge-Uniwind (Tailwind CSS) kanye ne-HeroUI Native. Ishintsha izitayela ngokushesha phakathi kwezindikimba ezi-4 (Okuluhlaza, Okubomvana, Okwesibhakabhaka, Namalahle) kokubili kwimodi ekhanyayo nemnyama.",
		}),
		hoodCard3Title: t({
			en: "100% Local Storage & Zero Telemetry",
			zu: "Isitore Sasendaweni Nozero Wokulandelela",
		}),
		hoodCard3Desc: t({
			en: "All highlights, reflections, reading logs, and preferences are stored exclusively on your device using local storage. No user accounts, analytics, cloud tracking, or latency.",
			zu: "Yonke imibhalo egqanyisiwe, amanothi, umlando wokufunda, nezintandokazi kulondolozwa endaweni kudivayisi yakho kuphela. Akukho ma-akhawunti, ukulandelela kwedatha, noma ukubambezeleka kwefu.",
		}),
		hoodCard4Title: t({
			en: "High-Res Canvas Share Engine",
			zu: "Injini Yokwenza Amakhadi e-Canvas",
		}),
		hoodCard4Desc: t({
			en: "Uses a localized off-screen canvas engine to dynamically compose custom typography and themes into crisp PNG cards, feeding directly into native OS share sheets.",
			zu: "Isebenzisa injini ye-canvas yasendaweni engaphandle kwesikrini ukuhlanganisa ubuciko bokubhala netimu ibe yisithombe se-PNG esisezingeni eliphezulu, esidluliselwa ngqo ewindini lokwabelana ledivayisi.",
		}),
	},
} satisfies Dictionary;

export default indexContent;
