/* Hearty Journal Language Pack: Ver 16 */

var _h$ = {};

_h$["lang"] = "fi-fi";

// common.head
_h$["h"] = _h$["h"] || {
	ok: "OK",
	qr: "QR-koodi_Hearty",
	copy: "Kopioitu",
	err: "Hearty Journal on ruuhkautunut, yritä myöhemmin.<br>Jos ongelma jatkuu, ota yhteyttä tukeen",
	satisfy: ["Hei! Pidätkö Hearty Journalista?", "Pidän ~", "En pidä"],
	rate: ["Arviosi on tiimillemme paras kannustus", "Sytytätkö meille viisi tähteä?", "Kiitos tuestasi ja kannustuksestasi", "Ole hyvä"],
	notify: ["Ilmoitukset eivät ole sallittuja", "Et saa tietoa uusista viesteistä etkä kirjekavereista", "Salli nyt", "Ei nyt"],
	downloading: "Ladataan"
};

// menu
_h$["m"] = _h$["m"] || {
	url: [
		"//go.hearty.me/hj-faq",
		"//go.hearty.me/hjse"
	],

	// JS
	no: "Ei",
	back: "Takaisin",
	nav: ["Päävalikko", "Hearty Journal", "Oma päiväkirja"],
	signout: ["Kirjaudu ulos", "Haluatko varmasti kirjautua ulos?"],

	// DOMs
	avatar: [
		"Oma tili", "Kirjaudu", "VIP"
	],
	menu: [
		"Päivän jae", "Alicen vieraskirja", "Päiväkirjaseinä", "Hearty-blogi", "Oma päiväkirja", "Galleria", "Life Shop", "Päivitä VIP:ksi", "Ohjeet", "Tietoa meistä", "Kirjaudu ulos", "Windows-versio", "macOS-sovellus", "Windows/macOS-versio", "Mobiilisovellus", "Language 語言", "Anna 5 tähteä", "🐞 Vianetsintä"
	]
};

// index
_h$["i"] = _h$["i"] || {
	passkey: [
		"Kirjaudu Passkeyllä",
		"tai",
		"Ei Passkeytä? Kirjaudu salasanalla ja luo se kohdassa ”Oma tili”",
		"Passkey on poistettu, kirjaudu muulla tavalla",
		"Passkey-vahvistus aikakatkaistiin",
		"Passkey-kirjautuminen epäonnistui, yritä uudelleen",
		"Tili on poistettu tai jäädytetty"
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
	no: ["Ei", "Peruuta"],
	go: "Mennään!",
	back: "Takaisin",
	copy: ["Kopioi", "Kopioitu: "],
	email: [
		"Sähköposti vahvistettu", "Sähköposti on jo vahvistettu", "Vahvistuslinkki on vanhentunut", "Vahvistuslinkki on puutteellinen"
	],
	reset: [
		"Nollaa salasana",
		"Nollataan ja kirjaudutaan…",
		"Nollauslinkki on virheellinen",
		"Tunnus on virheellinen",
		"Nollauslinkki lähetetty",
		"Nollauslinkki lähetettiin osoitteeseen ***@$domain",
		"Avataanko $url?",
		"Tiliä ei löydy"
	],
	captcha: [
		"Turvatarkistus epäonnistui, päivitä sivu",
		"Suorita alla oleva turvatarkistus"
	],
	ref: [
		"🎁 $user kutsui sinut tänne"
	],
	cookie: [
		"Ota evästeet käyttöön kirjautuaksesi", "Näin se onnistuu"
	],
	browser: [
		"Selaimesi on liian vanha", "Internet Exploreria ei tueta"
	],
	signin: [
		"Kirjaudu",
		"Kirjaudutaan: $user…",
		"Tunnus on virheellinen",
		"Tiliä $user ei ole",
		"Tunnuksella $user ei ole rekisteröity tiliä",
		"Tili $user on poistettu/jäädytetty",
		"$user on poistettu pyynnöstä tai jäädytetty sääntörikkomuksen vuoksi",
		"Väärä salasana",
		"Salasana: vähintään 6 merkkiä",
		"Kirjaudu palveluun ”$client” Hearty ID:llä"
	],
	signup: [
		"Tunnuksessa kirjaimia, halutessasi myös numeroita", "Tunnuksessa on 4–20 kirjainta tai numeroa",
		"Virheellinen sähköposti",
		"Anna oikea sähköpostiosoite",
		"Salasana: 6–20 merkkiä",
		"Salasanat eivät täsmää",
		"⚠ Yahoo!-posti hukkaa helposti viestejä,\nkirjekavereiden viestit voivat jäädä tulematta. Käytetäänkö silti?",
		"Virheellinen sähköposti tai salasana!",

		"Tili $user luotu! Vahvista sähköpostisi",
		"Tili $user luotu!",
		"Tili on jo olemassa, kirjaudu sisään",
		"Sähköposti on jo rekisteröity, kirjaudu sisään",
		"Tunnus on varattu, valitse toinen",
		"Virheellinen sähköposti",
		"Kertakäyttöiset sähköpostit eivät käy",
		"Järjestelmä on ruuhkautunut"
	],
	box: [
		"Rekisteröidy",
		"Kirjaudu",
		"Nollaa salasana",
		"Luo uusi tili",
		"Kirjaudu Hearty Journaliin",
		"Nollaa salasana | Palauta tili",
		"💡 Luo tunnuksesi (4–20 kirjainta/numeroa)",
		"💡 Hearty ID tai sähköposti"
	],
	timer: "Lähetä uudelleen $min:$sec",
	chat: [
		"Hearty-tuki",
		"Kirjaudu ottaaksesi yhteyttä tukeen",
		"Ota yhteyttä sähköpostilla",
		"Tuen sähköposti: "
	],
	id_notice: [
		"Hearty ID<br>4–20 kirjainta/numeroa, näkyy yhteisössä",
		"Päiväkirja tallennetaan salattuna tälle tilille ja synkronoituu puhelimen ja tietokoneen välillä"
	],
	song: ["Harmony - 溫度日記", "Hearty Journalin tunnuskappale"],
	404: "Antamaasi osoitetta ei ole",

	// DOMs
	title: ["Hearty Journal 溫度日記", "Käsin piirretty yksityinen päiväkirja jokaiselle hetkelle"],
	topbar: [
		"Rekisteröidy / Kirjaudu", "Windows-sovellus", "macOS-sovellus"
	],
	slogan: [
		"Hearty Journal", "<br>käsin piirretty yksityinen päiväkirja", ", ",
		"4,9★ App Storessa | Applen toimituksen valinta | 300 000+ tyytyväistä käyttäjää", "Yhteys on salattu kuin korttimaksuissa"
	],
	scroll: "Vieritä alas",
	preview: ["Esikatselu", "Lopeta esikatselu"],
	feature: [
		"Kirjoita itsellesi", "Talleta jokaisen päivän kauneus",
		"Kuvitettu päiväkirja", "Söpöjä tarroja, liimaa mielesi mukaan",
		"Vaihtopäiväkirja", "Jaa ystävän tai kumppanin kanssa",
		"Turvallinen ja yksityinen", "Pankkitason salattu yhteys"
	],
	testimonial: [
		"Mitä käyttäjät sanovat Hearty Journalista",
		"Kirjoita ne sanat, jotka jäivät sanomatta. Suosittelen Hearty Journalia.", "Haitaibear, tietokirjailija",
		"Lempeä ja rauhallinen, sopii juttelemaan itsensä kanssa", "Cindy Liu",
		"Kaunis ulkoasu ja kätevä automaattitallennus", "Wu Chi",
		"Kiitos, Hearty, tuesta synkkinä hetkinä", "Yan-Xuan",
		"Tykkään tietokoneversiosta, latasin myös mobiiliversion", "Xiao-Jun"
	],
	press: [
		"Mediassa",
		"Bnext Media", "Free Group", "Aotter girls", "Womany", "Sheaspire", "SEinsights", "Taiwan Startup Stadium", "Innosquare, New Taipei", "UDN", "Vita News"
	],
	action: [
		"Aloita lämminhenkinen elämä", "Kokeile heti"
	],
	rate: "Anna Hearty Journalille 5 tähteä",
	footer: [
		"Language 語言",
		"Windows-versio",
		"macOS-sovellus",
		"Ominaisuudet",
		"Arviot",
		"Yhteistyö",
		"Medialle",
		"UKK",
		"Tietosuoja",
		"Käyttöehdot",
		"Tietosuojakäytäntö",
		"Tietoturvasertifikaatti",
		"Tunnuskappale",
		"Nien, perustaja",
		"Jiayi, toinen perustaja",
		"Tavaramerkki",
		"Tietoa meistä"
	],
	cookies: ["Käytämme evästeitä. Jatkamalla hyväksyt tietosuojakäytännön.", "OK"],
	copyright: "2016-"+new Date().getFullYear().toString()+" Hearty Creative Inc. ja sen tytäryhtiöt",
	isp: "Palvelinpalvelu: Cloudways",
	auth: [
		"Rekisteröidy ilmaiseksi",
		"Onko sinulla tili? Kirjaudu",
		"Unohditko tunnuksen tai salasanan?",
		"Muistatko nyt? Kirjaudu",
		"Tili", "💡 Hearty ID tai sähköposti",
		"Salasana", "🔑 6–20 merkkiä",
		"Vahvista", "🔑 Anna salasana uudelleen", "Näytä salasana",
		"Muista minut", "Olen täysi-ikäinen ja hyväksyn käyttöehdot"
	],
	lang: "Vaihdetaan kieleksi: $lang"
};

// editor
_h$["e"] = _h$["e"] || {
	// JS
	url: [
		"//go.hearty.me/hj-faq",
		"//go.hearty.me/hj-data",
		"//bitly.com/3E0ZJ7Q"
	],
	ok: ["OK", "Selvä", "Tehdään niin"],
	no: ["Ei", "Peruuta"],
	retry: "Yritä uudelleen",
	back: "Takaisin",
	gotop: "Ylös",
	signin: ["Kirjaudu", "Kirjaudu ", "käyttääksesi kaikkia ominaisuuksia"],
	signout: "Kirjaudu ulos",
	name: ["Nimimerkkini", "Millä nimellä kutsumme sinua?<br>(Nimimerkki on julkinen, älä käytä oikeaa nimeä)", "Tervetuloa omaan puutarhaasi, $name", "<u>Muistutetaanko joka ilta</u> päiväkirjan kirjoittamisesta?", "Kyllä, muistuta"],
	get_stickers: ["Jee! Sait omat tarrasi", "Katsotaan"],
	welcome: ["Tervetuloa takaisin, $name", "Avaa päiväkirja", "Et ole kirjautunut"],
	year: "", // CE
	maintenance: ["Huoltokatko: ", "Palvelu on poissa käytöstä tunnin"],
	update: ["Vanha versio, päivitä saadaksesi uudet ominaisuudet", "Päivitä nyt", "Muistuta huomenna"],
	search: ["Hae merkinnöistäni", "Hakusana", "Hae", "Ei tuloksia"],
	bookmark: [
		"1 suosikki",
		"$no suosikkia", // 複數
		"Lisää suosikkeihin",
		"Nimetön"
	],
	catalog: [
		"1 merkintä",
		"$no merkintää", // 複數
		"Uusi merkintä",
		"Ei merkintöjä",
		"Kukaan ei ole vielä jakanut merkintöjä",
		"Tämä on ensimmäinen tai viimeinen merkintä",
		"Ei luettavia merkintöjä",
		"Edellinen",
		"Seuraava"
	],
	sticker: ["Muuta kokoa", "Kierrä", "Liitä", "Poista", "Tarrojen enimmäismäärä ylittyi", "Katso VIP-edut"],
	verify_required: [
		"Vahvista $item ja täydennä perustiedot, jotta voit $act",
		"puhelinnumero", "käyttää kaikkia ominaisuuksia",
		"jakaa merkintöjä", "julkaista merkinnän", "lisätä kirjekaverin", "jakaa kirjekaverille"
	],
	privacy: [
		"Merkintä on julkinen", "Merkintä on lukittu",
		'Varmistamme, että merkintä noudattaa <a target="_blank" href="//go.hearty.me/publish"><u>julkaisusääntöjä</u>',
		"Se julkaistaan, kun moderaattori hyväksyy sen",
		"Se julkaistaan automaattisesti hyväksynnän jälkeen",
		"Älä julkaise samaa useasti, se voi näyttää roskapostilta (;´ㅁ`)-3<br>PS. Ilman ilmoituslupaa emme voi kertoa hyväksynnästä"
	],
	publish: [
		"Merkintä on lyhyt. Kirjoita vielä lisää~<br>(vähintään 100 merkkiä)",
		"Selvä, nyt tuli idea",
		"Julkaistaanko ”$title” päiväkirjaseinällä?",
		"Seinän merkinnän on oltava julkinen. Muutetaanko julkiseksi?",
		"Julkaise",
		"”$title” on julkaistu seinällä",
		"Katso",
		"Takaisin päiväkirjaan",
		'Noudata <a target="_blank" href="//go.hearty.me/publish"><u>[julkaisusääntöjä]</u></a>. Kirjekavereita voi etsiä <a target="_blank" href="//go.hearty.me/hjpd"><u>[kirjekaveripalstalta]</u></a>, älä jaa tässä henkilötietoja</small>',
		"Perutaanko julkaistu ”$title”?",
		"Peru julkaisu",
		"Julkaisu peruttu",
		"Vain 1 merkintä päivässä, jaa huomenna lisää"
	],
	penpal_add: [
		"Ystävän Hearty ID tai sähköposti",
		"Perusversio: 2 kirjekaveria; VIP: rajattomasti",
		"Anna Hearty ID tai sähköposti",
		"Lisää kirjekaveriksi",
		"Yli 2 kirjekaveria vaatii VIP:n",
		"Lisätäänkö ”<b>$name</b>” (Hearty ID: $user) kirjekaveriksi?",
		"$name on nyt kirjekaverisi",
		"”$user” on jo lisätty tai ei salli lisäämistä",
		"Käyttäjää ”$user” ei löytynyt",
		"”$user” on arkistoinut sinut",
		"Hei, et voi lisätä itseäsi"
	],
	penpal_delete: [
		"Arkistointi palauttaa jaetut merkinnät, eikä uudelleen lisääminen ole mahdollista. Mieti tarkkaan!",
		"Kenet haluat arkistoida?",
		"- Valitse -",
		"Arkistointi palauttaa jaetut merkinnät, eikä uudelleen lisääminen ole mahdollista. Arkistoidaanko ”$user”?",
		"Arkistoi",
		"”$user” arkistoitu"
	],
	penpal_send: [
		"Jaettu: $add",
		"Jakoasetukset päivitetty"
	],
	pin: [
		"Tuen PIN-koodi: ", "Numero nopeuttaa tunnistamista yhteydenotossa"
	],
	chat: [
		"Hearty ID: "
	],
	membership: [
		"Perusversio", "VIP-kokeilu", "VIP"
	],
	feedback: [
		"Tukipyyntö: #$no",
		"Kirjoita nimesi",
		"Virheellinen sähköposti",
		"Kirjoitit liian vähän",
		', vastaamme <b>sähköpostitse 24 tunnin kuluessa, seuraa postilaatikkoasi</b><br>Vastaamme aina. Jos vastausta ei näy kahdessa päivässä, tarkista roskaposti tai ota yhteyttä <a target="_blank" href="//hearty.app/ms"><u>Hearty Journalin Facebook-sivulla</u></a> ´・ω・｀<br><br>Jos pidät Hearty Journalista, tutustu VIP-tilaukseen. Tukesi auttaa meitä kehittämään ominaisuuksia, tekemään tarroja ja palvelemaan paremmin.',
		"Selvä",
		"VIP-ominaisuudet",
		"Jokin meni pieleen, yritä myöhemmin"
	],
	video: [
		"YouTube-videolinkki",
		"tai lataa napauttamalla",
		"Vahvista", // 設為
		"Lisää soittolistaan",
		"Video upotettu",
		"Virheellinen YouTube-linkki",
		"Video on poistettu, yksityinen tai sitä ei voi upottaa<br>Tarkista linkki",
		"Tarkista",
		"Poistetaanko ”$title”?",
		"Poista",
		"Aseta (jätä tyhjäksi poistaaksesi)", // 預留未使用
		"https://youtu.be/vYFnZdUiUyg (tyhjä poistaa videon)"
	],
	yt: [
		"Musiikkilaatikko",
		"Järjestä",
		"Poista",
		"Sammuta valot",
		"Ei vielä kappaleita, lisää napauttamalla ➕",
		"Lempikappaleesi soivat taustalla",
		"Omat kappaleeni",
		"Toista video"
	],
	gps: [
		"Sallitaanko sijainti säätietoa varten?",
		"⛅ ”Salli” GPS-sijainti ja odota hetki…",
		"Sää lisätty",
		"Ei GPS-signaalia, säätä ei voitu lisätä",
		"Sijaintiongelma? Katso Chromen osoiterivin kuvake"
	],
	chars_max: [
		"Merkinnässä on $chars merkkiä, raja on 10 000 (välimerkit mukaan lukien)",
		"Onkohan kukaan nähnyt tätä ilmoitusta?"
	],
	chars: [
		"$chars merkkiä ylittää perusversion rajan ($limit merkkiä)",
		"Katso VIP-edut",
		"Muistuta myöhemmin"
	],
	leave: "Merkintä tallennettu. Poistutaanko?",
	date: ["Merkinnän päivä", "Päiväksi asetettu: ", "Päivän mukaan: uusimmat ylimpänä"],
	subject: ["Merkintä $date", "Otsikko", "Uusi otsikko ”$title”", "Päivitä"],
	archive: [
		"Poistetaanko ”$title”? Poistoa ei voi perua", "Kyllä, unohda kaikki", "”$title” poistettu"
	],
	unsafe: "Google Safe Browsing: linkki on vaarallinen, älä avaa sitä",
	offline: "Verkko viivästyy, yritä myöhemmin",
	lock: [
		"Otetaanko näyttölukko käyttöön? Estää kurkkimisen",
		"Ota käyttöön",
		"Poista näyttölukko",
		"Näyttölukko poistettu",
		"Unohdin molemmat",
		"Unohditko <u>näyttölukon PIN-koodin</u> ja <u>Hearty-tilin salasanan</u>?<br>Kirjaudu ulos ja nollaa salasana (näyttölukko poistuu samalla)"
	],
	pincode: [
		"Anna PIN-koodi",
		"Vahvista PIN-koodi",
		"Anna PIN-koodi tai Hearty-tilin salasana",
		"Väärä PIN-koodi",
		"Salasana näyttää väärältä",
		"Syötteet eivät täsmää, aseta uudelleen",
		"PIN-koodissa saa olla vain numeroita",
		"PIN-koodiksi asetettu: $pin"
	],
	screenshot: "Kuvaa luodaan, lataus alkaa 10 sekunnin kuluttua",
	pc: [
		"Hanki tietokoneversio", 'Avaa tietokoneella ”www.hearty.me” <i class="fal fa-globe"></i>',
		"Kokeile tietokoneversiota", "Suuri näyttö, helppo selata", "Mukavampi kirjoittaa näppäimistöllä", "Synkronointi puhelimen ja tietokoneen välillä", "Kokeile"
	],
	picture: [
		"Lataa kuva",
		"Valitse kuva (JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Lataa",
		"Valitse uudelleen",
		"Enintään 10 kuvaa / merkintä",
		"Tiedosto on $ext, vain JPG, PNG, GIF, WebP, AVIF ja HEIC sallitaan",
		"Kuva ladattu",
		"Ladataan, odota hetki",
		"Kuva on Lataukset-kansiossa"
	],
	picture_err: [
		"Muotoa tai päätettä ei tueta (tuetaan: JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Kuva on yli 6 Mt, pakkaa se ensin",
		"Kuvaa ei voi lukea tai se on vioittunut",
		"HEIC/HEIF-muunnos epäonnistui, kokeile toista kuvaa"
	],
	picture_remove: [
		"Poistetaanko tämä kuva?",
		"Poista pysyvästi",
		"Kuva poistettu"
	],
	file: "Hearty_Journal",
	trial: [
		"30 päivän VIP-kokeilu alkoi, kaikki on avattu",
		"Kokeilu päättyy $exp, jolloin palaat automaattisesti perusversioon ilman veloitusta.<br>Voit päivittää VIP:ksi myöhemmin ( ´･ヮ･)<br>Kaikki merkintäsi säilyvät Hearty Journalissa ♡",
		"Vertaa versioita",
		"Selvä, aloitetaan"
	],
	purchased: [
		"VIP on nyt käytössä!",
		"Vastaisitko 3 minuutin kyselyyn?",
		"(Ensimmäisestä vastauksesta 7 päivää VIP:tä)",
		"Aloita kysely",
		"Olen jo vastannut"
	],
	n_verify_email: [
		"Vahvista $item käyttääksesi kaikkia ominaisuuksia",
		"Vahvista sähköposti saadaksesi vastaukset"
	],
	n_verify_phone: "Liitä puhelinnumero turvallisuuden vuoksi",
	n_vip_prefix: "VIP-tilauksesi",
	n_char_limit_exceed: "$chars merkkiä, raja täynnä, päivitä nyt",
	n_daily_checkin: [
		"Et ole vielä kirjautunut tänään",
		"Kirjattu tänään"
	],
	checkin: [
		"Päivän kirjaus",
		"Hearty-pisteeni: ", "p",
		"Päivän kirjauksesta saat 1 p",
		"Sait 1 pisteen, sinulla on nyt $p p",
		"Olet jo kirjautunut tänään",
		"Tule huomenna uudelleen",
		"Hearty-pisteet palkitsevat päivittäisestä kirjoittamisesta<br>Niillä voi lunastaa palkintoja~"
	],
	reward: [
		"Katso palkinnot"
	],
	pd: [
		"Kuukautiskalenteri",
		"Seuraavat: ",
		"Keskimääräinen kierto: ",
		"päivää",
		"Alkupäivä",
		"Loppupäivä",
		"Kierto",
		"Lisää merkintä",

		"Tänään",
		"Poista",
		"Poistetaanko?",
		"Tänään: päivä $d", // Eng: $d$th,
		"Seuraavat: $d päivän päästä"
	],

	// 自訂日記本
	headline: [
		"Päiväkirjan nimi",
		"Päiväkirjani nimi on:",
		"Tallenna",
		"Uusi nimi ”$headline”",
		"Voi myös jättää tyhjäksi ~"
	],
	style: [
		"Muokkaa päiväkirjaa",
		"Palauta oletus",
		"Puuttuuko inspiraatio?",
		"//en.faq.hearty.me/tutorial/styles"
	],
	cover: [
		"Kansikuva",
		"Lataa kansikuva",
		"Paras kuvasuhde: 1,9:1",
		"Vahvista", // crop
		"Peruuta",
		"Kuvamuotoa ei tueta: $ext",
		"Kansikuva vaihdettu",
		"Kansikuva palautettu"
	],
	bg: [
		"Taustakuva",
		"Lataa taustakuva",
		"Kuvamuotoa ei tueta: $ext",
		"Taustakuva vaihdettu",
		"Taustakuva palautettu"
	],
	color: [
		"Päiväkirjan väri",
		"Väri päivitetty"
	],

	// DOMs
	title: "Oma päiväkirja",
	header: [
		"Sisällys", "Ilmoitukset", "Tarrat", "Valitse tilaus", "Palaute", "Valmis"
	],
	notification: [
		"Ei ilmoituksia",
		"Tietokoneversio",
		"Kysy",
		"Päivitä",
		"Vianmääritys",
		"Päivitä VIP:ksi ja nauti kaikista ominaisuuksista"
	],
	link: [
		"Olet siirtymässä toiselle sivustolle",
		"Tarkistettu Google Safe Browsingilla",
		"Mennään"
	],
	share: [
		"Merkinnän asetukset", "Linkki", "Yksityinen", "Salasanasuojattu", "Julkinen", "Julkaise seinällä", "Älä julkaise henkilökohtaista sisältöä"
	],
	penpal: [
		"Vaihtopäiväkirja", "Lisää kirjekaveri", "Arkistoi kirjekaveri", "Ei kirjekavereita, lisää ensin", "Lähetä merkintä: "
	],
	qa: [
		"Kysy", "Ominaisuudet ja käyttö", "Tili, laskutus ja muut", "Tietosuoja ja yksityisyys", "Verkkoyhteyden testaus", "Palaute, ehdotukset ja kannustus", "Palvelun tila", "Kaikki palvelut toiminnassa"
	],
	cs: [
		"Hearty-tuen sähköposti", "Kysyttävää ominaisuuksista? Katso UKK", "Vikailmoitus / palaute / kannustus",
		"Vastaamme sähköpostitse, seuraa postilaatikkoasi", "Lähetä", "Tuen PIN-koodini: ",
		"Käytät beta-versiota"
	],
	csform: ["Nimeni", "VIP", "Ilmainen", "Liitä kuvakaappaus"],
	gift: [
		"Lunasta lahjatarrat", "Lunasta", "50 lohdullista tarraa Hearty Journalilta"
	],
	prologue: "Talleta tämän päivän tunnelmat",
	pwd: "Anna salasana",
	warn: [
		"Huoltotiedote", "Hidas yhteys", "Epävakaa yhteys", "Akku vähissä"
	],
	tool: [
		"Tallenna", "Uusi merkintä", "Poista", "Jaa", "Vie kuvana", "Edellinen", "Seuraava", "Koko näyttö", "Avaa kirja", "Käännä"
	],
	rmenu: [
		"Kysy", "Tietoa Heartystä", "Koko näyttö", "繁/简", "Suurenna tekstiä", "Pienennä tekstiä", "Selaa kirjaa", "Pystysuora lukutila"
	],
	image: [
		"Kuva", "Kierrä kuvaa", "Käytä suodinta", "Lataa kuva", "Poista kuva"
	],
	tab: [
		"Omat", "Kirjekaverin",
		"🔍 Haku", "🔖 Suosikit", "🎧 Musiikkilaatikko", "🌙 Kuukautiskalenteri", "🔒 Näyttölukko",
		"Kysy", "Eleohjeet", "Muokkaa tarroja puhelimella"
	],
	book: [
		"Tietoa Hearty Journalista", "Kiireisenä aikana Hearty Journal on lämmin ja hiljainen paikka, jossa voi laskea väsymyksen harteiltaan, kertoa lausumattomista heikkouksista ja löytää taas aidon itsensä. Vaikka taivas ei aina ole sininen, jatkamme lempeästi mutta päättäväisesti."
	],
	promo: ["Erikoistarjous: 3 kk VIP:tä hintaan NT$99"],
	403: "Yksityinen merkintä, vain kirjoittaja voi lukea. Jos olet kirjoittaja, kirjaudu 🔒",
	404: "Merkinnän osoite saattaa olla väärä",
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
	stickers: ["Omat tarrat", // Start with 1
		"Käsialat", "Sää", "Tunteet", "Arki", "Pukeutuminen", "Pikkutavarat", "Ruoka", "Matkat ja maisemat", "Vuodenajat ja juhlat", "Kasvit ja kukat", "Eläimet", "Söpöt hahmot", "Fantasia"
	]
};

// pricing
_h$["p"] = _h$["p"] || {
	url: [
		"//go.hearty.me/why-VIP",
		"//go.hearty.me/hj-terms",
		"//go.hearty.me/hj-privacy"
	],
	lite: ["Perusversio", "Ilmainen"],
	vip: ["Hearty Journal VIP", "VIP", "(ilmainen kokeilu)"],
	feat_lite: [
		"Ei mainoksia, yksityisyys turvattu",
		"Tekstimerkinnät (raja 5 785 merkkiä)",
		"90 perustarraa, 20 erikoisfonttia",
		"Sää automaattisesti, päivittäinen muistutus",
		"Vaihtopäiväkirja ystävien kanssa (2 paikkaa)",
		"PIN-lukko, kuukautiskalenteri, oma soittolista",
		"Synkronointi: iOS, Android, Windows, macOS",
		"Automaattinen pilvivarmuuskopio (AWS)",
		"TLS 1.3 -salattu yhteys",
		"Kehitetty Taiwanissa",
	],
	feat_vip: [
		"Kaikki perusversion ominaisuudet ja lisäksi:",
		"Rajattomasti merkkejä",
		"Kuvien lataus (10 / merkintä)",
		"Oma kuvagalleria, suotimet",
		"Yli 1 300 tarraa",
		"YouTube-videot",
		"Oma kansi- ja taustakuva",
		"Oma päiväkirjan nimi ja merkinnän päivä",
		"Kokotekstihaku",
		"Vienti kuvina, varmuuskopio (Word, TXT)"
	],
	remark: [
		"Miksi päivittää VIP:ksi?",
		"Ensiostotarjous: 3 kk VIP:tä hintaan NT$99",
		"Kuukausitilaus luottokortilla, peru milloin tahansa",
		"30 päivän rahat takaisin -takuu ensiostolle",
		"VIP-ominaisuudet"
	],
	act: [
		"Rekisteröidy ilmaiseksi", "Aloita 30 päivän kokeilu", "Katso VIP-edut", "Uusimistiedot", "Kirjaudu tilataksesi"
	],
	deposit: ["Ennakkomaksu", "Osta nyt", "Luottokortti, Google Pay, ATM, kioski, Alipay"],
	subscription: ["Kuukausitilaus", "Osta nyt", "(korttitarjous)", "Ensiosto: 3 kk VIP:tä hintaan NT$99", "4. kuukaudesta alkaen NT$99/kk", "Kansainväliset luottokortit käyvät"],
	selected: ["Nykyinen", "Suositeltu"],
	currency: ["Nykyinen vaihtokurssi: "],
	term: [
		"3 kk", "6 kk", "1 vuosi"
	],
	unit: [
		"kk", "kk"
	],
	subtotal: "Välisumma NT$",
	powerby: "Teknologia: ",
	redeem: "Lunasta koodi",

	due: "VIP-tilaukseni voimassaolo",
	due_active: ["VIP-tilaus aktiivinen"],
	due_date: ["Päättyy ", "", "jonka jälkeen palaat perusversioon"],
	due_days: ["Päättyy ", " päivän kuluttua", "jonka jälkeen palaat perusversioon"],
	due_tomorrow: ["Päättyy huomenna", "palaat pian perusversioon"],
	due_today: ["Päättyy tänään", "palaat pian perusversioon"],
	iap_ios: [
		"Uusiutuu kuukausittain, peru milloin tahansa",
		"[Hearty Journal VIP] iOS-tilauksen ehdot",
		"Perusversiossa osa ominaisuuksista, VIP avaa kaiken",
		"Kuukauden jakso, uusitaan ensimmäisen tilauksen hinnalla",
		"Uusitaan ja veloitetaan automaattisesti Apple-tililtäsi",
		"Alkanutta tilausjaksoa ei voi perua eikä hyvittää kesken",
		"Uusitaan 24 tuntia ennen päättymistä; jos et halua jatkaa, peru ajoissa",
		"Hallitse tilausta milloin tahansa Apple-tilin kohdassa ”Tilaukset”",
		"Emme koskaan pyydä puhelimitse pankkisiirtoja. Jos saat epäilyttävän puhelun, ilmoita poliisille",
		"Tilaaminen päättää kokeilun heti. Haluatko kokeilla pidempään? Tilaa vasta sen jälkeen",
		"Käyttöehdot",
		"Tietosuojakäytäntö"
	],
	iap_and: [
		"Uusiutuu kuukausittain, peru milloin tahansa",
		"[Hearty Journal VIP] Android-tilauksen ehdot",
		"Perusversiossa osa ominaisuuksista, VIP avaa kaiken",
		"Kuukauden jakso, uusitaan ensimmäisen tilauksen hinnalla",
		"Uusitaan ja veloitetaan automaattisesti Google Playn kautta",
		"Alkanutta tilausjaksoa ei voi perua eikä hyvittää kesken",
		"Uusitaan 24 tuntia ennen päättymistä; jos et halua jatkaa, peru ajoissa",
		"Hallitse tilausta milloin tahansa Google Playn kohdassa ”Maksut ja tilaukset”",
		"Emme koskaan pyydä puhelimitse pankkisiirtoja. Jos saat epäilyttävän puhelun, ilmoita poliisille",
		"",
		"Käyttöehdot",
		"Tietosuojakäytäntö"
	]
};

// Alice
_h$["A"] = _h$["A"] || {
	// JS
	signin: ["Kirjaudu", "Kirjaudu kommentoidaksesi", "Kirjaudu ensin"],
	back: "Takaisin",
	no: "Ei",
	no_post: "Hups, julkaisua ei löytynyt",
	penpal_guest: ["Tänään on rekisteröitymisesi $day. päivä<br>7 päivän kirjoittamisen jälkeen voit etsiä kirjekavereita", "Jatketaan"], // $th
	comment_limit: [
		"Roskapostin estämiseksi enintään 2 kommenttia / julkaisu. Poista tai muokkaa aiempia",
		"$chars merkkiä, kommentissa enintään 85",
		"Kommentissa vähintään 3 merkkiä, ja sen on liityttävä aiheeseen"
	],
	comment_ban: [
		"Voi sisältää arkaluonteisia sanoja, julkaistaan hyväksynnän jälkeen",
		"Kommenttisi estettiin, roskapostia on niin paljon 🥺",
		"Muistutus: noudatetaan yhdessä ",
		"julkaisusääntöjä"
	],
	comment_edit: ["Muokataanko kommenttia?", "Muokkaa"],
	report_ask: ["Ilmoitetaanko kommentista?", "Kyllä, se rikkoo sääntöjä", "Ilmoitettu, moderaattori tarkistaa sen"],
	url: ["Kopioi linkki", "Merkinnän linkki/QR-koodi", "Lataa"],
	penpal_add: ["Lisätäänkö ”<b>$id</b>” kirjekaveriksi?", "Suosittelemme enintään 2 kirjekaveria", "Vaihtopäiväkirjaan"],
	verify: ["Vahvista sähköposti ja puhelin kaikkia ominaisuuksia varten", "Omaan tiliin"],

	// DOMs
	title: "Alicen vieraskirja",
	board: "Alicen vieraskirja",
	tabs: ["Kommentit", "Sisällys", "Vaihtopäiväkirja", "Jaa", "Anna 5 tähteä", "Pullopostia"],
	comment: ["Kommentoi", "Kirjaudu kommentoidaksesi", "Merkkiraja ylittyi (85)"],
	profile: ["Lisää kirjekaveriksi", "Päiväkirjaan"],
	gotop: "Ylös",
	goleft: "Vasemmalle"
};

// feed
_h$["f"] = _h$["f"] || {
	// JS
	refresh: ["Päivitetään", "Vedä päivittääksesi", "Päästä päivittääksesi"],
	signin: ["Kirjaudu", "Kirjaudu käyttääksesi kaikkia ominaisuuksia"],
	no: "Peruuta",
	url: ["Kopioi linkki", "Merkinnän linkki/QR-koodi"],
	publish_ask: ["Miten julkaista", "Napauta päiväkirjassa", "julkaistaksesi merkinnän", "OK", "Oma päiväkirja"],
	report_ask: ["Ilmoitetaanko merkinnästä ”$title”?", "Kyllä, se on asiaton", "Kiitos ilmoituksesta ”$title”, moderaattori tarkistaa sen"],

	// DOMs
	title: "Päiväkirjaseinä (sivu $p)",
	share: "Jaa",
	report: "Ilmoita merkinnästä",
	focus_post: "Näytä seinällä",
	posts: "Lue julkisia merkintöjä",
	publish: "Julkaise",
	gotop: "Ylös",
	back: "Takaisin",
	health: ["Terveystietoa löydät THL:n sivuilta ( • ̀ω•́ )", "//thl.fi"]
};

// img
_h$["I"] = _h$["I"] || {
	title: "Galleria",
	upload: "Lataa kuva",
	empty: ["Et ole vielä ladannut kuvia", "Lisää yksi merkintään nyt"],
	add: "Lisää kuva",
	gotop: "Ylös",
	layout: ["Ruudukko", "Muurattu"]
};

// account
_h$["a"] = _h$["a"] || {
	passkey: [
		"Passkey-tunnisteet",
		"Lisää Passkey",
		"Ei vielä Passkeytä",
		"Mikä on Passkey?",
		"Passkeyllä kirjaudut laitteen Face ID:llä, sormenjäljellä tai näytön lukituksella ilman tunnusta ja salasanaa, suojassa tietojenkalastelulta.<br><br>Passkey tallennetaan laitteeseesi tai salasanojen hallintaan (kuten iCloud-avainnippu tai Googlen salasanojen ylläpito). Hearty Journal tallentaa vain julkisen avaimen, jolla ei voi kirjautua.<br><br>Passkeyn poistaminen ei kirjaa ulos kirjautuneita laitteita. Hearty ID:n vaihdon jälkeen salasanojen hallinta voi näyttää vanhan nimen; se ei vaikuta kirjautumiseen.",
		"Luomisen jälkeen kirjaudut ilman tunnusta ja salasanaa",
		"Nimeä uudelleen",
		"Passkeyn nimi (enintään 20 merkkiä)",
		"Nimessä on oltava 1–20 merkkiä",
		"Poista",
		"Poistetaanko ”$name”?<br>Sillä ei voi enää kirjautua. Kirjautuneet laitteet eivät kirjaudu ulos.<br>Poista se myös salasanojen hallinnasta.",
		"Viimeinen Passkeysi, eikä tilillä ole salasanaa. Sen jälkeen kirjautuminen vain ulkoisella tilillä.",
		"Laite on kirjautunut tällä Passkeyllä ja pysyy kirjautuneena.",
		"Passkey poistettu",
		"Synkronoituu muihin laitteisiin",
		"Vain tässä laitteessa",
		"Ei vielä synkronoitu",
		"Käytössä nyt",
		"Luotu $date",
		"Käytetty viimeksi $date",
		"Ei käytetty",
		"Vahvista antamalla nykyinen salasana",
		"Väärä salasana",
		"Passkey-raja (10) täynnä, poista ensin tarpeeton",
		"Laitteessa tai salasanojen hallinnassa on jo Passkey",
		"Passkey luotu! Voit kirjautua sillä ensi kerralla",
		"Vahvista henkilöllisyytesi olemassa olevalla Passkeyllä",
		"Seuraava",
		"Aikakatkaisu, yritä uudelleen",
		"Liian monta yritystä, yritä 15 minuutin kuluttua"
	],
	// JS
	ok: ["OK", "Kyllä", "Tehdään niin", "Oikein"],
	next: "Seuraava",
	no: "Ei",
	back: "Takaisin",
	upload: "Lataa",
	rotate: "Kierrä",
	retry: "Yritä uudelleen",
	signin: ["Kirjaudu", "Kirjaudu käyttääksesi kaikkia ominaisuuksia"],
	usage: "Kirjoitettu: $num merkintää, yhteensä $chars merkkiä",
	points: "Hearty-pisteet: $p p (katso palkinnot)",
	year: "", // CE
	bday_ask: ["Onko syntymäpäiväsi $bday?", "Syntymäpäivää ei voi muuttaa myöhemmin", "Syntymäpäivä päivitetty"],
	age: "$age v",
	nickname_edited: "Nimimerkiksi asetettu ”$n”",
	pwd_edit: "Vaihda salasana",
	pwd_edited: "Vaihdettu",
	pwd_enter: "Anna tilin uusi salasana",
	pwd_confirm: "Anna uusi salasana uudelleen",
	pwd_invalid: "Salasana: 6–20 merkkiä, yritä uudelleen",
	pwd_mismatch: "Syötteet eivät täsmää, yritä uudelleen",
	pwd_format: "6–20 merkkiä",
	pwd_apply: ["Vaihda", "Vahvista vaihto"],
	pwd_ok: ["Salasana vaihdettu, käytä uutta jatkossa",
				"Älä jaa tiliäsi tai salasanaasi"],
	avatar: ["Valitse kuva (JPG, PNG, GIF, WebP, AVIF, HEIC)", "Tiedosto on $ext, vain JPG, PNG, GIF, WebP, AVIF ja HEIC sallitaan", "Valitse uudelleen", "Profiilikuva päivitetty"],
	avatar_err: [
		"Muotoa tai päätettä ei tueta (tuetaan: JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Kuva on yli 6 Mt, pakkaa se ensin",
		"Kuvaa ei voi lukea tai se on vioittunut",
		"HEIC/HEIF-muunnos epäonnistui, kokeile toista kuvaa"
	],
	email_new: "Vaihda sähköposti",
	email_confirm: "Vaihdetaanko sähköpostiksi ”$email”?",
	email_invalid: "Virheellinen sähköposti",
	email_verify: ["Turvallisuuden vuoksi vahvista ensin sähköposti, jotta voit ", "käyttää kaikkia ominaisuuksia", "Vahvista"],
	email_send: "Lähetetäänkö vahvistusviesti uudelleen?",
	email_sent: ["Vahvistusviesti lähetetty. Avataanko $isp?<br>(Tarkista myös roskaposti ja kampanjat)",
				"Tarkista postilaatikkosi ja roskapostikansio"],
	email_verified: "Sähköposti on jo vahvistettu",
	pin: ["Tuen PIN-koodi: $pin<br><small>(Numero nopeuttaa tunnistamista yhteydenotossa)</small>", "Lataa talteen"],
	font: [
		"Hearty Journalin erikoisfontit",
		"i/fonts_en.png",
		"Käytämme justfontin verkkofontteja sekä kaupallisia ja avoimen lähdekoodin fontteja.",
		"Lisenssit"
	],
	font_change: "Vaihdetaan fonttiin ”$font”…",
	gender_edited: "Sukupuoli päivitetty",
	newsletter_edited: "Tilaus päivitetty",
	lang: "Vaihdetaan kieleksi: $lang",
	timezone_edited: "Aikavyöhykkeeksi asetettu ”$tz”",
	id: "Hearty ID: ",
	id_edit: "Vaihda ID",
	id_public: "ID ja nimimerkki ovat julkisia",
	id_new: "Anna uusi ID",
	id_format: "Vähintään 4 kirjainta/numeroa, voi vaihtaa vain kerran",
	id_invalid: "ID ei täytä vaatimuksia",
	id_same: "Ei voi olla sama kuin nykyinen ID",
	id_taken: "”<b>$id</b>” on varattu, valitse toinen",
	id_edited: "Hearty ID:ksi vaihdettu ”<b>$id</b>”",
	id_signout: "Kirjaudu ulos ja sisään uudella ID:llä",
	dl: "Vie varmuuskopio",
	dl_pc: "Ladataksesi varmuuskopion<br>avaa tietokoneella ”www.hearty.me”",
	dl_pwd: ["Anna Hearty-salasanasi purkaaksesi salauksen:", "Salasana: 6–20 merkkiä", "Pura ja vie", "Aloita varmuuskopiointi", "Viety tekstitiedostoksi Lataukset-kansioon. Säilytä tiedosto huolellisesti"],
	dl_fmt: ["Valitse varmuuskopion muoto", "Tekstitiedosto (.txt)", "Word-asiakirja kuvineen (.docx)", "Seuraava"],
	dl_doc: ["Yhteensä $posts merkintää, $images kuvaa<br>Muunnos kestää muutamasta minuutista kymmeniin minuutteihin", "Aloita vienti", "Muunnetaan: $done / $total kuvaa", "Muunnetaan, odota", "Word-asiakirja tallennettu, säilytä se huolellisesti", "$n kuvaa ei voitu ladata, ne ohitettiin", "Vienti keskeytyi, yritä myöhemmin", "Word-vienti vain Chromessa tai Edgessä tietokoneella; muuten valitse tekstitiedosto", "Viety $date, yhteensä $posts merkintää", "Väärä salasana, yritä uudelleen", "Ei vietäviä merkintöjä", "Vie Word-asiakirjaksi"],
	vip_only: ["", " on VIP-ominaisuus", "Katso VIP-edut", "Myöhemmin"],
	suspend: ["Poistetaanko varmasti? Voit myös säilyttää tilin! Hearty Journal tuo jatkuvasti uusia ominaisuuksia ja tarroja, ehkä haluat joskus palata", "Jos haluat vaihtaa ID:n, <u>napauta tästä</u>", "Poista", "Säilytetään"],
	auth_log: ["Viimeaikaiset kirjautumiset", "$browser, $device", "Paranna turvallisuutta", "//go.hearty.me/hj-sec"],
	redeem: ["Anna koodi", "Lunasta"],
	coupon_ok: ["Koodin ”$coupon” lunastusta haettu",
				"Hyväksynnän jälkeen ”VIP 30 päivän kokeilu” lisätään 3 päivän kuluessa.<br>Katso [Profiilikuva] > [Tilaukseni]"],
	voucher_ok: "Koodi ”$code” lunastettu! Sait $days päivää VIP:tä, voimassa $exp asti",
	voucher_invalid: "Koodi on vanhentunut, loppuunkäytetty tai jo lunastettu",
	voucher_disqualified: "Yksi kokeilukoodi tiliä kohden, ja olet jo lunastanut sen",
	voucher_vvip: [
		"VVIP-etu kanta-asiakkaille",
		"Ennakkomaksetaanko Hearty Journalin vuositilaus 40 % alennuksella?",
		"Maksa"
	],
	voucher_ec: [
		"EC-koodi on <u>Life Shopin alennuskoodi</u>",
		"Ostoksille"
	],

	// DOMs
	title: "Oma tili",
	tab: ["Profiili", "Oma tilaus"],
	headline: ["Päiväkirjan nimi"], // deprecated
	nickname: ["Nimimerkki", "Muokkaa"],
	pincode: "Tuen PIN-koodi",
	bday: "Syntymäpäivä",
	email: ["Lähetä vahvistusviesti", "Lähetä uudelleen", " s kunnes voi lähettää uudelleen"],
	style: ["Ulkoasu", "Muokkaa päiväkirjaa"],
	gender: ["Sukupuoli", "Mies", "Nainen"],
	phone: ["Puhelin", "Vahvista puhelinnumero"],
	pwd: "Salasana",
	pfont: ["Päiväkirjan fontti", "Fontin esikatselu"],
	language: "Kieli",
	timezone: "Aikavyöhyke",
	newsletter: ["Sähköposti-ilmoitukset", "Kirjekaveri-ilmoitukset, uutiskirje"],
	newsletter_shop: ["Life Shopin uutiskirje", "Uutuudet ja tarjoukset"],
	rate: ["Kannusta meitä", "Anna 5 tähteä"],
	misc: "Muut",
	auth: ["Kirjautumishistoria", "Poista tili"],
	chat: "Kysy",
	fonts: [
		"jf Open Huninn", // 0
		"Taipei Sans", // 1
		"jf Open Huninn", // 2
		"jf JinXuan", // 3
		"jf Cream", // 4
		"LXGW WenKai", // 5
		"Yozai Writing", // 6
		"Naikai Writing", // 7
		"Jason Writing A (ei iOS:ssä)", // 8
		"Jason Writing B (ei iOS:ssä)", // 9
		"Jason Writing C (ei iOS:ssä)", // 10
		"Jason Writing D", // 11
		"Jason Writing E", // 12
		"Kurewa Gothic", // 13
		"Nani Writing (ei iOS:ssä)", // 14
		"POP Gothic", // 15
		"Star Love Pencil", // 16
		"Genyo Ming", // 17
		"HuiWen MinCho (ei iOS:ssä)", // 18
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
	title: "Oma tilaus",
	back: "Takaisin",
	redeem: "Lunasta koodi",
	buy: ["Osta Hearty Journal", "Uusi Hearty Journal"],
	plan: ["Oma tilaus", "Tilauksen tai kortin vaihto: viesti tukeen Hearty ID:lläsi", "”VIP-kokeilu” on pieni lahja uusille käyttäjille<br>Sen päätyttyä palaat automaattisesti perusversioon"],
	order: ["Tilaukseni"],
	plan_th: ["Tila", "Tilaus", "Alkaa", "Päättyy", "Hearty Journal "],
	order_th: ["Tila", "Tilausnro", "Tuote", "Summa (TWD)", "Maksutapa", "Kuitti"],
	order_status: ["Odottaa maksua", "Ostettu", "Aktivoitu", "Erääntynyt", "Peruttu"],
	plan_status: ["Käytössä", "Päättynyt"],
	url: ["Jaa linkki | QR-koodi", "Kopioi"],

	// bill
	fail: [
		"Valitettavasti maksu epäonnistui",
		"Yritä uudelleen, tai käytä toista korttia tai maksutapaa",
		"Tarvitsetko apua? Ota yhteyttä"
	],
	fail_info: [
		"Yleinen syy", "Suositus",
		"Väärä kortin numero", "Tarkista kortin numero, turvakoodi ja voimassaolo",
		"Kate ei riitä", "Luottoraja täynnä tai kate ei riitä",
		"Ulkomaan-/verkko-ostot estetty", "Pyydä kortin myöntäjää sallimaan ulkomaan- ja verkko-ostot",
		"Pankki hylkäsi maksun", "Pankki hylkäsi maksun riskinä. Soita kortin myöntäjälle ja vahvista maksu"
	],
	fail_btn: [
		"Yritä uudelleen",
		"Ota yhteyttä tukeen",
	],


	// thankyou
	thx: [
		"Kiitos ostoksestasi, VIP on nyt käytössä",
		"Kysyttävää? Kerro meille ヾ(๑❛ᴗ❛๑)ﾉ"
	],
	thx_th: [
		"Tilaus",
		"Voimassaolo",
		"päivää",
		"Tilausnro",
		"Aika",
		"Summa",
		"Maksutapa",
		"Kuitti",
		"Tilauksen tai kortin vaihto: viesti tukeen Hearty ID:lläsi"
	],
	thx_inv: [
		"Taiwanilaisen kuitin myöntää Hearty Creative Inc.",
		"Näytä kuitti"
	],
	thx_btn: [
		"Ensiostajan kysely",
		"Kuvakaappaus",
		"Takaisin päiväkirjaan"
	]
};

// phone
_h$["pv"] = _h$["pv"] || {
	// JS
	ok: "OK",
	no: "Peruuta",
	signin: ["Kirjaudu uudelleen", "Sinut kirjattiin ulos toimettomuuden vuoksi"],
	format: ["Numero on liian lyhyt", "Virheellinen numero", "Liian monta pyyntöä, yritä myöhemmin"],
	verify1: ["Vahvista", "Vahvistuskoodi: ", "<br><small><b>Firebase-tekstiviesti</b> lähetetty, odota 45 sekuntia</small>", "$no vahvistettu"],
	verify2: ["Etkö saanut tekstiviestiä?", "Lähetä meille tekstiviesti manuaalista vahvistusta varten", "Lähetä", "Vahvistamme 72 tunnin kuluessa viestin saapumisesta", "[Puhelimen vahvistus] Hearty ID: "],
	verify3: ["Etkö saanut tekstiviestiä?", "Kerro Hearty ID ja puhelinnumero manuaalista vahvistusta varten", "Lähetä viesti Facebook-sivulle"],
	code: ["Tekstiviestikoodi", "Syötä uudelleen", "Koodissa on oltava 6 numeroa", "Väärä koodi", "Koodi on vanhentunut, vahvista uudelleen"],
	fail: "Tekstiviestivahvistuksen lataus epäonnistui<br>Päivitä sivu",

	// DOMs
	title: "Puhelinnumeron vahvistus",
	back: "Oma tili",
	verify: ["Puhelinnumeron vahvistus", "Puhelinnumero", "Lähetä koodi", "Syötä koodi", "Etkö vieläkään saanut viestiä?", "Lähetä uudelleen", "Lähetä uudelleen 30 s kuluttua"]
};

// email
_h$["em"] = _h$["em"] || {
	title: [
		"Peru tilaus: jäsenuutiskirje",
		"Peru tilaus: Life Shopin uutiskirje"
	],
	unsubscribe: "Peru tilaus Unsubscribe",
	ask: [
		"Et enää saa sivuston viestejä etkä kirjekaveri-ilmoituksia",
		"Et enää saa tietoa uutuuksista ja tarjouksista",
		"Kyllä, peru tilaus"
	],
	ok: "OK",
	back: "Takaisin",
	unsubscribed: "Osoitteen ”$email” tilaus peruttu, muutos tulee voimaan huomenna",
	remarks: [
		"Saat silti tärkeät tili-ilmoitukset (salasanan palautus, ehtojen muutokset jne.).",
		"Jos et halua mitään sähköposteja, poista Hearty Journal -tilisi"
	]
};

// points
_h$["pt"] = _h$["pt"] || {
	// JS
	ok: "Vahvista",
	no: "Peruuta",
	back: "Takaisin",
	close: "Sulje",
	signin: [
		"Kirjaudu",
		"Kirjaudu ensin Hearty Journaliin"
	],
	redeem: [
		"Lunastetaan ”$pkg” $p pisteellä!",
		"Painamalla ”Vahvista” hyväksyt ehdot. Muista voimassaoloaika",
		"Hearty-pisteesi eivät riitä palkintoon ”$pkg”",
		"Tätä palkintoa ei voi vielä lunastaa"
	],
	ec_ok: [
		"Life Shopin NT$$amt alennuskoodisi: <b>$code</b>",
		"Löytyy kohdasta ”Lunastushistoria”. Käytä ennen $exp"
	],
	vip_ok: [
		"Lunastettu! Sait $days päivää VIP:tä, voimassa $exp asti",
		"Katso"
	],

	// DOMs
	title: "Hearty-pisteiden palkinnot",
	points: ["Hearty-pisteeni", "p"],
	coupons: [
		"Lunastushistoria",
		"Oma lunastushistoria",
		"Palkinto",
		"Koodi",
		"Lunastettu",
		"Päättyy",
		"Käytetty",
		"Ei vielä lunastuksia"
	],
	label: [
		"Valikoitu",
		"Suosittu"
	],
	use: [
		"Käytä kaupassa"
	],
	agree: ["Lue ja hyväksy ehdot"],
	get: [
		"Miten saan Hearty-pisteitä?",
		"Saat pisteitä päivittäisestä kirjauksesta: napauta päiväkirjan oikean yläkulman kelloa",
		"Kirjaudu nyt"
	],

	// Plans
	pkg_vip14: [
		"Hearty Journal VIP 14 päivää",
		"14 pv"
	],
	pkg_vip30: [
		"Hearty Journal VIP 30 päivää",
		"30 pv"
	],
	pkg_ec100: [
		"Life Shopin digituotteiden alennuskoodi",
		"NT$ 100"
	]
};
