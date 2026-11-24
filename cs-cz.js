/* Hearty Journal Language Pack: Ver 16 */

var _h$ = {};

_h$["lang"] = "cs-cz";

// common.head
_h$["h"] = _h$["h"] || {
	ok: "OK",
	qr: "QRkod_Hearty",
	copy: "Zkopírováno",
	err: "Hearty Journal je přetížený, zkus to později.<br>Pokud potíže trvají, kontaktuj podporu",
	satisfy: ["Ahoj! Líbí se ti Hearty Journal?", "Líbí ~", "Nelíbí"],
	rate: ["Tvoje hodnocení je pro náš tým největší povzbuzení", "Rozsvítíš nám pět hvězdiček?", "Děkujeme za tvou podporu", "Rádo se stalo"],
	notify: ["Oznámení nejsou povolena", "Nedozvíš se o zprávách ani dopisech od dopisovatelů", "Povolit", "Teď ne"],
	downloading: "Stahování"
};

// menu
_h$["m"] = _h$["m"] || {
	url: [
		"//go.hearty.me/hj-faq",
		"//go.hearty.me/hjse"
	],

	// JS
	no: "Ne",
	back: "Zpět",
	nav: ["Hlavní nabídka", "Hearty Journal", "Můj deník"],
	signout: ["Odhlásit se", "Opravdu se chceš odhlásit?"],

	// DOMs
	avatar: [
		"Můj účet", "Přihlásit se", "VIP"
	],
	menu: [
		"Verš dne", "Kniha návštěv Alice", "Nástěnka deníků", "Blog Hearty", "Můj deník", "Galerie", "Life Shop", "Přejít na VIP", "Návody", "O nás", "Odhlásit se", "Pro Windows", "Pro macOS", "Aplikace pro Windows/macOS", "Mobilní aplikace", "Language 語言", "Ohodnoť nás 5 hvězdičkami", "🐞 Ladění"
	]
};

// index
_h$["i"] = _h$["i"] || {
	passkey: [
		"Přihlásit se pomocí Passkey",
		"nebo",
		"Nemáš Passkey? Přihlas se heslem a vytvoř ho v „Můj účet“",
		"Tento Passkey byl odebrán, přihlas se jinak",
		"Ověření Passkey vypršelo, zkus to znovu",
		"Přihlášení pomocí Passkey selhalo, zkus to znovu",
		"Tento účet byl smazán nebo pozastaven"
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
	no: ["Ne", "Zrušit"],
	go: "Jdeme na to!",
	back: "Zpět",
	copy: ["Kopírovat", "Zkopírováno: "],
	email: [
		"E-mail byl ověřen", "E-mail už je ověřený", "Ověřovací odkaz vypršel", "Ověřovací odkaz je neúplný"
	],
	reset: [
		"Obnovit heslo",
		"Obnovuji a přihlašuji…",
		"Odkaz pro obnovení je neplatný",
		"Účet není vyplněn správně",
		"Odkaz pro obnovení byl odeslán",
		"Odkaz pro obnovení byl odeslán na ***@$domain",
		"Otevřít $url a zkontrolovat poštu?",
		"Tento účet neexistuje"
	],
	captcha: [
		"Bezpečnostní ověření selhalo, obnov stránku",
		"Dokonči bezpečnostní ověření níže"
	],
	ref: [
		"🎁 $user tě sem zve"
	],
	cookie: [
		"Pro přihlášení povol cookies", "Jak na to"
	],
	browser: [
		"Prohlížeč je zastaralý", "Internet Explorer není podporován"
	],
	signin: [
		"Přihlásit se",
		"Přihlašuji jako $user…",
		"Účet není vyplněn správně",
		"Účet $user neexistuje",
		"Pod $user není registrován žádný účet",
		"Účet $user byl smazán/pozastaven",
		"Účet $user čeká na smazání nebo je pozastaven za porušení pravidel",
		"Nesprávné heslo",
		"Heslo: alespoň 6 znaků",
		"Přihlásit se do „$client“ pomocí Hearty ID"
	],
	signup: [
		"Hearty ID: jen písmena, případně číslice", "Hearty ID musí mít 4–20 znaků",
		"Neplatný formát e-mailu",
		"Zadej skutečný e-mail",
		"Heslo: 6–20 znaků",
		"Hesla se neshodují",
		"⚠ Yahoo! často ztrácí poštu,\nzprávy od dopisovatelů nemusí dorazit. Přesto použít?",
		"Neplatný e-mail nebo heslo!",

		"Účet $user byl vytvořen! Zkontroluj ověřovací e-mail",
		"Účet $user byl vytvořen!",
		"Účet už existuje, přihlas se",
		"E-mail už je registrován, přihlas se",
		"Toto ID už někdo používá, zvol jiné",
		"Nesprávný e-mail",
		"Dočasné e-maily nejsou povoleny",
		"Systém je přetížen"
	],
	box: [
		"Registrace",
		"Přihlášení",
		"Obnovit heslo",
		"Vytvořit účet",
		"Přihlásit se do Hearty Journal",
		"Obnovit heslo | Najít účet",
		"💡 Vytvoř si ID (4–20 písmen a číslic)",
		"💡 Hearty ID nebo e-mail"
	],
	timer: "Znovu odeslat za $min:$sec",
	chat: [
		"Podpora Hearty",
		"Pro podporu se přihlas",
		"Napsat e-mail",
		"E-mail podpory: "
	],
	id_notice: [
		"Hearty ID<br>4–20 písmen/číslic, v komunitě veřejné",
		"Deník se šifrovaně ukládá pod tímto účtem a synchronizuje mezi mobilem a počítačem"
	],
	song: ["Harmony - 溫度日記", "Ústřední píseň Hearty Journal"],
	404: "Zadaná adresa neexistuje",

	// DOMs
	title: ["Hearty Journal 溫度日記", "Ručně kreslený soukromý deník pro každou chvíli"],
	topbar: [
		"Registrace / Přihlášení", "Aplikace pro Windows", "Aplikace pro macOS"
	],
	slogan: [
		"Hearty Journal", "<br>ručně kreslený soukromý deník", ", ",
		"4,9★ v App Store | Výběr redakce Apple | 300 000+ spokojených uživatelů", "Spojení je šifrované jako platby kartou"
	],
	scroll: "Posuň dolů",
	preview: ["Náhled deníku", "Ukončit náhled"],
	feature: [
		"Píšu pro sebe", "Uchovej to krásné z každého dne",
		"Ilustrovaný deník", "Roztomilé samolepky, lep dle libosti",
		"Sdílený deník", "Sdílej s přáteli i partnerem",
		"Bezpečí a soukromí", "Šifrované spojení na úrovni bank"
	],
	testimonial: [
		"Co říkají uživatelé Hearty Journal",
		"Pro slova, která zůstala nevyslovena. Doporučuji Hearty Journal.", "Haitaibear, autor populární psychologie",
		"Jemné a klidné, ideální na rozhovor se sebou", "Cindy Liu",
		"Krásný vzhled a automatické ukládání je moc šikovné", "Wu Chi",
		"Díky, Hearty, žes mě provázel mnoha těžkými chvílemi", "Yan-Xuan",
		"Verze pro počítač se mi líbí, stáhla jsem i mobilní", "Xiao-Jun"
	],
	press: [
		"Média",
		"Bnext Media", "Free Group", "Aotter girls", "Womany", "Sheaspire", "SEinsights", "Taiwan Startup Stadium", "Innosquare, New Taipei", "UDN", "Vita News"
	],
	action: [
		"Začni žít s teplem u srdce", "Vyzkoušej hned"
	],
	rate: "Ohodnoť Hearty Journal 5 hvězdičkami",
	footer: [
		"Language 語言",
		"Pro Windows",
		"Pro macOS",
		"Funkce",
		"Recenze",
		"Spolupráce",
		"Pro média",
		"Časté dotazy",
		"Ochrana dat",
		"Podmínky služby",
		"Ochrana soukromí",
		"Bezpečnostní certifikát",
		"Ústřední píseň",
		"Nien, zakladatel",
		"Jiayi, spoluzakladatelka",
		"Ochranná známka",
		"O nás"
	],
	cookies: ["Používáme cookies. Pokračováním souhlasíš se zásadami ochrany soukromí.", "OK"],
	copyright: "2016-"+new Date().getFullYear().toString()+" Hearty Creative Inc. a přidružené společnosti",
	isp: "Hostováno na Cloudways",
	auth: [
		"Zaregistruj se zdarma",
		"Máš účet? Přihlas se",
		"Zapomenuté ID/heslo",
		"Už si vzpomínáš? Přihlas se",
		"Účet", "💡 Hearty ID nebo e-mail",
		"Heslo", "🔑 6–20 znaků",
		"Potvrzení", "🔑 Zadej heslo znovu", "Zobrazit heslo",
		"Zapamatovat si mě", "Je mi 18+ a souhlasím s podmínkami služby"
	],
	lang: "Přepnout na: $lang"
};

// editor
_h$["e"] = _h$["e"] || {
	// JS
	url: [
		"//go.hearty.me/hj-faq",
		"//go.hearty.me/hj-data",
		"//bitly.com/3E0ZJ7Q"
	],
	ok: ["OK", "Rozumím", "Jasně"],
	no: ["Ne", "Zrušit"],
	retry: "Zkusit znovu",
	back: "Zpět",
	gotop: "Nahoru",
	signin: ["Přihlásit se", "Přihlas se a ", "využívej všechny funkce"],
	signout: "Odhlásit se",
	name: ["Moje jméno", "Jak ti máme říkat?<br>(Přezdívka je veřejná, ne skutečné jméno)", "Vítej, $name, ve své vlastní zahradě", "Mám ti <u>každý večer připomenout deník</u>?", "Ano, připomínej"],
	get_stickers: ["Hurá! Samolepky jsou tvoje", "Jdu se podívat"],
	welcome: ["Vítej zpět, $name", "Zpět do deníku", "Nejsi přihlášen(a)"],
	year: "", // CE
	maintenance: ["Údržba systému: ", "služba bude asi hodinu nedostupná"],
	update: ["Stará verze aplikace, aktualizuj pro nové funkce", "Aktualizovat", "Připomenout zítra"],
	search: ["Hledat v mých záznamech", "Klíčové slovo", "Hledat", "Nic nenalezeno"],
	bookmark: [
		"Uložený záznam: 1",
		"Uložené záznamy: $no", // 複數
		"Uložit",
		"Bez názvu"
	],
	catalog: [
		"Záznamy: 1",
		"Záznamy: $no", // 複數
		"Nový záznam",
		"Zatím žádné záznamy",
		"Zatím s tebou nikdo nesdílí deník",
		"Toto je první nebo poslední záznam",
		"Žádné záznamy ke čtení",
		"Předchozí",
		"Další"
	],
	sticker: ["Zvětšit", "Otočit", "Vložit", "Smazat", "Dosažen limit samolepek", "Výhody VIP"],
	verify_required: [
		"Ověř $item a doplň profil, abys mohl(a) $act",
		"telefonní číslo", "využívat všechny funkce",
		"nastavit sdílení", "zveřejnit záznam", "přidat dopisovatele", "sdílet s dopisovateli"
	],
	privacy: [
		"Záznam je veřejný", "Záznam je zamčený",
		'Aby se ověřilo, že záznam splňuje <a target="_blank" href="//go.hearty.me/publish"><u>pravidla zveřejňování</u></a>, ',
		"bude zveřejněn až po schválení",
		"bude po schválení automaticky publikován",
		"Neodesílej opakovaně, mohl by to být spam (;´ㅁ`)-3<br>PS: Bez oznámení se o schválení nedozvíš"
	],
	publish: [
		"Záznam je krátký, napiš ještě něco~<br>(alespoň 100 znaků)",
		"Dobře, mám nápad",
		"Zveřejnit „$title“ na nástěnce?",
		"Záznamy na nástěnce musí být veřejné. Zveřejnit?",
		"Zveřejnit",
		"„$title“ je na nástěnce",
		"Podívat se",
		"Zpět k záznamu",
		'Dodržuj <a target="_blank" href="//go.hearty.me/publish"><u>[pravidla zveřejňování]</u></a>. Dopisovatele hledej v <a target="_blank" href="//go.hearty.me/hjpd"><u>[koutku dopisovatelů]</u></a>, zde nesdílej osobní údaje</small>',
		"Stáhnout „$title“ z nástěnky?",
		"Stáhnout",
		"Záznam byl stažen",
		"Na nástěnku jen 1 záznam denně, další zítra"
	],
	penpal_add: [
		"Hearty ID nebo e-mail přítele",
		"Lite: 2 dopisovatelé; VIP: bez omezení",
		"Zadej Hearty ID nebo e-mail",
		"Přidat",
		"Pro více než 2 dopisovatele přejdi na VIP",
		"Přidat „<b>$name</b>“ (Hearty ID: $user) jako dopisovatele?",
		"$name je teď tvůj dopisovatel",
		"„$user“ už je přidán, nebo přidání nepovoluje",
		"Uživatel „$user“ nenalezen",
		"„$user“ si tě archivoval(a)",
		"Hej, sebe přidat nemůžeš"
	],
	penpal_delete: [
		"Po archivaci se vrátí sdílené záznamy a znovu se přidat nepůjde. Rozmysli si to!",
		"Koho chceš archivovat?",
		"- Vyber osobu -",
		"Sdílené záznamy se vrátí a znovu se přidat nepůjde. Opravdu archivovat „$user“?",
		"Archivovat",
		"„$user“ archivován(a)"
	],
	penpal_send: [
		"Sdíleno s: $add",
		"Nastavení sdílení aktualizováno"
	],
	pin: [
		"PIN podpory: ", "Urychlí ověření při kontaktu s podporou"
	],
	chat: [
		"Hearty ID: "
	],
	membership: [
		"Lite", "VIP (zkušební)", "VIP"
	],
	feedback: [
		"Požadavek č. #$no",
		"Vyplň své jméno",
		"Neplatný formát e-mailu",
		"Zpráva je příliš krátká",
		', odpovíme ti <b>e-mailem do 24 hodin, sleduj schránku</b><br>Odpovíme vždy. Pokud do dvou dnů nic nepřijde, zkontroluj spam nebo nám napiš na <a target="_blank" href="//hearty.app/ms"><u>FB stránku Hearty Journal</u></a> ´・ω・｀<br><br>Pokud tě Hearty Journal baví, mrkni na VIP. Tvé předplatné nám pomůže vyvíjet funkce, tvořit nové materiály a zlepšovat služby.',
		"Rozumím",
		"Co nabízí VIP",
		"Něco se pokazilo, zkus to později"
	],
	video: [
		"Odkaz na video YouTube",
		"nebo klikni pro nahrání",
		"Potvrdit", // 設為
		"Přidat do playlistu",
		"Video vloženo",
		"Odkaz na YouTube je neplatný",
		"Video bylo smazáno, není veřejné nebo nejde vložit<br>Zkontroluj odkaz",
		"Zkontrolovat",
		"Opravdu smazat „$title“?",
		"Smazat",
		"Nastavit (prázdné = odebrat)", // 預留未使用
		"https://youtu.be/vYFnZdUiUyg (prázdné = odebrat video)"
	],
	yt: [
		"Hudební skříňka",
		"Řadit",
		"Smazat",
		"Zhasnout",
		"Zatím žádné písně, klikni na ➕ a přidej první",
		"Oblíbené písně hrají dokola na pozadí",
		"Moje písně",
		"Přehrát video"
	],
	gps: [
		"Zapnout polohu a přidat k záznamu počasí?",
		"⛅ „Povol“ přístup k GPS a chvíli počkej…",
		"Počasí přidáno",
		"Bez signálu GPS nelze přidat počasí",
		"Problém s polohou? Ikonka v adresním řádku Chrome"
	],
	chars_max: [
		"Záznam má $chars znaků, limit je 10 000 (včetně symbolů)",
		"Mimochodem, dokáže to opravdu někdo?"
	],
	chars: [
		"$chars znaků překračuje limit Lite ($limit znaků)",
		"Výhody VIP",
		"Připomenout později"
	],
	leave: "Záznam je uložen. Opravdu odejít?",
	date: ["Datum záznamu", "Datum nastaveno na: ", "Řazeno podle data: nejnovější nahoře"],
	subject: ["Záznam z $date", "Název záznamu", "Nový název „$title“", "Uložit"],
	archive: [
		"Opravdu smazat „$title“? Nelze vrátit", "Ano, zapomenout", "„$title“ smazáno"
	],
	unsafe: "Google Safe Browsing: tento odkaz je nebezpečný, neotvírej ho",
	offline: "Pomalé připojení, zkus to později",
	lock: [
		"Nastavit zámek obrazovky? Nikdo ti nenakoukne",
		"Nastavit",
		"Vypnout zámek",
		"Zámek obrazovky vypnut",
		"Zapomněl(a) jsem obojí",
		"Zapomněl(a) jsi <u>PIN zámku</u> i <u>heslo k účtu</u>?<br>Odhlas se a obnov heslo (zámek se také vypne)"
	],
	pincode: [
		"Zadej PIN",
		"Potvrď PIN",
		"Zadej PIN nebo heslo k účtu",
		"Nesprávný PIN",
		"Heslo zřejmě není správné",
		"Zadání se neshodují, nastav znovu",
		"PIN smí obsahovat jen číslice",
		"PIN nastaven na: $pin"
	],
	screenshot: "Obrázek se vytváří, stahování začne za 10 sekund",
	pc: [
		"Verze pro počítač", 'Na počítači otevři „www.hearty.me“ <i class="fal fa-globe"></i>',
		"Vyzkoušej verzi pro počítač", "Velká obrazovka, pohodlné čtení", "Na klávesnici se píše lépe", "Synchronizace mobilu a počítače", "Vyzkoušet"
	],
	picture: [
		"Nahrát fotku",
		"Vyber fotku (JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Nahrát",
		"Vybrat znovu",
		"Max. 10 fotek na záznam",
		"Soubor je $ext, podporováno jen JPG, PNG, GIF, WebP, AVIF, HEIC",
		"Fotka nahrána",
		"Stahování, chvíli strpení",
		"Fotka je ve Stažených souborech"
	],
	picture_err: [
		"Nepodporovaný formát nebo přípona (podporováno: JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Soubor přesahuje 6 MB, nejdřív ho zmenši",
		"Soubor nelze přečíst nebo je poškozený",
		"Převod HEIC/HEIF selhal, zkus jinou fotku"
	],
	picture_remove: [
		"Opravdu smazat tuto fotku?",
		"Smazat natrvalo",
		"Fotka smazána"
	],
	file: "Hearty_Journal",
	trial: [
		"30denní zkušební VIP je aktivní, vše je odemčené",
		"Po skončení zkušební doby $exp se účet vrátí na Lite a nic ti nestrhneme.<br>Na VIP můžeš přejít, kdy budeš chtít ( ´･ヮ･)<br>Všechny tvé záznamy zůstanou v Hearty Journal ♡",
		"Porovnat verze",
		"Jasně, jdeme na to"
	],
	purchased: [
		"VIP je aktivní!",
		"Věnuješ nám 3 minuty na dotazník?",
		"(Za první vyplnění 7 dní VIP zdarma)",
		"Vyplnit",
		"Už jsem vyplnil(a)"
	],
	n_verify_email: [
		"Ověř $item a využívej všechny funkce",
		"Ověř e-mail, ať ti odpovědi dorazí"
	],
	n_verify_phone: "Propoj telefon pro vyšší zabezpečení",
	n_vip_prefix: "Tvůj tarif VIP",
	n_char_limit_exceed: "$chars znaků, limit vyčerpán, přejdi na VIP",
	n_daily_checkin: [
		"Dnes ještě nemáš check-in",
		"Dnes už máš hotovo"
	],
	checkin: [
		"Check-in",
		"Moje body: ", "b.",
		"Za check-in získáš 1 bod",
		"Získáváš 1 bod, celkem máš $p b.",
		"Dnes už máš hotovo",
		"Přijď zítra",
		"Body za denní check-in pro návyk psaní<br>Později je vyměníš za odměny~"
	],
	reward: [
		"Zobrazit odměny"
	],
	pd: [
		"Kalendář menstruace",
		"Příště: ",
		"Průměrný cyklus: ",
		"dní",
		"Začátek",
		"Konec",
		"Cyklus",
		"Přidat záznam",

		"Dnes",
		"Smazat",
		"Opravdu smazat?",
		"Dnes: $d. den", // Eng: $d$th
		"Příště: za $d dní"
	],

	// customize my journal
	headline: [
		"Název deníku",
		"Můj deník se jmenuje:",
		"Uložit",
		"Nový název „$headline“",
		"Klidně nech prázdné ~"
	],
	style: [
		"Přizpůsobit deník",
		"Výchozí",
		"Chybí inspirace?",
		"//en.faq.hearty.me/tutorial/styles"
	],
	cover: [
		"Obálka",
		"Nahrát obálku",
		"Ideální poměr: 1,9:1",
		"Potvrdit", // crop
		"Zrušit",
		"Nepodporovaný formát: $ext",
		"Obálka změněna",
		"Obálka obnovena"
	],
	bg: [
		"Pozadí",
		"Nahrát pozadí",
		"Nepodporovaný formát: $ext",
		"Pozadí změněno",
		"Pozadí obnoveno"
	],
	color: [
		"Barva deníku",
		"Barva aktualizována"
	],

	// DOMs
	title: "Můj deník",
	header: [
		"Obsah", "Oznámení", "Samolepky", "Tarify", "Nahlásit problém", "Hotovo"
	],
	notification: [
		"Žádná oznámení",
		"Verze pro počítač",
		"Zeptat se",
		"Obnovit",
		"Diagnostika",
		"Přejdi na VIP a užívej si všechny funkce"
	],
	link: [
		"Přechod na jiný web",
		"Ověřeno službou Google Safe Browsing",
		"Pokračovat"
	],
	share: [
		"Nastavení záznamu", "Odkaz", "Soukromý", "Chráněný heslem", "Veřejný", "Zveřejnit na nástěnce", "Soukromý obsah nezveřejňuj"
	],
	penpal: [
		"Sdílený deník", "Přidat dopisovatele", "Archivovat dopisovatele", "Zatím žádní dopisovatelé, nejdřív někoho přidej", "Poslat tento záznam: "
	],
	qa: [
		"Zeptat se", "Funkce a používání", "Účet, platby a ostatní", "Ochrana dat a soukromí", "Diagnostika sítě", "Hlášení, návrhy a povzbuzení", "Stav služeb", "Vše funguje normálně"
	],
	cs: [
		"Napiš nám", "Dotazy k funkcím? Klikni pro FAQ", "Hlášení / zpětná vazba / povzbuzení",
		"Odpovíme e-mailem, sleduj schránku", "Odeslat", "Můj PIN podpory: ",
		"Používáš beta verzi"
	],
	csform: ["Moje jméno", "VIP", "Lite", "Přidat snímek obrazovky"],
	gift: [
		"Vyzvedni si dárek", "Vyzvednout", "50 uklidňujících samolepek Hearty Journal"
	],
	prologue: "Uchovej si dnešní náladu",
	pwd: "Zadej heslo",
	warn: [
		"Údržba", "Pomalé připojení", "Nestabilní připojení", "Slabá baterie"
	],
	tool: [
		"Uložit", "Nový záznam", "Smazat", "Sdílet", "Uložit jako obrázek", "Předchozí", "Další", "Celá obrazovka", "Otevřít knihu", "Otočit"
	],
	rmenu: [
		"Zeptat se", "O nás", "Celá obrazovka", "繁/简", "Větší písmo", "Menší písmo", "Listovat", "Svislé čtení"
	],
	image: [
		"Fotka", "Otočit", "Filtry", "Stáhnout", "Smazat"
	],
	tab: [
		"Moje", "Od přátel",
		"🔍 Hledat", "🔖 Uložené", "🎧 Hudební skříňka", "🌙 Kalendář menstruace", "🔒 Zámek obrazovky",
		"Zeptat se", "Ovládání gesty", "Úprava samolepek na mobilu"
	],
	book: [
		"O Hearty Journal", "V uspěchané době je Hearty Journal teplým a tichým útočištěm, kde lidé odkládají únavu, svěřují se s nevyslovenými slabostmi a nacházejí své pravé já. I když nebe není vždy modré, kráčíme dál – jemně, a přesto pevně."
	],
	promo: ["Speciální nabídka: 3 měsíce VIP za NT$99"],
	403: "Soukromý záznam, číst ho může jen autor. Jsi-li autor, přihlas se 🔒",
	404: "Adresa záznamu zřejmě není správná",
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
	stickers: ["Moje samolepky", // Start with 1
		"Nápisy", "Počasí", "Nálady", "Všední den", "Móda", "Drobnosti", "Jídlo", "Cesty a krajina", "Roční období a svátky", "Rostliny a květiny", "Zvířátka", "Roztomilé postavičky", "Fantasy"
	]
};

// pricing
_h$["p"] = _h$["p"] || {
	url: [
		"//go.hearty.me/why-VIP",
		"//go.hearty.me/hj-terms",
		"//go.hearty.me/hj-privacy"
	],
	lite: ["Lite", "Zdarma"],
	vip: ["Hearty Journal VIP", "VIP", "(zkušební verze zdarma)"],
	feat_lite: [
		"Bez reklam, soukromí na prvním místě",
		"Text (limit 5 785 znaků)",
		"90 základních samolepek, 20 stylových písem",
		"Automatické počasí, denní připomínky",
		"Sdílený deník s přáteli (2 místa)",
		"Zámek PINem, kalendář menstruace, playlist",
		"Synchronizace iOS, Android, Windows, macOS",
		"Automatická záloha v cloudu AWS",
		"Šifrování TLS 1.3",
		"Vytvořeno týmem z Tchaj-wanu",
	],
	feat_vip: [
		"Vše z Lite a navíc: ",
		"Bez limitu znaků",
		"Fotky (10 na záznam)",
		"Fotogalerie s filtry",
		"1 300+ samolepek",
		"Videa z YouTube",
		"Vlastní obálka a pozadí",
		"Vlastní název deníku a data záznamů",
		"Fulltextové hledání",
		"Export do obrázku, Word, TXT"
	],
	remark: [
		"Proč přejít na VIP?",
		"První nákup: 3 měsíce VIP za NT$99",
		"měsíčně kartou, kdykoli zrušitelné přes podporu",
		"30denní záruka vrácení peněz při prvním nákupu",
		"Funkce VIP"
	],
	act: [
		"Zaregistruj se zdarma", "Zkusit 30 dní", "Výhody VIP", "Info o prodloužení", "Přihlas se a objednej"
	],
	deposit: ["Předplatba", "Koupit", "Karta, Google Pay, Alipay, bankomat na Tchaj-wanu"],
	subscription: ["Měsíční tarif", "Koupit", "(jen pro karty)", "První nákup: 3 měsíce VIP za NT$99", "Poté od 4. měsíce NT$99/měsíc", "Přijímáme mezinárodní karty"],
	selected: ["Aktuální", "Doporučujeme"],
	currency: ["Aktuální kurz: "],
	term: [
		"3 měsíce", "6 měsíců", "1 rok"
	],
	unit: [
		"měsíc", "měsíc"
	],
	subtotal: "Mezisoučet NT$",
	powerby: "Technologie",
	redeem: "Uplatnit kód",

	due: "Platnost mého VIP",
	due_active: ["Předplatné VIP je aktivní"],
	due_date: ["Platí do ", "", "poté se účet vrátí na Lite"],
	due_days: ["Vyprší za ", " dní", "poté se účet vrátí na Lite"],
	due_tomorrow: ["Vyprší zítra", "poté se účet vrátí na Lite"],
	due_today: ["Vyprší dnes", "poté se účet vrátí na Lite"],
	iap_ios: [
		"Měsíční automatické obnovení, kdykoli zrušitelné",
		"[Hearty Journal VIP] Podmínky předplatného iOS",
		"Lite nabízí část funkcí a materiálů, VIP odemkne vše",
		"Předplatné se obnovuje měsíčně za cenu prvního nákupu",
		"Po aktivaci se automaticky obnovuje a platí přes účet Apple",
		"Započaté období nelze v průběhu zrušit ani vrátit",
		"Obnoví se 24 hodin před vypršením; nechceš-li, zruš ho včas",
		"Tarif spravuj kdykoli v účtu Apple > Předplatná",
		"Nikdy tě telefonicky nežádáme o převody; při podezřelém hovoru volej tchajwanskou linku proti podvodům 165",
		"Nákupem zkušební verze ihned končí. Chceš-li ji využít celou, kup až po ní",
		"Podmínky služby",
		"Ochrana soukromí"
	],
	iap_and: [
		"Měsíční automatické obnovení, kdykoli zrušitelné",
		"[Hearty Journal VIP] Podmínky předplatného Android",
		"Lite nabízí část funkcí a materiálů, VIP odemkne vše",
		"Předplatné se obnovuje měsíčně za cenu prvního nákupu",
		"Po aktivaci se automaticky obnovuje a platí přes Google Play",
		"Započaté období nelze v průběhu zrušit ani vrátit",
		"Obnoví se 24 hodin před vypršením; nechceš-li, zruš ho včas",
		"Tarif spravuj kdykoli v Google Play > Platby a předplatná",
		"Nikdy tě telefonicky nežádáme o převody; při podezřelém hovoru volej tchajwanskou linku proti podvodům 165",
		"",
		"Podmínky služby",
		"Ochrana soukromí"
	]
};

// Alice
_h$["A"] = _h$["A"] || {
	// JS
	signin: ["Přihlásit se", "Přihlas se a komentuj", "Nejdřív se přihlas"],
	back: "Zpět",
	no: "Ne",
	no_post: "Promiň, tento příspěvek jsme nenašli",
	penpal_guest: ["Dnes je tvůj $day. den od registrace<br>Po 7 dnech psaní si můžeš najít dopisovatele", "Jdu na to"], // Eng: $day$th
	comment_limit: [
		"Proti spamu: max. 2 komentáře na příspěvek. Předchozí smaž nebo uprav",
		"$chars znaků, komentář max. 85",
		"Komentář musí mít alespoň 3 znaky a souviset s tématem"
	],
	comment_ban: [
		"Možná citlivá slova, zveřejní se po schválení",
		"Komentář byl zadržen, spamu je opravdu hodně 🥺",
		"Připomínáme: dodržujme ",
		"pravidla zveřejňování"
	],
	comment_edit: ["Upravit komentář?", "Upravit"],
	report_ask: ["Nahlásit tento komentář?", "Ano, porušuje pravidla", "Nahlášeno, posoudí to náš tým"],
	url: ["Kopírovat odkaz", "Odkaz / QR kód", "Stáhnout"],
	penpal_add: ["Přidat „<b>$id</b>“ jako dopisovatele?", "Pro kvalitní kontakt doporučujeme max. 2 dopisovatele", "Ke sdílenému deníku"],
	verify: ["Pro všechny funkce ověř e-mail a telefon", "Můj účet"],

	// DOMs
	title: "Kniha návštěv Alice",
	board: "Kniha návštěv Alice",
	tabs: ["Komentáře", "Obsah nástěnky", "Sdílený deník", "Sdílet", "Rozsviť pět hvězdiček", "Vzkaz v láhvi"],
	comment: ["Komentovat", "Přihlas se a komentuj", "Překročen limit znaků (85)"],
	profile: ["Přidat dopisovatele", "Do deníku"],
	gotop: "Nahoru",
	goleft: "Doleva"
};

// feed
_h$["f"] = _h$["f"] || {
	// JS
	refresh: ["Načítání", "Táhni dolů pro obnovení", "Pusť pro obnovení"],
	signin: ["Přihlásit se", "Přihlas se a využívej všechny funkce"],
	no: "Zrušit",
	url: ["Kopírovat odkaz", "Odkaz / QR kód"],
	publish_ask: ["Jak zveřejnit", "V deníku klepni na", "a zveřejni záznam", "OK", "Můj deník"],
	report_ask: ["Nahlásit záznam „$title“?", "Ano, porušuje pravidla", "Děkujeme za nahlášení „$title“, posoudí to náš tým"],

	// DOMs
	title: "Nástěnka deníků (strana $p)",
	share: "Sdílet",
	report: "Nahlásit",
	focus_post: "Zobrazit v příspěvcích",
	posts: "Číst veřejné záznamy",
	publish: "Zveřejnit",
	gotop: "Nahoru",
	back: "Zpět",
	health: ["Zdravotní informace najdeš na webu CDC ( • ̀ω•́ )", "//www.cdc.gov.tw"]
};

// img
_h$["I"] = _h$["I"] || {
	title: "Galerie",
	upload: "Nahrát fotku",
	empty: ["Zatím jsi nenahrál(a) žádné fotky", "Přidej první do svého záznamu"],
	add: "Přidat fotku",
	gotop: "Nahoru",
	layout: ["Mřížka", "Mozaika"]
};

// account
_h$["a"] = _h$["a"] || {
	passkey: [
		"Passkey",
		"Přidat Passkey",
		"Zatím žádný Passkey",
		"Co je Passkey?",
		"Passkey (přístupový klíč) přihlašuje přes Face ID, otisk prstu nebo zámek obrazovky – bez účtu a hesla a bez rizika phishingu.<br><br>Passkey je uložen v zařízení nebo ve správci hesel (např. Klíčenka na iCloudu, Správce hesel Google). Hearty Journal uchovává jen veřejný klíč, kterým se přihlásit nelze.<br><br>Odebrání Passkey neodhlásí přihlášená zařízení. Po změně Hearty ID může správce hesel zobrazovat staré jméno, přihlášení to neovlivní.",
		"Pak se přihlásíš bez zadávání účtu a hesla",
		"Přejmenovat",
		"Název Passkey (max. 20 znaků)",
		"Název musí mít 1–20 znaků",
		"Odebrat",
		"Odebrat „$name“?<br>Poté se jím nepřihlásíš, přihlášená zařízení zůstanou přihlášena.<br>Smaž ho i ze správce hesel.",
		"Poslední Passkey a účet nemá heslo. Pak se přihlásíš jen přes externí účet.",
		"Toto zařízení je přihlášeno tímto Passkey a zůstane přihlášené.",
		"Passkey odebrán",
		"Synchronizuje se do dalších zařízení",
		"Jen v tomto zařízení",
		"Zatím nesynchronizováno",
		"Právě používaný",
		"Vytvořeno $date",
		"Naposledy použito $date",
		"Zatím nepoužito",
		"Pro ověření zadej současné heslo",
		"Nesprávné heslo",
		"Limit Passkey (10), nejdřív odeber nepoužívaný",
		"V tomto zařízení nebo správci hesel už Passkey existuje",
		"Passkey vytvořen! Příště se přihlas jím",
		"Potvrď totožnost stávajícím Passkey",
		"Další",
		"Časový limit vypršel, zkus to znovu",
		"Příliš mnoho pokusů, zkus to za 15 minut"
	],
	// JS
	ok: ["OK", "Ano", "Jasně", "Správně"],
	next: "Další",
	no: "Ne",
	back: "Zpět",
	upload: "Nahrát",
	rotate: "Otočit",
	retry: "Zkusit znovu",
	signin: ["Přihlásit se", "Přihlas se a využívej všechny funkce"],
	usage: "Napsáno: $num záznamů, celkem $chars znaků",
	points: "Body: $p (zobrazit odměny)",
	year: "", // CE
	bday_ask: ["Máš narozeniny $bday?", "Datum narození nelze později změnit", "Datum narození uloženo"],
	age: "Věk: $age",
	nickname_edited: "Tvá přezdívka je teď „$n“",
	pwd_edit: "Změnit heslo",
	pwd_edited: "Změněno",
	pwd_enter: "Zadej nové heslo k účtu",
	pwd_confirm: "Zadej heslo znovu pro potvrzení",
	pwd_invalid: "Heslo musí mít 6–20 znaků, zkus to znovu",
	pwd_mismatch: "Zadání se neshodují, zkus to znovu",
	pwd_format: "6–20 znaků",
	pwd_apply: ["Změnit", "Potvrdit změnu"],
	pwd_ok: ["Heslo změněno, přihlašuj se novým",
				"Nesdílej účet ani heslo"],
	avatar: ["Vyber fotku (JPG, PNG, GIF, WebP, AVIF, HEIC)", "Soubor je $ext, podporováno jen JPG, PNG, GIF, WebP, AVIF, HEIC", "Vybrat znovu", "Profilová fotka aktualizována"],
	avatar_err: [
		"Nepodporovaný formát nebo přípona (podporováno: JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Soubor přesahuje 6 MB, nejdřív ho zmenši",
		"Soubor nelze přečíst nebo je poškozený",
		"Převod HEIC/HEIF selhal, zkus jinou fotku"
	],
	email_new: "Změnit e-mail",
	email_confirm: "Změnit e-mail na „$email“?",
	email_invalid: "Neplatný formát e-mailu",
	email_verify: ["Kvůli bezpečnosti nejdřív ověř e-mail, abys mohl(a) ", "využívat všechny funkce", "Ověřit"],
	email_send: "Znovu odeslat ověřovací e-mail?",
	email_sent: ["Ověřovací e-mail odeslán. Otevřít $isp?<br>(Zkontroluj i spam a Hromadné)",
				"Zkontroluj poštu, včetně složky spam"],
	email_verified: "E-mail už je ověřený",
	pin: ["PIN podpory: $pin<br><small>(Urychlí ověření při kontaktu s podporou)</small>", "Stáhnout"],
	font: [
		"Stylová písma Hearty Journal",
		"i/fonts_en.png",
		"Používáme webová písma justfont, komerční i open source písma.",
		"Licence"
	],
	font_change: "Měním písmo na „$font“…",
	gender_edited: "Pohlaví uloženo",
	newsletter_edited: "Odběr aktualizován",
	lang: "Přepnout na: $lang",
	timezone_edited: "Časové pásmo nastaveno na „$tz“",
	id: "Hearty ID: ",
	id_edit: "Změnit ID",
	id_public: "ID a přezdívka jsou veřejné",
	id_new: "Zadej nové ID",
	id_format: "Alespoň 4 písmena/číslice, změnit lze jen jednou",
	id_invalid: "ID nesplňuje požadavky",
	id_same: "Nesmí být stejné jako současné ID",
	id_taken: "„<b>$id</b>“ už někdo používá, zvol jiné",
	id_edited: "Tvé Hearty ID je teď „<b>$id</b>“",
	id_signout: "Odhlásit se a přihlásit novým ID",
	dl: "Exportovat zálohu",
	dl_pc: "Zálohu stáhneš<br>na počítači na „www.hearty.me“",
	dl_pwd: ["Pro zálohu zadej heslo k dešifrování:", "Heslo: 6–20 znaků", "Dešifrovat a exportovat", "Zálohovat", "Uloženo jako textový soubor ve Stažených souborech. Dobře ho uschovej"],
	dl_fmt: ["Vyber formát zálohy", "Textový soubor (.txt)", "Dokument Word s fotkami (.docx)", "Další"],
	dl_doc: ["Celkem $posts záznamů, $images fotek<br>Převod může trvat minuty až desítky minut", "Exportovat", "Převádím: $done / $total fotek", "Převádím…", "Dokument Word uložen, dobře ho uschovej", "$n fotek nešlo načíst, přeskočeno", "Export přerušen, zkus to později", "Export do Wordu jen v Chrome nebo Edge na počítači, jinak zvol textový soubor", "Datum exportu: $date, celkem $posts záznamů", "Nesprávné heslo, zadej ho znovu", "Žádné záznamy k exportu", "Exportovat do Wordu"],
	vip_only: ["Tato funkce", " je jen pro VIP", "Výhody VIP", "Později"],
	suspend: ["Opravdu smazat účet? Můžeš si ho nechat! Hearty Journal stále přidává nové funkce a samolepky, třeba se jednou vrátíš", "Pro změnu ID <u>klikni sem</u>", "Smazat", "Ponechat"],
	auth_log: ["Nedávná přihlášení", "$browser na $device", "Zvýšit zabezpečení", "//go.hearty.me/hj-sec"],
	redeem: ["Zadej kód", "Uplatnit"],
	coupon_ok: ["Žádost o uplatnění kódu „$coupon“ odeslána",
				"Po schválení dostaneš do 3 dnů „30denní zkušební VIP“.<br>Viz [Profilová fotka] > [Můj tarif]"],
	voucher_ok: "Kód „$code“ uplatněn! Získáváš $days dní VIP s platností do $exp",
	voucher_invalid: "Kód je neplatný, vyčerpaný nebo už uplatněný",
	voucher_disqualified: "Zkušební kód jen jednou na účet, už jsi ho využil(a)",
	voucher_vvip: [
		"Nabídka pro věrné VVIP",
		"Předplatit roční tarif se slevou 40 %?",
		"Předplatit"
	],
	voucher_ec: [
		"Kód EC je <u>slevový kupon do Life Shopu</u>",
		"Nakupovat"
	],

	// DOMs
	title: "Můj účet",
	tab: ["Profil", "Můj tarif"],
	headline: ["Název"], // deprecated
	nickname: ["Přezdívka", "Změnit"],
	pincode: "PIN podpory",
	bday: "Narozeniny",
	email: ["Poslat ověřovací e-mail", "Znovu poslat ověření", " s do dalšího odeslání"],
	style: ["Vzhled", "Přizpůsobit deník"],
	gender: ["Pohlaví", "Muž", "Žena"],
	phone: ["Telefon", "Ověřit telefonní číslo"],
	pwd: "Heslo",
	pfont: ["Písmo deníku", "Náhled písma"],
	language: "Jazyk",
	timezone: "Časové pásmo",
	newsletter: ["E-mailová oznámení", "Oznámení od dopisovatelů, newsletter"],
	reminder: ["Denní připomínka", "Připomínat psaní"],
	reminder_set: "Každý den v %t vám připomeneme psaní",
	newsletter_shop: ["Newsletter Life Shopu", "Novinky a slevy"],
	rate: ["Povzbuď nás", "Dej nám 5 hvězdiček"],
	misc: "Ostatní",
	auth: ["Historie přihlášení", "Smazat účet"],
	chat: "Zeptat se",
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
	title: "Můj tarif",
	back: "Zpět",
	redeem: "Uplatnit kód",
	buy: ["Koupit Hearty Journal", "Prodloužit Hearty Journal"],
	plan: ["Můj tarif", "Změnu tarifu nebo karty vyřídíš přes podporu, uveď Hearty ID", "„VIP (zkušební)“ je dárek pro nové uživatele<br>Po vypršení se účet automaticky vrátí na Lite"],
	order: ["Moje objednávky"],
	plan_th: ["Stav", "Tarif", "Začátek", "Konec", "Hearty Journal "],
	order_th: ["Stav", "Č. objednávky", "Produkt", "Částka (TWD)", "Platba", "Faktura"],
	order_status: ["Čeká na platbu", "Zakoupeno", "Aktivováno", "Nezaplaceno", "Zrušeno"],
	plan_status: ["Aktivní", "Vypršelo"],
	url: ["Poslat odkaz | QR kód", "Kopírovat"],

	// bill
	fail: [
		"Platba se bohužel nezdařila",
		"Zkus to znovu, případně jinou kartu nebo způsob platby",
		"Potřebuješ pomoc? Napiš nám"
	],
	fail_info: [
		"Častá příčina", "Doporučení",
		"Chybné číslo karty", "Zkontroluj číslo karty, CVV a platnost",
		"Nedostatek prostředků", "Vyčerpaný limit nebo nedostatek peněz",
		"Nepovolené zahraniční/online platby", "Požádej banku o povolení zahraničních/online plateb",
		"Banka platbu zablokovala", "Banka platbu označila jako rizikovou. Zavolej jí a potvrď ji"
	],
	fail_btn: [
		"Zkusit znovu",
		"Kontaktovat podporu",
	],


	// thankyou
	thx: [
		"Děkujeme za nákup, VIP je aktivní",
		"Máš-li dotaz, ozvi se ヾ(๑❛ᴗ❛๑)ﾉ"
	],
	thx_th: [
		"Tarif",
		"Platnost",
		"dní",
		"Č. objednávky",
		"Čas",
		"Částka",
		"Způsob platby",
		"Doklad",
		"Změnu tarifu nebo karty vyřídíš přes podporu, uveď Hearty ID"
	],
	thx_inv: [
		"Tchajwanskou fakturu vystavuje Hearty Creative Inc.",
		"Zobrazit fakturu"
	],
	thx_btn: [
		"Dotazník po prvním nákupu",
		"Snímek obrazovky",
		"Zpět do deníku"
	]
};

// phone
_h$["pv"] = _h$["pv"] || {
	// JS
	ok: "OK",
	no: "Zrušit",
	signin: ["Přihlásit znovu", "Odhlášeno kvůli nečinnosti"],
	format: ["Číslo je příliš krátké", "Neplatný formát čísla", "Příliš mnoho pokusů, zkus to později"],
	verify1: ["Ověřit", "Ověřovací kód: ", "<br><small><b>SMS z Firebase</b> odeslána, počkej asi 45 sekund</small>", "Číslo $no ověřeno"],
	verify2: ["SMS nedorazila", "Pošli nám SMS a ověříme tě ručně", "Poslat SMS", "Ověříme tě do 72 hodin od přijetí SMS", "[Ověření telefonu] Hearty ID: "],
	verify3: ["SMS nedorazila", "Pro ruční ověření uveď Hearty ID a telefonní číslo", "Napsat na FB"],
	code: ["Kód z SMS", "Zadat znovu", "Kód musí mít 6 číslic", "Nesprávný kód", "Kód vypršel, ověř se znovu"],
	fail: "Ověření přes SMS se nenačetlo<br>Obnov stránku",

	// DOMs
	title: "Ověření telefonního čísla",
	back: "Můj účet",
	verify: ["Ověření telefonu", "Telefonní číslo", "Poslat kód", "Zadej kód", "SMS stále nedorazila?", "Poslat znovu", "Znovu za 30 s"]
};

// email
_h$["em"] = _h$["em"] || {
	title: [
		"Odhlásit odběr: newsletter",
		"Odhlásit odběr: newsletter Life Shopu"
	],
	unsubscribe: "Odhlásit odběr Unsubscribe",
	ask: [
		"Nebudeš dostávat zprávy z webu ani oznámení od dopisovatelů",
		"Nebudeš dostávat novinky a slevy",
		"Ano, odhlásit"
	],
	ok: "OK",
	back: "Zpět",
	unsubscribed: "„$email“ odhlášen, změna platí od zítřka",
	remarks: [
		"Důležitá oznámení k účtu (zapomenuté heslo, změny podmínek apod.) budeš dostávat dál.",
		"Nechceš-li žádné e-maily, smaž účet Hearty Journal"
	]
};

// points
_h$["pt"] = _h$["pt"] || {
	// JS
	ok: "Potvrdit",
	no: "Zrušit",
	back: "Zpět",
	close: "Zavřít",
	signin: [
		"Přihlásit se",
		"Nejdřív se přihlas do Hearty Journal"
	],
	redeem: [
		"Vyměnit $p bodů za „$pkg“?",
		"Potvrzením souhlasíš s podmínkami výměny, hlídej si platnost",
		"Nemáš dost bodů na „$pkg“",
		"Tuto odměnu zatím nelze vyměnit"
	],
	ec_ok: [
		"Tvůj slevový kód NT$$amt do Life Shopu: <b>$code</b>",
		"Najdeš ho v „Historii výměn“, využij do $exp"
	],
	vip_ok: [
		"Výměna proběhla! Získáváš $days dní VIP s platností do $exp",
		"Zobrazit"
	],

	// DOMs
	title: "Odměny za body",
	points: ["Moje body", "b."],
	coupons: [
		"Historie výměn",
		"Moje historie výměn",
		"Odměna",
		"Kód",
		"Vyměněno",
		"Platí do",
		"Použito",
		"Zatím žádné výměny"
	],
	label: [
		"Vybrané",
		"Oblíbené"
	],
	use: [
		"Použít v obchodě"
	],
	agree: ["Přečti si a odsouhlas podmínky"],
	get: [
		"Jak získat body?",
		"Body získáš denním check-inem: klepni na zvoneček vpravo nahoře v deníku",
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
		"Life Shop: kupon na digitální produkty",
		"NT$ 100"
	]
};
