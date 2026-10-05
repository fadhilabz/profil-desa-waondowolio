"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";

export default function GaleriPage() {
  useEffect(() => {
    (function initGalleryFilter() {
      const filterButtons = document.querySelectorAll('#gallery-filters .filter-btn');
      const galleryItems = document.querySelectorAll('#gallery-grid .gallery-item');

      filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
          const filterValue = this.getAttribute('data-filter');

          // Toggle Active Button Styles
          filterButtons.forEach(b => {
            b.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');
            b.classList.add('bg-surface-container', 'text-on-surface-variant');
          });
          this.classList.remove('bg-surface-container', 'text-on-surface-variant');
          this.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');

          // Filter Item Display
          galleryItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (filterValue === 'all' || itemCategory === filterValue) {
              item.style.display = '';
              item.style.opacity = '1';
            } else {
              item.style.display = 'none';
              item.style.opacity = '0';
            }
          });
        });
      });

      // Video Play Interaction Feedback
      const playBtn = document.getElementById('video-play-btn');
      if (playBtn) {
        playBtn.addEventListener('click', function() {
          const originalHTML = this.innerHTML;
          this.innerHTML = '<span class="material-symbols-outlined text-[48px] animate-spin">progress_activity</span>';
          setTimeout(() => {
            this.innerHTML = originalHTML;
            alert('Pemutar video dokumenter lengkap akan dimuat dalam mode layar penuh.');
          }, 600);
        });
      }
    })();
  }, []);

  return (
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          <section className="relative w-full overflow-hidden bg-surface-container-low py-space-xl">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-tertiary-container/10 blur-2xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-space-xs text-primary mb-space-xs">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>photo_library</span>
                    {" "}
                    <span className="font-label-md text-label-md tracking-widest uppercase text-primary font-bold">Dokumentasi Terpadu Warga</span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Galeri Foto & Dokumentasi Kegiatan Desa</h1>
                  <p className="mt-space-sm font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Arsip visual kehidupan, panorama asri, dedikasi pembangunan, serta semarak kebudayaan yang bertumbuh bersama warga Desa Sejahtera.</p>
                </div>
                <div className="flex items-center gap-space-md self-start md:self-auto bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                  <div className="flex flex-col px-space-sm">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">142+</span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Arsip Visual</span>
                  </div>
                  <div className="w-px h-8 bg-surface-variant" />
                  <div className="flex flex-col px-space-sm">
                    <span className="font-headline-sm text-headline-sm text-secondary font-bold">4 Dusun</span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Tercakup</span>
                  </div>
                </div>
              </div>
              <div className="mt-space-xl flex items-center gap-space-xs overflow-x-auto pb-2 scrollbar-none" id="gallery-filters">
                <button className="filter-btn active-filter whitespace-nowrap px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all duration-200 bg-primary text-on-primary shadow-sm flex items-center gap-1.5" data-filter="all" type="button">
                  <span className="material-symbols-outlined text-[16px]">apps</span>
                  {" "}
                  Semua
                </button>
                {" "}
                <button className="filter-btn whitespace-nowrap px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all duration-200 bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-1.5" data-filter="kegiatan" type="button">
                  <span className="material-symbols-outlined text-[16px]">groups</span>
                  {" "}
                  Kegiatan Warga & Gotong Royong
                </button>
                {" "}
                <button className="filter-btn whitespace-nowrap px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all duration-200 bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-1.5" data-filter="panorama" type="button">
                  <span className="material-symbols-outlined text-[16px]">landscape</span>
                  {" "}
                  Panorama Alam
                </button>
                {" "}
                <button className="filter-btn whitespace-nowrap px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all duration-200 bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-1.5" data-filter="pembangunan" type="button">
                  <span className="material-symbols-outlined text-[16px]">engineering</span>
                  {" "}
                  Pembangunan Fisik
                </button>
                {" "}
                <button className="filter-btn whitespace-nowrap px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all duration-200 bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-1.5" data-filter="budaya" type="button">
                  <span className="material-symbols-outlined text-[16px]">festival</span>
                  {" "}
                  Festival & Budaya
                </button>
              </div>
            </div>
          </section>
          <section className="w-full py-space-xxl">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg items-start" id="gallery-grid">
                <article className="gallery-item group relative flex flex-col rounded-lg overflow-hidden bg-surface-container-lowest shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-category="budaya">
                  <div className="relative overflow-hidden aspect-[4/5] w-full bg-surface-container">
                    <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="A festive harvest ritual and thanksgiving ceremony in a sunny Indonesian rural village. Villagers in traditional batik and kebaya carry towering gunungan tumpeng offerings surrounded by golden rice fields, warm late morning light, documentary cultural realism." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCns0fesgVqHj9t5suEZzRPMtxZhyKLfsYyBcvN7xc0NOs6k98kpSlunCCzpEw5zFPTMNJu6djkflU8wmmBLkfygrPiLbpvtWcmRNm4raBlZINudyb0X-NSeott6klslHjd8AmNo2fdmWkG7RjldJEeLKPPkkSq32joPYknTlNkvLnO-mkeiHGD3POoUgTIMawwKI95ToRY_rN0-vvOEJh_rDORGD8RUIBa6U_sTSDJszmKvfUC6_0RTw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute top-4 left-4">
                      <span className="px-space-sm py-1 rounded-full font-label-sm text-label-sm bg-tertiary-container text-on-tertiary-fixed font-bold shadow-sm">Festival & Budaya</span>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-space-lg text-on-primary flex flex-col gap-space-xs">
                      <div className="flex items-center gap-1.5 text-primary-fixed-dim font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                        {" "}
                        <span>14 Agustus 2024</span>
                        {" "}
                        <span className="mx-1">•</span>
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">place</span>
                        {" "}
                        <span>Dusun Sukatani</span>
                      </div>
                      <h2 className="font-headline-sm text-headline-sm text-on-primary group-hover:text-primary-fixed transition-colors">Pesta Panen Raya & Sedekah Bumi Tahunan</h2>
                      <p className="font-body-sm text-body-sm text-surface-variant line-clamp-2 mt-1">Ungkapan rasa syukur bersama ribuan warga atas kelimpahan hasil bumi padi organik dan keharmonisan desa.</p>
                    </div>
                  </div>
                </article>
                <article className="gallery-item group relative flex flex-col rounded-lg overflow-hidden bg-surface-container-lowest shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-category="panorama">
                  <div className="relative overflow-hidden aspect-[4/3] w-full bg-surface-container">
                    <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="A serene misty morning landscape over terraced hillside coffee plantations in tropical Indonesia. Soft morning golden sunbeams slicing through cool mountain fog, lush emerald green leaves and distant hills, cinematic atmospheric scenery." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9T5GMC6AKrJx5IASMU-vyY9IyQ2fHMy5ErjEebgTDJLvgWAXzBqJUAuy6wB4wswVvLV5-KGuqPS5L5OMibOj8pEbuT2vx5TBzpTSbN_--bAfrfmbJ7EcKkf5GXCEeqbqgZDboTjeFfaA3inaZKQav56SeW1qpuwJQSL8wNxFu-bMd8Fo2KDoVPzBTiJLykohoPVm-2lsm2T85aa8jB7pSHXKC787N6ASP8Ydp4fj8IOeZFKAa8uxinQ" />
                    <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/85 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute top-4 left-4">
                      <span className="px-space-sm py-1 rounded-full font-label-sm text-label-sm bg-surface-container-lowest/90 text-primary font-bold shadow-sm">Panorama Alam</span>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-space-md text-on-primary">
                      <div className="flex items-center gap-1.5 text-primary-fixed-dim font-label-sm text-label-sm mb-1">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                        {" "}
                        <span>28 September 2024</span>
                      </div>
                      <h2 className="font-headline-sm text-headline-sm text-on-primary">Suasana Pagi Berkabut Bukit Agrowisata Kopi</h2>
                    </div>
                  </div>
                  <div className="p-space-md bg-surface-container-lowest">
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Potensi ekowisata lereng perbukitan yang dikembangkan oleh BUMDes untuk menyambut wisatawan alam.</p>
                  </div>
                </article>
                <article className="gallery-item group relative flex flex-col rounded-lg overflow-hidden bg-surface-container-lowest shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-category="kegiatan">
                  <div className="relative overflow-hidden aspect-video w-full bg-surface-container">
                    <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Indonesian community healthcare volunteers (kader posyandu) in matching batiks gently weighing an infant and checking blood pressure of elderly villagers inside a bright airy open village hall with warm friendly smiles." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHQcdYtC7s0eB-cJgC4wJIiCxk6Ss0eMoM9kuCcgsYaFCRKP7Xhu8lukSsZRMbBiKVZvkJEXu-mo6IWhGoNe2xuIadc3eX5sFpP82RhcQ_Ggn59JQCw4k2WVADh0v7CyBHBXlIiZ3klObcVxWpTgxKvsmdv3ge6DbqEwbiouuOVPdnJnp1kqcgo0bQ19TJqCSQe8lDku2F4_WjOW-qKPjXPj1xfGc13x1Kd0Vd-Bxy0pW4dhk7liP3kw" />
                    <div className="absolute top-4 left-4">
                      <span className="px-space-sm py-1 rounded-full font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed font-bold shadow-sm">Kegiatan Warga</span>
                    </div>
                  </div>
                  <div className="p-space-lg flex flex-col gap-space-xs bg-surface-container-lowest">
                    <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-primary text-[16px]">event</span>
                      {" "}
                      <span>05 Oktober 2024</span>
                      {" "}
                      <span className="mx-1">•</span>
                      {" "}
                      <span className="text-primary font-semibold">Balai RW 03</span>
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors">Posyandu Terpadu & Pemantauan Kesehatan Lansia</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Layanan kesehatan rutin bulanan guna memastikan gizi balita terbebas dari stunting serta perawatan preventif lansia.</p>
                  </div>
                </article>
                <article className="gallery-item lg:col-span-2 group relative flex flex-col md:flex-row rounded-lg overflow-hidden bg-surface-container-lowest shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-category="kegiatan">
                  <div className="relative overflow-hidden md:w-1/2 aspect-video md:aspect-auto bg-surface-container">
                    <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="A vibrant communal mutual aid activity (gotong royong) along an irrigation canal in an Indonesian village. Farmers, youth, and an army babinsa officer in uniform working together clearing water channels beside emerald rice terraces under soft sunlight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoLgloBLQc9fNXl_lKzEXuauHEQgEitieNClWtepFoXeN2zEj1Fr-RfCxG6J4i6P3ENIWcKF9EC8YpJ8H-A9SSkJlrMGPr3z5ybvdZRCZB6lntfE5g7QSvUxysN38a68ny3lNcxrm1iAOx0iEMWnGqs9RGa55brjzAc1EX_fKTVfosYrH3h4gutnCOVtKqGR3odq4UxZtZYu8n6182aRJydUQZ2pcmory9kgFBk5-ixE878in8OdzmsQ" />
                    <div className="absolute top-4 left-4">
                      <span className="px-space-sm py-1 rounded-full font-label-sm text-label-sm bg-primary text-on-primary font-bold shadow-sm">Gotong Royong</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-space-lg flex flex-col justify-between bg-surface-container-lowest">
                    <div>
                      <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm mb-space-xs">
                        <span className="material-symbols-outlined text-primary text-[16px]">calendar_today</span>
                        {" "}
                        <span>19 Oktober 2024</span>
                        {" "}
                        <span className="mx-1">•</span>
                        {" "}
                        <span className="text-secondary font-semibold">Saluran Sekunder Dusun 1</span>
                      </div>
                      <h2 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors mb-space-sm">Kerja Bakti Normalisasi Saluran Irigasi Sawah Bersama Babinsa</h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Menyambut musim tanam rendeng, 150 warga bahu-membahu membersihkan sedimentasi sepanjang 1,2 kilometer demi kelancaran pasokan air sawah kolektif.</p>
                    </div>
                    <div className="mt-space-md pt-space-sm flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-primary flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">handshake</span>
                        {" "}
                        Gotong Royong Warga
                      </span>
                      {" "}
                      <span className="font-label-sm text-label-sm text-on-surface-variant">42 Foto Terkait</span>
                    </div>
                  </div>
                </article>
                <article className="gallery-item group relative flex flex-col rounded-lg overflow-hidden bg-surface-container-lowest shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-category="budaya">
                  <div className="relative overflow-hidden aspect-[4/3] w-full bg-surface-container">
                    <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="An Indonesian master craftsman teaching young apprentices intricate bamboo weaving techniques inside a warm rustic workshop filled with sustainable home decor crafts and sunlight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrOSCc0YBbpgCi0KGDWVWu1H6ZqHwZsAI1pGZId4EchPtIB5jyTP9lbIdoDrz66bWvZBakh-cEljdcl2DS4UUwrycp6Oc3UZXVWCLMAqO-CejIGvZZkXk_4qnLY-yK8fI7zjXzS1WgKW02WyGVkAtFFkYEYz2sXJQLtBjyTL-dvzDDCMEqZunXCuLqM5GdqGkq_v7PHiipPCbO82zJgS54u3JiBZrbeZ-nEzd9RIBKZRMOIL-nttHVuw" />
                    <div className="absolute top-4 left-4">
                      <span className="px-space-sm py-1 rounded-full font-label-sm text-label-sm bg-tertiary-container text-on-tertiary-fixed font-bold shadow-sm">Festival & Budaya</span>
                    </div>
                  </div>
                  <div className="p-space-lg flex flex-col gap-space-xs bg-surface-container-lowest">
                    <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-primary text-[16px]">calendar_today</span>
                      {" "}
                      <span>02 November 2024</span>
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-primary">Pelatihan Kerajinan Anyaman Bambu Kreatif Muda</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Pemberdayaan Karang Taruna dalam mengolah potensi bambu lokal menjadi produk furnitur bernilai ekonomi tinggi.</p>
                  </div>
                </article>
                <article className="gallery-item group relative flex flex-col rounded-lg overflow-hidden bg-surface-container-lowest shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-category="panorama">
                  <div className="relative overflow-hidden aspect-[4/5] w-full bg-surface-container">
                    <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="A pristine hidden waterfall called Curug Bening cascading smoothly into an emerald natural pool surrounded by dense rainforest foliage during dramatic sunset glow, long exposure peaceful river rocks." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjzhNV16vK0Y-eqYRpUQyYrzmd2F9_zi-ymq4IOUU3QgriqAkUGb0v1izTQKGy_NCaSoU3sdj_cHmWSzSJ5VJujFToHvbzuBoza_nGbqkn6RS4pH8Pij9DRm0oBNsafGCQSGs9EcxLnkI_q4q2QubAzSBoHyhpKsf3QEd4hF3VkKv7FyYHQ0yLPGlu4xIVO5i-YjKr1sCJbKWf99ALi56Mqx2cF8Q-QbVzSroD6m66KAF5VJXBuQqrUQ" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute top-4 left-4">
                      <span className="px-space-sm py-1 rounded-full font-label-sm text-label-sm bg-surface-container-lowest/90 text-primary font-bold shadow-sm">Panorama Alam</span>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-space-lg text-on-primary">
                      <div className="flex items-center gap-1.5 text-primary-fixed-dim font-label-sm text-label-sm mb-1">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                        {" "}
                        <span>15 November 2024</span>
                      </div>
                      <h2 className="font-headline-sm text-headline-sm text-on-primary">Pemandangan Curug Bening di Kala Senja</h2>
                      <p className="font-body-sm text-body-sm text-surface-variant line-clamp-2 mt-1">Pesona air terjun alami perbatasan desa yang kini dijaga kelestariannya sebagai kawasan konservasi hulu.</p>
                    </div>
                  </div>
                </article>
                <article className="gallery-item group relative flex flex-col rounded-lg overflow-hidden bg-surface-container-lowest shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-category="pembangunan">
                  <div className="relative overflow-hidden aspect-video w-full bg-surface-container">
                    <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Construction site of a new modern Indonesian village community hall made with solid timber and terracotta brickwork, local construction workers and village head inspecting architectural blueprints under daylight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLL0wONLAik0hLpkHycnUi2KU8OWcs4vkSmwRmWvwH8rSP-hdOsaO8y4csapRhtPFoWimZU_xC-9yuSbutZ7Ok_iiO2HvyNsUY-cv9W0UegTRbildkM2ayIFWLj-pNCKuPaulejaqbKrwF23vegnvYFhgal-rj7juyS5N3uUTdMsa0Kl5EGq7WEjslHw6sstG8F3ZhyEr6K4TTN80I6WKJRk8kGQOR7ok039vfFJE3gxExRdvj6agCxA" />
                    <div className="absolute top-4 left-4">
                      <span className="px-space-sm py-1 rounded-full font-label-sm text-label-sm bg-secondary-container text-on-secondary-container font-bold shadow-sm">Pembangunan Fisik</span>
                    </div>
                  </div>
                  <div className="p-space-lg flex flex-col gap-space-xs bg-surface-container-lowest">
                    <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-primary text-[16px]">calendar_today</span>
                      {" "}
                      <span>24 November 2024</span>
                      {" "}
                      <span className="mx-1">•</span>
                      {" "}
                      <span className="text-tertiary font-semibold">Dana Desa 2024</span>
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-primary">Progres Pembangunan Balai Warga Dusun 2</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Realisasi gedung serbaguna ramah disabilitas untuk pusat rembug warga, pelatihan UMKM, dan kegiatan olahraga desa.</p>
                  </div>
                </article>
                <article className="gallery-item group relative flex flex-col rounded-lg overflow-hidden bg-surface-container-lowest shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-category="budaya">
                  <div className="relative overflow-hidden aspect-video w-full bg-surface-container">
                    <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Village children in traditional Indonesian dance costumes smiling and performing synchronized cultural dance on an open wooden stage, accompanied by traditional bronze gamelan musicians in the background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAioxUR7-OOeekRpTreAELzwxqtLFT6YiP5OyeDL0CMk-t1Eusz1ui9JcJm40S0G3MsWFzfqXJNkkrBOI9aXVDJ7bQNnayiH8LagbeX7C7olxzWou1YA0uKhZbKkdyOryo6Uv2UX8GgwkMop54JUSd9qWEYhy_GdTgV0CX_s3Q38D8oR15VWclUYT28d2CXgMHG4k8yqtfhxFXngnVXSEvoNDkhDQiiaGb-fcNJPyjgtKN7BTPrgilJyw" />
                    <div className="absolute top-4 left-4">
                      <span className="px-space-sm py-1 rounded-full font-label-sm text-label-sm bg-tertiary-container text-on-tertiary-fixed font-bold shadow-sm">Festival & Budaya</span>
                    </div>
                  </div>
                  <div className="p-space-lg flex flex-col gap-space-xs bg-surface-container-lowest">
                    <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-primary text-[16px]">calendar_today</span>
                      {" "}
                      <span>10 Desember 2024</span>
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-primary">Pentas Tari Tradisional & Karawitan Anak</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Pelestarian seni karawitan dan tari puspa nusantara oleh sanggar tari tunas desa sebagai wujud cinta budaya.</p>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-low py-space-xxl relative overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
                <div>
                  <div className="flex items-center gap-space-xs text-secondary mb-space-xs">
                    <span className="material-symbols-outlined text-[20px]">smart_display</span>
                    {" "}
                    <span className="font-label-md text-label-md tracking-wider uppercase font-bold">Dokumenter Eksklusif</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Menatap Masa Depan Desa Sejahtera</h2>
                  <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant max-w-2xl">Saksikan rangkuman perjalanan dedikasi masyarakat desa dalam menjaga kearifan lokal sembari melangkah maju melalui inovasi mandiri.</p>
                </div>
                <div className="flex items-center gap-space-sm text-on-surface-variant font-label-md text-label-md">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px] text-primary">schedule</span>
                    {" "}
                    Durasi: 12 Menit
                  </span>
                  {" "}
                  <span>•</span>
                  {" "}
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px] text-primary">hd</span>
                    {" "}
                    Resolusi 4K UHD
                  </span>
                </div>
              </div>
              <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-inverse-surface group">
                <div className="relative aspect-video w-full overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-102" data-alt="Cinematic wide shot of an Indonesian agricultural valley village at golden hour with morning mist, sweeping rice terrace fields, modern solar-powered organic greenhouse, and friendly villagers walking together." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4mUDv9Es9EBKQL_ALn2TaZcyVrsX469iby75bxVTcCpdHxprFJvdSo-H8OniWEHmmhVuvnZqX7SS98I8uUXTYnyaDnLb-HiLxm7D8qX9689WNZOGsN1ktDoYTH-MFIj-0Z0eVfc6ZbVFeALM13asM-Y_n-N11zIdOscXFTrIcHGQYV-hIfzMBtkgVjoOsJPfOl4SJjMSshLykouc5fUECU-kF6cJsUMQFUjF9lF02gKkPCEFQfJMgTQ" />
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/40 to-transparent opacity-90" />
                  <div className="absolute inset-0 flex items-center justify-center p-space-md">
                    <button aria-label="Putar Video Dokumenter" className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary text-on-secondary shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-secondary-container active:scale-95 focus:outline-none" id="video-play-btn" type="button">
                      <span className="absolute inset-0 rounded-full bg-secondary/40 animate-ping" />
                      {" "}
                      <span className="material-symbols-outlined text-[44px] md:text-[54px] ml-1.5" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    </button>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-space-md md:p-space-xl flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                    <div className="flex flex-col gap-1 max-w-xl text-inverse-on-surface">
                      <span className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        {" "}
                        Official Village Feature Film 2024
                      </span>
                      <h3 className="font-headline-md text-headline-md text-inverse-on-surface font-bold leading-tight">Menatap Masa Depan: Ekosistem Hijau & Kemandirian Digital</h3>
                      <p className="font-body-sm text-body-sm text-surface-variant line-clamp-2 hidden sm:block">Menelusuri bagaimana sinergi para pemuda desa, kelompok wanita tani (KWT), dan tetua adat menciptakan desa berdaya saing tinggi.</p>
                    </div>
                    <div className="flex items-center gap-space-sm">
                      <div className="bg-surface-container-lowest/20 backdrop-blur-md px-space-md py-space-xs rounded-lg text-inverse-on-surface flex items-center gap-2 text-label-sm font-label-sm">
                        <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">thumb_up</span>
                        {" "}
                        <span>Disukai 1,2k Warga</span>
                      </div>
                      <div className="bg-surface-container-lowest/20 backdrop-blur-md px-space-md py-space-xs rounded-lg text-inverse-on-surface flex items-center gap-2 text-label-sm font-label-sm">
                        <span className="material-symbols-outlined text-[16px] text-primary-fixed">visibility</span>
                        {" "}
                        <span>8.400 Tayangan</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mt-space-lg">
                <div className="bg-surface-container-lowest p-space-md rounded-lg flex items-start gap-space-sm shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="font-label-md text-label-md font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-primary leading-snug">Akar Tradisi & Guyub</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Refleksi nilai gotong royong warisan leluhur yang tetap hidup di dusun.</p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-lg flex items-start gap-space-sm shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                    <span className="font-label-md text-label-md font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-primary leading-snug">Inovasi Hijau BUMDes</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Pemanfaatan pupuk mandiri, irigasi presisi, dan sentra kerajinan bambu.</p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-lg flex items-start gap-space-sm shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-tertiary-container/30 text-on-tertiary-container flex items-center justify-center shrink-0">
                    <span className="font-label-md text-label-md font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-primary leading-snug">Desa Digital Terkoneksi</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Layanan mandiri kependudukan serta transparansi anggaran berbasis web.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
  );
}
