import { type Dictionary, t } from "intlayer";

const faqContent = {
	key: "faq",
	content: {
		sectionTitle: t({
			en: "Frequently Asked Questions",
			zu: "Imibuzo Ejwayelekile Ukubuzwa",
		}),
		sectionSubtitle: t({
			en: "Everything you need to know about the His Word application features, performance, and data policies.",
			zu: "Konke odinga ukukwazi mayelana nezici ze-His Word, ukusebenza, nezinqubomgomo zemininingwane.",
		}),
		catAppTitle: t({
			en: "App & Features",
			zu: "I-App nezici",
		}),
		catAppDesc: t({
			en: "General questions about features, translations, and reading tools.",
			zu: "Imibuzo ejwayelekile mayelana nezici, ukuhunyushwa, namathuluzi okufunda.",
		}),
		q1Title: t({
			en: "What translations are supported in His Word?",
			zu: "Yiziphi izinguqulo ezisekelwa ku-His Word?",
		}),
		q1Content: t({
			en: "His Word includes the American Standard Version (ASV) and the World English Bible (WEB). Both translations are stored fully offline on your device, allowing you to switch between them instantly with zero network delay.",
			zu: "I-His Word ihlanganisa i-American Standard Version (ASV) ne-World English Bible (WEB). Zombili lezi zinguqulo zigcinwa ngokungaxhunyiwe ku-inthanethi ngokuphelele kudivayisi yakho, okukuvumela ukuthi ushintshe phakathi kwazo ngaphandle kokulibaziseka kwenethiwekhi.",
		}),
		q2Title: t({
			en: "Is His Word free to use, and are there ads?",
			zu: "Ingabe i-His Word imahhala ukuyisebenzisa, futhi kukhona izikhangiso?",
		}),
		q2Content: t({
			en: "Yes, His Word is 100% free, open-source, and does not contain any advertisements, subscription models, or hidden in-app purchases.",
			zu: "Yebo, i-His Word imahhala ngo-100%, ivulekile (open-source), futhi ayinazo izikhangiso, izindlela zokubhalisa, noma ukuthenga okufihliwe ngaphakathi kwe-app.",
		}),
		q3Title: t({
			en: "How do the daily devotionals and notifications work?",
			zu: "Isebenza kanjani imikhuleko yansuku zonke nezaziso?",
		}),
		q3Content: t({
			en: "The app features a custom notification queue that schedules devotionals locally on your device. It includes holiday-specific reminders (such as Christmas, Easter, and Good Friday) and automatically refreshes its internal queue to make sure you never miss a Verse of the Day.",
			zu: "I-app inohlu lwezaziso ezenziwe ngokwezifiso ezihlela imikhuleko yansuku zonke kudivayisi yakho. Kuhlanganisa nezikhumbuzi ezithile zamaholide (njengoKhisimusi, Iphasika, noLwesihlanu Olungcwele) futhi ivuselela ngokuzenzakalelayo uhlu lwayo lwangaphakathi ukuqinisekisa ukuthi awulahlekelwa yiVesi Losuku.",
		}),
		q4Title: t({
			en: "Does the app track what I read?",
			zu: "Ingabe i-app ilandelela lokho engikufundayo?",
		}),
		q4Content: t({
			en: "No. His Word features a local Reading History tracker that logs your last 10 reading sessions with deduplication and relative timestamps, but this log remains strictly on your device and is not shared with any analytics services.",
			zu: "Cha. I-His Word inesilandi somlando wokufunda sasendaweni esigcina izikhathi zakho zokugcina eziyishumi zokufunda, kodwa lo mlando uhlala kudivayisi yakho kuphela futhi awabelwa izinsiza ze-analytics.",
		}),
		q5Title: t({
			en: "Can I filter scriptures by testament or category?",
			zu: "Ngingakwazi ukuhlunga imibhalo ngeTestamente noma ngesigaba?",
		}),
		q5Content: t({
			en: "Yes. The search and navigation views include dynamic category tags (such as Law, History, Poetry, Gospels, or Epistles), allowing you to quickly filter search results and navigate to specific genres of biblical literature.",
			zu: "Yebo. Imibono yokusesha neyokuzulazula ihlanganisa amathegi ezigaba (njengoMthetho, Umlando, Izinkondlo, amaVangeli, noma iziBhalo), okukuvumela ukuthi uhlunge ngokushesha imiphumela yosesho.",
		}),
		catPrivacyTitle: t({
			en: "Privacy & Offline Access",
			zu: "Ubumfihlo Nokungaxhunyiwe ku-inthanethi",
		}),
		catPrivacyDesc: t({
			en: "How your data and connection status are managed.",
			zu: "Ukuthi idatha yakho nesimo sokuxhumana kulawulwa kanjani.",
		}),
		q6Title: t({
			en: "Where is my journaling and reading data stored?",
			zu: "Iphi idatha yami yokubhala nedatha yokufunda igcinwe khona?",
		}),
		q6Content: t({
			en: "All data—including your reflections, book bookmarks, reading logs, and color-coded verse highlights—is stored locally on your device using AsyncStorage. None of your data is ever uploaded to external databases or cloud servers.",
			zu: "Yonke idatha—kuhlanganise nokubhalile, amabhukumaka ebhuku, izingodo zokufunda, nokugqanyiswa kwamavesi ngemibala—igcinwa kudivayisi yakho isebenzisa i-AsyncStorage. Ayikho idatha yakho eyake yalayishwa kuma-database angaphandle noma amaseva wamafu.",
		}),
		q7Title: t({
			en: "Do I need an active internet connection to read?",
			zu: "Ingabe ngidinga uxhumano lwe-inthanethi olusebenzayo ukuze ngifunde?",
		}),
		q7Content: t({
			en: "No. His Word is designed as an offline-first application. Once installed, all Bible scriptures, search tools, and devotionals are accessible without internet, cellular data, or server connectivity.",
			zu: "Cha. I-His Word yakhelwe njenge-app esebenza ngaphandle kwe-inthanethi kuqala. Uma isifakiwe, yonke imibhalo yeBhayibheli, amathuluzi okusesha, nemikhuleko ifinyeleleka ngaphandle kwe-inthanethi.",
		}),
		q8Title: t({
			en: "What personal details are required to use the app?",
			zu: "Imiphi imininingwane yomuntu siqu edingekayo ukuze usebenzise i-app?",
		}),
		q8Content: t({
			en: "None. There are no sign-up forms, email verifications, profile creations, or social sign-ins. Your identity remains completely anonymous.",
			zu: "Ayikho. Azikho amafomu okubhalisa, ukuqinisekiswa kwe-imeyili, ukudalwa kwephrofayela, noma ukungena ngemithombo yezokuxhumana. Ubuwena buhlala buyimfihlo ngokuphelele.",
		}),
		catPerfTitle: t({
			en: "Performance & Hardware Sensors",
			zu: "Ukusebenza Nezinzwa Zehardware",
		}),
		catPerfDesc: t({
			en: "Details on advanced mobile capabilities, caching, and background threads.",
			zu: "Imininingwane emayelana namakhono eselula athuthukile, ukugcina okwesikhashana, nemicu yangemuva.",
		}),
		q9Title: t({
			en: "How does the 'Shake-to-Capture' sharing feature work?",
			zu: "Isebenza kanjani isici sokwabelana se-'Shake-to-Capture'?",
		}),
		q9Content: t({
			en: "When you shake your device, the app's accelerometer triggers a screenshot capture of your current reader layout. It uses native haptics to give you tactile feedback, then opens your system's share sheet to let you send or save the image.",
			zu: "Uma unyakazisa idivayisi yakho, inzwa yeselula iqalisa ukuthwebula isikrini sendlela ofunda ngayo njengamanje. Isebenzisa i-haptic yomdabu ukuze ikunikeze impendulo yokuthinta, bese ivula ishidi lokwabelana lesistimu yakho ukuze ikuvumele uthumele noma ugcine isithombe.",
		}),
		q10Title: t({
			en: "Why does the app request notification and sensor access?",
			zu: "Kungani i-app icela ukufinyelela kwesaziso nenzwa?",
		}),
		q10Content: t({
			en: "Notifications are requested to deliver your scheduled daily devotionals. Sensor (accelerometer) permissions are requested solely to detect the shake gesture for screen capturing. None of this data is collected or transmitted off your device.",
			zu: "Izaziso zicelwa ukuthi zilethe imikhuleko yakho yansuku zonke ehleliwe. Izimvume zenzwa zicelwa kuphela ukuthola ukunyakaza kokuthwebula isikrini. Ayikho kule datha eqoqwayo noma edluliselwa ngaphandle kwedivayisi yakho.",
		}),
		q11Title: t({
			en: "What is the LRU Bible module cache?",
			zu: "Yini inqolobane yemojula yeBhayibheli ye-LRU?",
		}),
		q11Content: t({
			en: "To keep the memory footprint minimal on older devices, the app utilizes a custom Least Recently Used (LRU) cache. It dynamically loads book translations when needed and limits active Bible files in memory to a maximum of 5, preventing memory bloat and app crashes.",
			zu: "Ukuze ugcine imemori incane kumadivayisi amadala, i-app isebenzisa inqolobane ye-Least Recently Used (LRU). Ilayisha izinguqulo zezincwadi uma kunesidingo futhi ikhawulela amafayela eBhayibheli asebenzayo ememorini afinyelele ku-5 ukuvikela ukuphahlazeka kwe-app.",
		}),
		q12Title: t({
			en: "How does the non-blocking search work?",
			zu: "Isebenza kanjani isesha engavimbeli?",
		}),
		q12Content: t({
			en: "Searching a massive text database on mobile can cause lag. His Word splits search queries into asynchronous batches (using timer chunk macros) to run on separate execution cycles. This allows the search bar to stay 100% responsive and lag-free while parsing the entire scripture.",
			zu: "Ukusesha i-database yombhalo omkhulu kuselula kungadala ukulibala. I-His Word ihlukanisa imibuzo yosesho ibe yamaqoqo asynchronous ukugwema ukulibazisa i-UI. Lokhu kuvumela ibha yosesho ukuthi ihlale isabela ngo-100% ngaphandle kokulibaziseka.",
		}),
		q13Title: t({
			en: "How does the high-fidelity image exporter work?",
			zu: "Isebenza kanjani isithekelisi sezithombe eziphezulu?",
		}),
		q13Content: t({
			en: "When you click share, the app uses a hidden WebView to render the scripture, your highlight colors, or reflection text onto a virtual HTML5 Canvas using premium typography. The canvas compiles this into a high-resolution PNG locally for sharing.",
			zu: "Uma uchofoza okwabelana, i-app isebenzisa i-WebView efihliwe ukukhombisa umbhalo, imibala yakho egqamile, noma umbhalo wokubhala ku-Virtual HTML5 Canvas isebenzisa i-typography ye-premium. Le canvas ihlanganisa lokhu kube yi-resolution ephezulu ye-PNG yasendaweni ukuze yabelane.",
		}),
		q14Title: t({
			en: "How can I submit bugs, request features, or contact the developer?",
			zu: "Ngingazithumela kanjani iziphazamisi, ngicele izici, noma ngithinte unjiniyela?",
		}),
		q14Content: t({
			en: "For support, bug submissions, or feature requests, you can email the developer directly at ",
			zu: "Ukuze uthole ukwesekwa, ukuthunyelwa kweziphazamisi, noma izicelo zezici, ungathumela i-imeyili kunjiniyela ngqo ku- ",
		}),
		q14LinkText: t({
			en: " Alternatively, if you want to engage directly and publicly with the developer, you can leave a comment on this ",
			zu: " Kungenjalo, uma ufuna ukuxhumana ngqo nonjiniyela esidlangalaleni, ungashiya umbono wakho kule ",
		}),
		q14BlogText: t({
			en: "blog post",
			zu: "bhulogi post",
		}),
	},
} satisfies Dictionary;

export default faqContent;
