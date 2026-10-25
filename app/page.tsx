
"use client";
import { useState } from "react";

const HOTLINE = "0909 123 456";
const ADDRESS = "An Đông, Cần Thơ";

export default function Page() {
  const [bill, setBill] = useState(2500000);
  // logic: 1kWp ~ 4kWh/ngay ~ 120kWh/thang, gia dien ~3000d/kWh
  const monthlyKwh = bill / 3000;
  const kwp = Math.max(1, Math.round((monthlyKwh / 120) * 10) / 10);
  const prod = Math.round(kwp * 120);
  const saveYear = Math.round(prod * 3000 * 12);
  const invest = kwp * 15000000; // 15tr/kWp estimate
  const payback = (invest / (saveYear || 1)).toFixed(1);

  return (
    <div className="overflow-x-hidden">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 glass border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-amber-400 grid place-items-center font-extrabold">☀️</div>
            <div className="leading-tight">
              <div className="font-extrabold tracking-tight">SOLAR.LAL.VN</div>
              <div className="text-[10px] tracking-[0.2em] text-slate-500">AN ĐÔNG - CẦN THƠ</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#dichvu" className="hover:text-black">Dịch vụ</a>
            <a href="#duan" className="hover:text-black">Dự án</a>
            <a href="#tinh" className="hover:text-black">Tính toán</a>
            <a href="#baogia" className="hover:text-black">Báo giá</a>
          </nav>
          <a href="#lienhe" className="rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-black">Báo giá miễn phí</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-14 pb-16 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-900 px-3 py-1 text-xs font-bold">⚡ 500+ mái đã lắp tại Cần Thơ • Bảo hành 12 năm</div>
            <h1 className="mt-6 text-4xl md:text-[56px] leading-[0.95] font-extrabold tracking-tight">
              Điện Mặt Trời<br/>
              <span className="text-amber-400">Tiết Kiệm 90%</span><br/>Hóa Đơn Điện
            </h1>
            <p className="mt-5 text-[17px] text-slate-600 leading-relaxed">Lắp đặt trọn gói từ 15tr/kWp tại An Đông, Cần Thơ. Hòa lưới EVN nhanh, app theo dõi sản lượng. Khảo sát & thiết kế miễn phí trong 24h.</p>
            <div className="mt-7 flex gap-3">
              <a href="#tinh" className="rounded-full bg-amber-400 px-7 py-3.5 font-bold hover:bg-amber-300">Tính tiết kiệm →</a>
              <a href={`tel:${HOTLINE.replace(/\s/g,'')}`} className="rounded-full border border-slate-200 px-7 py-3.5 font-bold hover:bg-slate-50">Gọi {HOTLINE}</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t pt-8">
              <div><div className="text-2xl font-extrabold">25 năm</div><div className="text-xs text-slate-500">Tuổi thọ tấm pin</div></div>
              <div><div className="text-2xl font-extrabold">4-5 năm</div><div className="text-xs text-slate-500">Hoàn vốn</div></div>
              <div><div className="text-2xl font-extrabold">500+</div><div className="text-xs text-slate-500">Mái tại ĐBSCL</div></div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden bg-slate-100 aspect-[4/3] grid place-items-center border">
              <div className="text-center p-8">
                <div className="text-6xl">🏠☀️🔋</div>
                <p className="mt-4 text-sm text-slate-500">Ảnh thực tế mái ngói + Longi 545W + Huawei 5kW<br/>An Phú, An Đông</p>
                <div className="mt-6 inline-flex rounded-2xl bg-white shadow-xl p-4 gap-4 text-left">
                  <div className="h-12 w-12 rounded-xl bg-green-100 grid place-items-center">⚡</div>
                  <div><div className="text-xs text-slate-500">Hôm nay sản xuất</div><div className="font-bold text-green-600">28.4 kWh • +89.000đ</div></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-slate-900 text-white p-4 shadow-2xl hidden md:block">
              <div className="text-xs opacity-70">EVN đã thanh toán</div><div className="font-bold">Bán lại lưới: 1.845 kWh</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap gap-6 md:gap-12 items-center text-sm font-semibold text-slate-400">
          <span className="text-slate-900">Đối tác vật tư:</span> <span>EVN</span> <span>HUAWEI</span> <span>LONGi</span> <span>GROWATT</span> <span>SUNGROW</span> <span>JA SOLAR</span>
        </div>
      </section>

      {/* DỊCH VỤ */}
      <section id="dichvu" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Dịch vụ trọn gói</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {t:"Mái nhà dân dụng", d:"3-10kWp, giảm 80-90% hóa đơn. Lắp 1-2 ngày, bảo hành 12 năm.", icon:"🏡"},
            {t:"Nhà xưởng - Doanh nghiệp", d:"10-500kWp, hòa lưới 3 pha, tối ưu thuế, ROI 3.5 năm.", icon:"🏭"},
            {t:"Đèn & Bơm Solar", d:"Đèn đường 100-300W, bơm nước 1-5HP, không tốn điện lưới.", icon:"💡"},
          ].map(c=>(
            <div key={c.t} className="rounded-[24px] border p-7 bg-white hover:shadow-xl transition">
              <div className="h-12 w-12 rounded-xl bg-amber-100 grid place-items-center text-xl">{c.icon}</div>
              <div className="mt-5 font-bold text-lg">{c.t}</div>
              <div className="mt-2 text-sm text-slate-600 leading-relaxed">{c.d}</div>
              <div className="mt-4 text-sm font-bold">Tư vấn →</div>
            </div>
          ))}
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="tinh" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Tính nhanh tiết kiệm</h2>
            <p className="mt-3 text-slate-400">Kéo thanh hóa đơn điện, hệ thống tự đề xuất công suất theo thực tế bức xạ Cần Thơ (4.8h nắng/ngày)</p>
            <div className="mt-8 rounded-[24px] bg-white/5 border border-white/10 p-6">
              <label className="text-sm">Hóa đơn mỗi tháng: <b className="text-amber-300 text-xl">{bill.toLocaleString('vi-VN')}đ</b></label>
              <input type="range" min={500000} max={10000000} step={100000} value={bill} onChange={e=>setBill(+e.target.value)} className="w-full mt-4 accent-amber-400" />
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl bg-white text-slate-900 p-4"><div className="text-xs text-slate-500">Công suất đề xuất</div><div className="text-xl font-extrabold">{kwp} kWp</div></div>
                <div className="rounded-xl bg-white text-slate-900 p-4"><div className="text-xs text-slate-500">Sản lượng</div><div className="text-xl font-extrabold">{prod} kWh/tháng</div></div>
                <div className="rounded-xl bg-amber-400 text-slate-900 p-4"><div className="text-xs">Tiết kiệm / năm</div><div className="text-xl font-extrabold">{saveYear.toLocaleString('vi-VN')}đ</div></div>
                <div className="rounded-xl bg-white text-slate-900 p-4"><div className="text-xs text-slate-500">Hoàn vốn</div><div className="text-xl font-extrabold">{payback} năm</div></div>
              </div>
              <p className="mt-4 text-xs text-slate-400">* Tính toán tham khảo, dựa trên code open-source solar-energy-calculator (MIT). Thực tế phụ thuộc hướng mái.</p>
            </div>
          </div>
          <div className="rounded-[24px] bg-white text-slate-900 p-8">
            <div className="font-bold">Vì sao chọn Lal Solar?</div>
            <ul className="mt-6 space-y-4 text-sm">
              <li>✅ Khảo sát Flycam + đo bức xạ miễn phí</li>
              <li>✅ Tấm pin Tier 1 Longi / JA, Inverter Huawei / Growatt</li>
              <li>✅ Hòa lưới EVN Cần Thơ trong 7 ngày</li>
              <li>✅ App giám sát điện thoại 24/7</li>
              <li>✅ Bảo hành 12 năm phần cứng, 25 năm hiệu suất</li>
              <li>✅ Trả góp 0% qua thẻ tín dụng</li>
            </ul>
            <a href="#lienhe" className="mt-8 block text-center rounded-full bg-slate-900 text-white py-3 font-bold">Nhận bản vẽ miễn phí</a>
            <div className="mt-3 text-center text-xs text-slate-500">Dựa trên mã nguồn Solarnest + Powerwall-Dashboard (MIT) để làm app giám sát</div>
          </div>
        </div>
      </section>

      {/* BÁO GIÁ */}
      <section id="baogia" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold">Báo giá trọn gói 2026</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {k:"3 kWp - Gia đình nhỏ", p:"~45 triệu", l:["6 tấm Longi 545W","Inverter Growatt 3kW","Khung nhôm, dây DC","Hòa lưới EVN"]},
            {k:"5 kWp - Phổ biến nhất", p:"~75 triệu", l:["10 tấm Longi 545W","Inverter Huawei 5kW","Tủ điện + chống sét","App giám sát + BH 12 năm"], hot:true},
            {k:"10 kWp - Xưởng", p:"~145 triệu", l:["18 tấm 580W","Inverter 10kW 3 pha","Khung chịu bão","Hồ sơ PCCC & EVN"]},
          ].map(pkg=>(
            <div key={pkg.k} className={`rounded-[24px] border p-7 ${pkg.hot ? 'bg-slate-900 text-white shadow-2xl scale-[1.03]' : 'bg-white'}`}>
              {pkg.hot && <div className="inline-block rounded-full bg-amber-400 text-slate-900 text-[10px] font-extrabold px-2 py-1">BÁN CHẠY</div>}
              <div className="mt-3 font-bold">{pkg.k}</div>
              <div className="mt-2 text-2xl font-extrabold">{pkg.p}</div>
              <ul className="mt-5 space-y-2 text-sm opacity-80">{pkg.l.map(x=><li key={x}>• {x}</li>)}</ul>
              <a href="#lienhe" className={`mt-6 block text-center rounded-full py-3 font-bold ${pkg.hot ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'}`}>Chọn gói này</a>
            </div>
          ))}
        </div>
      </section>

      {/* LIÊN HỆ */}
      <section id="lienhe" className="bg-amber-50 border-y">
        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold">Khảo sát miễn phí tại {ADDRESS}</h2>
            <p className="mt-3 text-slate-600">Để lại SĐT, kỹ thuật Lal Solar gọi lại trong 30 phút, mang flycam đo mái.</p>
            <div className="mt-6 space-y-3 text-sm">
              <div>📞 Hotline: <b>{HOTLINE}</b></div>
              <div>📍 {ADDRESS}, Cần Thơ</div>
              <div>✉️ hello@solar.lal.vn</div>
            </div>
          </div>
          <form onSubmit={e=>{e.preventDefault(); alert('Đã gửi! Lal Solar sẽ gọi lại.');}} className="rounded-[24px] bg-white p-6 border shadow-sm grid gap-4">
            <input required placeholder="Tên bạn" className="rounded-xl border px-4 py-3" />
            <input required placeholder="Số điện thoại" className="rounded-xl border px-4 py-3" />
            <input placeholder="Hóa đơn điện / tháng (VD: 2.5tr)" className="rounded-xl border px-4 py-3" />
            <button className="rounded-full bg-slate-900 text-white py-3 font-bold">Gửi yêu cầu khảo sát</button>
            <div className="text-[11px] text-slate-400 text-center">Form này lưu local, bạn có thể nối Google Sheet / Zalo OA sau.</div>
          </form>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-10 text-xs text-slate-500 flex justify-between">
        <div>© 2026 solar.lal.vn - Build từ mã nguồn mở MIT: startup-nextjs, solar-energy-calculator, Solarnest.</div>
        <div>Made for Cần Thơ ☀️</div>
      </footer>
    </div>
  );
}
