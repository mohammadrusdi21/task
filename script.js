const packages = [{"title": "Kalkulator Matematika", "level": "Dasar", "case": "Membuat kalkulator untuk operasi matematika dasar.", "features": "Operasi tambah, kurang, kali, bagi; tombol angka; clear; hapus karakter; hasil; validasi pembagian nol; riwayat.", "challenge": "Tambahkan pangkat, akar kuadrat, dan persentase."}, {"title": "Kasir Sederhana", "level": "Menengah", "case": "Membuat aplikasi kasir untuk transaksi toko kecil.", "features": "Input barang, harga, jumlah; subtotal; total belanja; pembayaran; kembalian; hapus barang.", "challenge": "Tambahkan diskon berdasarkan total belanja dan cetak struk."}, {"title": "Manajemen To-Do List", "level": "Menengah", "case": "Membuat aplikasi pengelolaan aktivitas sehari-hari.", "features": "Tambah, edit, hapus tugas; tandai selesai; hitung tugas; filter status; LocalStorage.", "challenge": "Tambahkan kategori tugas dan tanggal deadline."}, {"title": "Perhitungan Nilai Siswa", "level": "Dasar", "case": "Menghitung nilai akhir dan predikat hasil belajar siswa.", "features": "Input nama dan NIS; nilai tugas, UTS, UAS; bobot; predikat; status kelulusan.", "challenge": "Tambahkan tabel siswa dan pencarian."}, {"title": "Pendaftaran Siswa Baru", "level": "Menengah", "case": "Membuat formulir pendaftaran peserta didik baru.", "features": "Form identitas; NISN; tanggal lahir; alamat; pilihan jurusan; validasi; nomor pendaftaran; LocalStorage.", "challenge": "Buat konfirmasi dan cetak bukti pendaftaran."}, {"title": "Perpustakaan Digital", "level": "Menengah", "case": "Membuat katalog buku perpustakaan sekolah.", "features": "Tambah, edit, hapus buku; judul; kategori; stok; pencarian; LocalStorage.", "challenge": "Tambahkan simulasi peminjaman dan pengembalian."}, {"title": "Kalkulator Diskon Belanja", "level": "Dasar", "case": "Menghitung diskon dan total pembayaran belanja.", "features": "Input harga, diskon, jumlah; nominal diskon; harga setelah diskon; rincian.", "challenge": "Terapkan diskon bertingkat dengan AND, OR, dan NOT."}, {"title": "Pengelolaan Uang Kas Kelas", "level": "Menengah", "case": "Mencatat pemasukan dan pengeluaran kas kelas.", "features": "Input pemasukan/pengeluaran; keterangan; tanggal; saldo; riwayat; LocalStorage.", "challenge": "Buat laporan bulanan."}, {"title": "Konversi Satuan", "level": "Dasar", "case": "Membuat aplikasi konversi satuan.", "features": "Konversi panjang, berat, suhu, waktu; input angka; satuan asal dan tujuan.", "challenge": "Tambahkan konversi mata uang menggunakan API."}, {"title": "Kuis Interaktif", "level": "Menengah", "case": "Membuat kuis pilihan ganda untuk pembelajaran.", "features": "Pertanyaan; empat pilihan; pemeriksaan jawaban; skor; hasil akhir; ulangi kuis.", "challenge": "Tambahkan timer dan pengacakan soal."}, {"title": "Absensi Siswa", "level": "Menengah", "case": "Mencatat kehadiran siswa dalam kelas.", "features": "Nama dan NIS; status hadir/izin/sakit/alfa; tanggal; rekap status; pencarian; LocalStorage.", "challenge": "Tambahkan persentase kehadiran setiap siswa."}, {"title": "Pemesanan Makanan", "level": "Menengah", "case": "Membuat aplikasi pemesanan makanan restoran atau kantin.", "features": "Menu; harga; keranjang; jumlah; total; hapus pesanan; data pembeli.", "challenge": "Tambahkan biaya layanan, diskon, dan status pesanan."}, {"title": "Portofolio Pribadi", "level": "Dasar", "case": "Membuat website portofolio web developer.", "features": "Profil; foto; pendidikan; keahlian; galeri project; kontak; navigasi.", "challenge": "Tambahkan animasi, dark mode, dan formulir kontak interaktif."}, {"title": "Galeri Foto", "level": "Menengah", "case": "Membuat galeri foto yang menarik dan responsif.", "features": "Foto; kategori; filter; detail foto; navigasi foto; grid responsif.", "challenge": "Tambahkan pencarian dan efek lightbox."}, {"title": "Manajemen Inventaris Barang", "level": "Menengah", "case": "Mencatat inventaris barang milik sekolah.", "features": "Kode dan nama barang; kategori; stok; kondisi; CRUD; pencarian.", "challenge": "Tambahkan notifikasi stok minimum dan laporan."}, {"title": "Booking Lapangan", "level": "Menengah", "case": "Membuat aplikasi pemesanan lapangan futsal atau badminton.", "features": "Jenis lapangan; tanggal; jam; identitas pemesan; biaya; daftar booking; validasi jadwal bentrok.", "challenge": "Tambahkan status pembayaran dan pembatalan."}, {"title": "Penghitung Gaji Karyawan", "level": "Menengah", "case": "Menghitung gaji berdasarkan pendapatan dan potongan.", "features": "Nama; jabatan; gaji pokok; tunjangan; lembur; potongan; gaji bersih; slip gaji.", "challenge": "Tambahkan bonus berdasarkan masa kerja dan kinerja."}, {"title": "Pengelolaan Data Siswa", "level": "Menengah", "case": "Mengelola data siswa sekolah.", "features": "Tambah, edit, hapus; tabel; pencarian NIS/nama; filter kelas/jurusan; LocalStorage.", "challenge": "Tambahkan pengurutan dan ekspor CSV."}, {"title": "Pemilihan Ketua OSIS", "level": "Menengah", "case": "Membuat simulasi pemilihan ketua OSIS.", "features": "Profil calon; visi misi; pemilihan; pembatasan pilihan simulasi; hitung suara; hasil.", "challenge": "Buat diagram persentase. Jelaskan LocalStorage tidak aman untuk pemilihan resmi."}, {"title": "Penghitung BMI", "level": "Dasar", "case": "Menghitung indeks massa tubuh berdasarkan tinggi dan berat.", "features": "Input berat dan tinggi; hitung BMI; kategori; informasi; validasi.", "challenge": "Tambahkan estimasi kebutuhan kalori harian dengan penjelasan keterbatasannya."}, {"title": "Informasi Cuaca", "level": "Lanjutan", "case": "Membuat aplikasi informasi cuaca berdasarkan kota.", "features": "Input kota; fetch API; suhu; kondisi; kelembapan; angin; ikon cuaca.", "challenge": "Tambahkan prakiraan beberapa hari dari API yang mendukungnya."}, {"title": "E-Commerce Sederhana", "level": "Lanjutan", "case": "Membuat website toko online untuk menjual produk.", "features": "Katalog; detail; pencarian; filter; keranjang; total; checkout; LocalStorage.", "challenge": "Tambahkan voucher diskon dan invoice simulasi."}, {"title": "Sistem Antrian", "level": "Lanjutan", "case": "Membuat sistem antrian layanan administrasi sekolah.", "features": "Ambil nomor; nomor otomatis; nomor dipanggil; daftar antrian; panggil berikutnya; reset.", "challenge": "Tambahkan kategori layanan dan suara Web Speech API."}, {"title": "Keuangan Pribadi", "level": "Lanjutan", "case": "Mencatat pemasukan dan pengeluaran pribadi.", "features": "Pemasukan; pengeluaran; kategori; saldo; riwayat; filter; LocalStorage.", "challenge": "Buat grafik pemasukan dan pengeluaran."}, {"title": "Pengelolaan Nilai Raport", "level": "Lanjutan", "case": "Mengolah nilai siswa menjadi laporan hasil belajar sederhana.", "features": "Identitas siswa; nilai mapel; rata-rata; predikat; peringkat; tabel; hasil raport.", "challenge": "Tambahkan cetak raport dan rekap per kelas."}, {"title": "Pemesanan Tiket Bioskop", "level": "Lanjutan", "case": "Membuat aplikasi pemesanan tiket bioskop.", "features": "Daftar film; jadwal; jam tayang; pilih kursi; harga; data pemesan; bukti pemesanan.", "challenge": "Buat denah kursi tersedia dan sudah dipesan."}, {"title": "Manajemen Koperasi Sekolah", "level": "Lanjutan", "case": "Mengelola transaksi penjualan barang koperasi sekolah.", "features": "Data barang; kode; harga; stok; penjualan; keranjang; total; kembalian; riwayat; laporan.", "challenge": "Tambahkan simulasi simpanan anggota dan laporan laba."}, {"title": "Website Profil Sekolah", "level": "Lanjutan", "case": "Membuat website profil sekolah yang informatif dan responsif.", "features": "Beranda; sejarah; visi misi; program keahlian; galeri; berita; kontak; navigasi.", "challenge": "Tambahkan slider, hamburger menu, dan pencarian berita."}, {"title": "Portal Lowongan Kerja", "level": "Lanjutan", "case": "Membuat portal informasi lowongan pekerjaan bagi alumni SMK.", "features": "Daftar lowongan; perusahaan; posisi; syarat; filter; pencarian; formulir lamaran.", "challenge": "Tambahkan bookmark dan status lamaran simulasi."}, {"title": "Game Edukasi Tebak Angka", "level": "Menengah", "case": "Membuat game untuk melatih logika dan pemecahan masalah.", "features": "Angka acak; input tebakan; petunjuk; jumlah percobaan; skor; ulangi; level.", "challenge": "Tambahkan timer, leaderboard lokal, dan tiga tingkat kesulitan."}, {"title": "Dashboard Administrasi Sekolah", "level": "Sangat Lanjutan", "case": "Membuat dashboard yang mengintegrasikan pengelolaan data sekolah.", "features": "Dashboard; sidebar; statistik; data guru/siswa/kelas/jurusan; pencarian; filter; grafik; LocalStorage.", "challenge": "Buat simulasi login, dashboard, dan CRUD terintegrasi."}];
const STORAGE_KEY = "labweb31_progress_v1";
const SCORE_KEY = "labweb31_scores_v1";
const defaultTasks = ["Analisis kebutuhan dan studi kasus","Membuat struktur HTML","Mendesain tampilan dengan CSS","Menerapkan fungsi JavaScript","Menguji dan mempresentasikan aplikasi"];
let progress = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
let scores = JSON.parse(localStorage.getItem(SCORE_KEY) || "{}");
let activeLevel = "Semua";
let activePackage = null;

const grid = document.getElementById("packageGrid");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("detailModal");

function levelClass(level){return level.toLowerCase().replaceAll(" ","-");}
function renderPackages(){
  const q = searchInput.value.trim().toLowerCase();
  const filtered = packages.map((p,i)=>({...p,index:i})).filter(p=>{
    const matchesLevel = activeLevel==="Semua" || p.level===activeLevel;
    const haystack = [p.title,p.case,p.features,p.challenge].join(" ").toLowerCase();
    return matchesLevel && haystack.includes(q);
  });
  grid.innerHTML = filtered.map(p=>`
    <article class="package-card">
      <div class="card-top"><span class="card-number">PROJECT ${(p.index+1).toString().padStart(2,"0")}</span><span class="level-badge ${levelClass(p.level)}">${p.level}</span></div>
      <h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.case)}</p>
      <div class="card-bottom"><small>${progress[p.index]?.done ? '<span class="done-mark">✓ Selesai</span>' : 'Project praktikum'}</small><button class="card-open" data-open="${p.index}">Lihat detail →</button></div>
    </article>`).join("");
  document.getElementById("emptyState").classList.toggle("hidden",filtered.length!==0);
  grid.querySelectorAll("[data-open]").forEach(btn=>btn.addEventListener("click",()=>openPackage(Number(btn.dataset.open))));
}
function escapeHTML(value){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function updateProgress(){
  const done = Object.values(progress).filter(v=>v.done).length;
  document.getElementById("completedCount").textContent=done;
  document.getElementById("progressText").textContent=`${done} dari 31 selesai`;
  document.getElementById("progressBar").style.width=(done/31*100)+"%";
}
function openPackage(index){
  activePackage=index;
  const p=packages[index], state=progress[index]||{tasks:[],done:false};
  document.getElementById("modalNumber").textContent=`PAKET ${(index+1).toString().padStart(2,"0")}`;
  document.getElementById("modalLevel").textContent=p.level;
  document.getElementById("modalLevel").className="level-badge "+levelClass(p.level);
  document.getElementById("modalTitle").textContent=p.title;
  document.getElementById("modalCase").textContent=p.case;
  document.getElementById("modalFeatures").innerHTML=p.features.split(";").map(x=>`<li>${escapeHTML(x.trim())}</li>`).join("");
  document.getElementById("modalChallenge").textContent=p.challenge;
  document.getElementById("taskList").innerHTML=defaultTasks.map((t,i)=>`<label class="task-check"><input type="checkbox" data-task="${i}" ${state.tasks.includes(i)?"checked":""}> ${t}</label>`).join("");
  document.querySelectorAll("[data-task]").forEach(el=>el.addEventListener("change",()=>{
    const current=progress[index]||{tasks:[],done:false};
    current.tasks=[...document.querySelectorAll("[data-task]:checked")].map(x=>Number(x.dataset.task));
    current.done=current.tasks.length===defaultTasks.length;
    progress[index]=current;saveProgress();updateTaskProgress();renderPackages();
  }));
  document.getElementById("completeBtn").textContent=state.done?"Batalkan status selesai":"Tandai project selesai ✓";
  document.getElementById("completeBtn").onclick=()=>{
    const current=progress[index]||{tasks:[],done:false};
    current.done=!current.done;
    if(current.done) current.tasks=[0,1,2,3,4];
    progress[index]=current;saveProgress();openPackage(index);renderPackages();updateProgress();
  };
  updateTaskProgress();
  modal.classList.remove("hidden");document.body.style.overflow="hidden";
}
function updateTaskProgress(){
  const state=progress[activePackage]||{tasks:[]}, n=state.tasks.length;
  document.getElementById("taskCount").textContent=`${n}/5 selesai`;
  document.getElementById("taskBar").style.width=(n/5*100)+"%";
}
function saveProgress(){localStorage.setItem(STORAGE_KEY,JSON.stringify(progress));updateProgress();}
function closeModal(){modal.classList.add("hidden");document.body.style.overflow="";}
document.getElementById("closeModal").addEventListener("click",closeModal);
document.getElementById("modalCloseBottom").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});
searchInput.addEventListener("input",renderPackages);
document.getElementById("filters").addEventListener("click",e=>{
  const btn=e.target.closest("[data-level]");if(!btn)return;
  activeLevel=btn.dataset.level;
  document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===btn));
  renderPackages();
});
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("mainNav").classList.toggle("open"));
document.querySelectorAll(".nav-link").forEach(a=>a.addEventListener("click",()=>document.getElementById("mainNav").classList.remove("open")));

const rubric=[
 ["Struktur HTML dan semantic HTML",10],
 ["Desain dan kerapian CSS",15],
 ["Logika pemrograman JavaScript",20],
 ["Penerapan DOM dan Event",15],
 ["Fungsi aplikasi sesuai studi kasus",20],
 ["Validasi dan pengelolaan data",10],
 ["Responsivitas dan kreativitas",5],
 ["Presentasi dan demonstrasi",5]
];
function renderRubric(){
 document.getElementById("rubricList").innerHTML=rubric.map((r,i)=>`
 <div class="rubric-item"><div class="rubric-head"><strong>${i+1}. ${r[0]}</strong><span>Bobot ${r[1]}%</span></div>
 <div class="rubric-controls"><input type="range" min="0" max="100" value="${scores[i]??0}" data-score="${i}" aria-label="Skor ${r[0]}"><output id="out${i}">${scores[i]??0}</output></div></div>`).join("");
 document.querySelectorAll("[data-score]").forEach(el=>el.addEventListener("input",()=>{
   scores[el.dataset.score]=Number(el.value);document.getElementById("out"+el.dataset.score).textContent=el.value;
   localStorage.setItem(SCORE_KEY,JSON.stringify(scores));calculateScore();
 }));
 calculateScore();
}
function calculateScore(){
 const total=rubric.reduce((sum,r,i)=>sum+r[1]*(Number(scores[i]||0))/100,0);
 document.getElementById("scoreTotal").innerHTML=`${total.toFixed(1)}<span>/100</span>`;
 document.getElementById("scoreFill").style.width=total+"%";
 let status="Belum ada penilaian";
 if(total>0) status=total>=90?"Sangat Baik":total>=80?"Baik":total>=70?"Cukup":"Perlu Bimbingan";
 document.getElementById("scoreStatus").textContent=status;
}
document.getElementById("resetScores").addEventListener("click",()=>{
 scores={};localStorage.removeItem(SCORE_KEY);renderRubric();
});
renderPackages();updateProgress();renderRubric();
