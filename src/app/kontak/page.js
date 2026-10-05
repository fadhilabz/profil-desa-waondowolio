"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";

export default function KontakPage() {
  useEffect(() => {
    function toggleFaq(button) {
      const content = button.nextElementSibling;
      const icon = button.querySelector('.material-symbols-outlined');
      const isHidden = content.classList.contains('hidden');

      // Close all other accordions for clean UX
      document.querySelectorAll('#faqAccordion .faq-content').forEach(el => {
        el.classList.add('hidden');
      });
      document.querySelectorAll('#faqAccordion .material-symbols-outlined').forEach(el => {
        el.classList.remove('rotate-180');
      });

      if (isHidden) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
      }
    }

    function submitAspiration() {
      const form = document.getElementById('contactForm');
      const alert = document.getElementById('formSuccessAlert');

      // Visual feedback
      alert.classList.remove('hidden');
      form.reset();

      // Auto-scroll slightly to success message
      alert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    window.toggleFaq = toggleFaq;
    window.submitAspiration = submitAspiration;
    return () => {
      delete window.toggleFaq;
      delete window.submitAspiration;
    };
  }, []);

  return (
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          <section className="relative w-full overflow-hidden bg-surface-container-low py-space-xl lg:py-space-xxl">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none" />
            <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs self-start px-space-md py-space-xs rounded-full bg-surface-container text-primary font-label-sm text-label-sm uppercase tracking-widest shadow-sm">
                <span className="material-symbols-outlined text-[16px]">support_agent</span>
                {" "}
                <span>Pusat Komunikasi & Partisipasi Warga</span>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
                <div className="max-w-2xl">
                  <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Hubungi Kami & Layanan Aspirasi</h1>
                  <p className="mt-space-sm font-body-lg text-body-lg text-on-surface-variant">Pemerintah Desa Sejahtera membuka ruang seluas-luasnya bagi masyarakat untuk menyampaikan permohonan layanan, gagasan pembangunan, hingga aduan fasilitas umum secara terbuka dan transparan.</p>
                </div>
                <div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-sm self-start lg:self-auto">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-container opacity-75" />
                    {" "}
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary-container" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface">Meja Layanan Siaga</span>
                    {" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Rata-rata respons: ≤ 24 Jam Kerja</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-space-xl lg:py-space-xxl">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
                <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-md">
                  <div className="flex items-center justify-between pb-space-md">
                    <div>
                      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">Formulir Interaktif</span>
                      <h2 className="font-headline-md text-headline-md text-on-surface mt-1">Kirim Aspirasi & Pengajuan</h2>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[28px]">mark_email_read</span>
                    </div>
                  </div>
                  <form className="flex flex-col gap-space-md mt-space-sm" id="contactForm" onSubmit={(event) => { event.preventDefault(); window.submitAspiration(); }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-md text-label-md text-on-surface flex items-center gap-1" htmlFor="fullName">
                          Nama Lengkap
                          {" "}
                          <span className="text-error">*</span>
                        </label>
                        <input className="w-full bg-surface-container-low text-on-surface rounded p-space-md font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all" id="fullName" name="fullName" placeholder="Misal: Bambang Hermawan" required type="text" />
                      </div>
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-md text-label-md text-on-surface flex items-center gap-1" htmlFor="nikPhone">
                          NIK / No. WhatsApp Aktif
                          {" "}
                          <span className="text-error">*</span>
                        </label>
                        <input className="w-full bg-surface-container-low text-on-surface rounded p-space-md font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all" id="nikPhone" name="nikPhone" placeholder="3201xxx atau 0812xxx" required type="text" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-md text-label-md text-on-surface flex items-center gap-1" htmlFor="category">
                        Kategori Keperluan
                        {" "}
                        <span className="text-error">*</span>
                      </label>
                      <div className="relative">
                        <select className="w-full appearance-none bg-surface-container-low text-on-surface rounded p-space-md font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all cursor-pointer" id="category" name="category" required>
                          <option disabled value="">Pilih Kategori Permohonan</option>
                          <option value="layanan-surat">Pelayanan Administrasi & Surat Keterangan</option>
                          <option value="aspirasi-saran">Aspirasi & Usulan Pembangunan</option>
                          <option value="pengaduan">Pengaduan Fasilitas Umum / Keamanan</option>
                          <option value="kunjungan-riset">Izin Kunjungan Tamu / Penelitian Akademik</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-space-md top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-md text-label-md text-on-surface flex items-center gap-1" htmlFor="message">
                        Pesan / Uraian Rinci
                        {" "}
                        <span className="text-error">*</span>
                      </label>
                      <textarea className="w-full bg-surface-container-low text-on-surface rounded p-space-md font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all" id="message" name="message" placeholder="Tuliskan keterangan lengkap kebutuhan Anda, cantumkan RT/RW jika terkait aduan lingkungan..." required rows="5" />
                    </div>
                    <div className="flex items-start gap-space-sm p-space-sm rounded bg-surface-container-low">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">verified_user</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Data Anda dilindungi oleh Kebijakan Keterbukaan Informasi dan Hak Privasi Desa. Laporan langsung diteruskan ke staf berwenang.</p>
                    </div>
                    <button className="w-full inline-flex items-center justify-center gap-space-sm bg-primary text-on-primary font-label-lg text-label-lg py-space-md px-space-lg rounded shadow-md hover:bg-primary-container transition-all active:scale-[0.99]" type="submit">
                      <span>Kirim Pesan ke Pengurus Desa</span>
                      {" "}
                      <span className="material-symbols-outlined text-[20px]">send</span>
                    </button>
                  </form>
                  <div className="hidden mt-space-md p-space-md bg-primary-fixed text-on-primary-fixed rounded flex items-center gap-space-md animate-fade-in" id="formSuccessAlert">
                    <span className="material-symbols-outlined text-primary text-[28px]">check_circle</span>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md font-bold">Terima kasih! Pesan Anda telah terdaftar.</span>
                      {" "}
                      <span className="font-body-sm text-body-sm">Nomor tiket aspirasi telah diteruskan ke petugas piket desa.</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-space-lg">
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
                    <div className="flex items-center gap-space-sm text-primary">
                      <span className="material-symbols-outlined text-[24px]">account_balance</span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">Kantor Pemerintahan Desa</h3>
                    </div>
                    <div className="flex flex-col gap-space-md font-body-md text-body-md text-on-surface-variant">
                      <div className="flex items-start gap-space-md">
                        <div className="w-10 h-10 rounded-full bg-surface-container-high flex-shrink-0 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">pin_drop</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md text-on-surface">Alamat Resmi</span>
                          {" "}
                          <span>Jl. Raya Sejahtera No. 12, Kec. Harapan Makmur, Kab. Nusantara, 65123</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-md">
                        <div className="w-10 h-10 rounded-full bg-surface-container-high flex-shrink-0 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">schedule</span>
                        </div>
                        <div className="flex flex-col w-full">
                          <span className="font-label-md text-label-md text-on-surface">Jam Operasional Pelayanan</span>
                          <div className="mt-1 p-space-sm rounded bg-surface-container-low flex flex-col gap-1 text-on-surface text-body-sm">
                            <div className="flex justify-between font-label-md">
                              <span>Senin - Jumat:</span>
                              {" "}
                              <span className="text-primary font-bold">08.00 - 15.30 WIB</span>
                            </div>
                            <div className="flex justify-between text-secondary">
                              <span>Sabtu & Minggu:</span>
                              {" "}
                              <span>Libur Pelayanan Kantor</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-md">
                        <div className="w-10 h-10 rounded-full bg-surface-container-high flex-shrink-0 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">call</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md text-on-surface">WhatsApp Siaga Warga (24 Jam)</span>
                          {" "}
                          <a className="font-headline-sm text-headline-sm text-secondary hover:underline tracking-tight" href="https://wa.me/6281234567890" rel="noopener" target="_blank">+62 812-3456-7890</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-md">
                        <div className="w-10 h-10 rounded-full bg-surface-container-high flex-shrink-0 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md text-on-surface">Surel Resmi</span>
                          {" "}
                          <a className="text-primary hover:underline" href="mailto:info@desasejahtera.go.id">info@desasejahtera.go.id</a>
                          {" "}
                          <a className="text-primary hover:underline" href="mailto:layanan@desasejahtera.desa.id">layanan@desasejahtera.desa.id</a>
                        </div>
                      </div>
                    </div>
                    <div className="pt-space-md border-t-0 flex flex-col gap-space-xs">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Kanal Media Sosial Resmi</span>
                      <div className="flex items-center gap-space-sm pt-space-xs">
                        <a className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container hover:bg-primary hover:text-on-primary transition-all font-label-sm text-label-sm text-on-surface" href="#">
                          <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                          {" "}
                          <span>Instagram</span>
                        </a>
                        {" "}
                        <a className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container hover:bg-primary hover:text-on-primary transition-all font-label-sm text-label-sm text-on-surface" href="#">
                          <span className="material-symbols-outlined text-[16px]">public</span>
                          {" "}
                          <span>Facebook</span>
                        </a>
                        {" "}
                        <a className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container hover:bg-primary hover:text-on-primary transition-all font-label-sm text-label-sm text-on-surface" href="#">
                          <span className="material-symbols-outlined text-[16px]">smart_display</span>
                          {" "}
                          <span>YouTube</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary text-on-primary rounded-xl p-space-lg shadow-md flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider">Butuh Pertolongan Darurat?</span>
                      {" "}
                      <span className="font-headline-sm text-headline-sm font-bold">Pos Kamling & Ambulans Desa</span>
                      {" "}
                      <span className="font-body-sm text-body-sm opacity-90 mt-1">Siap siaga 24 jam untuk kegawatdaruratan warga.</span>
                    </div>
                    <a className="p-space-md rounded-full bg-secondary text-on-secondary shadow-lg hover:bg-secondary-container transition-all flex items-center justify-center" href="tel:112">
                      <span className="material-symbols-outlined text-[28px]">phone_in_talk</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-low py-space-xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-space-md">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">Aksesibilitas Wilayah</span>
                  <h2 className="font-headline-md text-headline-md text-on-surface">Lokasi Balai Desa Sejahtera</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">Terletak strategis di poros jalan utama kecamatan, mudah diakses kendaraan roda dua maupun roda empat.</p>
                </div>
                <a className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-primary hover:text-primary-container transition-colors self-start md:self-auto" href="https://maps.google.com" rel="noopener" target="_blank">
                  <span>Buka di Google Maps Penuh</span>
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                </a>
              </div>
              <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden shadow-md">
                <div className="w-full h-full bg-cover bg-center" data-location="Kantor Desa Sejahtera, Harapan Makmur, Indonesia" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHkHgl1fKFc8FKjz0Ai32NGj2AqkIAIW5DcPi2hvNSJUJ9WY5Pj00SRgS0vtJCt8nr1rnQTqYz1NE1Xty-Zgbra7qTu8GMQkYC6Vi6OZW6d_V6a1im6JO5D-VfUfS5T3ysMVOeA6eLUYUVnGBl_9Zs7tP0YF711pAMhp0LXH2T2Q0ToFuvBQ02FGcVKQEnQYvgcGv7VnVi0wrxuqjysT_lYqvpTwLjsICyZGPLRCUZXFcd3zemQ4BMUw')" }} />
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-surface-container-lowest/95 backdrop-blur-md p-space-md rounded-lg shadow-lg flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[24px]">directions</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-md text-label-md text-on-surface truncate">Balai & Kantor Pelayanan Terpadu</span>
                    {" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant truncate">Samping Lapangan Olahraga Krida</span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-primary font-bold mt-0.5">Parkir Luas • Ramah Difabel</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-space-xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                <div className="relative rounded-xl overflow-hidden shadow-sm h-60 group">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Modern rural Indonesian village hall service counter with smiling administrative officers helping local citizens in bright warm daylight with wooden aesthetic details" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvkhPPR5SucLvwJ1jvxWgmIv1XL62Ayi43zzr8dRG74RUqiRvY343MybZ49Pz-DbUyE3AwkexE14wD34C8xgjPt6J_oncLE3z0lshfHzzxMnVKJ1_13I2EEzJHGSyKd-Y3U2iLZNmDguD26l4fSRwpLZcIGv0qt6cRg6wClMkS6XZK4dfDKcL0bzsgeLAKXvcEcZTwutFHDYsd3zzjSvTNfK-ZgH2lbcSgPfVg1dAlOWdr1La0-P3exg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-space-md">
                    <span className="font-label-md text-label-md text-on-primary">Pelayanan Cepat Satu Pintu</span>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-sm h-60 group">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Village elders and young residents participating actively in an open village deliberation musyawarah meeting inside a tidy bamboo-accented community hall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcjsVwsqPy3e59fyXiAcoCvIIiuxCYos1JJvF9N8mN8t6kRjEcGl45vdS4cvNZH9TfNwH30kSHlQic0qU1t1IHVO0C8baivfwjYYDCgLs21m70-W304euwpMh_lqjV7i67nsE34wn_oXW_nKMWYpKTPMEw6Z7fCqEkbi8djFNd6TJxTdbnI2NF9P2izprvi8BAg7vCXQ3iYNA-stj1hL7nY8E4iSIdkFf0t3iNbVp6ERaJ5m2EJdeurw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-space-md">
                    <span className="font-label-md text-label-md text-on-primary">Musyawarah Warga Terbuka</span>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-sm h-60 group">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Scenic eco-tourism camping ground with lush green pine forests and neat pedestrian walkway in Desa Sejahtera at sunrise with golden natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClL6nuYGfG7d1JrxqORxvDSFjPUWjc7gGRLG4QVDs8fYX_6rl5LEyupimQDlZ0GepED9yaEWBdgbfgxdn33oiFxxCP421kfp5wtRNaq9SHqG55Y6BYsq5Akzm7hRDVBWJ7huYWP2_5Py_L-PGxqzxhAlwDr3Dscsr2mMW_CiBWGYxCfghgJyjyiV2K9rlu9JDTCzllIfbUg_eYC_cPQ1TbpsnTtJa3cHQilgtIk2L5U-BKAAIDYvQe9Q" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-space-md">
                    <span className="font-label-md text-label-md text-on-primary">Kawasan Ekowisata & Riset</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full pb-space-xxl">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col gap-space-lg">
              <div className="text-center flex flex-col items-center gap-space-xs">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">Pusat Bantuan Cepat</span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Pertanyaan yang Sering Diajukan</h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">Ketahui prosedur pengurusan surat, pendaftaran bantuan, dan ketentuan kunjungan sebelum hadir ke kantor desa.</p>
              </div>
              <div className="flex flex-col gap-space-sm" id="faqAccordion">
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all">
                  <button className="w-full p-space-md sm:p-space-lg text-left flex items-center justify-between gap-space-md focus:outline-none hover:bg-surface-container-low transition-colors" onClick={(event) => { window.toggleFaq(event.currentTarget) }} type="button">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Berapa lama proses surat pengantar online?</span>
                    {" "}
                    <span className="material-symbols-outlined text-primary text-[24px] transition-transform duration-300 transform">expand_more</span>
                  </button>
                  <div className="faq-content hidden px-space-md sm:px-space-lg pb-space-lg pt-0 text-on-surface-variant font-body-md text-body-md">
                    <div className="p-space-md rounded bg-surface-container-low text-on-surface-variant flex flex-col gap-space-xs">
                      <p>
                        Surat pengantar administrasi (seperti Keterangan Domisili, Pengantar SKCK, Keterangan Usaha, dll.) yang diajukan melalui portal Layanan Mandiri atau WhatsApp Siaga membutuhkan waktu validasi
                        {" "}
                        <strong>maksimal 1 x 24 jam kerja</strong>
                        .
                      </p>
                      <p className="text-body-sm text-primary font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">task_alt</span>
                        {" "}
                        Dokumen bertanda tangan elektronik (TTE) dapat diunduh langsung berupa file PDF ber-barcode resmi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all">
                  <button className="w-full p-space-md sm:p-space-lg text-left flex items-center justify-between gap-space-md focus:outline-none hover:bg-surface-container-low transition-colors" onClick={(event) => { window.toggleFaq(event.currentTarget) }} type="button">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Bagaimana prosedur mengurus bansos atau bantuan UMKM?</span>
                    {" "}
                    <span className="material-symbols-outlined text-primary text-[24px] transition-transform duration-300 transform">expand_more</span>
                  </button>
                  <div className="faq-content hidden px-space-md sm:px-space-lg pb-space-lg pt-0 text-on-surface-variant font-body-md text-body-md">
                    <div className="p-space-md rounded bg-surface-container-low text-on-surface-variant flex flex-col gap-space-xs">
                      <p>1. Warga membawa fotokopi KK, KTP, dan surat pengantar pengantar dari Ketua RT/RW setempat ke Seksi Kesejahteraan Rakyat (Kesra).</p>
                      <p>2. Petugas akan memverifikasi kesesuaian data dalam Data Terpadu Kesejahteraan Sosial (DTKS) atau database UMKM binaan Desa.</p>
                      <p>3. Pendaftaran program bantuan modal UMKM dibuka setiap kuartal tahun anggaran berjalan melalui musyawarah dusun yang transparan.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all">
                  <button className="w-full p-space-md sm:p-space-lg text-left flex items-center justify-between gap-space-md focus:outline-none hover:bg-surface-container-low transition-colors" onClick={(event) => { window.toggleFaq(event.currentTarget) }} type="button">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Apa saja syarat izin kunjungan riset atau kemah di area wisata desa?</span>
                    {" "}
                    <span className="material-symbols-outlined text-primary text-[24px] transition-transform duration-300 transform">expand_more</span>
                  </button>
                  <div className="faq-content hidden px-space-md sm:px-space-lg pb-space-lg pt-0 text-on-surface-variant font-body-md text-body-md">
                    <div className="p-space-md rounded bg-surface-container-low text-on-surface-variant flex flex-col gap-space-xs">
                      <p>Untuk kegiatan studi lapangan, pengabdian masyarakat (KKN), penelitian kampus, maupun perkemahan komunitas di kawasan Ekowisata:</p>
                      <ul className="list-disc list-inside flex flex-col gap-1 pl-1">
                        <li>
                          Mengirimkan surat pengantar resmi dari universitas / institusi sponsor minimal
                          {" "}
                          <strong>H-7 sebelum pelaksanaan</strong>
                          {" "}
                          ke email
                          {" "}
                          <em className="text-primary font-semibold">layanan@desasejahtera.desa.id</em>
                          .
                        </li>
                        <li>Menyertakan daftar nama peserta dan penanggung jawab lapangan.</li>
                        <li>Menandatangani pakta kesepakatan kelestarian lingkungan dan kearifan norma adat desa.</li>
                      </ul>
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
