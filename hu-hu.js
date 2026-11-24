/* Hearty Journal Language Pack: Ver 16 */

var _h$ = {};

_h$["lang"] = "hu-hu";

// common.head
_h$["h"] = _h$["h"] || {
	ok: "OK",
	qr: "QRkod_Hearty",
	copy: "Másolva",
	err: "A Hearty Journal túlterhelt, próbáld később.<br>Ha a hiba fennáll, írj az ügyfélszolgálatnak",
	satisfy: ["Szia! Tetszik a Hearty Journal?", "Tetszik ~", "Nem tetszik"],
	rate: ["Az értékelésed a legnagyobb biztatás a csapatunknak", "Adnál nekünk öt csillagot?", "Köszönjük a támogatásod", "Szívesen"],
	notify: ["Az értesítések nincsenek engedélyezve", "Nem tudsz meg az új üzenetekről és levelekről", "Engedélyezés", "Most nem"],
	downloading: "Letöltés"
};

// menu
_h$["m"] = _h$["m"] || {
	url: [
		"//go.hearty.me/hj-faq",
		"//go.hearty.me/hjse"
	],

	// JS
	no: "Nem",
	back: "Vissza",
	nav: ["Főmenü", "Hearty Journal", "Naplóm"],
	signout: ["Kijelentkezés", "Biztosan kijelentkezel?"],

	// DOMs
	avatar: [
		"Fiókom", "Bejelentkezés", "VIP"
	],
	menu: [
		"A nap igéje", "Alice vendégkönyve", "Naplófal", "Hearty blog", "Naplóm", "Galéria", "Life Shop", "VIP-re váltás", "Útmutatók", "Rólunk", "Kijelentkezés", "Windowsra", "macOS-re", "Windows/macOS-alkalmazás", "Mobilalkalmazás", "Language 語言", "Értékelj minket 5 csillaggal", "🐞 Hibakeresés"
	]
};

// index
_h$["i"] = _h$["i"] || {
	passkey: [
		"Bejelentkezés passkey-jel",
		"vagy",
		"Nincs passkey-ed? Lépj be jelszóval, és hozd létre a Fiókom oldalon",
		"Ezt a passkey-t eltávolították, jelentkezz be másképp",
		"Passkey-időtúllépés, próbáld újra",
		"A passkey-es bejelentkezés sikertelen, próbáld újra",
		"Ez a fiók törölve vagy felfüggesztve"
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
	no: ["Nem", "Mégse"],
	go: "Gyerünk!",
	back: "Vissza",
	copy: ["Másolás", "Másolva: "],
	email: [
		"E-mail-cím megerősítve", "Az e-mail-cím már meg van erősítve", "A megerősítő link lejárt", "A megerősítő link hiányos"
	],
	reset: [
		"Jelszó visszaállítása",
		"Visszaállítás és bejelentkezés…",
		"Hibás visszaállító link",
		"Hibás fiók",
		"Visszaállító link elküldve",
		"A visszaállító linket elküldtük a ***@$domain címre",
		"Megnyitod a(z) $url oldalt a levelekhez?",
		"Nincs ilyen fiók"
	],
	captcha: [
		"Sikertelen biztonsági ellenőrzés, frissítsd az oldalt",
		"Végezd el a lenti biztonsági ellenőrzést"
	],
	ref: [
		"🎁 $user hívott meg ide"
	],
	cookie: [
		"A bejelentkezéshez engedélyezd a sütiket", "Hogyan?"
	],
	browser: [
		"A böngésződ túl régi", "Az Internet Explorer nem támogatott"
	],
	signin: [
		"Bejelentkezés",
		"Titkosított bejelentkezés: $user…",
		"Hibás fiók",
		"$user nem létezik",
		"Nincs $user néven regisztrált fiók",
		"$user törölve/felfüggesztve",
		"$user törlését kérték, vagy szabálysértés miatt felfüggesztették",
		"Hibás jelszó",
		"A jelszó legalább 6 karakter",
		"Bejelentkezés Hearty ID-vel: „$client”"
	],
	signup: [
		"Az ID betűkből, esetleg számokból álljon", "A fiók 4–20 betű/szám",
		"Érvénytelen e-mail-formátum",
		"Valódi e-mail-címet adj meg",
		"Jelszó: 6–20 karakter",
		"A két jelszó nem egyezik",
		"⚠ A Yahoo! levelek gyakran elvesznek,\nlevelezőtársaid üzenetei nem érkezhetnek meg. Mégis ezt használod?",
		"Érvénytelen e-mail vagy jelszó!",

		"$user regisztrálva! Nézd meg a megerősítő levelet",
		"$user regisztrálva!",
		"A fiók már létezik, jelentkezz be",
		"Az e-mail-cím már regisztrálva van, jelentkezz be",
		"Ez az ID foglalt, válassz másikat",
		"Hibás e-mail-cím",
		"Eldobható e-mail-címmel nem lehet regisztrálni",
		"A rendszer túlterhelt"
	],
	box: [
		"Regisztráció",
		"Bejelentkezés",
		"Jelszó visszaállítása",
		"Új fiók létrehozása",
		"Bejelentkezés a Hearty Journalba",
		"Jelszó visszaállítása | Fiók visszaszerzése",
		"💡 Válassz ID-t (4–20 betű/szám)",
		"💡 Hearty ID vagy e-mail"
	],
	timer: "Újraküldés: $min:$sec",
	chat: [
		"Ügyfélszolgálat",
		"Az ügyfélszolgálathoz jelentkezz be",
		"Kapcsolat e-mailben",
		"Ügyfélszolgálati e-mail: "
	],
	id_notice: [
		"Hearty ID<br>4–20 betű/szám, a közösségben nyilvános",
		"A naplód titkosítva tárolódik ebben a fiókban, és szinkronizálódik telefon és számítógép között"
	],
	song: ["Harmony - 溫度日記", "A Hearty Journal főcímdala"],
	404: "A megadott cím nem létezik",

	// DOMs
	title: ["Hearty Journal 溫度日記", "Kézzel rajzolt stílusú privát napló minden pillanatodhoz"],
	topbar: [
		"Regisztráció / Bejelentkezés", "Windows-alkalmazás", "macOS-alkalmazás"
	],
	slogan: [
		"Hearty Journal", "<br>kézzel rajzolt stílusú privát napló", ", ",
		"4,9★ az App Store-ban | Apple szerkesztői választás | 300 000+ elégedett felhasználó", "A kapcsolat titkosított, akár a kártyás fizetés"
	],
	scroll: "Görgess lejjebb",
	preview: ["Napló előnézete", "Előnézet bezárása"],
	feature: [
		"Magamnak írok", "Őrizd meg minden nap szépségét",
		"Illusztrált napló", "Aranyos matricák, ragaszd, ahová szeretnéd",
		"Közös napló", "Oszd meg barátokkal, társaddal",
		"Biztonság és adatvédelem", "Banki szintű titkosított kapcsolat"
	],
	testimonial: [
		"Ezt mondják a Hearty Journal felhasználói",
		"Azokra a szavakra, amelyek kimondatlanok maradtak. Ajánlom a Hearty Journalt.", "Haitaibear, népszerű pszichológiai író",
		"Lágy és nyugodt, tökéletes önmagammal beszélgetni", "Cindy Liu",
		"Szép felület, és az automatikus mentés nagyon figyelmes", "Wu Chi",
		"Köszönöm, Hearty, hogy elkísértél sok nehéz időszakon át", "Yan-Xuan",
		"Imádom a gépes verziót, a mobilosat is letöltöttem", "Xiao-Jun"
	],
	press: [
		"Média",
		"Bnext Media", "Free Group", "Aotter girls", "Womany", "Sheaspire", "SEinsights", "Taiwan Startup Stadium", "Innosquare, New Taipei", "UDN", "Vita News"
	],
	action: [
		"Kezdj melegebb életet", "Próbáld ki most"
	],
	rate: "Értékeld a Hearty Journalt 5 csillaggal",
	footer: [
		"Language 語言",
		"Windowsra",
		"macOS-re",
		"Funkciók",
		"Vélemények",
		"Együttműködés",
		"Sajtóanyag",
		"GYIK",
		"Adatvédelem",
		"Felhasználási feltételek",
		"Adatvédelmi irányelvek",
		"Biztonsági tanúsítvány",
		"Főcímdal",
		"Nien, alapító",
		"Jiayi, társalapító",
		"Védjegy",
		"Rólunk"
	],
	cookies: ["Sütiket használunk. A további használattal elfogadod az adatvédelmi irányelveket.", "OK"],
	copyright: "2016-"+new Date().getFullYear().toString()+" Hearty Creative Inc. és kapcsolt vállalkozásai",
	isp: "A Cloudways tárhelyén",
	auth: [
		"Regisztrálj ingyen",
		"Van már fiókod? Jelentkezz be",
		"Elfelejtett ID/jelszó",
		"Eszedbe jutott? Jelentkezz be",
		"Fiók", "💡 Hearty ID vagy e-mail",
		"Jelszó", "🔑 6–20 karakter",
		"Megerősítés", "🔑 Add meg újra a jelszót", "Jelszó megjelenítése",
		"Emlékezz rám", "Elmúltam 18 éves, és elfogadom a felhasználási feltételeket"
	],
	lang: "Váltás erre: $lang"
};

// editor
_h$["e"] = _h$["e"] || {
	// JS
	url: [
		"//go.hearty.me/hj-faq",
		"//go.hearty.me/hj-data",
		"//bitly.com/3E0ZJ7Q"
	],
	ok: ["OK", "Értem", "Rendben"],
	no: ["Nem", "Mégse"],
	retry: "Próbáld újra",
	back: "Vissza",
	gotop: "Vissza a tetejére",
	signin: ["Bejelentkezés", "Jelentkezz be, hogy ", "minden funkciót használhass"],
	signout: "Kijelentkezés",
	name: ["A nevem", "Hogyan szólíthatunk?<br>(A tollnév nyilvános, ne a valódi neved)", "Üdv itt, $name, a saját kertedben", "<u>Emlékeztesselek minden este</u> a naplóírásra?", "Igen, emlékeztess"],
	get_stickers: ["Hurrá! Megkaptad a saját matricáidat", "Megnézem"],
	welcome: ["$name, üdv újra", "Vissza a naplómhoz", "Még nem jelentkeztél be"],
	year: "", // CE
	maintenance: ["Rendszerfrissítés ideje: ", "A szolgáltatás egy órára szünetel"],
	update: ["Régi alkalmazásverzió, frissíts az új funkciókért", "Frissítés most", "Emlékeztess holnap"],
	search: ["Keresés a naplóimban", "Kulcsszó", "Keresés", "Nincs találat"],
	bookmark: [
		"1 kedvenc bejegyzés",
		"$no kedvenc bejegyzés", // 複數
		"Kedvencekhez",
		"Névtelen"
	],
	catalog: [
		"1 bejegyzés",
		"$no bejegyzés", // 複數
		"Új bejegyzés",
		"Még nincs bejegyzés",
		"Még senki nem osztott meg veled naplót",
		"Ez az első vagy az utolsó bejegyzés",
		"Nincs megjeleníthető bejegyzés",
		"Előző oldal",
		"Következő oldal"
	],
	sticker: ["Méretezés", "Forgatás", "Beillesztés", "Törlés", "Elérted a matricák korlátját", "VIP-ajánlatok"],
	verify_required: [
		"Erősítsd meg $item, és töltsd ki a profilod, hogy $act",
		"a telefonszámodat", "minden funkciót használhass",
		"beállíthasd a megosztást", "beküldhess bejegyzést", "új levelezőtársat adj hozzá", "megoszthasd a levelezőtársaddal"
	],
	privacy: [
		"Bejegyzés nyilvános", "Bejegyzés zárolva",
		'Annak ellenőrzésére, hogy a bejegyzés megfelel-e a <a target="_blank" href="//go.hearty.me/publish"><u>nyilvános bejegyzések szabályainak</u></a>, ',
		"csak moderátori jóváhagyás után lesz nyilvános",
		"moderátori jóváhagyás után automatikusan megjelenik",
		"Ne küldd be többször, a rendszer trollnak hihet (;´ㅁ`)-3<br>Értesítések nélkül nem tudunk szólni a jóváhagyásról"
	],
	publish: [
		"A bejegyzés rövid, írj még egy kicsit~<br>(legalább 100 karakter)",
		"Jó, van ihletem",
		"Kiteszed a(z) „$title” bejegyzést a naplófalra?",
		"A naplófalon a bejegyzés nyilvános. Nyilvánossá teszed és kiteszed?",
		"Nyilvános beküldés",
		"„$title” kikerült a naplófalra",
		"Megnézem",
		"Vissza a naplóhoz",
		'Tartsd be a <a target="_blank" href="//go.hearty.me/publish"><u>[közzétételi szabályokat]</u></a>. Levelezőtársat a <a target="_blank" href="//go.hearty.me/hjpd"><u>[levelezőtárs-keresőben]</u></a> kereshetsz, itt ne adj meg személyes adatot</small>',
		"Visszavonod a beküldött „$title” bejegyzést?",
		"Visszavonás",
		"Bejegyzés visszavonva",
		"Naponta csak 1 bejegyzés, a többit holnap"
	],
	penpal_add: [
		"Barátod Hearty ID-je vagy e-mail-címe",
		"Alapverzió: 2 levelezőtárs; VIP: korlátlan",
		"Hearty ID vagy e-mail",
		"Hozzáadás",
		"2-nél több levelezőtárshoz válts VIP-re",
		"Hozzáadod „<b>$name</b>” (Hearty ID: $user) levelezőtársként?",
		"$name mostantól a levelezőtársad",
		"„$user” már hozzá van adva, vagy nem engedi a hozzáadást",
		"Nem található „$user” felhasználó",
		"„$user” archivált téged",
		"Hé, saját magadat nem adhatod meg"
	],
	penpal_delete: [
		"Archiválás után a megosztott bejegyzések visszakerülnek, és többé nem lehettek levelezőtársak. Gondold át!",
		"Kit szeretnél archiválni?",
		"- Válassz valakit -",
		"A közös bejegyzések visszakerülnek, és többé nem lehettek levelezőtársak. Archiválod: „$user”?",
		"Archiválás",
		"„$user” archiválva"
	],
	penpal_send: [
		"Megosztva vele: $add",
		"Megosztási beállítások frissítve"
	],
	pin: [
		"Ügyfélszolgálati PIN: ", "Ezzel a számmal gyorsabban azonosítunk"
	],
	chat: [
		"Hearty ID: "
	],
	membership: [
		"Alap", "VIP próba", "VIP"
	],
	feedback: [
		"Jegyszám: #$no",
		"Add meg a neved",
		"Érvénytelen e-mail-formátum",
		"Ez kicsit rövid",
		', 24 órán belül <b>e-mailben válaszolunk, figyeld a postafiókod</b><br>Mindig válaszolunk. Ha két napon belül nem kapsz levelet, nézd meg a spam mappát, vagy írj a <a target="_blank" href="//hearty.app/ms"><u>Hearty Journal Facebook-oldalára</u></a> ´・ω・｀<br><br>Ha tetszik a Hearty Journal, nézd meg a VIP-csomagokat. Előfizetéseddel gyorsabban fejleszthetünk új funkciókat és tartalmakat, és jobb szolgáltatást nyújthatunk.',
		"Értem",
		"Mit tud a VIP?",
		"Hiba történt, próbáld újra később"
	],
	video: [
		"YouTube-videó linkje",
		"vagy kattints a feltöltéshez",
		"Megerősítés", // 設為
		"Hozzáadás a lejátszási listához",
		"Videó beágyazva",
		"Hibás YouTube-link",
		"A videót törölték, nem nyilvános, vagy nem ágyazható be<br>Ellenőrizd a linket",
		"Ellenőrzöm",
		"Biztosan törlöd: „$title”?",
		"Törlés",
		"Beállítás (üresen hagyva törlődik)", // 預留未使用
		"https://youtu.be/vYFnZdUiUyg (üresen hagyva a videó törlődik)"
	],
	yt: [
		"Zenedoboz",
		"Rendezés",
		"Törlés",
		"Villany le",
		"Még nincs dal, kattints a ➕ gombra",
		"Kedvenc dalaid a háttérben ismétlődnek",
		"Saját dalaim",
		"Videó lejátszása"
	],
	gps: [
		"Bekapcsolod a helymeghatározást az időjáráshoz?",
		"⛅ „Engedélyezd” a GPS-t, és várj egy kicsit…",
		"Időjárás hozzáadva",
		"Nincs GPS-jel, nem sikerült időjárást hozzáadni",
		"Helymeghatározási hiba? Nézd meg a Chrome címsorának ikonját"
	],
	chars_max: [
		"A bejegyzés $chars karakter, a korlát 10 000 (írásjelekkel)",
		"Mellesleg, látta már valaki ezt az üzenetet?"
	],
	chars: [
		"$chars karakter, túllépi az alapverzió keretét ($limit karakter)",
		"VIP-ajánlatok",
		"Emlékeztess később"
	],
	leave: "A bejegyzés mentve. Biztosan kilépsz?",
	date: ["Bejegyzés dátuma", "Dátum beállítva: ", "Dátum szerint: újak felül, régiek alul"],
	subject: ["$date napló", "Bejegyzés címe", "Új cím: „$title”", "Frissítés"],
	archive: [
		"Biztosan törlöd: „$title”? Nem vonható vissza", "Igen, felejtsük el", "„$title” törölve"
	],
	unsafe: "A Google Safe Browsing szerint ez a link veszélyes, ne nyisd meg",
	offline: "Hálózati késés, próbáld újra később",
	lock: [
		"Beállítasz képernyőzárat, hogy senki ne leskelődjön?",
		"Beállítás",
		"Képernyőzár kikapcsolása",
		"Képernyőzár kikapcsolva",
		"Bocs, mindkettőt elfelejtettem",
		"Elfelejtetted a <u>képernyőzár PIN-kódját</u> és a <u>Hearty-fiókod jelszavát</u> is?<br>Jelentkezz ki, és állítsd vissza a jelszót (a képernyőzár is kikapcsol)"
	],
	pincode: [
		"Add meg a PIN-kódot",
		"Erősítsd meg a PIN-kódot",
		"PIN-kód vagy a Hearty-fiók jelszava",
		"Hibás PIN-kód",
		"A jelszó hibásnak tűnik",
		"A két kód nem egyezik, állítsd be újra",
		"A PIN-kód csak számjegy lehet",
		"PIN-kód beállítva: $pin"
	],
	screenshot: "A kép készül, 10 másodperc múlva indul a letöltés",
	pc: [
		"Számítógépes verzió", 'Keress rá számítógépen: „www.hearty.me” <i class="fal fa-search"></i>',
		"Próbáld ki: számítógépes verzió", "Nagy képernyő, kényelmes lapozás", "Billentyűzettel kényelmesebb gépelni", "Telefon és számítógép szinkronja", "Kipróbálom"
	],
	picture: [
		"Fotó feltöltése",
		"Válassz egy fotót (JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Feltöltés",
		"Másik választása",
		"Bejegyzésenként max. 10 fotó",
		"A fájl $ext, csak JPG, PNG, GIF, WebP, AVIF és HEIC tölthető fel",
		"Fotó feltöltve",
		"Letöltés, kis türelmet",
		"A fotó a Letöltések mappában van"
	],
	picture_err: [
		"Nem támogatott formátum vagy kiterjesztés (csak: JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"A kép nagyobb 6 MB-nál, előbb tömörítsd",
		"A kép nem olvasható vagy sérült",
		"A HEIC/HEIF átalakítása sikertelen, próbálj másik képet"
	],
	picture_remove: [
		"Biztosan törlöd ezt a fotót?",
		"Végleges törlés",
		"Fotó törölve"
	],
	file: "Hearty_Journal",
	trial: [
		"Elindult a 30 napos VIP-próba, minden elérhető",
		"A próba $exp napon lejár, utána automatikusan az alapverzióra kerülsz, terhelés nélkül.<br>Később bármikor válthatsz VIP-re ( ´･ヮ･)<br>Minden bejegyzésed megmarad a Hearty Journalban ♡",
		"Verziók összehasonlítása",
		"Értem, kezdjük"
	],
	purchased: [
		"A VIP-csomagod aktív!",
		"Kitöltenél egy 3 perces kérdőívet?",
		"(Első kitöltésért 7 nap VIP ajándék)",
		"Kitöltöm",
		"Már kitöltöttem"
	],
	n_verify_email: [
		"Erősítsd meg: $item, hogy minden funkciót használhass",
		"Erősítsd meg az e-mail-címed, hogy megkapd a válaszokat"
	],
	n_verify_phone: "Kösd össze a telefonszámod a biztonságért",
	n_vip_prefix: "VIP-csomagod",
	n_char_limit_exceed: "$chars karakter, elérted a keretet, válts most",
	n_daily_checkin: [
		"Ma még nem jelentkeztél be a pontokért",
		"Mai bejelentkezés kész"
	],
	checkin: [
		"Napi bejelentkezés",
		"Hearty pontjaim: ", "pont",
		"Bejelentkezésért 1 pont jár",
		"Kaptál 1 pontot, most $p pontod van",
		"Ma már bejelentkeztél",
		"Gyere vissza holnap",
		"A Hearty pontok a napi naplóírást jutalmazzák<br>Később jutalmakra válthatod~"
	],
	reward: [
		"Beváltási lehetőségek"
	],
	pd: [
		"Menstruációs napló",
		"Következő: ",
		"Átlagos ciklus: ",
		"nap",
		"Kezdete",
		"Vége",
		"Ciklus",
		"Új bejegyzés",

		"Ma",
		"Törlés",
		"Biztosan törlöd?",
		"Ma: $d. nap", // Eng: $d$th,
		"Következő: $d nap múlva"
	],

	// 自訂日記本
	headline: [
		"Saját cím",
		"A naplóm címe:",
		"Mentés",
		"Új cím: „$headline”",
		"Üresen is hagyhatod ~"
	],
	style: [
		"Napló testreszabása",
		"Alapértelmezett",
		"Nincs ötletem",
		"//en.faq.hearty.me/tutorial/styles"
	],
	cover: [
		"Borítókép",
		"Borítókép feltöltése",
		"Ideális arány: 1,9:1",
		"OK", // crop
		"Mégse",
		"Nem támogatott képformátum: $ext",
		"Borítókép lecserélve",
		"Borítókép visszaállítva"
	],
	bg: [
		"Háttérkép",
		"Háttérkép feltöltése",
		"Nem támogatott képformátum: $ext",
		"Háttérkép lecserélve",
		"Háttérkép visszaállítva"
	],
	color: [
		"Napló színe",
		"Szín frissítve"
	],

	// DOMs
	title: "Naplóm",
	header: [
		"Tartalomjegyzék", "Értesítéseim", "Matricák", "Csomagok", "Visszajelzés", "Kész"
	],
	notification: [
		"Nincs értesítés",
		"Számítógépes verzió",
		"Kérdezz",
		"Frissítés",
		"Diagnosztika",
		"Válts VIP-re a teljes élményért"
	],
	link: [
		"Másik webhelyre lépsz",
		"A Google Safe Browsing ellenőrizte",
		"Mehet"
	],
	share: [
		"Bejegyzés beállításai", "Link", "Privát", "Jelszóval védett", "Nyilvános", "Beküldés", "Privát tartalmat ne tegyél nyilvánossá"
	],
	penpal: [
		"Közös napló", "Levelezőtárs hozzáadása", "Levelezőtárs archiválása", "Még nincs levelezőtársad, adj hozzá egyet", "Bejegyzés küldése neki:"
	],
	qa: [
		"Kérdezz", "Naplófunkciók, használat", "Fiók, számlázás és egyéb", "Adatvédelem, magánszféra", "Hálózati diagnosztika", "Hibajelentés, javaslat, biztatás", "Szolgáltatás állapota", "Minden rendszer működik"
	],
	cs: [
		"Írj nekünk", "Kérdésed van? Nézd meg a GYIK-et", "Hibajelentés / Visszajelzés / Biztatás",
		"E-mailben válaszolunk, figyeld a postafiókod", "Küldés", "Ügyfélszolgálati PIN-em: ",
		"Béta verziót használsz"
	],
	csform: ["A nevem", "VIP", "Ingyenes", "Képernyőkép csatolása"],
	gift: [
		"Ajándékmatricák", "Átveszem", "50 megnyugtató Hearty Journal-matrica"
	],
	prologue: "Őrizd meg a mai hangulatod",
	pwd: "Add meg a jelszót",
	warn: [
		"Karbantartás", "Lassú kapcsolat", "Instabil kapcsolat", "Alacsony töltöttség"
	],
	tool: [
		"Mentés", "Új bejegyzés", "Törlés", "Megosztás", "Mentés képként", "Előző", "Következő", "Teljes képernyő", "Kinyitás", "Lapozás"
	],
	rmenu: [
		"Kérdezz", "A Heartyról", "Teljes képernyő", "繁/简", "Nagyobb betű", "Kisebb betű", "Lapozás", "Függőleges olvasás"
	],
	image: [
		"Fotó", "Kép forgatása", "Szűrő alkalmazása", "Kép letöltése", "Kép törlése"
	],
	tab: [
		"Saját", "Levelezőtársé",
		"🔍 Keresés", "🔖 Kedvencek", "🎧 Zenedoboz", "🌙 Menstruációs napló", "🔒 Képernyőzár",
		"Kérdezz", "Kézmozdulatok", "Matricák szerkesztése telefonon"
	],
	book: [
		"A Hearty Journalról", "A zajos világban a Hearty Journal meleg és csendes menedék, ahol az emberek leteszik a fáradtságot, kimondják ki nem mondott sebezhetőségüket, és újra megtalálják igaz önmagukat. Bár az ég nem mindig kék, szelíden és rendíthetetlenül haladunk tovább."
	],
	promo: ["Különleges ajánlat: 3 hónap VIP mindössze NT$99-ért"],
	403: "Privát bejegyzés, csak a szerzője olvashatja. Ha te vagy az, jelentkezz be 🔒",
	404: "A bejegyzés linkje hibás lehet",
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
	stickers: ["Matricáim", // 從 1 開始
		"Kézírás", "Időjárás", "Hangulat", "Hétköznapok", "Öltözködés", "Apróságok", "Étel és ital", "Utazás és táj", "Évszakok és ünnepek", "Növények és virágok", "Állatok", "Aranyos figurák", "Fantázia"
	]
};

// pricing
_h$["p"] = _h$["p"] || {
	url: [
		"//go.hearty.me/why-VIP",
		"//go.hearty.me/hj-terms",
		"//go.hearty.me/hj-privacy"
	],
	lite: ["Alap", "Ingyenes"],
	vip: ["Hearty Journal VIP", "VIP", "(ingyenes próba)"],
	feat_lite: [
		"Reklámmentes, védi a magánszférád",
		"Szöveges bejegyzések (5 785 karakteres keret)",
		"90 alapmatrica, 20 különleges betűtípus",
		"Automatikus időjárás, napi emlékeztető",
		"Közös napló barátokkal (2 fő)",
		"PIN-zár, menstruációs napló, saját lejátszási lista",
		"Szinkron iOS, Android, Windows és macOS között",
		"Automatikus felhőmentés az AWS-en",
		"TLS 1.3 titkosított kapcsolat",
		"Tajvani csapat fejlesztése",
	],
	feat_vip: [
		"Minden alapfunkció, plusz:",
		"Korlátlan karakter",
		"Fotófeltöltés (10/bejegyzés)",
		"Saját fotófal, beépített szűrők",
		"1 300+ matrica feloldása",
		"YouTube-videók hozzáadása",
		"Egyéni borító és háttérkép",
		"Saját cím és bejegyzésdátum",
		"Teljes szöveges keresés",
		"Mentés képként, exportálás (Word, TXT)"
	],
	remark: [
		"Miért érdemes VIP-re váltani?",
		"Első vásárlás: 3 hónap VIP NT$99-ért",
		"Havi előfizetés bankkártyával, bármikor lemondható",
		"30 napos pénzvisszafizetési garancia első vásárlásra",
		"VIP-funkciók"
	],
	act: [
		"Regisztrálj ingyen", "30 napos próba indítása", "VIP-ajánlatok", "Megújítási információk", "Jelentkezz be a vásárláshoz"
	],
	deposit: ["Előre fizetett csomag", "Vásárlás", "Bankkártya, Google Pay, ATM, tajvani boltok, Alipay"],
	subscription: ["Havi csomag", "Vásárlás", "(bankkártyásoknak)", "Első vásárlás: 3 hónap VIP NT$99-ért", "A 4. hónaptól NT$99/hó", "Nemzetközi bankkártyát elfogadunk"],
	selected: ["Jelenlegi", "Ajánlott"],
	currency: ["Aktuális árfolyam: "],
	term: [
		"3 hónap", "6 hónap", "1 év"
	],
	unit: [
		"hó", "hó"
	],
	subtotal: "Részösszeg: NT$",
	powerby: "Technológia:",
	redeem: "Kód beváltása",

	due: "VIP-előfizetésem érvényessége",
	due_active: ["Aktív VIP-előfizetés"],
	due_date: ["Lejár: ", "", "ezután automatikusan visszakerülsz az alapverzióra"],
	due_days: ["Lejár ", " nap múlva", "ezután automatikusan visszakerülsz az alapverzióra"],
	due_tomorrow: ["Holnap lejár", "hamarosan visszakerülsz az alapverzióra"],
	due_today: ["Ma lejár", "hamarosan visszakerülsz az alapverzióra"],
	iap_ios: [
		"Havonta automatikusan megújul, bármikor lemondható",
		"[Hearty Journal VIP] iOS-előfizetési tájékoztató",
		"Az alapverzió a funkciók egy részét kínálja, a VIP mindent",
		"Havi időszak, megújítás az első előfizetés árán",
		"Aktiválás után az Apple-fiókon keresztül automatikusan megújul és terhelődik",
		"Megkezdett időszak nem mondható le és nem téríthető vissza",
		"Lejárat előtt 24 órával automatikusan megújul; ha nem kéred, mondd le időben",
		"A csomagodat bármikor kezelheted az Apple-fiók „Előfizetések” menüjében",
		"Soha nem kérünk telefonon ATM-műveletet vagy utalást; gyanús hívás esetén értesítsd a rendőrséget",
		"Vásárláskor a próbaidő azonnal véget ér; ha még próbálgatnád, utána vásárolj",
		"Felhasználási feltételek",
		"Adatvédelmi irányelvek"
	],
	iap_and: [
		"Havonta automatikusan megújul, bármikor lemondható",
		"[Hearty Journal VIP] Android-előfizetési tájékoztató",
		"Az alapverzió a funkciók egy részét kínálja, a VIP mindent",
		"Havi időszak, megújítás az első előfizetés árán",
		"Aktiválás után a Google Playen keresztül automatikusan megújul és terhelődik",
		"Megkezdett időszak nem mondható le és nem téríthető vissza",
		"Lejárat előtt 24 órával automatikusan megújul; ha nem kéred, mondd le időben",
		"A csomagodat bármikor kezelheted a Google Play „Fizetések és előfizetések” menüjében",
		"Soha nem kérünk telefonon ATM-műveletet vagy utalást; gyanús hívás esetén értesítsd a rendőrséget",
		"",
		"Felhasználási feltételek",
		"Adatvédelmi irányelvek"
	]
};

// Alice
_h$["A"] = _h$["A"] || {
	// JS
	signin: ["Bejelentkezés", "Jelentkezz be a hozzászóláshoz", "Előbb jelentkezz be"],
	back: "Vissza",
	no: "Nem",
	no_post: "Bocs, ez a bejegyzés nem található",
	penpal_guest: ["Ma van a regisztrációd $day. napja<br>7 nap rendszeres naplózás után kereshetsz levelezőtársat", "Hajrá"], // $th
	comment_limit: [
		"Spam ellen: bejegyzésenként 2 hozzászólás. A korábbiakat törölheted vagy szerkesztheted",
		"$chars karakter, a hozzászólás max. 85 karakter",
		"A hozzászólás legalább 3 karakter, és kapcsolódjon a témához"
	],
	comment_ban: [
		"Érzékeny szavak lehetnek benne, moderátori jóváhagyás után jelenik meg",
		"A hozzászólásod blokkolva, rengeteg a troll 🥺",
		"Emlékeztető: tartsuk be együtt a ",
		"közzétételi szabályokat"
	],
	comment_edit: ["Szerkeszted ezt a hozzászólást?", "Szerkesztés"],
	report_ask: ["Jelented ezt a hozzászólást?", "Igen, szabályt sértett", "Jelentve, a Hearty moderátorai átnézik"],
	url: ["Link másolása", "Bejegyzés linkje/QR-kód", "Letöltés"],
	penpal_add: ["Hozzáadod „<b>$id</b>” levelezőtársként?", "A minőségi kapcsolatért max. 2 levelezőtársat javaslunk", "Tovább a közös naplóhoz"],
	verify: ["Minden funkcióhoz erősítsd meg az e-mail-címed és telefonszámod", "Tovább a fiókhoz"],

	// DOMs
	title: "Alice vendégkönyve",
	board: "Alice vendégkönyve",
	tabs: ["Hozzászólások", "Tartalomjegyzék", "Közös napló", "Megosztás", "Öt csillagot kérünk", "Palackposta"],
	comment: ["Hozzászólás", "Jelentkezz be a hozzászóláshoz", "Túl hosszú (max. 85 karakter)"],
	profile: ["Levelezőtárs hozzáadása", "Naplóhoz"],
	gotop: "Vissza a tetejére",
	goleft: "Vissza balra"
};

// feed
_h$["f"] = _h$["f"] || {
	// JS
	refresh: ["Frissítés", "Húzd le a frissítéshez", "Engedd el a frissítéshez"],
	signin: ["Bejelentkezés", "Jelentkezz be, hogy minden funkciót használhass"],
	no: "Mégse",
	url: ["Link másolása", "Bejegyzés linkje/QR-kód"],
	publish_ask: ["Hogyan küldhetek be?", "A naplóban koppints a(z)", "ikonra a beküldéshez", "OK", "Naplóm"],
	report_ask: ["Jelented a(z) „$title” bejegyzést?", "Igen, ez rossz szándékú", "Köszönjük, hogy jelentetted: „$title”. A Hearty moderátorai átnézik"],

	// DOMs
	title: "Naplófal ($p. oldal)",
	share: "Megosztás",
	report: "Bejegyzés jelentése",
	focus_post: "Megjelenítés a falon",
	posts: "Nyilvános bejegyzések olvasása",
	publish: "Beküldés",
	gotop: "Vissza a tetejére",
	back: "Vissza",
	health: ["Egészségügyi információk a CDC weboldalán ( • ̀ω•́ )", "//www.cdc.gov.tw"]
};

// img
_h$["I"] = _h$["I"] || {
	title: "Galéria",
	upload: "Fotó feltöltése",
	empty: ["Még nem töltöttél fel fotót", "Adj hozzá egyet egy bejegyzéshez"],
	add: "Fotó hozzáadása",
	gotop: "Vissza a tetejére",
	layout: ["Rács", "Mozaik"]
};

// account
_h$["a"] = _h$["a"] || {
	passkey: [
		"Passkey (hozzáférési kulcs)",
		"Passkey hozzáadása",
		"Még nincs passkey-ed",
		"Mi az a passkey?",
		"A passkey (hozzáférési kulcs) a készülék Face ID-jával, ujjlenyomatával vagy képernyőzárával jelentkeztet be, fiók és jelszó nélkül, adathalászat ellen védetten.<br><br>A passkey a készülékeden vagy a jelszókezelődben (pl. iCloud-kulcskarika, Google Jelszókezelő) tárolódik, a Hearty Journal csak egy bejelentkezésre alkalmatlan nyilvános kulcsot őriz.<br><br>A passkey eltávolítása nem jelentkezteti ki a bejelentkezett készülékeket. A Hearty ID módosítása után a jelszókezelő a régi nevet mutathatja, ez nem befolyásolja a bejelentkezést.",
		"Létrehozás után fiók és jelszó nélkül léphetsz be",
		"Átnevezés",
		"Passkey neve (max. 20 karakter)",
		"A név 1–20 karakter legyen",
		"Eltávolítás",
		"Eltávolítod: „$name”?<br>Ezután nem léphetsz be vele; a bejelentkezett készülékek bejelentkezve maradnak.<br>A jelszókezelőből is töröld.",
		"Ez az utolsó passkey-ed, és nincs jelszavad; utána csak külső fiókkal léphetsz be.",
		"Ez a készülék ezzel a passkey-jel van bejelentkezve, és az is marad.",
		"Passkey eltávolítva",
		"Szinkronizálódik más készülékekre",
		"Csak ezen a készüléken",
		"Még nincs szinkronizálva",
		"Jelenleg használatban",
		"Létrehozva: $date",
		"Utoljára használva: $date",
		"Még nem használt",
		"Megerősítéshez add meg a jelenlegi jelszavad",
		"Hibás jelszó",
		"Passkey-korlát (10), előbb távolíts el egy nem használtat",
		"Ezen a készüléken vagy jelszókezelőben már van passkey",
		"Passkey létrehozva! Legközelebb bejelentkezhetsz vele",
		"Erősítsd meg magad egy meglévő passkey-jel",
		"Tovább",
		"Időtúllépés, próbáld újra",
		"Túl sok próbálkozás, próbáld újra 15 perc múlva"
	],
	// JS
	ok: ["OK", "Igen", "Rendben", "Helyes"],
	next: "Tovább",
	no: "Nem",
	back: "Vissza",
	upload: "Feltöltés",
	rotate: "Forgatás",
	retry: "Próbáld újra",
	signin: ["Bejelentkezés", "Jelentkezz be, hogy minden funkciót használhass"],
	usage: "Írói mérföldkő: $num bejegyzés, összesen $chars karakter",
	points: "Hearty pontok: $p (beváltási lehetőségek)",
	year: "", // CE
	bday_ask: ["A születésnapod: $bday?", "A születésnap beállítás után nem módosítható", "Születésnap frissítve"],
	age: "$age éves",
	nickname_edited: "Új tollnév: „$n”",
	pwd_edit: "Jelszó módosítása",
	pwd_edited: "Módosítva",
	pwd_enter: "Add meg az új jelszót",
	pwd_confirm: "Add meg újra az új jelszót",
	pwd_invalid: "Jelszó: 6–20 karakter, add meg újra",
	pwd_mismatch: "A két jelszó nem egyezik, add meg újra",
	pwd_format: "6–20 karakter",
	pwd_apply: ["Módosítás", "Módosítás megerősítése"],
	pwd_ok: ["Jelszó módosítva, mostantól az újjal lépj be",
				"Ne oszd meg a fiókod és jelszavad senkivel"],
	avatar: ["Válassz egy fotót (JPG, PNG, GIF, WebP, AVIF, HEIC)", "A fájl $ext, csak JPG, PNG, GIF, WebP, AVIF és HEIC kép tölthető fel", "Másik választása", "Profilkép frissítve"],
	avatar_err: [
		"Nem támogatott formátum vagy kiterjesztés (csak: JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"A kép nagyobb 6 MB-nál, előbb tömörítsd",
		"A kép nem olvasható vagy sérült",
		"A HEIC/HEIF átalakítása sikertelen, próbálj másik képet"
	],
	email_new: "E-mail módosítása",
	email_confirm: "Módosítod az e-mail-címed erre: „$email”?",
	email_invalid: "Érvénytelen e-mail-formátum",
	email_verify: ["Biztonsági okból előbb erősítsd meg az e-mail-címed, hogy ", "minden funkciót használhass", "Megerősítés"],
	email_send: "Újraküldöd a megerősítő levelet?",
	email_sent: ["Megerősítő levél elküldve. Megnyitod a(z) $isp oldalt?<br>(Nézd meg a „Spam” és a „Promóciók” mappát is)",
				"Nézd meg a leveleidet, a spam mappát is"],
	email_verified: "Az e-mail-cím már meg van erősítve",
	pin: ["Ügyfélszolgálati PIN: $pin<br><small>(Ezzel a számmal gyorsabban azonosítunk)</small>", "Letöltés"],
	font: [
		"Hearty Journal különleges betűtípusai",
		"i/fonts_en.png",
		"Az oldal justfont webes, kereskedelmi és nyílt forráskódú betűtípusokat használ.",
		"Licencek"
	],
	font_change: "Betűtípus cseréje: „$font”…",
	gender_edited: "Nem frissítve",
	newsletter_edited: "Feliratkozás frissítve",
	lang: "Váltás erre: $lang",
	timezone_edited: "Időzóna beállítva: „$tz”",
	id: "Hearty ID: ",
	id_edit: "ID módosítása",
	id_public: "Az ID és a tollnév nyilvános",
	id_new: "Add meg az új ID-t",
	id_format: "Legalább 4 betű/szám, csak egyszer módosítható",
	id_invalid: "Az ID formátuma nem megfelelő",
	id_same: "Nem egyezhet a régi ID-vel",
	id_taken: "„<b>$id</b>” foglalt, válassz másikat",
	id_edited: "Hearty ID frissítve: „<b>$id</b>”",
	id_signout: "Kijelentkezés, majd belépés az új ID-vel",
	dl: "Biztonsági mentés",
	dl_pc: "A napló mentéséhez nyisd meg<br>számítógépen a „www.hearty.me” oldalt",
	dl_pwd: ["A visszafejtéshez add meg a Hearty-jelszavad:", "Jelszó: 6–20 karakter", "Visszafejtés és exportálás", "Mentés indítása", "Szövegfájlba mentve a Letöltések mappába, őrizd biztonságban"],
	dl_fmt: ["Mentés formátuma", "Szövegfájl (.txt)", "Word-dokumentum fotókkal (.docx)", "Tovább"],
	dl_doc: ["$posts bejegyzés, $images fotó<br>Az átalakítás néhány perctől több tíz percig tarthat", "Exportálás indítása", "Átalakítás: $done / $total fotó", "Átalakítás…", "Word-dokumentum mentve, őrizd biztonságban", "$n fotó nem töltődött be, kihagyva", "Az exportálás megszakadt, próbáld újra később", "Word-exportálás csak asztali Chrome-ban vagy Edge-ben, különben válaszd a szövegfájlt", "Exportálva: $date, $posts bejegyzés", "Hibás jelszó, add meg újra", "Még nincs exportálható bejegyzés", "Exportálás Wordbe"],
	vip_only: ["A(z) ", " VIP-funkció", "VIP-ajánlatok", "Később"],
	suspend: ["Biztosan törlöd? Meg is tarthatod! A Hearty Journal folyamatosan új funkciókkal és matricákkal bővül, talán egyszer visszatérsz", "Az ID módosításához <u>kattints ide</u>", "Törlés", "Inkább megtartom"],
	auth_log: ["Legutóbbi bejelentkezések", "$browser, $device", "Biztonság növelése", "//go.hearty.me/hj-sec"],
	redeem: ["Kód megadása", "Beváltás"],
	coupon_ok: ["Beváltási kérelem elküldve: „$coupon”",
				"Jóváhagyás után a „30 napos VIP-próba” 3 napon belül megjelenik,<br>lásd: [Profilkép] > [Előfizetésem]"],
	voucher_ok: "A(z) „$code” kód beváltva, $days nap VIP-et kaptál, lejár: $exp",
	voucher_invalid: "A kód lejárt, betelt vagy már beváltották",
	voucher_disqualified: "Fiókonként egy próbakód, te már beváltottál egyet",
	voucher_vvip: [
		"VVIP hűségajánlat",
		"Megveszed az éves csomagot 40% kedvezménnyel?",
		"Vásárlás"
	],
	voucher_ec: [
		"Az EC-kód <u>Life Shop kupon</u>",
		"Vásárlás"
	],

	// DOMs
	title: "Fiókom",
	tab: ["Profil", "Csomagom"],
	headline: ["Cím"], // deprecated
	nickname: ["Tollnév", "Módosítás"],
	pincode: "Ügyfélszolgálati PIN",
	bday: "Születésnap",
	email: ["Megerősítő e-mail küldése", "Megerősítő levél újraküldése", " mp múlva újraküldhető"],
	style: ["Dizájn", "Napló testreszabása"],
	gender: ["Nem", "Férfi", "Nő"],
	phone: ["Telefon", "Telefonszám megerősítése"],
	pwd: "Jelszó",
	pfont: ["Napló betűtípusa", "Előnézet"],
	language: "Nyelv",
	timezone: "Időzóna",
	newsletter: ["E-mail-értesítések", "Közös napló értesítések, hírlevél"],
	reminder: ["Napi emlékeztető", "Emlékeztess az írásra"],
	reminder_set: "Napi írási emlékeztető beállítva: %t",
	newsletter_shop: ["Life Shop hírlevél", "Újdonságok, akciók"],
	rate: ["Biztass minket", "5 csillag"],
	misc: "Egyéb",
	auth: ["Bejelentkezések", "Fiók törlése"],
	chat: "Kérdezz",
	fonts: [
		"jf Open Huninn", // 0
		"Taipei Sans", // 1
		"jf Open Huninn", // 2
		"jf JinXuan", // 3
		"jf Cream", // 4
		"LXGW WenKai", // 5
		"Yozai Writing", // 6
		"Naikai Writing", // 7
		"Jason Writing A (iOS-en nem)", // 8
		"Jason Writing B (iOS-en nem)", // 9
		"Jason Writing C (iOS-en nem)", // 10
		"Jason Writing D", // 11
		"Jason Writing E", // 12
		"Kurewa Gothic", // 13
		"Nani Writing (iOS-en nem)", // 14
		"POP Gothic", // 15
		"Star Love Pencil", // 16
		"Genyo Ming", // 17
		"HuiWen MinCho (iOS-en nem)", // 18
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
	title: "Csomagom",
	back: "Vissza",
	redeem: "Kód beváltása",
	buy: ["Hearty Journal vásárlása", "Hearty Journal megújítása"],
	plan: ["Csomagom", "Csomag- vagy kártyaváltáshoz írj az ügyfélszolgálatnak a Hearty ID-ddel", "A „VIP próba” az új felhasználók ajándéka<br>Lejárat után automatikusan visszakerülsz az alapverzióra"],
	order: ["Rendeléseim"],
	plan_th: ["Állapot", "Csomag", "Kezdete", "Lejárata", "Hearty Journal "],
	order_th: ["Állapot", "Rendelésszám", "Termék", "Összeg (TWD)", "Fizetési mód", "Számla"],
	order_status: ["Fizetésre vár", "Megvásárolva", "Aktiválva", "Lejárt, nincs fizetve", "Törölve"],
	plan_status: ["Aktív", "Lejárt"],
	url: ["Link küldése | QR-kód", "Másolás"],

	// bill
	fail: [
		"Sajnáljuk, a fizetés sikertelen",
		"Próbáld újra, vagy használj másik kártyát vagy fizetési módot",
		"Segítség kell? Keress minket"
	],
	fail_info: [
		"Gyakori ok", "Javasolt megoldás",
		"Hibás kártyaszám", "Ellenőrizd a kártyaszámot, a CVC-t és a lejáratot",
		"Nincs elég fedezet", "Elfogyott a keret, vagy nincs elég fedezet",
		"Nincs engedélyezve a külföldi/online fizetés", "Kérd a kártyakibocsátótól a külföldi/online fizetés engedélyezését",
		"A bank elutasította", "A bank kockázatosnak ítélte. Hívd fel, és jelezd, hogy valós vásárlás"
	],
	fail_btn: [
		"Újrapróbálás",
		"Ügyfélszolgálat",
	],


	// thankyou
	thx: [
		"Köszönjük a vásárlást, a VIP-csomagod aktív",
		"Kérdésed van? Szólj nyugodtan ヾ(๑❛ᴗ❛๑)ﾉ"
	],
	thx_th: [
		"Csomag",
		"Érvényesség",
		"nap",
		"Rendelésszám",
		"Időpont",
		"Összeg",
		"Fizetési mód",
		"Nyugta",
		"Csomag- vagy kártyaváltáshoz írj az ügyfélszolgálatnak a Hearty ID-ddel"
	],
	thx_inv: [
		"A tajvani számlát a Hearty Creative Inc. állítja ki",
		"Számla megtekintése"
	],
	thx_btn: [
		"Első vásárlás? Töltsd ki a kérdőívet",
		"Képernyőkép",
		"Vissza a naplóhoz"
	]
};

// phone
_h$["pv"] = _h$["pv"] || {
	// JS
	ok: "OK",
	no: "Mégse",
	signin: ["Bejelentkezés újra", "Inaktivitás miatt kijelentkeztél"],
	format: ["A szám túl rövid", "Hibás számformátum", "Túl sok kérés, próbáld később"],
	verify1: ["Megerősítés", "SMS-kód: ", "<br><small>A <b>Firebase megerősítő SMS</b> elküldve, várj 45 másodpercet</small>", "$no megerősítve"],
	verify2: ["Nem jött meg az SMS", "Kézi megerősítéshez küldj nekünk SMS-t", "SMS küldése", "Az SMS beérkezésétől számított 72 órán belül megerősítjük", "[Telefon megerősítése] Hearty ID: "],
	verify3: ["Nem jött meg az SMS", "Add meg a Hearty ID-d és a telefonszámod a kézi megerősítéshez", "Üzenet a Facebook-oldalra"],
	code: ["SMS-kód", "Újra megadom", "A kód 6 számjegyű", "Hibás kód", "A kód lejárt, kezdd újra"],
	fail: "Az SMS-ellenőrzés betöltése sikertelen<br>Frissítsd az oldalt",

	// DOMs
	title: "Telefonszám megerősítése",
	back: "Fiókom",
	verify: ["Telefonszám megerősítése", "Telefonszám", "Kód küldése", "Írd be a kódot", "Még mindig nincs SMS?", "Újraküldés", "30 mp múlva újraküldhető"]
};

// email
_h$["em"] = _h$["em"] || {
	title: [
		"Leiratkozás: hírlevél",
		"Leiratkozás: Life Shop hírlevél"
	],
	unsubscribe: "Leiratkozás Unsubscribe",
	ask: [
		"Nem kapsz több oldalüzenetet és közös napló értesítést",
		"Nem kapsz több értesítést újdonságokról és akciókról",
		"Igen, leiratkozom"
	],
	ok: "OK",
	back: "Vissza",
	unsubscribed: "„$email” sikeresen leiratkozott, holnaptól érvényes",
	remarks: [
		"A fontos fiókértesítéseket (elfelejtett jelszó, jogi tudnivalók stb.) továbbra is megkapod.",
		"Ha semmilyen e-mailt nem kérsz, töröld a Hearty Journal-fiókod"
	]
};

// points
_h$["pt"] = _h$["pt"] || {
	// JS
	ok: "Megerősítés",
	no: "Mégse",
	back: "Vissza",
	close: "Bezárás",
	signin: [
		"Bejelentkezés",
		"Előbb jelentkezz be a Hearty Journalba"
	],
	redeem: [
		"$p pontot váltasz be erre: „$pkg”!",
		"A „Megerősítés” gombbal elfogadod a feltételeket, figyelj az érvényességre",
		"Nincs elég pontod a(z) „$pkg” beváltásához",
		"Ez a csomag még nem váltható be"
	],
	ec_ok: [
		"Life Shop NT$$amt kuponkódod: <b>$code</b>",
		"A „Beváltásaim” között találod, használd fel $exp előtt"
	],
	vip_ok: [
		"Sikeres beváltás! $days nap VIP-et kaptál, lejár: $exp",
		"Megnézem"
	],

	// DOMs
	title: "Hearty pontok beváltása",
	points: ["Hearty pontjaim", "pont"],
	coupons: [
		"Beváltásaim",
		"Beváltási előzmények",
		"Csomag",
		"Kód",
		"Beváltás napja",
		"Lejárat",
		"Felhasználva",
		"Még nincs beváltásod"
	],
	label: [
		"Kiemelt",
		"Népszerű"
	],
	use: [
		"Felhasználás a boltban"
	],
	agree: ["Olvasd el és fogadd el a feltételeket"],
	get: [
		"Hogyan szerezhetek pontot?",
		"Napi bejelentkezéssel gyűjthetsz pontokat: koppints a napló jobb felső csengőjére",
		"Bejelentkezés most"
	],

	// Plans
	pkg_vip14: [
		"Hearty Journal VIP 14 nap",
		"14 nap"
	],
	pkg_vip30: [
		"Hearty Journal VIP 30 nap",
		"30 nap"
	],
	pkg_ec100: [
		"Life Shop · digitális termék kupon",
		"NT$ 100"
	]
};
