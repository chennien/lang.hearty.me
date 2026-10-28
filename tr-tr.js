/* Hearty Journal Language Pack: Ver 15 */

var _h$ = {};

_h$["lang"] = "tr-tr";

// common.head
_h$["h"] = _h$["h"] || {
	ok: "Tamam",
	qr: "QRcode_Hearty",
	copy: "Kopyalandı",
	err: "Sunucu şu anda yoğun, lütfen daha sonra tekrar dene. Sorun devam ederse lütfen bize bildir.",
	satisfy: ["Bizi ister sev ister daha iyisini yapabileceğimizi düşün, fikrini bilmek istiyoruz!", "Bayıldım!", "Geliştirilmeli"],
	rate: ["Yorumun, küçük ekibimizi Hearty Journal'ı daha da iyi hale getirmek için motive ediyor.", "Bize 5 yıldız verir misin?", "Değerlendirmen için teşekkürler.", "༼ つ ◕_◕ ༽つ"],
	notify: ["Bildirimler açılsın mı?", "Kişiselleştirilmiş bildirimler almak ister misin? (ör. mektup arkadaşı mesajları)", "Evet", "Şimdi değil"],
	downloading: "İndirme başlıyor"
};

// menu
_h$["m"] = _h$["m"] || {
	url: [
		"//go.hearty.me/hj-faq",
		"//go.hearty.me/hjse"
	],

	// JS
	no: "Hayır",
	back: "Geri",
	nav: ["Menü", "Hearty Journal", "Günlüğüm"],
	signout: ["Çıkış yap", "Şimdi çıkış yapmak istiyor musun?"],

	// DOMs
	avatar: [
		"Hesabım", "Giriş yap", "VIP Premium, Hearty Journal"
	],
	menu: [
		"Günün Ayeti", "Alice'in Ziyaretçi Defteri", "Gönderi Akışı", "Hearty Blog", "Günlüğüm", "Galeri", "Life Shop", "Yükselt", "Rehberler", "Hakkında", "Çıkış yap", "Windows için", "macOS için", "Windows/macOS Uygulaması", "Mobil Uygulama", "Dil 語言", "Bize 5 yıldız ver", "🐞 Hata Ayıklama"
	]
};

// index
_h$["i"] = _h$["i"] || {
	url: [
		"//go.hearty.me/hj-faq",
		"//go.hearty.me/hj-data",
		"//go.hearty.me/hj-terms",
		"//go.hearty.me/hj-privacy",
		"//go.hearty.me/hj-press",
		"//go.hearty.me/misstw"
	],

	// JS
	ok: ["Tamam"],
	no: ["Hayır", "İptal"],
	go: "Hadi başlayalım.",
	back: "Geri",
	copy: ["Kopyala", "Kopyalandı: "],
	email: [
		"E-posta adresi doğrulandı.", "E-posta adresi zaten doğrulanmış.", "Bağlantı geçersiz.", "Bağlantı bozuk."
	],
	reset: [
		"Şifreyi sıfırla",
		"Otomatik giriş yapılıyor",
		"Bağlantı geçersiz.",
		"Hearty ID geçersiz.",
		"Sıfırlama bağlantısı gönderildi. Lütfen e-posta gelen kutunu kontrol et.",
		"Sıfırlama bağlantısı ***@$domain adresine gönderildi. Lütfen gelen kutunu kontrol et.",
		"E-postanı kontrol etmek için $url açılsın mı?",
		"Bu Hearty ID mevcut değil."
	],
	captcha: [
		"Güvenlik doğrulaması başarısız oldu. Lütfen sayfayı yenileyip tekrar dene.",
		"Lütfen aşağıdaki güvenlik doğrulamasını tamamla."
	],
	ref: [
		"🎁 $user seni davet etti."
	],
	cookie: [
		"Giriş yapmak için lütfen tarayıcı çerezlerini etkinleştir.", "Nasıl?"
	],
	browser: [
		"Tarayıcın bu site için çok eski.", "Internet Explorer artık desteklenmiyor."
	],
	signin: [
		"Giriş yap",
		"$user ile güvenli giriş yapılıyor",
		"Hearty ID geçersiz",
		"$user mevcut değil",
		"$user kayıtlı değil",
		"$user silinmiş veya askıya alınmış",
		"$user politika ihlali nedeniyle askıya alınmış veya silinmesi talep edilmiş",
		"Yanlış şifre",
		"Şifre en az 6 karakter olmalı",
		"Hearty ID ile “$client” hizmetine giriş yap"
	],
	signup: [
		"Hearty ID yalnızca harf ve rakamlardan oluşmalı",
		"Hearty ID 4 - 20 karakter uzunluğunda olmalı",
		"E-posta adresi geçersiz",
		"Lütfen gerçek bir e-posta adresi gir",
		"Şifre 6 - 20 karakter uzunluğunda olmalı",
		"Şifreler eşleşmedi",
		"⚠ Yahoo! e-posta hizmetinin kullanılması önerilmez.\nYine de kullanmak istiyor musun?",
		"E-posta veya şifre geçersiz.",

		"$user oluşturuldu! Lütfen e-posta gelen kutunu kontrol et.",
		"$user oluşturuldu!",
		"$user zaten oluşturulmuş. Lütfen giriş yap.",
		"Bu e-posta adresi zaten kayıtlı. Lütfen giriş yap.",
		"Bu ID alınmış. Lütfen başka bir tane seç.",
		"E-posta adresi geçersiz.",
		"Geçici e-posta adresleri kabul edilmez.",
		"Üzgünüz, lütfen daha sonra tekrar dene."
	],
	box: [
		"Kaydol",
		"Giriş Yap",
		"Şifreyi Sıfırla",
		"Hesap Oluştur",
		"Hearty Journal'a giriş yap",
		"Hearty ID'yi Bul | Şifreyi Sıfırla",
		"💡 ID'ni seç ( 4 ~ 20 karakter)",
		"💡 Hearty ID / Hesap E-postası"
	],
	timer: "Yeniden gönder ($min:$sec)",
	chat: [
		"Destek",
		"Destek almak için lütfen önce giriş yap.",
		"Bize e-postayla ulaş",
		"Destek e-posta adresimiz: "
	],
	id_notice: [
		"Tüm verilerin şifrelenecek ve buluta senkronize edilecek.",
		"Hearty ID'n, bilgisayarların ve telefonların dahil tüm cihazlarından özel verilerine erişmenin tek anahtarıdır."
	],
	song: ["Harmony - 溫度日記", "Hearty Journal Tema Şarkısı"],
	404: "Hay aksi, bu sayfa mevcut değil.",

	// DOMs
	title: ["Hearty Journal 溫度日記", "Değerli anılarını sakla"],
	topbar: [
		"Kaydol / Giriş Yap", "Windows Uygulaması", "macOS Uygulaması"
	],
	slogan: [
		"Hearty Journal", "<br>değerli anılarını sakla", ", ",
		"Apple Editörlerin Seçimi | 300.000+ Mutlu Kullanıcı | 4,9 Yıldız Puanı", "Bağlantın TLS 1.3 ile güvenli ve şifrelidir."
	],
	scroll: "Aşağı kaydır",
	preview: ["Önizleme", "Kapat"],
	feature: [
		"Her zaman yanında", "Düşüncelerini, duygularını, fikirlerini ve özel anlarını güvenle kaydet.",
		"Güzel arayüz", "Güzel temalar, birbirinden sevimli çıkartmalar ve şık yazı tipleri",
		"Sevdiklerinle paylaş", "Arkadaşlar, can dostlar, aile ve sevgililer için tasarlandı",
		"Gizlilik Odaklı", "Günlüklerini gizli ve güvende tut"
	],
	testimonial: [
		"Hearty Journal'daki 100.000+ mutlu kullanıcıya katıl",
		"Hearty Journal, zihnin ve ruhun için bir sığınak.", "Haitaibear, Yazar ve Psikolog",
		"Kendimle baş başa kalabileceğim güzel bir yer.", "Cindy Liu",
		"Hearty hem şık hem sevimli, üstelik pek çok kullanışlı özelliği var.", "Wu Chi",
		"Hearty depresyonumu atlatmama yardım etti. Artık eskisinden daha sağlıklıyım.", "Yan-Xuan",
		"Hem dizüstümde hem cebimde kullanması çok kolay.", "Xiao-Jun"
	],
	press: [
		"Medya",
		"Bnext Media", "Free Group", "Aotter girls", "Womany", "Sheaspire", "SEinsights", "Taiwan Startup Stadium", "Innosquare, New Taipei", "UDN", "Vita News"
	],
	action: [
		"Daha sağlıklı bir zihne hazır mısın?", "Günlük Yazmaya Başla"
	],
	rate: "Bize 5 yıldız ver",
	footer: [
		"Dil 語言",
		"Windows için",
		"macOS için",
		"Özellikler",
		"Kullanıcı Yorumları",
		"İş Birlikleri",
		"Basın Kiti",
		"Rehberler",
		"Veri Koruma",
		"Hizmet Şartları",
		"Gizlilik Politikası",
		"Güvenlik Sertifikası",
		"Tema Şarkısı",
		"Nien, Kurucu",
		"Jiayi, Kurucu Ortak",
		"Ticari Marka",
		"Hakkımızda"
	],
	cookies: ["Siteyi kullanmaya devam ederek çerez kullanımımızı ve gizlilik politikamızı kabul etmiş olursun.", "Tamam"],
	copyright: "2016-"+new Date().getFullYear().toString()+" Hearty Creative Inc. ve iştirakleri",
	isp: "Cloudways üzerinde barındırılmaktadır",
	auth: [
		"Ücretsiz kaydol",
		"Zaten hesabın var mı?",
		"ID/Şifremi unuttum",
		"Hemen giriş yap",
		"Hearty ID", "💡 Hearty ID veya hesap e-postası",
		"Şifre", "🔑 6 ~ 20 karakter",
		"Şifre tekrar", "🔑 Şifreyi tekrar gir", "Şifreleri göster",
		"Beni hatırla", "Kaydol'a tıklayarak Hizmet Şartları'nı ve Gizlilik Politikası'nı kabul ediyorum."
	],
	lang: "Dil değiştiriliyor: $lang"
};

// editor
_h$["e"] = _h$["e"] || {
	// JS
	url: [
		"//go.hearty.me/hj-faq",
		"//go.hearty.me/hj-data",
		"//bitly.com/3E0ZJ7Q"
	],
	ok: ["Tamam", "Anladım", "Elbette"],
	no: ["Hayır", "İptal"],
	retry: "Tekrar dene",
	back: "Geri",
	gotop: "Yukarı",
	signin: ["Giriş yap", "Bu özelliği kullanmak için ", "giriş yap"],
	signout: "Çıkış yap",
	name: ["Takma adım", "Merhaba, takma adın ne?<br>Bu ad herkese açık kimliğin olacak.", "Selam $name.", "Günlük yazman için her gün hatırlatma ister misin?", "Evet, aç"],
	get_stickers: ["Yaşasın! Çıkartma paketini kazandın!", "Hediyeyi aç"],
	welcome: ["Merhaba $name", "Günlüğüme git", "Giriş yapmak için tıkla"],
	year: "",
	maintenance: ["Planlı bakım: ", "Yaklaşık 1 saatlik kesinti bekleniyor"],
	update: ["Hearty Journal'ın yeni sürümü yayında.", "Şimdi güncelle", "Yarın hatırlat"],
	search: ["Gönderilerde ara", "aranacak kelime", "Ara", "Sonuç yok"],
	bookmark: [
		"1 favori gönderi",
		"$no favori gönderi",
		"Favori",
		"Başlıksız"
	],
	catalog: [
		"1 gönderi",
		"$no gönderi",
		"Yeni gönderi",
		"Gönderi yok",
		"Mektup arkadaşından gelen gönderi yok",
		"Bu ilk ya da son gönderi.",
		"Gösterilecek gönderi yok",
		"Önceki",
		"Sonraki"
	],
	sticker: ["Yakınlaştır", "Döndür", "Yapıştır", "Kaldırıldı", "Bir gönderide daha fazla çıkartma mı istiyorsun?", "VIP Premium'a yükselt"],
	verify_required: [
		"Lütfen profilini güncelle ve $act için $item doğrula.",
		"telefon numaranı", "bilgilere erişmek",
		"gönderinin görünürlüğünü değiştirmek", "gönderiyi herkese açık akışta yayınlamak", "mektup arkadaşı eklemek", "gönderini bir mektup arkadaşıyla paylaşmak"
	],
	privacy: [
		"Gönderi artık herkese açık", "Gönderi artık gizli",
		'Gönderin, <a target="_blank" href="//go.hearty.me/publish"><u>herkese açık gönderi kurallarına</u></a> uygunluğu için inceleniyor. ',
		"Onaylandıktan sonra herkese açık olarak paylaşılacak.",
		"Onaylandıktan sonra herkese açık olarak yayınlanacak.",
		"Tekrar göndermekten kaçın ve onayı bekle. (;´ㅁ`)-3"
	],
	publish: [
		"Akış gönderileri en az 100 karakter olmalı. Lütfen biraz daha yaz.",
		"Tamam, bir fikrim var!",
		"“$title” herkese açık akışta yayınlansın mı?",
		"Gönderi herkese açık yapılıp akışta yayınlansın mı?",
		"Yayınla",
		"“$title” yayınlandı.",
		"Göz at",
		"Geri dön",
		'Lütfen <a target="_blank" href="//go.hearty.me/publish"><u>[herkese açık gönderi kurallarına]</u></a> uy. <small>Ayrıca kişisel bilgilerin paylaşılmasına izin verilmez.</small>',
		"“$title” gönderisi akıştan kaldırılsın mı?",
		"Evet",
		"Akış gönderisi kaldırıldı",
		"Günde yalnızca bir akış gönderisi paylaşabilirsin."
	],
	penpal_add: [
		"Yeni mektup arkadaşı davet et. Onun Hearty ID'sini (veya hesap e-postasını) gir: ",
		"Lite sürümde en fazla 2 mektup arkadaşı olabilir; VIP Premium ile sınırsız.",
		"Hearty ID veya hesap e-postası",
		"davet et",
		"Daha fazla mektup arkadaşı davet etmek için lütfen planını yükselt.",
		"“<b>$name</b>” (Hearty ID: $user) mektup arkadaşın olmaya davet edilsin mi?",
		"$name artık mektup arkadaşın",
		"“$user” zaten mektup arkadaşın",
		"“$user” mevcut değil",
		"Hay aksi, “$user” seni engellemiş.",
		"Hay aksi, kendini davet edemezsin."
	],
	penpal_delete: [
		"Seçilen mektup arkadaşı listenden kaldırılacak ve birbirinizi tekrar eklemeniz engellenecek. Aynı anda, daha önce birbirinizle paylaştığınız gönderilerin paylaşımı da anında kaldırılacak. (geri alınamaz)",
		"Silinecek mektup arkadaşını seç",
		"- Bir kişi seç -",
		"“$user” listenden silinsin mi?",
		"Evet",
		"Tamamlandı, “$user” silindi."
	],
	penpal_send: [
		"$add ile paylaşıldı",
		"Ayarlar güncellendi"
	],
	pin: [
		"Destek PIN'i: ", "Destek PIN'i, destek ekibiyle iletişime geçtiğinde kimliğini doğrulamak için kullanılan bir güvenlik önlemidir."
	],
	chat: [
		"Hearty ID: "
	],
	membership: [
		"Lite", "VIP Premium (Ücretsiz deneme)", "VIP Premium"
	],
	feedback: [
		"Talep No. #$no",
		"Lütfen adını yaz.",
		"E-posta geçersiz.",
		"Yazdığın metin çok kısa.",
		", talep oluşturduğun için teşekkürler. 24 iş saati içinde e-postayla yanıt alacaksın. E-postayı gelen kutunda göremezsen lütfen gereksiz/spam klasörünü kontrol et.",
		"Tamam",
		"VIP Premium planı hakkında daha fazla bilgi",
		"Hay aksi, lütfen daha sonra tekrar dene."
	],
	video: [
		"YouTube Video Bağlantısı",
		"veya yüklemek için buraya tıkla",
		"Ayarla",
		"Çalma listesine ekle",
		"Video eklendi",
		"YouTube video bağlantısı geçersiz",
		"Video gizli, silinmiş veya yerleştirmeye kapalı olabilir",
		"Verilen bağlantıyı kontrol et",
		"“$title” kaldırılsın mı?",
		"Kaldır",
		"Ayarla (temizlemek için boş bırak)", // 預留未使用
		"https://youtu.be/vYFnZdUiUyg (temizlemek için boş bırak)"
	],
	yt: [
		"Çalma Listesi",
		"Sırala",
		"Kaldır",
		"Işıkları kapat",
		"Sevdiğin bir şarkıyı eklemek için ➕ simgesine tıkla",
		"Yazarken en sevdiğin şarkıları arka planda dinle.",
		"En sevdiğim şarkılar",
		"Oynat"
	],
	gps: [
		"Gönderiye hava durumu bilgisi eklensin mi?",
		'⛅ Lütfen konum isteğine İZİN VER ve birkaç saniye bekle.',
		"Hava durumu bilgisi eklendi",
		"GPS sinyali yok",
		"Daha fazla bilgi için lütfen adres çubuğundaki uyarıyı kontrol et."
	],
	chars_max: [
		"Bu gönderi $chars karakterle 10.000 karakter sınırını (semboller dahil) aşıyor.",
		"Bu bildirimi gerçekten gören biri oldu mu acaba?"
	],
	chars: [
		"$chars karakter yazdın; Lite sürümün kotasını ($limit karakter) aştın.",
		"VIP Premium yükseltme fırsatları",
		"Daha sonra hatırlat"
	],
	leave: "Kaydedilmemiş değişikliklerin olabilir.",
	date: ["Gönderi Tarihi", "Değiştirilme tarihi: ", "Gönderiler tarihe göre yeniden eskiye sıralanır."],
	subject: ["Yeni Gönderi, $date", "Gönderi Başlığı", "Yeni başlık: “$title”", "Güncelle"],
	archive: [
		"“$title” kaldırılsın mı? (geri alınamaz)", "Kaldır ve unut", "“$title” kaldırıldı"
	],
	unsafe: "Bu bağlantı Google Safe Browsing tarafından zararlı olarak işaretlendi.",
	offline: "Bağlantı Kararsız",
	lock: [
		"İki aşamalı doğrulama olarak şifre kilidi etkinleştirilsin mi?",
		"Etkinleştir",
		"Şifre kilidini devre dışı bırak",
		"Kilit devre dışı bırakıldı",
		"İkisini de unuttum.",
		"Hem <u>kilit şifresini</u> hem de <u>hesap şifreni</u> unuttuysan lütfen çıkış yap ve hesap şifreni sıfırla. Sıfırlama tamamlandığında şifre kilidi devre dışı bırakılacak."
	],
	pincode: [
		"Lütfen kilit şifreni gir",
		"Kilit şifreni onayla",
		"Kilit şifresini veya hesap şifreni gir",
		"Yanlış Şifre",
		"Şifreler eşleşmedi",
		"Lütfen PIN kodunu tekrar gir",
		"Kilit şifresi yalnızca rakamlardan oluşmalı",
		"Kilit etkinleştirildi. 2FA kilit şifren: $pin."
	],
	screenshot: "Görsel oluşturuluyor. İndirmenin başlaması 10 saniyeyi bulabilir.",
	pc: [
		"Masaüstü uygulamasını edin", 'PC/Mac\'inde “www.hearty.me” adresini ziyaret et <i class="fal fa-globe"></i>',
		"Masaüstü Uygulamasının Avantajları", "Büyük ekranda rahat okuma", "Fiziksel klavyeyle rahat yazma", "Gönderiler tüm cihazlarında senkronize", "Dene"
	],
	picture: [
		"Görsel yükle",
		"Bir görsel seç (JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Yükle",
		"Yeniden seç",
		"Her gönderiye en fazla 10 fotoğraf yükleyebilirsin.",
		"$ext seçildi, ancak yalnızca JPG, PNG, GIF, WebP, AVIF ve HEIC desteklenir",
		"Görsel yüklendi",
		"İndirme birazdan başlayacak",
		"Kaydedilen görseli görmek için İndirilenler klasörüne git"
	],
	picture_err: [
		"Desteklenmeyen görsel biçimi veya hatalı dosya uzantısı (yalnızca: JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Görsel dosyası 6MB'ı aşıyor; lütfen yüklemeden önce sıkıştır",
		"Görsel dosyası okunamıyor veya bozuk",
		"HEIC/HEIF dönüştürme başarısız oldu. Lütfen başka bir görsel dene."
	],
	picture_remove: [
		"Görsel kaldırılsın mı? (geri alınamaz)", "Kaldır", "Görsel kaldırıldı"
	],
	file: "Hearty_Journal",
	trial: [
		"Yeni gelenlere hediyemiz olarak 30 günlük ücretsiz Hearty VIP Premium denemen başladı. Deneme süresince tüm özelliklerin keyfini çıkarabilirsin.",
		"Endişelenme. $exp tarihinden sonra senden ücret ALINMAYACAK ve ücretsiz Lite sürüme geçeceksin. Tüm gönderilerin de günlüğünde kalmaya devam edecek. ( ´･ヮ･) ♡",
		"Daha fazla bilgi",
		"Günlük yazmaya başla"
	],
	purchased: [
		"VIP Premium planın hazır!",
		"3 dakikan varsa ve görüşlerini paylaşmak istersen, seni dinlemeyi çok isteriz.",
		"İlk anketinde 7 gün ek Premium planı ücretsiz kazanacaksın!",
		"Ankete katıl",
		"Şimdi değil (veya daha önce katıldım)"
	],
	n_verify_email: [
		"Bazı özelliklerin kilidini açmak için $item doğrula",
		"Yanıt alabilmek için e-posta doğrulaması gerekiyor."
	],
	n_verify_phone: "Hesap güvenliğini artırmak için telefon numaranı doğrula",
	n_vip_prefix: "VIP planın",
	n_char_limit_exceed: "$chars karakter yazdın ve Lite sürümün metin kotasına ulaştın.",
	n_daily_checkin: [
		"Puanın seni bekliyor — hemen yoklama yap!",
		"Bugün yoklama yaptın."
	],
	checkin: [
		"Yoklama",
		"Hearty Puanlarım: ", "P",
		"Günlük yoklama ödülü: 1P",
		"1P kazandın. Şu anda $pP puanın var.",
		"Bugün zaten yoklama yaptın.",
		"Yarın tekrar gel.",
		"Hearty Puan, kullanıcıların puan kazanıp harcayabildiği bir ödül programıdır. Ürün seçenekleri ileride duyurulacaktır."
	],
	reward: [
		"Ödül planlarını gör"
	],
	pd: [
		"Regl Takvimi",
		"Sonraki: ",
		"Ortalama Döngü: ",
		"gün",
		"Başlangıç",
		"Bitiş",
		"Döngü",
		"Kayıt ekle",

		"Bugün",
		"Kaldır",
		"Kayıt kaldırılsın mı?",
		"$d. gün", // Eng: $d$th
		"Sonraki: $d gün sonra"
	],

	// customize my journal
	headline: [
		"Başlık",
		"Günlüğün için yeni başlık gir",
		"Kaydet",
		"Yeni başlık: “$headline”",
		"boş bırakılabilir"
	],
	style: [
		"Günlüğümü Özelleştir",
		"Varsayılana dön",
		"İlhama mı ihtiyacın var?",
		"//en.faq.hearty.me/tutorial/styles"
	],
	cover: [
		"Kapak Görseli",
		"Kapak görseli yükle",
		"En iyi oran: 1.9:1",
		"Onayla", // crop
		"İptal",
		"Görsel biçimi desteklenmiyor: $ext .",
		"Kapak görseli yüklendi",
		"Kapak görseli sıfırlandı"
	],
	bg: [
		"Arka Plan Görseli",
		"Arka plan görseli yükle",
		"Görsel biçimi desteklenmiyor: $ext .",
		"Arka plan görseli güncellendi",
		"Arka plan görseli sıfırlandı"
	],
	color: [
		"Bir Renk Seç",
		"Renk güncellendi"
	],

	// DOMs
	title: "Günlüğüm",
	header: [
		"Günlükler", "Bildirimlerim", "Çıkartmalar", "Fiyatlandırma", "Yardım Merkezi", "Bitti"
	],
	notification: [
		"Okunmamış bildirim yok",
		"Masaüstü Uygulaması",
		"Yardım Merkezi",
		"Yenile",
		"Hata Ayıklama Modu",
		"VIP Premium özelliklerini edin"
	],
	link: [
		"Harici Bir Bağlantıya Gidiliyor",
		"Google Safe Browsing ile tarandı",
		"Git"
	],
	share: [
		"Gönderi gizliliği", "Bağlantı", "Gizli", "Şifre koruması", "Herkese açık", "Akışta yayınla", "Özel veya gizli bilgi içeren gönderilerin herkese açık yapılmasına izin verilmez."
	],
	penpal: [
		"Mektup Arkadaşı", "Mektup arkadaşı davet et", "Mektup arkadaşını sil", "Davet edilmiş mektup arkadaşı yok", "Şununla paylaş: "
	],
	qa: [
		"Yardım Merkezi", "Genel ve Ürün Özellikleri", "Hesap ve Faturalandırma", "Veri Güvenliği ve Gizlilik", "Ağ Testi", "Hata Bildir ve Talep Oluştur", "Durum Güncellemesi", "Tüm Sistemler Çalışıyor"
	],
	cs: [
		"Talep Oluştur", "Özelliklerle ilgili sorular için buraya tıkla.", "Ürün Geri Bildirimi, Hata Bildirimi veya Bir Sarılma",
		"Yakında e-postayla yanıt alacaksın.", "Gönder", "Destek PIN'im: ",
		"Beta özellikleri etkin"
	],
	csform: ["Ad", "VIP Premium", "Lite", "Ek"],
	gift: [
		"Çıkartmalarını al", "Hediye kutusunu aç", "50 özel günlük çıkartması"
	],
	prologue: "Bugün günün nasıl geçti?",
	pwd: "Şifre Koruması",
	warn: [
		"Planlı Bakım", "Yavaş Bağlantı", "Bağlantı Kararsız", "Düşük Pil"
	],
	tool: [
		"Kaydet", "Yeni gönderi", "Kaldır", "Paylaş", "Görsel olarak kaydet", "Önceki gönderi", "Sonraki gönderi", "Tam ekran", "Kitabı aç", "Sayfayı çevir"
	],
	rmenu: [
		"Yardım Merkezi", "Hakkında", "Tam ekran", "繁/简", "Yazı Boyutunu Büyüt", "Yazı Boyutunu Küçült", "Sayfayı çevir", "Dikey Okuma Modu"
	],
	image: [
		"Görsel", "Döndür", "Filtre uygula", "İndir", "Kaldır"
	],
	tab: [
		"Benim", "Mektup arkadaşımın",
		"🔍 Ara", "🔖 Favoriler", "🎧 Müzik Listesi", "🌙 Regl Takvimi", "🔒 Şifre Kilidi",
		"Yardım Merkezi", "Dokunma Hareketleri", "Çıkartmalar için Dokunma Hareketleri"
	],
	book: [
		"Hakkında", "Telaşlı bir çağda Hearty Journal, sıcak ve huzurlu bir sığınak sunuyor. Burada insanlar yorgunluklarından sıyrılıyor, dile getiremedikleri korkularını itiraf ediyor ve en içten hallerini yeniden keşfediyor. Gökyüzü her zaman mavi olmayabilir; yine de kararlı ve nazik kalmaya devam ediyoruz."
	],
	promo: ["[Özel Teklif] 3 aylık VIP Premium yalnızca NT$99"],
	403: "Gizli gönderiyi okumak için lütfen giriş yap. 🔒",
	404: "Hay aksi, gönderi bağlantısı hatalı olabilir.",
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
	stickers: ["Tüm çıkartmalar", // Start with 1
		"Yazılar", "Hava Durumu", "Ruh Hali", "Yaşam", "Giyim", "Günlük Eşyalar", "Yiyecek", "Seyahat ve Manzaralar", "Mevsimler ve Bayramlar", "Bitkiler", "Hayvanlar", "Sevimli Karakterler", "Fantastik"
	]
};

// pricing
_h$["p"] = _h$["p"] || {
	url: [
		"//go.hearty.me/why-VIP",
		"//go.hearty.me/hj-terms",
		"//go.hearty.me/hj-privacy"
	],
	lite: ["Lite", "Ücretsiz"],
	vip: ["Hearty VIP Premium", "VIP Premium", "(Ücretsiz Deneme)"],
	feat_lite: [
		"Gizlilik Odaklı, Reklamsız",
		"Metin (Kota: 5.785 karakter)",
		"90 Çıkartma ve 20 Şık Yazı Tipi",
		"Yerel Hava Durumu, Günlük Hatırlatıcı",
		"Mektup Arkadaşlarınla Paylaş (En fazla 2 kişi)",
		"2FA Şifre Kilidi, Müzik Listesi ve Regl Takvimi",
		"iOS, Android, Windows ve macOS'ta çalışır",
		"Amazon Web Services Destekli Otomatik Bulut Senkronizasyonu",
		"TLS 1.3 ile Şifreli Bağlantı",
		"Tayvan'da ♥ ile yapıldı",
	],
	feat_vip: [
		"Lite sürümün tüm özelliklerine ek olarak: ",
		"Sınırsız Kelime",
		"Görsel Ekleme (Gönderi başına en fazla 10)",
		"15 Fotoğraf Efektli Görsel Galerisi",
		"1.300+ Çıkartma (düzenli olarak güncellenir)",
		"En Sevdiğin YouTube Videolarını Ekle",
		"Günlük Kapağını ve Arka Planını Özelleştir",
		"Günlüğü Yeniden Adlandır ve Gönderi Tarihlerini Düzenle",
		"Kolay Arama",
		"TXT veya Görsel Olarak Dışa Aktar"
	],
	remark: [
		"Neden VIP Premium'a yükseltmeli?",
		"[İlk Alışveriş Kampanyası] 3 aylık VIP Premium yalnızca NT$99",
		"aylık faturalandırılır, istediğin zaman bize ulaşarak iptal edebilirsin",
		"Yeni müşterilere 30 gün para iade garantisi",
		"Premium Özellikler"
	],
	act: [
		"Ücretsiz Kaydol", "Ücretsiz Denemeyi Başlat (30 gün)", "Yükseltme Fırsatları", "Hemen Yenile", "Yükseltmek için Giriş Yap"
	],
	deposit: ["Ön Ödemeli", "Hemen satın al", "Ödeme yöntemleri: Kredi kartı, Google Pay, Alipay, Tayvan ATM"],
	subscription: ["Aylık Plan", "Hemen Abone Ol", "(Kredi Kartı Teklifi)", "İlk alışverişte 3 ay yalnızca NT$99", "Ardından aylık NT$99 ile yenilenir", "Kredi kartı kabul edilir"],
	selected: ["Seçili", "En İyi"],
	currency: ["Güncel döviz kuruna göre, "],
	term: [
		"3 ay", "6 ay", "1 yıl"
	],
	unit: [
		"Aylık", "Ay"
	],
	subtotal: "Ara toplam: NT$",
	powerby: "Altyapı:",
	redeem: "Hediyeni kullan",

	due: "Aboneliğim",
	due_active: ["Aktif Abonelik"],
	due_date: ["Bitiş tarihi: ", "", "ardından Lite sürüme geçeceksin"],
	due_days: ["Bitişe kalan: ", " gün", "ardından Lite sürüme geçeceksin"],
	due_tomorrow: ["Yarın sona eriyor", "ardından Lite sürüme geçeceksin"],
	due_today: ["Bugün sona eriyor", "ardından Lite sürüme geçeceksin"],
	iap_ios: [
		"Aylık otomatik yenileme, istediğin zaman iptal et",
		"[Hearty Journal] iOS Abonelik Koşulları",
		"Lite sürüm sınırlı özellik ve kaynak sunar; tam erişim için VIP'e yükselt",
		"Abonelik, ilk satın alma fiyatın üzerinden her ay yenilenir",
		"Etkinleştirildikten sonra otomatik olarak yenilenir ve Apple hesabın üzerinden ücretlendirilir",
		"Bir abonelik dönemi başladıktan sonra dönem ortasında iptal veya iade yapılamaz",
		"Süre bitiminden 24 saat önce otomatik yenilenir; istemiyorsan erkenden iptal etmeyi unutma",
		"Planını istediğin zaman Apple Hesabı > Abonelikler bölümünden yönetebilir veya değiştirebilirsin",
		"Senden asla telefonla ATM havalesi veya banka işlemi istemeyiz; şüpheli bir durumda Tayvan 165 dolandırıcılık ihbar hattını ara",
		"Satın alma sonrası deneme süresi hemen sona erer. Daha uzun denemek istiyorsan abone olmak için denemenin bitmesini bekle",
		"Hizmet Şartları",
		"Gizlilik Politikası"
	],
	iap_and: [
		"Aylık otomatik yenileme, istediğin zaman iptal et",
		"[Hearty Journal] Android Abonelik Koşulları",
		"Lite sürüm sınırlı özellik ve kaynak sunar; tam erişim için VIP'e yükselt",
		"Abonelik, ilk satın alma fiyatın üzerinden her ay yenilenir",
		"Etkinleştirildikten sonra otomatik olarak yenilenir ve Google Play üzerinden ücretlendirilir",
		"Bir abonelik dönemi başladıktan sonra dönem ortasında iptal veya iade yapılamaz",
		"Süre bitiminden 24 saat önce otomatik yenilenir; istemiyorsan erkenden iptal etmeyi unutma",
		"Planını istediğin zaman Google Play > Ödemeler ve Abonelikler bölümünden yönetebilir veya değiştirebilirsin",
		"Senden asla telefonla ATM havalesi veya banka işlemi istemeyiz; şüpheli bir durumda Tayvan 165 dolandırıcılık ihbar hattını ara",
		"",
		"Hizmet Şartları",
		"Gizlilik Politikası"
	]
};

// Alice
_h$["A"] = _h$["A"] || {
	// JS
	signin: ["Giriş yap", "Yanıtlamak için giriş yap", "Önce giriş yap"],
	back: "Geri",
	no: "Hayır",
	no_post: "Hay aksi, bu makale mevcut değil.",
	penpal_guest: ["Selam, bugün Hearty Journal'daki $day. günün. Mektup arkadaşı listesini görmek için lütfen en az 7 gün günlük tut.", "Anladım"], // Eng: $day$th
	comment_limit: [
		"Yinelenen yorumlar göndermiş olabilirsin. Öncekileri kaldırmak veya düzenlemek için dokun.",
		"$chars karakter yazdın. Yorumlar en fazla 85 karakter olmalı.",
		"Tüm yorumlar en az 4 karakter olmalı."
	],
	comment_ban: [
		"Yorumun moderatör tarafından onaylandıktan sonra yayınlanacak.",
		"Verdiğimiz rahatsızlık için özür dileriz. 🥺",
		"Hatırlatma olarak, lütfen şunlara uy: ",
		"Herkese Açık Gönderi Kuralları."
	],
	comment_edit: ["Yorum düzenlensin mi?", "Evet"],
	report_ask: ["Bu yorum kötüye kullanım/spam olarak bildirilsin mi?", "Bildir", "Bildirimin için teşekkürler."],
	url: ["Kopyala", "Makalenin Bağlantısı", "QRcode'u İndir"],
	penpal_add: ["“<b>$id</b>” mektup arkadaşın olmaya davet edilsin mi?", "Etkileşimlerin kalitesi için en fazla 2 mektup arkadaşı edinmeni öneririz.", "İleri"],
	verify: ["Lütfen önce e-posta adresini ve telefon numaranı doğrula.", "Hesabım"],

	// DOMs
	title: "Alice'in Ziyaretçi Defteri",
	board: "Alice'in ziyaretçi defteri",
	tabs: ["Yorumlar", "Makale Dizini", "Mektup Arkadaşları", "Paylaş", "Bize 5 yıldız ver", "Şişedeki Mesajlar"],
	comment: ["Yanıtla", "Yanıtlamak için giriş yap", "Karakter sınırı aşıldı (85 karakter)"],
	profile: ["Mektup arkadaşı olarak davet et", "Günlüğüm"],
	gotop: "Yukarı",
	goleft: "Geri dön"
};

// feed
_h$["f"] = _h$["f"] || {
	// JS
	refresh: ["Yükleniyor", "Aşağı çek", "Yenilemek için bırak"],
	signin: ["Giriş yap", "İstenen özelliği kullanmak için giriş yap"],
	no: "İptal",
	url: ["Kopyala", "Gönderi bağlantısı ve QRcode"],
	publish_ask: ["Gönderini herkese açık akışta yayınlamak ister misin?", "Günlüğünde", "simgesine dokunarak gönderi yayınlayabilirsin.", "Anladım", "Günlüğüm"],
	report_ask: ["“$title” kötüye kullanım/spam olarak bildirilsin mi?", "Bildir", "“$title” bildirildi. Teşekkürler."],

	// DOMs
	title: "Herkese Açık Gönderi Akışı (Sayfa $p)",
	share: "Paylaş",
	report: "Kötüye Kullanımı Bildir",
	focus_post: "Akışta göster",
	posts: "Herkese açık gönderileri oku",
	publish: "Yayınla",
	gotop: "Yukarı Git",
	back: "Geri",
	health: ["Sağlık bilgileri için lütfen CDC'nin web sitesine başvur. ( • ̀ω•́ )", "//www.cdc.gov.tw"]
};

// img
_h$["I"] = _h$["I"] || {
	title: "Galeri",
	upload: "Görsel yükle",
	empty: ["Yüklenmiş görsel yok", "Şimdi bir tane eklemek ister misin?"],
	add: "Görsel ekle",
	gotop: "Yukarı Git",
	layout: ["Izgara", "Döşeme"]
};

// account
_h$["a"] = _h$["a"] || {
	// JS
	ok: ["Tamam", "Onayla", "Elbette", "Doğru"],
	next: "İleri",
	no: "Hayır",
	back: "Geri",
	upload: "Yükle",
	rotate: "Döndür",
	retry: "Tekrar dene",
	signin: ["Giriş yap", "İstenen özelliği kullanmak için giriş yap"],
	usage: "$num gönderide $chars karakter yazdın.",
	points: "$p puan (Kullanım planlarını gör)",
	year: "", // CE
	bday_ask: ["Doğum günün $bday mi?", "Doğum tarihi değiştirilemez.", "Doğum günü güncellendi"],
	age: "$age yaşında",
	nickname_edited: "Yeni takma adın: “$n”",
	pwd_edit: "Şifreyi Değiştir",
	pwd_edited: "Değiştirildi",
	pwd_enter: "Yeni şifreni gir.",
	pwd_confirm: "Onaylamak için şifreni tekrar gir.",
	pwd_invalid: "Şifre 6 ~ 20 karakter uzunluğunda olmalı. Lütfen tekrar dene.",
	pwd_mismatch: "Şifreler eşleşmedi. Lütfen tekrar dene.",
	pwd_format: "6 ~ 20 karakter",
	pwd_apply: ["Değiştir", "Onayla"],
	pwd_ok: ["Şifre değiştirildi. Bir dahaki sefere lütfen yeni şifrenle giriş yap.",
				"Yetkisiz erişimi önlemek için lütfen şifreni güvende ve gizli tut."],
	avatar: ["Bir görsel seç (JPG, PNG, GIF, WebP, AVIF, HEIC)", "$ext seçildi, ancak yalnızca JPG, PNG, GIF, WebP, AVIF ve HEIC desteklenir", "Yeniden seç", "Profil fotoğrafı yüklendi"],
	avatar_err: [
		"Desteklenmeyen görsel biçimi veya hatalı dosya uzantısı (yalnızca: JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Görsel dosyası 6MB'ı aşıyor; lütfen yüklemeden önce sıkıştır",
		"Görsel dosyası okunamıyor veya bozuk",
		"HEIC/HEIF dönüştürme başarısız oldu. Lütfen başka bir görsel dene."
	],
	email_new: "Hesap e-postasını değiştir",
	email_confirm: "E-posta adresin “$email” olarak değiştirilsin mi?",
	email_invalid: "E-posta adresi geçersiz",
	email_verify: ["Hesap güvenliği için önce e-postanı doğrulaman gerekiyor, ardından ", "bazı özelliklerin kilidini açabilirsin.", "Şimdi doğrula"],
	email_send: "Doğrulama e-postası tekrar gönderilsin mi?",
	email_sent: ["Doğrulama e-postası gönderildi, e-postanı $isp üzerinde kontrol etmek ister misin?",
				"Doğrulama e-postası gönderildi, lütfen gelen kutunu kontrol et."],
	email_verified: "E-posta adresi zaten doğrulanmış.",
	pin: ["Destek PIN'i: $pin<br><small>(Destek PIN'i, destek ekibiyle iletişime geçtiğinde kimliğini doğrulamak için kullanılan bir güvenlik önlemidir.)</small>", "İndir"],
	font: [
		"Şık Yazı Tipleri",
		"i/fonts_en.png",
		"Justfont web yazı tipi hizmetinin yanı sıra ticari ve açık kaynaklı yazı tipleri kullanılmaktadır.",
		"Lisanslar"
	],
	font_change: "Yazı tipi değiştiriliyor: “$font”. Lütfen bekle.",
	gender_edited: "Cinsiyet güncellendi",
	newsletter_edited: "Değişiklik uygulandı",
	lang: "Dil değiştiriliyor: $lang",
	timezone_edited: "Saat dilimi “$tz” olarak ayarlandı",
	id: "Hearty ID: ",
	id_edit: "ID'mi değiştir",
	id_public: "Hearty ID ve takma ad herkese açıktır",
	id_new: "Yeni ID'ni gir",
	id_format: "Geçerli bir Hearty ID yalnızca harf ve rakamlardan oluşmalı ve 4 ~ 20 karakter uzunluğunda olmalıdır. ID'ni yalnızca bir kez değiştirebilirsin.",
	id_invalid: "Girdiğin ID gereksinimleri karşılamıyor.",
	id_same: "Mevcut ID'den farklı olmalı.",
	id_taken: "<b>“$id”</b> zaten kullanımda. Lütfen başka bir tane seç.",
	id_edited: "Hearty ID'n artık “<b>$id</b>”",
	id_signout: "Yeni Hearty ID'nle giriş yap",
	dl: "TXT dosyasına aktar",
	dl_pc: "Yedeğini indirmek için bir bilgisayarda “<u>www.hearty.me</u>” adresini aç.",
	dl_pwd: ["Günlüğünün şifresini çözmek için şifreni gir", "Hesap şifresi (6 ~ 20 karakter)", "TXT dosyasına aktar", "Dışa aktarma başladı", "Yedeğin dışa aktarıldı. Lütfen indirilenler klasörünü kontrol et ve dosyayı gizli ve güvende tut."],
	dl_fmt: ["Dışa aktarma biçimini seçin", "Metin dosyası (.txt)", "Word belgesi (.docx)", "İleri"],
	dl_doc: ["$posts gönderi, $images fotoğraf", "Dışa aktarmayı başlat", "Dönüştürülüyor: $done / $total fotoğraf, lütfen bekleyin", "Dönüştürülüyor, lütfen bekleyin", "Word belgeniz kaydedildi. Lütfen güvenli bir yerde saklayın.", "$n fotoğraf yüklenemedi ve atlandı", "Dışa aktarma yarıda kesildi. Lütfen daha sonra tekrar deneyin.", "Word'e aktarma yalnızca bilgisayardaki Chrome veya Edge'de desteklenir. Lütfen tarayıcınızı değiştirin ya da metin dosyasını seçin.", "Dışa aktarma tarihi: $date · $posts gönderi", "Şifre yanlış. Lütfen tekrar deneyin.", "Henüz dışa aktarılacak gönderi yok", "Word'e aktar"],
	vip_only: ["Bu", " bir Premium özelliktir.", "Yükseltme Fırsatları", "Şimdi değil"],
	suspend: ["Hesabını silmek istediğinden emin misin? Şimdilik ihtiyacın yoksa saklayabilirsin! Yeni özellikler ve sevimli çıkartmalar eklemeye devam edeceğiz — belki bir gün geri dönüp göz atmak istersin.", "Ya da ID'ni değiştirmek için <u>buraya</u> tıkla", "Sil", "Şimdilik sakla"],
	auth_log: ["Son Hesap Etkinliği", "$browser, $device", "Güvenliği artır", "//go.hearty.me/hj-sec"],
	redeem: ["Kupon kodu", "Kullan"],
	coupon_ok: ["“$coupon” kullanıldı ve şu anda inceleniyor.",
				"İncelemeden sonra 3 iş günü içinde hesabına kredi tanımlanacak. Lütfen birkaç gün içinde [Plan Ayrıntıları] bölümünü kontrol et."],
	voucher_ok: "“$code” kodu başarıyla kullanıldı! $exp tarihine kadar geçerli $days günlük VIP erişimi kazandın.",
	voucher_invalid: "Kupon kodu zaten kullanılmış veya geçersiz.",
	voucher_disqualified: "Her hesap yalnızca bir deneme kuponu kullanabilir. Zaten bir tane kullandın.",
	voucher_vvip: [
		"VVIP Sadakat Programı Teklifi",
		"Yıllık yenilemede özel %40 indirim (Ön Ödemeli Plan)",
		"Satın al"
	],
	voucher_ec: [
		"Bu bir <u>Hearty Life Shop alışveriş kuponudur</u>.",
		"Alışverişe başla"
	],

	// DOMs
	title: "Hesabım",
	tab: ["Hesabım", "Plan Ayrıntıları"],
	headline: ["Kitap"], // deprecated
	nickname: ["Takma ad", "Güncelle"],
	pincode: "Destek PIN'i",
	bday: "Doğum",
	email: ["Doğrulama e-postası gönder", "Doğrulama e-postasını tekrar gönder", " saniye sonra tekrar gönder"],
	style: ["Tasarım", "Günlüğümü Özelleştir"],
	gender: ["Cinsiyet", "Erkek", "Kadın"],
	phone: ["Telefon", "Telefon numarasını doğrula"],
	pwd: "Şifre",
	pfont: ["Gönderi Yazı Tipleri", "Yazı tipi önizlemesi"],
	language: "Dil",
	timezone: "Saat Dilimi",
	newsletter: ["Bülten", "Abone ol (ara sıra haberler ve hikayeler)"],
	newsletter_shop: ["Mağaza bülteni", "Abone ol (yeni ürünler ve kampanyalar)"],
	rate: ["Sevgi ve Sarılma", "Bize 5 yıldız ver"],
	misc: "Diğer",
	auth: ["Etkinlik", "Sil"],
	chat: "Yardım Merkezi",
	fonts: [
		"jf Open Huninn", // 0
		"Taipei Sans", // 1
		"jf Open Huninn", // 2
		"jf JinXuan", // 3
		"jf Cream", // 4
		"LXGW WenKai", // 5
		"Yozai Writing", // 6
		"Naikai Writing", // 7
		"Jason Writing A (iOS'ta yok)", // 8
		"Jason Writing B (iOS'ta yok)", // 9
		"Jason Writing C (iOS'ta yok)", // 10
		"Jason Writing D", // 11
		"Jason Writing E", // 12
		"Kurewa Gothic", // 13
		"Nani Writing (iOS'ta yok)", // 14
		"POP Gothic", // 15
		"Star Love Pencil", // 16
		"Genyo Ming", // 17
		"HuiWen MinCho (iOS'ta yok)", // 18
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
	title: "Planım",
	back: "Geri",
	redeem: "Hediyeni Kullan",
	buy: ["VIP Premium'u dene", "Planımı yenile"],
	plan: ["Planım", "Plan değişiklikleri veya kayıtlı kredi kartını güncellemek için lütfen bizimle iletişime geç ve Hearty ID'ni belirt.", "“VIP Premium (Ücretsiz deneme)” yeni gelenlere özel ücretsiz bir hediyedir.<br>Endişelenme, deneme süresi bittiğinde otomatik olarak ücretsiz Lite sürüme geçeceksin."],
	order: ["Siparişlerim"],
	plan_th: ["Durum", "Plan", "Başlangıç", "Bitiş", "Hearty Journal "],
	order_th: ["Durum", "No.", "Ürün", "TWD$", "Ödeme ", "Fatura"],
	order_status: ["Ödenmedi", "Ödendi",  "Etkinleştirildi", "Gecikmiş", "İptal edildi"],
	plan_status: ["Aktif", "Süresi doldu"],
	url: ["Bağlantıyı paylaş | QRcode", "Kopyala"],

	// bill
	fail: [
		"Ödeme Başarısız",
		"Önce aynı kredi kartıyla tekrar denemeni ya da farklı bir kart kullanmanı öneririz. Çoğu durumda bu sorunu çözer.",
		"Herhangi bir sorun olursa lütfen bize bildir."
	],
	fail_info: [
		"Yaygın Neden", "Ayrıntı",
		"Kart Bilgileri Hatalı", "Kart numarası, CVV veya son kullanma tarihi yanlış girildi.",
		"Yetersiz Bakiye", "Kullanılabilir bakiyene veya kredi limitine ulaşıldı.",
		"Kart Uygun Değil", "Kartın çevrim içi/yurt dışı kullanıma açık olmayabilir. Bu durumda kartına çevrim içi/yurt dışı alışveriş izni tanımlaması için kartını veren bankayla iletişime geç.",
		"Ödeme Reddedildi", "Olağan dışı veya yurt dışı işlemler, kartı veren bankanın otomatik dolandırıcılık önleme sistemini tetikleyerek ödemeyi reddetmesine neden olabilir. Bu durumda bankana bilgi vererek işlemin engelini kaldırmasını istemek işe yarayabilir."
	],
	fail_btn: [
		"Tekrar dene",
		"Destekle İletişime Geç",
	],


	// thankyou
	thx: [
		"Siparişin tamamlandı! Teşekkür ederiz!",
		"Siparişin için çok teşekkür ederiz; uzun ve sağlıklı bir birliktelik dileriz. Herhangi bir şeye ihtiyacın olursa lütfen bizimle iletişime geçmekten çekinme."
	],
	thx_th: [
		"Paket",
		"Süre",
		"gün",
		"Sipariş No.",
		"Tarih",
		"Tutar",
		"Ödeme yöntemi",
		"Fatura",
		"Plan değişiklikleri veya kayıtlı kredi kartını güncellemek için lütfen bizimle iletişime geç ve Hearty ID'ni belirt."
		//
		// "For monthly plan users, you can cancel your subscription anytime by contacting us with your Hearty ID."
	],
	thx_inv: [
		"Hearty Creative Inc. tarafından düzenlenen Tayvan KDV faturası",
		"Görüntüle"
	],
	thx_btn: [
		"VIP Anketi (yeni müşteriler için)",
		"Ekran görüntüsü",
		"Günlüğe Dön"
	]
};

// phone
_h$["pv"] = _h$["pv"] || {
	// JS
	ok: "Tamam",
	no: "İptal",
	signin: ["Giriş yap", "Lütfen önce giriş yap."],
	format: ["Numara çok kısa görünüyor.", "Numara geçersiz.", "Kota sınırına ulaştın. Lütfen daha sonra tekrar dene."],
	verify1: ["Doğrula", "Doğrulama kodunu gir: ", "<br><small>Bir <b>Firebase SMS</b> gönderildi, lütfen 45 saniye bekle ve telefonunu kontrol et.</small>", "$no artık doğrulandı!"],
	verify2: ["Doğrulama kodu gelmedi mi?", "Manuel doğrulama için bize bir SMS gönder. (Operatör ücretleri uygulanabilir)", "Gönder", "Manuel doğrulama 72 iş saati içinde tamamlanacak.", "[Doğrulama] Hearty ID: "],
	verify3: ["Doğrulama kodu gelmedi mi?", "Manuel doğrulama için lütfen Hearty ID'ni ve telefon numaranı ilet.", "Bize mesaj gönder"],
	code: ["SMS doğrulama kodu", "Tekrar dene", "6 haneli bir sayı olmalı.", "Kod geçersiz.", "Kodun süresi doldu, lütfen baştan başla."],
	fail: "Google Auth düzgün yüklenemedi, lütfen sayfayı yenile.",

	// DOMs
	title: "Telefon Numarasını Doğrula",
	back: "Hesabım",
	verify: ["Telefon Numarasını Doğrula", "Telefon numaran", "Doğrula", "Kodu gir", "SMS gelmedi mi?", "Tekrar gönder", "30 saniye sonra tekrar dene"]
};

// email
_h$["em"] = _h$["em"] || {
	title: [
		"Abonelikten Çık: Üye Bülteni",
		"Abonelikten Çık: Hearty Life Shop Bülteni"
	],
	unsubscribe: "Abonelikten Çık",
	ask: [
		"Abonelikten çıktıktan sonra artık site mesajları veya mektup arkadaşı bildirimleri almayacaksın.",
		"Abonelikten çıktıktan sonra artık yeni ürün veya kampanya duyuruları almayacaksın.",
		"Evet, aboneliğimi iptal et"
	],
	ok: "Tamam",
	back: "Geri",
	unsubscribed: "“$email” aboneliği iptal edildi. Değişiklik yarın geçerli olacak.",
	remarks: [
		"Önemli hesap bildirimlerini (şifre sıfırlama, politika güncellemeleri vb.) almaya devam edeceksin.",
		"Hiçbir e-posta almak istemiyorsan lütfen Hearty Journal hesabını sil."
	]
};

// points
_h$["pt"] = _h$["pt"] || {
	// JS
	ok: "Onayla",
	no: "İptal",
	back: "Geri",
	close: "Kapat",
	signin: [
		"Giriş Yap",
		"Lütfen önce Hearty Journal'a giriş yap."
	],
	redeem: [
		"<u>$pkg</u> için $p puan kullanmak istediğinden emin misin?",
		"“Onayla”ya tıklayarak koşulları kabul etmiş olursun",
		"Yetersiz puan. $pkg alınamıyor.",
		"Bu plan henüz puanla alınamıyor."
	],
	ec_ok: [
		"Hearty Life alışveriş kuponu (NT$$amt) kodun: <b>$code</b>",
		"“Kayıtlarım” bölümünden kontrol edebilirsin. $exp tarihinden önce kullanmayı unutma."
	],
	vip_ok: [
		"Puan kullanımı başarılı! $exp tarihine kadar geçerli $days günlük VIP Premium üyeliği kazandın.",
		"Şimdi görüntüle"
	],

	// DOMs
	title: "Hearty Puan Ödül Programı",
	points: ["Hearty Puanlarım", "P"],
	coupons: [
		"Kayıtlarım",
		"Kullanım Kayıtlarım",
		"Plan",
		"Kod",
		"Oluşturma",
		"Son Kullanma",
		"Kullanıldı",
		"Henüz hiç kodun yok."
	],
	label: [
		"En İyi",
		"Popüler"
	],
	use: [
		"Kuponu mağazada kullan"
	],
	agree: ["Lütfen koşulları oku ve kabul et."],
	get: [
		"Nasıl puan kazanılır?",
		"Her gün yoklama yaparak puan kazanabilirsin. Yoklama ekranına ulaşmak için günlüğün sağ üst köşesindeki zil simgesine tıklaman yeterli.",
		"Şimdi Yoklama Yap"
	],

	// Plans
	pkg_vip14: [
		"Hearty Journal VIP Premium",
		"14 günlük"
	],
	pkg_vip30: [
		"Hearty Journal VIP Premium",
		"30 günlük"
	],
	pkg_ec100: [
		"Hearty Life Alışveriş Kuponu (Dijital Ürünler)",
		"NT$ 100"
	]
};
