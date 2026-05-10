import { useState } from "react";

const MODULES = [
  {
    id: 1,
    title: "Profile Khách Lẻ",
    subtitle: "Nhập liệu & Quản lý thông tin",
    icon: "👤",
    color: "#3b82f6",
    tag: "CƠ BẢN",
    lessons: [
      {
        title: "Màn hình Profile khách lẻ",
        image: "/images/m01_profile_le.jpg",
        imageCaption: "Open: Booker — Form nhập thông tin profile khách lẻ trên NewPMS",
        content: [
          { type: "heading", text: "Profile Khách Lẻ — Các trường thông tin" },
          { type: "intro", text: "Thao tác nhập liệu không thay đổi. Quy trình nhập dữ liệu khách hàng lẻ vẫn được giữ nguyên như hiện tại để đảm bảo sự quen thuộc cho người dùng." },
          { type: "divider", text: "Action Buttons" },
          { type: "point", icon: "🔗", title: "Merge Profile", desc: "Gộp các profile trùng lặp của cùng 1 khách thành 1 profile duy nhất." },
          { type: "point", icon: "📧", title: "Send Email Verification", desc: "Gửi email xác thực tài khoản loyalty đến khách." },
          { type: "divider", text: "Thông tin cột trái" },
          { type: "field", label: "Profile Name", desc: "Họ và tên đầy đủ của khách." },
          { type: "field", label: "Status", desc: "Trạng thái tài khoản loyalty (VD: Not Signed Up, Active...)." },
          { type: "field", label: "Sign Up Date", desc: "Ngày khách đăng ký chương trình loyalty." },
          { type: "field", label: "Booking Progress", desc: "Tiến độ số booking đã thực hiện (VD: 0 %0/1)." },
          { type: "field", label: "Night Progress", desc: "Tiến độ số đêm lưu trú tích lũy (VD: 0 %0/1)." },
          { type: "field", label: "Loyalty Review Date", desc: "Ngày xem xét lại cấp độ loyalty của khách." },
          { type: "field", label: "Title Type", desc: "Danh xưng của khách (Mr, Ms, Mrs...)." },
          { type: "field", label: "Address", desc: "Địa chỉ đầy đủ: Street, City, State, ZIP, Country." },
          { type: "divider", text: "Thông tin cột phải" },
          { type: "field", label: "Mobile", desc: "Số điện thoại liên lạc của khách." },
          { type: "field", label: "CMND/CCCD/HC", desc: "Số giấy tờ tùy thân — bắt buộc nhập khi checkin." },
          { type: "field", label: "Email", desc: "Email của khách — dùng để gửi xác nhận booking và loyalty." },
          { type: "field", label: "Identity Proof", desc: "Upload ảnh CMND/CCCD mặt trước. Có thể edit, download, delete." },
          { type: "field", label: "Identity Proof (2)", desc: "Upload ảnh CMND/CCCD mặt sau." },
          { type: "field", label: "Verification Status", desc: "Trạng thái xác minh giấy tờ của khách." },
          { type: "warn", text: "Nhớ bấm Save & Close sau khi nhập đầy đủ thông tin. Bấm Discard để hủy thay đổi." },
        ],
        hasDemo: true,
      },
    ],
  },
  {
    id: 2,
    title: "Profile Khach Cong Ty",
    subtitle: "B2B — VAT, Cong no & Han muc",
    icon: "🏢",
    color: "#8b5cf6",
    tag: "B2B",
    lessons: [
      {
        title: "Thong tin chinh cong ty",
        image: "/images/m02_profile_cty_main.jpg",
        imageCaption: "Profile Khach Cong Ty — Tab Contacts & Addresses",
        content: [
          { type: "heading", text: "Profile Khach Cong Ty — Thong tin chinh" },
          { type: "intro", text: "Cac cong ty can nhap day du thong tin de phuc vu xuat hoa don va quan ly cong no." },
          { type: "divider", text: "Thong tin co ban" },
          { type: "field", label: "Address", desc: "Dia chi day du: Street, City, ZIP, State, Country." },
          { type: "field", label: "Tax ID", desc: "Ma so thue — bat buoc de xuat hoa don VAT." },
          { type: "field", label: "Phone / Mobile", desc: "So dien thoai co dinh va di dong." },
          { type: "field", label: "Email", desc: "Email cong ty — gui invoice va xac nhan booking." },
          { type: "field", label: "Website", desc: "Website cua cong ty (khong bat buoc)." },
          { type: "field", label: "Language", desc: "Ngon ngu giao tiep (mac dinh: English US)." },
          { type: "field", label: "Tags", desc: "Nhan phan loai: B2B, VIP, Consulting..." },
          { type: "point", icon: "➕", title: "Contacts & Addresses", desc: "Them danh sach contact nguoi dai dien cua cong ty." },
          { type: "point", icon: "💰", title: "Sales & Invoiced", desc: "Tong so sales va tong so tien da invoiced." },
        ],
        hasDemo: false,
      },
      {
        title: "Tab Sales & Purchase",
        image: "/images/m02_profile_cty_sales.jpg",
        imageCaption: "Profile Khach Cong Ty — Tab Sales & Purchase",
        content: [
          { type: "heading", text: "Tab Sales & Purchase" },
          { type: "divider", text: "SALES" },
          { type: "field", label: "Salesperson", desc: "Nhan vien sales phu trach cong ty nay." },
          { type: "field", label: "Payment Terms", desc: "Thoi han thanh toan (VD: 7 Days)." },
          { type: "field", label: "Payment Method", desc: "Hinh thuc thanh toan (VD: Manual Payment Bank)." },
          { type: "divider", text: "AGENT" },
          { type: "field", label: "Agent", desc: "Checkbox — danh dau neu la agent booking." },
          { type: "field", label: "Is OTA", desc: "Checkbox — danh dau neu la kenh OTA." },
          { type: "field", label: "Is MVillage Issue", desc: "Checkbox — danh dau neu la issue noi bo MVillage." },
          { type: "field", label: "Agent in charge", desc: "Nhan vien phu trach agent nay." },
          { type: "warn", text: "Payment Terms va Payment Method anh huong den quy trinh thanh toan cong no. Can nhap dung truoc khi tao booking B2B." },
          { type: "divider", text: "QUY DINH CONG NO B2B" },
          { type: "steps", items: [
            "Sale tao profile cong ty len he thong va nhap day du thong tin.",
            "Sau khi tao xong, Sale lien he Ke toan de xin cap ma khach (Account Receivable Code).",
            "Ke toan cap ma khach va nhap vao profile cong ty — tu do cong ty duoc phep cong no tren he thong.",
          ]},
          { type: "card2", items: [
            { title: "✅ Co ma khach (AR Code)", desc: "Cong ty duoc phep cong no. Balance co the > 0 khi checkout. Thanh toan sau theo Payment Terms da thoa thuan." },
            { title: "❌ Chua co ma khach", desc: "Cong ty KHONG duoc phep cong no. Bat buoc phai thanh toan 100% truoc thoi diem Checkin." },
          ]},
        ],
        hasDemo: true,
      },
    ],
  },

  {
    id: 3,
    title: "Booking & Folio",
    subtitle: "Short Stay, Service Date & Folio",
    icon: "📋",
    color: "#0ea5e9",
    tag: "CORE",
    lessons: [
      {
        title: "Khai niem moi trong NewPMS",
        content: [
          { type: "heading", text: "Cac Khai Niem Moi — NewPMS Odoo 18" },
          { type: "intro", text: "Mot so khai niem va cach hoat dong duoc thay doi so voi he thong cu. Team van hanh can nam ro truoc khi tao booking." },
          { type: "divider", text: "Booking Type" },
          { type: "point", icon: "🔄", title: "Khong con man hinh tao Long Stay rieng", desc: "He thong moi su dung chung 1 man hinh tao booking cho tat ca loai hinh luu tru." },
          { type: "point", icon: "☑️", title: "Phan biet bang Checkbox", desc: "Tich chon Is Long Stay hoac Is Mid Stay de phan loai loai hinh luu tru ngay tren man hinh booking." },
          { type: "card2", items: [
            { title: "Is Mid Stay", desc: "Danh dau khi khach luu tru theo hinh thuc Mid Stay (luu tru trung han)." },
            { title: "Is Long Stay", desc: "Danh dau khi khach luu tru theo hinh thuc Long Stay (luu tru dai han)." },
          ]},
          { type: "divider", text: "Service Start — Service End" },
          { type: "point", icon: "📅", title: "Service Start / Service End", desc: "Quy dinh ngay su dung cua tung dich vu. Moi dich vu (phong, BF, minibar...) deu co Service Start va Service End rieng — xac dinh chinh xac thoi diem ghi nhan doanh thu." },
          { type: "divider", text: "Actual Checkin — Checkout" },
          { type: "point", icon: "🕐", title: "Actual Checkin - Checkout", desc: "Ngay gio checkin va checkout THUC TE cua khach — duoc he thong ghi nhan tu dong khi Ops bam nut Checkin/Checkout. Khac voi Expected Checkin-Checkout la ngay gio du kien khi tao booking." },
          { type: "divider", text: "Folio" },
          { type: "point", icon: "💼", title: "Guest Folio", desc: "Guest Folio la cong cu quan ly TAT CA cac khoan charge va payment cua khach luu tru. Moi reservation tu dong tao 1 Folio chinh theo main guest. Sau khi Checkin, moi thao tac (phat sinh, thanh toan) deu thuc hien tren Folio." },
          { type: "divider", text: "Deposit" },
          { type: "point", icon: "💰", title: "Deposit", desc: "Ghi nhan thanh toan truoc checkin. Deposit duoc thu de dam bao khach co kha nang thanh toan — bat buoc 100% truoc thoi diem Checkin." },
        ],
        hasDemo: false,
      },
      {
        title: "Man hinh tao Booking",
        image: "/images/m03_booking_main.jpg",
        imageCaption: "Booking HR00495 — trang thai Confirm, cac action buttons va thong tin chinh",
        content: [
          { type: "heading", text: "Man Hinh Tao Booking" },
          { type: "divider", text: "Action Buttons" },
          { type: "point", icon: "💰", title: "Deposit", desc: "Thu tien dat coc — chi thuc hien duoc khi booking o trang thai Confirm." },
          { type: "point", icon: "❌", title: "Cancel Reservation", desc: "Huy booking va release inventory phong." },
          { type: "point", icon: "🔑", title: "Checkin", desc: "Thuc hien checkin chinh thuc cho khach." },
          { type: "point", icon: "🚪", title: "Change Room", desc: "Chuyen phong khi khach dang trong trang thai Checkin." },
          { type: "point", icon: "🚫", title: "No Show", desc: "Xu ly khi khach khong den theo booking." },
          { type: "divider", text: "Trang thai Booking" },
          { type: "card2", items: [
            { title: "Draft", desc: "Booking moi tao, chua xac nhan. Chua the add deposit." },
            { title: "Confirm", desc: "Booking da xac nhan. Bat dau add deposit va chuan bi checkin." },
          ]},
          { type: "divider", text: "Thong tin chinh" },
          { type: "field", label: "Booker", desc: "Ten nguoi dat phong." },
          { type: "field", label: "Date Ordered", desc: "Ngay gio tao booking." },
          { type: "field", label: "Hotel", desc: "Chi nhanh khach san." },
          { type: "field", label: "Pricelist", desc: "Bang gia ap dung cho booking nay." },
          { type: "field", label: "Source", desc: "Nguon booking (Internal Reservation, OTA, Walkin...)." },
          { type: "field", label: "Group ID", desc: "Ma nhom — dien khi khach di nhom co nhieu phong." },
          { type: "field", label: "Note", desc: "Ghi chu them cho booking." },
          { type: "field", label: "Person", desc: "So luong nguoi: Adults, Children, Young Child, Babies." },
          { type: "field", label: "VAT?", desc: "Checkbox — tich neu khach can xuat hoa don VAT." },
          { type: "field", label: "Via", desc: "Kenh dat phong (Direct, OTA...)." },
          { type: "field", label: "Direct Channel", desc: "Kenh truc tiep cu the (BOD, OPS, FO...)." },
          { type: "field", label: "Purpose of stay", desc: "Muc dich luu tru cua khach." },
          { type: "field", label: "Is Mid Stay / Is Long Stay", desc: "Checkbox phan loai loai hinh luu tru." },
          { type: "field", label: "Actual Loyalty Nights", desc: "So dem loyalty thuc te tich luy." },
        ],
        hasDemo: false,
      },
      {
        title: "Tab Booking Details",
        image: "/images/m03_booking_details.jpg",
        imageCaption: "Booking Details — Expected/Actual Checkin-Checkout, bang Room Booking va Advance Service Lines",
        content: [
          { type: "heading", text: "Tab Booking Details" },
          { type: "divider", text: "Thong tin thoi gian" },
          { type: "field", label: "Expected Checkin - Checkout", desc: "Ngay gio du kien checkin va checkout khi tao booking." },
          { type: "field", label: "Actual Checkin - Checkout", desc: "Ngay gio thuc te — tu dong cap nhat khi Ops bam Checkin/Checkout." },
          { type: "divider", text: "Bang Room Booking" },
          { type: "field", label: "Guest Name", desc: "Ten khach luu tru trong phong." },
          { type: "field", label: "Status", desc: "Trang thai xac thuc giay to (Not Signed, Verified...)." },
          { type: "field", label: "Room Type / Room Number", desc: "Loai phong va so phong cu the." },
          { type: "field", label: "Service Start / Service End", desc: "Ngay gio bat dau va ket thuc su dung phong." },
          { type: "field", label: "Number of nights", desc: "So dem luu tru." },
          { type: "field", label: "Price / Taxes / Subtotal", desc: "Gia phong, thue, tong tien sau thue." },
          { type: "divider", text: "Cac Tab khac" },
          { type: "point", icon: "📋", title: "Rate Plan", desc: "Xem chi tiet goi gia dang ap dung cho booking." },
          { type: "point", icon: "➕", title: "Add-on Services", desc: "Cac dich vu ban kem theo booking (BF, airport transfer...)." },
          { type: "point", icon: "💰", title: "Deposit Details", desc: "Lich su cac giao dich deposit cua booking nay." },
          { type: "point", icon: "👥", title: "Guest in room", desc: "Danh sach tat ca khach trong phong (main guest + sharers)." },
          { type: "warn", text: "Sau khi Checkin, booking bi KHOA. Moi thao tac (charge, payment) phai thuc hien tren FOLIO." },
        ],
        hasDemo: true,
      },
      {
        title: "Advance Service Lines",
        image: "/images/m03_advance_service.jpg",
        imageCaption: "Advance Service Lines — danh sach dich vu ban kem theo booking: BF, Pick up/Drop off, Promotion",
        content: [
          { type: "heading", text: "Advance Service Lines" },
          { type: "intro", text: "Advance Service Lines la cac dich vu ban kem theo booking truoc khi checkin (BF, airport transfer...). Moi dich vu deu co Service Start va Service End quy dinh ngay su dung thuc te." },
          { type: "divider", text: "Cac cot thong tin" },
          { type: "field", label: "Product", desc: "Ten dich vu (TTD An sang - 1Pax, Pick up/Drop off...)." },
          { type: "field", label: "Description", desc: "Mo ta chi tiet dich vu." },
          { type: "field", label: "Category", desc: "Nhom phan loai dich vu." },
          { type: "field", label: "Quantity", desc: "So luong dich vu." },
          { type: "field", label: "Unit Price", desc: "Don gia chua thue." },
          { type: "field", label: "Service Start / Service End", desc: "Ngay gio bat dau va ket thuc su dung dich vu — xac dinh chinh xac thoi diem ghi nhan doanh thu." },
          { type: "field", label: "Number of nights", desc: "So dem ap dung (voi dich vu tinh theo dem)." },
          { type: "field", label: "Taxes", desc: "Thue ap dung (VD: 8% - 29%)." },
          { type: "field", label: "Disc.%", desc: "Phan tram giam gia." },
          { type: "field", label: "Subtotal", desc: "Tong tien sau thue va giam gia." },
          { type: "divider", text: "Quy dinh Service Start — Service End" },
          { type: "card2", items: [
            { title: "An sang (BF)", desc: "Tach tung dong tuong ung voi tung ngay su dung.\nVD: LOS 2 dem → 2 dong BF, moi dong 1 ngay rieng." },
            { title: "Spa / Minibar / Dich vu trong ngay", desc: "Quy dinh khung gio su dung cu the.\nVD: Minibar 05/09 14:00 → 05/10 12:00." },
          ]},
          { type: "warn", text: "Service Start/End anh huong truc tiep den thoi diem ghi nhan doanh thu khi chay Night Audit. Nhap sai se gay sai lech bao cao." },
          { type: "divider", text: "PROMOTION" },
          { type: "point", icon: "🏷️", title: "Promotion Code", desc: "Nhap ma khuyen mai neu co. He thong tu dong tinh Discount Value tuong ung." },
        ],
        hasDemo: false,
      },
      {
        title: "Cac thao tac nhanh",
        content: [
          { type: "heading", text: "Cac Thao Tac Duoc Cai Thien — Truy Cap Nhanh Hon" },
          { type: "intro", text: "NewPMS Odoo 18 cai thien mot so thao tac giup Ops thuc hien nhanh hon ma khong can navigate qua nhieu buoc." },
          { type: "divider", text: "1. Mo Reservation Detail tu Dashboard" },
          { type: "point", icon: "↗️", title: "Nut Expand goc phai", desc: "Tu Management Dashboard, click vao booking tren calendar → popup hien ra → bam nut Expand (mui ten goc phai tren) de mo trang Reservation Detail day du ma khong can thoat khoi Dashboard." },
        ],
        image1: "/images/m03_quick_expand.jpg",
        image1Caption: "Nut Expand goc phai — truy cap nhanh vao Reservation Detail tu Dashboard",
        content2: [
          { type: "divider", text: "2. Thay doi phong truoc Checkin" },
          { type: "point", icon: "✏️", title: "Edit truc tiep tren dong Room Booking", desc: "Khi booking dang o trang thai Confirm (chua checkin), Ops co the click truc tiep vao o Room Number tren tab Booking Details de thay doi phong — khong can dung nut Change Room." },
          { type: "warn", text: "Luu y: Sau khi da Checkin, phai dung nut Change Room tren Folio — khong the edit truc tiep nua." },
        ],
        image2: "/images/m03_quick_room.jpg",
        image2Caption: "Edit truc tiep Room Number tren Booking Details — dropdown chon phong trong",
        content3: [
          { type: "divider", text: "3. Them moi Advance Service" },
          { type: "point", icon: "➕", title: "Add a line truc tiep", desc: "Tren tab Booking Details → Advance Service Lines → click Add a line → chon Product tu dropdown → dien Service Start/End, Quantity → luu lai." },
          { type: "point", icon: "🔍", title: "Tim kiem dich vu", desc: "Go ten dich vu vao dropdown de loc nhanh. Neu khong tim thay, chon Search More de xem toan bo danh sach." },
        ],
        image3: "/images/m03_quick_addline.jpg",
        image3Caption: "Add a line — dropdown chon dich vu (BF, minibar, spa...) voi chuc nang Search More",
        content4: [],
        hasDemo: false,
      },
    ],
  },

  {
    id: 4,
    title: "Deposit",
    subtitle: "Đặt cọc, Hoàn tiền & Cancel",
    icon: "💰",
    color: "#10b981",
    tag: "CORE",
    lessons: [
      {
        title: "Quy định Deposit",
        content: [
          { type: "heading", text: "Deposit — Quy định & Xử lý" },
          { type: "point", icon: "⚙️", title: "Cấu hình", desc: "Dựa vào hình thức thuê và đối tượng khách lẻ. Hệ thống ghi nhận deposit vào mã khách lẻ chi nhánh." },
          { type: "point", icon: "📅", title: "Thời điểm", desc: "Deposit chỉ được thêm vào booking tại thời điểm Confirm." },
          { type: "warn", text: "Bắt buộc phải là 100% trước thời điểm Checkin." },
          { type: "point", icon: "🏦", title: "Journal", desc: "Được cấu hình sẵn theo chi nhánh và hình thức thanh toán. User phải chọn đúng hình thức khi add manual." },
        ],
        hasDemo: true,
      },
      {
        title: "Huỷ & Hoàn Deposit",
        content: [
          { type: "heading", text: "Xử lý Huỷ — Hoàn Deposit" },
          { type: "point", icon: "📜", title: "Nguyên tắc", desc: "Deposit được hoàn theo từng giao dịch khách đã thanh toán, không hỗ trợ điều chỉnh số tiền hoàn." },
          { type: "point", icon: "💻", title: "Xử lý", desc: "Thực hiện hoàn deposit sẽ do hệ thống xử lý." },
          { type: "steps", items: ["Thực hiện thao tác Refund deposit", "Chọn giao dịch muốn hoàn lại", "Bấm Confirm", "Thực hiện Cancel reservation để release inventory"] },
        ],
        hasDemo: false,
      },
    ],
  },
  {
    id: 5,
    title: "No Show",
    subtitle: "Fully & Partial No Show",
    icon: "❌",
    color: "#ef4444",
    tag: "NGHIỆP VỤ",
    lessons: [
      {
        title: "Xử lý No Show",
        content: [
          { type: "heading", text: "Xử lý No Show" },
          { type: "point", icon: "🔍", title: "Xác định", desc: "Ops cần xác định khách no show 1 đêm hay toàn bộ hành trình." },
          { type: "point", icon: "💳", title: "Thao tác", desc: "Sử dụng charge phí no show để xử lý." },
          { type: "point", icon: "📅", title: "Điều chỉnh", desc: "Điều chỉnh giảm tiền room cho phù hợp sau khi xác định phí no show." },
          { type: "divider", text: "Các loại No Show" },
          { type: "card2", items: [
            { title: "Fully No Show", desc: "Chọn Mark Booking Fully No Show → nhập No-Show Fee → Confirm → Night Audit ghi nhận revenue và đối soát với deposit." },
            { title: "Partial No Show", desc: "Chọn Mark Booking Partial No Show → nhập No-Show Fee + Guest Arrival Date → hệ thống tách booking thành 2 phần." },
          ]},
        ],
        hasDemo: false,
      },
    ],
  },
  {
    id: 6,
    title: "Check-in & Check-out",
    subtitle: "Quy trình nhận & trả phòng",
    icon: "🔑",
    color: "#f59e0b",
    tag: "CORE",
    lessons: [
      {
        title: "Quy trình Check-in",
        content: [
          { type: "heading", text: "Quy trình Check-in" },
          { type: "steps", items: [
            "Chuẩn bị (Arrival Day) — Ops đổ báo cáo Guest arrival report để nắm số lượng khách và booking checkin trong ngày.",
            "Kiểm tra Deposit — Kiểm tra số tiền deposit đã đủ hay chưa. Nếu chưa, yêu cầu hoàn tất thu deposit trước khi checkin.",
            "Thực hiện Checkin — Bấm checkin để hệ thống lưu Actual checkin. Thời gian lưu trú chính thức bắt đầu được ghi nhận.",
            "Sau Checkin — Booking bị khóa thao tác. Mọi tác vụ sau đó (phát sinh, thanh toán) thực hiện trực tiếp trên Folio.",
          ]},
        ],
        hasDemo: true,
      },
    ],
  },
  {
    id: 7,
    title: "Charge & Payment",
    subtitle: "Debit, Credit & Ghi nhận dịch vụ",
    icon: "💳",
    color: "#6366f1",
    tag: "CORE",
    lessons: [
      {
        title: "Debit & Credit",
        content: [
          { type: "heading", text: "Debit — Credit" },
          { type: "intro", text: "Financials work solely in terms of debits and credits to guest folios." },
          { type: "card2", items: [
            { title: "➕ Debit (Post a Charge)", desc: "Giao dịch CỘNG vào folio balance. Khách tiêu dùng dịch vụ và nợ khách sạn.\nVí dụ: Restaurant Dinner charging to account." },
            { title: "➖ Credit (Post a Payment)", desc: "Giao dịch TRỪ khỏi folio balance. Khách thanh toán hoặc điều chỉnh folio.\nVí dụ: Cash payments or folio adjustments." },
          ]},
        ],
        hasDemo: false,
      },
      {
        title: "Ghi nhận dịch vụ phát sinh",
        content: [
          { type: "heading", text: "Charge & Payment" },
          { type: "intro", text: "Cách ghi nhận dịch vụ phát sinh lên booking:" },
          { type: "steps", items: [
            "Chọn dịch vụ — Chọn dịch vụ mà khách cần sử dụng hoặc mua trực tiếp trên hệ thống.",
            "Điền thông tin — Cập nhật ngày sử dụng, số lượng và điều chỉnh giá bán nếu cần thiết.",
            "Kiểm tra Folio — Kiểm tra lại Folio-Booking để xác nhận thay đổi về line service và balance.",
          ]},
          { type: "warn", text: "Khách pay ngay: add payment vào folio. Khách chưa pay: không cần thêm thao tác." },
        ],
        hasDemo: true,
      },
    ],
  },
  {
    id: 8,
    title: "Night Audit",
    subtitle: "Chốt doanh thu & Báo cáo",
    icon: "🌙",
    color: "#0f6e56",
    tag: "CUỐI NGÀY",
    lessons: [
      {
        title: "Night Audit đêm 1",
        content: [
          { type: "heading", text: "Night Audit — Đêm Lưu Trú 1" },
          { type: "point", icon: "📄", title: "Ghi nhận Doanh thu", desc: "Doanh thu phát sinh trong 1 ngày được ghi nhận là 01 Invoice." },
          { type: "point", icon: "💼", title: "Nguyên tắc Đối soát", desc: "Invoice được đối soát với Deposit → Payment của Folio. Luôn ưu tiên đối soát với Deposit." },
          { type: "divider", text: "Chi tiết doanh thu" },
          { type: "point", icon: "🏨", title: "Tiền phòng", desc: "Tính trên 1 đêm lưu trú → 1 Invoice đối soát với Deposit." },
          { type: "point", icon: "✅", title: "Dịch vụ đã thanh toán", desc: "Ghi nhận 1 Invoice và đối soát với Payment." },
          { type: "point", icon: "⏳", title: "Dịch vụ chưa thanh toán", desc: "Ghi nhận 1 Invoice và chưa có Payment gắn liền." },
        ],
        hasDemo: true,
      },
      {
        title: "Nguyên tắc chạy Night Audit",
        content: [
          { type: "heading", text: "Night Audit — Nguyên tắc" },
          { type: "point", icon: "🕐", title: "Khung thời gian", desc: "Chạy cho khoảng ngày quá khứ, tương lai." },
          { type: "point", icon: "🔒", title: "Lock transaction", desc: "Hệ thống lock transaction khi chạy doanh thu." },
          { type: "point", icon: "✅", title: "Validation", desc: "Các step validation trước khi chốt doanh thu." },
          { type: "point", icon: "📊", title: "Báo cáo", desc: "Tải báo cáo sau khi chạy thành công." },
        ],
        hasDemo: true,
      },
    ],
  },
  {
    id: 9,
    title: "Room Move & Điều chỉnh",
    subtitle: "Đổi phòng, Upgrade/Downgrade",
    icon: "🔄",
    color: "#ec4899",
    tag: "NGHIỆP VỤ",
    lessons: [
      {
        title: "Room Move",
        content: [
          { type: "heading", text: "Room Move" },
          { type: "point", icon: "📅", title: "Booking đang Confirm", desc: "User chỉ cần edit lại room trên booking, không cần dùng nút Change Room." },
          { type: "point", icon: "🚪", title: "Booking đang Check-in", desc: "Sử dụng nút Change Room: Hệ thống tự động tech booking, giảm invoice booking cũ và tăng invoice booking mới." },
          { type: "card2", items: [
            { title: "⬆️ Upgrade", desc: "Ops cần xử lý add chi phí nâng cấp phát sinh." },
            { title: "⬇️ Downgrade", desc: "Ops cần điều chỉnh giảm chi phí tương ứng." },
          ]},
        ],
        hasDemo: true,
      },
      {
        title: "Điều chỉnh Booking & Folio",
        content: [
          { type: "heading", text: "Điều chỉnh Booking — Folio" },
          { type: "intro", text: "Các trường hợp điều chỉnh trên booking:" },
          { type: "point", icon: "👤", title: "Thông tin guest - booker", desc: "Cập nhật chi tiết người đặt và khách lưu trú." },
          { type: "point", icon: "🏢", title: "Chi nhánh - loại phòng", desc: "Thay đổi địa điểm hoặc hạng phòng lưu trú." },
          { type: "point", icon: "💳", title: "Tiền phòng đã mua", desc: "Điều chỉnh giá trị thanh toán cho dịch vụ lưu trú chính." },
          { type: "point", icon: "🛒", title: "Dịch vụ khác đã mua", desc: "Quản lý các phụ phí và dịch vụ đi kèm trên folio." },
        ],
        hasDemo: true,
      },
    ],
  },
  {
    id: 10,
    title: "Booking B2B & Tách Folio",
    subtitle: "Công ty chi trả & Split/Transfer",
    icon: "🤝",
    color: "#b45309",
    tag: "B2B",
    lessons: [
      {
        title: "Folio cho Booking B2B",
        content: [
          { type: "heading", text: "Xử lý Folio cho Booking B2B" },
          { type: "point", icon: "📋", title: "Thông tin cần có", desc: "Phân loại công nợ, tên, địa chỉ, MST, email, thời hạn thanh toán, hạn mức." },
          { type: "card2", items: [
            { title: "Không nợ", desc: "Yêu cầu deposit, balance = 0 khi checkout." },
            { title: "Có nợ", desc: "Xử lý ngược lại — không cần deposit trước." },
          ]},
          { type: "divider", text: "Dấu hiệu nhận biết folio công ty" },
          { type: "point", icon: "🏢", title: "Folio công ty chi trả", desc: "Gán Company invoice, công nợ ghi về công ty, xuất hoá đơn về công ty." },
          { type: "point", icon: "👤", title: "Dịch vụ khách tự chi trả", desc: "Tạo folio riêng, đối tượng thanh toán là khách." },
        ],
        hasDemo: true,
      },
      {
        title: "Tách gộp Folio",
        content: [
          { type: "heading", text: "Tách gộp Folio — Split & Transfer" },
          { type: "card2", items: [
            { title: "Tách folio cùng 1 khách", desc: "1. Tạo folio 2 cùng thông tin khách\n2. Transfer 1 phần charge ra khỏi folio 1\n3. Transfer ngược về nếu cần\n4. Payment cho nhiều folio" },
            { title: "Transfer đi nhóm", desc: "1. Transfer 1 phần charge qua folio booking khác\n2. Transfer ngược về nếu cần" },
          ]},
        ],
        hasDemo: true,
      },
    ],
  },
];

const TAG_COLORS = {
  "CƠ BẢN": { bg: "#e0f2fe", text: "#0369a1" },
  "B2B": { bg: "#ede9fe", text: "#6d28d9" },
  "CORE": { bg: "#dcfce7", text: "#15803d" },
  "NGHIỆP VỤ": { bg: "#fee2e2", text: "#dc2626" },
  "CUỐI NGÀY": { bg: "#f3e8ff", text: "#7e22ce" },
};

function VideoPlaceholder() {
  return (
    <div style={{ background:"#0f172a", borderRadius:12, padding:"32px 20px", textAlign:"center", border:"2px dashed #334155", marginTop:20 }}>
      <div style={{ fontSize:40, marginBottom:10 }}>🎬</div>
      <div style={{ color:"#94a3b8", fontSize:14, fontWeight:600 }}>Demo thao tác</div>
      <div style={{ color:"#475569", fontSize:12, marginTop:6 }}>Video hướng dẫn sẽ được cập nhật sau</div>
    </div>
  );
}

function renderContent(items) {
  return items.map((item, i) => {
    if (item.type === "heading") return (
      <h2 key={i} style={{ fontSize:22, fontWeight:700, color:"#0f172a", marginBottom:20, paddingBottom:10, borderBottom:"2px solid #e2e8f0" }}>{item.text}</h2>
    );
    if (item.type === "intro") return (
      <p key={i} style={{ color:"#475569", fontSize:14, marginBottom:16, fontStyle:"italic" }}>{item.text}</p>
    );
    if (item.type === "point") return (
      <div key={i} style={{ display:"flex", gap:12, marginBottom:14, padding:"12px 14px", background:"#f8fafc", borderRadius:10, border:"1px solid #e2e8f0" }}>
        <span style={{ fontSize:20, flexShrink:0 }}>{item.icon}</span>
        <div>
          <div style={{ fontWeight:600, color:"#1e293b", fontSize:14, marginBottom:3 }}>{item.title}</div>
          <div style={{ color:"#64748b", fontSize:13, lineHeight:1.6 }}>{item.desc}</div>
        </div>
      </div>
    );
    if (item.type === "warn") return (
      <div key={i} style={{ background:"#fff7ed", border:"1px solid #fed7aa", borderRadius:10, padding:"12px 14px", marginBottom:14, color:"#9a3412", fontSize:13, display:"flex", gap:8, alignItems:"flex-start" }}>
        <span>⚠️</span><span><strong>Lưu ý:</strong> {item.text}</span>
      </div>
    );
    if (item.type === "divider") return (
      <div key={i} style={{ margin:"18px 0 14px", display:"flex", alignItems:"center", gap:10 }}>
        <div style={{ flex:1, height:1, background:"#e2e8f0" }} />
        <span style={{ fontSize:12, color:"#94a3b8", fontWeight:600, letterSpacing:"0.5px", whiteSpace:"nowrap" }}>{item.text}</span>
        <div style={{ flex:1, height:1, background:"#e2e8f0" }} />
      </div>
    );
    if (item.type === "steps") return (
      <div key={i} style={{ marginBottom:14 }}>
        {item.items.map((s, j) => (
          <div key={j} style={{ display:"flex", gap:12, marginBottom:10, alignItems:"flex-start" }}>
            <div style={{ width:24, height:24, borderRadius:"50%", background:"#3b82f6", color:"white", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, flexShrink:0, marginTop:1 }}>{j+1}</div>
            <div style={{ color:"#334155", fontSize:13.5, lineHeight:1.6, paddingTop:2 }}>{s}</div>
          </div>
        ))}
      </div>
    );
    if (item.type === "card2") return (
      <div key={i} style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:14 }}>
        {item.items.map((c, j) => (
          <div key={j} style={{ background:"#f1f5f9", borderRadius:10, padding:"14px", border:"1px solid #e2e8f0" }}>
            <div style={{ fontWeight:700, color:"#1e293b", fontSize:13, marginBottom:6 }}>{c.title}</div>
            <div style={{ color:"#64748b", fontSize:12.5, lineHeight:1.6, whiteSpace:"pre-line" }}>{c.desc}</div>
          </div>
        ))}
      </div>
    );
    if (item.type === "field") return (
      <div key={i} style={{ display:"flex", gap:0, marginBottom:8, padding:"9px 14px", background:"#f8fafc", borderRadius:8, border:"1px solid #e2e8f0" }}>
        <div style={{ minWidth:160, fontWeight:600, color:"#374151", fontSize:13 }}>{item.label}</div>
        <div style={{ color:"#6b7280", fontSize:13, lineHeight:1.5 }}>{item.desc}</div>
      </div>
    );
    return null;
  });
}

export default function App() {
  const [view, setView] = useState("home"); // home | module | lesson
  const [activeModule, setActiveModule] = useState(null);
  const [activeLesson, setActiveLesson] = useState(0);

  // HOME
  if (view === "home") return (
    <div style={{ minHeight:"100vh", background:"#f8fafc", fontFamily:"'Segoe UI',system-ui,sans-serif" }}>
      {/* Header */}
      <div style={{ background:"#0f172a", padding:"0 32px", height:60, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:32, height:32, background:"linear-gradient(135deg,#3b82f6,#06b6d4)", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", fontSize:16 }}>⚡</div>
          <div>
            <div style={{ color:"white", fontSize:14, fontWeight:700 }}>NewPMS Training</div>
            <div style={{ color:"#38bdf8", fontSize:9, letterSpacing:"1.5px", fontFamily:"monospace" }}>ODOO 18 · VẬN HÀNH</div>
          </div>
        </div>
        <div style={{ fontSize:12, color:"#64748b" }}>{MODULES.length} module · {MODULES.reduce((a,m) => a+m.lessons.length, 0)} bài học</div>
      </div>

      {/* Hero */}
      <div style={{ background:"linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%)", padding:"48px 32px 40px", textAlign:"center" }}>
        <div style={{ fontSize:36, marginBottom:12 }}>🎓</div>
        <h1 style={{ color:"white", fontSize:28, fontWeight:800, marginBottom:8, letterSpacing:"-0.5px" }}>Training NewPMS Odoo 18</h1>
        <p style={{ color:"#94a3b8", fontSize:15, maxWidth:480, margin:"0 auto" }}>Hướng dẫn vận hành hệ thống quản lý khách sạn — dành cho team Front Office & Vận hành</p>
      </div>

      {/* Grid */}
      <div style={{ maxWidth:960, margin:"0 auto", padding:"32px 24px" }}>
        <div style={{ fontSize:13, color:"#64748b", fontWeight:600, letterSpacing:"0.5px", marginBottom:16, textTransform:"uppercase" }}>Chọn module để bắt đầu</div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:16 }}>
          {MODULES.map(m => {
            const tag = TAG_COLORS[m.tag] || { bg:"#f1f5f9", text:"#475569" };
            return (
              <div key={m.id} onClick={() => { setActiveModule(m); setActiveLesson(0); setView("module"); }}
                style={{ background:"white", borderRadius:14, padding:"20px", cursor:"pointer", border:"1px solid #e2e8f0", transition:"all 0.2s", boxShadow:"0 1px 3px rgba(0,0,0,0.06)" }}
                onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow=`0 8px 24px rgba(0,0,0,0.1)`; e.currentTarget.style.borderColor=m.color; }}
                onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 1px 3px rgba(0,0,0,0.06)"; e.currentTarget.style.borderColor="#e2e8f0"; }}
              >
                <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:12 }}>
                  <div style={{ width:44, height:44, borderRadius:12, background:`${m.color}15`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>{m.icon}</div>
                  <span style={{ fontSize:10, fontWeight:700, padding:"3px 8px", borderRadius:4, background:tag.bg, color:tag.text, letterSpacing:"0.5px" }}>{m.tag}</span>
                </div>
                <div style={{ fontWeight:700, color:"#0f172a", fontSize:15, marginBottom:4 }}>{m.title}</div>
                <div style={{ color:"#64748b", fontSize:12.5, marginBottom:12 }}>{m.subtitle}</div>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                  <span style={{ fontSize:12, color:"#94a3b8" }}>{m.lessons.length} bài học</span>
                  <span style={{ fontSize:12, color:m.color, fontWeight:600 }}>Bắt đầu →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  // MODULE VIEW
  const mod = activeModule;
  const lesson = mod.lessons[activeLesson];

  return (
    <div style={{ minHeight:"100vh", background:"#f8fafc", fontFamily:"'Segoe UI',system-ui,sans-serif" }}>
      {/* Header */}
      <div style={{ background:"#0f172a", padding:"0 24px", height:56, display:"flex", alignItems:"center", gap:12, position:"sticky", top:0, zIndex:10 }}>
        <button onClick={() => setView("home")} style={{ background:"rgba(255,255,255,0.08)", border:"none", color:"#94a3b8", padding:"6px 12px", borderRadius:6, cursor:"pointer", fontSize:13, display:"flex", alignItems:"center", gap:6 }}>
          ← Trang chủ
        </button>
        <div style={{ color:"#475569", fontSize:13 }}>›</div>
        <div style={{ color:"white", fontSize:13, fontWeight:600 }}>{mod.title}</div>
      </div>

      <div style={{ display:"flex", maxWidth:1100, margin:"0 auto", padding:"24px 20px", gap:24 }}>
        {/* Sidebar lessons */}
        <div style={{ width:240, flexShrink:0 }}>
          <div style={{ background:"white", borderRadius:12, border:"1px solid #e2e8f0", overflow:"hidden" }}>
            <div style={{ padding:"14px 16px", borderBottom:"1px solid #e2e8f0", background:`${mod.color}10` }}>
              <div style={{ fontSize:20, marginBottom:4 }}>{mod.icon}</div>
              <div style={{ fontWeight:700, color:"#0f172a", fontSize:13 }}>{mod.title}</div>
              <div style={{ color:"#64748b", fontSize:11, marginTop:2 }}>{mod.lessons.length} bài học</div>
            </div>
            {mod.lessons.map((l, i) => (
              <div key={i} onClick={() => setActiveLesson(i)}
                style={{ padding:"12px 16px", cursor:"pointer", background:activeLesson===i ? `${mod.color}10` : "white", borderLeft: activeLesson===i ? `3px solid ${mod.color}` : "3px solid transparent", borderBottom:"1px solid #f1f5f9", transition:"all 0.15s" }}
                onMouseEnter={e => { if(activeLesson!==i) e.currentTarget.style.background="#f8fafc"; }}
                onMouseLeave={e => { if(activeLesson!==i) e.currentTarget.style.background="white"; }}
              >
                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <div style={{ width:20, height:20, borderRadius:"50%", background: activeLesson===i ? mod.color : "#e2e8f0", display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, color: activeLesson===i ? "white" : "#94a3b8", fontWeight:700, flexShrink:0 }}>{i+1}</div>
                  <div style={{ fontSize:12.5, color: activeLesson===i ? "#0f172a" : "#475569", fontWeight: activeLesson===i ? 600 : 400, lineHeight:1.4 }}>{l.title}</div>
                </div>
                {l.hasDemo && <div style={{ fontSize:10, color:"#94a3b8", marginTop:4, marginLeft:28 }}>🎬 Demo video</div>}
              </div>
            ))}
          </div>

          {/* Nav buttons */}
          <div style={{ display:"flex", gap:8, marginTop:12 }}>
            <button onClick={() => setActiveLesson(p => Math.max(0,p-1))} disabled={activeLesson===0}
              style={{ flex:1, padding:"8px", borderRadius:8, border:"1px solid #e2e8f0", background:"white", cursor:activeLesson===0?"not-allowed":"pointer", color:activeLesson===0?"#cbd5e1":"#475569", fontSize:13 }}>
              ← Trước
            </button>
            <button onClick={() => setActiveLesson(p => Math.min(mod.lessons.length-1,p+1))} disabled={activeLesson===mod.lessons.length-1}
              style={{ flex:1, padding:"8px", borderRadius:8, border:"1px solid #e2e8f0", background:"white", cursor:activeLesson===mod.lessons.length-1?"not-allowed":"pointer", color:activeLesson===mod.lessons.length-1?"#cbd5e1":"#475569", fontSize:13 }}>
              Tiếp →
            </button>
          </div>
        </div>

        {/* Content */}
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ background:"white", borderRadius:14, border:"1px solid #e2e8f0", padding:"28px 32px", boxShadow:"0 1px 3px rgba(0,0,0,0.05)" }}>
            {lesson.image && (
            <div style={{ marginBottom:20 }}>
              <img src={lesson.image} alt={lesson.imageCaption || ""} style={{ width:"100%", borderRadius:10, border:"1px solid #e2e8f0" }} />
              {lesson.imageCaption && <div style={{ fontSize:11, color:"#94a3b8", marginTop:6, textAlign:"center", fontStyle:"italic" }}>{lesson.imageCaption}</div>}
            </div>
          )}
          {renderContent(lesson.content)}
          {lesson.image1 && (
            <div style={{ margin:"16px 0" }}>
              <img src={lesson.image1} alt={lesson.image1Caption || ""} style={{ width:"100%", borderRadius:10, border:"1px solid #e2e8f0" }} />
              {lesson.image1Caption && <div style={{ fontSize:11, color:"#94a3b8", marginTop:6, textAlign:"center", fontStyle:"italic" }}>{lesson.image1Caption}</div>}
            </div>
          )}
          {lesson.content2 && renderContent(lesson.content2)}
          {lesson.image2 && (
            <div style={{ margin:"16px 0" }}>
              <img src={lesson.image2} alt={lesson.image2Caption || ""} style={{ width:"100%", borderRadius:10, border:"1px solid #e2e8f0" }} />
              {lesson.image2Caption && <div style={{ fontSize:11, color:"#94a3b8", marginTop:6, textAlign:"center", fontStyle:"italic" }}>{lesson.image2Caption}</div>}
            </div>
          )}
          {lesson.content3 && renderContent(lesson.content3)}
          {lesson.image3 && (
            <div style={{ margin:"16px 0" }}>
              <img src={lesson.image3} alt={lesson.image3Caption || ""} style={{ width:"100%", borderRadius:10, border:"1px solid #e2e8f0" }} />
              {lesson.image3Caption && <div style={{ fontSize:11, color:"#94a3b8", marginTop:6, textAlign:"center", fontStyle:"italic" }}>{lesson.image3Caption}</div>}
            </div>
          )}
          {lesson.content4 && renderContent(lesson.content4)}
            {lesson.hasDemo && <VideoPlaceholder />}
          </div>

          {/* Bottom nav */}
          <div style={{ display:"flex", justifyContent:"space-between", marginTop:16 }}>
            <div style={{ fontSize:12, color:"#94a3b8" }}>Bài {activeLesson+1} / {mod.lessons.length}</div>
            {activeLesson < mod.lessons.length-1
              ? <button onClick={() => setActiveLesson(p=>p+1)} style={{ background:mod.color, color:"white", border:"none", padding:"8px 20px", borderRadius:8, cursor:"pointer", fontSize:13, fontWeight:600 }}>Bài tiếp theo →</button>
              : <button onClick={() => setView("home")} style={{ background:"#0f172a", color:"white", border:"none", padding:"8px 20px", borderRadius:8, cursor:"pointer", fontSize:13, fontWeight:600 }}>✅ Hoàn thành module</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}