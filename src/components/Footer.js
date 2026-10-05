/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Footer() {
  return (
      <footer className="w-full bg-surface-container-low text-on-surface-variant py-space-xxl shadow-[0_-1px_8px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl">
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <img alt="Logo Desa Sejahtera" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAahd0tkn8LmxBoGayeslWHLTVNdY49uTVifS9P17jeu-BZIFP10bsd5pxiNihOcxsVGIyeXvp6_Jwk_Lh-QhCAuLJ7nKWtupxjEv9Vxa4zc5s6aEP8C1485V-KxPxeiQ85kmhTM7EydJjh2-xWGG3E1VUQPZ2W5pkZ2P5pomvzQsEdZ35oQZWhlWEhAtApmUAFSvA6WmDtMQpnW2y9rYHY-Nv-wI1Fj-QQNxzExNbRP3YNCoAf1yuBuA" />
              <span className="font-headline-sm text-headline-sm text-primary">Desa Sejahtera</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Membangun tata kelola desa yang transparan, asri, berdaya saing mandiri, dan berakar pada gotong royong warga nusantara.</p>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Sistem Informasi Desa Terintegrasi</span>
            </div>
          </div>
          <div className="flex flex-col gap-space-md">
            <h3 className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider">Navigasi Cepat</h3>
            <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm">
              <li className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[16px]">chevron_right</span>
                <Link href="/" className="text-on-surface-variant hover:text-on-surface transition-colors">Beranda</Link>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[16px]">chevron_right</span>
                <Link href="/profil" className="text-on-surface-variant hover:text-on-surface transition-colors">Profil Desa</Link>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[16px]">chevron_right</span>
                <Link href="/potensi" className="text-on-surface-variant hover:text-on-surface transition-colors">Potensi & UMKM</Link>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[16px]">chevron_right</span>
                <Link href="/galeri" className="text-on-surface-variant hover:text-on-surface transition-colors">Galeri Kegiatan</Link>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[16px]">chevron_right</span>
                <Link href="/kontak" className="text-on-surface-variant hover:text-on-surface transition-colors">Kontak & Pengaduan</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-space-md">
            <h3 className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider">Kantor Desa</h3>
            <div className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">location_on</span>
                <span>Jl. Raya Kemakmuran No. 12, Desa Sejahtera, Kec. Nusantara, Indonesia</span>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[20px]">call</span>
                <span>+62 (021) 8876-2345</span>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
                <span>kontak@desasejahtera.id</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-space-md">
            <h3 className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider">Jam Pelayanan</h3>
            <div className="bg-surface-container rounded-lg p-space-md flex flex-col gap-space-xs">
              <div className="flex justify-between items-center font-body-sm text-body-sm">
                <span className="font-label-md text-label-md text-on-surface">Senin - Kamis</span>
                <span className="text-on-surface-variant">08.00 - 15.30 WIB</span>
              </div>
              <div className="flex justify-between items-center font-body-sm text-body-sm">
                <span className="font-label-md text-label-md text-on-surface">Jumat</span>
                <span className="text-on-surface-variant">08.00 - 11.30 WIB</span>
              </div>
              <div className="flex justify-between items-center font-body-sm text-body-sm text-secondary">
                <span className="font-label-md text-label-md">Sabtu - Minggu</span>
                <span>Libur</span>
              </div>
            </div>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[18px]">public</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[18px]">feed</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[18px]">videocam</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-space-xl pt-space-md border-t border-outline-variant/40 flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
          <span>© 2025 Pemerintah Desa Sejahtera. Hak Cipta Dilindungi Undang-Undang.</span>
          <div className="flex items-center gap-space-md font-label-sm text-label-sm">
            <a className="hover:text-on-surface transition-colors" href="#">Kebijakan Privasi</a>
            <a className="hover:text-on-surface transition-colors" href="#">Keterbukaan Informasi</a>
          </div>
        </div>
      </footer>
  );
}
