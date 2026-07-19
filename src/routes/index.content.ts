import { type Dictionary, t } from "intlayer";

const indexContent = {
	key: "index",
	content: {
		heroTitle: t({
			en: "His Word",
			zu: "Izwi Lakhe",
		}),
		heroDescription: t({
			en: "A modern, high-performance Bible reading and study companion. Designed for absolute focus, running entirely offline, and engineered with deep respect for your privacy.",
			zu: "Umngane wanamuhla wokufunda nokutadisha iBhayibheli onejubane eliphezulu. Idizayinelwe ukugxila ngokuphelele, isebenza ngokungaxhunyiwe ku-inthanethi ngokuphelele, futhi yakhiwe ngenhlonipho ejulile yobumfihlo bakho.",
		}),
		quoteText1: t({
			en: '"In the beginning was the Word, and the Word was with God, and the Word was God." — John 1:1. The name His Word is inspired by this prologue, celebrating scripture as the living Word of God.',
			zu: '"Ekuqaleni kwakukhona uLizwi, uLizwi wayekuye uNkulunkulu, uLizwi wayenguNkulunkulu." — Johane 1:1. Igama elithi His Word liphefumulelwe yilesi singeniso, libungaza umbhalo ongcwele njengezwi eliphilayo likaNkulunkulu.',
		}),
		quoteText2Part1: t({
			en: 'In isiZulu, "His Word" translates to ',
			zu: 'NgesiZulu, "His Word" ihunyushwa ngokuthi ',
		}),
		quoteText2Part2: t({
			en: ", which was the original concept and name for the application. However, due to copyright restrictions regarding Zulu Bible translations, the app is currently available in English only.",
			zu: ", okuwumqondo wokuqala negama lesicelo. Nokho, ngenxa yemikhawulo ye-copyright mayelana nokuhunyushwa kweBhayibheli lesiZulu, i-app okwamanje itholakala ngesiNgisi kuphela.",
		}),
		howItWorksTitle: t({
			en: "How It Works",
			zu: "Ukusebenza Kwayo",
		}),
		step1Title: t({
			en: "1. Fast, Offline Reading",
			zu: "1. Ukufunda Okusheshayo Ngaphandle kwe-Inthanethi",
		}),
		step1Desc: t({
			en: "His Word stores Bible translations (ASV and WEB) locally on your device. Toggle between translations instantly, check your reading history, and resume exactly where you left off with spring-animated controls.",
			zu: "I-His Word igcina izinguqulo zeBhayibheli (ASV ne-WEB) endaweni kudivayisi yakho. Shintsha phakathi kwezinguqulo ngokushesha, hlola umlando wakho wokufunda, futhi uqhubeke lapho ugcine khona ngezilawuli ezinezithombe.",
		}),
		step2Title: t({
			en: "2. Study, Highlight & Journal",
			zu: "2. Funda, Gqamisa & Bhala phansi",
		}),
		step2Desc: t({
			en: "Long-press verses to highlight using custom theme-adaptive palettes. Author rich-text reflection entries directly inside the chapter reader to record your study notes.",
			zu: "Cindezela isikhathi eside amavesi ukuze uwagqamise usebenzisa amaphalethi ahambisana netimu. Bhala okufundile ngqo ngaphakathi komfundi wesahluko ukuze ugcine amanothi akho okutadisha.",
		}),
		step3Title: t({
			en: "3. Asynchronous Deep Search",
			zu: "3. Ukusesha Okujulile Okujwayelekile",
		}),
		step3Desc: t({
			en: "Search across all 66 books instantly. The search engine uses smart micro-task chunking to parse keywords over thousands of verses without blocking the UI thread, highlighting search keywords dynamically.",
			zu: "Sesha kuzo zonke izincwadi ezingama-66 ngokushesha. Injini yosesho isebenzisa ukwahlukanisa ukuhlunga amagama angukhiye emavesini ayizinkulungwane ngaphandle kokuvimba i-UI.",
		}),
		step4Title: t({
			en: "4. Tactile Shake & Share",
			zu: "4. Nyakazisa & Wabelane",
		}),
		step4Desc: t({
			en: "Export your journal entries or highlighted scriptures as beautiful high-res cards rendered on-device using a local canvas. Simply shake your device to capture and share content with haptic vibration confirmation.",
			zu: "Thumela okubhalile noma amavesi agqanyisiwe njengamakhadi amahle e-high-res akhiqizwa kudivayisi isebenzisa i-canvas yasendaweni. Nyakazisa idivayisi yakho ukuze uthwebule futhi wabelane ngokuqukethwe ngesikhumbuzi sokudlidliza.",
		}),
		underTheHoodTitle: t({
			en: "Under the Hood",
			zu: "Ngaphansi Kwendwangu",
		}),
		hoodCard1Title: t({
			en: "LRU Database Cache",
			zu: "I-LRU Database Cache",
		}),
		hoodCard1Desc: t({
			en: "Custom Least Recently Used cache system that keeps memory footprint minimal by loading book modules dynamically and caching only active books.",
			zu: "Isistimu yenqolobane ye-Least Recently Used (LRU) egcina inkumbulo incane ngokulayisha amamojula ezincwadi ngendlela eguquguqukayo nangokugcina izincwadi ezisebenzayo kuphela.",
		}),
		hoodCard2Title: t({
			en: "Multi-Theme Engine",
			zu: "Injini Yezinhlobonhlobo Zezihloko",
		}),
		hoodCard2Desc: t({
			en: "Built using Uniwind and custom Metro configurations. Instantly switches system accent variables across 4 premium color palettes (Green, Pink, Blue, Charcoal).",
			zu: "Yakhiwe isebenzisa i-Uniwind nokucushwa kwe-Metro. Ishintsha ngokushesha okuguquguqukayo kwesistimu phakathi kwamaphalethi emibala we-premium ama-4 (Eliluhlaza, Eliphinki, Eliluhlaza okwesibhakabhaka, Namalahle).",
		}),
		hoodCard3Title: t({
			en: "Local JSON / Storage",
			zu: "I-Local JSON / Isitore",
		}),
		hoodCard3Desc: t({
			en: "All metrics, reflections, historical reading records, bookmarks, and preferences are saved locally on-device. Zero cloud database latency or tracking.",
			zu: "Yonke imikhombandlela, okubhalile, amarekhodi wokufunda omlando, amabhukumaka, nezintandokazi kulondolozwa endaweni kudivayisi. Ukubambezeleka kwedatha yefu enguziro noma ukulandelela.",
		}),
		hoodCard4Title: t({
			en: "Canvas Share Engine",
			zu: "Injini Yokwabelana ye-Canvas",
		}),
		hoodCard4Desc: t({
			en: "Uses a localized off-screen WebView to dynamically compose and render typography into a high-res PNG image, which feeds directly into native sharing hooks.",
			zu: "Isebenzisa i-WebView yasendaweni engaphandle kwesikrini ukuze ibhale ngokuguquguqukayo futhi inikeze i-typography esithombeni se-PNG esiphezulu, esondla ngqo kumahuku okwabelana omndabu.",
		}),
	},
} satisfies Dictionary;

export default indexContent;
