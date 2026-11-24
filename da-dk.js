/* Hearty Journal Language Pack: Ver 16 */

var _h$ = {};

_h$["lang"] = "da-dk";

// common.head
_h$["h"] = _h$["h"] || {
	ok: "OK",
	qr: "QRkode_Hearty",
	copy: "Kopieret",
	err: "Serveren har travlt. Prøv igen senere.<br>Kontakt os, hvis problemet fortsætter",
	satisfy: ["Hej! Kan du lide Hearty Journal?", "Ja ~", "Nej"],
	rate: ["Din anmeldelse er vores største opmuntring", "Vil du give os 5 stjerner?", "Tak for din støtte", "Selv tak"],
	notify: ["Notifikationer er slået fra", "Du får ikke besked om nye beskeder eller fra pennevenner", "Slå til", "Ikke nu"],
	downloading: "Downloader"
};

// menu
_h$["m"] = _h$["m"] || {
	url: [
		"//go.hearty.me/hj-faq",
		"//go.hearty.me/hjse"
	],

	// JS
	no: "Nej",
	back: "Tilbage",
	nav: ["Menu", "Hearty Journal", "Min dagbog"],
	signout: ["Log ud", "Vil du logge ud?"],

	// DOMs
	avatar: [
		"Min konto", "Log ind", "VIP Premium"
	],
	menu: [
		"Dagens vers", "Alices gæstebog", "Opslagsvæg", "Hearty Blog", "Min dagbog", "Galleri", "Life Shop", "Opgrader", "Vejledning", "Om os", "Log ud", "til Windows", "til macOS", "Windows/macOS-app", "Mobilapp", "Sprog 語言", "Giv os 5 stjerner", "🐞 Fejlsøgning"
	]
};

// index
_h$["i"] = _h$["i"] || {
	passkey: [
		"Log ind med adgangsnøgle",
		"eller",
		"Ingen adgangsnøgle? Log ind med adgangskode, og opret en under Min konto",
		"Adgangsnøglen er fjernet. Log ind på en anden måde",
		"Bekræftelsen fik timeout. Prøv igen",
		"Login med adgangsnøgle mislykkedes. Prøv igen",
		"Kontoen er slettet eller suspenderet"
	],
	url: [
		"//go.hearty.me/hj-faq",
		"//go.hearty.me/hj-data",
		"//go.hearty.me/hj-terms",
		"//go.hearty.me/hj-privacy",
		"//go.hearty.me/hj-press",
		"//go.hearty.me/misstw"
	],

	// JS
	ok: ["OK"],
	no: ["Nej", "Annuller"],
	go: "Kom i gang",
	back: "Tilbage",
	copy: ["Kopiér", "Kopieret: "],
	email: [
		"E-mailen er bekræftet.", "E-mailen er allerede bekræftet.", "Linket er ugyldigt.", "Linket er beskadiget."
	],
	reset: [
		"Nulstil adgangskode",
		"Log ind automatisk",
		"Linket er ugyldigt.",
		"Ugyldigt Hearty ID.",
		"Nulstillingslink sendt. Tjek din indbakke.",
		"Nulstillingslink sendt til ***@$domain. Tjek din indbakke.",
		"Åbn $url for at tjekke din e-mail?",
		"Hearty ID findes ikke."
	],
	captcha: [
		"Sikkerhedstjek mislykkedes. Genindlæs siden.",
		"Gennemfør sikkerhedstjekket nedenfor."
	],
	ref: [
		"🎁 Du er inviteret af $user."
	],
	cookie: [
		"Slå cookies til i browseren for at logge ind.", "Sådan"
	],
	browser: [
		"Din browser er for gammel.", "Internet Explorer understøttes ikke længere."
	],
	signin: [
		"Log ind",
		"Logger ind som $user",
		"Ugyldigt Hearty ID",
		"$user findes ikke",
		"$user er ikke registreret",
		"$user er slettet eller suspenderet",
		"$user er suspenderet for regelbrud eller har bedt om sletning",
		"Forkert adgangskode",
		"Adgangskode: mindst 6 tegn",
		'Log ind på "$client" med Hearty ID'
	],
	signup: [
		"Hearty ID må kun bestå af bogstaver og tal",
		"Hearty ID skal være 4-20 tegn",
		"Ugyldig e-mailadresse",
		"Angiv en rigtig e-mail",
		"Adgangskode: 6-20 tegn",
		"Adgangskoderne er ikke ens",
		"⚠ Yahoo!-mail anbefales ikke.\nVil du stadig bruge den?",
		"Forkert e-mail eller adgangskode.",

		"$user er oprettet! Tjek din indbakke.",
		"$user er oprettet!",
		"$user findes allerede. Log ind.",
		"E-mailen er allerede registreret. Log ind.",
		"ID'et er optaget. Vælg et andet.",
		"Ugyldig e-mailadresse.",
		"Engangs-e-mails accepteres ikke.",
		"Beklager, prøv igen senere."
	],
	box: [
		"Opret konto",
		"Log ind",
		"Nulstil adgangskode",
		"Opret en konto",
		"Log ind på Hearty Journal",
		"Find Hearty ID | Nulstil adgangskode",
		"💡 Vælg dit ID (4-20 tegn)",
		"💡 Hearty ID / konto-e-mail"
	],
	timer: "Send igen ($min:$sec)",
	chat: [
		"Support",
		"Log ind for at få support.",
		"Kontakt os via e-mail",
		"Vores support-e-mail: "
	],
	id_notice: [
		"Dine data krypteres og synkroniseres til skyen.",
		"Dit Hearty ID er nøglen til dine data på alle enheder."
	],
	song: ["Harmony - 溫度日記", "Hearty Journals soundtrack"],
	404: "Ups, siden findes ikke.",

	// DOMs
	title: ["Hearty Journal 溫度日記", "Gem dine dyrebare minder"],
	topbar: [
		"Opret konto / Log ind", "Windows-app", "macOS-app"
	],
	slogan: [
		"Hearty Journal", "<br>gem dine dyrebare minder", ", ",
		"Udvalgt af Apple | 300.000+ glade brugere | 4,9 stjerner", "Forbindelsen er krypteret med TLS 1.3."
	],
	scroll: "Rul ned",
	preview: ["Forhåndsvis", "Luk"],
	feature: [
		"Altid hos dig", "Skriv tanker, følelser og private øjeblikke ned – sikkert.",
		"Smukt design", "Flotte temaer, søde klistermærker og skrifttyper",
		"Del med dine kære", "Til venner, familie og kærester",
		"Fokus på privatliv", "Hold din dagbog privat og sikker"
	],
	testimonial: [
		"Slut dig til 100.000+ glade brugere",
		"Hearty Journal er et fristed for sind og sjæl.", "Haitaibear, forfatter & psykolog",
		"Et dejligt sted at være sammen med mig selv.", "Cindy Liu",
		"Hearty er smuk og har masser af nyttige funktioner.", "Wu Chi",
		"Hearty hjalp mig gennem min depression. Jeg har det bedre nu.", "Yan-Xuan",
		"Nem at bruge på computer og mobil.", "Xiao-Jun"
	],
	press: [
		"Medier",
		"Bnext Media", "Free Group", "Aotter girls", "Womany", "Sheaspire", "SEinsights", "Taiwan Startup Stadium", "Innosquare, New Taipei", "UDN", "Vita News"
	],
	action: [
		"Klar til et sundere sind?", "Begynd at skrive"
	],
	rate: "Giv os 5 stjerner",
	footer: [
		"Sprog 語言",
		"til Windows",
		"til macOS",
		"Funktioner",
		"Anmeldelser",
		"Samarbejde",
		"Pressekit",
		"Vejledning",
		"Databeskyttelse",
		"Servicevilkår",
		"Privatlivspolitik",
		"Sikkerhedscertifikat",
		"Soundtrack",
		"Nien, stifter",
		"Jiayi, medstifter",
		"Varemærke",
		"Om os"
	],
	cookies: ["Ved at fortsætte accepterer du cookies og vores privatlivspolitik.", "OK"],
	copyright: "2016-"+new Date().getFullYear().toString()+" Hearty Creative Inc. og tilknyttede selskaber",
	isp: "hostet hos Cloudways",
	auth: [
		"Opret gratis konto",
		"Har du allerede en konto?",
		"Glemt ID/adgangskode",
		"Log ind nu",
		"Hearty ID", "💡 Hearty ID eller konto-e-mail",
		"Adgangskode", "🔑 6-20 tegn",
		"Gentag adgangskode", "🔑 Indtast adgangskoden igen", "Vis adgangskoder",
		"Husk mig", "Jeg accepterer vilkårene og privatlivspolitikken."
	],
	lang: "Skifter til: $lang"
};

// editor
_h$["e"] = _h$["e"] || {
	// JS
	url: [
		"//go.hearty.me/hj-faq",
		"//go.hearty.me/hj-data",
		"//bitly.com/3E0ZJ7Q"
	],
	ok: ["OK", "Forstået", "Selvfølgelig"],
	no: ["Nej", "Annuller"],
	retry: "Prøv igen",
	back: "Tilbage",
	gotop: "Top",
	signin: ["Log ind", "Log ind for at ", "bruge denne funktion"],
	signout: "Log ud",
	name: ["Mit kaldenavn", "Hvad er dit kaldenavn?<br>Navnet vises offentligt.", "Hej $name.", "Daglig påmindelse om at skrive?", "Ja, slå til"],
	get_stickers: ["Juhu! Du har fået en klistermærkepakke!", "Åbn gaven"],
	welcome: ["Hej $name", "Gå til min dagbog", "Klik for at logge ind"],
	year: "", // CE
	maintenance: ["Planlagt vedligeholdelse: ", "ca. 1 times nedetid"],
	update: ["Der er en ny version af Hearty Journal.", "Opdater nu", "Påmind mig i morgen"],
	search: ["Søg i opslag", "søgeord", "Søg", "Ingen resultater"],
	bookmark: [
		"1 favorit",
		"$no favoritter",
		"Favorit",
		"Uden titel"
	],
	catalog: [
		"1 opslag",
		"$no opslag",
		"Nyt opslag",
		"Ingen opslag",
		"Ingen opslag fra din penneven",
		"Dette er det første eller sidste opslag.",
		"Ingen opslag at vise",
		"Forrige",
		"Næste"
	],
	sticker: ["Zoom ind", "Rotér", "Indsæt", "Fjernet", "Vil du have flere klistermærker?", "Opgrader til VIP Premium"],
	verify_required: [
		"Opdater din profil og bekræft dit $item for at $act.",
		"telefonnummer", "se oplysningerne",
		"ændre et opslags synlighed", "dele opslag på opslagsvæggen", "tilføje en penneven", "dele dit opslag med en penneven"
	],
	privacy: [
		"Opslaget er nu offentligt", "Opslaget er nu privat",
		'Dit opslag gennemgås for at sikre, at det følger <a target="_blank" href="//go.hearty.me/publish"><u>reglerne for offentlige opslag</u></a>. ',
		"Det deles offentligt, når det er godkendt.",
		"Det offentliggøres, når det er godkendt.",
		"Undgå dubletter, vent på godkendelse. (;´ㅁ`)-3"
	],
	publish: [
		"Opslag på væggen: mindst 100 tegn. Skriv lidt mere.",
		"OK, jeg har en idé!",
		'Vil du dele "$title" på opslagsvæggen?',
		"Gør opslaget offentligt og del det på væggen?",
		"Del",
		'"$title" er delt.',
		"Se det",
		"Tilbage",
		'Følg <a target="_blank" href="//go.hearty.me/publish"><u>[reglerne for offentlige opslag]</u></a>. <small>Del ikke personlige oplysninger.</small>',
		'Vil du fjerne "$title" fra væggen?',
		"Ja",
		"Opslaget er fjernet fra væggen",
		"Ét opslag på væggen om dagen."
	],
	penpal_add: [
		"Inviter en penneven. Indtast Hearty ID eller e-mail: ",
		"Lite: op til 2 pennevenner; VIP Premium: ubegrænset.",
		"Hearty ID eller konto-e-mail",
		"inviter",
		"Opgrader for flere pennevenner.",
		'Inviter "<b>$name</b>" (Hearty ID: $user) som penneven?',
		"$name er nu din penneven",
		'"$user" er allerede din penneven',
		'"$user" findes ikke',
		'Ups, du er blokeret af "$user".',
		"Ups, du kan ikke invitere dig selv."
	],
	penpal_delete: [
		"Pennevennen fjernes, og I kan ikke tilføje hinanden igen. Delte opslag stopper straks med at være delt. (Kan ikke fortrydes)",
		"Vælg en penneven, der skal slettes",
		"- Vælg en person -",
		'Vil du slette "$user" fra din liste?',
		"Ja",
		'"$user" er slettet.'
	],
	penpal_send: [
		"Delt med $add",
		"Indstillinger opdateret"
	],
	pin: [
		"Support-PIN: ", "Support-PIN bekræfter din identitet, når du kontakter os."
	],
	chat: [
		"Hearty ID: "
	],
	membership: [
		"Lite", "VIP Premium (gratis prøve)", "VIP Premium"
	],
	feedback: [
		"Sag nr. #$no",
		"Angiv dit navn.",
		"Ugyldig e-mail.",
		"Din tekst er for kort.",
		", tak for din henvendelse. Du får svar på e-mail inden for 24 arbejdstimer. Tjek også spam.",
		"OK",
		"Læs mere om VIP Premium",
		"Ups, prøv igen senere."
	],
	video: [
		"YouTube-link",
		"eller klik her for at uploade",
		"Indstil",
		"Føj til playliste",
		"Video vedhæftet",
		"Ugyldigt YouTube-link",
		"Videoen er måske privat, slettet eller kan ikke indlejres",
		"Tjek linket",
		'Vil du fjerne "$title"?',
		"Fjern",
		"Indstil (eller lad stå tomt for at rydde)", // 預留未使用
		"https://youtu.be/vYFnZdUiUyg (eller lad stå tomt for at rydde)"
	],
	yt: [
		"Playliste",
		"Sortér",
		"Fjern",
		"Sluk lyset",
		"Klik ➕ for at tilføje en sang, du elsker",
		"Lyt til yndlingssange, mens du skriver.",
		"Mine yndlingssange",
		"Afspil"
	],
	gps: [
		"Vil du tilføje vejrdata til opslaget?",
		'⛅ TILLAD placeringsanmodningen, og vent et par sekunder.',
		"Vejrdata tilføjet",
		"Intet GPS-signal",
		"Se beskeden i adresselinjen."
	],
	chars_max: [
		"Opslaget har $chars tegn; grænsen er 10.000 (inkl. symboler).",
		"Har nogen mon set denne besked?"
	],
	chars: [
		"$chars tegn overskrider Lite-grænsen ($limit tegn).",
		"Tilbud på VIP Premium",
		"Påmind mig senere"
	],
	leave: "Du har muligvis ikke-gemte ændringer.",
	date: ["Dato", "Ændret: ", "Efter dato, nyeste først."],
	subject: ["Nyt opslag, $date", "Titel", 'Ny titel "$title"', "Opdater"],
	archive: [
		'Vil du fjerne "$title"? (Kan ikke fortrydes)', "Fjern og glem", '"$title" er fjernet'
	],
	unsafe: "Google Safe Browsing: linket er skadeligt.",
	offline: "Ustabilt netværk",
	lock: [
		"Slå kodelås (2FA) til?",
		"Slå til",
		"Slå kodelås fra",
		"Lås slået fra",
		"Jeg har glemt begge.",
		"Glemt både <u>låsekoden</u> og <u>adgangskoden</u>? Log ud og nulstil adgangskoden. Kodelåsen slås derefter fra."
	],
	pincode: [
		"Indtast din kode",
		"Bekræft din kode",
		"Indtast låsekoden eller din adgangskode",
		"Forkert kode",
		"Koderne er ikke ens",
		"Indtast koden igen",
		"Koden må kun bestå af tal",
		"Lås slået til. Din kode er: $pin."
	],
	screenshot: "Billedet genereres. Download starter inden for 10 sek.",
	pc: [
		"Hent desktop-app", 'Besøg "www.hearty.me" <i class="fal fa-globe"></i> på din PC/Mac.',
		"Fordele ved desktop-appen", "Nemmere at læse på en større skærm", "Behageligt at skrive på tastatur", "Synkroniser på tværs af alle enheder", "Prøv det"
	],
	picture: [
		"Upload billede",
		"Vælg et billede (JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Upload",
		"Vælg igen",
		"Op til 10 billeder pr. opslag.",
		"$ext understøttes ikke, kun JPG, PNG, GIF, WebP, AVIF og HEIC",
		"Billede uploadet",
		"Download starter om lidt",
		"Billedet er i mappen Overførsler"
	],
	picture_err: [
		"Formatet eller filtypen understøttes ikke (kun JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Billedet er over 6 MB; komprimer det først",
		"Billedet kan ikke læses eller er beskadiget",
		"HEIC/HEIF-konvertering mislykkedes. Prøv et andet billede."
	],
	picture_remove: [
		"Vil du fjerne billedet? (Kan ikke fortrydes)", "Fjern", "Billede fjernet"
	],
	file: "Hearty_Journal",
	trial: [
		"Velkomstgave: 30 dages gratis VIP Premium med alle funktioner.",
		"Efter $exp bliver du IKKE opkrævet, men skifter automatisk til gratis Lite. Alle dine opslag bevares. ( ´･ヮ･) ♡",
		"Læs mere",
		"Begynd at skrive"
	],
	purchased: [
		"Din VIP Premium er klar!",
		"Har du 3 minutter til feedback?",
		"7 dages gratis Premium for din første undersøgelse!",
		"Tag undersøgelsen",
		"Ikke nu (eller allerede udfyldt)"
	],
	n_verify_email: [
		"Bekræft din $item for at låse op for flere funktioner",
		"Bekræft din e-mail for at modtage svar."
	],
	n_verify_phone: "Bekræft telefonnummer for bedre sikkerhed",
	n_vip_prefix: "Din VIP-plan",
	n_char_limit_exceed: "$chars tegn – Lite-grænsen er nået.",
	n_daily_checkin: [
		"Dit point venter – tjek ind nu!",
		"Du har tjekket ind i dag."
	],
	checkin: [
		"Tjek ind",
		"Mine Hearty-point: ", "P",
		"Daglig belønning: 1P",
		"Du fik 1P. Du har nu $pP.",
		"Du har allerede tjekket ind i dag.",
		"Kom tilbage i morgen.",
		"Hearty-point: optjen og brug point. Belønninger annonceres senere."
	],
	reward: [
		"Se belønninger"
	],
	pd: [
		"Menstruationskalender",
		"Næste: ",
		"Gns. cyklus: ",
		"dage",
		"Start",
		"Slut",
		"Cyklus",
		"Tilføj",

		"I dag",
		"Fjern",
		"Vil du fjerne registreringen?",
		"Dag $d", // Eng: $d$th
		"Næste: om $d dage"
	],

	// customize my journal
	headline: [
		"Overskrift",
		"Indtast en ny overskrift til din dagbog",
		"Gem",
		'Ny overskrift: "$headline"',
		"kan være tom"
	],
	style: [
		"Tilpas min dagbog",
		"Skift til standard",
		"Brug for inspiration?",
		"//en.faq.hearty.me/tutorial/styles"
	],
	cover: [
		"Forsidebillede",
		"Upload forsidebillede",
		"Bedste format: 1,9:1",
		"Bekræft", // crop
		"Annuller",
		"Billedformatet understøttes ikke: $ext.",
		"Forsidebillede uploadet",
		"Forsidebillede nulstillet"
	],
	bg: [
		"Baggrundsbillede",
		"Upload baggrundsbillede",
		"Billedformatet understøttes ikke: $ext.",
		"Baggrundsbillede opdateret",
		"Baggrundsbillede nulstillet"
	],
	color: [
		"Vælg en farve",
		"Farve opdateret"
	],

	// DOMs
	title: "Min dagbog",
	header: [
		"Dagbøger", "Notifikationer", "Klistermærker", "Priser", "Hjælpecenter", "Færdig"
	],
	notification: [
		"Ingen ulæste notifikationer",
		"Desktop-app",
		"Hjælpecenter",
		"Genindlæs",
		"Fejlsøgningstilstand",
		"Få VIP Premium-funktioner"
	],
	link: [
		"Eksternt link",
		"Scannet af Google Safe Browsing",
		"Gå til"
	],
	share: [
		"Synlighed", "Link", "Privat", "Kodebeskyttet", "Offentlig", "Del på væggen", "Opslag med private oplysninger må ikke være offentlige."
	],
	penpal: [
		"Penneven", "Inviter penneven", "Slet penneven", "Ingen pennevenner endnu", "Del med: "
	],
	qa: [
		"Hjælpecenter", "Generelt & funktioner", "Konto & betaling", "Datasikkerhed & privatliv", "Netværkstest", "Fejlrapport & henvendelse", "Driftsstatus", "Alle systemer kører"
	],
	cs: [
		"Send en henvendelse", "Spørgsmål om funktioner? Klik her.", "Feedback, fejlrapport eller et kram",
		"Du får snart svar på e-mail.", "Send", "Min support-PIN: ",
		"Betafunktioner slået til"
	],
	csform: ["Navn", "VIP Premium", "Lite", "Vedhæftning"],
	gift: [
		"Få dine klistermærker", "Åbn gaven", "50 eksklusive klistermærker"
	],
	prologue: "Hvordan var din dag?",
	pwd: "Kodebeskyttet",
	warn: [
		"Planlagt vedligeholdelse", "Langsomt netværk", "Ustabilt netværk", "Lavt batteri"
	],
	tool: [
		"Gem", "Nyt opslag", "Fjern", "Del", "Gem som billede", "Forrige opslag", "Næste opslag", "Fuld skærm", "Åbn bog", "Bladr"
	],
	rmenu: [
		"Hjælpecenter", "Om", "Fuld skærm", "繁/简", "Større skrift", "Mindre skrift", "Bladr", "Lodret læsetilstand"
	],
	image: [
		"Billede", "Rotér", "Filtre", "Download", "Fjern"
	],
	tab: [
		"Mine", "Pennevens",
		"🔍 Søg", "🔖 Favoritter", "🎧 Playliste", "🌙 Menstruationskalender", "🔒 Kodelås",
		"Hjælpecenter", "Berøringsbevægelser", "Bevægelser for klistermærker"
	],
	book: [
		"Om", "I en travl tid er Hearty Journal et varmt og roligt fristed, hvor man kan lægge trætheden fra sig, betro sig om uudtalt frygt og genfinde sit ægte jeg. Himlen er ikke altid blå, men vi forbliver standhaftige og blide."
	],
	promo: ["[Særtilbud] 3 måneder VIP Premium for NT$99"],
	403: "Log ind for at læse det private opslag. 🔒",
	404: "Ups, linket til opslaget er måske forkert.",
	tutorial: [
		"//i.hearty.app/b/images/tutorials/en/m1.jpg",
		"//i.hearty.app/b/images/tutorials/en/m2.jpg",
		"//i.hearty.app/b/images/tutorials/en/m3.jpg",
		"//i.hearty.app/b/images/tutorials/en/m4.jpg",
		"//i.hearty.app/b/images/tutorials/en/d1.jpg",
		"//i.hearty.app/b/images/tutorials/en/d2.jpg",
		"//i.hearty.app/b/images/tutorials/en/d3.jpg",
		"//i.hearty.app/b/images/tutorials/en/d4.jpg"
	],
	stickers: ["Alle klistermærker", // Start with 1
		"Ord", "Vejr", "Humør", "Hverdag", "Påklædning", "Dagligdags ting", "Mad", "Rejser & landskaber", "Årstider & højtider", "Planter", "Dyr", "Søde figurer", "Fantasy"
	]
};

// pricing
_h$["p"] = _h$["p"] || {
	url: [
		"//go.hearty.me/why-VIP",
		"//go.hearty.me/hj-terms",
		"//go.hearty.me/hj-privacy"
	],
	lite: ["Lite", "Gratis"],
	vip: ["Hearty VIP Premium", "VIP Premium", "(gratis prøve)"],
	feat_lite: [
		"Fokus på privatliv, ingen reklamer",
		"Tekst (grænse: 5.785 tegn)",
		"90 klistermærker & 20 lækre skrifttyper",
		"Lokalt vejr, daglig påmindelse",
		"Del med pennevenner (op til 2)",
		"Kodelås, playliste & menstruationskalender",
		"Virker på iOS, Android, Windows & macOS",
		"Automatisk skysynk via Amazon Web Services",
		"Krypteret forbindelse med TLS 1.3",
		"Lavet med ♥ i Taiwan",
	],
	feat_vip: [
		"alle Lite-funktioner, plus: ",
		"Ubegrænset tekst",
		"Billeder i opslag (op til 10)",
		"Galleri med 15 fotoeffekter",
		"1.300+ klistermærker (løbende opdateret)",
		"Tilføj dine yndlingsvideoer fra YouTube",
		"Tilpas forside & baggrund",
		"Omdøb dagbog & ret datoer",
		"Nem søgning",
		"Eksportér som Word, TXT eller billeder"
	],
	remark: [
		"Hvorfor opgradere til VIP Premium?",
		"[Førstekøb] 3 måneder VIP Premium for NT$99",
		"betales månedligt, kan opsiges når som helst",
		"30 dages pengene-tilbage-garanti for nye kunder",
		"Premium-funktioner"
	],
	act: [
		"Opret gratis konto", "Start gratis prøve (30 dage)", "Opgraderingstilbud", "Forny nu", "Log ind for at opgradere"
	],
	deposit: ["Forudbetalt", "Køb nu", "Kreditkort, Google Pay, Alipay, taiwansk ATM"],
	subscription: ["Månedsplan", "Abonnér nu", "(kreditkorttilbud)", "Kun NT$99 / 3 måneder ved første køb", "Fornyes til NT$99/md.", "Kreditkort accepteres"],
	selected: ["Valgt", "Bedst"],
	currency: ["Ud fra den aktuelle valutakurs, "],
	term: [
		"3 måneder", "6 måneder", "1 år"
	],
	unit: [
		"Månedligt", "Måned"
	],
	subtotal: "Subtotal: NT$",
	powerby: "Leveret af",
	redeem: "Indløs din gave",

	due: "Mit abonnement",
	due_active: ["Aktivt abonnement"],
	due_date: ["Udløber ", "", "derefter skifter du til Lite"],
	due_days: ["Udløber om ", " dage", "derefter skifter du til Lite"],
	due_tomorrow: ["Udløber i morgen", "derefter skifter du til Lite"],
	due_today: ["Udløber i dag", "derefter skifter du til Lite"],
	iap_ios: [
		"Fornyes automatisk hver måned, opsig når som helst",
		"[Hearty Journal] Abonnementsvilkår for iOS",
		"Lite er begrænset; VIP giver fuld adgang",
		"Fornyes månedligt til prisen ved første køb",
		"Fornyes og opkræves automatisk via din Apple-konto",
		"En påbegyndt periode kan ikke opsiges eller refunderes",
		"Fornyes automatisk 24 timer før udløb; opsig i god tid, hvis du ikke vil fortsætte",
		"Administrer eller skift plan når som helst under Apple-konto > Abonnementer",
		"Vi beder aldrig om bankoverførsler over telefonen; kontakt politiet ved mistanke om svindel",
		"Køb afslutter prøveperioden straks. Vil du prøve længere, så abonnér bagefter",
		"Servicevilkår",
		"Privatlivspolitik"
	],
	iap_and: [
		"Fornyes automatisk hver måned, opsig når som helst",
		"[Hearty Journal] Abonnementsvilkår for Android",
		"Lite er begrænset; VIP giver fuld adgang",
		"Fornyes månedligt til prisen ved første køb",
		"Fornyes og opkræves automatisk via Google Play",
		"En påbegyndt periode kan ikke opsiges eller refunderes",
		"Fornyes automatisk 24 timer før udløb; opsig i god tid, hvis du ikke vil fortsætte",
		"Administrer eller skift plan når som helst under Google Play > Betalinger og abonnementer",
		"Vi beder aldrig om bankoverførsler over telefonen; kontakt politiet ved mistanke om svindel",
		"",
		"Servicevilkår",
		"Privatlivspolitik"
	]
};

// Alice
_h$["A"] = _h$["A"] || {
	// JS
	signin: ["Log ind", "Log ind for at svare", "Log ind først"],
	back: "Tilbage",
	no: "Nej",
	no_post: "Ups, artiklen findes ikke.",
	penpal_guest: ["Det er din $day. dag på Hearty Journal. Skriv i mindst 7 dage for at se pennevenner.", "Forstået"], // Eng: $day$th
	comment_limit: [
		"Måske en dobbeltkommentar. Tryk for at fjerne eller rette de tidligere.",
		"$chars tegn; kommentarer højst 85 tegn.",
		"Kommentarer skal være mindst 4 tegn."
	],
	comment_ban: [
		"Kommentaren vises efter godkendelse.",
		"Beklager besværet. 🥺",
		"Husk at følge ",
		"reglerne for offentlige opslag."
	],
	comment_edit: ["Ret kommentaren?", "Ja"],
	report_ask: ["Anmeld kommentaren for misbrug/spam?", "Anmeld", "Tak for din anmeldelse."],
	url: ["Kopiér", "Link til artiklen", "Download QR-kode"],
	penpal_add: ['Inviter "<b>$id</b>" som penneven?', "For gode samtaler: højst 2 pennevenner.", "Næste"],
	verify: ["Bekræft først din e-mail og dit telefonnummer.", "Min konto"],

	// DOMs
	title: "Alices gæstebog",
	board: "Alices gæstebog",
	tabs: ["Kommentarer", "Artikeloversigt", "Pennevenner", "Del", "Giv os 5 stjerner", "Flaskepost"],
	comment: ["Svar", "Log ind for at svare", "For mange tegn (maks. 85)"],
	profile: ["Inviter som penneven", "Min dagbog"],
	gotop: "Top",
	goleft: "Tilbage"
};

// feed
_h$["f"] = _h$["f"] || {
	// JS
	refresh: ["Indlæser", "Træk ned", "Slip for at opdatere"],
	signin: ["Log ind", "Log ind for at bruge funktionen"],
	no: "Annuller",
	url: ["Kopiér", "Link til opslag & QR-kode"],
	publish_ask: ["Vil du dele dit opslag på opslagsvæggen?", "Tryk på", "i din dagbog for at dele et opslag.", "Forstået", "Min dagbog"],
	report_ask: ['Anmeld "$title" for misbrug/spam?', "Anmeld", '"$title" er anmeldt. Tak.'],

	// DOMs
	title: "Opslagsvæg (side $p)",
	share: "Del",
	report: "Anmeld misbrug",
	focus_post: "Vis på væggen",
	posts: "Læs offentlige opslag",
	publish: "Del",
	gotop: "Til toppen",
	back: "Tilbage",
	health: ["Sundhedsinfo finder du på CDC's websted. ( • ̀ω•́ )", "//www.cdc.gov.tw"]
};

// img
_h$["I"] = _h$["I"] || {
	title: "Galleri",
	upload: "Upload et billede",
	empty: ["Ingen billeder uploadet", "Tilføj et nu?"],
	add: "Tilføj billeder",
	gotop: "Til toppen",
	layout: ["Gitter", "Murværk"]
};

// account
_h$["a"] = _h$["a"] || {
	passkey: [
		"Adgangsnøgler",
		"Tilføj adgangsnøgle",
		"Ingen adgangsnøgler endnu",
		"Hvad er en adgangsnøgle?",
		"Med en adgangsnøgle logger du ind med enhedens Face ID, fingeraftryk eller skærmlås – uden ID og adgangskode, og beskyttet mod phishing.<br><br>Adgangsnøgler gemmes på din enhed eller i en adgangskodeadministrator (fx iCloud-nøglering eller Google Adgangskodeadministrator). Hearty Journal gemmer kun en offentlig nøgle, som ikke kan bruges til at logge ind.<br><br>Fjerner du en adgangsnøgle, logges indloggede enheder ikke ud. Skifter du Hearty ID, kan adgangskodeadministratoren vise det gamle navn; det påvirker ikke login.",
		"Derefter kan du logge ind uden ID og adgangskode",
		"Omdøb",
		"Navn på adgangsnøgle (op til 20 tegn)",
		"Navnet skal være 1-20 tegn",
		"Fjern",
		"Fjern \"$name\"?<br>Du kan ikke længere logge ind med den. Indloggede enheder forbliver logget ind.<br>Slet den også i din adgangskodeadministrator.",
		"Din sidste adgangsnøgle, og kontoen har ingen adgangskode. Derefter kun login med ekstern konto.",
		"Enheden er logget ind med adgangsnøglen og forbliver logget ind.",
		"Adgangsnøgle fjernet",
		"Synkroniseres til dine andre enheder",
		"Kun på denne enhed",
		"Ikke synkroniseret endnu",
		"I brug nu",
		"Oprettet $date",
		"Sidst brugt $date",
		"Aldrig brugt",
		"Indtast nuværende adgangskode for at bekræfte",
		"Forkert adgangskode",
		"Maks. 10 adgangsnøgler. Fjern en, du ikke bruger",
		"Enheden eller adgangskodeadministratoren har allerede en adgangsnøgle",
		"Adgangsnøgle oprettet! Brug den næste gang",
		"Bekræft med en eksisterende adgangsnøgle",
		"Næste",
		"Timeout. Prøv igen",
		"For mange forsøg. Prøv igen om 15 minutter"
	],
	// JS
	ok: ["OK", "Bekræft", "Selvfølgelig", "Korrekt"],
	next: "Næste",
	no: "Nej",
	back: "Tilbage",
	upload: "Upload",
	rotate: "Rotér",
	retry: "Prøv igen",
	signin: ["Log ind", "Log ind for at bruge funktionen"],
	usage: "Du har skrevet $chars tegn i $num opslag.",
	points: "$p point (se belønninger)",
	year: "", // CE
	bday_ask: ["Er $bday din fødselsdag?", "Fødselsdatoen kan ikke ændres.", "Fødselsdag opdateret"],
	age: "$age år",
	nickname_edited: '"$n" er dit nye kaldenavn',
	pwd_edit: "Skift adgangskode",
	pwd_edited: "Ændret",
	pwd_enter: "Indtast din nye adgangskode.",
	pwd_confirm: "Indtast igen for at bekræfte.",
	pwd_invalid: "Adgangskode: 6-20 tegn. Prøv igen.",
	pwd_mismatch: "Adgangskoderne er ikke ens. Prøv igen.",
	pwd_format: "6-20 tegn",
	pwd_apply: ["Skift", "Bekræft"],
	pwd_ok: ["Adgangskoden er ændret. Brug den nye næste gang.",
				"Hold din adgangskode hemmelig."],
	avatar: ["Vælg et billede (JPG, PNG, GIF, WebP, AVIF, HEIC)", "$ext understøttes ikke, kun JPG, PNG, GIF, WebP, AVIF og HEIC", "Vælg igen", "Profilbillede uploadet"],
	avatar_err: [
		"Formatet eller filtypen understøttes ikke (kun JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Billedet er over 6 MB; komprimer det først",
		"Billedet kan ikke læses eller er beskadiget",
		"HEIC/HEIF-konvertering mislykkedes. Prøv et andet billede."
	],
	email_new: "Skift konto-e-mail",
	email_confirm: 'Vil du skifte din e-mail til "$email"?',
	email_invalid: "Ugyldig e-mailadresse",
	email_verify: ["Bekræft din e-mail for at ", "låse op for flere funktioner.", "Bekræft nu"],
	email_send: "Send bekræftelsesmail igen?",
	email_sent: ["Bekræftelsesmail sendt. Tjek e-mail hos $isp?",
				"Bekræftelsesmail sendt. Tjek din indbakke."],
	email_verified: "E-mailen er allerede bekræftet.",
	pin: ["Support-PIN: $pin<br><small>(Bekræfter din identitet, når du kontakter os.)</small>", "Download"],
	font: [
		"Lækre skrifttyper",
		"i/fonts_en.png",
		"Bruger Justfont-webfonts samt kommercielle og open source-skrifttyper.",
		"Licenser"
	],
	font_change: 'Skifter skrifttype: "$font". Vent venligst.',
	gender_edited: "Køn ændret",
	newsletter_edited: "Ændring gemt",
	lang: "Skifter til: $lang",
	timezone_edited: 'Tidszone sat til "$tz"',
	id: "Hearty ID: ",
	id_edit: "Skift mit ID",
	id_public: "Hearty ID og kaldenavn er offentlige",
	id_new: "Indtast dit nye ID",
	id_format: "Bogstaver og tal, 4-20 tegn. ID kan kun skiftes én gang.",
	id_invalid: "ID'et opfylder ikke kravene.",
	id_same: "Det skal være forskelligt fra det nuværende.",
	id_taken: '<b>"$id"</b> er optaget. Vælg et andet.',
	id_edited: 'Dit Hearty ID er nu "<b>$id</b>"',
	id_signout: "Log ind med dit nye Hearty ID",
	dl: "Eksportér til TXT-fil",
	dl_pc: 'Åbn "<u>www.hearty.me</u>" på en computer for at downloade din backup.',
	dl_pwd: ["Indtast adgangskode for at dekryptere", "Adgangskode (6-20 tegn)", "Eksportér til TXT-fil", "Eksporten er startet", "Backup eksporteret til Overførsler. Opbevar filen sikkert."],
	dl_fmt: ["Vælg backupformat", "Tekstfil (.txt)", "Word-dokument med billeder (.docx)", "Næste"],
	dl_doc: ["$posts opslag, $images billeder<br>Konverteringen kan tage få minutter til over en halv time", "Start eksport", "Konverterer: $done / $total billeder", "Konverterer, vent venligst", "Word-dokumentet er gemt. Opbevar det sikkert.", "$n billeder kunne ikke indlæses og blev sprunget over", "Eksporten blev afbrudt. Prøv igen senere.", "Word-eksport kun i Chrome eller Edge på computer; ellers vælg tekstfil.", "Eksporteret $date · $posts opslag", "Forkert adgangskode. Prøv igen.", "Ingen opslag at eksportere endnu", "Eksportér til Word"],
	vip_only: ["Denne funktion", " er kun for VIP.", "Opgraderingstilbud", "Ikke nu"],
	suspend: ["Vil du virkelig slette din konto? Du kan bare beholde den! Vi lancerer løbende nye funktioner og klistermærker – måske kigger du forbi igen.", "Eller klik <u>her</u> for at skifte ID", "Slet den", "Behold den"],
	auth_log: ["Seneste kontoaktivitet", "$browser, $device", "Øg sikkerheden", "//go.hearty.me/hj-sec"],
	redeem: ["Kuponkode", "Indløs"],
	coupon_ok: ['"$coupon" er indløst og afventer gennemgang.',
				"Efter gennemgang får du kredit inden for 3 arbejdsdage. Se [Planoplysninger]."],
	voucher_ok: 'Koden "$code" er indløst! Du har fået $days dages VIP-adgang, gyldig til $exp.',
	voucher_invalid: "Kuponkoden er allerede indløst eller ugyldig.",
	voucher_disqualified: "Én prøvekupon pr. konto, og du har allerede indløst en.",
	voucher_vvip: [
		"VVIP-loyalitetstilbud",
		"40 % rabat på årlig fornyelse (forudbetalt)",
		"Køb"
	],
	voucher_ec: [
		"Dette er en <u>gavekupon til Hearty Life Shop</u>.",
		"Shop nu"
	],

	// DOMs
	title: "Min konto",
	tab: ["Min konto", "Planoplysninger"],
	headline: ["Bog"], // deprecated
	nickname: ["Kaldenavn", "Opdater"],
	pincode: "Support-PIN",
	bday: "Fødselsdag",
	email: ["Send bekræftelsesmail", "Send bekræftelsesmail igen", " sek. til gensendelse"],
	style: ["Design", "Tilpas min dagbog"],
	gender: ["Køn", "Mand", "Kvinde"],
	phone: ["Mobil", "Bekræft telefonnummer"],
	pwd: "Adgangskode",
	pfont: ["Skrifttype", "Forhåndsvisning"],
	language: "Sprog",
	timezone: "Tidszone",
	newsletter: ["Nyhedsbrev", "Tilmeld (nyheder og historier af og til)"],
	reminder: ["Daglig påmindelse", "Mind mig om at skrive"],
	reminder_set: "Vi minder dig om at skrive hver dag kl. %t",
	newsletter_shop: ["Butiksnyheder", "Tilmeld (nye produkter og tilbud)"],
	rate: ["Kærlighed & kram", "Giv os 5 stjerner"],
	misc: "Andet",
	auth: ["Aktivitet", "Slet"],
	chat: "Hjælpecenter",
	fonts: [
		"jf Open Huninn", // 0
		"Taipei Sans", // 1
		"jf Open Huninn", // 2
		"jf JinXuan", // 3
		"jf Cream", // 4
		"LXGW WenKai", // 5
		"Yozai Writing", // 6
		"Naikai Writing", // 7
		"Jason Writing A (ikke på iOS)", // 8
		"Jason Writing B (ikke på iOS)", // 9
		"Jason Writing C (ikke på iOS)", // 10
		"Jason Writing D", // 11
		"Jason Writing E", // 12
		"Kurewa Gothic", // 13
		"Nani Writing (ikke på iOS)", // 14
		"POP Gothic", // 15
		"Star Love Pencil", // 16
		"Genyo Ming", // 17
		"HuiWen MinCho (ikke på iOS)", // 18
		"Pen Crane", // 19
		"H.T.Wang LiSu", // 20
		"H.T.Wang YanKai", // 21
		"H.T.Wang WeiBei", // 22

		// 以下停用
		"Jason Writing F", // 23
		"oz Caramel Writing", // 24
		"Bakudai", // 25
		"Wenhengju Wind", // 26
		"Wenhengju Fist", // 27
		"jf LihSian Writing", // 28
		"jf Oyeh Writing", // 29
		"jf Liao Writing", // 30
		"jf Drechi Writing" // 31
	]
};

// orders
_h$["o"] = _h$["o"] || {
	title: "Min plan",
	back: "Tilbage",
	redeem: "Indløs din gave",
	buy: ["Prøv VIP Premium", "Forny min plan"],
	plan: ["Min plan", "Skift plan eller kort: kontakt os med dit Hearty ID.", '"VIP Premium (gratis prøve)" er en gratis velkomstgave.<br>Bare rolig – efter prøveperioden skifter du automatisk til gratis Lite.'],
	order: ["Mine ordrer"],
	plan_th: ["Status", "Plan", "Startet", "Udløber", "Hearty Journal "],
	order_th: ["Status", "Nr.", "Vare", "TWD$", "Betaling ", "Faktura"],
	order_status: ["Ubetalt", "Betalt",  "Aktiveret", "Forfalden", "Annulleret"],
	plan_status: ["Aktiv", "Udløbet"],
	url: ["Del link | QR-kode", "Kopiér"],

	// bill
	fail: [
		"Betalingen mislykkedes",
		"Prøv igen med samme kort, eller brug et andet.",
		"Kontakt os, hvis du har spørgsmål."
	],
	fail_info: [
		"Almindelig årsag", "Detaljer",
		"Forkerte kortoplysninger", "Forkert kortnummer, CVV eller udløbsdato.",
		"Utilstrækkelig dækning", "Din saldo eller kreditgrænse er nået.",
		"Kortet er ikke godkendt", "Kortet er måske ikke åbnet for online-/udlandskøb. Kontakt din kortudsteder.",
		"Betaling afvist", "Usædvanlige eller udenlandske køb kan blive afvist af svindelbeskyttelsen. Kontakt kortudstederen for godkendelse."
	],
	fail_btn: [
		"Prøv igen",
		"Kontakt support",
	],


	// thankyou
	thx: [
		"Din ordre er gennemført! Tak!",
		"Tusind tak for din ordre. Kontakt os, hvis du har brug for noget."
	],
	thx_th: [
		"Pakke",
		"Varighed",
		"dage",
		"Ordrenr.",
		"Dato",
		"Beløb",
		"Betalt via",
		"Faktura",
		"Skift plan eller kort: kontakt os med dit Hearty ID."
		//
		// "For monthly plan users, you can cancel your subscription anytime by contacting us with your Hearty ID."
	],
	thx_inv: [
		"Taiwansk momsfaktura udstedt af Hearty Creative Inc.",
		"Vis"
	],
	thx_btn: [
		"VIP-undersøgelse (for nye kunder)",
		"Skærmbillede",
		"Tilbage til dagbogen"
	]
};

// phone
_h$["pv"] = _h$["pv"] || {
	// JS
	ok: "OK",
	no: "Annuller",
	signin: ["Log ind", "Log ind først."],
	format: ["Nummeret er for kort.", "Ugyldigt nummer.", "Du har nået grænsen. Prøv igen senere."],
	verify1: ["Bekræft", "Indtast bekræftelseskoden: ", "<br><small>En <b>Firebase-SMS</b> er sendt. Vent 45 sek.</small>", "$no er nu bekræftet!"],
	verify2: ["Har du ikke fået koden?", "Send os en SMS for manuel bekræftelse. (Takst fra dit teleselskab kan forekomme)", "Send", "Manuel bekræftelse sker inden for 72 arbejdstimer.", "[Bekræft] Hearty ID: "],
	verify3: ["Har du ikke fået koden?", "Send os dit Hearty ID og telefonnummer for manuel bekræftelse.", "Skriv til os"],
	code: ["SMS-bekræftelseskode", "Prøv igen", "Koden skal være 6 cifre.", "Ugyldig kode.", "Koden er udløbet. Start forfra."],
	fail: "Google-godkendelse fejlede. Genindlæs siden.",

	// DOMs
	title: "Bekræft telefonnummer",
	back: "Min konto",
	verify: ["Bekræft telefonnummer", "Dit telefonnummer", "Bekræft", "Indtast koden", "Har du ikke fået en SMS?", "Send igen", "Prøv igen om 30 sek."]
};

// email
_h$["em"] = _h$["em"] || {
	title: [
		"Afmeld: Medlemsnyhedsbrev",
		"Afmeld: Hearty Life Shop-nyhedsbrev"
	],
	unsubscribe: "Afmeld",
	ask: [
		"Du modtager ikke længere beskeder eller notifikationer om pennevenner.",
		"Du modtager ikke længere nyheder om produkter og tilbud.",
		"Ja, afmeld mig"
	],
	ok: "OK",
	back: "Tilbage",
	unsubscribed: '"$email" er afmeldt. Ændringen træder i kraft i morgen.',
	remarks: [
		"Du modtager stadig vigtige kontobeskeder (nulstilling af adgangskode, opdaterede vilkår osv.).",
		"Stop alle e-mails ved at slette din Hearty Journal-konto."
	]
};

// points
_h$["pt"] = _h$["pt"] || {
	// JS
	ok: "Bekræft",
	no: "Annuller",
	back: "Tilbage",
	close: "Luk",
	signin: [
		"Log ind",
		"Log ind på Hearty Journal først."
	],
	redeem: [
		"Vil du indløse <u>$pkg</u> for $p point?",
		'Ved at klikke "Bekræft" accepterer du vilkårene',
		"Ikke nok point til $pkg.",
		"Denne plan kan endnu ikke indløses."
	],
	ec_ok: [
		"Din Hearty Life-gavekupon (NT$$amt), kode: <b>$code</b>",
		'Du kan se den under "Mine registreringer". Husk at bruge den inden $exp.'
	],
	vip_ok: [
		"Indløst! $days dages VIP Premium, gyldig til $exp.",
		"Se nu"
	],

	// DOMs
	title: "Hearty-point belønningsprogram",
	points: ["Mine Hearty-point", "P"],
	coupons: [
		"Mine registreringer",
		"Mine indløsninger",
		"Plan",
		"Kode",
		"Oprettet",
		"Udløber",
		"Brugt",
		"Du har ingen koder endnu."
	],
	label: [
		"Bedst",
		"Populær"
	],
	use: [
		"Brug kupon i butikken"
	],
	agree: ["Læs og accepter vilkårene."],
	get: [
		"Hvordan optjener jeg point?",
		"Tjek ind dagligt for point: klik på klokken øverst til højre i dagbogen.",
		"Tjek ind nu"
	],

	// Plans
	pkg_vip14: [
		"Hearty Journal VIP Premium",
		"14 dage"
	],
	pkg_vip30: [
		"Hearty Journal VIP Premium",
		"30 dage"
	],
	pkg_ec100: [
		"Hearty Life-gavekupon (digitale produkter)",
		"NT$ 100"
	]
};
