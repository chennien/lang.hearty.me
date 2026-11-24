/* Hearty Journal Language Pack: Ver 16 */

var _h$ = {};

_h$["lang"] = "nb-no";

// common.head
_h$["h"] = _h$["h"] || {
	ok: "OK",
	qr: "QRkode_Hearty",
	copy: "Kopiert",
	err: "Hearty Journal er opptatt, prøv igjen senere.<br>Kontakt kundestøtte hvis problemet vedvarer",
	satisfy: ["Hei! Liker du Hearty Journal?", "Ja ~", "Nei"],
	rate: ["Din vurdering er vår største oppmuntring", "Vil du gi oss fem stjerner?", "Takk for støtten", "Bare hyggelig"],
	notify: ["Varsler er ikke tillatt", "Du går glipp av meldinger og brev fra brevvenner", "Slå på", "Ikke nå"],
	downloading: "Laster ned"
};

// menu
_h$["m"] = _h$["m"] || {
	url: [
		"//go.hearty.me/hj-faq",
		"//go.hearty.me/hjse"
	],

	// JS
	no: "Nei",
	back: "Tilbake",
	nav: ["Hovedmeny", "Hearty Journal", "Min dagbok"],
	signout: ["Logg ut", "Vil du logge ut?"],

	// DOMs
	avatar: [
		"Min konto", "Logg inn", "VIP"
	],
	menu: [
		"Dagens vers", "Alices gjestebok", "Dagbokveggen", "Hearty-bloggen", "Min dagbok", "Galleri", "Life Shop", "Oppgrader til VIP", "Veiledninger", "Om oss", "Logg ut", "For Windows", "For macOS", "App for Windows/macOS", "Mobilapp", "Language 語言", "Gi oss 5 stjerner", "🐞 Feilsøking"
	]
};

// index
_h$["i"] = _h$["i"] || {
	passkey: [
		"Logg inn med Passkey",
		"eller",
		"Ingen Passkey? Logg inn med passord og opprett en under «Min konto»",
		"Denne Passkey-en er fjernet, logg inn på en annen måte",
		"Passkey-bekreftelsen ble tidsavbrutt",
		"Innlogging med Passkey mislyktes, prøv igjen",
		"Denne kontoen er slettet eller suspendert"
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
	no: ["Nei", "Avbryt"],
	go: "Kjør!",
	back: "Tilbake",
	copy: ["Kopier", "Kopiert: "],
	email: [
		"E-posten er bekreftet", "E-posten er allerede bekreftet", "Bekreftelseslenken er utløpt", "Bekreftelseslenken er ufullstendig"
	],
	reset: [
		"Tilbakestill passord",
		"Tilbakestiller og logger inn…",
		"Ugyldig tilbakestillingslenke",
		"Kontoen er ikke fylt ut riktig",
		"Tilbakestillingslenken er sendt",
		"Tilbakestillingslenken er sendt til ***@$domain",
		"Åpne $url og sjekke e-posten?",
		"Kontoen finnes ikke"
	],
	captcha: [
		"Sikkerhetskontrollen mislyktes, last inn siden på nytt",
		"Fullfør sikkerhetskontrollen nedenfor"
	],
	ref: [
		"🎁 $user inviterer deg hit"
	],
	cookie: [
		"Slå på informasjonskapsler for å logge inn", "Slik gjør du"
	],
	browser: [
		"Nettleseren er utdatert", "Internet Explorer støttes ikke"
	],
	signin: [
		"Logg inn",
		"Logger inn som $user…",
		"Kontoen er ikke fylt ut riktig",
		"Kontoen $user finnes ikke",
		"Ingen konto er registrert med $user",
		"Kontoen $user er slettet/suspendert",
		"$user venter på sletting eller er suspendert for regelbrudd",
		"Feil passord",
		"Passord: minst 6 tegn",
		"Logg inn på «$client» med Hearty ID"
	],
	signup: [
		"Hearty ID kan bare inneholde bokstaver, eventuelt med tall", "Hearty ID må ha 4–20 tegn",
		"Ugyldig e-postformat",
		"Oppgi en ekte e-postadresse",
		"Passord: 6–20 tegn",
		"Passordene er ikke like",
		"⚠ Yahoo!-e-post mister ofte meldinger,\nbrev fra brevvenner kan forsvinne. Bruke likevel?",
		"Ugyldig e-post eller passord!",

		"$user er opprettet! Sjekk bekreftelses-e-posten",
		"Kontoen $user er opprettet!",
		"Kontoen finnes allerede, logg inn",
		"E-posten er allerede registrert, logg inn",
		"Denne ID-en er tatt, velg en annen",
		"Feil e-post",
		"Engangs-e-post er ikke tillatt",
		"Systemet er opptatt"
	],
	box: [
		"Registrer deg",
		"Logg inn",
		"Tilbakestill passord",
		"Opprett konto",
		"Logg inn på Hearty Journal",
		"Tilbakestill passord | Finn konto",
		"💡 Lag din ID (4–20 bokstaver og tall)",
		"💡 Hearty ID eller e-post"
	],
	timer: "Send på nytt om $min:$sec",
	chat: [
		"Hearty kundestøtte",
		"Logg inn for kundestøtte",
		"Send e-post",
		"Kundestøtte-e-post: "
	],
	id_notice: [
		"Hearty ID<br>4–20 bokstaver/tall, synlig i fellesskapet",
		"Dagboken lagres kryptert på kontoen og synkroniseres mellom mobil og PC"
	],
	song: ["Harmony - 溫度日記", "Kjenningsmelodien til Hearty Journal"],
	404: "Adressen finnes ikke",

	// DOMs
	title: ["Hearty Journal 溫度日記", "En håndtegnet, privat dagbok for hvert øyeblikk"],
	topbar: [
		"Registrer / Logg inn", "App for Windows", "App for macOS"
	],
	slogan: [
		"Hearty Journal", "<br>en håndtegnet, privat dagbok", ", ",
		"4,9★ i App Store | Apple-redaksjonens valg | 300 000+ fornøyde brukere", "Forbindelsen er kryptert som ved kortbetaling"
	],
	scroll: "Rull ned",
	preview: ["Forhåndsvis dagboken", "Avslutt forhåndsvisning"],
	feature: [
		"Skriv for deg selv", "Ta vare på det fine i hver dag",
		"Illustrert dagbok", "Søte klistremerker, lim dem hvor du vil",
		"Delt dagbok", "Del med venner og kjæreste",
		"Trygt og privat", "Kryptert forbindelse på banknivå"
	],
	testimonial: [
		"Dette sier brukerne om Hearty Journal",
		"For ordene som aldri ble sagt. Jeg anbefaler Hearty Journal.", "Haitaibear, forfatter innen populærpsykologi",
		"Mykt og rolig, perfekt for å snakke med seg selv", "Cindy Liu",
		"Pent utseende, og autolagring er veldig praktisk", "Wu Chi",
		"Takk, Hearty, for støtten i tunge stunder", "Yan-Xuan",
		"Elsker PC-versjonen, lastet ned mobilappen også", "Xiao-Jun"
	],
	press: [
		"I mediene",
		"Bnext Media", "Free Group", "Aotter girls", "Womany", "Sheaspire", "SEinsights", "Taiwan Startup Stadium", "Innosquare, New Taipei", "UDN", "Vita News"
	],
	action: [
		"Begynn et varmere liv", "Prøv nå"
	],
	rate: "Gi Hearty Journal 5 stjerner",
	footer: [
		"Language 語言",
		"For Windows",
		"For macOS",
		"Funksjoner",
		"Omtaler",
		"Samarbeid",
		"For presse",
		"Vanlige spørsmål",
		"Databeskyttelse",
		"Vilkår for bruk",
		"Personvern",
		"Sikkerhetssertifikat",
		"Kjenningsmelodi",
		"Nien, grunnlegger",
		"Jiayi, medgrunnlegger",
		"Varemerke",
		"Om oss"
	],
	cookies: ["Vi bruker informasjonskapsler. Ved å fortsette godtar du personvernerklæringen.", "OK"],
	copyright: "2016-"+new Date().getFullYear().toString()+" Hearty Creative Inc. og tilknyttede selskaper",
	isp: "Driftet av Cloudways",
	auth: [
		"Registrer deg gratis",
		"Har du konto? Logg inn",
		"Glemt ID/passord",
		"Husker du nå? Logg inn",
		"Konto", "💡 Hearty ID eller e-post",
		"Passord", "🔑 6–20 tegn",
		"Bekreft", "🔑 Skriv passordet på nytt", "Vis passord",
		"Husk meg", "Jeg er 18+ og godtar vilkårene for bruk"
	],
	lang: "Bytt til: $lang"
};

// editor
_h$["e"] = _h$["e"] || {
	// JS
	url: [
		"//go.hearty.me/hj-faq",
		"//go.hearty.me/hj-data",
		"//bitly.com/3E0ZJ7Q"
	],
	ok: ["OK", "Skjønner", "Gjerne"],
	no: ["Nei", "Avbryt"],
	retry: "Prøv igjen",
	back: "Tilbake",
	gotop: "Til toppen",
	signin: ["Logg inn", "Logg inn for å ", "bruke alle funksjoner"],
	signout: "Logg ut",
	name: ["Mitt navn", "Hva skal vi kalle deg?<br>(Kallenavnet er offentlig, ikke bruk ekte navn)", "Velkommen, $name, til din egen hage", "Skal vi <u>minne deg på dagboken hver kveld</u>?", "Ja, minn meg på det"],
	get_stickers: ["Hurra! Klistremerkene er dine", "Ta en titt"],
	welcome: ["Velkommen tilbake, $name", "Tilbake til dagboken", "Du er ikke logget inn"],
	year: "", // CE
	maintenance: ["Systemvedlikehold: ", "tjenesten er utilgjengelig i omtrent én time"],
	update: ["Gammel appversjon, oppdater for nye funksjoner", "Oppdater", "Minn meg på det i morgen"],
	search: ["Søk i innleggene mine", "Søkeord", "Søk", "Ingen treff"],
	bookmark: [
		"Lagrede innlegg: 1",
		"Lagrede innlegg: $no", // 複數
		"Lagre",
		"Uten tittel"
	],
	catalog: [
		"1 innlegg",
		"$no innlegg", // 複數
		"Nytt innlegg",
		"Ingen innlegg ennå",
		"Ingen deler dagbok med deg ennå",
		"Dette er det første eller siste innlegget",
		"Ingen innlegg å lese",
		"Forrige",
		"Neste"
	],
	sticker: ["Skaler", "Roter", "Lim inn", "Slett", "Grensen for klistremerker er nådd", "Se VIP-fordeler"],
	verify_required: [
		"Bekreft $item og fullfør profilen for å $act",
		"telefonnummer", "bruke alle funksjoner",
		"stille inn deling", "publisere innlegg", "legge til brevvenner", "dele med brevvenner"
	],
	privacy: [
		"Innlegget er offentlig", "Innlegget er låst",
		'For å sikre at innlegget følger <a target="_blank" href="//go.hearty.me/publish"><u>publiseringsreglene</u></a>, ',
		"blir det offentlig først etter godkjenning",
		"blir det publisert automatisk etter godkjenning",
		"Ikke publiser flere ganger, det kan regnes som spam (;´ㅁ`)-3<br>PS: Uten varsler får du ikke vite når innlegget er godkjent"
	],
	publish: [
		"Innlegget er kort, skriv litt til~<br>(minst 100 tegn)",
		"Ok, jeg har en idé",
		"Publisere «$title» på dagbokveggen?",
		"Innlegg på veggen må være offentlige. Gjøre det offentlig?",
		"Publiser",
		"«$title» er på dagbokveggen",
		"Ta en titt",
		"Tilbake til innlegget",
		'Følg <a target="_blank" href="//go.hearty.me/publish"><u>[publiseringsreglene]</u></a>. Brevvenner finner du i <a target="_blank" href="//go.hearty.me/hjpd"><u>[brevvennhjørnet]</u></a>, ikke del personopplysninger her</small>',
		"Trekke tilbake «$title» fra dagbokveggen?",
		"Trekk tilbake",
		"Innlegget er trukket tilbake",
		"1 innlegg om dagen, del mer i morgen"
	],
	penpal_add: [
		"Vennens Hearty ID eller e-post",
		"Lite: 2 brevvenner; VIP: ubegrenset",
		"Skriv Hearty ID eller e-post",
		"Legg til",
		"Oppgrader til VIP for mer enn 2 brevvenner",
		"Legge til «<b>$name</b>» (Hearty ID: $user) som brevvenn?",
		"$name er nå din brevvenn",
		"«$user» er allerede lagt til, eller tillater det ikke",
		"Fant ikke brukeren «$user»",
		"«$user» har arkivert deg",
		"Hei, du kan ikke legge til deg selv"
	],
	penpal_delete: [
		"Ved arkivering returneres delte innlegg, og dere kan ikke legges til igjen. Tenk deg om!",
		"Hvem vil du arkivere?",
		"- Velg en person -",
		"Delte innlegg returneres, og dere kan ikke legges til igjen. Arkivere «$user»?",
		"Arkiver",
		"«$user» er arkivert"
	],
	penpal_send: [
		"Delt med: $add",
		"Delingsinnstillingene er oppdatert"
	],
	pin: [
		"Støtte-PIN: ", "Oppgi den når du kontakter oss, for raskere hjelp"
	],
	chat: [
		"Hearty ID: "
	],
	membership: [
		"Lite", "VIP (prøve)", "VIP"
	],
	feedback: [
		"Saksnummer: #$no",
		"Skriv navnet ditt",
		"Ugyldig e-postformat",
		"Meldingen er for kort",
		', vi svarer <b>på e-post innen 24 timer, følg med i innboksen</b><br>Vi svarer alltid. Hvis du ikke har fått noe innen to dager, sjekk søppelposten eller skriv til oss på <a target="_blank" href="//hearty.app/ms"><u>Hearty Journals Facebook-side</u></a> ´・ω・｀<br><br>Liker du Hearty Journal, ta en titt på VIP. Abonnementet ditt hjelper oss å utvikle funksjoner, lage nytt innhold og gi bedre service.',
		"Skjønner",
		"Hva får jeg med VIP",
		"Noe gikk galt, prøv igjen senere"
	],
	video: [
		"YouTube-lenke",
		"eller klikk for å laste opp",
		"Bekreft", // 設為
		"Legg til i spillelisten",
		"Videoen er satt inn",
		"Ugyldig YouTube-lenke",
		"Videoen er slettet, ikke offentlig eller kan ikke bygges inn<br>Sjekk lenken",
		"Sjekk",
		"Slette «$title»?",
		"Slett",
		"Angi (tomt = fjern)", // 預留未使用
		"https://youtu.be/vYFnZdUiUyg (tomt = fjern video)"
	],
	yt: [
		"Spilledåse",
		"Sorter",
		"Slett",
		"Slukk lyset",
		"Ingen sanger ennå, trykk ➕ for å legge til en",
		"Favorittsangene dine spilles i bakgrunnen",
		"Mine sanger",
		"Spill av video"
	],
	gps: [
		"Slå på posisjon for å legge til vær?",
		"⛅ «Tillat» GPS-tilgang og vent litt…",
		"Været er lagt til",
		"Uten GPS-signal kan ikke været legges til",
		"Posisjonsproblem? Se ikonet i Chromes adressefelt"
	],
	chars_max: [
		"Innlegget har $chars tegn, grensen er 10 000 (inkl. symboler)",
		"Forresten, har noen sett denne meldingen?"
	],
	chars: [
		"$chars tegn, over grensen for Lite ($limit tegn)",
		"Se VIP-fordeler",
		"Minn meg på det senere"
	],
	leave: "Innlegget er lagret. Vil du gå?",
	date: ["Dato", "Dato satt til: ", "Sortert etter dato: nyeste øverst"],
	subject: ["Innlegg $date", "Tittel", "Ny tittel «$title»", "Lagre"],
	archive: [
		"Slette «$title»? Kan ikke angres", "Ja, glem alt", "«$title» er slettet"
	],
	unsafe: "Google Safe Browsing: denne lenken er farlig, ikke åpne den",
	offline: "Treg forbindelse, prøv igjen senere",
	lock: [
		"Stille inn skjermlås? Ingen kan kikke",
		"Still inn",
		"Slå av skjermlås",
		"Skjermlåsen er slått av",
		"Jeg har glemt begge",
		"Glemt både <u>PIN-koden til skjermlåsen</u> og <u>kontopassordet</u>?<br>Logg ut og tilbakestill passordet (skjermlåsen slås også av)"
	],
	pincode: [
		"Skriv inn PIN",
		"Bekreft PIN",
		"Skriv inn PIN eller kontopassord",
		"Feil PIN",
		"Passordet ser ut til å være feil",
		"Kodene er ikke like, prøv igjen",
		"PIN kan bare inneholde tall",
		"PIN satt til: $pin"
	],
	screenshot: "Bildet lages, nedlastingen starter om 10 sekunder",
	pc: [
		"PC-versjon", 'Åpne «www.hearty.me» på datamaskinen <i class="fal fa-globe"></i>',
		"Prøv PC-versjonen", "Stor skjerm, lett å lese", "Bedre å skrive med tastatur", "Synk mellom mobil og PC", "Prøv"
	],
	picture: [
		"Last opp bilde",
		"Velg et bilde (JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Last opp",
		"Velg på nytt",
		"Maks 10 bilder per innlegg",
		"Filen er $ext, bare JPG, PNG, GIF, WebP, AVIF, HEIC støttes",
		"Bildet er lastet opp",
		"Laster ned, vent litt",
		"Bildet ligger i Nedlastinger"
	],
	picture_err: [
		"Format eller filendelse støttes ikke (støttes: JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Filen er over 6 MB, komprimer den først",
		"Filen kan ikke leses eller er skadet",
		"HEIC/HEIF-konvertering mislyktes, prøv et annet bilde"
	],
	picture_remove: [
		"Slette dette bildet?",
		"Slett for godt",
		"Bildet er slettet"
	],
	file: "Hearty_Journal",
	trial: [
		"30-dagers VIP-prøve er aktiv, alt er låst opp",
		"Når prøveperioden slutter $exp, går kontoen tilbake til Lite uten belastning.<br>Oppgrader til VIP om du vil ( ´･ヮ･)<br>Alle innleggene dine blir værende i Hearty Journal ♡",
		"Sammenlign versjoner",
		"Skjønner, sett i gang"
	],
	purchased: [
		"VIP er aktivert!",
		"Har du 3 minutter til en spørreundersøkelse?",
		"(Første svar gir 7 dager VIP i gave)",
		"Svar nå",
		"Jeg har svart"
	],
	n_verify_email: [
		"Bekreft $item for å bruke alle funksjoner",
		"Bekreft e-posten for å få svar"
	],
	n_verify_phone: "Koble til telefonnummer for bedre sikkerhet",
	n_vip_prefix: "Ditt VIP-abonnement",
	n_char_limit_exceed: "$chars tegn, grensen er nådd, oppgrader nå",
	n_daily_checkin: [
		"Du har ikke sjekket inn i dag",
		"Du har sjekket inn i dag"
	],
	checkin: [
		"Sjekk inn",
		"Mine poeng: ", "p",
		"Få 1 poeng for innsjekk",
		"Du fikk 1 poeng og har nå $p p",
		"Du har allerede sjekket inn i dag",
		"Kom tilbake i morgen",
		"Poeng for daglig innsjekk bygger skrivevanen<br>Senere kan du bytte dem mot belønninger~"
	],
	reward: [
		"Se belønninger"
	],
	pd: [
		"Menskalender",
		"Neste: ",
		"Snittsyklus: ",
		"dager",
		"Start",
		"Slutt",
		"Syklus",
		"Legg til",

		"I dag",
		"Slett",
		"Vil du slette?",
		"I dag: dag $d", // Eng: $d$th
		"Neste: om $d dager"
	],

	// customize my journal
	headline: [
		"Dagboktittel",
		"Dagboken min heter:",
		"Lagre",
		"Ny tittel «$headline»",
		"Du kan også la det stå tomt ~"
	],
	style: [
		"Tilpass dagboken",
		"Standard",
		"Mangler du inspirasjon?",
		"//en.faq.hearty.me/tutorial/styles"
	],
	cover: [
		"Forside",
		"Last opp forside",
		"Ideelt forhold: 1,9:1",
		"Bekreft", // crop
		"Avbryt",
		"Formatet støttes ikke: $ext",
		"Forsiden er endret",
		"Forsiden er tilbakestilt"
	],
	bg: [
		"Bakgrunn",
		"Last opp bakgrunn",
		"Formatet støttes ikke: $ext",
		"Bakgrunnen er endret",
		"Bakgrunnen er tilbakestilt"
	],
	color: [
		"Dagbokfarge",
		"Fargen er oppdatert"
	],

	// DOMs
	title: "Min dagbok",
	header: [
		"Innhold", "Varsler", "Klistremerker", "Abonnementer", "Meld fra om problem", "Ferdig"
	],
	notification: [
		"Ingen varsler",
		"PC-versjon",
		"Still et spørsmål",
		"Oppdater",
		"Diagnose",
		"Oppgrader til VIP og få alle funksjoner"
	],
	link: [
		"Du går til et annet nettsted",
		"Sjekket av Google Safe Browsing",
		"Fortsett"
	],
	share: [
		"Innleggsinnstillinger", "Lenke", "Privat", "Passordbeskyttet", "Offentlig", "Publiser på veggen", "Ikke gjør private innlegg offentlige"
	],
	penpal: [
		"Delt dagbok", "Legg til brevvenn", "Arkiver brevvenn", "Ingen brevvenner ennå, legg til noen først", "Send dette innlegget til: "
	],
	qa: [
		"Still et spørsmål", "Funksjoner og bruk", "Konto, betaling og annet", "Databeskyttelse og personvern", "Nettverksdiagnose", "Feil, forslag og oppmuntring", "Tjenestestatus", "Alt fungerer normalt"
	],
	cs: [
		"Skriv til oss", "Spørsmål om funksjoner? Klikk for FAQ", "Feilrapport / tilbakemelding / oppmuntring",
		"Vi svarer på e-post, følg med i innboksen", "Send", "Min støtte-PIN: ",
		"Du bruker en betaversjon"
	],
	csform: ["Mitt navn", "VIP", "Lite", "Legg ved skjermbilde"],
	gift: [
		"Hent gaven din", "Hent", "50 koselige klistremerker fra Hearty Journal"
	],
	prologue: "Ta vare på dagens humør",
	pwd: "Skriv inn passord",
	warn: [
		"Vedlikehold", "Treg forbindelse", "Ustabil forbindelse", "Lavt batteri"
	],
	tool: [
		"Lagre", "Nytt innlegg", "Slett", "Del", "Lagre som bilde", "Forrige", "Neste", "Fullskjerm", "Åpne boken", "Snu"
	],
	rmenu: [
		"Still et spørsmål", "Om oss", "Fullskjerm", "繁/简", "Større tekst", "Mindre tekst", "Bla", "Loddrett lesing"
	],
	image: [
		"Bilde", "Roter", "Filter", "Last ned", "Slett"
	],
	tab: [
		"Mine", "Fra venner",
		"🔍 Søk", "🔖 Lagret", "🎧 Spilledåse", "🌙 Menskalender", "🔒 Skjermlås",
		"Still et spørsmål", "Bevegelser", "Rediger klistremerker på mobil"
	],
	book: [
		"Om Hearty Journal", "I en travel tid er Hearty Journal et varmt og stille fristed der folk legger fra seg trettheten, deler sårbarhet de aldri har satt ord på, og finner tilbake til sitt ekte jeg. Selv om himmelen ikke alltid er blå, går vi videre – varsomt, men bestemt."
	],
	promo: ["Spesialtilbud: 3 måneder VIP for NT$99"],
	403: "Privat innlegg, bare forfatteren kan lese det. Er det ditt, logg inn 🔒",
	404: "Adressen til innlegget ser ut til å være feil",
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
	stickers: ["Mine klistremerker", // Start with 1
		"Håndskrift", "Vær", "Humør", "Hverdag", "Mote", "Småting", "Mat", "Reise og natur", "Årstider og høytider", "Planter og blomster", "Smådyr", "Søte figurer", "Fantasy"
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
	vip: ["Hearty Journal VIP", "VIP", "(gratis prøveperiode)"],
	feat_lite: [
		"Ingen reklame, personvern først",
		"Tekst (grense på 5 785 tegn)",
		"90 klistremerker, 20 stilige skrifter",
		"Automatisk vær, daglige påminnelser",
		"Delt dagbok med venner (2 plasser)",
		"PIN-lås, menskalender, spilleliste",
		"Synk på iOS, Android, Windows, macOS",
		"Automatisk skybackup hos AWS",
		"TLS 1.3-kryptert forbindelse",
		"Laget av et team fra Taiwan",
	],
	feat_vip: [
		"Alt i Lite, og i tillegg: ",
		"Ubegrenset antall tegn",
		"Bilder (10 per innlegg)",
		"Bildegalleri med filtre",
		"1 300+ klistremerker",
		"YouTube-videoer",
		"Egen forside og bakgrunn",
		"Egen dagboktittel og innleggsdato",
		"Fulltekstsøk",
		"Eksport til bilde, Word, TXT"
	],
	remark: [
		"Hvorfor oppgradere til VIP?",
		"Første kjøp: 3 måneder VIP for NT$99",
		"månedlig med kort, kan sies opp når som helst",
		"30 dagers pengene-tilbake-garanti ved første kjøp",
		"VIP-funksjoner"
	],
	act: [
		"Registrer deg gratis", "Prøv i 30 dager", "Se VIP-fordeler", "Om fornyelse", "Logg inn for å bestille"
	],
	deposit: ["Forhåndsbetaling", "Kjøp", "Kort, Google Pay, Alipay, minibank i Taiwan"],
	subscription: ["Månedsabonnement", "Kjøp", "(kun kort)", "Første kjøp: 3 måneder VIP for NT$99", "Fra 4. måned NT$99/måned", "Internasjonale kort godtas"],
	selected: ["Nåværende", "Anbefalt"],
	currency: ["Gjeldende kurs: "],
	term: [
		"3 måneder", "6 måneder", "1 år"
	],
	unit: [
		"måned", "måned"
	],
	subtotal: "Delsum NT$",
	powerby: "Teknologi",
	redeem: "Løs inn kode",

	due: "Min VIP-gyldighet",
	due_active: ["VIP-abonnementet er aktivt"],
	due_date: ["Gyldig til ", "", "deretter går kontoen tilbake til Lite"],
	due_days: ["Utløper om ", " dager", "deretter går kontoen tilbake til Lite"],
	due_tomorrow: ["Utløper i morgen", "deretter går kontoen tilbake til Lite"],
	due_today: ["Utløper i dag", "deretter går kontoen tilbake til Lite"],
	iap_ios: [
		"Fornyes automatisk hver måned, kan sies opp når som helst",
		"[Hearty Journal VIP] Abonnementsvilkår for iOS",
		"Lite gir noen funksjoner, VIP låser opp alt",
		"Fornyes månedlig til prisen fra første kjøp",
		"Fornyes og belastes automatisk via Apple-kontoen din",
		"En påbegynt periode kan ikke sies opp eller refunderes underveis",
		"Fornyes 24 timer før utløp; si opp i tide hvis du ikke vil fortsette",
		"Administrer abonnementet når som helst under Apple-konto > Abonnementer",
		"Vi ber deg aldri på telefon om å overføre penger; ved mistenkelige anrop, ring Taiwans svindellinje 165",
		"Kjøp avslutter prøveperioden med en gang. Vil du bruke hele, kjøp etterpå",
		"Vilkår for bruk",
		"Personvern"
	],
	iap_and: [
		"Fornyes automatisk hver måned, kan sies opp når som helst",
		"[Hearty Journal VIP] Abonnementsvilkår for Android",
		"Lite gir noen funksjoner, VIP låser opp alt",
		"Fornyes månedlig til prisen fra første kjøp",
		"Fornyes og belastes automatisk via Google Play",
		"En påbegynt periode kan ikke sies opp eller refunderes underveis",
		"Fornyes 24 timer før utløp; si opp i tide hvis du ikke vil fortsette",
		"Administrer abonnementet når som helst under Google Play > Betalinger og abonnementer",
		"Vi ber deg aldri på telefon om å overføre penger; ved mistenkelige anrop, ring Taiwans svindellinje 165",
		"",
		"Vilkår for bruk",
		"Personvern"
	]
};

// Alice
_h$["A"] = _h$["A"] || {
	// JS
	signin: ["Logg inn", "Logg inn for å kommentere", "Logg inn først"],
	back: "Tilbake",
	no: "Nei",
	no_post: "Beklager, vi fant ikke dette innlegget",
	penpal_guest: ["I dag er din dag $day<br>Etter 7 dager med jevnlig skriving kan du finne brevvenner", "Jeg står på"], // Eng: $day$th
	comment_limit: [
		"Mot spam: maks 2 kommentarer per innlegg. Slett eller rediger de tidligere",
		"$chars tegn, en kommentar kan ha maks 85",
		"En kommentar må ha minst 3 tegn og handle om temaet"
	],
	comment_ban: [
		"Kan inneholde sensitive ord, publiseres etter godkjenning",
		"Kommentaren ble holdt igjen, det er så mye spam 🥺",
		"Påminnelse: la oss følge ",
		"publiseringsreglene"
	],
	comment_edit: ["Redigere kommentaren?", "Rediger"],
	report_ask: ["Rapportere denne kommentaren?", "Ja, den bryter reglene", "Rapportert, teamet vårt ser på det"],
	url: ["Kopier lenke", "Lenke / QR-kode", "Last ned"],
	penpal_add: ["Legge til «<b>$id</b>» som brevvenn?", "For god kontakt: maks 2 brevvenner", "Til delt dagbok"],
	verify: ["Bekreft e-post og telefon for alle funksjoner", "Min konto"],

	// DOMs
	title: "Alices gjestebok",
	board: "Alices gjestebok",
	tabs: ["Kommentarer", "Oppslagsoversikt", "Delt dagbok", "Del", "Gi fem stjerner", "Flaskepost"],
	comment: ["Kommenter", "Logg inn for å kommentere", "Over tegngrensen (85)"],
	profile: ["Legg til brevvenn", "Til dagboken"],
	gotop: "Til toppen",
	goleft: "Til venstre"
};

// feed
_h$["f"] = _h$["f"] || {
	// JS
	refresh: ["Oppdaterer", "Dra ned for å oppdatere", "Slipp for å oppdatere"],
	signin: ["Logg inn", "Logg inn for å bruke alle funksjoner"],
	no: "Avbryt",
	url: ["Kopier lenke", "Lenke / QR-kode"],
	publish_ask: ["Slik publiserer du", "Trykk på", "i dagboken for å publisere", "OK", "Min dagbok"],
	report_ask: ["Rapportere innlegget «$title»?", "Ja, det bryter reglene", "Takk for at du rapporterte «$title», teamet vårt ser på det"],

	// DOMs
	title: "Dagbokveggen (side $p)",
	share: "Del",
	report: "Rapporter",
	focus_post: "Vis i strømmen",
	posts: "Les offentlige innlegg",
	publish: "Publiser",
	gotop: "Til toppen",
	back: "Tilbake",
	health: ["Helseinformasjon finner du på CDCs nettsted ( • ̀ω•́ )", "//www.cdc.gov.tw"]
};

// img
_h$["I"] = _h$["I"] || {
	title: "Galleri",
	upload: "Last opp bilde",
	empty: ["Du har ikke lastet opp noen bilder ennå", "Legg til det første i et innlegg"],
	add: "Legg til bilde",
	gotop: "Til toppen",
	layout: ["Rutenett", "Mosaikk"]
};

// account
_h$["a"] = _h$["a"] || {
	passkey: [
		"Passkey",
		"Legg til Passkey",
		"Ingen Passkey ennå",
		"Hva er en Passkey?",
		"En Passkey (tilgangsnøkkel) logger deg inn med Face ID, fingeravtrykk eller skjermlåsen på enheten – uten konto og passord, og uten fare for phishing.<br><br>Passkey-en lagres på enheten eller i passordbehandleren (f.eks. iCloud-nøkkelring, Googles passordbehandler). Hearty Journal lagrer bare den offentlige nøkkelen, som ikke kan brukes til å logge inn.<br><br>Å fjerne en Passkey logger ikke ut innloggede enheter. Etter endring av Hearty ID kan passordbehandleren vise det gamle navnet; innloggingen påvirkes ikke.",
		"Deretter logger du inn uten konto og passord",
		"Gi nytt navn",
		"Navn på Passkey (maks 20 tegn)",
		"Navnet må ha 1–20 tegn",
		"Fjern",
		"Fjerne «$name»?<br>Du kan ikke lenger logge inn med den, innloggede enheter forblir innlogget.<br>Slett den også i passordbehandleren.",
		"Din siste Passkey, og kontoen har ikke passord. Deretter kan du bare logge inn med ekstern konto.",
		"Enheten er logget inn med denne Passkey-en og forblir innlogget.",
		"Passkey fjernet",
		"Synkroniseres til andre enheter",
		"Bare på denne enheten",
		"Ikke synkronisert ennå",
		"I bruk nå",
		"Opprettet $date",
		"Sist brukt $date",
		"Ikke brukt ennå",
		"Skriv inn nåværende passord for å bekrefte",
		"Feil passord",
		"Grensen for Passkey (10) er nådd, fjern en ubrukt først",
		"Denne enheten eller passordbehandleren har allerede en Passkey",
		"Passkey opprettet! Bruk den neste gang",
		"Bekreft identiteten med en eksisterende Passkey",
		"Neste",
		"Tidsavbrudd, prøv igjen",
		"For mange forsøk, prøv igjen om 15 minutter"
	],
	// JS
	ok: ["OK", "Ja", "Gjerne", "Riktig"],
	next: "Neste",
	no: "Nei",
	back: "Tilbake",
	upload: "Last opp",
	rotate: "Roter",
	retry: "Prøv igjen",
	signin: ["Logg inn", "Logg inn for å bruke alle funksjoner"],
	usage: "Skrevet: $num innlegg, totalt $chars tegn",
	points: "Poeng: $p (se belønninger)",
	year: "", // CE
	bday_ask: ["Har du bursdag $bday?", "Fødselsdatoen kan ikke endres senere", "Fødselsdatoen er lagret"],
	age: "$age år",
	nickname_edited: "Kallenavnet ditt er nå «$n»",
	pwd_edit: "Endre passord",
	pwd_edited: "Endret",
	pwd_enter: "Skriv inn nytt kontopassord",
	pwd_confirm: "Skriv passordet på nytt for å bekrefte",
	pwd_invalid: "Passord: 6–20 tegn, prøv igjen",
	pwd_mismatch: "Passordene er ikke like, prøv igjen",
	pwd_format: "6–20 tegn",
	pwd_apply: ["Endre", "Bekreft endring"],
	pwd_ok: ["Passordet er endret, bruk det nye",
				"Ikke del konto eller passord med noen"],
	avatar: ["Velg et bilde (JPG, PNG, GIF, WebP, AVIF, HEIC)", "Filen er $ext, bare JPG, PNG, GIF, WebP, AVIF, HEIC støttes", "Velg på nytt", "Profilbildet er oppdatert"],
	avatar_err: [
		"Format eller filendelse støttes ikke (støttes: JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Filen er over 6 MB, komprimer den først",
		"Filen kan ikke leses eller er skadet",
		"HEIC/HEIF-konvertering mislyktes, prøv et annet bilde"
	],
	email_new: "Endre e-post",
	email_confirm: "Endre e-post til «$email»?",
	email_invalid: "Ugyldig e-postformat",
	email_verify: ["Av sikkerhetshensyn må du bekrefte e-posten for å ", "bruke alle funksjoner", "Bekreft"],
	email_send: "Sende bekreftelses-e-posten på nytt?",
	email_sent: ["Bekreftelses-e-post er sendt. Åpne $isp?<br>(Sjekk også søppelpost og Kampanjer)",
				"Sjekk e-posten, også søppelposten"],
	email_verified: "E-posten er allerede bekreftet",
	pin: ["Støtte-PIN: $pin<br><small>(Oppgi den når du kontakter oss, for raskere hjelp)</small>", "Last ned"],
	font: [
		"Stilige skrifter i Hearty Journal",
		"i/fonts_en.png",
		"Vi bruker nettskrifter fra justfont samt kommersielle og åpne skrifter.",
		"Lisenser"
	],
	font_change: "Bytter til «$font»…",
	gender_edited: "Kjønn er lagret",
	newsletter_edited: "Abonnementet er oppdatert",
	lang: "Bytt til: $lang",
	timezone_edited: "Tidssone satt til «$tz»",
	id: "Hearty ID: ",
	id_edit: "Endre ID",
	id_public: "ID og kallenavn er offentlige",
	id_new: "Skriv inn ny ID",
	id_format: "Minst 4 bokstaver/tall, kan bare endres én gang",
	id_invalid: "ID-en oppfyller ikke kravene",
	id_same: "Kan ikke være lik nåværende ID",
	id_taken: "«<b>$id</b>» er tatt, velg en annen",
	id_edited: "Din Hearty ID er nå «<b>$id</b>»",
	id_signout: "Logg ut og logg inn med ny ID",
	dl: "Eksporter backup",
	dl_pc: "Backup lastes ned<br>på PC via «www.hearty.me»",
	dl_pwd: ["Skriv inn passordet for å dekryptere:", "Passord: 6–20 tegn", "Dekrypter og eksporter", "Ta backup", "Dagboken er lagret som tekstfil i Nedlastinger. Ta godt vare på den"],
	dl_fmt: ["Velg backupformat", "Tekstfil (.txt)", "Word-dokument med bilder (.docx)", "Neste"],
	dl_doc: ["Totalt $posts innlegg, $images bilder<br>Konverteringen kan ta fra minutter til flere titalls minutter", "Eksporter", "Konverterer: $done / $total bilder", "Konverterer, vent litt", "Word-dokumentet er lagret, ta godt vare på det", "$n bilder kunne ikke lastes og ble hoppet over", "Eksporten ble avbrutt, prøv igjen senere", "Word-eksport bare i Chrome eller Edge på PC; ellers velg tekstfil", "Eksportdato: $date, totalt $posts innlegg", "Feil passord, prøv igjen", "Ingen innlegg å eksportere", "Eksporter til Word"],
	vip_only: ["Denne funksjonen", " er bare for VIP", "Se VIP-fordeler", "Senere"],
	suspend: ["Vil du virkelig slette kontoen? Du kan beholde den! Hearty Journal får stadig nye funksjoner og klistremerker, kanskje kommer du tilbake", "For å endre ID, <u>klikk her</u>", "Slett", "Behold"],
	auth_log: ["Nylige innlogginger", "$browser på $device", "Øk sikkerheten", "//go.hearty.me/hj-sec"],
	redeem: ["Skriv inn kode", "Løs inn"],
	coupon_ok: ["Forespørsel om å løse inn «$coupon» er sendt",
				"Etter godkjenning får du «30 dagers VIP-prøve» innen 3 dager.<br>Se under [Profilbilde] > [Mitt abonnement]"],
	voucher_ok: "Koden «$code» er løst inn! Du har fått $days dager VIP, gyldig til $exp",
	voucher_invalid: "Koden er ugyldig, oppbrukt eller allerede løst inn",
	voucher_disqualified: "Én prøvekode per konto, og du har allerede brukt den",
	voucher_vvip: [
		"Tilbud for trofaste VVIP-er",
		"Forhåndsbetale årsabonnement med 40 % rabatt?",
		"Forhåndsbetal"
	],
	voucher_ec: [
		"EC-koden er en <u>rabattkupong til Life Shop</u>",
		"Handle nå"
	],

	// DOMs
	title: "Min konto",
	tab: ["Profil", "Mitt abonnement"],
	headline: ["Tittel"], // deprecated
	nickname: ["Kallenavn", "Endre"],
	pincode: "Støtte-PIN",
	bday: "Bursdag",
	email: ["Send bekreftelses-e-post", "Send bekreftelse på nytt", " s til ny sending"],
	style: ["Utseende", "Tilpass dagboken"],
	gender: ["Kjønn", "Mann", "Kvinne"],
	phone: ["Telefon", "Bekreft telefonnummer"],
	pwd: "Passord",
	pfont: ["Dagbokskrift", "Forhåndsvisning"],
	language: "Språk",
	timezone: "Tidssone",
	newsletter: ["E-postvarsler", "Varsler fra brevvenner, nyhetsbrev"],
	reminder: ["Daglig påminnelse", "Minn meg på å skrive"],
	reminder_set: "Vi minner deg på å skrive hver dag kl. %t",
	newsletter_shop: ["Nyhetsbrev fra Life Shop", "Nyheter og tilbud"],
	rate: ["Oppmuntre oss", "Gi oss 5 stjerner"],
	misc: "Annet",
	auth: ["Innloggingslogg", "Slett konto"],
	chat: "Still et spørsmål",
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
	title: "Mitt abonnement",
	back: "Tilbake",
	redeem: "Løs inn kode",
	buy: ["Kjøp Hearty Journal", "Forny Hearty Journal"],
	plan: ["Mitt abonnement", "For å endre abonnement eller kort, skriv til kundestøtte med din Hearty ID", "«VIP (prøve)» er en gave til nye brukere<br>Når den utløper, går kontoen automatisk tilbake til Lite"],
	order: ["Mine bestillinger"],
	plan_th: ["Status", "Abonnement", "Start", "Slutt", "Hearty Journal "],
	order_th: ["Status", "Ordrenr.", "Produkt", "Beløp (TWD)", "Betaling", "Faktura"],
	order_status: ["Venter på betaling", "Kjøpt", "Aktivert", "Ikke betalt", "Kansellert"],
	plan_status: ["Aktiv", "Utløpt"],
	url: ["Send lenke | QR-kode", "Kopier"],

	// bill
	fail: [
		"Beklager, betalingen mislyktes",
		"Prøv igjen, eller bruk et annet kort eller betalingsmåte",
		"Trenger du hjelp? Kontakt oss"
	],
	fail_info: [
		"Vanlig årsak", "Anbefaling",
		"Feil kortnummer", "Sjekk kortnummer, CVV og utløpsdato",
		"Utilstrekkelig dekning", "Kortgrensen er nådd eller det er for lite dekning",
		"Utenlands-/nettkjøp er ikke aktivert", "Be banken aktivere utenlands-/nettkjøp",
		"Banken blokkerte betalingen", "Banken stoppet betalingen som risikabel. Ring banken og bekreft den"
	],
	fail_btn: [
		"Prøv igjen",
		"Kontakt kundestøtte",
	],


	// thankyou
	thx: [
		"Takk for kjøpet, VIP er aktivert",
		"Har du spørsmål, bare si fra ヾ(๑❛ᴗ❛๑)ﾉ"
	],
	thx_th: [
		"Abonnement",
		"Gyldighet",
		"dager",
		"Ordrenr.",
		"Tid",
		"Beløp",
		"Betalingsmåte",
		"Kvittering",
		"For å endre abonnement eller kort, skriv til kundestøtte med din Hearty ID"
	],
	thx_inv: [
		"Taiwansk faktura utstedes av Hearty Creative Inc.",
		"Vis faktura"
	],
	thx_btn: [
		"Spørreundersøkelse etter første kjøp",
		"Skjermbilde",
		"Tilbake til dagboken"
	]
};

// phone
_h$["pv"] = _h$["pv"] || {
	// JS
	ok: "OK",
	no: "Avbryt",
	signin: ["Logg inn på nytt", "Logget ut etter inaktivitet"],
	format: ["Nummeret er for kort", "Ugyldig nummerformat", "For mange forsøk, prøv igjen senere"],
	verify1: ["Bekreft", "Bekreftelseskode: ", "<br><small><b>SMS fra Firebase</b> er sendt, vent ca. 45 sekunder</small>", "$no er bekreftet"],
	verify2: ["Fikk ikke SMS", "Send oss en SMS, så bekrefter vi deg manuelt", "Send SMS", "Vi bekrefter deg innen 72 timer etter at vi mottar SMS-en", "[Telefonbekreftelse] Hearty ID: "],
	verify3: ["Fikk ikke SMS", "Oppgi Hearty ID og telefonnummer for manuell bekreftelse", "Skriv på Facebook"],
	code: ["SMS-kode", "Skriv inn på nytt", "Koden må ha 6 sifre", "Feil kode", "Koden er utløpt, bekreft på nytt"],
	fail: "SMS-bekreftelsen kunne ikke lastes<br>Last inn siden på nytt",

	// DOMs
	title: "Bekreft telefonnummer",
	back: "Min konto",
	verify: ["Telefonbekreftelse", "Telefonnummer", "Send kode", "Skriv inn kode", "Fortsatt ingen SMS?", "Send på nytt", "Send på nytt om 30 s"]
};

// email
_h$["em"] = _h$["em"] || {
	title: [
		"Meld av: nyhetsbrev",
		"Meld av: nyhetsbrev fra Life Shop"
	],
	unsubscribe: "Meld av Unsubscribe",
	ask: [
		"Du får ikke lenger meldinger fra nettstedet eller varsler fra brevvenner",
		"Du får ikke lenger nyheter og tilbud",
		"Ja, meld meg av"
	],
	ok: "OK",
	back: "Tilbake",
	unsubscribed: "«$email» er meldt av, gjelder fra i morgen",
	remarks: [
		"Viktige kontovarsler (glemt passord, endrede vilkår osv.) får du fortsatt.",
		"Vil du ikke ha noen e-post, slett Hearty Journal-kontoen"
	]
};

// points
_h$["pt"] = _h$["pt"] || {
	// JS
	ok: "Bekreft",
	no: "Avbryt",
	back: "Tilbake",
	close: "Lukk",
	signin: [
		"Logg inn",
		"Logg inn på Hearty Journal først"
	],
	redeem: [
		"Bytte $p poeng mot «$pkg»?",
		"Med «Bekreft» godtar du byttevilkårene, husk gyldigheten",
		"Du har ikke nok poeng til «$pkg»",
		"Denne belønningen kan ikke byttes ennå"
	],
	ec_ok: [
		"Din rabattkode på NT$$amt til Life Shop: <b>$code</b>",
		"Finnes under «Byttehistorikk», bruk den før $exp"
	],
	vip_ok: [
		"Byttet! Du har fått $days dager VIP, gyldig til $exp",
		"Se"
	],

	// DOMs
	title: "Poengbelønninger",
	points: ["Mine poeng", "p"],
	coupons: [
		"Byttehistorikk",
		"Min byttehistorikk",
		"Belønning",
		"Kode",
		"Byttet",
		"Gyldig til",
		"Brukt",
		"Ingen bytter ennå"
	],
	label: [
		"Utvalgt",
		"Populær"
	],
	use: [
		"Bruk i butikken"
	],
	agree: ["Les og godta vilkårene"],
	get: [
		"Hvordan får jeg poeng?",
		"Du får poeng ved daglig innsjekk: trykk på bjellen øverst til høyre i dagboken",
		"Til innsjekk"
	],

	// Plans
	pkg_vip14: [
		"Hearty Journal VIP 14 dager",
		"14 dager"
	],
	pkg_vip30: [
		"Hearty Journal VIP 30 dager",
		"30 dager"
	],
	pkg_ec100: [
		"Life Shop: kupong for digitale produkter",
		"NT$ 100"
	]
};
