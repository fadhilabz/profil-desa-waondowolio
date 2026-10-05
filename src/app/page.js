"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";

export default function BerandaPage() {
  useEffect(() => {
    (function () {
      const counters = document.querySelectorAll('[data-counter]');
      const speed = 200;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-counter');
            const inc = target / speed;

            const updateCount = () => {
              const count = +counter.innerText.replace('.', '');
              if (count < target) {
                counter.innerText = Math.ceil(count + inc).toLocaleString('id-ID');
                setTimeout(updateCount, 10);
              } else {
                counter.innerText = target.toLocaleString('id-ID');
              }
            };

            updateCount();
            observer.unobserve(counter);
          }
        });
      }, { threshold: 0.5 });

      counters.forEach(counter => observer.observe(counter));
    })();
  }, []);

  return (
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          <section className="relative w-full overflow-hidden bg-primary-container -mt-20 pt-28 pb-16 lg:pb-24 text-on-primary">
            <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay">
              <div className="w-full h-full bg-cover bg-center" data-alt="Panoramic landscape of lush Indonesian terraced rice fields and misty morning hills bathed in golden sunlight with deep green tea plantations, clean editorial aesthetic" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFDAcK7S8Pv4IO-RkUHyuE_hD5_wApr7nBufEHABifUeuocbNHRGRRG5J0rVvp_21LvcZRahop34hiqul3mCD17gZ2_5QJX9BYpJZDS73kf36yM8MsHdHJ4nAr0B4Fz3JP_n6CTLejhP7O7ptoZ7yaen2nrRxN_uCj-jbUNIq-7rMOfsAGhQx5CQhn3-y7z60vPaQ9yyhtn3KJFjpIhzvBxthcV7eBxGuPDaycneGwQtg8G6E0qakejw')" }} />
            </div>
            <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-tertiary-container/20 blur-3xl pointer-events-none" />
            <div className="absolute left-1/4 bottom-0 w-80 h-80 rounded-full bg-surface-tint/30 blur-2xl pointer-events-none" />
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col pt-6">
              <div className="inline-flex items-center gap-2 self-start bg-surface-container-lowest/15 backdrop-blur-md px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse" />
                {" "}
                <span className="font-label-md text-label-md text-surface-bright tracking-wider uppercase">Portal Resmi Pemerintahan Desa</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                <div className="lg:col-span-8 flex flex-col gap-6">
                  <h1 className="font-display text-display leading-none text-surface-bright tracking-tight max-w-3xl">Mewujudkan Desa Maju, Mandiri, dan Berkelanjutan</h1>
                  <p className="font-body-lg text-body-lg text-inverse-on-surface/90 max-w-2xl leading-relaxed">Selamat datang di portal resmi Desa Sejahtera. Pusat informasi keterbukaan publik, potensi agrowisata, layanan kependudukan digital, dan keindahan alam nusantara.</p>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-6 py-3.5 rounded-lg font-label-lg text-label-lg shadow-md hover:bg-secondary-container hover:text-on-secondary-container transition-all" href="#potensi-unggulan">
                      <span>Jelajahi Potensi</span>
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                    </a>
                    {" "}
                    <a className="inline-flex items-center gap-2 bg-surface-container-lowest/10 backdrop-blur-sm text-surface-bright hover:bg-surface-container-lowest/20 px-6 py-3.5 rounded-lg font-label-lg text-label-lg transition-all" href="#layanan-cepat">
                      <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                      {" "}
                      <span>Layanan Warga</span>
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col justify-end">
                  <div className="bg-surface-container-lowest/10 backdrop-blur-md rounded-xl p-5 text-inverse-on-surface shadow-xl">
                    <div className="flex items-center justify-between pb-3">
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed">Indeks Kesiapan Desa</span>
                      {" "}
                      <span className="font-label-md text-label-md text-tertiary-fixed font-bold">Mandiri Prima</span>
                    </div>
                    <div className="w-full bg-surface-container-highest/30 rounded-full h-2 overflow-hidden mb-3">
                      <div className="bg-tertiary-fixed h-full rounded-full w-[94%]" />
                    </div>
                    <p className="font-body-sm text-body-sm text-inverse-on-surface/80">Peringkat 5 Besar Program Akselerasi Desa Digital Berkelanjutan se-Kabupaten Nusantara.</p>
                  </div>
                </div>
              </div>
              <div className="mt-14 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 bg-surface-container-lowest/10 backdrop-blur-md rounded-xl p-6 lg:p-8 shadow-2xl">
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-1 text-primary-fixed">
                    <span className="font-display text-headline-lg font-extrabold" data-counter="4850">4.850</span>
                    {" "}
                    <span className="font-headline-sm text-headline-sm">+</span>
                  </div>
                  <span className="font-label-md text-label-md uppercase tracking-wider text-surface-bright/70">Warga Penduduk</span>
                  {" "}
                  <span className="font-body-sm text-label-sm text-inverse-on-surface/60">Tersebar di 18 RT & 6 RW</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-1 text-tertiary-fixed">
                    <span className="font-display text-headline-lg font-extrabold" data-counter="3">3</span>
                    {" "}
                    <span className="font-headline-sm text-headline-sm">Wilayah</span>
                  </div>
                  <span className="font-label-md text-label-md uppercase tracking-wider text-surface-bright/70">Dusun Harmonis</span>
                  {" "}
                  <span className="font-body-sm text-label-sm text-inverse-on-surface/60">Krajan, Sukamaju, & Wanagiri</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-1 text-primary-fixed">
                    <span className="font-display text-headline-lg font-extrabold" data-counter="12">12</span>
                    {" "}
                    <span className="font-headline-sm text-headline-sm">Kelompok</span>
                  </div>
                  <span className="font-label-md text-label-md uppercase tracking-wider text-surface-bright/70">Kelompok Tani Aktif</span>
                  {" "}
                  <span className="font-body-sm text-label-sm text-inverse-on-surface/60">Penggerak Agrobisnis & Pupuk Alami</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-1 text-secondary-fixed">
                    <span className="font-display text-headline-lg font-extrabold" data-counter="98">98</span>
                    {" "}
                    <span className="font-headline-sm text-headline-sm">%</span>
                  </div>
                  <span className="font-label-md text-label-md uppercase tracking-wider text-surface-bright/70">Layanan Tepat Waktu</span>
                  {" "}
                  <span className="font-body-sm text-label-sm text-inverse-on-surface/60">{"Rerata penyelesaian < 24 Jam"}</span>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-16 lg:py-24 bg-surface">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="bg-surface-container-lowest rounded-xl p-8 lg:p-14 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 relative">
                  <div className="relative mx-auto max-w-sm lg:max-w-none rounded-xl overflow-hidden shadow-xl aspect-[4/5] bg-surface-container">
                    <img className="w-full h-full object-cover" data-alt="Portrait of an approachable, distinguished Indonesian village head leader wearing neat traditional batik uniform smiling warmly with an authentic natural village hall background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGx38n1ZEw2YB6OBXOhj2Dwv7lB5GQ_5Rva3TbbxU0YPg4fPshkdkRnuAeNwIyhvmohT0E2BSbYDCUPNpSUFHdyD0qPM0xefdjdOjDiAnIpLfb9Lb9yoNhkkKWpx-iZHi1lUWix5XcoUi6A7BG6Ekbr0MpbILxOqDZFcHdKVXgNr-A5sTa8zl5LEa0CffrZKf_WBQSKDYBCuPsT1Q_g79_i6WUDnPIKM0lj-VKuyXva374PNmCcFRnKA" />
                  </div>
                  <div className="absolute -bottom-5 -right-3 sm:right-4 bg-primary text-on-primary py-3 px-5 rounded-lg shadow-lg flex items-center gap-3">
                    <span className="material-symbols-outlined text-[28px] text-tertiary-fixed">verified_user</span>
                    <div>
                      <div className="font-label-lg text-label-lg leading-tight">Drs. H. Bambang Hartono</div>
                      <div className="font-label-sm text-label-sm text-primary-fixed opacity-90">Kepala Desa Masa Bakti 2021-2027</div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-6">
                  <div className="inline-flex items-center gap-2 self-start bg-surface-container-high px-3 py-1 rounded-full text-primary font-label-sm text-label-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[16px]">campaign</span>
                    {" "}
                    <span>Amanat & Pandangan Kepala Desa</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">"Membangun Masa Depan Tanpa Menanggalkan Akar Tradisi dan Nilai Luhur Gotong Royong"</h2>
                  <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    <p>Segala puji bagi Tuhan Yang Maha Esa. Melalui platform digital Desa Sejahtera ini, kami berkomitmen membuka jendela informasi yang selebar-lebarnya bagi seluruh masyarakat desa, perantau, hingga masyarakat umum.</p>
                    <p>Era digital menuntut transparansi anggaran, kemudahan akses dokumen kependudukan, serta akselerasi ekonomi warga. Dengan sinergi seluruh komponen desa—mulai dari tetua adat, kelompok tani wanita, pemuda karang taruna, hingga pelaku UMKM—kita jadikan Desa Sejahtera sebagai lokomotif kemandirian pangan dan ekowisata unggulan di tanah air.</p>
                  </div>
                  <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-surface-container p-4 rounded-lg flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-[24px]">visibility</span>
                      <div>
                        <h4 className="font-label-lg text-label-lg text-on-surface">Transparansi Dana</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Laporan APBDes diakses berkala dan terbuka.</p>
                      </div>
                    </div>
                    <div className="bg-surface-container p-4 rounded-lg flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary text-[24px]">diversity_3</span>
                      <div>
                        <h4 className="font-label-lg text-label-lg text-on-surface">Inovasi Partisipatif</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Musrenbang berbasis usulan akar rumput.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-16 lg:py-24 bg-surface-container-low" id="potensi-unggulan">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-2xl flex flex-col gap-3">
                  <div className="inline-flex items-center gap-2 self-start bg-secondary-container/40 text-on-secondary-container px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[16px]">stars</span>
                    {" "}
                    <span>Komoditas & Pariwisata</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Sorotan Potensi Unggulan Desa</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Kekayaan alam berlimpah dan kreativitas warga yang melahirkan produk bernilai ekonomi tinggi serta ramah bagi lingkungan hidup.</p>
                </div>
                <a className="inline-flex items-center gap-2 text-primary font-label-lg text-label-lg hover:text-primary-container group transition-colors" href="#">
                  <span>Lihat Katalog Potensi Selengkapnya</span>
                  {" "}
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
                  <div className="relative h-64 overflow-hidden bg-surface-container">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Expansive hillside coffee and tea plantation with morning dew, workers harvesting fresh arabica coffee cherries with scenic mountain ridges background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArFf066xb_1DHtg8qOvK6sTfP2_gPeAxWFvFLdzGn98-jGlbaxQgNrMlF-MqgvjA_WhGRSMvP0VxhDzcxkOS2ME_zstNWHtg7vmBSumCYPO5GRwN0icU2XSWPbNU12vid9_qazrp0-1t6t5nQOObd225fuv2jOc9F50aratR9wgjP70ITdYKVEkOo442H3xgqWeXjfL8JrQOuVQg15ylpXPy4hN9MEnk3wVGUpH5zYs54iNVGD9yCQTQ" />
                    <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider shadow">Agrowisata</div>
                    <div className="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1 rounded font-label-sm text-label-sm text-on-surface flex items-center gap-1 shadow">
                      <span className="material-symbols-outlined text-secondary text-[16px]">pin_drop</span>
                      {" "}
                      <span>Dusun Wanagiri</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between gap-6">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Agrowisata Kebun Kopi & Teh Lereng Bukit</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Destinasi wisata edukasi pemetikan biji kopi arabika lereng gunung, menikmati secangkir sangrai lokal langsung dari perkebunan asri dengan panorama lembah.</p>
                    </div>
                    <div className="pt-4 flex items-center justify-between border-t border-surface-container">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Luas Area: 42 Hektar</span>
                      {" "}
                      <a className="font-label-md text-label-md text-secondary hover:underline flex items-center gap-1" href="#">
                        Eksplorasi Rute
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
                  <div className="relative h-64 overflow-hidden bg-surface-container">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Artisan Indonesian craftsman weaving intricate sustainable bamboo handicrafts, home decor lampshades and baskets in a sunlit rustic workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgOnXSfgSmKml8PKtcz_IlIejazBtReNmaXmzlEgZ0MHqLOlF0gPlg-2JZSgPMfQIIkYj-RPnXvKvepweWEEIxjTdPXHjWstAfViXTC5QRCOIoVA7aZFcu3yfb5wDG1L8RRcffqmie0R-vr8U8YCO2XERxvi6EM4JA8CxrQrXHOgmYR7AZKWRGBqff6Ubo78dpmigjZ-1cDK0UZVBIPzG2nVgppq1_ZlEi688XPVfkD_m-e4fLDA_13g" />
                    <div className="absolute top-4 left-4 bg-secondary text-on-secondary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider shadow">Kriya & UMKM</div>
                    <div className="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1 rounded font-label-sm text-label-sm text-on-surface flex items-center gap-1 shadow">
                      <span className="material-symbols-outlined text-secondary text-[16px]">pin_drop</span>
                      {" "}
                      <span>Dusun Sukamaju</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between gap-6">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">Kerajinan Bambu Anyaman Ramah Lingkungan</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Kreativitas pemuda dan ibu-ibu pengrajin menghasilkan perlengkapan rumah tangga estetis yang telah menembus pasar ekspor interior ke tiga benua.</p>
                    </div>
                    <div className="pt-4 flex items-center justify-between border-t border-surface-container">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Kapasitas: 1.200 unit/bln</span>
                      {" "}
                      <a className="font-label-md text-label-md text-secondary hover:underline flex items-center gap-1" href="#">
                        Produk Unggulan
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
                  <div className="relative h-64 overflow-hidden bg-surface-container">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Vibrant organic greenhouse and lush open vegetable fields with fresh green lettuces, tomatoes, and natural irrigation canal systems" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBOLBmgICpBkyHdT6iNCQAm_y7r8F8KfwGDyL6yYT5BYbFYlFeyoyMkm8fraCzljH6TC5GKbsxMS8c65YnDpSK1nr8tOdVZHk7dWmfpN-c6hwgKdHB97nicZNsIJAfzdoSKGmUYj7qbCSYBjtP-JIm940h4AGBinKzXbQzKtUPGA16LUupMjXxCzn3LNmJCVU137n9toMnru8L_zDD3wtZia8c7LMNWQvm2_CdGQnivhkqvmw_y2yLUg" />
                    <div className="absolute top-4 left-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider shadow">Ketahanan Pangan</div>
                    <div className="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1 rounded font-label-sm text-label-sm text-on-surface flex items-center gap-1 shadow">
                      <span className="material-symbols-outlined text-secondary text-[16px]">pin_drop</span>
                      {" "}
                      <span>Dusun Krajan</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between gap-6">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-tertiary transition-colors">Sentra Pertanian Organik & Hortikultura</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Penerapan sistem rotasi tanam bebas pestisida kimia sintetis, menyuplai ragam sayuran segar bersertifikasi aman konsumsi ke supermarket perkotaan.</p>
                    </div>
                    <div className="pt-4 flex items-center justify-between border-t border-surface-container">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Sertifikat: Organik Prima</span>
                      {" "}
                      <a className="font-label-md text-label-md text-secondary hover:underline flex items-center gap-1" href="#">
                        Kemitraan Pasokan
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-16 lg:py-24 bg-surface">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-xl flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 self-start bg-surface-container-highest px-3 py-1 rounded-full text-primary font-label-sm text-label-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[16px]">feed</span>
                    {" "}
                    <span>Warta Komunitas</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Berita & Informasi Terkini</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Catatan progres pembangunan fisik, aktivitas posyandu, dan agenda pemberdayaan warga Desa Sejahtera.</p>
                </div>
                <div className="flex items-center gap-3">
                  <button aria-label="Sebelumnya" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors">
                    <span className="material-symbols-outlined text-[20px]">west</span>
                  </button>
                  {" "}
                  <button aria-label="Berikutnya" className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors">
                    <span className="material-symbols-outlined text-[20px]">east</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-surface-container">
                    <img className="w-full h-full object-cover" data-alt="Community villagers and local engineers working hand in hand finishing construction of a clean concrete water irrigation canal in agricultural fields" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEFesv2t3-Waop4Mp12Drww8as4d8VCQb8VasZIacQzZfnODuQnFYE81BjaaG0kxBulC92-tMc1VpPk7_q8gpXLcBrrLicI8gJTCBmOP4G5wjNMlu5hlZVkph0q22ZK4giLW6jLn-aFgWQMyn4dzVtLPX1I5FVCQW6lzOFGlYlQOtdxlbvSM5ZJzszLXU5vBHLd9ZcLFALvy6frmzybORiezTS50RoZnGLCc2TqdISr9VhgIS_nmrrZg" />
                    <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur px-2.5 py-1 rounded font-label-sm text-label-sm text-primary font-bold">Infrastruktur</div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                        {" "}
                        <span>24 Oktober 2025</span>
                        {" "}
                        <span>•</span>
                        {" "}
                        <span>Dibaca 320x</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-2 hover:text-primary transition-colors cursor-pointer">Pembangunan Irigasi Tersier Dusun Krajan Rampung Tepat Waktu</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">Saluran irigasi sepanjang 850 meter kini resmi mengalirkan pasokan air bersih bagi lebih dari 35 hektar sawah produktif menjelang musim tanam serentak.</p>
                    </div>
                    <a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-primary-container pt-2" href="#">
                      <span>Baca Selengkapnya</span>
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </a>
                  </div>
                </article>
                <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-surface-container">
                    <img className="w-full h-full object-cover" data-alt="Lively workshop inside a village hall with young entrepreneurs taking notes on smartphones and laptops learning digital marketing strategy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1LEi5JhSMnigtnO1e3tcDBY8Oj6fyePv8jgCvxWiwiTRlHHhZ91mRK4Au5IXWpmXebBCyWKi_vdIa8wiXsiKzP4VyuIouaA_9rLob9mkZo8dMmoOXGp4YhfOwokJ3EpBUPi5EZ8Ds28j0jWFW57u5Z2ImoDS3G0KR_Ug4PtCRQ59ZcOB3x9NID-MAQPQDRcJr_TPM0a52VPWrCgWXC6FqtrK71sz-i2jfFADV3QlsOtUb1pAZ2SEsXg" />
                    <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur px-2.5 py-1 rounded font-label-sm text-label-sm text-secondary font-bold">Pemberdayaan</div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                        {" "}
                        <span>19 Oktober 2025</span>
                        {" "}
                        <span>•</span>
                        {" "}
                        <span>Dibaca 450x</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-2 hover:text-secondary transition-colors cursor-pointer">Pelatihan UMKM Desa: Menembus Pasar Digital Nasional</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">Sebanyak 40 pelaku usaha mikro mengikuti lokakarya optimalisasi marketplace dan fotografi produk kemasan untuk mendongkrak omzet penjualan produk olahan.</p>
                    </div>
                    <a className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary hover:text-on-secondary-container pt-2" href="#">
                      <span>Baca Selengkapnya</span>
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </a>
                  </div>
                </article>
                <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-surface-container">
                    <img className="w-full h-full object-cover" data-alt="A caring community healthcare worker checking child growth and health cards at clean village clinic with mothers in peaceful community center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgsUaf-QT2SRPKQNeiElAea6Ws0NCNMUE-uPv8FchtOsyPj_zP5Wjy83EigmCXnr32Zfs18Zmpt210vDAx8g_znN9MzlVii2a0i3JdOGd9VVzQSubS2TRDRJBf6m22qvmSAkZockODPrBO_ODpf_ns0BkR5jFtSQ0ERkp3s7v-JV8dha04zpy1CrzA57aNWYA_1aSBIuV5JAxuUGz1u9mJS5SzRCXbUg6gOsG3qkLXDl5NSivImetwcw" />
                    <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur px-2.5 py-1 rounded font-label-sm text-label-sm text-tertiary font-bold">Kesehatan</div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                        {" "}
                        <span>15 Oktober 2025</span>
                        {" "}
                        <span>•</span>
                        {" "}
                        <span>Dibaca 610x</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-2 hover:text-tertiary transition-colors cursor-pointer">Jadwal Imunisasi dan Posyandu Balita & Lansia Bulan Ini</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">Pemeriksaan rutin tensi, penimbangan balita, dan pemberian vitamin A gratis serentak diadakan di Balai Dusun Sukamaju mulai Senin depan pukul 08.30 WIB.</p>
                    </div>
                    <a className="inline-flex items-center gap-1 font-label-md text-label-md text-tertiary hover:underline pt-2" href="#">
                      <span>Baca Selengkapnya</span>
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <section className="w-full pb-20 pt-6 bg-surface" id="layanan-cepat">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary-container to-surface-tint p-8 lg:p-14 text-on-primary shadow-2xl">
                <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none" />
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 flex flex-col gap-4">
                    <div className="inline-flex items-center gap-2 self-start bg-surface-container-lowest/15 backdrop-blur-md px-3.5 py-1 rounded-full font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[16px]">support_agent</span>
                      {" "}
                      <span>Layanan Terpadu Satu Pintu</span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-surface-bright tracking-tight">Butuh Surat Keterangan Cepat atau Ingin Menyampaikan Aspirasi?</h2>
                    <p className="font-body-md text-body-md text-inverse-on-surface/90 max-w-2xl leading-relaxed">Kami memangkas birokrasi berbelit. Ajukan berkas administrasi kependudukan Anda dari rumah, atau hubungi pusat komando WhatsApp resmi desa yang siap merespons keluhan warga 24/7.</p>
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      <a className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-inverse-surface px-6 py-3.5 rounded-lg font-label-lg text-label-lg shadow-lg transition-transform hover:-translate-y-0.5" href="https://wa.me/6281234567890" rel="noopener noreferrer" target="_blank">
                        <span className="material-symbols-outlined text-[22px]">chat</span>
                        {" "}
                        <span>WhatsApp Pengaduan Warga</span>
                      </a>
                      {" "}
                      <a className="inline-flex items-center gap-2 bg-surface-container-lowest text-primary hover:bg-surface-bright px-6 py-3.5 rounded-lg font-label-lg text-label-lg shadow-lg transition-colors" href="#">
                        <span className="material-symbols-outlined text-[20px]">description</span>
                        {" "}
                        <span>Buat Pengajuan Surat Online</span>
                      </a>
                    </div>
                  </div>
                  <div className="lg:col-span-4 bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-xl flex flex-col gap-4 text-surface-bright">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold text-headline-sm">
                        <span className="material-symbols-outlined">electric_bolt</span>
                      </div>
                      <div>
                        <h4 className="font-label-lg text-label-lg text-tertiary-fixed">Respon Cepat 10 Menit</h4>
                        <p className="font-body-sm text-body-sm text-inverse-on-surface/80">Jam kerja kantor desa reguler</p>
                      </div>
                    </div>
                    <div className="space-y-2 pt-2 text-inverse-on-surface/90 font-body-sm text-body-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary-fixed text-[18px]">check_circle</span>
                        {" "}
                        <span>Surat Pengantar SKCK & Domisili</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary-fixed text-[18px]">check_circle</span>
                        {" "}
                        <span>Keterangan Usaha Mikro (SKU)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary-fixed text-[18px]">check_circle</span>
                        {" "}
                        <span>Bantuan Sosial & Kartu Berdaya</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
  );
}
