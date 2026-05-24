# Design Direction Zakado

## 1. Arah Visual

Zakado sebaiknya tampil sebagai brand hadiah personal premium yang hangat, rapi, dan emosional. Nuansa visual perlu terasa:

- hangat dan merayakan momen
- elegan, bukan terlalu ramai
- terpercaya untuk order custom

Implementasi sekarang sudah mengarah ke palet kuning keemasan, yang cocok untuk positioning premium-friendly. Arah ini bisa dipertahankan dan dipertegas.

## 2. Brand Personality

- personal
- thoughtful
- premium tapi approachable
- rapi dan terpercaya

## 3. Prinsip UI

- tunjukkan produk secepat mungkin
- setiap section harus mendorong ke aksi berikutnya
- prioritaskan foto asli hasil produk
- gunakan copy singkat yang menjual manfaat, bukan hanya dekoratif
- mobile-first karena banyak traffic kemungkinan datang dari sosial media

## 4. Struktur Halaman yang Disarankan

1. Hero
2. Kategori produk unggulan
3. Cara order
4. Keunggulan Zakado
5. Galeri / hasil custom
6. Testimoni
7. FAQ singkat
8. Tentang dan kontak
9. CTA penutup

## 5. Rekomendasi Visual System

### Warna

- Primary: golden amber
- Secondary: cream / soft ivory
- Accent: terracotta atau deep olive untuk variasi premium
- Neutral: warm gray untuk teks dan border

Contoh token awal:

- `--color-primary: #b7791f`
- `--color-primary-strong: #8c5d12`
- `--color-surface: #fffaf0`
- `--color-accent: #8f4e2d`
- `--color-text: #2f2a24`

### Tipografi

- Heading serif elegan seperti Playfair sudah cocok
- Body sans serif bersih seperti Inter juga cocok
- Heading perlu lebih konsisten ukurannya agar kesan premium naik

### Komponen visual utama

- card produk dengan image ratio konsisten
- pill label seperti `Custom Nama`, `Best Seller`, `Siap Gift`
- CTA rounded dengan kontras tinggi
- badge trust untuk `Fast Response`, `Packaging Premium`, `Bisa Custom`

## 6. Arah Foto dan Konten

- utamakan foto asli produk dibanding stock image
- gunakan close-up detail packaging, kartu ucapan, dan hasil custom
- sertakan variasi konteks momen: wisuda, ulang tahun, pernikahan, corporate
- hindari terlalu banyak gambar generik yang tidak membuktikan kualitas produk

## 7. UX Notes dari Implementasi Saat Ini

- hero sudah menyampaikan konteks, tetapi CTA utama sebaiknya ke order, bukan hanya scroll
- ikon keranjang belum selaras dengan flow saat ini jika checkout belum ada
- section produk belum memisahkan kategori atau harga
- testimoni bagus sebagai format, tetapi perlu data pelanggan nyata
- peta dan kontak perlu akurat agar meningkatkan trust

## 8. Komponen yang Perlu Ditambah

- floating WhatsApp button
- section `Cara Order`
- section `FAQ`
- CTA banner sebelum footer
- product tags dan kisaran harga
- empty state bila kategori masih sedikit

## 9. Interaksi dan Motion

- sticky header tetap ringan dan jelas
- hover card produk cukup halus
- gunakan reveal sederhana saat scroll
- jangan terlalu banyak animasi agar tidak terasa murahan

## 10. Mobile Experience

- CTA harus selalu mudah dijangkau
- tombol WhatsApp dan order harus dominan
- grid produk 1 kolom di mobile, 2 di tablet, 3 di desktop
- teks hero harus ringkas supaya tidak menutup visual utama
