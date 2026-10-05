"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function ProfilPage() {
  return (
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          <section className="relative w-full overflow-hidden bg-surface-container-low px-6 lg:px-12 py-space-xl lg:py-space-xxl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
              <div className="lg:col-span-8 flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs text-primary font-label-md text-label-md uppercase tracking-widest">
                  <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container inline-block" />
                  {" "}
                  <span>Tentang & Rekam Jejak Komunitas</span>
                </div>
                <h1 className="font-display text-headline-lg lg:text-display text-primary leading-tight">
                  Profil & Sejarah
                  {" "}
                  <br />
                  <span className="text-secondary italic">Desa Sejahtera</span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mt-space-xs">Harmonisasi nilai luhur kearifan lokal Nusantara dengan keterbukaan inovasi tata kelola desa modern demi terwujudnya kemandirian warga yang berakar pada gotong royong.</p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-xs w-full sm:w-80">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Identitas Wilayah</span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-headline-md text-headline-md text-primary font-bold">450 Ha</span>
                    {" "}
                    <span className="font-label-md text-label-md text-on-surface-variant">Luas Teritorial</span>
                  </div>
                  <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm mt-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-primary">verified_user</span>
                    {" "}
                    <span>Desa Mandiri Berkembang © 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-space-xxl">
            <div className="flex flex-col gap-space-sm mb-space-xl">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">Landasan Langkah</span>
              <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary">Visi & Misi Pemerintahan</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
              <div className="lg:col-span-12 relative overflow-hidden bg-primary text-on-primary rounded-xl p-space-lg lg:p-space-xl shadow-md flex flex-col justify-between min-h-[220px]">
                <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary-container rounded-full opacity-50 blur-3xl pointer-events-none" />
                <div className="relative z-10 flex items-center justify-between">
                  <span className="bg-primary-container/80 text-on-primary px-space-md py-1 rounded-full font-label-sm text-label-sm tracking-widest uppercase">Arah Kebijakan Utama</span>
                  {" "}
                  <span className="material-symbols-outlined text-secondary-container text-[36px]">flag</span>
                </div>
                <div className="relative z-10 my-space-md">
                  <p className="font-headline-sm text-label-lg text-tertiary-fixed tracking-wide uppercase font-semibold">Visi Resmi Desa</p>
                  <blockquote className="font-headline-md text-headline-sm lg:text-headline-md font-bold mt-space-xs leading-snug">“Terwujudnya Desa Sejahtera yang berdaya saing, agraris lestari, berakhlak mulia, dan sejahtera merata berbasis digital.”</blockquote>
                </div>
                <div className="relative z-10 flex items-center gap-space-md font-label-md text-label-md text-inverse-primary">
                  <span>Periode RPJMDes 2021 – 2027</span>
                  {" "}
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
                  {" "}
                  <span>Disahkan Musrenbangdes</span>
                </div>
              </div>
              <div className="lg:col-span-3 sm:col-span-6 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-space-sm">
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[26px]">account_balance</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary font-bold">PILAR I</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">Tata Kelola Transparan</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Menyelenggarakan birokrasi pemerintahan desa yang akuntabel, bebas korupsi, dan responsif melalui optimalisasi sistem informasi desa terpadu.</p>
                </div>
                <div className="pt-space-md flex items-center text-primary font-label-sm text-label-sm gap-space-xs">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  {" "}
                  <span>Keterbukaan Data Publik</span>
                </div>
              </div>
              <div className="lg:col-span-3 sm:col-span-6 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-space-sm">
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[26px]">agriculture</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary font-bold">PILAR II</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">Ekonomi Agraris & UMKM</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Memperkuat ketahanan rantai pasok hasil tani serta hilirisasi produk lokal melalui kemitraan strategis BUMDes dan ekosistem digital.</p>
                </div>
                <div className="pt-space-md flex items-center text-primary font-label-sm text-label-sm gap-space-xs">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  {" "}
                  <span>Revitalisasi Pasar Desa</span>
                </div>
              </div>
              <div className="lg:col-span-3 sm:col-span-6 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-space-sm">
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[26px]">school</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary font-bold">PILAR III</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">SDM & Kesehatan Inklusif</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Menjamin pemerataan fasilitas posyandu primer, penurunan angka stunting hingga titik nol, serta pelatihan kejuruan digital bagi generasi muda.</p>
                </div>
                <div className="pt-space-md flex items-center text-primary font-label-sm text-label-sm gap-space-xs">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  {" "}
                  <span>Generasi Sehat Cerdas</span>
                </div>
              </div>
              <div className="lg:col-span-3 sm:col-span-6 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-space-sm">
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[26px]">forest</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary font-bold">PILAR IV</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">Kelestarian Alam & Budaya</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Menjaga ekosistem resapan air pegunungan, pemilahan sampah organik desa, serta merawat ritus tradisi kesenian warisan para leluhur.</p>
                </div>
                <div className="pt-space-md flex items-center text-primary font-label-sm text-label-sm gap-space-xs">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  {" "}
                  <span>Desa Hijau Lestari</span>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-low py-space-xxl">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                <div className="lg:col-span-5 flex flex-col gap-space-md">
                  <div className="relative rounded-xl overflow-hidden shadow-md">
                    <img className="w-full h-80 object-cover" data-alt="Monochrome to vibrant vintage photo of Indonesian rural village elders gathering in traditional balai pertemuan, lush terraced green rice fields in morning light, rustic wood structures, respectful communal atmosphere, documentary editorial photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1NcaDR_m1oaMHF6eLk-Sn7fxUNfCH3LgseWp1FZXPuO5pkzm1GdB6rgjCbUu_EBrJl3-ze7b8Pixj6Qywsv6sIZSmxqm1p4FQnj3stR3mH3lBKBjkAY4fLGvUhTPEhQNl3zDLTxFVs9y-ifr5SE2aYJewLt7AM56mEWHyjhSBjVApWpbYviePuRdgaFI7cZDuxNKORIHWCjwF6IFm8PyMIPcuvo9hhapT7QFaPwY5dp4lvJmSwV2RYQ" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-space-md">
                      <span className="text-on-primary font-label-md text-label-md">Musyawarah Warga Perintis (Tahun 1958)</span>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex items-center gap-space-md">
                    <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary font-bold">67+</div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface">Tahun Dinamika Pertumbuhan</span>
                      {" "}
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Dari permukiman terpencil menjadi desa teladan nasional</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">Lintasan Waktu</span>
                  <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary leading-tight">Perjalanan Panjang Menemukan Kemandirian</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Berawal pada pertengahan abad ke-20 dari sekelompok keluarga tani pelopor yang membuka kawasan lembah subur di lereng bukit. Melalui ikatan kultural
                    {" "}
                    <em>Sambatan</em>
                    {" "}
                    dan
                    {" "}
                    <em>Gugur Gunung</em>
                    , komunitas kecil ini membangun jaringan irigasi mandiri yang mengubah rawa-rawa menjadi lumbung padi produktif.
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Seiring dekade berganti, Desa Sejahtera terus berbenah. Memasuki era digitalisasi, komitmen gotong royong tersebut tidak lekang, melainkan bertransformasi menjadi platform keterbukaan anggaran, pusat inkubasi wirausaha desa, dan pelayanan administrasi paperless tanpa meninggalkan akar tradisi guyub rukun masyarakat Nusantara.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-sm">
                    <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
                      <span className="font-label-sm text-label-sm text-secondary font-bold">1958 - 1974</span>
                      <h4 className="font-headline-sm text-headline-sm text-primary mt-1">Masa Perintisan</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Pembukaan batas adat & pembangunan jalur primer irigasi swadaya.</p>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
                      <span className="font-label-sm text-label-sm text-secondary font-bold">1975 - 2010</span>
                      <h4 className="font-headline-sm text-headline-sm text-primary mt-1">Sentra Agraris</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Swasembada pangan komoditas hortikultura dan pembentukan koperasi desa.</p>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
                      <span className="font-label-sm text-label-sm text-secondary font-bold">2011 - Sekarang</span>
                      <h4 className="font-headline-sm text-headline-sm text-primary mt-1">Desa Percontohan</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Integrasi layanan pintar berbasis data desa dan pariwisata berkelanjutan.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-space-xxl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-xl">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">Aparatur Pemerintahan</span>
                <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary">Struktur Organisasi Desa</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Pelayan masyarakat yang berdedikasi mengawal pembangunan inklusif dan akuntabilitas publik periode 2021–2027.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
              <div className="lg:col-span-2 sm:col-span-2 bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col sm:flex-row items-center gap-space-lg">
                <img className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover flex-shrink-0 shadow-sm" data-alt="Dignified Indonesian village head middle-aged male in brown formal civil servant uniform wearing traditional peci, warm friendly smile, natural soft daylight, professional portrait photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcqtrAfmYIBFJAgbNfEduklLlaVJT7fnr0fghsmJ6dM8DSSGCblvBy5M_DK-2uqhD-SLEwWkKuiL4PHjPzjB8TMmlMTd_4OvpS0023tOtSFIQd7tZyDaz0UpG9n9ZTTlOEOPrJ8-IwcET6OJvFsLpjcenYzIR__IK3iKl2g7ooLEn0we32mFm5jTSKYcRgKtnX4hkz3N6nbs0n-Flyy9D8NHKOTJaY4tG_UAVFLRBLciki0mKi2T-CGg" />
                <div className="flex flex-col text-center sm:text-left gap-space-xs">
                  <span className="bg-primary-fixed text-on-primary-fixed self-center sm:self-start px-space-sm py-0.5 rounded-full font-label-sm text-label-sm">Pemimpin Wilayah</span>
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">H. Suryadi Pratama, S.P.</h3>
                  <span className="font-label-lg text-label-lg text-secondary">Kepala Desa Sejahtera</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">Menahkodai akselerasi transformasi digital tata kelola desa, penguatan Bumdes, dan perlindungan lahan produktif masyarakat.</p>
                  <div className="flex items-center justify-center sm:justify-start gap-space-sm pt-space-xs text-primary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                    {" "}
                    <span>kades@desasejahtera.id</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 sm:col-span-2 bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col sm:flex-row items-center gap-space-lg">
                <img className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover flex-shrink-0 shadow-sm" data-alt="Professional Indonesian woman village secretary in formal batik attire, neat hijab, gentle composed expression, modern bright office ambient lighting, portrait shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX1kJBGfkjEDPscjdGmREMCYWps_-WuKCP66DL_yYfS9fugUrtnNiaRX5WYrzaIC9X_Hjz0KajW_sz0YWNy0YMSA_0GZ5_LtgT9imPYcdjFvKaHwK27Y0JR1dL7yClGOpcNIOJ8_qrh_ogW7v8sYQYaEMlYq0rQVhlrE8NkOyGJB9xamdHLBtWn8RBFeb1n9tVthSPtzr49lagi4ucdkzstkiT9pCKZCn0y9rYFcsSYXZFlnRe1RsaYA" />
                <div className="flex flex-col text-center sm:text-left gap-space-xs">
                  <span className="bg-surface-variant text-on-surface-variant self-center sm:self-start px-space-sm py-0.5 rounded-full font-label-sm text-label-sm">Koordinator Administrasi</span>
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">Ratna Dewi Rahayu, M.Si.</h3>
                  <span className="font-label-lg text-label-lg text-secondary">Sekretaris Desa</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">Mengelola ketatausahaan, perumusan regulasi desa, serta pengawasan keterbukaan informasi publik dan arsip digital.</p>
                  <div className="flex items-center justify-center sm:justify-start gap-space-sm pt-space-xs text-primary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                    {" "}
                    <span>sekdes@desasejahtera.id</span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col items-center text-center">
                <img className="w-24 h-24 rounded-full object-cover shadow-sm mb-space-sm" data-alt="Indonesian male financial officer smiling gently, wearing clean formal batik shirt, neutral green-tint background, headshot portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApTJlc4zywDRgMACAJwXFhk7ay-kfbHPz7z-jc8ls7xsZN0dbR06U66h0PGsh--YtIPTm5HEMaq5F7C9RiAhtzhRfgYkNQcraFIYd-zISADuSRgmFk2VTAW4_ESMcDu9Mv2DKXxkYlg3_xBLZu9GN7uPi0NRHgg9_EtsizNef0920o4SuPeHoUet89WfxmFacr8CcNO3kNEURZApkXbnNStIWN_xiQ3ag7j87v_6SKPoSn8fMu9SpBfw" />
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">Bambang Wijaya</h4>
                <span className="font-label-md text-label-md text-secondary font-semibold">Kaur Keuangan</span>
                {" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Pengelolaan APBDes & Pelaporan Realisasi Anggaran</span>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col items-center text-center">
                <img className="w-24 h-24 rounded-full object-cover shadow-sm mb-space-sm" data-alt="Young Indonesian female development planner wearing modern hijab and neat shirt, intelligent friendly look, office ambient light, headshot portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBneNiIikp2jldOaoqo2P26g9Q8bIyW3RC7S_1eLi_IfnIo-YaNVz_DnEwrAws9LKMQjKEQz8t5HifrEFGkg2FKke0AgU13HxFVaxpasKuCirERoqrGVk86R3pyArIc3pyDwIzGbbgEWLE4f1S7eEbdAVI34OCQD-F4T2qy3J6L4CFxhEHEyCRs0F6NN_3hxlNNC8zaQc-8E4uiYcL4ARf6WKdkNg8km_Ad3UqAjjzUIzjr6cdmWVeT3Q" />
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">Nurul Hidayati, S.T.</h4>
                <span className="font-label-md text-label-md text-secondary font-semibold">Kaur Perencanaan</span>
                {" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Penyusunan RKPDes & Pemetaan Infrastruktur Fisik</span>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col items-center text-center">
                <img className="w-24 h-24 rounded-full object-cover shadow-sm mb-space-sm" data-alt="Friendly Indonesian male civil service officer in khaki uniform, approachable smile, crisp lighting, headshot portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiEud7gb0NQmphMkVD3aw17XMTIWr29O2QlGm3RtvEWVJa90KHTaX2WrqmBpeuHmMFoQJD3JHKVEq_yjm3vskO_F5sXZdgA0WtlT9UCTSiIOvgGOfPljv0ScjKx_RWlSPqqkoicNqUpkUBDeazSb30qz2XGYrn7zEz-72q0dgnbjCGWhz9P7pzBCSJSH_txwr2foo4vu3EhbCGDOHt658knL8cNdoaUEzZaskAbdoFrN-DgmqAOKmKqQ" />
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">Agus Setiawan</h4>
                <span className="font-label-md text-label-md text-secondary font-semibold">Kasi Pelayanan</span>
                {" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Penerbitan Surat Pengantar & Layanan Kependudukan</span>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col items-center text-center">
                <img className="w-24 h-24 rounded-full object-cover shadow-sm mb-space-sm" data-alt="Indonesian woman community welfare officer with warm motherly expression, wearing batik, soft natural studio light, headshot portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqSaCauJZzjAYGlJCWD_FQqEcYenSGCGCB18URdiVhruLS4ywn0cKSOwrKXZVV9-uCvRYLn-h9CjgdOP9bwtTu_33rlz30JoMOR3a8_YcBD9LfuScYCzFDul9Fq91aZXwrK_ZxlG3YYUWvIx33ja9_GKsgV0Os0W-L0BVTJx40nflAog2BgAh_7bfoT64g0uOEdKaHXwTojhljUuDLz3gzzbRTtGaKNzAM5A6Gs6ObZIyPQbmyHs085g" />
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">Siti Maryam</h4>
                <span className="font-label-md text-label-md text-secondary font-semibold">Kasi Kesejahteraan</span>
                {" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Bansos, Program Posyandu, & Pemberdayaan Perempuan</span>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col items-center text-center">
                <img className="w-24 h-24 rounded-full object-cover shadow-sm mb-space-sm" data-alt="Weathered respectful Indonesian male hamlet chief in rural setting with traditional lurik shirt, authentic warm gaze, headshot portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKNqrZyt6lxHhmz6Z6LHfwLCb2k9_3ZsUiBgAvJmIuRPJIvMdfxeYcRytnhgXzcOdzERCs-KzPCfProTHDwSMdJNq6i3T32Wv3C6XouhH5BK8WDPESHa7LG4cJ3Waedxi-Gj0KhqZWnQ2yOB2nZVB2KN6Ob1ZN-_8oiwr5ulzzn_eXv2DGjZQXWCYWwJW7KZ2WxTHWseOuaMUSK5chjga52W2yxfldzSm-EQrRhPySvLYeCX5IOLlbAw" />
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">Wayan Suhartono</h4>
                <span className="font-label-md text-label-md text-secondary font-semibold">Kepala Dusun I</span>
                {" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Wilayah Dusun Mekar Sari (Sentra Hortikultura)</span>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col items-center text-center">
                <img className="w-24 h-24 rounded-full object-cover shadow-sm mb-space-sm" data-alt="Middle-aged Indonesian male hamlet leader wearing casual safari shirt, friendly confident expression, outdoor shade, headshot portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABryXFs_B7xg9QNgtiSt57ZCfdjpHnzQNDZEIWsQQHqnToze-R-yKNGkPY6PZtb5TM94XOuKfkOLirGno4TrQSTPGOxOGSaMfLkUh6eUtS2oyDtLOPkE8BAPyZsQIPfcUOxsfH7i4YPBiL2Uby_sK4roHq9xPAZ8wUZ64cvodPrDQ0Grjy6FAS1E7elrFTO3yAlC-OvYVkmCKZ1QqZAuTDg3AgKUmMHPzUW_m2nBri8wfG0RCWxbcJQQ" />
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">Dedi Kurniawan</h4>
                <span className="font-label-md text-label-md text-secondary font-semibold">Kepala Dusun II</span>
                {" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Wilayah Dusun Sukamaju (Kawasan Niaga & Industri Rumahan)</span>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col items-center text-center">
                <img className="w-24 h-24 rounded-full object-cover shadow-sm mb-space-sm" data-alt="Elderly Indonesian gentleman with serene expression wearing neat batik shirt, community elder, natural bokeh light, headshot portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1a6O-8zvyb9RQQZfqDZFld6UXAkvfc0vwoYbvH5g3vdoybNCkmN8uKGh4XPXOJhGqej2X_HSH_nX9loWa7OTb-p6qjV6Q65Vu9vn8Zg1Mzm2d-TpYNb5TV5w_cNuvaEumP6prho8zmJz9rE6qU8hl2I8bf10_de93mUI4ihIIIvkWj4xN0L5dV0anOpbrIrtp4MGMXqm1IzsmNvgHfRk9B1GySgqecvI5tNlu_QQKYtj-jwqarH6GVQ" />
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">Kasman Sudrajat</h4>
                <span className="font-label-md text-label-md text-secondary font-semibold">Kepala Dusun III</span>
                {" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Wilayah Dusun Wana Asri (Kawasan Lindung & Ekowisata)</span>
              </div>
              <div className="bg-primary text-on-primary p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm text-secondary-container uppercase tracking-wider font-bold">Badan Permusyawaratan</span>
                  <h4 className="font-headline-sm text-headline-sm">BPD & Lembaga Adat</h4>
                  <p className="font-body-sm text-body-sm text-inverse-on-surface/80 mt-1">Bermitra aktif dalam pengawasan dan perumusan Peraturan Desa secara partisipatif bersama warga.</p>
                </div>
                <div className="pt-space-md flex items-center justify-between text-tertiary-fixed font-label-md text-label-md">
                  <span>7 Anggota Dewan Desa</span>
                  {" "}
                  <span className="material-symbols-outlined text-[20px]">groups</span>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-low py-space-xxl">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-space-xl">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">Geospasial & Kependudukan</span>
                <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary">Peta Wilayah & Statistik Demografi</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
                <div className="lg:col-span-7 flex flex-col gap-space-lg">
                  <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-md">
                    <div className="w-full h-full bg-cover bg-center" data-location="Desa Sejahtera, Kecamatan Nusantara, Indonesia" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuABcquvFClnwr0n4W-wW77AcMoYzMjNdhSY3USPJ4d-kxfE_tq5HeUqaKL8uXcYsBD9_yeEwrANgSinBxLsjFwnVgaw2e4a_T-dWv9xDM_vvrdtDmeIvG_yVV2d_vspAygW_f_YxbSi8soAtEQ8JLs5qNJLTaJr7MsvnczZkl_JARP3NFbufRXdFf0-eXZDdtbkiyJEpL2gwJ3XAdm7oM9I0TFLXHWrPrOYNY776I4YW3ieEoJSMHVx_A')" }} />
                    <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-space-md py-space-xs rounded-lg shadow-sm flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[20px]">map</span>
                      {" "}
                      <span className="font-label-md text-label-md text-on-surface">Peta Topografi Desa (450 Ha)</span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-primary text-on-primary px-space-md py-space-xs rounded-lg shadow-sm font-label-sm text-label-sm">Ketinggian: 420 - 680 mdpl</div>
                  </div>
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                    <h3 className="font-headline-sm text-headline-sm text-primary flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary">explore</span>
                      {" "}
                      <span>Batas Administratif Wilayah</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="flex items-start gap-space-sm p-space-sm bg-surface rounded-lg">
                        <div className="w-8 h-8 rounded bg-primary-fixed flex items-center justify-center text-primary font-bold text-label-md flex-shrink-0">U</div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-secondary uppercase">Batas Utara</span>
                          {" "}
                          <span className="font-body-sm text-body-sm text-on-surface font-semibold">Desa Bukit Makmur & Hutan Lindung</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm p-space-sm bg-surface rounded-lg">
                        <div className="w-8 h-8 rounded bg-primary-fixed flex items-center justify-center text-primary font-bold text-label-md flex-shrink-0">S</div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-secondary uppercase">Batas Selatan</span>
                          {" "}
                          <span className="font-body-sm text-body-sm text-on-surface font-semibold">Aliran Sungai Ciberang & Desa Sindang</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm p-space-sm bg-surface rounded-lg">
                        <div className="w-8 h-8 rounded bg-primary-fixed flex items-center justify-center text-primary font-bold text-label-md flex-shrink-0">T</div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-secondary uppercase">Batas Timur</span>
                          {" "}
                          <span className="font-body-sm text-body-sm text-on-surface font-semibold">Kecamatan Mekarjaya (Jalan Poros Provinsi)</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm p-space-sm bg-surface rounded-lg">
                        <div className="w-8 h-8 rounded bg-primary-fixed flex items-center justify-center text-primary font-bold text-label-md flex-shrink-0">B</div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-secondary uppercase">Batas Barat</span>
                          {" "}
                          <span className="font-body-sm text-body-sm text-on-surface font-semibold">Desa Harapan Baru & Perkebunan Teh</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-space-lg">
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <h3 className="font-headline-sm text-headline-sm text-primary">Komposisi Mata Pencaharian</h3>
                      <span className="text-secondary font-label-sm text-label-sm">Total 4.820 Jiwa Produktif</span>
                    </div>
                    <div className="flex flex-col gap-space-md">
                      <div className="w-full flex h-4 rounded-full overflow-hidden">
                        <div className="bg-primary" style={{ width: "55%" }} title="Petani 55%" />
                        <div className="bg-secondary-container" style={{ width: "20%" }} title="Pedagang / UMKM 20%" />
                        <div className="bg-primary-container" style={{ width: "15%" }} title="Karyawan / ASN 15%" />
                        <div className="bg-surface-variant" style={{ width: "10%" }} title="Lainnya 10%" />
                      </div>
                      <div className="flex flex-col gap-space-sm font-body-sm text-body-sm">
                        <div className="flex items-center justify-between p-space-xs hover:bg-surface rounded transition-colors">
                          <div className="flex items-center gap-space-sm">
                            <span className="w-3 h-3 rounded-full bg-primary inline-block" />
                            {" "}
                            <span className="text-on-surface">Petani & Penggarap Agraris</span>
                          </div>
                          <span className="font-bold text-primary">55%</span>
                        </div>
                        <div className="flex items-center justify-between p-space-xs hover:bg-surface rounded transition-colors">
                          <div className="flex items-center gap-space-sm">
                            <span className="w-3 h-3 rounded-full bg-secondary-container inline-block" />
                            {" "}
                            <span className="text-on-surface">Pedagang & Pelaku UMKM</span>
                          </div>
                          <span className="font-bold text-secondary">20%</span>
                        </div>
                        <div className="flex items-center justify-between p-space-xs hover:bg-surface rounded transition-colors">
                          <div className="flex items-center gap-space-sm">
                            <span className="w-3 h-3 rounded-full bg-primary-container inline-block" />
                            {" "}
                            <span className="text-on-surface">Karyawan Swasta & ASN</span>
                          </div>
                          <span className="font-bold text-primary-container">15%</span>
                        </div>
                        <div className="flex items-center justify-between p-space-xs hover:bg-surface rounded transition-colors">
                          <div className="flex items-center gap-space-sm">
                            <span className="w-3 h-3 rounded-full bg-outline-variant inline-block" />
                            {" "}
                            <span className="text-on-surface">Lainnya (Jasa, Seni, Mahasiswa)</span>
                          </div>
                          <span className="font-bold text-on-surface-variant">10%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                      <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Rasio Gender</span>
                      <div className="flex items-center justify-between my-space-sm">
                        <div className="flex flex-col items-center">
                          <span className="material-symbols-outlined text-primary text-[32px]">man</span>
                          {" "}
                          <span className="font-headline-sm text-headline-sm text-primary font-bold">50.8%</span>
                          {" "}
                          <span className="font-label-sm text-label-sm text-on-surface-variant">Laki-laki</span>
                        </div>
                        <div className="h-10 w-0.5 bg-surface-container" />
                        <div className="flex flex-col items-center">
                          <span className="material-symbols-outlined text-secondary text-[32px]">woman</span>
                          {" "}
                          <span className="font-headline-sm text-headline-sm text-secondary font-bold">49.2%</span>
                          {" "}
                          <span className="font-label-sm text-label-sm text-on-surface-variant">Perempuan</span>
                        </div>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant text-center">Total 6.240 Warga Terdaftar</span>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                      <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Pendidikan Warga</span>
                      <div className="flex flex-col gap-space-xs my-space-xs font-body-sm text-body-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-on-surface">SMA / SMK Sederajat</span>
                          {" "}
                          <span className="font-bold text-primary">42%</span>
                        </div>
                        <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                          <div className="bg-primary h-1.5" style={{ width: "42%" }} />
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-on-surface">Diploma / Sarjana (S1+)</span>
                          {" "}
                          <span className="font-bold text-primary">28%</span>
                        </div>
                        <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                          <div className="bg-secondary-container h-1.5" style={{ width: "28%" }} />
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-on-surface">SD & SMP Sederajat</span>
                          {" "}
                          <span className="font-bold text-primary">30%</span>
                        </div>
                        <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                          <div className="bg-surface-variant h-1.5" style={{ width: "30%" }} />
                        </div>
                      </div>
                      <span className="font-label-sm text-label-sm text-primary font-semibold text-center mt-1">100% Bebas Buta Aksara</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-space-xl">
            <div className="bg-primary-container text-on-primary rounded-2xl p-space-lg lg:p-space-xl shadow-lg flex flex-col lg:flex-row items-center justify-between gap-space-lg">
              <div className="flex flex-col gap-space-xs text-center lg:text-left">
                <span className="font-label-sm text-label-sm text-tertiary-fixed tracking-wider uppercase">Layanan Transparansi Desa</span>
                <h3 className="font-headline-md text-headline-sm lg:text-headline-md font-bold">Ingin Mengajukan Aspirasi atau Berkas Kependudukan?</h3>
                <p className="font-body-md text-body-md text-inverse-on-surface/90 max-w-xl">Gunakan portal Layanan Mandiri Desa Sejahtera untuk pengecekan data bansos, surat keterangan domisili, atau sampaikan aspirasi musyawarah secara langsung.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-space-md w-full sm:w-auto">
                <Link href="/kontak" className="inline-flex items-center justify-center bg-secondary-container text-on-secondary-container font-label-lg text-label-lg px-space-lg py-space-sm rounded-lg shadow-sm hover:opacity-90 transition-opacity">Akses Layanan Mandiri</Link>
                {" "}
                <Link href="/kontak" className="inline-flex items-center justify-center bg-surface-container-lowest/10 text-on-primary font-label-lg text-label-lg px-space-lg py-space-sm rounded-lg hover:bg-surface-container-lowest/20 transition-colors">Hubungi Pengurus</Link>
              </div>
            </div>
          </section>
        </div>
      </main>
  );
}
