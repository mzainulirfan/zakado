# Landing Page Improvement Plan

## 1. Ringkasan Kondisi Saat Ini

Landing page Zakado saat ini sudah jauh lebih terarah dibanding versi awal. Struktur utamanya sudah bagus karena sudah memiliki:

- positioning brand yang lebih jelas
- hero dengan CTA utama ke WhatsApp
- katalog produk
- alur order
- keunggulan
- galeri
- testimoni
- FAQ
- kontak
- closing CTA

Artinya, fondasi produk dan funnel dasar sudah ada. Yang perlu ditingkatkan sekarang bukan lagi sekadar "punya section", tetapi membuat setiap section lebih kuat dalam:

- meyakinkan
- menjual
- terasa kredibel
- terasa matang secara visual

## 2. Temuan Utama

### 2.1 Yang sudah kuat

- Brand `Zakado` sudah konsisten.
- Hierarki CTA sudah lebih baik: WhatsApp jadi jalur utama.
- Struktur landing page sudah mengikuti PRD.
- Visual tone premium-hangat sudah terasa.
- User flow utama cukup jelas dari hero ke produk lalu ke kontak/order.

### 2.2 Yang masih perlu diperbaiki

#### A. Trust dan kredibilitas masih belum maksimal

- Testimoni masih berupa data statis yang terasa seperti placeholder.
- Galeri masih memakai aset yang terbatas dan belum benar-benar menunjukkan variasi hasil custom.
- Tidak ada bukti operasional yang kuat seperti jumlah order, area pengiriman, lead time, atau contoh order nyata.
- Belum ada social proof tambahan seperti foto packaging close-up, testimoni screenshot, atau order badge.

#### B. Konten masih belum cukup tajam secara komersial

- Beberapa copy masih generik dan belum benar-benar menjawab keberatan calon pembeli.
- Produk belum dibedakan dengan struktur informasi yang sangat jelas seperti kategori, use case, target momen, dan alasan memilih produk itu.
- Belum ada section yang menjelaskan estimasi proses secara lebih operasional, misalnya berapa lama produksi, kapan harus pre-order, dan kapan order mendadak masih mungkin.

#### C. CTA dan conversion flow masih bisa dibuat lebih efisien

- Marketplace sudah ada, tetapi belum dijelaskan kapan pengguna sebaiknya memilih WhatsApp vs Shopee vs TikTok Shop.
- CTA sudah banyak muncul, tetapi belum memiliki tracking atau source labeling.
- Belum ada form singkat untuk user yang belum siap chat langsung.

#### D. Detail UI/UX masih perlu polishing

- Hero card sudah lebih aman, tetapi area hero tetap perlu pengecekan lintas breakpoint laptop kecil dan tablet landscape.
- Beberapa section masih terasa seperti kumpulan card, belum punya ritme visual yang benar-benar istimewa.
- Footer masih terlalu sederhana untuk halaman yang mengandalkan trust.
- Section galeri belum punya CTA atau hubungan kuat ke order.

#### E. Kualitas implementasi masih perlu dirapikan

- Ada indikasi masalah encoding/mojibake pada beberapa teks seperti `Â©` dan separator `Â·`.
- Data produk, testimoni, FAQ, dan kontak masih hardcoded langsung di komponen.
- Belum ada lapisan analytics untuk CTA utama.
- Metadata SEO masih dasar dan belum mendalam.

## 3. Prioritas Perbaikan

### Prioritas 1: Rapikan trust dan data nyata

Target:

- membuat pengunjung lebih percaya bahwa Zakado adalah bisnis aktif dan siap menerima order

Yang perlu dikerjakan:

- ganti testimoni placeholder dengan testimoni nyata
- tambahkan bukti visual hasil custom yang lebih banyak
- tampilkan informasi operasional yang konkret:
  - lead time normal
  - opsi urgent order
  - area layanan
  - minimum informasi saat order
- tambahkan alasan kenapa order via WhatsApp adalah jalur tercepat

Deliverable:

- update section `Testimonial`
- update `Gallery`
- update `About` / `Kontak`

### Prioritas 2: Perkuat konten jualan

Target:

- membuat halaman lebih persuasif, bukan hanya informatif

Yang perlu dikerjakan:

- revisi copy hero agar makin tajam ke problem user
- bedakan produk per momen atau kebutuhan
- tambahkan mini selling points per produk
- tambahkan section kecil `Siapa yang cocok order ini?` atau `Paket favorit`
- tambahkan penjelasan kapan cocok order via WhatsApp dan kapan cocok checkout via marketplace

Deliverable:

- update `Hero`
- update `Product` dan `ProductCard`
- tambah section baru bila perlu

### Prioritas 3: Tingkatkan kualitas visual dan ritme layout

Target:

- membuat halaman terasa lebih premium dan lebih memorable

Yang perlu dikerjakan:

- beri variasi layout antar section agar tidak terlalu seragam
- tambah visual anchor pada section galeri dan testimoni
- rapikan spacing pada breakpoint tertentu
- perkuat footer dengan informasi tambahan:
  - link order channel
  - area layanan
  - jam respons
  - mini brand statement

Deliverable:

- refinements pada `Hero`, `Gallery`, `Testimonial`, `Footer`

### Prioritas 4: Rapikan technical quality

Target:

- membuat landing page lebih siap untuk scale dan maintenance

Yang perlu dikerjakan:

- perbaiki seluruh teks yang terkena encoding issue
- pindahkan data statis ke file data terpisah
- siapkan helper untuk CTA tracking
- perbaiki metadata SEO:
  - title
  - description
  - open graph
  - keywords dasar
- audit alt text image

Deliverable:

- perbaikan di `layout`, `Footer`, `Testimonial`
- file data terpisah untuk produk/testimoni/FAQ
- util analytics sederhana

## 4. Rencana Eksekusi Bertahap

### Phase 1: Trust & Content Cleanup

Estimasi fokus:

- 1 sprint kecil

Task:

1. Rapikan semua karakter encoding yang rusak.
2. Ganti seluruh data placeholder dengan data bisnis yang final.
3. Revisi copy hero, produk, dan CTA agar lebih menjual.
4. Tambahkan informasi operasional yang konkret.

### Phase 2: Visual Polish & Conversion Optimization

Task:

1. Perkuat section galeri dengan hasil foto yang lebih real.
2. Tambahkan trust badge atau proof bar.
3. Rapikan hierarchy CTA dan explanatory text antar channel order.
4. Perkuat footer dan closing CTA.

### Phase 3: SEO & Analytics Readiness

Task:

1. Tambahkan metadata Open Graph dan social sharing.
2. Tambahkan CTA tracking dasar.
3. Audit heading structure dan alt text.
4. Rapikan data structure agar komponen lebih maintainable.

## 5. Rekomendasi Per File

### `components/Hero.js`

- pertajam headline/subheadline
- tambah penjelasan channel order
- cek ulang responsivitas hero image card

### `components/Product.js`

- kelompokkan produk per kategori atau momen
- tambahkan CTA katalog lengkap yang lebih strategis

### `components/ProductCard.js`

- tambahkan reason-to-buy singkat
- tampilkan use case atau estimasi custom
- evaluasi apakah semua card perlu opsi CTA yang sama

### `components/Gallery.js`

- ganti ke aset hasil order nyata
- tambahkan CTA ke order setelah galeri

### `components/Testimonial.js`

- ganti testimoni placeholder
- tambahkan bukti lebih otentik seperti kota, jenis order, atau kutipan pendek dari pelanggan asli
- perbaiki karakter separator yang rusak

### `components/About.js`

- finalkan semua info bisnis
- perjelas area layanan dan jam respons
- tambahkan penjelasan kapan order via WA vs marketplace

### `components/Footer.js`

- perbaiki karakter `Â©`
- tambahkan informasi brand dan order channel

### `app/layout.js`

- tingkatkan metadata SEO dan Open Graph

## 6. Quick Wins yang Saya Sarankan Dikerjakan Dulu

Jika harus memilih 5 hal paling impactful dari kondisi sekarang, saya akan kerjakan ini dulu:

1. Perbaiki semua teks rusak akibat encoding.
2. Ganti testimoni dan galeri dengan materi nyata.
3. Tambahkan informasi operasional konkret: lead time, urgent order, area layanan.
4. Pertajam copy hero dan copy produk.
5. Tambahkan SEO metadata dan tracking CTA dasar.

## 7. Definisi Selesai untuk Iterasi Berikutnya

Iterasi improvement berikutnya dianggap berhasil jika:

- halaman terlihat lebih kredibel dan tidak terasa placeholder
- pengunjung paham bagaimana order dan channel mana yang harus dipilih
- section produk dan galeri terasa lebih meyakinkan
- tidak ada lagi issue encoding atau detail UI yang mengganggu
- halaman lebih siap dipakai untuk promosi real dari WhatsApp, Shopee, dan TikTok Shop
