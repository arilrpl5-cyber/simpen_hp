# SIMPEN HP - Sistem Informasi Manajemen Peminjaman HP

Aplikasi web untuk manajemen peminjaman HP di sekolah dengan desain dark mode yang clean dan responsif.

## 📋 Daftar File

### Dark Mode Version (Rekomendasi)
- **index-dark.html** - Dashboard utama
- **peminjaman-dark.html** - Form peminjaman HP
- **daftar-dipinjam-dark.html** - Daftar HP yang sedang dipinjam
- **pengembalian-dark.html** - Form pengembalian HP
- **laporan-harian-dark.html** - Laporan peminjaman harian
- **laporan-siswa-dark.html** - Laporan perilaku peminjaman siswa
- **data-siswa-dark.html** - Manajemen data siswa

### Light Mode Version (Legacy)
- index.html
- peminjaman.html
- daftar-dipinjam.html
- pengembalian.html
- laporan-harian.html
- laporan-siswa.html
- data-siswa.html

## 🎯 Fitur Utama

### 1. Dashboard
- Metric cards dengan statistik real-time
- Akses cepat ke 3 menu utama
- Navigasi yang intuitif

### 2. Peminjaman HP
- Form input siswa, jam pinjam, dan alasan
- Auto-fill kelas berdasarkan siswa
- Notifikasi sukses dengan nomor referensi

### 3. Daftar HP Dipinjam
- Tabel real-time dengan tracking durasi
- Filter by siswa, kelas, dan status
- Highlight otomatis untuk HP yang lama dipinjam

### 4. Pengembalian HP
- Form pengembalian dengan detail peminjaman
- Input kondisi HP (Baik, Rusak, Hilang)
- Auto-hitung durasi peminjaman

### 5. Laporan Harian
- Statistik peminjaman per hari
- Tabel detail dengan 6 kolom informasi
- Export PDF & Excel

### 6. Laporan Siswa
- Analisis perilaku peminjaman per siswa
- Highlight siswa dengan frekuensi tinggi
- Filter by kelas dan periode

### 7. Manajemen Data Siswa
- CRUD siswa (Create, Read, Update, Delete)
- Import CSV untuk bulk add
- Status badge (Aktif/Nonaktif)
- Pagination

## 🎨 Design Highlights

- **Dark Mode**: Warna gelap yang nyaman di mata
- **Clean UI**: Desain minimalis dan profesional
- **Responsive**: Cocok untuk desktop, tablet, dan mobile
- **Icons Clean**: Icon satu warna untuk tampilan rapi
- **Sidebar Navigation**: Navigasi tetap di sebelah kiri

## 🚀 Cara Menggunakan

1. Buka file `index-dark.html` di browser
2. Gunakan sidebar navigation untuk berpindah antar halaman
3. Semua halaman sudah saling terhubung dengan link `<a href>`

## 📊 Menu Navigasi

```
Dashboard (◈)
├── Peminjaman (⊕)
├── HP Dipinjam (◉)
├── Pengembalian (↺)
├── Laporan Harian (▲)
├── Laporan Siswa (◎)
└── Data Siswa (⚙)
```

## 💻 Tech Stack

- **HTML5** - Struktur
- **CSS3** - Styling (Dark Mode dengan CSS Variables)
- **JavaScript** - Interaktivitas
- **Responsive Design** - Media queries untuk mobile

## 🔧 Customization

### Mengubah Warna
Edit CSS variables di `:root`:
```css
:root {
    --accent-color: #3b82f6; /* Warna accent utama */
    --bg-primary: #0f1419;   /* Background utama */
    --text-primary: #e5e7eb; /* Warna text utama */
}
```

### Mengubah Font
Ubah `font-family` di `body`:
```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 👥 Struktur Database (Referensi)

### students
- id
- nis
- nama_lengkap
- kelas
- no_hp
- status

### loans
- id
- student_id
- tanggal_pinjam
- jam_pinjam
- tanggal_kembali
- jam_kembali
- alasan
- kondisi_awal
- kondisi_akhir

## 📝 Notes

- Semua file HTML sudah berdiri sendiri (offline-ready)
- Data ditampilkan menggunakan hardcoded data untuk demo
- Untuk production, integrasikan dengan backend API

## 🤝 Support

Jika ada pertanyaan atau masalah, silakan hubungi tim development.

---

**Version**: 1.0  
**Last Updated**: April 2024  
**License**: Internal Use Only
