// ==================== KONFIGURASI FIREBASE CLOUD ====================
const firebaseConfig = {
  apiKey: "AIzaSyB-d2nXMXrCltJtvUXVDWLtBAXiGhxYftA",
  authDomain: "portal-dpdipekb-malut.firebaseapp.com",
  databaseURL: "https://portal-dpdipekb-malut-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portal-dpdipekb-malut",
  storageBucket: "portal-dpdipekb-malut.firebasestorage.app",
  messagingSenderId: "451928361261",
  appId: "1:451928361261:web:59ad634e63e65da7172ba4"
};

// Inisialisasi Firebase aman
let db = null;
let storage = null;
try {
  if (typeof firebase !== 'undefined' && firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  if (typeof firebase !== 'undefined') {
    db = firebase.database();
    storage = firebase.storage();
  }
} catch (err) {
  console.warn("Firebase belum terkonfigurasi aktif. Menggunakan penyimpanan lokal:", err);
}

// ==================== DATA STATIS HALAMAN MENU BAWAAN ====================
const DEFAULT_PAGES = {
  profil: {
    header: "PROFIL ORGANISASI",
    title: "Profil DPD IPeKB Provinsi Maluku Utara: Mengabdi Membangun Keluarga Berkualitas",
    date: "1 Nopember 2026",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    content: `Ikatan Penyuluh Keluarga Berencana Indonesia (IPeKB) adalah wadah tunggal organisasi profesi bagi Pejabat Fungsional Penyuluh Keluarga Berencana (PKB) dan Petugas Lapangan Keluarga Berencana (PLKB) di seluruh tingkatan wilayah Negara Kesatuan Republik Indonesia.\n\nDewan Pengurus Daerah (DPD) IPeKB Provinsi Maluku Utara berkedudukan di ibukota provinsi, mengoordinasikan jajaran penyuluh di 10 Kabupaten/Kota kepulauan, mulai dari Pulau Morotai, Halmahera Utara, Halmahera Barat, Halmahera Tengah, Halmahera Timur, Halmahera Selatan, Kota Ternate, Kota Tidore Kepulauan, hingga Kabupaten Kepulauan Sula dan Pulau Taliabu.\n\nSebagai garda terdepan di lini lapangan, IPeKB Malut berkomitmen mengawal program Bangga Kencana (Pembangunan Keluarga, Kependudukan, dan Keluarga Berencana) serta mengonsolidasikan percepatan penurunan stunting berbasis kearifan lokal bahari Bumi Moloku Kie Raha.`
  },
  visimisi: {
    header: "VISI & MISI ORGANISASI",
    title: "Visi dan Misi DPD IPeKB Maluku Utara: Terdepan, Profesional, dan Berintegritas",
    date: "1 Nopember 2026",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    content: `VISI:\n"Terwujudnya Penyuluh KB yang Profesional, Berintegritas, dan Mandiri dalam Mewujudkan Penduduk Tumbuh Seimbang dan Keluarga Berkualitas di Bumi Kie Raha."\n\nMISI ORGANISASI:\n1. Meningkatkan kompetensi teknis, advokasi, dan komunikasi digital seluruh PKB/PLKB se-Maluku Utara.\n2. Memperkuat konvergensi pencegahan stunting melalui pendampingan intensif Tim Pendamping Keluarga (TPK) di desa dan kelurahan.\n3. Mengokohkan kemitraan strategis dengan Pemerintah Daerah, Bidan Desa, TP-PKK, Tokoh Agama, dan Babinsa/Bhabinkamtibmas.\n4. Menjamin advokasi perlindungan profesi, kebersamaan, dan kesejahteraan penyuluh di wilayah terpencil dan kepulauan.`
  },
  program: {
    header: "PROGRAM KERJA STRATEGIS",
    title: "Agenda Prioritas & Program Kerja Unggulan Lini Lapangan Tahun 2026",
    date: "28 Oktober 2026",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    content: `Program kerja DPD IPeKB Maluku Utara difokuskan pada penguatan kapasitas kader dan ketahanan keluarga di tingkat lini lapangan:\n\n1. SIDELILA (Sistem Informasi Data Lini Lapangan): Digitalisasi pelaporan kinerja penyuluh, modul pembinaan, dan rekapitulasi data akseptor kepulauan.\n2. Gerakan Pendampingan Catin Terpadu: Pemeriksaan kesehatan dan skrining 3 bulan pranikah melalui Elsimil.\n3. Penguatan Tribina & Kampung KB Mandiri: Revitalisasi kelompok BKB, BKR, BKL, dan UPPKA di desa percontohan.\n4. Kapasitas Advokasi Multi-Sektor: Lokakarya berkala sinergi penanganan stunting lintas pemangku kepentingan.`
  },
  kegiatan: {
    header: "KEGIATAN LINI LAPANGAN",
    title: "Dokumentasi & Laporan Kegiatan Penyuluhan di 10 Kabupaten / Kota",
    date: "24 Oktober 2026",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    content: `Kegiatan rutin penyuluhan dilaksanakan serentak oleh PKB/PLKB bersama kader TPK, Posyandu, dan Bidan Desa di seluruh pelosok desa.\n\nAktivitas mencakup mini-lokakarya tingkat kecamatan, audit kasus stunting, pelayanan KB serentak momentum Hari Keluarga Nasional (Harganas), serta konseling ketahanan remaja di sekolah-sekolah binaan.`
  },
  galeri: {
    header: "GALERI DOKUMENTASI",
    title: "Album Foto & Arsip Dokumentasi Kiprah Penyuluh KB Maluku Utara",
    date: "20 Oktober 2026",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    content: `Kumpulan rekaman visual dedikasi pejuang keluarga di pulau-pulau Maluku Utara, mulai dari penyeberangan laut menuju desa terpencil, pertemuan bina keluarga, hingga forum pembinaan tingkat provinsi.`
  },
  bantuan: {
    header: "LAYANAN & BANTUAN",
    title: "Pusat Pengaduan, Konsultasi, dan Helpdesk Teknis Penyuluh",
    date: "1 Nopember 2026",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    content: `Jika rekan-rekan penyuluh KB di lapangan maupun masyarakat memerlukan konsultasi program, advokasi profesi, atau kendala teknis pelaporan, silakan hubungi saluran resmi pengurus:\n\n- WhatsApp Call Center: 085212345678\n- Surel Resmi: dpd_ipekb_ProvinsiMalukuutara@gmail.com\n- Alamat: Jalan Marikrubu, Kecamatan Ternate Tengah, Kota Ternate`
  },
  layanan: {
    header: "LAYANAN INFORMASI",
    title: "Layanan Fasilitasi dan Konsultasi Program Bangga Kencana",
    date: "1 Nopember 2026",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    content: `Layanan publik terpadu yang disediakan mencakup konsultasi pemilihan metode kontrasepsi jangka panjang (MKJP), bimbingan konseling calon pengantin, penguatan ekonomi keluarga akseptor (UPPKA), serta pendampingan baduta stunting.`
  }
};

// ==================== DATA AWAL BERITA DEFAULT ====================
const DEFAULT_NEWS = [
  {
    id: "berita-1",
    category: "kegiatan",
    title: "Rapat Kerja Daerah DPD IPeKB Malut: Penguatan Peran PLKB dalam Pendampingan Catin",
    date: "2026-10-28",
    summary: "Penyuluh KB se-Maluku Utara menyamakan persepsi pemanfaatan aplikasi Elsimil guna mencegah lahirnya bayi stunting baru di kepulauan.",
    content: "Bertempat di Kota Ternate, DPD IPeKB Provinsi Maluku Utara menggelar agenda konsolidasi teknis bersama seluruh koordinator lini lapangan dari 10 Kabupaten/Kota. \n\nFokus utama pertemuan adalah percepatan pendampingan calon pengantin (catin) minimal 3 bulan sebelum pernikahan, intervensi ibu hamil berisiko, serta integrasi pemutakhiran data keluarga secara real-time.",
    imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=700&q=80",
    fileUrl: "https://example.com/notulensi-rakorda-ipekb.pdf"
  },
  {
    id: "berita-2",
    category: "program",
    title: "Distribusi Alat & Obat Kontrasepsi (Alokon) ke Wilayah Terpencil Halmahera Selatan",
    date: "2026-10-24",
    summary: "Tim fasilitator DPD IPeKB berkolaborasi memastikan rantai pasok alat kontrasepsi jangka panjang (MKJP) menjangkau pulau terluar.",
    content: "Penyuluh KB bersama tenaga medis fasilitator mendistribusikan implan dan IUD ke fasilitas pelayanan kesehatan tingkat pertama di pulau-pulau pelosok. Langkah ini merupakan tindak lanjut komitmen mendekatkan layanan prima kepada akseptor tanpa terkendala geografis laut.",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=700&q=80",
    fileUrl: ""
  },
  {
    id: "berita-3",
    category: "kegiatan",
    title: "Sosialisasi Modul BKR 'Orang Tua Hebat' untuk Penguatan Ketahanan Remaja di Tidore",
    date: "2026-10-18",
    summary: "Kelompok Bina Keluarga Remaja dilatih mengedukasi keluarga mengenai pencegahan pernikahan anak dan bahaya NAPZA.",
    content: "Penyuluh Keluarga Berencana Kota Tidore Kepulauan memfasilitasi lokakarya interaktif bagi orang tua yang memiliki anak usia 10-24 tahun. Melalui pendekatan komunikasi terbuka, orang tua diarahkan menjadi sahabat terbaik dalam mendampingi masa transisi remaja.",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80",
    fileUrl: ""
  },
  {
    id: "berita-4",
    category: "pengumuman",
    title: "Instruksi Pelaporan Capaian Fisik & Penginputan e-Visum PLKB Periode Triwulan IV",
    date: "2026-10-15",
    summary: "Diberitahukan kepada seluruh PKB/PLKB ASN dan Non-ASN untuk menuntaskan rekapitulasi data kunjungan keluarga sebelum batas tempo.",
    content: "Seluruh penyuluh fungsional diwajibkan mengunggah rekap logbook pendampingan lapangan serta sinkronisasi data audit kasus stunting tingkat kecamatan sebelum tanggal 20 bulan berjalan. Verifikasi berjenjang dilakukan oleh koordinator kabupaten.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80",
    fileUrl: "https://example.com/edaran-evisum-triwulan.pdf"
  }
];

// ==================== STATE GLOBAL ====================
let newsData = [];
let pageContents = {};
let activeTag = 'semua';
let searchWord = '';
let isAuthed = false;

let configData = {
  ticker: "Selamat Datang di Portal Website Resmi DPD IPeKB Provinsi Maluku Utara • Menjangkau Keluarga, Menata Masa Depan Sejahtera di Bumi Moloku Kie Raha.",
  heroImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
  heroBgImg: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1600&q=80",
  heroTitle: "Semangat Berencana Di Bumi Kie Raha",
  heroSubtitle: "Dedikasi Penyuluh KB mewujudkan keluarga berkualitas & percepatan penurunan stunting.",
  ketuaName: "Ketua DPD",
  ketuaSub: "Masa Bakti 2024 - 2028",
  ketuaPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  sekretarisName: "Sekretaris",
  sekretarisSub: "Bidang Administrasi & Keorganisasian",
  sekretarisPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  bendaharaName: "Bendahara",
  bendaharaSub: "Bidang Keuangan & Perbendaharaan",
  bendaharaPhoto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
};

// Data Capaian Program Global
let capaianData = {
  keluarga: "1.420",
  kbAktif: "84,6%",
  tribina: "328",
  penyuluh: "215",
  tahun: "Tahun 2026"
};

// ==================== INISIALISASI ====================
window.addEventListener('DOMContentLoaded', () => {
  initStorage();
  listenFirebaseRealtime();
  renderPublicNews();
  renderConfigUI();
  renderCapaianUI();
  const inputDate = document.getElementById('inputDate');
  if (inputDate) {
    inputDate.value = new Date().toISOString().split('T')[0];
  }
});

function initStorage() {
  const storedNews = localStorage.getItem('ipekb_news_list');
  if (storedNews) {
    try { newsData = JSON.parse(storedNews); } catch (e) { newsData = DEFAULT_NEWS; }
  } else {
    newsData = DEFAULT_NEWS;
  }

  const storedConf = localStorage.getItem('ipekb_config');
  if (storedConf) {
    try { configData = Object.assign(configData, JSON.parse(storedConf)); } catch (e) {}
  }

  const storedPages = localStorage.getItem('ipekb_pages');
  if (storedPages) {
    try { pageContents = Object.assign(DEFAULT_PAGES, JSON.parse(storedPages)); } catch (e) { pageContents = DEFAULT_PAGES; }
  } else {
    pageContents = DEFAULT_PAGES;
  }

  const storedCapaian = localStorage.getItem('ipekb_capaian');
  if (storedCapaian) {
    try { capaianData = Object.assign(capaianData, JSON.parse(storedCapaian)); } catch (e) {}
  }
}

function saveStorage() {
  localStorage.setItem('ipekb_news_list', JSON.stringify(newsData));
  localStorage.setItem('ipekb_config', JSON.stringify(configData));
  localStorage.setItem('ipekb_pages', JSON.stringify(pageContents));
  localStorage.setItem('ipekb_capaian', JSON.stringify(capaianData));

  // Sinkronisasi otomatis ke Firebase Realtime Database jika aktif
  if (db) {
    db.ref('portal_web/config').set(configData);
    db.ref('portal_web/news').set(newsData);
    db.ref('portal_web/pages').set(pageContents);
    db.ref('portal_web/capaian').set(capaianData);
  }
}

// Mendengarkan data Realtime dari Firebase Cloud
function listenFirebaseRealtime() {
  if (!db) return;

  db.ref('portal_web/config').on('value', snapshot => {
    if (snapshot.exists()) {
      configData = snapshot.val();
      localStorage.setItem('ipekb_config', JSON.stringify(configData));
      renderConfigUI();
    }
  });

  db.ref('portal_web/news').on('value', snapshot => {
    if (snapshot.exists()) {
      newsData = snapshot.val() || [];
      localStorage.setItem('ipekb_news_list', JSON.stringify(newsData));
      renderPublicNews();
      if (isAuthed) renderAdminList();
    }
  });

  db.ref('portal_web/pages').on('value', snapshot => {
    if (snapshot.exists()) {
      pageContents = snapshot.val() || DEFAULT_PAGES;
      localStorage.setItem('ipekb_pages', JSON.stringify(pageContents));
    }
  });

  db.ref('portal_web/capaian').on('value', snapshot => {
    if (snapshot.exists()) {
      capaianData = snapshot.val();
      localStorage.setItem('ipekb_capaian', JSON.stringify(capaianData));
      renderCapaianUI();
    }
  });
}

// Helper: Membaca berkas gambar lokal dan mengonversinya menjadi URL data base64
function uploadImageToStorage(fileInput, fallbackUrl, folderName = "portal_assets") {
  return new Promise((resolve) => {
    if (fileInput && fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      
      // Batasi ukuran maksimal berkas ~2.5MB
      if (file.size > 2.5 * 1024 * 1024) {
        showToast("Ukuran foto maksimal 2.5MB agar penyimpanan lancar!");
        resolve(fallbackUrl);
        return;
      }

      const reader = new FileReader();
      reader.onload = function(e) {
        resolve(e.target.result);
      };
      reader.onerror = function() {
        showToast("Gagal membaca file gambar!");
        resolve(fallbackUrl);
      };
      reader.readAsDataURL(file);
    } else {
      resolve(fallbackUrl);
    }
  });
}

// ==================== FUNGSI UTAMA PERGANTIAN HALAMAN ====================
function switchPage(pageKey) {
  const viewHome = document.getElementById('viewHomeArea');
  const viewDetail = document.getElementById('viewDetailArea');

  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.remove('text-amber-400');
    btn.classList.add('hover:text-amber-400');
  });
  const activeBtn = document.getElementById('nav-' + pageKey);
  if (activeBtn) activeBtn.classList.add('text-amber-400');

  if (pageKey === 'home') {
    if (viewHome) viewHome.classList.remove('hidden');
    if (viewDetail) viewDetail.classList.add('hidden');
    scrollToMain();
    return;
  }

  const data = pageContents[pageKey] || DEFAULT_PAGES[pageKey];
  if (data) {
    document.getElementById('detailHeaderTitle').innerText = data.header || "INFORMASI RESMI: " + pageKey.toUpperCase();
    document.getElementById('detailTitle').innerText = data.title;
    document.getElementById('detailDate').innerText = data.date || "Pembaruan Terkini";
    document.getElementById('detailImage').src = data.image;

    const paragraphs = data.content.split('\n\n').map(p => `<p class="leading-relaxed mb-3">${p.replace(/\n/g, '<br>')}</p>`).join('');
    document.getElementById('detailBodyContent').innerHTML = paragraphs;

    if (viewHome) viewHome.classList.add('hidden');
    if (viewDetail) viewDetail.classList.remove('hidden');
    scrollToMain();
  }
}

function readNewsDetail(id) {
  const item = newsData.find(n => n.id === id);
  if (!item) return;

  const viewHome = document.getElementById('viewHomeArea');
  const viewDetail = document.getElementById('viewDetailArea');

  document.getElementById('detailHeaderTitle').innerText = "RILIS BERITA & KEGIATAN";
  document.getElementById('detailTitle').innerText = item.title;
  document.getElementById('detailDate').innerText = formatDate(item.date);
  document.getElementById('detailImage').src = item.imageUrl || 'https://placehold.co/1200x600/0b2853/ffffff?text=DPD+IPeKB+Malut';
  
  let bodyHtml = `
    <p class="text-xs sm:text-sm font-semibold text-blue-900 bg-blue-50/70 p-4 rounded-xl border-l-4 border-blue-600 mb-4 italic">
      "${escapeHtml(item.summary)}"
    </p>
    <div class="space-y-3 whitespace-pre-line text-slate-700">
      ${escapeHtml(item.content)}
    </div>
  `;

  if (item.fileUrl) {
    bodyHtml += `
      <div class="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
        <div class="flex items-center space-x-2 text-xs font-bold text-slate-700">
          <i class="fa-solid fa-file-pdf text-rose-500 text-lg"></i>
          <span>Dokumen Surat / Panduan Terlampir</span>
        </div>
        <a href="${escapeHtml(item.fileUrl)}" target="_blank" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-sm">
          Unduh File
        </a>
      </div>
    `;
  }

  document.getElementById('detailBodyContent').innerHTML = bodyHtml;

  if (viewHome) viewHome.classList.add('hidden');
  if (viewDetail) viewDetail.classList.remove('hidden');
  scrollToMain();
}

function scrollToMain() {
  const detailArea = document.getElementById('viewDetailArea');
  if (detailArea && !detailArea.classList.contains('hidden')) {
    detailArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    const main = document.getElementById('mainContainer');
    if (main) main.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ==================== RENDER BERITA BERANDA ====================
function renderPublicNews() {
  const grid = document.getElementById('newsGrid');
  if (!grid) return;

  const filtered = newsData.filter(item => {
    const matchTag = (activeTag === 'semua' || item.category === activeTag);
    const matchSearch = item.title.toLowerCase().includes(searchWord) || item.summary.toLowerCase().includes(searchWord);
    return matchTag && matchSearch;
  });

  const totalLabel = document.getElementById('articleTotalLabel');
  if (totalLabel) totalLabel.innerText = `${filtered.length} Berita & Artikel`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-2 py-12 text-center text-slate-400 bg-slate-50 rounded-xl border border-dashed border-slate-300">
        <i class="fa-solid fa-file-circle-xmark text-3xl mb-2 text-slate-300"></i>
        <p class="text-xs font-semibold">Belum ada berita pada kriteria ini.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const photo = item.imageUrl || 'https://placehold.co/600x400/0b2853/ffffff?text=DPD+IPeKB+Malut';
    const catBadge = {
      kegiatan: 'bg-blue-100 text-blue-800',
      program: 'bg-emerald-100 text-emerald-800',
      pengumuman: 'bg-amber-100 text-amber-900'
    }[item.category] || 'bg-slate-100 text-slate-700';

    return `
      <div class="bg-white rounded-xl border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col group">
        <div class="h-44 overflow-hidden bg-slate-100 relative">
          <img src="${escapeHtml(photo)}" alt="${escapeHtml(item.title)}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" onerror="this.src='https://placehold.co/600x400/0b2853/ffffff?text=Dokumentasi+IPeKB'">
          <span class="absolute top-2.5 left-2.5 text-[10px] uppercase font-bold px-2 py-0.5 rounded shadow-sm ${catBadge}">
            ${item.category}
          </span>
        </div>

        <div class="p-4 flex-1 flex flex-col justify-between">
          <div>
            <div class="text-[11px] text-slate-400 mb-1 flex items-center space-x-1.5 font-medium">
              <i class="fa-regular fa-calendar text-[10px]"></i>
              <span>${formatDate(item.date)}</span>
            </div>
            <h4 class="text-xs sm:text-sm font-bold text-slate-800 leading-snug line-clamp-2 group-hover:text-blue-600 transition mb-2">
              ${escapeHtml(item.title)}
            </h4>
            <p class="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
              ${escapeHtml(item.summary)}
            </p>
          </div>

          <div class="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
            <button onclick="readNewsDetail('${item.id}')" class="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-1">
              <span>Baca Selengkapnya</span>
              <i class="fa-solid fa-angle-right text-[10px]"></i>
            </button>
            ${item.fileUrl ? `
              <a href="${escapeHtml(item.fileUrl)}" target="_blank" class="text-rose-600 text-xs hover:underline" title="Unduh Lampiran PDF">
                <i class="fa-solid fa-file-pdf"></i>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterByTag(tag) {
  activeTag = tag;
  document.querySelectorAll('.cat-pill').forEach(btn => {
    if (btn.getAttribute('data-tag') === tag) {
      btn.className = "cat-pill font-bold px-3 py-1 rounded text-xs bg-blue-600 text-white transition shadow-sm";
    } else {
      btn.className = "cat-pill font-medium px-3 py-1 rounded text-xs bg-slate-200 text-slate-700 hover:bg-slate-300 transition";
    }
  });
  renderPublicNews();
}

function doSearch(val) {
  searchWord = val.toLowerCase().trim();
  renderPublicNews();
}

// ==================== PANEL & LOGIN ADMIN ====================
function openAdminModal() {
  document.getElementById('adminModal').classList.remove('hidden');
  if (isAuthed) {
    showDashboard();
  } else {
    document.getElementById('adminLoginForm').classList.remove('hidden');
    document.getElementById('adminDashboardArea').classList.add('hidden');
    document.getElementById('inputAdminPass').value = '';
  }
}

function closeAdminModal() {
  document.getElementById('adminModal').classList.add('hidden');
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const pass = document.getElementById('inputAdminPass').value.trim();
  if (pass === 'admin123') {
    isAuthed = true;
    showDashboard();
    showToast('Login berhasil! Panel administrator terbuka.');
  } else {
    showToast('Kata sandi salah. Akses ditolak!');
    document.getElementById('inputAdminPass').value = '';
  }
}

function logoutAdmin() {
  isAuthed = false;
  document.getElementById('adminLoginForm').classList.remove('hidden');
  document.getElementById('adminDashboardArea').classList.add('hidden');
  document.getElementById('inputAdminPass').value = '';
  showToast('Sesi pengelola telah ditutup.');
}

function showDashboard() {
  document.getElementById('adminLoginForm').classList.add('hidden');
  document.getElementById('adminDashboardArea').classList.remove('hidden');
  renderAdminList();
  populateSettingsForm();
  loadMenuContentForm('profil');
}

function switchAdminTab(tab) {
  const tabs = ['berita', 'menu', 'banner', 'capaian', 'pengurus'];
  tabs.forEach(t => {
    const el = document.getElementById('adminTab' + t.charAt(0).toUpperCase() + t.slice(1));
    const btn = document.getElementById('tabBtn' + t.charAt(0).toUpperCase() + t.slice(1));
    if (el) el.classList.add('hidden');
    if (btn) {
      btn.className = 'pb-1 text-slate-500 hover:text-slate-800 border-b-2 border-transparent transition';
    }
  });

  const targetEl = document.getElementById('adminTab' + tab.charAt(0).toUpperCase() + tab.slice(1));
  const targetBtn = document.getElementById('tabBtn' + tab.charAt(0).toUpperCase() + tab.slice(1));
  if (targetEl) targetEl.classList.remove('hidden');
  if (targetBtn) {
    targetBtn.className = 'pb-1 text-blue-600 border-b-2 border-blue-600 transition';
  }
}

// ==================== CRUD BERITA ====================
async function saveArticle(e) {
  e.preventDefault();
  const saveBtn = document.getElementById('btnSaveArticle');
  saveBtn.disabled = true;
  saveBtn.innerText = "Mengunggah data...";

  const editId = document.getElementById('editArticleId').value;
  const category = document.getElementById('inputCategory').value;
  const date = document.getElementById('inputDate').value;
  const title = document.getElementById('inputTitle').value.trim();
  let imageUrl = document.getElementById('inputImageUrl').value.trim();
  const summary = document.getElementById('inputSummary').value.trim();
  const content = document.getElementById('inputContent').value.trim();
  const fileUrl = document.getElementById('inputFileUrl').value.trim();

  // Proses upload berkas lokal
  const fileInput = document.getElementById('inputFileNewsPhoto');
  imageUrl = await uploadImageToStorage(fileInput, imageUrl, "berita_images");

  if (editId) {
    const idx = newsData.findIndex(n => n.id === editId);
    if (idx !== -1) {
      newsData[idx] = { ...newsData[idx], category, date, title, imageUrl, summary, content, fileUrl };
      showToast('Artikel berhasil diperbarui!');
    }
  } else {
    const newItem = {
      id: 'berita-' + Date.now(),
      category,
      date,
      title,
      imageUrl,
      summary,
      content,
      fileUrl
    };
    newsData.unshift(newItem);
    showToast('Berita baru berhasil dipublikasikan!');
  }

  saveStorage();
  resetArticleForm();
  renderAdminList();
  renderPublicNews();

  saveBtn.disabled = false;
  saveBtn.innerText = "Publikasikan Berita";
}

function editArticleData(id) {
  const item = newsData.find(n => n.id === id);
  if (!item) return;

  document.getElementById('editArticleId').value = item.id;
  document.getElementById('inputCategory').value = item.category;
  document.getElementById('inputDate').value = item.date;
  document.getElementById('inputTitle').value = item.title;
  document.getElementById('inputImageUrl').value = item.imageUrl || '';
  document.getElementById('inputSummary').value = item.summary;
  document.getElementById('inputContent').value = item.content;
  document.getElementById('inputFileUrl').value = item.fileUrl || '';

  document.getElementById('formAdminTitle').innerText = "Edit Artikel: " + item.title.substring(0, 24) + "...";
  document.getElementById('btnSaveArticle').innerText = "Simpan Perubahan";
  document.getElementById('btnCancelEdit').classList.remove('hidden');
}

function resetArticleForm() {
  document.getElementById('editArticleId').value = '';
  document.getElementById('inputTitle').value = '';
  document.getElementById('inputImageUrl').value = '';
  if (document.getElementById('inputFileNewsPhoto')) document.getElementById('inputFileNewsPhoto').value = '';
  document.getElementById('inputSummary').value = '';
  document.getElementById('inputContent').value = '';
  document.getElementById('inputFileUrl').value = '';
  document.getElementById('inputDate').value = new Date().toISOString().split('T')[0];

  document.getElementById('formAdminTitle').innerHTML = '<i class="fa-solid fa-plus-circle mr-1"></i> Tambah Berita / Kegiatan Baru';
  document.getElementById('btnSaveArticle').innerText = "Publikasikan Berita";
  document.getElementById('btnCancelEdit').classList.add('hidden');
}

function deleteArticleData(id) {
  newsData = newsData.filter(n => n.id !== id);
  saveStorage();
  renderAdminList();
  renderPublicNews();
  showToast('Artikel berhasil dihapus.');
}

function renderAdminList() {
  const target = document.getElementById('adminNewsList');
  if (!target) return;
  if (newsData.length === 0) {
    target.innerHTML = `<p class="text-xs text-slate-400 italic">Belum ada artikel.</p>`;
    return;
  }
  target.innerHTML = newsData.map(item => `
    <div class="p-2.5 rounded-lg border border-slate-200 bg-white flex items-center justify-between text-xs">
      <div class="min-w-0 flex-1 pr-3">
        <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 uppercase">${item.category}</span>
        <span class="text-slate-400 text-[10px] ml-1">${item.date}</span>
        <p class="font-bold text-slate-800 truncate mt-0.5">${escapeHtml(item.title)}</p>
      </div>
      <div class="flex items-center space-x-1 shrink-0">
        <button onclick="editArticleData('${item.id}')" class="w-6 h-6 rounded bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition" title="Edit">
          <i class="fa-solid fa-pen text-[10px]"></i>
        </button>
        <button onclick="deleteArticleData('${item.id}')" class="w-6 h-6 rounded bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white flex items-center justify-center transition" title="Hapus">
          <i class="fa-solid fa-trash-can text-[10px]"></i>
        </button>
      </div>
    </div>
  `).join('');
}

// ==================== KELOLA HALAMAN MENU ====================
function loadMenuContentForm(key) {
  const item = pageContents[key] || DEFAULT_PAGES[key] || { title: "", image: "", content: "" };
  document.getElementById('inputMenuTitle').value = item.title;
  document.getElementById('inputMenuImage').value = item.image;
  document.getElementById('inputMenuBody').value = item.content;
  if (document.getElementById('inputFileMenuPhoto')) document.getElementById('inputFileMenuPhoto').value = '';
}

async function saveMenuContent() {
  const key = document.getElementById('selectMenuKey').value;
  const current = pageContents[key] || DEFAULT_PAGES[key] || {};
  
  let imgUrl = document.getElementById('inputMenuImage').value.trim();
  const fileInput = document.getElementById('inputFileMenuPhoto');
  imgUrl = await uploadImageToStorage(fileInput, imgUrl, "menu_covers");

  pageContents[key] = {
    ...current,
    title: document.getElementById('inputMenuTitle').value.trim(),
    image: imgUrl,
    content: document.getElementById('inputMenuBody').value.trim()
  };
  saveStorage();
  showToast('Konten menu ' + key.toUpperCase() + ' berhasil disimpan!');
}

// ==================== PENGATURAN BANNER & LATAR HERO ====================
async function saveHeroBannerSetting() {
  // 1. Gambar Banner Kotak Kanan
  let imgUrl = document.getElementById('inputHeroImgUrl').value.trim() || configData.heroImg;
  const fileInputBanner = document.getElementById('inputFileBannerPhoto');
  imgUrl = await uploadImageToStorage(fileInputBanner, imgUrl, "hero_banners");

  // 2. Latar Belakang Hero (Watermark / Awan Membayang)
  const heroBgInput = document.getElementById('inputHeroBgUrl');
  let bgUrl = (heroBgInput ? heroBgInput.value.trim() : '') || configData.heroBgImg;
  const fileInputBg = document.getElementById('inputFileHeroBgPhoto');
  bgUrl = await uploadImageToStorage(fileInputBg, bgUrl, "hero_backgrounds");

  configData.heroImg = imgUrl;
  configData.heroBgImg = bgUrl;
  configData.heroTitle = document.getElementById('inputHeroTitle').value.trim() || configData.heroTitle;
  configData.heroSubtitle = document.getElementById('inputHeroSubtitle').value.trim() || configData.heroSubtitle;

  saveStorage();
  renderConfigUI();
  showToast('Banner & Latar Belakang Hero berhasil diperbarui!');
}

// ==================== PENGATURAN CAPAIAN PROGRAM (REAL-TIME CLOUD) ====================
function saveCapaianSetting() {
  const keluarga = document.getElementById('inputCapaianKeluarga').value.trim() || "1.420";
  const kbAktif = document.getElementById('inputCapaianKbAktif').value.trim() || "84,6%";
  const tribina = document.getElementById('inputCapaianTribina').value.trim() || "328";
  const penyuluh = document.getElementById('inputCapaianPenyuluh').value.trim() || "215";
  const tahun = document.getElementById('inputCapaianTahun').value.trim() || "Tahun 2026";

  capaianData = { keluarga, kbAktif, tribina, penyuluh, tahun };

  saveStorage();
  renderCapaianUI();
  showToast("Indikator Capaian Program berhasil diperbarui!");
}

function renderCapaianUI() {
  const viewKeluarga = document.getElementById('viewCapaianKeluarga');
  const viewKbAktif = document.getElementById('viewCapaianKbAktif');
  const viewTribina = document.getElementById('viewCapaianTribina');
  const viewPenyuluh = document.getElementById('viewCapaianPenyuluh');
  const viewTahun = document.getElementById('viewCapaianTahun');

  if (viewKeluarga) viewKeluarga.innerText = capaianData.keluarga;
  if (viewKbAktif) viewKbAktif.innerText = capaianData.kbAktif;
  if (viewTribina) viewTribina.innerText = capaianData.tribina;
  if (viewPenyuluh) viewPenyuluh.innerText = capaianData.penyuluh;
  if (viewTahun) viewTahun.innerText = capaianData.tahun;
}

// ==================== PENGATURAN TICKER & PENGURUS INTI ====================
function populateSettingsForm() {
  if (document.getElementById('settingTickerInput')) {
    document.getElementById('settingTickerInput').value = configData.ticker;
  }
  
  // Banner Kotak Kanan & Latar Belakang Hero
  if (document.getElementById('inputHeroImgUrl')) {
    document.getElementById('inputHeroImgUrl').value = configData.heroImg || '';
    document.getElementById('inputHeroTitle').value = configData.heroTitle || '';
    document.getElementById('inputHeroSubtitle').value = configData.heroSubtitle || '';
  }
  if (document.getElementById('inputHeroBgUrl')) {
    document.getElementById('inputHeroBgUrl').value = configData.heroBgImg || '';
  }

  // Pengurus Inti
  if (document.getElementById('settingKetuaName')) {
    document.getElementById('settingKetuaName').value = configData.ketuaName;
    document.getElementById('settingKetuaPhoto').value = configData.ketuaPhoto;
    document.getElementById('settingSekretarisName').value = configData.sekretarisName;
    document.getElementById('settingSekretarisPhoto').value = configData.sekretarisPhoto;
    document.getElementById('settingBendaharaName').value = configData.bendaharaName;
    document.getElementById('settingBendaharaPhoto').value = configData.bendaharaPhoto;
  }

  // Formulir Capaian Program
  if (document.getElementById('inputCapaianKeluarga')) {
    document.getElementById('inputCapaianKeluarga').value = capaianData.keluarga;
    document.getElementById('inputCapaianKbAktif').value = capaianData.kbAktif;
    document.getElementById('inputCapaianTribina').value = capaianData.tribina;
    document.getElementById('inputCapaianPenyuluh').value = capaianData.penyuluh;
    document.getElementById('inputCapaianTahun').value = capaianData.tahun;
  }
}

function saveTickerSetting() {
  const val = document.getElementById('settingTickerInput').value.trim();
  if (val) {
    configData.ticker = val;
    saveStorage();
    renderConfigUI();
    showToast('Teks Sekilas Info berhasil diperbarui!');
  }
}

async function savePengurusSetting() {
  // Ketua
  let kPhoto = document.getElementById('settingKetuaPhoto').value.trim() || configData.ketuaPhoto;
  kPhoto = await uploadImageToStorage(document.getElementById('inputFileKetua'), kPhoto, "pengurus_photos");
  configData.ketuaName = document.getElementById('settingKetuaName').value.trim() || 'Ketua DPD';
  configData.ketuaPhoto = kPhoto;

  // Sekretaris
  let sPhoto = document.getElementById('settingSekretarisPhoto').value.trim() || configData.sekretarisPhoto;
  sPhoto = await uploadImageToStorage(document.getElementById('inputFileSekretaris'), sPhoto, "pengurus_photos");
  configData.sekretarisName = document.getElementById('settingSekretarisName').value.trim() || 'Sekretaris';
  configData.sekretarisPhoto = sPhoto;

  // Bendahara
  let bPhoto = document.getElementById('settingBendaharaPhoto').value.trim() || configData.bendaharaPhoto;
  bPhoto = await uploadImageToStorage(document.getElementById('inputFileBendahara'), bPhoto, "pengurus_photos");
  configData.bendaharaName = document.getElementById('settingBendaharaName').value.trim() || 'Bendahara';
  configData.bendaharaPhoto = bPhoto;

  saveStorage();
  renderConfigUI();
  showToast('Data pengurus inti berhasil diperbarui!');
}

function renderConfigUI() {
  const ticker = document.getElementById('tickerTextContainer');
  if (ticker) ticker.innerText = configData.ticker;

  // Render Foto Banner Kanan & Teks
  const heroImg = document.getElementById('viewHeroBannerImg');
  const heroTitle = document.getElementById('viewHeroBannerTitle');
  const heroSub = document.getElementById('viewHeroBannerSubtitle');
  if (heroImg) heroImg.src = configData.heroImg;
  if (heroTitle) heroTitle.innerText = configData.heroTitle;
  if (heroSub) heroSub.innerText = configData.heroSubtitle;

  // Render Foto Latar Belakang Hero (Watermark Awan Membayang)
  const heroBg = document.getElementById('viewHeroBgImg');
  if (heroBg && configData.heroBgImg) {
    heroBg.src = configData.heroBgImg;
  }

  // Render Pengurus Inti
  const viewNameKetua = document.getElementById('viewNameKetua');
  const viewPhotoKetua = document.getElementById('viewPhotoKetua');
  if (viewNameKetua) viewNameKetua.innerText = configData.ketuaName;
  if (viewPhotoKetua) viewPhotoKetua.src = configData.ketuaPhoto;

  const viewNameSekretaris = document.getElementById('viewNameSekretaris');
  const viewPhotoSekretaris = document.getElementById('viewPhotoSekretaris');
  if (viewNameSekretaris) viewNameSekretaris.innerText = configData.sekretarisName;
  if (viewPhotoSekretaris) viewPhotoSekretaris.src = configData.sekretarisPhoto;

  const viewNameBendahara = document.getElementById('viewNameBendahara');
  const viewPhotoBendahara = document.getElementById('viewPhotoBendahara');
  if (viewNameBendahara) viewNameBendahara.innerText = configData.bendaharaName;
  if (viewPhotoBendahara) viewPhotoBendahara.src = configData.bendaharaPhoto;
}

// ==================== HELPER SOSMED & KOMENTAR ====================
function shareSocmed(platform) {
  const currentUrl = window.location.href;
  const title = encodeURIComponent(document.getElementById('detailTitle').innerText || 'DPD IPeKB Malut');
  let url = '';

  if (platform === 'fb') url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  if (platform === 'tw') url = `https://twitter.com/intent/tweet?text=${title}&url=${encodeURIComponent(currentUrl)}`;
  if (platform === 'wa') url = `https://api.whatsapp.com/send?text=${title}%20${encodeURIComponent(currentUrl)}`;
  if (platform === 'tele') url = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${title}`;
  if (platform === 'mail') url = `mailto:?subject=${title}&body=${encodeURIComponent(currentUrl)}`;

  if (url) window.open(url, '_blank', 'width=600,height=450');
}

function handleCommentSubmit(e) {
  e.preventDefault();
  e.target.reset();
  showToast('Terima kasih! Komentar Anda telah berhasil dikirimkan.');
}

let toastTimer;
function showToast(text) {
  const toast = document.getElementById('toastBox');
  if (!toast) return;
  document.getElementById('toastMsg').innerText = text;
  toast.classList.remove('translate-y-24', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('translate-y-24', 'opacity-0');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 3000);
}

function formatDate(str) {
  if (!str) return "-";
  const parts = str.split('-');
  if (parts.length !== 3) return str;
  const bln = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
  return `${parseInt(parts[2], 10)} ${bln[parseInt(parts[1], 10)-1]} ${parts[0]}`;
}

function escapeHtml(t) {
  if (!t) return '';
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
