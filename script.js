// ==================== DATABASE (Simulated SQL) ====================
const DB = {
  siswa: [
    { nis:'2401001', nama:'Andi Prasetyo Nugroho', kelas:'X IPA 1', jurusan:'IPA', nisn:'0091234501', status:'Aktif' },
    { nis:'2401002', nama:'Budi Santoso', kelas:'X IPA 1', jurusan:'IPA', nisn:'0091234502', status:'Aktif' },
    { nis:'2401003', nama:'Citra Dewi Lestari', kelas:'X IPA 2', jurusan:'IPA', nisn:'0091234503', status:'Aktif' },
    { nis:'2401004', nama:'Dian Putri Rahayu', kelas:'X IPS 1', jurusan:'IPS', nisn:'0091234504', status:'Aktif' },
    { nis:'2401005', nama:'Eko Wahyu Saputra', kelas:'XI IPA 1', jurusan:'IPA', nisn:'0081234505', status:'Aktif' },
    { nis:'2401006', nama:'Fajar Rizki Maulana', kelas:'XI IPA 2', jurusan:'IPA', nisn:'0081234506', status:'Aktif' },
    { nis:'2401007', nama:'Gita Permata Sari', kelas:'XI IPS 1', jurusan:'IPS', nisn:'0081234507', status:'Aktif' },
    { nis:'2401008', nama:'Hendra Kurniawan', kelas:'XII IPA 1', jurusan:'IPA', nisn:'0071234508', status:'Aktif' },
    { nis:'2401009', nama:'Indah Kusumawati', kelas:'XII IPA 1', jurusan:'IPA', nisn:'0071234509', status:'Aktif' },
    { nis:'2401010', nama:'Joko Widiatmoko', kelas:'XII IPS 1', jurusan:'IPS', nisn:'0071234510', status:'Tidak Aktif' },
    { nis:'2401011', nama:'Kartika Rahmawati', kelas:'X IPA 1', jurusan:'IPA', nisn:'0091234511', status:'Aktif' },
    { nis:'2401012', nama:'Lutfi Hamdani', kelas:'X IPA 2', jurusan:'IPA', nisn:'0091234512', status:'Aktif' },
    { nis:'2401013', nama:'Maya Anggraini', kelas:'XI IPA 1', jurusan:'IPA', nisn:'0081234513', status:'Aktif' },
    { nis:'2401014', nama:'Niko Setiawan', kelas:'XI IPS 1', jurusan:'IPS', nisn:'0081234514', status:'Aktif' },
    { nis:'2401015', nama:'Olivia Natasya', kelas:'XII IPA 1', jurusan:'IPA', nisn:'0071234515', status:'Aktif' },
  ],
  guru: [
    { nip:'', nama:'Yeyep Mustakim, S.Pd.', mapel:'Mapel', jabatan:'Kepala Sekolah', pendidikan:'S1', status:'Aktif' },
    { nip:'', nama:'Ravina,.', mapel:'Mapel', jabatan:'Wakasek Kurikulum', pendidikan:'', status:'Aktif' },
    { nip:'-', nama:'Novi, S.Pd.', mapel:'Mapel', jabatan:'Guru', pendidikan:'S1', status:'Aktif' },
    { nip:'', nama:'Septi, S.M.', mapel:'Mapel kelas 2', jabatan:'Wali Kelas ', pendidikan:'S1', status2:'Aktif' },
    { nip:'', nama:'Alik Muhammad Fikri', mapel:'Mapel & Tahfizh', jabatan:'Guru', pendidikan:'', status:'Aktif' },
  ],
  pengumuman: [
    { id:1, judul:'Jadwal Ujian Akhir Semester Ganjil 2024/2025', kategori:'Ujian', tanggal:'2024-12-05', isi:'Ujian Akhir Semester Ganjil akan dilaksanakan pada tanggal 16–20 Desember 2024. Siswa diwajibkan hadir tepat waktu dan membawa kartu ujian.', penulis:'Tata Usaha' },
    { id:2, judul:'Pendaftaran Ekstrakurikuler Semester Genap', kategori:'Ekstrakurikuler', tanggal:'2024-12-03', isi:'Pendaftaran ekskul semester genap dibuka mulai 6 Januari 2025. Tersedia 18 kegiatan ekskul pilihan.', penulis:'Kesiswaan' },
    { id:3, judul:'Olimpiade Sains Nasional (OSN) Tingkat Kabupaten', kategori:'Akademik', tanggal:'2024-11-28', isi:'Seleksi internal OSN tingkat sekolah akan diadakan pada 10 Januari 2025. Siswa berminat daftar ke guru pembimbing mata pelajaran masing-masing.', penulis:'Kurikulum' },
    { id:4, judul:'Pengambilan Rapor Semester Ganjil', kategori:'Akademik', tanggal:'2024-11-25', isi:'Pengambilan rapor dilaksanakan pada 22 Desember 2024 dan diambil langsung oleh orang tua/wali murid.', penulis:'Wali Kelas' },
    { id:5, judul:'Persiapan SNBP 2025 untuk Kelas XII', kategori:'Akademik', tanggal:'2024-11-20', isi:'Siswa kelas XII diwajibkan mengumpulkan portofolio prestasi paling lambat 15 Januari 2025 ke bagian administrasi.', penulis:'BK' },
    { id:6, judul:'Festival Olahraga dan Seni Sekolah 2024', kategori:'Umum', tanggal:'2024-11-15', isi:'FOSS 2024 akan diselenggarakan pada 5-6 Desember 2024. Daftarkan tim Anda sebelum 28 November 2024.', penulis:'Kesiswaan' },
  ],
  jadwal: {
    'X-IPA-1': {
      'Senin':   [['07.00-07.45','Matematika','Drs. Ahmad Fauzan, M.Pd.','R.101'],['07.45-08.30','Fisika','Budi Hartono, S.Pd.','Lab Fisika'],['08.30-09.15','Kimia','Dra. Siti Rahayu, M.Si.','Lab Kimia'],['09.30-10.15','B. Indonesia','Yunita Dewi, S.Pd.','R.101'],['10.15-11.00','B. Inggris','Reza Firmansyah, S.Pd.','R.101'],['11.00-11.45','Biologi','Rina Kusuma, S.Pd.','Lab Bio']],
      'Selasa':  [['07.00-07.45','Sejarah','Dewi Astuti, S.Pd.','R.101'],['07.45-08.30','Matematika','Drs. Ahmad Fauzan, M.Pd.','R.101'],['08.30-09.15','B. Inggris','Reza Firmansyah, S.Pd.','R.101'],['09.30-10.15','Fisika','Budi Hartono, S.Pd.','Lab Fisika'],['10.15-11.00','Sosiologi','Rizal Aditya, S.Pd.','R.101']],
      'Rabu':    [['07.00-07.45','Kimia','Dra. Siti Rahayu, M.Si.','Lab Kimia'],['07.45-08.30','B. Indonesia','Yunita Dewi, S.Pd.','R.101'],['08.30-09.15','Matematika','Drs. Ahmad Fauzan, M.Pd.','R.101'],['09.30-10.15','Biologi','Rina Kusuma, S.Pd.','Lab Bio']],
      'Kamis':   [['07.00-07.45','B. Inggris','Reza Firmansyah, S.Pd.','R.101'],['07.45-08.30','Sejarah','Dewi Astuti, S.Pd.','R.101'],['08.30-09.15','Fisika','Budi Hartono, S.Pd.','Lab Fisika'],['09.30-10.15','Matematika','Drs. Ahmad Fauzan, M.Pd.','R.101'],['10.15-11.00','Kimia','Dra. Siti Rahayu, M.Si.','Lab Kimia']],
      'Jumat':   [['07.00-07.45','B. Indonesia','Yunita Dewi, S.Pd.','R.101'],['07.45-08.30','Biologi','Rina Kusuma, S.Pd.','Lab Bio'],['08.30-09.15','Olahraga','–','Lapangan']],
    },
  },
  pendaftaran: []
};

// Duplicate jadwal for other classes (simplified)
['X-IPA-2','XI-IPS-1','XII-IPA-1'].forEach(k => { DB.jadwal[k] = DB.jadwal['X-IPA-1']; });

// ==================== PAGE NAVIGATION ====================
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pg = document.getElementById('page-' + name);
  if (pg) { pg.classList.add('active'); window.scrollTo(0, 0); }
  if (name === 'siswa') renderSiswa();
  if (name === 'guru') renderGuru();
  if (name === 'akademik') renderJadwal();
  if (name === 'pengumuman') renderAnn();
  if (name === 'home') renderHeroNews();
}

function setActive(el) {
  document.querySelectorAll('.nav-link-custom').forEach(a => a.classList.remove('active'));
  el.classList.add('active');
}

function setActiveByName(name) {
  document.querySelectorAll('.nav-link-custom').forEach(a => {
    if (a.textContent.trim() === name) a.classList.add('active');
    else a.classList.remove('active');
  });
}

function toggleMobileMenu() {
  const mn = document.getElementById('mobileNav');
  mn.style.display = mn.style.display === 'none' ? 'flex' : 'none';
}

document.getElementById('mobileMenuBtn').addEventListener('click', () => {
  const mn = document.getElementById('mobileNav');
  mn.style.display = (mn.style.display === 'none' || mn.style.display === '') ? 'flex' : 'none';
  mn.style.flexDirection = 'column';
});

// ==================== TOAST ====================
function showToast(msg, type = 'info') {
  const tc = document.getElementById('toastContainer');
  const icons = { success:'check-circle', error:'x-circle', info:'info' };
  const colors = { success:'#1a7a45', error:'#c0142a', info:'var(--primary)' };
  const t = document.createElement('div');
  t.className = `toast-custom ${type}`;
  t.innerHTML = `<i data-lucide="${icons[type]||'info'}" style="width:20px;height:20px;color:${colors[type]};flex-shrink:0;"></i><span>${msg}</span>`;
  tc.appendChild(t);
  lucide.createIcons();
  setTimeout(() => { t.style.opacity='0'; t.style.transition='opacity 0.4s'; setTimeout(() => t.remove(), 400); }, 3500);
}

// ==================== HERO NEWS ====================
function renderHeroNews() {
  const container = document.getElementById('hero-news-list');
  container.innerHTML = DB.pengumuman.slice(0,3).map(a => `
    <div class="news-item-hero">
      <div class="news-date-hero">${formatDate(a.tanggal)} · ${a.kategori}</div>
      <div class="news-title-hero">${a.judul}</div>
    </div>`).join('');
}

// ==================== JADWAL ====================
function renderJadwal() {
  const kelas = document.getElementById('kelasFilter').value;
  const hari = document.getElementById('hariFilter').value;
  const kelasKey = kelas.replace(/ /g, '-');
  document.getElementById('jadwal-title').textContent = `Jadwal ${kelas} - ${hari}`;
  const rows = (DB.jadwal[kelasKey] && DB.jadwal[kelasKey][hari]) || [];
  document.getElementById('jadwal-tbody').innerHTML = rows.length
    ? rows.map((r, i) => `<tr><td><b>${i+1}</b></td><td>${r[0]}</td><td style="font-weight:600;">${r[1]}</td><td>${r[2]}</td><td><span class="badge-status badge-grade">${r[3]}</span></td></tr>`).join('')
    : `<tr><td colspan="5" style="text-align:center;padding:2rem;color:var(--text-muted);">Tidak ada jadwal</td></tr>`;
  lucide.createIcons();
}

// ==================== SISWA ====================
let siswaPage = 1, siswaPerPage = 7, siswaFiltered = [];
function filterSiswa() { siswaPage = 1; renderSiswa(); }
function renderSiswa() {
  const q = (document.getElementById('searchSiswa')?.value || '').toLowerCase();
  const kelas = document.getElementById('filterKelas')?.value || '';
  const status = document.getElementById('filterStatus')?.value || '';
  siswaFiltered = DB.siswa.filter(s =>
    (s.nama.toLowerCase().includes(q) || s.nis.includes(q)) &&
    (!kelas || s.kelas === kelas) && (!status || s.status === status)
  );
  document.getElementById('siswa-count').textContent = siswaFiltered.length;
  const total = Math.ceil(siswaFiltered.length / siswaPerPage);
  const slice = siswaFiltered.slice((siswaPage-1)*siswaPerPage, siswaPage*siswaPerPage);
  document.getElementById('siswa-tbody').innerHTML = slice.length
    ? slice.map(s => `<tr>
         <td><code style="font-size:0.82rem;background:#f0f4fb;padding:0.2rem 0.5rem;border-radius:5px;">${s.nis}</code></td>
        <td style="font-weight:600;">${s.nama}</td>
        <td><span class="badge-status badge-grade">${s.kelas}</span></td>
        <td>${s.jurusan}</td>
        <td style="color:var(--text-muted);font-size:0.85rem;">${s.nisn}</td>
        <td><span class="badge-status ${s.status==='Aktif'?'badge-active':'badge-inactive'}">${s.status}</span></td>
        <td><button onclick="showToast('Data ${s.nama} dibuka','info')" style="background:var(--light-bg);border:1px solid #dde5f0;border-radius:6px;padding:0.3rem 0.7rem;font-size:0.78rem;cursor:pointer;font-weight:600;color:var(--primary);">Detail</button></td>
       </tr>`).join('')
    : `<tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--text-muted);">Tidak ada data siswa ditemukan</td></tr>`;
  document.getElementById('siswa-page-info').textContent = `Menampilkan ${Math.min((siswaPage-1)*siswaPerPage+1, siswaFiltered.length)}–${Math.min(siswaPage*siswaPerPage, siswaFiltered.length)} dari ${siswaFiltered.length} siswa`;
  renderPagination('siswa', total);
  lucide.createIcons();
}

// ==================== GURU ====================
let guruPage = 1, guruPerPage = 7, guruFiltered = [];
function filterGuru() { guruPage = 1; renderGuru(); }
function renderGuru() {
  const q = (document.getElementById('searchGuru')?.value || '').toLowerCase();
  const mapel = document.getElementById('filterMapel')?.value || '';
  guruFiltered = DB.guru.filter(g =>
    (g.nama.toLowerCase().includes(q) || g.nip.includes(q)) && (!mapel || g.mapel === mapel)
  );
  document.getElementById('guru-count').textContent = guruFiltered.length;
  const total = Math.ceil(guruFiltered.length / guruPerPage);
  const slice = guruFiltered.slice((guruPage-1)*guruPerPage, guruPage*guruPerPage);
  document.getElementById('guru-tbody').innerHTML = slice.length
    ? slice.map(g => `<tr>
        <td><code style="font-size:0.8rem;background:#f0f4fb;padding:0.2rem 0.5rem;border-radius:5px;">${g.nip}</code></td>
        <td style="font-weight:600;">${g.nama}</td>
        <td>${g.mapel}</td>
        <td style="font-size:0.85rem;color:var(--text-muted);">${g.jabatan}</td>
        <td><span class="badge-status badge-grade">${g.pendidikan}</span></td>
        <td><span class="badge-status ${g.status==='Aktif'?'badge-active':'badge-inactive'}">${g.status}</span></td>
       </tr>`).join('')
    : `<tr><td colspan="6" style="text-align:center;padding:2rem;color:var(--text-muted);">Tidak ada data guru ditemukan</td></tr>`;
  document.getElementById('guru-page-info').textContent = `Menampilkan ${Math.min((guruPage-1)*guruPerPage+1, guruFiltered.length)}–${Math.min(guruPage*guruPerPage, guruFiltered.length)} dari ${guruFiltered.length} guru`;
  renderPagination('guru', total);
  lucide.createIcons();
}

// ==================== PENGUMUMAN ====================
let annFiltered = [];
function filterAnn() { renderAnn(); }
function renderAnn() {
  const q = (document.getElementById('searchAnn')?.value || '').toLowerCase();
  const cat = document.getElementById('filterAnnCat')?.value || '';
  annFiltered = DB.pengumuman.filter(a =>
    a.judul.toLowerCase().includes(q) && (!cat || a.kategori.toLowerCase() === cat.toLowerCase())
  );
  const container = document.getElementById('ann-list');
  container.innerHTML = annFiltered.length
    ? annFiltered.map(a => {
        const d = new Date(a.tanggal);
        const day = d.getDate(); const month = d.toLocaleString('id',{month:'short'}).toUpperCase();
        const catClass = a.kategori.toLowerCase().replace(' ','');
        return `<div class="col-12">
          <div class="announcement-card d-flex">
            <div class="ann-date-badge"><div class="ann-day">${day}</div><div class="ann-month">${month}</div></div>
            <div class="ann-body">
              <span class="ann-tag ${catClass}">${a.kategori}</span>
              <div style="font-weight:700;font-size:0.97rem;margin-bottom:0.4rem;">${a.judul}</div>
              <div style="font-size:0.87rem;color:var(--text-muted);line-height:1.6;">${a.isi}</div>
              <div style="font-size:0.78rem;color:var(--text-muted);margin-top:0.5rem;">Oleh: ${a.penulis}</div>
            </div>
          </div>
        </div>`;
      }).join('')
    : `<div class="col-12"><div style="text-align:center;padding:3rem;color:var(--text-muted);">Tidak ada pengumuman ditemukan</div></div>`;
}

// ==================== PAGINATION ====================
function renderPagination(type, total) {
  const container = document.getElementById(`${type}-pagination`);
  container.innerHTML = '';
  if (total <= 1) return;
  const cur = type === 'siswa' ? siswaPage : guruPage;
  const prev = document.createElement('button');
  prev.textContent = '‹ Prev'; prev.disabled = cur === 1;
  prev.onclick = () => { if(type==='siswa'){siswaPage--;renderSiswa();}else{guruPage--;renderGuru();} };
  container.appendChild(prev);
  for (let i = 1; i <= total; i++) {
    const btn = document.createElement('button');
    btn.textContent = i; if(i===cur) btn.classList.add('active');
    btn.onclick = ((n) => () => { if(type==='siswa'){siswaPage=n;renderSiswa();}else{guruPage=n;renderGuru();} })(i);
    container.appendChild(btn);
  }
  const next = document.createElement('button');
  next.textContent = 'Next ›'; next.disabled = cur === total;
  next.onclick = () => { if(type==='siswa'){siswaPage++;renderSiswa();}else{guruPage++;renderGuru();} };
  container.appendChild(next);
}

// ==================== PENDAFTARAN ====================
function submitDaftar(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.disabled = true;
  document.getElementById('submitText').textContent = 'Mengirim...';
  setTimeout(() => {
    const nama = document.getElementById('namaLengkap').value;
    const noP = 'PPDB-2025-' + String(DB.pendaftaran.length + 1001);
    DB.pendaftaran.push({ nama, noP });
    document.getElementById('successName').textContent = `Selamat, ${nama}!`;
    document.getElementById('noPendaftaran').textContent = noP;
    document.getElementById('formSuccess').style.display = 'block';
    document.getElementById('daftarForm').reset();
    btn.disabled = false;
    document.getElementById('submitText').textContent = 'Kirim Formulir Pendaftaran';
    showToast('Pendaftaran berhasil dikirim! 🎉', 'success');
    document.getElementById('formSuccess').scrollIntoView({ behavior:'smooth', block:'nearest' });
  }, 1000);
}

// ==================== HELPER ====================
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' });
}

// ==================== ELEMENT SDK ====================
const defaultConfig = {
  school_name: 'SMA Nusantara Unggul',
  school_tagline: 'Kami berkomitmen memberikan pendidikan berkualitas tinggi yang mengintegrasikan ilmu pengetahuan, teknologi, dan nilai-nilai luhur bangsa.',
  principal_name: 'Drs. Ahmad Fauzan, M.Pd.',
  background_color: '#1a3a6b',
  surface_color: '#ffffff',
  text_color: '#1c1c2e',
  primary_action_color: '#e8b400',
  secondary_action_color: '#e63946',
  font_family: 'Plus Jakarta Sans',
  font_size: 16
};

window.elementSdk && window.elementSdk.init({
  defaultConfig,
  onConfigChange: async (config) => {
    const sn = config.school_name || defaultConfig.school_name;
    const tl = config.school_tagline || defaultConfig.school_tagline;
    const pn = config.principal_name || defaultConfig.principal_name;
    document.getElementById('nav-school-name').textContent = sn;
    document.getElementById('hero-school-name').textContent = sn.split(' ').slice(-1)[0];
    document.getElementById('hero-tagline').textContent = tl;
    document.getElementById('footer-school-name').textContent = sn;
    document.getElementById('footer-principal').textContent = pn;
    document.title = sn;
    document.querySelectorAll('.hero-section').forEach(el => el.style.background = `linear-gradient(135deg, ${darken(config.background_color||defaultConfig.background_color)}, ${config.background_color||defaultConfig.background_color})`);
    document.querySelectorAll('.btn-submit').forEach(el => el.style.background = config.background_color || defaultConfig.background_color);
    document.querySelectorAll('.feature-card').forEach(el => el.style.background = config.surface_color || defaultConfig.surface_color);
    document.querySelectorAll('.hero-btn-primary, .nav-cta').forEach(el => { el.style.background = config.primary_action_color || defaultConfig.primary_action_color; el.style.color = '#1a3a6b'; });
    const ff = config.font_family || defaultConfig.font_family;
    const fs = config.font_size || defaultConfig.font_size;
    document.body.style.fontFamily = `'${ff}', 'Plus Jakarta Sans', sans-serif`;
    document.querySelectorAll('p, td, .nav-link-custom, .footer-link').forEach(el => el.style.fontSize = `${fs * 0.875}px`);
    document.querySelectorAll('h1, .hero-title').forEach(el => el.style.fontSize = `${fs * 2}px`);
    document.querySelectorAll('h2, .page-header h2').forEach(el => el.style.fontSize = `${fs * 1.6}px`);
    document.querySelectorAll('h4, h5').forEach(el => el.style.fontSize = `${fs}px`);
  },
  mapToCapabilities: (config) => ({
    recolorables: [
      { get: () => config.background_color || defaultConfig.background_color, set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); } },
      { get: () => config.surface_color || defaultConfig.surface_color, set: (v) => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); } },
      { get: () => config.text_color || defaultConfig.text_color, set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); } },
      { get: () => config.primary_action_color || defaultConfig.primary_action_color, set: (v) => { config.primary_action_color = v; window.elementSdk.setConfig({ primary_action_color: v }); } },
      { get: () => config.secondary_action_color || defaultConfig.secondary_action_color, set: (v) => { config.secondary_action_color = v; window.elementSdk.setConfig({ secondary_action_color: v }); } },
    ],
    borderables: [],
    fontEditable: { get: () => config.font_family || defaultConfig.font_family, set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); } },
    fontSizeable: { get: () => config.font_size || defaultConfig.font_size, set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); } },
  }),
  mapToEditPanelValues: (config) => new Map([
    ['school_name', config.school_name || defaultConfig.school_name],
    ['school_tagline', config.school_tagline || defaultConfig.school_tagline],
    ['principal_name', config.principal_name || defaultConfig.principal_name],
  ])
});

function darken(hex) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return `#${Math.max(0,r-30).toString(16).padStart(2,'0')}${Math.max(0,g-30).toString(16).padStart(2,'0')}${Math.max(0,b-30).toString(16).padStart(2,'0')}`;
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  renderHeroNews();
});