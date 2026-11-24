/* Hearty Journal Language Pack: Ver 16 */

var _h$ = {};

_h$["lang"] = "sk-sk";

// common.head
_h$["h"] = _h$["h"] || {
	ok: "OK",
	qr: "QRkod_Hearty",
	copy: "Skopírované",
	err: "Hearty Journal je preťažený, skús to neskôr.<br>Ak problémy trvajú, kontaktuj podporu",
	satisfy: ["Ahoj! Páči sa ti Hearty Journal?", "Páči ~", "Nepáči"],
	rate: ["Tvoje hodnotenie je pre náš tím najväčším povzbudením", "Rozsvietiš nám päť hviezdičiek?", "Ďakujeme za tvoju podporu", "Rado sa stalo"],
	notify: ["Upozornenia nie sú povolené", "Nedozvieš sa o správach ani listoch od pisateľov", "Povoliť", "Teraz nie"],
	downloading: "Sťahovanie"
};

// menu
_h$["m"] = _h$["m"] || {
	url: [
		"//go.hearty.me/hj-faq",
		"//go.hearty.me/hjse"
	],

	// JS
	no: "Nie",
	back: "Späť",
	nav: ["Hlavné menu", "Hearty Journal", "Môj denník"],
	signout: ["Odhlásiť sa", "Naozaj sa chceš odhlásiť?"],

	// DOMs
	avatar: [
		"Môj účet", "Prihlásiť sa", "VIP"
	],
	menu: [
		"Verš dňa", "Kniha návštev Alice", "Nástenka denníkov", "Blog Hearty", "Môj denník", "Galéria", "Life Shop", "Prejsť na VIP", "Návody", "O nás", "Odhlásiť sa", "Pre Windows", "Pre macOS", "Aplikácia pre Windows/macOS", "Mobilná aplikácia", "Language 語言", "Ohodnoť nás 5 hviezdičkami", "🐞 Ladenie"
	]
};

// index
_h$["i"] = _h$["i"] || {
	passkey: [
		"Prihlásiť sa pomocou Passkey",
		"alebo",
		"Nemáš Passkey? Prihlás sa heslom a vytvor ho v „Môj účet“",
		"Tento Passkey bol odstránený, prihlás sa inak",
		"Overenie Passkey vypršalo, skús to znova",
		"Prihlásenie pomocou Passkey zlyhalo, skús to znova",
		"Tento účet bol zmazaný alebo pozastavený"
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
	no: ["Nie", "Zrušiť"],
	go: "Ideme na to!",
	back: "Späť",
	copy: ["Kopírovať", "Skopírované: "],
	email: [
		"E-mail bol overený", "E-mail už je overený", "Overovací odkaz vypršal", "Overovací odkaz je neúplný"
	],
	reset: [
		"Obnoviť heslo",
		"Obnovujem a prihlasujem…",
		"Odkaz na obnovenie je neplatný",
		"Účet nie je vyplnený správne",
		"Odkaz na obnovenie bol odoslaný",
		"Odkaz na obnovenie bol odoslaný na ***@$domain",
		"Otvoriť $url a skontrolovať poštu?",
		"Tento účet neexistuje"
	],
	captcha: [
		"Bezpečnostné overenie zlyhalo, obnov stránku",
		"Dokonči bezpečnostné overenie nižšie"
	],
	ref: [
		"🎁 $user ťa sem pozýva"
	],
	cookie: [
		"Na prihlásenie povoľ cookies", "Ako na to"
	],
	browser: [
		"Prehliadač je zastaraný", "Internet Explorer nie je podporovaný"
	],
	signin: [
		"Prihlásiť sa",
		"Prihlasujem ako $user…",
		"Účet nie je vyplnený správne",
		"Účet $user neexistuje",
		"Pod $user nie je registrovaný žiadny účet",
		"Účet $user bol zmazaný/pozastavený",
		"Účet $user čaká na zmazanie alebo je pozastavený za porušenie pravidiel",
		"Nesprávne heslo",
		"Heslo: aspoň 6 znakov",
		"Prihlásiť sa do „$client“ pomocou Hearty ID"
	],
	signup: [
		"Hearty ID: len písmená, prípadne číslice", "Hearty ID musí mať 4–20 znakov",
		"Neplatný formát e-mailu",
		"Zadaj skutočný e-mail",
		"Heslo: 6–20 znakov",
		"Heslá sa nezhodujú",
		"⚠ Yahoo! často stráca poštu,\nsprávy od pisateľov nemusia prísť. Aj tak použiť?",
		"Neplatný e-mail alebo heslo!",

		"Účet $user bol vytvorený! Skontroluj overovací e-mail",
		"Účet $user bol vytvorený!",
		"Účet už existuje, prihlás sa",
		"E-mail už je registrovaný, prihlás sa",
		"Toto ID už niekto používa, zvoľ iné",
		"Nesprávny e-mail",
		"Dočasné e-maily nie sú povolené",
		"Systém je preťažený"
	],
	box: [
		"Registrácia",
		"Prihlásenie",
		"Obnoviť heslo",
		"Vytvoriť účet",
		"Prihlásiť sa do Hearty Journal",
		"Obnoviť heslo | Nájsť účet",
		"💡 Vytvor si ID (4–20 písmen a číslic)",
		"💡 Hearty ID alebo e-mail"
	],
	timer: "Znova odoslať o $min:$sec",
	chat: [
		"Podpora Hearty",
		"Pre podporu sa prihlás",
		"Napísať e-mail",
		"E-mail podpory: "
	],
	id_notice: [
		"Hearty ID<br>4–20 písmen/číslic, v komunite verejné",
		"Denník sa šifrovane ukladá pod týmto účtom a synchronizuje medzi mobilom a počítačom"
	],
	song: ["Harmony - 溫度日記", "Hymna Hearty Journal"],
	404: "Zadaná adresa neexistuje",

	// DOMs
	title: ["Hearty Journal 溫度日記", "Ručne kreslený súkromný denník pre každú chvíľu"],
	topbar: [
		"Registrácia / Prihlásenie", "Aplikácia pre Windows", "Aplikácia pre macOS"
	],
	slogan: [
		"Hearty Journal", "<br>ručne kreslený súkromný denník", ", ",
		"4,9★ v App Store | Výber redakcie Apple | 300 000+ spokojných používateľov", "Spojenie je šifrované ako platby kartou"
	],
	scroll: "Posuň nadol",
	preview: ["Ukážka denníka", "Ukončiť ukážku"],
	feature: [
		"Píšem pre seba", "Uchovaj to pekné z každého dňa",
		"Ilustrovaný denník", "Roztomilé nálepky, lep podľa chuti",
		"Zdieľaný denník", "Zdieľaj s priateľmi aj partnerom",
		"Bezpečie a súkromie", "Šifrované spojenie na úrovni bánk"
	],
	testimonial: [
		"Čo hovoria používatelia Hearty Journal",
		"Pre slová, ktoré zostali nevyslovené. Odporúčam Hearty Journal.", "Haitaibear, autor populárnej psychológie",
		"Jemné a pokojné, ideálne na rozhovor so sebou", "Cindy Liu",
		"Krásny vzhľad a automatické ukladanie je veľmi šikovné", "Wu Chi",
		"Vďaka, Hearty, že si ma sprevádzal mnohými ťažkými chvíľami", "Yan-Xuan",
		"Verzia pre počítač sa mi páči, stiahla som aj mobilnú", "Xiao-Jun"
	],
	press: [
		"Médiá",
		"Bnext Media", "Free Group", "Aotter girls", "Womany", "Sheaspire", "SEinsights", "Taiwan Startup Stadium", "Innosquare, New Taipei", "UDN", "Vita News"
	],
	action: [
		"Začni žiť s teplom pri srdci", "Vyskúšaj hneď"
	],
	rate: "Ohodnoť Hearty Journal 5 hviezdičkami",
	footer: [
		"Language 語言",
		"Pre Windows",
		"Pre macOS",
		"Funkcie",
		"Recenzie",
		"Spolupráca",
		"Pre médiá",
		"Časté otázky",
		"Ochrana údajov",
		"Podmienky služby",
		"Ochrana súkromia",
		"Bezpečnostný certifikát",
		"Hymna",
		"Nien, zakladateľ",
		"Jiayi, spoluzakladateľka",
		"Ochranná známka",
		"O nás"
	],
	cookies: ["Používame cookies. Pokračovaním súhlasíš so zásadami ochrany súkromia.", "OK"],
	copyright: "2016-"+new Date().getFullYear().toString()+" Hearty Creative Inc. a pridružené spoločnosti",
	isp: "Hostované na Cloudways",
	auth: [
		"Zaregistruj sa zadarmo",
		"Máš účet? Prihlás sa",
		"Zabudnuté ID/heslo",
		"Už si spomínaš? Prihlás sa",
		"Účet", "💡 Hearty ID alebo e-mail",
		"Heslo", "🔑 6–20 znakov",
		"Potvrdenie", "🔑 Zadaj heslo znova", "Zobraziť heslo",
		"Zapamätať si ma", "Mám 18+ a súhlasím s podmienkami služby"
	],
	lang: "Prepnúť na: $lang"
};

// editor
_h$["e"] = _h$["e"] || {
	// JS
	url: [
		"//go.hearty.me/hj-faq",
		"//go.hearty.me/hj-data",
		"//bitly.com/3E0ZJ7Q"
	],
	ok: ["OK", "Rozumiem", "Jasné"],
	no: ["Nie", "Zrušiť"],
	retry: "Skúsiť znova",
	back: "Späť",
	gotop: "Nahor",
	signin: ["Prihlásiť sa", "Prihlás sa a ", "využívaj všetky funkcie"],
	signout: "Odhlásiť sa",
	name: ["Moje meno", "Ako ťa máme volať?<br>(Prezývka je verejná, nie skutočné meno)", "Vitaj, $name, vo svojej vlastnej záhrade", "Mám ti <u>každý večer pripomenúť denník</u>?", "Áno, pripomínaj"],
	get_stickers: ["Hurá! Nálepky sú tvoje", "Idem sa pozrieť"],
	welcome: ["Vitaj späť, $name", "Späť do denníka", "Nie si prihlásený/á"],
	year: "", // CE
	maintenance: ["Údržba systému: ", "služba bude asi hodinu nedostupná"],
	update: ["Stará verzia aplikácie, aktualizuj pre nové funkcie", "Aktualizovať", "Pripomenúť zajtra"],
	search: ["Hľadať v mojich záznamoch", "Kľúčové slovo", "Hľadať", "Nič sa nenašlo"],
	bookmark: [
		"Uložený záznam: 1",
		"Uložené záznamy: $no", // 複數
		"Uložiť",
		"Bez názvu"
	],
	catalog: [
		"Záznamy: 1",
		"Záznamy: $no", // 複數
		"Nový záznam",
		"Zatiaľ žiadne záznamy",
		"Zatiaľ s tebou nikto nezdieľa denník",
		"Toto je prvý alebo posledný záznam",
		"Žiadne záznamy na čítanie",
		"Predchádzajúci",
		"Ďalší"
	],
	sticker: ["Zväčšiť", "Otočiť", "Vložiť", "Zmazať", "Dosiahnutý limit nálepiek", "Výhody VIP"],
	verify_required: [
		"Over $item a doplň profil, aby si mohol/mohla $act",
		"telefónne číslo", "využívať všetky funkcie",
		"nastaviť zdieľanie", "zverejniť záznam", "pridať pisateľa", "zdieľať s pisateľmi"
	],
	privacy: [
		"Záznam je verejný", "Záznam je zamknutý",
		'Aby sa overilo, že záznam spĺňa <a target="_blank" href="//go.hearty.me/publish"><u>pravidlá zverejňovania</u></a>, ',
		"bude zverejnený až po schválení",
		"bude po schválení automaticky publikovaný",
		"Neodosielaj opakovane, mohol by to byť spam (;´ㅁ`)-3<br>PS: Bez upozornení sa o schválení nedozvieš"
	],
	publish: [
		"Záznam je krátky, napíš ešte niečo~<br>(aspoň 100 znakov)",
		"Dobre, mám nápad",
		"Zverejniť „$title“ na nástenke?",
		"Záznamy na nástenke musia byť verejné. Zverejniť?",
		"Zverejniť",
		"„$title“ je na nástenke",
		"Pozrieť sa",
		"Späť k záznamu",
		'Dodržuj <a target="_blank" href="//go.hearty.me/publish"><u>[pravidlá zverejňovania]</u></a>. Pisateľov hľadaj v <a target="_blank" href="//go.hearty.me/hjpd"><u>[kútiku pisateľov]</u></a>, tu nezdieľaj osobné údaje</small>',
		"Stiahnuť „$title“ z nástenky?",
		"Stiahnuť",
		"Záznam bol stiahnutý",
		"Na nástenku len 1 záznam denne, ďalší zajtra"
	],
	penpal_add: [
		"Hearty ID alebo e-mail priateľa",
		"Lite: 2 pisatelia; VIP: bez obmedzenia",
		"Zadaj Hearty ID alebo e-mail",
		"Pridať",
		"Pre viac ako 2 pisateľov prejdi na VIP",
		"Pridať „<b>$name</b>“ (Hearty ID: $user) ako pisateľa?",
		"$name je teraz tvoj pisateľ",
		"„$user“ už je pridaný alebo pridanie nepovoľuje",
		"Používateľ „$user“ sa nenašiel",
		"„$user“ si ťa archivoval(a)",
		"Hej, seba pridať nemôžeš"
	],
	penpal_delete: [
		"Po archivácii sa vrátia zdieľané záznamy a znova sa pridať nebude dať. Rozmysli si to!",
		"Koho chceš archivovať?",
		"- Vyber osobu -",
		"Zdieľané záznamy sa vrátia a znova sa pridať nebude dať. Naozaj archivovať „$user“?",
		"Archivovať",
		"„$user“ archivovaný/á"
	],
	penpal_send: [
		"Zdieľané s: $add",
		"Nastavenie zdieľania aktualizované"
	],
	pin: [
		"PIN podpory: ", "Urýchli overenie pri kontakte s podporou"
	],
	chat: [
		"Hearty ID: "
	],
	membership: [
		"Lite", "VIP (skúšobné)", "VIP"
	],
	feedback: [
		"Požiadavka č. #$no",
		"Vyplň svoje meno",
		"Neplatný formát e-mailu",
		"Správa je príliš krátka",
		', odpovieme ti <b>e-mailom do 24 hodín, sleduj schránku</b><br>Odpovieme vždy. Ak do dvoch dní nič nepríde, skontroluj spam alebo nám napíš na <a target="_blank" href="//hearty.app/ms"><u>FB stránku Hearty Journal</u></a> ´・ω・｀<br><br>Ak ťa Hearty Journal baví, pozri si VIP. Tvoje predplatné nám pomôže vyvíjať funkcie, tvoriť nové materiály a zlepšovať služby.',
		"Rozumiem",
		"Čo ponúka VIP",
		"Niečo sa pokazilo, skús to neskôr"
	],
	video: [
		"Odkaz na video YouTube",
		"alebo klikni na nahratie",
		"Potvrdiť", // 設為
		"Pridať do playlistu",
		"Video vložené",
		"Odkaz na YouTube je neplatný",
		"Video bolo zmazané, nie je verejné alebo sa nedá vložiť<br>Skontroluj odkaz",
		"Skontrolovať",
		"Naozaj zmazať „$title“?",
		"Zmazať",
		"Nastaviť (prázdne = odstrániť)", // 預留未使用
		"https://youtu.be/vYFnZdUiUyg (prázdne = odstrániť video)"
	],
	yt: [
		"Hudobná skrinka",
		"Zoradiť",
		"Zmazať",
		"Zhasnúť",
		"Zatiaľ žiadne piesne, klikni na ➕ a pridaj prvú",
		"Obľúbené piesne hrajú dookola na pozadí",
		"Moje piesne",
		"Prehrať video"
	],
	gps: [
		"Zapnúť polohu a pridať k záznamu počasie?",
		"⛅ „Povoľ“ prístup k GPS a chvíľu počkaj…",
		"Počasie pridané",
		"Bez signálu GPS nemožno pridať počasie",
		"Problém s polohou? Ikonka v paneli s adresou Chrome"
	],
	chars_max: [
		"Záznam má $chars znakov, limit je 10 000 (vrátane symbolov)",
		"Mimochodom, dokáže to naozaj niekto?"
	],
	chars: [
		"$chars znakov prekračuje limit Lite ($limit znakov)",
		"Výhody VIP",
		"Pripomenúť neskôr"
	],
	leave: "Záznam je uložený. Naozaj odísť?",
	date: ["Dátum záznamu", "Dátum nastavený na: ", "Zoradené podľa dátumu: najnovšie hore"],
	subject: ["Záznam z $date", "Názov záznamu", "Nový názov „$title“", "Uložiť"],
	archive: [
		"Naozaj zmazať „$title“? Nedá sa vrátiť", "Áno, zabudnúť", "„$title“ zmazané"
	],
	unsafe: "Google Safe Browsing: tento odkaz je nebezpečný, neotváraj ho",
	offline: "Pomalé pripojenie, skús to neskôr",
	lock: [
		"Nastaviť zámok obrazovky? Nikto ti nenazrie",
		"Nastaviť",
		"Vypnúť zámok",
		"Zámok obrazovky vypnutý",
		"Zabudol/a som oboje",
		"Zabudol/a si <u>PIN zámku</u> aj <u>heslo k účtu</u>?<br>Odhlás sa a obnov heslo (zámok sa tiež vypne)"
	],
	pincode: [
		"Zadaj PIN",
		"Potvrď PIN",
		"Zadaj PIN alebo heslo k účtu",
		"Nesprávny PIN",
		"Heslo zrejme nie je správne",
		"Zadania sa nezhodujú, nastav znova",
		"PIN môže obsahovať len číslice",
		"PIN nastavený na: $pin"
	],
	screenshot: "Obrázok sa vytvára, sťahovanie začne o 10 sekúnd",
	pc: [
		"Verzia pre počítač", 'Na počítači otvor „www.hearty.me“ <i class="fal fa-globe"></i>',
		"Vyskúšaj verziu pre počítač", "Veľká obrazovka, pohodlné čítanie", "Na klávesnici sa píše lepšie", "Synchronizácia mobilu a počítača", "Vyskúšať"
	],
	picture: [
		"Nahrať fotku",
		"Vyber fotku (JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Nahrať",
		"Vybrať znova",
		"Max. 10 fotiek na záznam",
		"Súbor je $ext, podporované len JPG, PNG, GIF, WebP, AVIF, HEIC",
		"Fotka nahraná",
		"Sťahovanie, chvíľu strpenia",
		"Fotka je v Stiahnutých súboroch"
	],
	picture_err: [
		"Nepodporovaný formát alebo prípona (podporované: JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Súbor presahuje 6 MB, najprv ho zmenši",
		"Súbor nemožno prečítať alebo je poškodený",
		"Prevod HEIC/HEIF zlyhal, skús inú fotku"
	],
	picture_remove: [
		"Naozaj zmazať túto fotku?",
		"Zmazať natrvalo",
		"Fotka zmazaná"
	],
	file: "Hearty_Journal",
	trial: [
		"30-dňové skúšobné VIP je aktívne, všetko je odomknuté",
		"Po skončení skúšobnej doby $exp sa účet vráti na Lite a nič ti nestrhneme.<br>Na VIP môžeš prejsť, kedy budeš chcieť ( ´･ヮ･)<br>Všetky tvoje záznamy zostanú v Hearty Journal ♡",
		"Porovnať verzie",
		"Jasné, ideme na to"
	],
	purchased: [
		"VIP je aktívne!",
		"Venuješ nám 3 minúty na dotazník?",
		"(Za prvé vyplnenie 7 dní VIP zdarma)",
		"Vyplniť",
		"Už som vyplnil(a)"
	],
	n_verify_email: [
		"Over $item a využívaj všetky funkcie",
		"Over e-mail, nech ti odpovede prídu"
	],
	n_verify_phone: "Prepoj telefón pre vyššie zabezpečenie",
	n_vip_prefix: "Tvoj tarif VIP",
	n_char_limit_exceed: "$chars znakov, limit vyčerpaný, prejdi na VIP",
	n_daily_checkin: [
		"Dnes ešte nemáš check-in",
		"Dnes už máš hotovo"
	],
	checkin: [
		"Check-in",
		"Moje body: ", "b.",
		"Za check-in získaš 1 bod",
		"Získavaš 1 bod, celkovo máš $p b.",
		"Dnes už máš hotovo",
		"Príď zajtra",
		"Body za denný check-in pre návyk písania<br>Neskôr ich vymeníš za odmeny~"
	],
	reward: [
		"Zobraziť odmeny"
	],
	pd: [
		"Kalendár menštruácie",
		"Nabudúce: ",
		"Priemerný cyklus: ",
		"dní",
		"Začiatok",
		"Koniec",
		"Cyklus",
		"Pridať záznam",

		"Dnes",
		"Zmazať",
		"Naozaj zmazať?",
		"Dnes: $d. deň", // Eng: $d$th
		"Nabudúce: o $d dní"
	],

	// customize my journal
	headline: [
		"Názov denníka",
		"Môj denník sa volá:",
		"Uložiť",
		"Nový názov „$headline“",
		"Pokojne nechaj prázdne ~"
	],
	style: [
		"Prispôsobiť denník",
		"Predvolené",
		"Chýba inšpirácia?",
		"//en.faq.hearty.me/tutorial/styles"
	],
	cover: [
		"Obálka",
		"Nahrať obálku",
		"Ideálny pomer: 1,9:1",
		"Potvrdiť", // crop
		"Zrušiť",
		"Nepodporovaný formát: $ext",
		"Obálka zmenená",
		"Obálka obnovená"
	],
	bg: [
		"Pozadie",
		"Nahrať pozadie",
		"Nepodporovaný formát: $ext",
		"Pozadie zmenené",
		"Pozadie obnovené"
	],
	color: [
		"Farba denníka",
		"Farba aktualizovaná"
	],

	// DOMs
	title: "Môj denník",
	header: [
		"Obsah", "Upozornenia", "Nálepky", "Tarify", "Nahlásiť problém", "Hotovo"
	],
	notification: [
		"Žiadne upozornenia",
		"Verzia pre počítač",
		"Opýtať sa",
		"Obnoviť",
		"Diagnostika",
		"Prejdi na VIP a užívaj si všetky funkcie"
	],
	link: [
		"Prechod na iný web",
		"Overené službou Google Safe Browsing",
		"Pokračovať"
	],
	share: [
		"Nastavenia záznamu", "Odkaz", "Súkromný", "Chránený heslom", "Verejný", "Zverejniť na nástenke", "Súkromný obsah nezverejňuj"
	],
	penpal: [
		"Zdieľaný denník", "Pridať pisateľa", "Archivovať pisateľa", "Zatiaľ žiadni pisatelia, najprv niekoho pridaj", "Poslať tento záznam: "
	],
	qa: [
		"Opýtať sa", "Funkcie a používanie", "Účet, platby a ostatné", "Ochrana údajov a súkromia", "Diagnostika siete", "Hlásenia, návrhy a povzbudenie", "Stav služieb", "Všetko funguje normálne"
	],
	cs: [
		"Napíš nám", "Otázky k funkciám? Klikni na FAQ", "Hlásenie / spätná väzba / povzbudenie",
		"Odpovieme e-mailom, sleduj schránku", "Odoslať", "Môj PIN podpory: ",
		"Používaš beta verziu"
	],
	csform: ["Moje meno", "VIP", "Lite", "Pridať snímku obrazovky"],
	gift: [
		"Vyzdvihni si darček", "Vyzdvihnúť", "50 upokojujúcich nálepiek Hearty Journal"
	],
	prologue: "Uchovaj si dnešnú náladu",
	pwd: "Zadaj heslo",
	warn: [
		"Údržba", "Pomalé pripojenie", "Nestabilné pripojenie", "Slabá batéria"
	],
	tool: [
		"Uložiť", "Nový záznam", "Zmazať", "Zdieľať", "Uložiť ako obrázok", "Predchádzajúci", "Ďalší", "Celá obrazovka", "Otvoriť knihu", "Otočiť"
	],
	rmenu: [
		"Opýtať sa", "O nás", "Celá obrazovka", "繁/简", "Väčšie písmo", "Menšie písmo", "Listovať", "Zvislé čítanie"
	],
	image: [
		"Fotka", "Otočiť", "Filtre", "Stiahnuť", "Zmazať"
	],
	tab: [
		"Moje", "Od priateľov",
		"🔍 Hľadať", "🔖 Uložené", "🎧 Hudobná skrinka", "🌙 Kalendár menštruácie", "🔒 Zámok obrazovky",
		"Opýtať sa", "Ovládanie gestami", "Úprava nálepiek na mobile"
	],
	book: [
		"O Hearty Journal", "V uponáhľanej dobe je Hearty Journal teplým a tichým útočiskom, kde ľudia odkladajú únavu, zdôverujú sa s nevyslovenými slabosťami a nachádzajú svoje pravé ja. Aj keď obloha nie je vždy modrá, kráčame ďalej – jemne, a predsa pevne."
	],
	promo: ["Špeciálna ponuka: 3 mesiace VIP za NT$99"],
	403: "Súkromný záznam, čítať ho môže len autor. Ak si autor, prihlás sa 🔒",
	404: "Adresa záznamu zrejme nie je správna",
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
	stickers: ["Moje nálepky", // Start with 1
		"Nápisy", "Počasie", "Nálady", "Všedný deň", "Móda", "Drobnosti", "Jedlo", "Cesty a krajina", "Ročné obdobia a sviatky", "Rastliny a kvety", "Zvieratká", "Roztomilé postavičky", "Fantasy"
	]
};

// pricing
_h$["p"] = _h$["p"] || {
	url: [
		"//go.hearty.me/why-VIP",
		"//go.hearty.me/hj-terms",
		"//go.hearty.me/hj-privacy"
	],
	lite: ["Lite", "Zadarmo"],
	vip: ["Hearty Journal VIP", "VIP", "(skúšobná verzia zadarmo)"],
	feat_lite: [
		"Bez reklám, súkromie na prvom mieste",
		"Text (limit 5 785 znakov)",
		"90 základných nálepiek, 20 štýlových písiem",
		"Automatické počasie, denné pripomienky",
		"Zdieľaný denník s priateľmi (2 miesta)",
		"Zámok PINom, kalendár menštruácie, playlist",
		"Synchronizácia iOS, Android, Windows, macOS",
		"Automatická záloha v cloude AWS",
		"Šifrovanie TLS 1.3",
		"Vytvorené tímom z Taiwanu",
	],
	feat_vip: [
		"Všetko z Lite a navyše: ",
		"Bez limitu znakov",
		"Fotky (10 na záznam)",
		"Fotogaléria s filtrami",
		"1 300+ nálepiek",
		"Videá z YouTube",
		"Vlastná obálka a pozadie",
		"Vlastný názov denníka a dátumy záznamov",
		"Fulltextové vyhľadávanie",
		"Export do obrázka, Word, TXT"
	],
	remark: [
		"Prečo prejsť na VIP?",
		"Prvý nákup: 3 mesiace VIP za NT$99",
		"mesačne kartou, kedykoľvek zrušiteľné cez podporu",
		"30-dňová záruka vrátenia peňazí pri prvom nákupe",
		"Funkcie VIP"
	],
	act: [
		"Zaregistruj sa zadarmo", "Skúsiť 30 dní", "Výhody VIP", "Info o predĺžení", "Prihlás sa a objednaj"
	],
	deposit: ["Predplatba", "Kúpiť", "Karta, Google Pay, Alipay, bankomat na Taiwane"],
	subscription: ["Mesačný tarif", "Kúpiť", "(len pre karty)", "Prvý nákup: 3 mesiace VIP za NT$99", "Potom od 4. mesiaca NT$99/mesiac", "Prijímame medzinárodné karty"],
	selected: ["Aktuálny", "Odporúčame"],
	currency: ["Aktuálny kurz: "],
	term: [
		"3 mesiace", "6 mesiacov", "1 rok"
	],
	unit: [
		"mesiac", "mesiac"
	],
	subtotal: "Medzisúčet NT$",
	powerby: "Technológia",
	redeem: "Uplatniť kód",

	due: "Platnosť môjho VIP",
	due_active: ["Predplatné VIP je aktívne"],
	due_date: ["Platí do ", "", "potom sa účet vráti na Lite"],
	due_days: ["Vyprší o ", " dní", "potom sa účet vráti na Lite"],
	due_tomorrow: ["Vyprší zajtra", "potom sa účet vráti na Lite"],
	due_today: ["Vyprší dnes", "potom sa účet vráti na Lite"],
	iap_ios: [
		"Mesačné automatické obnovenie, kedykoľvek zrušiteľné",
		"[Hearty Journal VIP] Podmienky predplatného iOS",
		"Lite ponúka časť funkcií a materiálov, VIP odomkne všetko",
		"Predplatné sa obnovuje mesačne za cenu prvého nákupu",
		"Po aktivácii sa automaticky obnovuje a platí cez účet Apple",
		"Začaté obdobie nemožno počas trvania zrušiť ani vrátiť",
		"Obnoví sa 24 hodín pred vypršaním; ak nechceš, zruš ho včas",
		"Tarif spravuj kedykoľvek v účte Apple > Predplatné",
		"Nikdy ťa telefonicky nežiadame o prevody; pri podozrivom hovore volaj taiwanskú linku proti podvodom 165",
		"Nákupom skúšobná verzia ihneď končí. Ak ju chceš využiť celú, kúp až po nej",
		"Podmienky služby",
		"Ochrana súkromia"
	],
	iap_and: [
		"Mesačné automatické obnovenie, kedykoľvek zrušiteľné",
		"[Hearty Journal VIP] Podmienky predplatného Android",
		"Lite ponúka časť funkcií a materiálov, VIP odomkne všetko",
		"Predplatné sa obnovuje mesačne za cenu prvého nákupu",
		"Po aktivácii sa automaticky obnovuje a platí cez Google Play",
		"Začaté obdobie nemožno počas trvania zrušiť ani vrátiť",
		"Obnoví sa 24 hodín pred vypršaním; ak nechceš, zruš ho včas",
		"Tarif spravuj kedykoľvek v Google Play > Platby a predplatné",
		"Nikdy ťa telefonicky nežiadame o prevody; pri podozrivom hovore volaj taiwanskú linku proti podvodom 165",
		"",
		"Podmienky služby",
		"Ochrana súkromia"
	]
};

// Alice
_h$["A"] = _h$["A"] || {
	// JS
	signin: ["Prihlásiť sa", "Prihlás sa a komentuj", "Najprv sa prihlás"],
	back: "Späť",
	no: "Nie",
	no_post: "Prepáč, tento príspevok sme nenašli",
	penpal_guest: ["Dnes je tvoj $day. deň od registrácie<br>Po 7 dňoch písania si môžeš nájsť pisateľa", "Idem na to"], // Eng: $day$th
	comment_limit: [
		"Proti spamu: max. 2 komentáre na príspevok. Predchádzajúce zmaž alebo uprav",
		"$chars znakov, komentár max. 85",
		"Komentár musí mať aspoň 3 znaky a súvisieť s témou"
	],
	comment_ban: [
		"Možné citlivé slová, zverejní sa po schválení",
		"Komentár bol zadržaný, spamu je naozaj veľa 🥺",
		"Pripomíname: dodržiavajme ",
		"pravidlá zverejňovania"
	],
	comment_edit: ["Upraviť komentár?", "Upraviť"],
	report_ask: ["Nahlásiť tento komentár?", "Áno, porušuje pravidlá", "Nahlásené, posúdi to náš tím"],
	url: ["Kopírovať odkaz", "Odkaz / QR kód", "Stiahnuť"],
	penpal_add: ["Pridať „<b>$id</b>“ ako pisateľa?", "Pre kvalitný kontakt odporúčame max. 2 pisateľov", "Do zdieľaného denníka"],
	verify: ["Pre všetky funkcie over e-mail a telefón", "Môj účet"],

	// DOMs
	title: "Kniha návštev Alice",
	board: "Kniha návštev Alice",
	tabs: ["Komentáre", "Obsah nástenky", "Zdieľaný denník", "Zdieľať", "Rozsvieť päť hviezdičiek", "Odkaz vo fľaši"],
	comment: ["Komentovať", "Prihlás sa a komentuj", "Prekročený limit znakov (85)"],
	profile: ["Pridať pisateľa", "Do denníka"],
	gotop: "Nahor",
	goleft: "Doľava"
};

// feed
_h$["f"] = _h$["f"] || {
	// JS
	refresh: ["Načítava sa", "Potiahni nadol na obnovenie", "Pusti na obnovenie"],
	signin: ["Prihlásiť sa", "Prihlás sa a využívaj všetky funkcie"],
	no: "Zrušiť",
	url: ["Kopírovať odkaz", "Odkaz / QR kód"],
	publish_ask: ["Ako zverejniť", "V denníku ťukni na", "a zverejni záznam", "OK", "Môj denník"],
	report_ask: ["Nahlásiť záznam „$title“?", "Áno, porušuje pravidlá", "Ďakujeme za nahlásenie „$title“, posúdi to náš tím"],

	// DOMs
	title: "Nástenka denníkov (strana $p)",
	share: "Zdieľať",
	report: "Nahlásiť",
	focus_post: "Zobraziť v príspevkoch",
	posts: "Čítať verejné záznamy",
	publish: "Zverejniť",
	gotop: "Nahor",
	back: "Späť",
	health: ["Zdravotné informácie nájdeš na webe CDC ( • ̀ω•́ )", "//www.cdc.gov.tw"]
};

// img
_h$["I"] = _h$["I"] || {
	title: "Galéria",
	upload: "Nahrať fotku",
	empty: ["Zatiaľ si nenahral(a) žiadne fotky", "Pridaj prvú do svojho záznamu"],
	add: "Pridať fotku",
	gotop: "Nahor",
	layout: ["Mriežka", "Mozaika"]
};

// account
_h$["a"] = _h$["a"] || {
	passkey: [
		"Passkey",
		"Pridať Passkey",
		"Zatiaľ žiadny Passkey",
		"Čo je Passkey?",
		"Passkey (prístupový kľúč) prihlasuje cez Face ID, odtlačok prsta alebo zámku obrazovky – bez účtu a hesla a bez rizika phishingu.<br><br>Passkey je uložený v zariadení alebo v správcovi hesiel (napr. Kľúčenka na iCloude, Správca hesiel Google). Hearty Journal uchováva len verejný kľúč, ktorým sa prihlásiť nedá.<br><br>Odstránenie Passkey neodhlási prihlásené zariadenia. Po zmene Hearty ID môže správca hesiel zobrazovať staré meno, prihlásenie to neovplyvní.",
		"Potom sa prihlásiš bez zadávania účtu a hesla",
		"Premenovať",
		"Názov Passkey (max. 20 znakov)",
		"Názov musí mať 1–20 znakov",
		"Odstrániť",
		"Odstrániť „$name“?<br>Potom sa ním neprihlásiš, prihlásené zariadenia zostanú prihlásené.<br>Zmaž ho aj zo správcu hesiel.",
		"Posledný Passkey a účet nemá heslo. Potom sa prihlásiš len cez externý účet.",
		"Toto zariadenie je prihlásené týmto Passkey a zostane prihlásené.",
		"Passkey odstránený",
		"Synchronizuje sa do ďalších zariadení",
		"Len v tomto zariadení",
		"Zatiaľ nesynchronizované",
		"Práve používaný",
		"Vytvorený $date",
		"Naposledy použitý $date",
		"Zatiaľ nepoužitý",
		"Na overenie zadaj súčasné heslo",
		"Nesprávne heslo",
		"Limit Passkey (10), najprv odstráň nepoužívaný",
		"V tomto zariadení alebo správcovi hesiel už Passkey existuje",
		"Passkey vytvorený! Nabudúce sa prihlás ním",
		"Potvrď totožnosť existujúcim Passkey",
		"Ďalej",
		"Časový limit vypršal, skús to znova",
		"Príliš veľa pokusov, skús to o 15 minút"
	],
	// JS
	ok: ["OK", "Áno", "Jasné", "Správne"],
	next: "Ďalej",
	no: "Nie",
	back: "Späť",
	upload: "Nahrať",
	rotate: "Otočiť",
	retry: "Skúsiť znova",
	signin: ["Prihlásiť sa", "Prihlás sa a využívaj všetky funkcie"],
	usage: "Napísané: $num záznamov, spolu $chars znakov",
	points: "Body: $p (zobraziť odmeny)",
	year: "", // CE
	bday_ask: ["Máš narodeniny $bday?", "Dátum narodenia sa neskôr nedá zmeniť", "Dátum narodenia uložený"],
	age: "Vek: $age",
	nickname_edited: "Tvoja prezývka je teraz „$n“",
	pwd_edit: "Zmeniť heslo",
	pwd_edited: "Zmenené",
	pwd_enter: "Zadaj nové heslo k účtu",
	pwd_confirm: "Zadaj heslo znova na potvrdenie",
	pwd_invalid: "Heslo: 6–20 znakov, skús to znova",
	pwd_mismatch: "Zadania sa nezhodujú, skús to znova",
	pwd_format: "6–20 znakov",
	pwd_apply: ["Zmeniť", "Potvrdiť zmenu"],
	pwd_ok: ["Heslo zmenené, prihlasuj sa novým",
				"Nezdieľaj účet ani heslo"],
	avatar: ["Vyber fotku (JPG, PNG, GIF, WebP, AVIF, HEIC)", "Súbor je $ext, podporované len JPG, PNG, GIF, WebP, AVIF, HEIC", "Vybrať znova", "Profilová fotka aktualizovaná"],
	avatar_err: [
		"Nepodporovaný formát alebo prípona (podporované: JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Súbor presahuje 6 MB, najprv ho zmenši",
		"Súbor nemožno prečítať alebo je poškodený",
		"Prevod HEIC/HEIF zlyhal, skús inú fotku"
	],
	email_new: "Zmeniť e-mail",
	email_confirm: "Zmeniť e-mail na „$email“?",
	email_invalid: "Neplatný formát e-mailu",
	email_verify: ["Kvôli bezpečnosti najprv over e-mail, aby si mohol/mohla ", "využívať všetky funkcie", "Overiť"],
	email_send: "Znova odoslať overovací e-mail?",
	email_sent: ["Overovací e-mail odoslaný. Otvoriť $isp?<br>(Skontroluj aj spam a Hromadné)",
				"Skontroluj poštu vrátane priečinka spam"],
	email_verified: "E-mail už je overený",
	pin: ["PIN podpory: $pin<br><small>(Urýchli overenie pri kontakte s podporou)</small>", "Stiahnuť"],
	font: [
		"Štýlové písma Hearty Journal",
		"i/fonts_en.png",
		"Používame webové písma justfont, komerčné aj open source písma.",
		"Licencie"
	],
	font_change: "Mením písmo na „$font“…",
	gender_edited: "Pohlavie uložené",
	newsletter_edited: "Odber aktualizovaný",
	lang: "Prepnúť na: $lang",
	timezone_edited: "Časové pásmo nastavené na „$tz“",
	id: "Hearty ID: ",
	id_edit: "Zmeniť ID",
	id_public: "ID a prezývka sú verejné",
	id_new: "Zadaj nové ID",
	id_format: "Aspoň 4 písmená/číslice, zmeniť sa dá len raz",
	id_invalid: "ID nespĺňa požiadavky",
	id_same: "Nesmie byť rovnaké ako súčasné ID",
	id_taken: "„<b>$id</b>“ už niekto používa, zvoľ iné",
	id_edited: "Tvoje Hearty ID je teraz „<b>$id</b>“",
	id_signout: "Odhlásiť sa a prihlásiť novým ID",
	dl: "Exportovať zálohu",
	dl_pc: "Zálohu stiahneš<br>na počítači na „www.hearty.me“",
	dl_pwd: ["Na zálohu zadaj heslo na dešifrovanie:", "Heslo: 6–20 znakov", "Dešifrovať a exportovať", "Zálohovať", "Uložené ako textový súbor v Stiahnutých súboroch. Dobre ho uschovaj"],
	dl_fmt: ["Vyber formát zálohy", "Textový súbor (.txt)", "Dokument Word s fotkami (.docx)", "Ďalej"],
	dl_doc: ["Spolu $posts záznamov, $images fotiek<br>Prevod môže trvať minúty až desiatky minút", "Exportovať", "Prevádzam: $done / $total fotiek", "Prevádzam, chvíľu strpenia", "Dokument Word uložený, dobre ho uschovaj", "$n fotiek sa nepodarilo načítať, preskočené", "Export prerušený, skús to neskôr", "Export do Wordu len v Chrome alebo Edge na počítači, inak zvoľ textový súbor", "Dátum exportu: $date, spolu $posts záznamov", "Nesprávne heslo, zadaj ho znova", "Žiadne záznamy na export", "Exportovať do Wordu"],
	vip_only: ["Táto funkcia", " je len pre VIP", "Výhody VIP", "Neskôr"],
	suspend: ["Naozaj zmazať účet? Môžeš si ho nechať! Hearty Journal stále pridáva nové funkcie a nálepky, možno sa raz vrátiš", "Na zmenu ID <u>klikni sem</u>", "Zmazať", "Ponechať"],
	auth_log: ["Nedávne prihlásenia", "$browser na $device", "Zvýšiť zabezpečenie", "//go.hearty.me/hj-sec"],
	redeem: ["Zadaj kód", "Uplatniť"],
	coupon_ok: ["Žiadosť o uplatnenie kódu „$coupon“ odoslaná",
				"Po schválení dostaneš do 3 dní „30-dňové skúšobné VIP“.<br>Pozri [Profilová fotka] > [Môj tarif]"],
	voucher_ok: "Kód „$code“ uplatnený! Získavaš $days dní VIP s platnosťou do $exp",
	voucher_invalid: "Kód je neplatný, vyčerpaný alebo už uplatnený",
	voucher_disqualified: "Skúšobný kód len raz na účet, už si ho využil(a)",
	voucher_vvip: [
		"Ponuka pre verných VVIP",
		"Predplatiť ročný tarif so zľavou 40 %?",
		"Predplatiť"
	],
	voucher_ec: [
		"Kód EC je <u>zľavový kupón do Life Shopu</u>",
		"Nakupovať"
	],

	// DOMs
	title: "Môj účet",
	tab: ["Profil", "Môj tarif"],
	headline: ["Názov"], // deprecated
	nickname: ["Prezývka", "Zmeniť"],
	pincode: "PIN podpory",
	bday: "Narodeniny",
	email: ["Poslať overovací e-mail", "Znova poslať overenie", " s do ďalšieho odoslania"],
	style: ["Vzhľad", "Prispôsobiť denník"],
	gender: ["Pohlavie", "Muž", "Žena"],
	phone: ["Telefón", "Overiť telefónne číslo"],
	pwd: "Heslo",
	pfont: ["Písmo denníka", "Ukážka písma"],
	language: "Jazyk",
	timezone: "Časové pásmo",
	newsletter: ["E-mailové upozornenia", "Upozornenia od pisateľov, newsletter"],
	reminder: ["Denná pripomienka", "Pripomínať písanie"],
	reminder_set: "Každý deň o %t vám pripomenieme písanie",
	newsletter_shop: ["Newsletter Life Shopu", "Novinky a zľavy"],
	rate: ["Povzbuď nás", "Daj nám 5 hviezdičiek"],
	misc: "Ostatné",
	auth: ["História prihlásení", "Zmazať účet"],
	chat: "Opýtať sa",
	fonts: [
		"jf Open Huninn", // 0
		"Taipei Sans", // 1
		"jf Open Huninn", // 2
		"jf JinXuan", // 3
		"jf Cream", // 4
		"LXGW WenKai", // 5
		"Yozai Writing", // 6
		"Naikai Writing", // 7
		"Jason Writing A (nefunguje v iOS)", // 8
		"Jason Writing B (nefunguje v iOS)", // 9
		"Jason Writing C (nefunguje v iOS)", // 10
		"Jason Writing D", // 11
		"Jason Writing E", // 12
		"Kurewa Gothic", // 13
		"Nani Writing (nefunguje v iOS)", // 14
		"POP Gothic", // 15
		"Star Love Pencil", // 16
		"Genyo Ming", // 17
		"HuiWen MinCho (nefunguje v iOS)", // 18
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
	title: "Môj tarif",
	back: "Späť",
	redeem: "Uplatniť kód",
	buy: ["Kúpiť Hearty Journal", "Predĺžiť Hearty Journal"],
	plan: ["Môj tarif", "Zmenu tarifu alebo karty vybavíš cez podporu, uveď Hearty ID", "„VIP (skúšobné)“ je darček pre nových používateľov<br>Po vypršaní sa účet automaticky vráti na Lite"],
	order: ["Moje objednávky"],
	plan_th: ["Stav", "Tarif", "Začiatok", "Koniec", "Hearty Journal "],
	order_th: ["Stav", "Č. objednávky", "Produkt", "Suma (TWD)", "Platba", "Faktúra"],
	order_status: ["Čaká na platbu", "Zakúpené", "Aktivované", "Nezaplatené", "Zrušené"],
	plan_status: ["Aktívne", "Vypršalo"],
	url: ["Poslať odkaz | QR kód", "Kopírovať"],

	// bill
	fail: [
		"Platba sa, žiaľ, nepodarila",
		"Skús to znova, prípadne inú kartu alebo spôsob platby",
		"Potrebuješ pomoc? Napíš nám"
	],
	fail_info: [
		"Častá príčina", "Odporúčanie",
		"Chybné číslo karty", "Skontroluj číslo karty, CVV a platnosť",
		"Nedostatok prostriedkov", "Vyčerpaný limit alebo nedostatok peňazí",
		"Nepovolené zahraničné/online platby", "Požiadaj banku o povolenie zahraničných/online platieb",
		"Banka platbu zablokovala", "Banka platbu označila ako rizikovú. Zavolaj jej a potvrď ju"
	],
	fail_btn: [
		"Skúsiť znova",
		"Kontaktovať podporu",
	],


	// thankyou
	thx: [
		"Ďakujeme za nákup, VIP je aktívne",
		"Máš otázku? Ozvi sa ヾ(๑❛ᴗ❛๑)ﾉ"
	],
	thx_th: [
		"Tarif",
		"Platnosť",
		"dní",
		"Č. objednávky",
		"Čas",
		"Suma",
		"Spôsob platby",
		"Doklad",
		"Zmenu tarifu alebo karty vybavíš cez podporu, uveď Hearty ID"
	],
	thx_inv: [
		"Taiwanskú faktúru vystavuje Hearty Creative Inc.",
		"Zobraziť faktúru"
	],
	thx_btn: [
		"Dotazník po prvom nákupe",
		"Snímka obrazovky",
		"Späť do denníka"
	]
};

// phone
_h$["pv"] = _h$["pv"] || {
	// JS
	ok: "OK",
	no: "Zrušiť",
	signin: ["Prihlásiť znova", "Odhlásené kvôli nečinnosti"],
	format: ["Číslo je príliš krátke", "Neplatný formát čísla", "Príliš veľa pokusov, skús to neskôr"],
	verify1: ["Overiť", "Overovací kód: ", "<br><small><b>SMS z Firebase</b> odoslaná, počkaj asi 45 sekúnd</small>", "Číslo $no overené"],
	verify2: ["SMS neprišla", "Pošli nám SMS a overíme ťa ručne", "Poslať SMS", "Overíme ťa do 72 hodín od prijatia SMS", "[Overenie telefónu] Hearty ID: "],
	verify3: ["SMS neprišla", "Na ručné overenie uveď Hearty ID a telefónne číslo", "Napísať na FB"],
	code: ["Kód z SMS", "Zadať znova", "Kód musí mať 6 číslic", "Nesprávny kód", "Kód vypršal, over sa znova"],
	fail: "Overenie cez SMS sa nenačítalo<br>Obnov stránku",

	// DOMs
	title: "Overenie telefónneho čísla",
	back: "Môj účet",
	verify: ["Overenie telefónu", "Telefónne číslo", "Poslať kód", "Zadaj kód", "SMS stále neprišla?", "Poslať znova", "Znova o 30 s"]
};

// email
_h$["em"] = _h$["em"] || {
	title: [
		"Odhlásiť odber: newsletter",
		"Odhlásiť odber: newsletter Life Shopu"
	],
	unsubscribe: "Odhlásiť odber Unsubscribe",
	ask: [
		"Nebudeš dostávať správy z webu ani upozornenia od pisateľov",
		"Nebudeš dostávať novinky a zľavy",
		"Áno, odhlásiť"
	],
	ok: "OK",
	back: "Späť",
	unsubscribed: "„$email“ odhlásený, zmena platí od zajtra",
	remarks: [
		"Dôležité oznámenia k účtu (zabudnuté heslo, zmeny podmienok a pod.) budeš dostávať ďalej.",
		"Ak nechceš žiadne e-maily, zmaž účet Hearty Journal"
	]
};

// points
_h$["pt"] = _h$["pt"] || {
	// JS
	ok: "Potvrdiť",
	no: "Zrušiť",
	back: "Späť",
	close: "Zavrieť",
	signin: [
		"Prihlásiť sa",
		"Najprv sa prihlás do Hearty Journal"
	],
	redeem: [
		"Vymeniť $p bodov za „$pkg“?",
		"Potvrdením súhlasíš s podmienkami výmeny, sleduj platnosť",
		"Nemáš dosť bodov na „$pkg“",
		"Túto odmenu zatiaľ nemožno vymeniť"
	],
	ec_ok: [
		"Tvoj zľavový kód NT$$amt do Life Shopu: <b>$code</b>",
		"Nájdeš ho v „Histórii výmen“, využi do $exp"
	],
	vip_ok: [
		"Výmena prebehla! Získavaš $days dní VIP s platnosťou do $exp",
		"Zobraziť"
	],

	// DOMs
	title: "Odmeny za body",
	points: ["Moje body", "b."],
	coupons: [
		"História výmen",
		"Moja história výmen",
		"Odmena",
		"Kód",
		"Vymenené",
		"Platí do",
		"Použité",
		"Zatiaľ žiadne výmeny"
	],
	label: [
		"Vybrané",
		"Obľúbené"
	],
	use: [
		"Použiť v obchode"
	],
	agree: ["Prečítaj si a odsúhlas podmienky"],
	get: [
		"Ako získať body?",
		"Body získaš denným check-inom: ťukni na zvonček vpravo hore v denníku",
		"Na check-in"
	],

	// Plans
	pkg_vip14: [
		"Hearty Journal VIP 14 dní",
		"14 dní"
	],
	pkg_vip30: [
		"Hearty Journal VIP 30 dní",
		"30 dní"
	],
	pkg_ec100: [
		"Life Shop: kupón na digitálne produkty",
		"NT$ 100"
	]
};
