"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect } from "react";

export default function PotensiPage() {
  useEffect(() => {
    (function initPotensiFilter() {
      const filterButtons = document.querySelectorAll('#filter-container .filter-btn');
      const cards = document.querySelectorAll('#potensi-grid .potensi-card');

      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          // Reset styling
          filterButtons.forEach(b => {
            b.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');
            b.classList.add('bg-surface-container-highest', 'text-on-surface-variant');
          });

          // Set active styling
          btn.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');
          btn.classList.remove('bg-surface-container-highest', 'text-on-surface-variant');

          const targetCategory = btn.getAttribute('data-filter');

          cards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (targetCategory === 'all' || cardCategory === targetCategory) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    })();
  }, []);

  return (
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          <section className="relative w-full overflow-hidden bg-surface-container-low py-space-xl lg:py-space-xxl">
            <div className="absolute -top-32 right-10 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 -left-20 w-80 h-80 bg-secondary-fixed/40 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
                <div className="flex flex-col max-w-2xl">
                  <div className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md uppercase tracking-widest mb-space-xs">
                    <span className="w-2 h-2 rounded-full bg-tertiary" />
                    {" "}
                    Eksplorasi Sumber Daya Lokal
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Potensi & Komoditas Unggulan</h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">Kekayaan alam subur, kearifan tangan perajin, serta denyut agrikultur mandiri yang menggerakkan perekonomian warga Desa Sejahtera.</p>
                </div>
                <div className="bg-surface-container-lowest shadow-md rounded-xl p-space-md flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-lg bg-primary-fixed text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Sektor Penggerak</span>
                    {" "}
                    <span className="font-headline-sm text-headline-sm text-primary">6 Pilar Unggulan</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-space-xs pt-space-sm" id="filter-container">
                <button className="filter-btn active-tab px-space-md py-space-sm rounded-full font-label-lg text-label-lg transition-all duration-300 bg-primary text-on-primary shadow-sm flex items-center gap-space-xs" data-filter="all">
                  <span className="material-symbols-outlined text-[18px]">apps</span>
                  {" "}
                  Semua Potensi
                </button>
                {" "}
                <button className="filter-btn px-space-md py-space-sm rounded-full font-label-lg text-label-lg transition-all duration-300 bg-surface-container-highest text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-space-xs" data-filter="pertanian">
                  <span className="material-symbols-outlined text-[18px]">agriculture</span>
                  {" "}
                  Pertanian & Perkebunan
                </button>
                {" "}
                <button className="filter-btn px-space-md py-space-sm rounded-full font-label-lg text-label-lg transition-all duration-300 bg-surface-container-highest text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-space-xs" data-filter="pariwisata">
                  <span className="material-symbols-outlined text-[18px]">nature_people</span>
                  {" "}
                  Pariwisata Alam
                </button>
                {" "}
                <button className="filter-btn px-space-md py-space-sm rounded-full font-label-lg text-label-lg transition-all duration-300 bg-surface-container-highest text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-space-xs" data-filter="umkm">
                  <span className="material-symbols-outlined text-[18px]">storefront</span>
                  {" "}
                  Industri Kreatif & UMKM
                </button>
              </div>
            </div>
          </section>
          <section className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl lg:py-space-xxl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg" id="potensi-grid">
              <article className="potensi-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col" data-category="pertanian">
                <div className="relative h-64 w-full overflow-hidden bg-surface-container">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close-up of freshly harvested ripe red coffee cherries drying under warm equatorial morning sunlight in a rural Indonesian highland mountain village, surrounded by misty green plantations, natural rich earth tones, high-end editorial photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKWEeb0WhZVuCqCgUvKwj2sVInnf2vtkK5DX2jaxUgY-eGyJYzdojEfW9Nrb8av5dEwE0mmWvWVRdiSF87tQl26d63806hWbuIuZwgI1ArLhrTmtWhpq04T3ZO5AiJza1Ed6i4bjUgCY-rt-qAixfsSkJKlNBjHZY94WRxSKk1vl0nKuz0F0y3D7HxektJ93piIRlyBukXjVflq20zZ8uBlFLS_9q7ynF5OXvwNMfBJ4am-0d8z2Fttw" />
                  {" "}
                  <span className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm px-space-sm py-space-xs rounded-full uppercase tracking-wider shadow-sm">Perkebunan</span>
                  <div className="absolute bottom-4 right-4 bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm px-space-sm py-space-xs rounded font-bold shadow-sm">Ekspor Regional</div>
                </div>
                <div className="p-space-lg flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md mb-space-xs">
                      <span className="material-symbols-outlined text-[18px]">coffee</span>
                      {" "}
                      Ketinggian 900-1100 mdpl
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Kopi Robusta Lereng Desa</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Biji kopi dengan karakter aroma cokelat dan rempah khas lereng perbukitan, diolah petik merah dan disuplai ke belasan gerai kopi terkemuka nusantara.</p>
                  </div>
                  <div className="pt-space-md mt-space-md flex items-center justify-between bg-surface-container-low rounded-lg p-space-sm">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Kapasitas:
                      {" "}
                      <b className="text-primary font-bold">14 Ton/Thn</b>
                    </span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-secondary font-bold">Binaan BUMDes</span>
                  </div>
                </div>
              </article>
              <article className="potensi-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col" data-category="pariwisata">
                <div className="relative h-64 w-full overflow-hidden bg-surface-container">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Majestic pristine waterfall cascading into crystal clear turquoise freshwater pool surrounded by lush tropical mossy rainforest boulders, gentle sun rays filtering through high jungle canopy in an Indonesian eco-park." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe9p62SV-EDtcZGcdQCwdB1Tq_0lJCJ7DHx_wSYEcbDBIjpzxWnZzMFhwb9lCzqgSy7nqhvHW0LyvFBYkBrrFvwoJ6r4wEtYmKEm9vGY0brssqWVTRrv5wc2SiRhJ1JGf5KINk2e6s8Jd45AEFe65iLvNXvIuePPqEeYLEWr7SJPwkn4trU-UsmUhBcQkcmy9fr3URa6RyuY5ZH2x4UVAsQg-zyBxoyjKfH_W50CSTgYvbA6MjOC2Biw" />
                  {" "}
                  <span className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm px-space-sm py-space-xs rounded-full uppercase tracking-wider shadow-sm">Ekowisata</span>
                  <div className="absolute bottom-4 right-4 bg-primary text-on-primary font-label-sm text-label-sm px-space-sm py-space-xs rounded font-bold shadow-sm">Destinasi Favorit</div>
                </div>
                <div className="p-space-lg flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md mb-space-xs">
                      <span className="material-symbols-outlined text-[18px]">kayaking</span>
                      {" "}
                      Trekking & Camping Ground
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Wisata Alam Curug Bening</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Air terjun bertingkat dengan mata air pegunungan yang jernih, dilengkapi jalur penjelajahan alam ramah keluarga dan zona kemah berpemandangan bukit.</p>
                  </div>
                  <div className="pt-space-md mt-space-md flex items-center justify-between bg-surface-container-low rounded-lg p-space-sm">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Kunjungan:
                      {" "}
                      <b className="text-primary font-bold">3.200+/Bln</b>
                    </span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-secondary font-bold">Kelompok Sadar Wisata</span>
                  </div>
                </div>
              </article>
              <article className="potensi-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col" data-category="umkm">
                <div className="relative h-64 w-full overflow-hidden bg-surface-container">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Detailed display of handcrafted artisanal bamboo home decor items including woven lamp shades, fruit baskets, and minimalist storage boxes arranged neatly on a warm teak wood bench in a bright studio setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBjEQm3eLLZrpXh14Jg_8w7HHOCR9HKHeIKXBv9_CXxwS2dwo7zDK5qzUHfL42ezJFAuWhgVxPgvXP7m6qDnRDdJYFVykMSqFFTGMb30eAfoFTAH2b8Xy9e-jRVOd_gnBjjv4bWlq0Zr7QgkpeF4Zi_aO4G51O9xsqITBycGQF68dfnQyf8ICiviZ-57BeSUUtMZRAAPbZI2Kk182hiwOAdkmsRThKroq3Vrqh2CPzw17qWXQ3kPeWKQ" />
                  {" "}
                  <span className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm px-space-sm py-space-xs rounded-full uppercase tracking-wider shadow-sm">Kriya & UMKM</span>
                  <div className="absolute bottom-4 right-4 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-space-sm py-space-xs rounded font-bold shadow-sm">Eco-Friendly</div>
                </div>
                <div className="p-space-lg flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md mb-space-xs">
                      <span className="material-symbols-outlined text-[18px]">handyman</span>
                      {" "}
                      100% Bambu Budidaya
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Kerajinan Bambu Lestari</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Produk perabot dan dekorasi rumah tangga ramah lingkungan buatan perajin generasi muda desa, memadukan teknik tradisi dengan estetika kontemporer.</p>
                  </div>
                  <div className="pt-space-md mt-space-md flex items-center justify-between bg-surface-container-low rounded-lg p-space-sm">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Pengrajin:
                      {" "}
                      <b className="text-primary font-bold">48 Kepala Keluarga</b>
                    </span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-secondary font-bold">Sertifikasi Hijau</span>
                  </div>
                </div>
              </article>
              <article className="potensi-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col" data-category="pertanian">
                <div className="relative h-64 w-full overflow-hidden bg-surface-container">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Vibrant organic agriculture harvest crate brimming with buttery green avocados, crisp curly kale, and red vine tomatoes placed beside rows of raised organic soil beds in an open village field." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZIth8XDprNb723owJeQMy7MAXe2-jQkUELUWLv5Y9pvkOc2Hi-3Q7vQ3xbzdz2l3Ua4j8ASx9UOEU8-gkjvFxlStXz9HHJBX956oOqBMT8OXEYaft12BSfDx8V7f0LO617wG1gRE7AueucnuJwyKSwZB8L_BBhIoqHmkdP_iH0QOZ8a6kv9KwS1_6UvCccuZXhKFrzdS7cx-07lbEHGleSOJFwvZ3J623EYadqC7svwQHYBdbHyetdg" />
                  {" "}
                  <span className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm px-space-sm py-space-xs rounded-full uppercase tracking-wider shadow-sm">Hortikultura</span>
                  <div className="absolute bottom-4 right-4 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-space-sm py-space-xs rounded font-bold shadow-sm">Bebas Pestisida</div>
                </div>
                <div className="p-space-lg flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md mb-space-xs">
                      <span className="material-symbols-outlined text-[18px]">nutrition</span>
                      {" "}
                      Petik Langsung Petani
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Sentra Buah & Sayur Organik</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Lumbung alpukat mentega premium dan sayuran hidroponik tanah kaya kompos, menyuplai kebutuhan supermarket organik dan katering sehat harian.</p>
                  </div>
                  <div className="pt-space-md mt-space-md flex items-center justify-between bg-surface-container-low rounded-lg p-space-sm">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Luas Lahan:
                      {" "}
                      <b className="text-primary font-bold">18 Hektare</b>
                    </span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-secondary font-bold">GAP Certified</span>
                  </div>
                </div>
              </article>
              <article className="potensi-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col" data-category="umkm">
                <div className="relative h-64 w-full overflow-hidden bg-surface-container">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Artisanal glass honey jars with raw amber wild forest honey alongside golden baked cassava crisps packaged neatly on woven straw mats in an authentic Indonesian village culinary workshop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUSEhGSlDtVQ1HZH5mmQ4qyJIyQ7Uv5luZrjgWQe_88VejhbE2zXvXdoZGH7yIqSQby30QlB4Mkd5ZyqkTaB8YfDC-MZCVEbEjolFvvMnCbpmUqoWeVzS_JNYGIz2bLE-cXYR0_Omhl6yPLYF94VU_lIKENHofFXKDXd9JzshcW0f9Cj6JM2wOMnX3Y_Z_NCZkKdFrv9Zp_otBbMS3fsA1KX1GRSxX2-3ohcn21zhkFV-9SLjpeolwAw" />
                  {" "}
                  <span className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm px-space-sm py-space-xs rounded-full uppercase tracking-wider shadow-sm">Olahan Pangan</span>
                  <div className="absolute bottom-4 right-4 bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm px-space-sm py-space-xs rounded font-bold shadow-sm">PIRT & Halal</div>
                </div>
                <div className="p-space-lg flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md mb-space-xs">
                      <span className="material-symbols-outlined text-[18px]">bakery_dining</span>
                      {" "}
                      Oleh-Oleh Khas
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Singkong Keju & Madu Hutan</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Koleksi camilan higienis berbasis singkong renyah serta madu hutan liar murni dari vegetasi lereng bukit yang dikemas higienis berstandar ritel modern.</p>
                  </div>
                  <div className="pt-space-md mt-space-md flex items-center justify-between bg-surface-container-low rounded-lg p-space-sm">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Produksi:
                      {" "}
                      <b className="text-primary font-bold">850 Pcs/Bln</b>
                    </span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-secondary font-bold">12 Kelompok BUMDes</span>
                  </div>
                </div>
              </article>
              <article className="potensi-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col" data-category="pariwisata">
                <div className="relative h-64 w-full overflow-hidden bg-surface-container">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Expansive sweeping view of emerald green tiered rice paddy terraces on hillside, early morning light with thin mist hovering, wooden footpaths weaving gently through the fields with mountains in background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUVIf4gekn1COALiTK4Sb0uCBYjkpMb_dVqJtqXy0H1kPi4eUX46ssEwbIFDBxaCYN2FDXDe4PqohAIdKl-ABvRo8lSIES3Cj_VR_gBxaqYCDWfaDlYoLuWq9iY9RaunaGFp3R4oGc1Luemm4iauK5HygKU8BTlJbp6_it9MipZ9n0BQiV0gFmgzvgpxh4ShsjgDiX-QaFhkz5T6LctTRaHI31ltwkUOeq5eu8c3j6FBr46_HD517HHw" />
                  {" "}
                  <span className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm px-space-sm py-space-xs rounded-full uppercase tracking-wider shadow-sm">Wisata Edukasi</span>
                  <div className="absolute bottom-4 right-4 bg-primary text-on-primary font-label-sm text-label-sm px-space-sm py-space-xs rounded font-bold shadow-sm">Family Friendly</div>
                </div>
                <div className="p-space-lg flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md mb-space-xs">
                      <span className="material-symbols-outlined text-[18px]">school</span>
                      {" "}
                      Workshop Tanam & Bajak Sawah
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Ekowisata Terasering Sejahtera</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Program interaktif belajar tani untuk pelajar dan keluarga: dari memelihara saluran irigasi tradisional, menanam bibit padi organik, hingga makan siang di saung sawah.</p>
                  </div>
                  <div className="pt-space-md mt-space-md flex items-center justify-between bg-surface-container-low rounded-lg p-space-sm">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Kapasitas Sesi:
                      {" "}
                      <b className="text-primary font-bold">80 Peserta/Hari</b>
                    </span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-secondary font-bold">Paket Terbuka</span>
                  </div>
                </div>
              </article>
            </div>
          </section>
          <section className="w-full bg-primary text-on-primary py-space-xxl relative overflow-hidden">
            <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern height="40" id="grid-pattern" patternUnits="userSpaceOnUse" width="40">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect fill="url(#grid-pattern)" height="100%" width="100%" />
            </svg>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                <div className="lg:col-span-5 flex flex-col gap-space-md">
                  <div className="inline-flex items-center gap-space-xs text-secondary-fixed font-label-md text-label-md uppercase tracking-widest">
                    <span className="material-symbols-outlined text-[18px]">monitoring</span>
                    {" "}
                    Transparansi & Dampak Nyata
                  </div>
                  <h2 className="font-headline-lg text-headline-lg leading-tight text-surface-bright">Statistik Pertumbuhan Ekonomi Desa</h2>
                  <p className="font-body-md text-body-md text-inverse-on-surface/80 leading-relaxed">Melalui koordinasi BUMDes Sejahtera Mandiri, komoditas unggulan desa dipasarkan secara terpadu demi peningkatan taraf hidup para petani dan pelaku industri rumahan lokal.</p>
                  <div className="bg-primary-container/80 rounded-xl p-space-md mt-space-xs flex items-center gap-space-md shadow-sm">
                    <span className="material-symbols-outlined text-tertiary-fixed text-[36px]">workspace_premium</span>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg font-bold text-surface-bright">BUMDes Terbaik Tingkat Kabupaten</span>
                      {" "}
                      <span className="font-body-sm text-body-sm text-surface-variant/80">Kategori Tata Kelola Usaha Berkelanjutan 2024</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="bg-primary-container p-space-lg rounded-xl shadow-md flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-secondary-fixed uppercase font-bold tracking-wider">Panen Komoditas</span>
                      {" "}
                      <span className="material-symbols-outlined text-secondary-fixed text-[24px]">grain</span>
                    </div>
                    <div className="my-space-md">
                      <div className="font-display text-display text-surface-bright tracking-tight leading-none">
                        420
                        <span className="font-headline-md text-headline-md text-tertiary-fixed font-bold">Ton</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-space-xs">Total panen kopi, padi terasering & sayur organik tahun lalu</p>
                    </div>
                    <div className="w-full bg-primary/60 rounded-full h-2 overflow-hidden">
                      <div className="bg-secondary-fixed h-full rounded-full w-[84%]" />
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary-fixed/90 mt-space-xs text-right">+18% dari target tahunan</span>
                  </div>
                  <div className="bg-primary-container p-space-lg rounded-xl shadow-md flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-secondary-fixed uppercase font-bold tracking-wider">UMKM Binaan</span>
                      {" "}
                      <span className="material-symbols-outlined text-secondary-fixed text-[24px]">store</span>
                    </div>
                    <div className="my-space-md">
                      <div className="font-display text-display text-surface-bright tracking-tight leading-none">
                        68
                        <span className="font-headline-md text-headline-md text-tertiary-fixed font-bold">+</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-space-xs">Usaha mikro & perajin terdaftar dalam ekosistem BUMDes</p>
                    </div>
                    <div className="w-full bg-primary/60 rounded-full h-2 overflow-hidden">
                      <div className="bg-tertiary-fixed h-full rounded-full w-[92%]" />
                    </div>
                    <span className="font-label-sm text-label-sm text-tertiary-fixed/90 mt-space-xs text-right">92% berizin PIRT/NIB resmi</span>
                  </div>
                  <div className="bg-primary-container p-space-lg rounded-xl shadow-md flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-secondary-fixed uppercase font-bold tracking-wider">Pendapatan Rata-rata</span>
                      {" "}
                      <span className="material-symbols-outlined text-secondary-fixed text-[24px]">trending_up</span>
                    </div>
                    <div className="my-space-md">
                      <div className="font-display text-display text-surface-bright tracking-tight leading-none">
                        34
                        <span className="font-headline-md text-headline-md text-tertiary-fixed font-bold">%</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-space-xs">Kenaikan pendapatan rata-rata keluarga pengrajin & petani binaan</p>
                    </div>
                    <svg className="w-full h-8 text-secondary-fixed" fill="none" stroke="currentColor" viewBox="0 0 100 25">
                      <path d="M0 20 L20 18 L40 14 L60 16 L80 8 L100 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                      <circle cx="100" cy="4" fill="currentColor" r="3" />
                    </svg>
                    {" "}
                    <span className="font-label-sm text-label-sm text-secondary-fixed/90 mt-space-xs text-right">Konsisten naik sejak 2022</span>
                  </div>
                  <div className="bg-primary-container p-space-lg rounded-xl shadow-md flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-secondary-fixed uppercase font-bold tracking-wider">Perputaran Dana</span>
                      {" "}
                      <span className="material-symbols-outlined text-secondary-fixed text-[24px]">account_balance_wallet</span>
                    </div>
                    <div className="my-space-md">
                      <div className="font-display text-display text-surface-bright tracking-tight leading-none">
                        2.4
                        <span className="font-headline-md text-headline-md text-tertiary-fixed font-bold">M</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-space-xs">Volume transaksi komoditas beredar melalui sistem BUMDes tahunan</p>
                    </div>
                    <div className="w-full bg-primary/60 rounded-full h-2 overflow-hidden">
                      <div className="bg-secondary-fixed h-full rounded-full w-[76%]" />
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary-fixed/90 mt-space-xs text-right">Diaudit secara berkala</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl lg:py-space-xxl w-full">
            <div className="relative bg-surface-container rounded-xl overflow-hidden shadow-xl p-space-lg md:p-space-xl lg:p-space-xxl">
              <div className="absolute -right-24 -top-24 w-96 h-96 bg-secondary-fixed/50 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                <div className="lg:col-span-8 flex flex-col gap-space-md">
                  <div className="inline-flex items-center gap-space-xs bg-surface-container-lowest text-secondary font-label-md text-label-md px-space-md py-space-xs rounded-full uppercase tracking-wider w-max shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">handshake</span>
                    {" "}
                    Kolaborasi & Hilirisasi Desa
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Peluang Kemitraan Dagang, Investasi & Riset Akademik</h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">Pemerintah Desa Sejahtera bersama BUMDes membuka pintu selebar-lebarnya untuk para pembeli grosir (offtaker), investor ekowisata, distributor retail, hingga lembaga riset perguruan tinggi yang ingin bersinergi secara berkelanjutan dan saling menguntungkan.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-xs">
                    <div className="flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-[24px]">verified</span>
                      <div>
                        <h3 className="font-label-lg text-label-lg text-primary">Jaminan Pasokan</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Kontrak resmi langsung dari kelompok tani terkoordinasi.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-[24px]">local_shipping</span>
                      <div>
                        <h3 className="font-label-lg text-label-lg text-primary">Logistik Terintegrasi</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Gudang sortir dan packing BUMDes yang siap muat antar-kota.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-[24px]">balance</span>
                      <div>
                        <h3 className="font-label-lg text-label-lg text-primary">Keterbukaan Hukum</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Legalitas BUMDes berbadan hukum Kementerian Desa.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-space-md pt-space-md">
                    <button className="bg-primary text-on-primary font-label-lg text-label-lg px-space-lg py-space-sm rounded shadow-md hover:bg-primary-container transition-all flex items-center gap-space-xs" onClick={(event) => { document.getElementById('mitra-modal').classList.remove('hidden') }}>
                      <span className="material-symbols-outlined text-[20px]">mail</span>
                      {" "}
                      Ajukan Minat Kerjasama
                    </button>
                    {" "}
                    <Link href="/kontak" className="bg-secondary text-on-secondary font-label-lg text-label-lg px-space-lg py-space-sm rounded shadow-sm hover:opacity-90 transition-all flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[20px]">download</span>
                      {" "}
                      Unduh Katalog Komoditas PDF
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-4 bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-sm pb-space-sm border-b border-outline-variant/30">
                    <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[24px]">support_agent</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Sekretariat Kemitraan</span>
                      <h4 className="font-label-lg text-label-lg text-primary font-bold">BUMDes Sejahtera Mandiri</h4>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-secondary text-[20px]">phone_in_talk</span>
                      {" "}
                      <span>+62 812-3456-7890 (Pak Wawan / Direktur)</span>
                    </div>
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-secondary text-[20px]">mail</span>
                      {" "}
                      <span>bumdes@desasejahtera.id</span>
                    </div>
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-secondary text-[20px]">schedule</span>
                      {" "}
                      <span>Senin - Sabtu: 08:30 - 16:30 WIB</span>
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[20px]">info</span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Konsultasi sampel produk & kunjungan studi banding gratis.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm hidden flex items-center justify-center p-4" id="mitra-modal">
            <div className="bg-surface-container-lowest max-w-lg w-full rounded-xl shadow-2xl p-space-lg flex flex-col gap-space-md relative max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/30">
                <div className="flex items-center gap-space-xs text-primary">
                  <span className="material-symbols-outlined text-[24px]">handshake</span>
                  <h3 className="font-headline-sm text-headline-sm">Formulir Minat Kemitraan</h3>
                </div>
                <button className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant" onClick={(event) => { document.getElementById('mitra-modal').classList.add('hidden') }}>
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Silakan isi data institusi atau perusahaan Anda. Pengurus BUMDes akan menghubungi kembali maksimal dalam 2x24 jam kerja.</p>
              <form className="flex flex-col gap-space-sm" onSubmit={(event) => { event.preventDefault(); alert('Terima kasih, permohonan kemitraan Anda telah tersimpan. Pengurus BUMDes akan segera menghubungi.'); document.getElementById('mitra-modal').classList.add('hidden'); }}>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-1">Nama Lengkap & Jabatan</label>
                  <input className="w-full bg-surface-container-low px-space-md py-space-sm rounded text-body-sm font-body-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Contoh: Hendra Kusuma (Manager Pengadaan)" required type="text" />
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-1">Instansi / Badan Usaha</label>
                  <input className="w-full bg-surface-container-low px-space-md py-space-sm rounded text-body-sm font-body-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Contoh: PT Kuliner Nusantara Rasa" required type="text" />
                </div>
                <div className="grid grid-cols-2 gap-space-sm">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-1">Nomor WhatsApp</label>
                    <input className="w-full bg-surface-container-low px-space-md py-space-sm rounded text-body-sm font-body-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="08xxxxxxxxxx" required type="tel" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-1">Kategori Minat</label>
                    <select className="w-full bg-surface-container-low px-space-md py-space-sm rounded text-body-sm font-body-sm focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Beli Pasokan Grosir</option>
                      <option>Kemitraan Pariwisata</option>
                      <option>Riset & PKM Kampus</option>
                      <option>Investasi Sarana</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-1">Rencana Kebutuhan / Pesan Kerjasama</label>
                  <textarea className="w-full bg-surface-container-low px-space-md py-space-sm rounded text-body-sm font-body-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Sebutkan perkiraan kuantitas komoditas, model kerja sama, atau jadwal kunjungan lapang..." rows="3" />
                </div>
                <div className="flex items-center justify-end gap-space-sm pt-space-xs">
                  <button className="px-space-md py-space-sm rounded font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container" onClick={(event) => { document.getElementById('mitra-modal').classList.add('hidden') }} type="button">Batal</button>
                  {" "}
                  <button className="bg-primary text-on-primary font-label-lg text-label-lg px-space-lg py-space-sm rounded shadow hover:bg-primary-container" type="submit">Kirim Pengajuan</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
  );
}
