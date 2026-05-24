# Requirements Zakado

## 1. Product Requirements

### 1.1 Functional Requirements

#### Landing page

- Sistem harus menampilkan identitas brand Zakado secara konsisten di seluruh halaman.
- Sistem harus memiliki section hero dengan headline, subheadline, dan CTA utama.
- Sistem harus memiliki navigasi sticky ke section utama halaman.
- Sistem harus memiliki section katalog produk.
- Sistem harus memiliki section keunggulan layanan.
- Sistem harus memiliki section testimoni pelanggan.
- Sistem harus memiliki section tentang brand dan kontak.

#### Katalog produk

- Sistem harus menampilkan minimal 6-12 produk unggulan atau kategori produk.
- Setiap item produk harus memiliki foto, nama, deskripsi singkat, dan CTA.
- Sistem sebaiknya menampilkan kisaran harga atau starting price.
- Sistem sebaiknya menampilkan tag custom seperti nama, ucapan, atau tema acara.

#### Konversi / order

- Sistem harus menyediakan CTA primer untuk menghubungi admin via WhatsApp.
- Sistem harus menyediakan CTA sekunder untuk melihat katalog atau cara order.
- Sistem harus menampilkan langkah pemesanan yang mudah dipahami.
- Jika fitur keranjang belum aktif, sistem tidak boleh menampilkan CTA keranjang yang menyesatkan.

#### Trust building

- Sistem harus menampilkan testimoni nyata atau sosial proof yang kredibel.
- Sistem sebaiknya menampilkan galeri hasil custom.
- Sistem sebaiknya menampilkan estimasi pengerjaan dan area pengiriman.

#### Kontak

- Sistem harus menampilkan nomor WhatsApp aktif.
- Sistem harus menampilkan lokasi bisnis atau area layanan.
- Sistem dapat menampilkan peta jika memang relevan dan akurat.

## 2. Content Requirements

- Brand name harus konsisten: gunakan `Zakado` atau `Zakado Indonesia`, pilih satu format utama.
- Semua placeholder seperti email, alamat, dan nama brand lama harus diganti.
- Copy harus fokus pada manfaat: personal, cepat, premium, mudah dipesan.
- Konten produk harus dibedakan per kategori atau use case, bukan berulang dengan judul sama.

## 3. Design Requirements

- UI harus responsif untuk mobile, tablet, dan desktop.
- Desain harus menggunakan visual premium yang hangat.
- Foto produk harus menjadi elemen utama penjualan.
- CTA harus memiliki hirarki visual yang jelas.
- Kontras teks harus cukup untuk keterbacaan.

## 4. Technical Requirements

- Aplikasi menggunakan Next.js App Router.
- Image asset lokal harus diutamakan untuk performa dan kontrol.
- Metadata halaman harus memuat title dan description yang relevan untuk SEO.
- Struktur section harus memiliki id yang konsisten untuk navigasi.
- Komponen harus dipisah per section agar mudah dirawat.

## 5. Non-Functional Requirements

- Halaman harus memuat cepat pada jaringan mobile menengah.
- Layout harus stabil dan tidak bergeser saat gambar dimuat.
- Tautan dan tombol harus dapat digunakan dengan baik di perangkat sentuh.
- Konten dasar harus tetap dapat diakses tanpa interaksi kompleks.

## 6. SEO Requirements

- Halaman harus memiliki title dan meta description yang jelas.
- Heading harus terstruktur dari H1 ke H2.
- Alt text gambar harus deskriptif.
- Konten harus menyebut kata kunci seperti `hampers custom`, `kado wisuda`, `gift box`, atau istilah bisnis yang dipilih brand.

## 7. Analytics Requirements

- CTA hero harus dapat dilacak kliknya.
- CTA WhatsApp harus dapat dilacak sumber section-nya.
- Scroll ke section produk dan testimoni sebaiknya dapat dilacak.

## 8. Open Questions

- Apakah fokus awal bisnis adalah B2C, corporate, atau keduanya?
- Apakah pemesanan akan tetap lewat WhatsApp atau ingin diarahkan ke checkout?
- Apakah produk akan dijual per item, per kategori, atau paket custom?
- Apakah area layanan hanya kota tertentu atau nasional?
- Apakah brand final adalah `Zakado` atau `Zakado Indonesia`?
