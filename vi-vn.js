/* Hearty Journal Language Pack: Ver 16 */

var _h$ = {};

_h$["lang"] = "vi-vn";

// common.head
_h$["h"] = _h$["h"] || {
	ok: "Đồng ý",
	qr: "QRcode_Hearty",
	copy: "Đã sao chép",
	err: "Máy chủ đang bận. Hãy thử lại sau và báo chúng tôi nếu vẫn lỗi.",
	satisfy: ["Bạn thích hay muốn chúng tôi cải thiện? Hãy cho biết!", "Rất thích!", "Cần cải thiện"],
	rate: ["Đánh giá của bạn là động lực cho đội ngũ nhỏ của chúng tôi.", "Cho chúng tôi 5 sao nhé?", "Cảm ơn bạn đã đánh giá.", "༼ つ ◕_◕ ༽つ"],
	notify: ["Bật thông báo?", "Nhận thông báo cá nhân? (vd. từ bạn qua thư)", "Đồng ý", "Để sau"],
	downloading: "Bắt đầu tải xuống"
};

// menu
_h$["m"] = _h$["m"] || {
	url: [
		"//go.hearty.me/hj-faq",
		"//go.hearty.me/hjse"
	],

	// JS
	no: "Không",
	back: "Quay lại",
	nav: ["Menu", "Hearty Journal", "Nhật ký của tôi"],
	signout: ["Đăng xuất", "Đăng xuất ngay?"],

	// DOMs
	avatar: [
		"Tài khoản của tôi", "Đăng nhập", "VIP Premium, Hearty Journal"
	],
	menu: [
		"Câu Kinh Thánh hôm nay", "Sổ lưu bút của Alice", "Bảng tin bài viết", "Hearty Blog", "Nhật ký của tôi", "Thư viện ảnh", "Life Shop", "Nâng cấp", "Hướng dẫn", "Giới thiệu", "Đăng xuất", "cho Windows", "cho macOS", "Windows/macOS", "Ứng dụng di động", "Ngôn ngữ 語言", "Đánh giá 5 sao", "🐞 Gỡ lỗi"
	]
};

// index
_h$["i"] = _h$["i"] || {
	passkey: [
		"Đăng nhập bằng Passkey",
		"hoặc",
		"Chưa có Passkey? Đăng nhập bằng mật khẩu rồi tạo trong \"Tài khoản của tôi\"",
		"Passkey đã bị xóa. Hãy đăng nhập cách khác",
		"Xác minh Passkey hết hạn. Thử lại nhé",
		"Đăng nhập Passkey thất bại. Thử lại nhé",
		"Tài khoản đã bị xóa hoặc đình chỉ"
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
	ok: ["Đồng ý"],
	no: ["Không", "Hủy"],
	go: "Bắt đầu nào.",
	back: "Quay lại",
	copy: ["Sao chép", "Đã sao chép: "],
	email: [
		"Email đã xác minh.", "Email đã được xác minh trước đó.", "Liên kết không hợp lệ.", "Liên kết bị lỗi."
	],
	reset: [
		"Đặt lại mật khẩu",
		"Tự động đăng nhập",
		"Liên kết không hợp lệ.",
		"Hearty ID không hợp lệ.",
		"Đã gửi liên kết. Hãy kiểm tra hộp thư.",
		"Đã gửi liên kết đến ***@$domain .",
		"Mở $url?",
		"Không tìm thấy Hearty ID."
	],
	captcha: [
		"Xác minh thất bại. Hãy tải lại trang.",
		"Hãy hoàn tất xác minh bảo mật."
	],
	ref: [
		"🎁 Bạn được $user mời tham gia."
	],
	cookie: [
		"Hãy bật cookie để đăng nhập.", "Cách bật"
	],
	browser: [
		"Trình duyệt quá cũ.", "Internet Explorer đã ngừng hoạt động."
	],
	signin: [
		"Đăng nhập",
		"Đang đăng nhập an toàn bằng $user",
		"Hearty ID không hợp lệ",
		"$user không tồn tại",
		"$user chưa được đăng ký",
		"$user đã bị xóa hoặc bị đình chỉ",
		"$user bị đình chỉ do vi phạm hoặc đã yêu cầu xóa",
		"Sai mật khẩu",
		"Mật khẩu: tối thiểu 6 ký tự",
		'Đăng nhập vào "$client" bằng Hearty ID'
	],
	signup: [
		"Hearty ID: chỉ chữ và số",
		"Hearty ID: 4 - 20 ký tự",
		"Email không hợp lệ",
		"Hãy dùng email thật",
		"Mật khẩu: 6 - 20 ký tự",
		"Mật khẩu không khớp",
		"⚠ Không khuyến khích dùng Yahoo! Mail.\nVẫn dùng chứ?",
		"Email hoặc mật khẩu không hợp lệ.",

		"Đã tạo $user! Hãy kiểm tra hộp thư.",
		"Đã tạo $user!",
		"$user đã tồn tại. Hãy đăng nhập.",
		"Email đã được đăng ký. Hãy đăng nhập.",
		"ID đã có người dùng. Chọn ID khác.",
		"Email không hợp lệ.",
		"Không chấp nhận email dùng một lần.",
		"Vui lòng thử lại sau."
	],
	box: [
		"Đăng ký",
		"Đăng nhập",
		"Đặt lại mật khẩu",
		"Tạo tài khoản",
		"Đăng nhập vào Hearty Journal",
		"Lấy lại ID | Đặt lại mật khẩu",
		"💡 ID của bạn (4 ~ 20 ký tự)",
		"💡 Hearty ID / email"
	],
	timer: "Gửi lại ($min:$sec)",
	chat: [
		"Hỗ trợ",
		"Đăng nhập để được hỗ trợ.",
		"Liên hệ qua email",
		"Email hỗ trợ: "
	],
	id_notice: [
		"Dữ liệu được mã hóa và đồng bộ lên đám mây.",
		"Hearty ID là chìa khóa duy nhất cho dữ liệu của bạn trên máy tính và điện thoại."
	],
	song: ["Harmony - 溫度日記", "Nhạc nền của Hearty Journal"],
	404: "Rất tiếc, không tìm thấy trang.",

	// DOMs
	title: ["Hearty Journal 溫度日記", "Lưu giữ những kỷ niệm quý giá"],
	topbar: [
		"Đăng ký / Đăng nhập", "Ứng dụng Windows", "Ứng dụng macOS"
	],
	slogan: [
		"Hearty Journal", "<br>lưu giữ những kỷ niệm quý giá", ", ",
		"Apple Editor's Pick | 300.000+ người dùng | 4,9 sao", "Kết nối an toàn, mã hóa TLS 1.3."
	],
	scroll: "Cuộn xuống",
	preview: ["Xem trước", "Đóng"],
	feature: [
		"Luôn bên bạn", "Ghi lại an toàn suy nghĩ, cảm xúc, ý tưởng và khoảnh khắc riêng tư.",
		"Giao diện đẹp mắt", "Chủ đề đẹp, nhãn dán dễ thương, phông chữ sang trọng",
		"Chia sẻ với người thân yêu", "Cho bạn bè, gia đình và người yêu",
		"Chú trọng quyền riêng tư", "Nhật ký riêng tư và an toàn"
	],
	testimonial: [
		"Hơn 100.000 người dùng hài lòng",
		"Hearty Journal là chốn bình yên cho tâm trí và tâm hồn.", "Haitaibear, Nhà văn & Nhà tâm lý học",
		"Một nơi tuyệt vời để hẹn hò với chính mình.", "Cindy Liu",
		"Xinh xắn, dễ thương và nhiều tính năng hữu ích.", "Wu Chi",
		"Hearty giúp tôi vượt qua trầm cảm. Giờ tôi đã ổn hơn.", "Yan-Xuan",
		"Dễ dùng cả trên máy tính lẫn điện thoại.", "Xiao-Jun"
	],
	press: [
		"Truyền thông",
		"Bnext Media", "Free Group", "Aotter girls", "Womany", "Sheaspire", "SEinsights", "Taiwan Startup Stadium", "Innosquare, New Taipei", "UDN", "Vita News"
	],
	action: [
		"Sẵn sàng chăm sóc tâm hồn?", "Bắt đầu viết"
	],
	rate: "Đánh giá 5 sao",
	footer: [
		"Ngôn ngữ 語言",
		"cho Windows",
		"cho macOS",
		"Tính năng",
		"Đánh giá người dùng",
		"Hợp tác kinh doanh",
		"Tài liệu báo chí",
		"Hướng dẫn",
		"Bảo vệ dữ liệu",
		"Điều khoản dịch vụ",
		"Chính sách quyền riêng tư",
		"Chứng chỉ bảo mật",
		"Nhạc nền",
		"Nien, Nhà sáng lập",
		"Jiayi, Đồng sáng lập",
		"Nhãn hiệu",
		"Về chúng tôi"
	],
	cookies: ["Khi duyệt trang, bạn đồng ý với cookie và chính sách quyền riêng tư.", "Đồng ý"],
	copyright: "2016-"+new Date().getFullYear().toString()+" Hearty Creative Inc. và các công ty liên kết",
	isp: "lưu trữ trên Cloudways",
	auth: [
		"Đăng ký miễn phí",
		"Đã có tài khoản?",
		"Quên ID/Mật khẩu",
		"Đăng nhập ngay",
		"Hearty ID", "💡 Hearty ID hoặc email",
		"Mật khẩu", "🔑 6 ~ 20 ký tự",
		"Nhập lại mật khẩu", "🔑 Nhập lại mật khẩu", "Hiện mật khẩu",
		"Ghi nhớ tôi", "Tôi đồng ý với Điều khoản dịch vụ & Chính sách quyền riêng tư."
	],
	lang: "Đang chuyển sang: $lang"
};

// editor
_h$["e"] = _h$["e"] || {
	// JS
	url: [
		"//go.hearty.me/hj-faq",
		"//go.hearty.me/hj-data",
		"//bitly.com/3E0ZJ7Q"
	],
	ok: ["Đồng ý", "Đã hiểu", "Tất nhiên"],
	no: ["Không", "Hủy"],
	retry: "Thử lại",
	back: "Quay lại",
	gotop: "Lên đầu",
	signin: ["Đăng nhập", "Đăng nhập để ", "sử dụng tính năng này"],
	signout: "Đăng xuất",
	name: ["Biệt danh của tôi", "Biệt danh của bạn là gì?<br>Tên này sẽ được công khai.", "Chào $name.", "Nhắc viết nhật ký mỗi ngày?", "Có, bật nhắc nhở"],
	get_stickers: ["Yeah! Nhận được bộ nhãn dán!", "Mở quà"],
	welcome: ["Chào $name", "Nhật ký của tôi", "Nhấn để đăng nhập"],
	year: "",
	maintenance: ["Bảo trì định kỳ: ", "tạm ngưng khoảng 1 giờ"],
	update: ["Đã có phiên bản mới.", "Cập nhật ngay", "Nhắc ngày mai"],
	search: ["Tìm bài viết", "từ khóa tìm kiếm", "Tìm kiếm", "Không có kết quả"],
	bookmark: [
		"1 yêu thích",
		"$no yêu thích",
		"Yêu thích",
		"Không có tiêu đề"
	],
	catalog: [
		"1 bài viết",
		"$no bài viết",
		"Bài viết mới",
		"Chưa có bài viết",
		"Chưa có bài từ bạn qua thư",
		"Bài đầu tiên hoặc cuối cùng.",
		"Không có bài viết",
		"Trước",
		"Sau"
	],
	sticker: ["Phóng to", "Xoay", "Dán", "Đã xóa", "Muốn thêm nhãn dán?", "Nâng cấp lên VIP Premium"],
	verify_required: [
		"Xác minh $item để $act.",
		"số điện thoại", "xem thông tin",
		"đổi chế độ hiển thị", "đăng lên bảng tin", "thêm bạn qua thư", "chia sẻ với bạn qua thư"
	],
	privacy: [
		"Đã công khai", "Đã chuyển sang riêng tư",
		'Bài viết của bạn đang được xét duyệt để đảm bảo tuân thủ <a target="_blank" href="//go.hearty.me/publish"><u>quy định đăng bài công khai</u>. ',
		"Sẽ được chia sẻ sau khi duyệt.",
		"Sẽ được đăng sau khi duyệt.",
		"Đừng đăng trùng, hãy chờ duyệt. (;´ㅁ`)-3"
	],
	publish: [
		"Bài trên bảng tin cần 100+ ký tự. Viết thêm nhé.",
		"Có ý tưởng rồi!",
		'Bạn muốn đăng "$title" lên bảng tin công khai?',
		"Công khai và đăng lên bảng tin?",
		"Đăng bài",
		'Đã đăng "$title".',
		"Xem ngay",
		"Quay lại",
		'Vui lòng tuân thủ <a target="_blank" href="//go.hearty.me/publish"><u>[quy định đăng bài công khai]</u></a>. <small>Ngoài ra, không được tiết lộ thông tin cá nhân.</small>',
		'Bạn muốn gỡ bài viết "$title" khỏi bảng tin?',
		"Có",
		"Đã gỡ khỏi bảng tin",
		"Mỗi ngày một bài trên bảng tin."
	],
	penpal_add: [
		"Mời bạn bằng Hearty ID (hoặc email): ",
		"Lite: tối đa 2 bạn. VIP Premium: không giới hạn.",
		"Hearty ID hoặc email",
		"mời",
		"Nâng cấp để mời thêm bạn.",
		'Mời "<b>$name</b>" (Hearty ID: $user) làm bạn qua thư?',
		"$name giờ là bạn qua thư của bạn",
		'"$user" đã là bạn qua thư của bạn',
		'"$user" không tồn tại',
		'Rất tiếc, bạn đã bị "$user" chặn.',
		"Bạn không thể tự mời mình."
	],
	penpal_delete: [
		"Người này sẽ bị xóa, hai bên không thể thêm lại nhau và các bài đã chia sẻ sẽ bị hủy ngay. (không thể hoàn tác)",
		"Chọn người cần xóa",
		"- Chọn một người -",
		'Bạn có chắc muốn xóa "$user" khỏi danh sách?',
		"Có",
		'Xong, đã xóa "$user".'
	],
	penpal_send: [
		"Đã chia sẻ với $add",
		"Đã cập nhật cài đặt"
	],
	pin: [
		"Mã PIN hỗ trợ: ", "Dùng để xác minh danh tính khi liên hệ hỗ trợ."
	],
	chat: [
		"Hearty ID: "
	],
	membership: [
		"Lite", "VIP Premium (Dùng thử miễn phí)", "VIP Premium"
	],
	feedback: [
		"Mã yêu cầu #$no",
		"Tên của bạn?",
		"Email không hợp lệ.",
		"Quá ngắn.",
		", cảm ơn bạn! Chúng tôi sẽ trả lời qua email trong 24 giờ làm việc. Hãy kiểm tra cả thư rác.",
		"Đồng ý",
		"Về VIP Premium",
		"Rất tiếc, thử lại sau nhé."
	],
	video: [
		"Liên kết YouTube",
		"hoặc tải lên",
		"Đặt",
		"Thêm vào danh sách phát",
		"Đã đính kèm video",
		"Liên kết YouTube không hợp lệ",
		"Video riêng tư, đã xóa hoặc không cho nhúng",
		"Kiểm tra liên kết",
		'Xác nhận xóa "$title"?',
		"Xóa",
		"Đặt (trống = xóa)", // 預留未使用
		"https://youtu.be/vYFnZdUiUyg (trống = xóa)"
	],
	yt: [
		"Danh sách phát",
		"Sắp xếp",
		"Xóa",
		"Tắt đèn",
		"Nhấn ➕ để thêm bài hát",
		"Nghe nhạc yêu thích khi viết.",
		"Bài hát yêu thích của tôi",
		"Phát"
	],
	gps: [
		"Thêm thời tiết vào bài?",
		'⛅ Vui lòng CHO PHÉP yêu cầu định vị và đợi vài giây.',
		"Đã thêm thời tiết",
		"Không có tín hiệu GPS",
		"Xem thông báo trên thanh địa chỉ."
	],
	chars_max: [
		"$chars ký tự: vượt giới hạn 10.000 (gồm ký hiệu).",
		"Có ai từng thấy thông báo này chưa nhỉ?"
	],
	chars: [
		"$chars ký tự: vượt hạn mức Lite ($limit).",
		"Ưu đãi VIP Premium",
		"Nhắc tôi sau"
	],
	leave: "Có thể còn thay đổi chưa lưu.",
	date: ["Ngày viết", "Ngày sửa đổi: ", "Mới nhất ở trên."],
	subject: ["Bài viết mới, $date", "Tiêu đề bài viết", 'Tiêu đề mới "$title"', "Cập nhật"],
	archive: [
		'Xác nhận xóa "$title"? (không thể hoàn tác)', "Xóa và quên đi", 'Đã xóa "$title"'
	],
	unsafe: "Google Safe Browsing đánh dấu liên kết là độc hại.",
	offline: "Mạng không ổn định",
	lock: [
		"Bật khóa mật mã (2FA)?",
		"Bật",
		"Tắt khóa mật mã",
		"Đã tắt khóa",
		"Tôi quên cả hai.",
		"Quên cả <u>mật mã</u> lẫn <u>mật khẩu</u>? Đăng xuất và đặt lại mật khẩu; khóa sẽ được tắt."
	],
	pincode: [
		"Nhập mật mã",
		"Xác nhận mật mã",
		"Mật mã khóa hoặc mật khẩu",
		"Sai mật mã",
		"Mật mã không khớp",
		"Nhập lại mật mã",
		"Chỉ chữ số",
		"Đã bật khóa. Mật mã 2FA: $pin."
	],
	screenshot: "Đang tạo ảnh. Sẽ tải xuống trong 10 giây.",
	pc: [
		"Ứng dụng máy tính", 'Truy cập "www.hearty.me" <i class="fal fa-globe"></i> trên PC/Mac của bạn.',
		"Ưu điểm bản máy tính", "Dễ đọc trên màn hình lớn", "Gõ phím thoải mái", "Đồng bộ mọi thiết bị", "Dùng thử"
	],
	picture: [
		"Tải ảnh lên",
		"Ảnh (JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Tải lên",
		"Chọn lại",
		"Tối đa 10 ảnh mỗi bài.",
		"Không hỗ trợ $ext; chỉ JPG, PNG, GIF, WebP, AVIF & HEIC",
		"Đã tải ảnh lên",
		"Sắp tải xuống",
		"Đã lưu vào thư mục Tải xuống"
	],
	picture_err: [
		"Định dạng hoặc đuôi tệp không hỗ trợ (JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Quá 6MB; hãy nén trước",
		"Ảnh không đọc được hoặc bị hỏng",
		"Chuyển HEIC/HEIF thất bại. Thử ảnh khác."
	],
	picture_remove: [
		"Xóa ảnh? (không thể hoàn tác)", "Xóa", "Đã xóa hình ảnh"
	],
	file: "Hearty_Journal",
	trial: [
		"Quà chào mừng: 30 ngày dùng thử miễn phí Hearty VIP Premium với mọi tính năng.",
		"Sau $exp bạn KHÔNG bị tính phí; sẽ về bản Lite miễn phí và giữ nguyên mọi bài viết. ( ´･ヮ･) ♡",
		"Tìm hiểu thêm",
		"Bắt đầu viết"
	],
	purchased: [
		"VIP Premium đã kích hoạt!",
		"Có 3 phút góp ý không?",
		"Khảo sát lần đầu: tặng 7 ngày Premium!",
		"Tham gia khảo sát",
		"Để sau / đã làm"
	],
	n_verify_email: [
		"Xác minh $item để mở khóa tính năng",
		"Xác minh email để nhận phản hồi."
	],
	n_verify_phone: "Xác minh số điện thoại để bảo mật hơn",
	n_vip_prefix: "Gói VIP của bạn",
	n_char_limit_exceed: "$chars ký tự: đã hết hạn mức Lite.",
	n_daily_checkin: [
		"Điểm đang chờ — điểm danh nào!",
		"Hôm nay bạn đã điểm danh."
	],
	checkin: [
		"Điểm danh",
		"Hearty Point của tôi: ", "P",
		"Điểm danh mỗi ngày: 1P",
		"+1P! Hiện có $pP.",
		"Hôm nay đã điểm danh rồi.",
		"Hẹn gặp lại ngày mai.",
		"Tích lũy và dùng Hearty Point. Quà đổi điểm sẽ sớm công bố."
	],
	reward: [
		"Đổi thưởng"
	],
	pd: [
		"Theo dõi kinh nguyệt",
		"Kỳ tới: ",
		"Chu kỳ trung bình: ",
		"ngày",
		"Bắt đầu",
		"Kết thúc",
		"Chu kỳ",
		"Thêm ghi chép",

		"Hôm nay",
		"Xóa",
		"Xóa ghi chép?",
		"Ngày thứ $d", // Eng: $d$th
		"Kỳ tới: sau $d ngày"
	],

	// customize my journal
	headline: [
		"Tên nhật ký",
		"Tên mới cho nhật ký",
		"Lưu",
		'Tên mới: "$headline"',
		"có thể để trống"
	],
	style: [
		"Tùy chỉnh nhật ký",
		"Về mặc định",
		"Cần cảm hứng?",
		"//en.faq.hearty.me/tutorial/styles"
	],
	cover: [
		"Ảnh bìa",
		"Tải ảnh bìa lên",
		"Tỷ lệ đẹp nhất: 1.9:1",
		"Xác nhận", // crop
		"Hủy",
		"Không hỗ trợ: $ext .",
		"Đã tải ảnh bìa lên",
		"Đã đặt lại ảnh bìa"
	],
	bg: [
		"Ảnh nền",
		"Tải ảnh nền lên",
		"Không hỗ trợ: $ext .",
		"Đã cập nhật ảnh nền",
		"Đã đặt lại ảnh nền"
	],
	color: [
		"Chọn màu",
		"Đã cập nhật màu"
	],

	// DOMs
	title: "Nhật ký của tôi",
	header: [
		"Nhật ký", "Thông báo của tôi", "Nhãn dán", "Bảng giá", "Trung tâm trợ giúp", "Xong"
	],
	notification: [
		"Không có gì mới",
		"Ứng dụng máy tính",
		"Trung tâm trợ giúp",
		"Tải lại",
		"Chế độ gỡ lỗi",
		"Nâng cấp VIP Premium"
	],
	link: [
		"Liên kết bên ngoài",
		"Đã được Google Safe Browsing quét",
		"Đi"
	],
	share: [
		"Quyền riêng tư bài viết", "Liên kết", "Riêng tư", "Xác thực mật mã", "Công khai", "Đăng lên bảng tin", "Không công khai thông tin riêng tư hoặc bí mật."
	],
	penpal: [
		"Bạn qua thư", "Mời bạn qua thư", "Xóa bạn qua thư", "Chưa có bạn qua thư", "Chia sẻ với: "
	],
	qa: [
		"Trung tâm trợ giúp", "Chung & Tính năng", "Tài khoản & Thanh toán", "Dữ liệu & Quyền riêng tư", "Kiểm tra mạng", "Báo lỗi / Yêu cầu", "Cập nhật trạng thái", "Mọi thứ bình thường"
	],
	cs: [
		"Gửi yêu cầu", "Có câu hỏi? Nhấn vào đây.", "Góp ý, báo lỗi hoặc một cái ôm",
		"Chúng tôi sẽ sớm trả lời qua email.", "Gửi", "Mã PIN hỗ trợ: ",
		"Đã bật Beta"
	],
	csform: ["Tên", "VIP Premium", "Lite", "Tệp đính kèm"],
	gift: [
		"Nhận nhãn dán", "Mở hộp quà", "50 nhãn dán độc quyền"
	],
	prologue: "Hôm nay thế nào?",
	pwd: "Xác thực mật mã",
	warn: [
		"Bảo trì định kỳ", "Mạng chậm", "Mạng không ổn định", "Pin yếu"
	],
	tool: [
		"Lưu", "Bài viết mới", "Xóa", "Chia sẻ", "Lưu thành ảnh", "Bài trước", "Bài sau", "Toàn màn hình", "Mở sách", "Lật sách"
	],
	rmenu: [
		"Trung tâm trợ giúp", "Giới thiệu", "Toàn màn hình", "繁/简", "Tăng cỡ chữ", "Giảm cỡ chữ", "Lật sách", "Chế độ đọc dọc"
	],
	image: [
		"Hình ảnh", "Xoay", "Áp dụng bộ lọc", "Tải xuống", "Xóa"
	],
	tab: [
		"Của tôi", "Của bạn qua thư",
		"🔍 Tìm kiếm", "🔖 Yêu thích", "🎧 Danh sách phát nhạc", "🌙 Theo dõi kinh nguyệt", "🔒 Khóa mật mã",
		"Trung tâm trợ giúp", "Cử chỉ cảm ứng", "Cử chỉ nhãn dán"
	],
	book: [
		"Giới thiệu", "Giữa thời đại hối hả, Hearty Journal là chốn bình yên ấm áp để trút bỏ mệt mỏi, giãi bày nỗi sợ chưa từng nói và tìm lại chính mình. Trời không phải lúc nào cũng xanh, nhưng chúng tôi vẫn kiên định và dịu dàng."
	],
	promo: ["[Ưu đãi] 3 tháng VIP Premium chỉ NT$99"],
	403: "Bài riêng tư: hãy đăng nhập. 🔒",
	404: "Rất tiếc, liên kết có thể sai.",
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
	stickers: ["Tất cả nhãn dán", // Start with 1
		"Chữ viết", "Thời tiết", "Tâm trạng", "Đời sống", "Trang phục", "Đồ dùng hằng ngày", "Ẩm thực", "Du lịch", "Mùa & Lễ hội", "Cây cỏ", "Động vật", "Nhân vật", "Kỳ ảo"
	]
};

// pricing
_h$["p"] = _h$["p"] || {
	url: [
		"//go.hearty.me/why-VIP",
		"//go.hearty.me/hj-terms",
		"//go.hearty.me/hj-privacy"
	],
	lite: ["Lite", "Miễn phí"],
	vip: ["Hearty VIP Premium", "VIP Premium", "(Dùng thử miễn phí)"],
	feat_lite: [
		"Riêng tư, không quảng cáo",
		"Văn bản (tối đa 5.785 ký tự)",
		"90 nhãn dán & 20 phông chữ",
		"Thời tiết, nhắc nhở hằng ngày",
		"Chia sẻ với tối đa 2 bạn",
		"Khóa 2FA, danh sách nhạc & theo dõi kinh nguyệt",
		"iOS, Android, Windows & macOS",
		"Tự động đồng bộ đám mây (AWS)",
		"Mã hóa TLS 1.3",
		"Được tạo bằng ♥ tại Đài Loan",
	],
	feat_vip: [
		"Mọi thứ của Lite, thêm: ",
		"Không giới hạn chữ",
		"Tối đa 10 ảnh mỗi bài",
		"Thư viện 15 hiệu ứng",
		"1.300+ nhãn dán (luôn có mới)",
		"Nhúng video YouTube",
		"Tùy chỉnh bìa & nền",
		"Đổi tên & sửa ngày",
		"Tìm kiếm dễ dàng",
		"Xuất Word, TXT hoặc ảnh"
	],
	remark: [
		"Vì sao chọn VIP Premium?",
		"[Mua lần đầu] 3 tháng VIP Premium chỉ NT$99",
		"hằng tháng, hủy bất cứ lúc nào",
		"Hoàn tiền trong 30 ngày cho khách mới",
		"Tính năng Premium"
	],
	act: [
		"Đăng ký miễn phí", "Dùng thử miễn phí 30 ngày", "Ưu đãi nâng cấp", "Gia hạn ngay", "Đăng nhập & nâng cấp"
	],
	deposit: ["Trả trước", "Mua ngay", "Thẻ tín dụng, Google Pay, Alipay, ATM Đài Loan"],
	subscription: ["Gói hằng tháng", "Đăng ký ngay", "(Ưu đãi qua thẻ)", "Lần đầu: NT$99 / 3 tháng", "Sau đó NT$99/tháng", "Thẻ tín dụng"],
	selected: ["Đã chọn", "Tốt nhất"],
	currency: ["Theo tỷ giá, "],
	term: [
		"3 tháng", "6 tháng", "1 năm"
	],
	unit: [
		"Hằng tháng", "Tháng"
	],
	subtotal: "Tạm tính: NT$",
	powerby: "Vận hành bởi",
	redeem: "Đổi quà tặng",

	due: "Gói đăng ký của tôi",
	due_active: ["Đang đăng ký"],
	due_date: ["Hết hạn vào ", "", "sau đó về Lite"],
	due_days: ["Hết hạn sau ", " ngày", "sau đó về Lite"],
	due_tomorrow: ["Hết hạn vào ngày mai", "sau đó về Lite"],
	due_today: ["Hết hạn hôm nay", "sau đó về Lite"],
	iap_ios: [
		"Gia hạn hằng tháng, hủy bất cứ lúc nào",
		"[Hearty Journal] Điều khoản iOS",
		"Lite có giới hạn; VIP dùng đầy đủ",
		"Gia hạn hằng tháng theo giá lần đầu",
		"Tự động gia hạn và thanh toán qua tài khoản Apple",
		"Kỳ đã bắt đầu không thể hủy hay hoàn tiền",
		"Gia hạn 24 giờ trước khi hết hạn; hủy sớm nếu không muốn",
		"Quản lý tại Tài khoản Apple > Đăng ký",
		"Chúng tôi không bao giờ yêu cầu thao tác ATM hay ngân hàng qua điện thoại; nếu nghi ngờ, gọi 165",
		"Mua sẽ kết thúc dùng thử ngay. Muốn dùng hết thời gian thử, hãy đăng ký sau",
		"Điều khoản dịch vụ",
		"Chính sách quyền riêng tư"
	],
	iap_and: [
		"Gia hạn hằng tháng, hủy bất cứ lúc nào",
		"[Hearty Journal] Điều khoản Android",
		"Lite có giới hạn; VIP dùng đầy đủ",
		"Gia hạn hằng tháng theo giá lần đầu",
		"Tự động gia hạn và thanh toán qua Google Play",
		"Kỳ đã bắt đầu không thể hủy hay hoàn tiền",
		"Gia hạn 24 giờ trước khi hết hạn; hủy sớm nếu không muốn",
		"Quản lý tại Google Play > Thanh toán và gói đăng ký",
		"Chúng tôi không bao giờ yêu cầu thao tác ATM hay ngân hàng qua điện thoại; nếu nghi ngờ, gọi 165",
		"",
		"Điều khoản dịch vụ",
		"Chính sách quyền riêng tư"
	]
};

// Alice
_h$["A"] = _h$["A"] || {
	// JS
	signin: ["Đăng nhập", "Đăng nhập để trả lời", "Đăng nhập trước"],
	back: "Quay lại",
	no: "Không",
	no_post: "Không tìm thấy bài viết.",
	penpal_guest: ["Hôm nay là ngày thứ $day của bạn trên Hearty Journal. Viết đủ 7 ngày để xem danh sách bạn qua thư.", "Đã hiểu"], // Eng: $day$th
	comment_limit: [
		"Bình luận có thể bị trùng. Nhấn để sửa hoặc xóa.",
		"$chars ký tự; tối đa 85.",
		"Tối thiểu 4 ký tự."
	],
	comment_ban: [
		"Bình luận sẽ hiện sau khi được duyệt.",
		"Xin lỗi nhé. 🥺",
		"Vui lòng tuân thủ ",
		"Quy định đăng bài công khai."
	],
	comment_edit: ["Sửa bình luận này?", "Có"],
	report_ask: ["Báo cáo lạm dụng/spam?", "Báo cáo", "Cảm ơn bạn đã báo cáo."],
	url: ["Sao chép", "Liên kết đến bài viết", "Tải mã QR"],
	penpal_add: ['Mời "<b>$id</b>" làm bạn qua thư?', "Nên có tối đa 2 bạn qua thư.", "Tiếp"],
	verify: ["Hãy xác minh email và số điện thoại trước.", "Tài khoản của tôi"],

	// DOMs
	title: "Sổ lưu bút của Alice",
	board: "Sổ lưu bút của Alice",
	tabs: ["Bình luận", "Mục lục bài viết", "Bạn qua thư", "Chia sẻ", "Đánh giá 5 sao", "Thư trong chai"],
	comment: ["Trả lời", "Đăng nhập để trả lời", "Tối đa 85 ký tự"],
	profile: ["Mời", "Nhật ký của tôi"],
	gotop: "Lên đầu",
	goleft: "Quay lại"
};

// feed
_h$["f"] = _h$["f"] || {
	// JS
	refresh: ["Đang tải", "Kéo xuống", "Thả ra để làm mới"],
	signin: ["Đăng nhập", "Đăng nhập để sử dụng"],
	no: "Hủy",
	url: ["Sao chép", "Liên kết bài viết & mã QR"],
	publish_ask: ["Đăng lên bảng tin?", "Trong nhật ký của bạn, nhấn", "để đăng bài.", "Đã hiểu", "Nhật ký của tôi"],
	report_ask: ['Báo cáo "$title" là lạm dụng/spam?', "Báo cáo", 'Đã báo cáo "$title". Cảm ơn bạn.'],

	// DOMs
	title: "Bảng tin công khai (Trang $p)",
	share: "Chia sẻ",
	report: "Báo cáo lạm dụng",
	focus_post: "Hiển thị trên bảng tin",
	posts: "Đọc bài viết công khai",
	publish: "Đăng bài",
	gotop: "Lên đầu",
	back: "Quay lại",
	health: ["Thông tin sức khỏe: xem trang CDC. ( • ̀ω•́ )", "//www.cdc.gov.tw"]
};

// img
_h$["I"] = _h$["I"] || {
	title: "Thư viện ảnh",
	upload: "Tải ảnh lên",
	empty: ["Chưa có ảnh", "Thêm ảnh ngay?"],
	add: "Thêm ảnh",
	gotop: "Lên đầu",
	layout: ["Lưới", "Masonry"]
};

// account
_h$["a"] = _h$["a"] || {
	passkey: [
		"Passkey",
		"Thêm Passkey",
		"Chưa có Passkey",
		"Passkey là gì?",
		"Đăng nhập bằng Face ID, vân tay hoặc khóa màn hình, không cần Hearty ID và mật khẩu, an toàn trước lừa đảo.<br><br>Passkey lưu trên thiết bị hoặc trình quản lý mật khẩu (vd. Chuỗi khóa iCloud, Trình quản lý mật khẩu của Google). Hearty Journal chỉ lưu khóa công khai, không dùng để đăng nhập được.<br><br>Xóa Passkey không đăng xuất thiết bị đang dùng. Sau khi đổi ID, tên cũ có thể vẫn hiện nhưng không ảnh hưởng đăng nhập.",
		"Đăng nhập không cần Hearty ID và mật khẩu",
		"Đổi tên",
		"Tên Passkey (tối đa 20 ký tự)",
		"Tên: 1 ~ 20 ký tự",
		"Xóa",
		"Xóa \"$name\"?<br>Bạn sẽ không đăng nhập bằng nó được nữa; thiết bị đang dùng vẫn giữ đăng nhập.<br>Hãy xóa cả trong trình quản lý mật khẩu.",
		"Passkey cuối cùng và chưa có mật khẩu: sau đó chỉ đăng nhập được bằng tài khoản bên ngoài.",
		"Thiết bị này đang dùng Passkey này và vẫn giữ đăng nhập.",
		"Đã xóa Passkey",
		"Đồng bộ với thiết bị khác",
		"Chỉ lưu trên thiết bị này",
		"Chưa đồng bộ",
		"Đang sử dụng",
		"Tạo ngày $date",
		"Dùng lần cuối $date",
		"Chưa sử dụng",
		"Nhập mật khẩu hiện tại để xác nhận",
		"Sai mật khẩu",
		"Tối đa 10 Passkey. Hãy xóa cái không dùng",
		"Thiết bị/trình quản lý này đã có Passkey",
		"Đã tạo Passkey! Dùng nó cho lần sau",
		"Xác nhận bằng Passkey hiện có",
		"Tiếp",
		"Hết thời gian. Thử lại nhé",
		"Thất bại quá nhiều lần. Thử lại sau 15 phút"
	],
	// JS
	ok: ["Đồng ý", "Xác nhận", "Tất nhiên", "Đúng"],
	next: "Tiếp",
	no: "Không",
	back: "Quay lại",
	upload: "Tải lên",
	rotate: "Xoay",
	retry: "Thử lại",
	signin: ["Đăng nhập", "Đăng nhập để sử dụng"],
	usage: "$chars ký tự trong $num bài.",
	points: "$p điểm (đổi thưởng)",
	year: "", // CE
	bday_ask: ["$bday có phải là ngày sinh của bạn không?", "Sau này không thể đổi.", "Đã cập nhật ngày sinh"],
	age: "$age tuổi",
	nickname_edited: '"$n" là biệt danh mới của bạn',
	pwd_edit: "Đổi mật khẩu",
	pwd_edited: "Đã đổi",
	pwd_enter: "Nhập mật khẩu mới.",
	pwd_confirm: "Nhập lại mật khẩu.",
	pwd_invalid: "Mật khẩu: 6 ~ 20 ký tự.",
	pwd_mismatch: "Mật khẩu không khớp.",
	pwd_format: "6 ~ 20 ký tự",
	pwd_apply: ["Đổi", "Xác nhận"],
	pwd_ok: ["Đã đổi mật khẩu. Lần sau dùng mật khẩu mới.",
				"Hãy giữ bí mật mật khẩu."],
	avatar: ["Ảnh (JPG, PNG, GIF, WebP, AVIF, HEIC)", "Không hỗ trợ $ext; chỉ JPG, PNG, GIF, WebP, AVIF & HEIC", "Chọn lại", "Đã tải ảnh đại diện lên"],
	avatar_err: [
		"Định dạng hoặc đuôi tệp không hỗ trợ (JPG, PNG, GIF, WebP, AVIF, HEIC)",
		"Quá 6MB; hãy nén trước",
		"Ảnh không đọc được hoặc bị hỏng",
		"Chuyển HEIC/HEIF thất bại. Thử ảnh khác."
	],
	email_new: "Đổi email",
	email_confirm: 'Xác nhận đổi email thành "$email"?',
	email_invalid: "Email không hợp lệ",
	email_verify: ["Vì an toàn, hãy xác minh email để ", "mở khóa tính năng.", "Xác minh ngay"],
	email_send: "Gửi lại email xác minh?",
	email_sent: ["Đã gửi email. Mở $isp?",
				"Đã gửi email. Hãy kiểm tra hộp thư."],
	email_verified: "Email đã xác minh.",
	pin: ["Mã PIN hỗ trợ: $pin<br><small>(Dùng xác minh danh tính khi liên hệ hỗ trợ.)</small>", "Tải xuống"],
	font: [
		"Phông chữ sang trọng",
		"i/fonts_en.png",
		"Phông chữ Justfont, thương mại và mã nguồn mở.",
		"Giấy phép"
	],
	font_change: 'Đang đổi phông chữ: "$font". Vui lòng chờ.',
	gender_edited: "Đã cập nhật giới tính",
	newsletter_edited: "Đã áp dụng thay đổi",
	lang: "Đang chuyển sang: $lang",
	timezone_edited: 'Đã đặt múi giờ thành "$tz"',
	id: "Hearty ID: ",
	id_edit: "Đổi ID",
	id_public: "ID và biệt danh được công khai",
	id_new: "Nhập ID mới",
	id_format: "4 ~ 20 chữ và số. Chỉ đổi được một lần.",
	id_invalid: "ID không hợp lệ.",
	id_same: "Phải khác ID cũ.",
	id_taken: '<b>"$id"</b> đã có người dùng. Vui lòng chọn ID khác.',
	id_edited: 'Hearty ID của bạn giờ là "<b>$id</b>"',
	id_signout: "Đăng nhập bằng ID mới",
	dl: "Xuất ra tệp TXT",
	dl_pc: 'Mở "<u>www.hearty.me</u>" trên máy tính để tải bản sao lưu.',
	dl_pwd: ["Mật khẩu để giải mã", "Mật khẩu tài khoản (6 ~ 20 ký tự)", "Xuất ra tệp TXT", "Đã bắt đầu xuất", "Đã lưu bản sao vào Tải xuống. Hãy giữ an toàn."],
	dl_fmt: ["Định dạng sao lưu", "Tệp văn bản (.txt)", "Word kèm ảnh (.docx)", "Tiếp theo"],
	dl_doc: ["$posts bài viết, $images ảnh<br>Chuyển đổi mất vài phút đến nửa giờ", "Bắt đầu xuất", "Đang chuyển $done / $total ảnh…", "Đang chuyển đổi…", "Đã lưu Word. Hãy cất giữ cẩn thận.", "Bỏ qua $n ảnh (lỗi tải)", "Xuất bị gián đoạn. Thử lại sau.", "Word chỉ hỗ trợ Chrome/Edge trên máy tính. Đổi trình duyệt hoặc chọn văn bản.", "Ngày xuất: $date · $posts bài viết", "Mật khẩu không đúng.", "Không có bài để xuất", "Xuất ra Word"],
	vip_only: ["Tính năng", " này chỉ dành cho Premium.", "Ưu đãi nâng cấp", "Để sau"],
	suspend: ["Xóa tài khoản? Bạn cũng có thể giữ lại — chúng tôi liên tục thêm tính năng và nhãn dán, biết đâu bạn sẽ quay lại.", "Hoặc đổi ID <u>tại đây</u>", "Xóa tài khoản", "Tạm giữ lại"],
	auth_log: ["Hoạt động gần đây", "$browser, $device", "Tăng cường bảo mật", "//go.hearty.me/hj-sec"],
	redeem: ["Mã quà tặng", "Đổi mã"],
	coupon_ok: ['Đã đổi "$coupon" và mã đang được xét duyệt.',
				"Tín dụng sẽ vào tài khoản trong 3 ngày làm việc sau khi duyệt; xem [Chi tiết gói]."],
	voucher_ok: 'Đổi mã "$code" thành công! Bạn đã nhận được $days ngày VIP, có hiệu lực đến $exp.',
	voucher_invalid: "Mã đã dùng hoặc không hợp lệ.",
	voucher_disqualified: "Mỗi tài khoản một mã dùng thử; bạn đã dùng rồi.",
	voucher_vvip: [
		"Ưu đãi VVIP",
		"Giảm 40% khi gia hạn năm (trả trước)",
		"Mua"
	],
	voucher_ec: [
		"<u>Phiếu mua hàng Hearty Life Shop</u>.",
		"Mua sắm ngay"
	],

	// DOMs
	title: "Tài khoản của tôi",
	tab: ["Tài khoản của tôi", "Chi tiết gói"],
	headline: ["Sách"], // deprecated
	nickname: ["Biệt danh", "Cập nhật"],
	pincode: "Mã PIN hỗ trợ",
	bday: "Ngày sinh",
	email: ["Gửi xác minh", "Gửi lại xác minh", " giây nữa để gửi lại"],
	style: ["Thiết kế", "Tùy chỉnh nhật ký"],
	gender: ["Giới tính", "Nam", "Nữ"],
	phone: ["Điện thoại", "Xác minh số ĐT"],
	pwd: "Mật khẩu",
	pfont: ["Phông chữ bài viết", "Xem trước phông chữ"],
	language: "Ngôn ngữ",
	timezone: "Múi giờ",
	newsletter: ["Bản tin", "Đăng ký (tin tức & câu chuyện)"],
	newsletter_shop: ["Thư từ cửa hàng", "Đăng ký (sản phẩm & khuyến mãi)"],
	rate: ["Yêu thương & Ôm", "Đánh giá 5 sao"],
	misc: "Khác",
	auth: ["Hoạt động", "Xóa"],
	chat: "Trung tâm trợ giúp",
	fonts: [
		"jf Open Huninn", // 0
		"Taipei Sans", // 1
		"jf Open Huninn", // 2
		"jf JinXuan", // 3
		"jf Cream", // 4
		"LXGW WenKai", // 5
		"Yozai Writing", // 6
		"Naikai Writing", // 7
		"Jason Writing A (không hỗ trợ iOS)", // 8
		"Jason Writing B (không hỗ trợ iOS)", // 9
		"Jason Writing C (không hỗ trợ iOS)", // 10
		"Jason Writing D", // 11
		"Jason Writing E", // 12
		"Kurewa Gothic", // 13
		"Nani Writing (không hỗ trợ iOS)", // 14
		"POP Gothic", // 15
		"Star Love Pencil", // 16
		"Genyo Ming", // 17
		"HuiWen MinCho (không hỗ trợ iOS)", // 18
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
	title: "Gói của tôi",
	back: "Quay lại",
	redeem: "Đổi quà tặng",
	buy: ["Dùng thử VIP Premium", "Gia hạn gói"],
	plan: ["Gói của tôi", "Để đổi gói hoặc thẻ, hãy liên hệ chúng tôi kèm Hearty ID.", '"VIP Premium (Dùng thử miễn phí)" là quà tặng miễn phí cho người mới.<br>Đừng lo, bạn sẽ tự động được chuyển về phiên bản Lite miễn phí sau thời gian dùng thử.'],
	order: ["Đơn hàng của tôi"],
	plan_th: ["Trạng thái", "Gói", "Bắt đầu", "Hết hạn", "Hearty Journal "],
	order_th: ["Trạng thái", "Số", "Sản phẩm", "TWD$", "Thanh toán ", "Hóa đơn"],
	order_status: ["Chưa thanh toán", "Đã thanh toán",  "Đã kích hoạt", "Quá hạn", "Đã hủy"],
	plan_status: ["Đang hoạt động", "Đã hết hạn"],
	url: ["Liên kết | Mã QR", "Sao chép"],

	// bill
	fail: [
		"Thanh toán thất bại",
		"Thử lại với thẻ đó hoặc thẻ khác; thường sẽ thành công.",
		"Có thắc mắc? Hãy cho chúng tôi biết."
	],
	fail_info: [
		"Nguyên nhân thường gặp", "Chi tiết",
		"Nhập sai thông tin thẻ", "Sai số thẻ, CVV hoặc ngày hết hạn.",
		"Không đủ số dư", "Hết số dư hoặc hạn mức.",
		"Thẻ không đủ điều kiện", "Thẻ có thể chưa bật giao dịch trực tuyến/quốc tế. Hãy nhờ ngân hàng bật.",
		"Thanh toán bị từ chối", "Hệ thống chống gian lận của ngân hàng có thể từ chối giao dịch bất thường/quốc tế. Hãy nhờ ngân hàng mở khóa."
	],
	fail_btn: [
		"Thử lại",
		"Liên hệ hỗ trợ",
	],


	// thankyou
	thx: [
		"Đặt hàng thành công! Cảm ơn bạn!",
		"Mong được đồng hành lâu dài cùng bạn. Cần gì cứ liên hệ chúng tôi."
	],
	thx_th: [
		"Gói",
		"Thời hạn",
		"ngày",
		"Mã đơn hàng",
		"Ngày",
		"Số tiền",
		"Thanh toán qua",
		"Hóa đơn",
		"Để đổi gói hoặc thẻ, hãy liên hệ chúng tôi kèm Hearty ID."
		//
		// "For monthly plan users, you can cancel your subscription anytime by contacting us with your Hearty ID."
	],
	thx_inv: [
		"Hóa đơn Đài Loan từ Hearty Creative Inc.",
		"Xem"
	],
	thx_btn: [
		"Khảo sát VIP (khách mới)",
		"Chụp màn hình",
		"Về nhật ký"
	]
};

// phone
_h$["pv"] = _h$["pv"] || {
	// JS
	ok: "Đồng ý",
	no: "Hủy",
	signin: ["Đăng nhập", "Hãy đăng nhập trước."],
	format: ["Số quá ngắn.", "Số không hợp lệ.", "Đã đạt giới hạn. Thử lại sau."],
	verify1: ["Xác minh", "Mã xác minh: ", "<br><small>Đã gửi <b>SMS Firebase</b>; đợi 45 giây.</small>", "Đã xác minh $no!"],
	verify2: ["Không nhận được mã?", "Gửi SMS cho chúng tôi để xác minh thủ công (có thể tính cước).", "Gửi", "Xác minh thủ công trong 72 giờ làm việc.", "[Xác minh] Hearty ID: "],
	verify3: ["Không nhận được mã?", "Gửi Hearty ID & số điện thoại để xác minh thủ công.", "Gửi tin nhắn cho chúng tôi"],
	code: ["Mã xác minh SMS", "Thử lại", "Mã gồm 6 chữ số.", "Mã không hợp lệ.", "Mã hết hạn, làm lại nhé."],
	fail: "Google Auth tải lỗi, hãy tải lại trang.",

	// DOMs
	title: "Xác minh số ĐT",
	back: "Tài khoản của tôi",
	verify: ["Xác minh số ĐT", "Số điện thoại của bạn", "Xác minh", "Nhập mã", "Không nhận được SMS?", "Gửi lại", "Thử lại sau 30 giây"]
};

// email
_h$["em"] = _h$["em"] || {
	title: [
		"Hủy đăng ký: Bản tin thành viên",
		"Hủy đăng ký: Bản tin Hearty Life Shop"
	],
	unsubscribe: "Hủy đăng ký",
	ask: [
		"Bạn sẽ không nhận tin nhắn trang web và thông báo bạn qua thư nữa.",
		"Bạn sẽ không nhận tin sản phẩm và khuyến mãi nữa.",
		"Có, hủy đăng ký"
	],
	ok: "Đồng ý",
	back: "Quay lại",
	unsubscribed: 'Đã hủy đăng ký cho "$email". Thay đổi sẽ có hiệu lực từ ngày mai.',
	remarks: [
		"Vẫn nhận thông báo quan trọng (mật khẩu, chính sách, v.v.).",
		"Để ngừng mọi email, hãy xóa tài khoản."
	]
};

// points
_h$["pt"] = _h$["pt"] || {
	// JS
	ok: "Xác nhận",
	no: "Hủy",
	back: "Quay lại",
	close: "Đóng",
	signin: [
		"Đăng nhập",
		"Hãy đăng nhập trước."
	],
	redeem: [
		"Đổi <u>$pkg</u> với $p điểm?",
		'Khi nhấn "Xác nhận", bạn đồng ý với các điều khoản',
		"Không đủ điểm đổi $pkg.",
		"Chưa mở đổi."
	],
	ec_ok: [
		"Phiếu Hearty Life (NT$$amt): <b>$code</b>",
		'Bạn có thể xem lại trong "Lịch sử của tôi". Đừng quên sử dụng trước $exp nhé.'
	],
	vip_ok: [
		"Đổi thành công! $days ngày VIP Premium đến $exp.",
		"Xem ngay"
	],

	// DOMs
	title: "Thưởng Hearty Point",
	points: ["Hearty Point của tôi", "P"],
	coupons: [
		"Lịch sử của tôi",
		"Lịch sử đổi thưởng",
		"Gói",
		"Mã",
		"Ngày tạo",
		"Ngày hết hạn",
		"Đã dùng",
		"Chưa có mã."
	],
	label: [
		"Tốt nhất",
		"Hot"
	],
	use: [
		"Dùng tại cửa hàng"
	],
	agree: ["Hãy đồng ý điều khoản."],
	get: [
		"Cách nhận điểm?",
		"Điểm danh mỗi ngày: nhấn chuông ở góc trên bên phải nhật ký.",
		"Điểm danh ngay"
	],

	// Plans
	pkg_vip14: [
		"Hearty Journal VIP Premium",
		"14 ngày"
	],
	pkg_vip30: [
		"Hearty Journal VIP Premium",
		"30 ngày"
	],
	pkg_ec100: [
		"Phiếu Hearty Life (Kỹ thuật số)",
		"NT$ 100"
	]
};
