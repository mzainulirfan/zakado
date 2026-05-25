# Admin UI Plan

## 1. Tujuan Dokumen

Dokumen ini merangkum rencana pembuatan halaman admin Zakado dengan fokus **tampilan/UI saja**. Scope pada tahap ini hanya mencakup:

- struktur halaman admin
- layout dashboard
- tampilan daftar data
- tampilan form CRUD produk
- pola navigasi
- state visual seperti loading, empty, dan error

Yang **belum** masuk tahap ini:

- backend
- database
- autentikasi
- upload file sungguhan
- API integration
- validasi server
- role/permission system

Target utamanya adalah menyiapkan fondasi admin panel yang terasa rapi, kredibel, mudah dipakai, dan siap disambungkan ke backend pada fase berikutnya.

## 2. Tujuan Produk Admin

Halaman admin Zakado nantinya dipakai untuk membantu pengelolaan konten dan katalog internal. Karena fase ini masih UI-only, tujuan utamanya adalah:

- memetakan pengalaman admin saat mengelola produk
- menyiapkan struktur dashboard yang mudah dikembangkan
- memastikan CRUD produk sudah memiliki alur visual yang jelas
- menjaga konsistensi visual dengan brand Zakado, tetapi tetap terasa seperti tool kerja internal

## 3. Prinsip Desain Admin

Admin panel tidak perlu tampil seperti landing page, tetapi tetap sebaiknya membawa karakter visual Zakado:

- hangat namun rapi
- profesional tanpa terasa kaku
- fokus pada efisiensi kerja
- informasi cepat terbaca
- komponen konsisten dan reusable

Prinsip UI yang disarankan:

- sidebar navigasi selalu jelas
- action utama mudah ditemukan
- tabel/list tidak terasa padat berlebihan
- form panjang dipecah per kelompok informasi
- badge/status dipakai untuk membantu scanning
- empty state harus informatif, bukan kosong

## 4. Scope UI Fase Awal

### In scope

- halaman login visual placeholder
- layout admin utama
- dashboard overview
- halaman list produk
- halaman tambah produk
- halaman edit produk
- modal atau dialog hapus produk
- halaman detail produk opsional
- state loading/skeleton
- state empty
- state error visual

### Out of scope

- penyimpanan data nyata
- multi-user admin
- analytics real-time
- integrasi order
- manajemen testimoni/galeri/FAQ
- media library penuh

## 5. Struktur Halaman yang Direkomendasikan

Rute UI awal yang disarankan:

1. `/admin/login`
2. `/admin`
3. `/admin/products`
4. `/admin/products/new`
5. `/admin/products/[id]/edit`
6. `/admin/products/[id]` opsional untuk preview detail

Jika ingin versi awal lebih ringkas, fase pertama bisa cukup terdiri dari:

1. Dashboard
2. Product List
3. Add Product
4. Edit Product

## 6. Informasi yang Perlu Ada di Dashboard

Karena belum ada backend, dashboard cukup memakai data dummy yang realistis. Tujuannya bukan akurasi data, tetapi menguji layout dan hierarki informasi.

### Section yang disarankan

#### A. Top bar

- judul halaman
- breadcrumb sederhana
- search placeholder
- avatar admin

#### B. Ringkasan KPI

Card ringkas untuk:

- total produk
- produk aktif
- draft produk
- produk stok terbatas atau perlu update

#### C. Aktivitas terbaru

Contoh isi:

- produk terakhir diubah
- draft terakhir dibuat
- item yang belum lengkap gambarnya

#### D. Quick actions

Tombol:

- tambah produk baru
- lihat semua produk
- buka draft

#### E. Reminder panel

Contoh isi:

- 3 produk belum punya foto utama
- 2 produk belum punya harga
- 4 produk belum punya kategori

## 7. Halaman Product List

Ini akan menjadi halaman terpenting setelah dashboard. Fokusnya adalah membuat admin cepat menemukan, memeriksa, dan mengubah produk.

### Komponen utama

- page header dengan judul dan tombol `Tambah Produk`
- search field
- filter chips / dropdown
- tabel atau card list
- bulk action placeholder
- pagination visual

### Kolom yang disarankan

- foto thumbnail
- nama produk
- kategori
- harga
- status
- tanggal update
- aksi

### Filter yang disarankan

- semua
- aktif
- draft
- unggulan
- hampers
- souvenir
- custom

### Aksi per item

- lihat
- edit
- duplikasi
- hapus

### State yang perlu disiapkan

- default state dengan data
- empty result setelah search/filter
- empty state saat belum ada produk sama sekali
- loading skeleton tabel

## 8. Halaman Add Product

Tujuan halaman ini adalah memberi pengalaman input yang jelas dan tidak melelahkan. Form sebaiknya dibagi ke dalam beberapa blok.

### Struktur form yang disarankan

#### A. Informasi utama

- nama produk
- slug placeholder
- kategori
- status produk

#### B. Harga dan label

- harga utama
- harga coret opsional
- label produk seperti `Best Seller`, `Custom`, `Favorit`

#### C. Deskripsi produk

- deskripsi singkat
- deskripsi lengkap
- selling points singkat

#### D. Media produk

- upload area visual placeholder
- preview thumbnail
- urutan gambar

#### E. Detail tambahan

- estimasi pengerjaan
- minimum order
- opsi custom
- tags

#### F. CTA area

- simpan draft
- publish
- preview
- batal

### Catatan UX

- gunakan helper text singkat pada field penting
- field wajib dibuat jelas
- tombol aksi sticky di desktop bila form panjang
- layout 2 kolom di desktop, 1 kolom di mobile/tablet kecil

## 9. Halaman Edit Product

Secara struktur hampir sama dengan Add Product, tetapi perlu beberapa elemen tambahan:

- info terakhir diperbarui
- badge status produk
- tombol hapus
- tombol duplikasi
- panel preview singkat

Tujuannya agar admin merasa sedang mengelola item nyata, bukan hanya mengisi form kosong.

## 10. Dialog Hapus Produk

Walau backend belum ada, flow hapus tetap penting untuk divisualkan.

Elemen yang disarankan:

- nama produk yang akan dihapus
- warning singkat bahwa aksi ini tidak bisa dibatalkan
- tombol sekunder `Batal`
- tombol primer destruktif `Hapus Produk`

Jika ingin lebih aman secara UX, bisa tambahkan pola ketik nama produk sebagai konfirmasi pada fase lanjutan. Untuk fase UI awal, modal konfirmasi standar sudah cukup.

## 11. Login Page Placeholder

Karena auth belum dibuat, halaman login cukup menjadi shell visual agar alur admin terasa lengkap.

Komponen yang disarankan:

- brand Zakado
- judul `Admin Login`
- input email
- input password
- tombol masuk
- helper text bahwa ini masih prototype UI

Desain login sebaiknya lebih bersih dan sederhana daripada landing page. Tidak perlu terlalu dekoratif, tetapi tetap punya aksen warna brand.

## 12. Sistem Navigasi Admin

### Sidebar

Menu awal yang disarankan:

- Dashboard
- Produk
- Media
- Testimoni
- FAQ
- Pengaturan

Catatan:

- menu selain Dashboard dan Produk bisa tampil sebagai placeholder disabled jika memang belum dikerjakan
- ini berguna untuk menunjukkan arah scale admin panel ke depan

### Top bar

- search
- notifikasi placeholder
- avatar admin
- menu profil/logout placeholder

## 13. Komponen Reusable yang Perlu Disiapkan

Supaya admin panel mudah dikembangkan, UI sebaiknya dibangun dari komponen dasar reusable.

### Komponen inti

- `AdminLayout`
- `AdminSidebar`
- `AdminTopbar`
- `PageHeader`
- `StatCard`
- `FilterBar`
- `DataTable`
- `StatusBadge`
- `EmptyState`
- `ConfirmDialog`
- `ProductForm`
- `FormSection`
- `MediaUploaderPlaceholder`

### Komponen pendukung

- `SearchInput`
- `SelectField`
- `TextareaField`
- `TagInput` visual
- `Pagination`
- `SkeletonCard`
- `SkeletonTable`

## 14. Arah Visual yang Disarankan

Supaya berbeda dari landing page tetapi tetap satu ekosistem, admin panel bisa memakai arah berikut:

- base warna netral terang
- aksen golden amber Zakado
- card putih/ivory dengan border halus
- shadow ringan
- badge status dengan warna yang tegas namun tetap warm

Contoh nuansa status:

- aktif: olive / hijau hangat
- draft: amber lembut
- nonaktif: abu hangat
- hapus/destruktif: terracotta / merah bata

Tipografi:

- heading tetap bisa memakai serif secara terbatas untuk identitas
- body dan form gunakan sans serif yang sangat terbaca

## 15. Prioritas Pengerjaan UI

### Prioritas 1: Fondasi layout admin

Target:

- admin sudah terasa seperti area kerja yang utuh

Task:

1. buat route `/admin`
2. buat sidebar dan topbar
3. buat dashboard skeleton dengan dummy data

### Prioritas 2: Alur CRUD produk visual

Target:

- user bisa memahami alur kelola produk dari list ke tambah/edit/hapus

Task:

1. buat halaman product list
2. buat halaman add product
3. buat halaman edit product
4. buat dialog delete

### Prioritas 3: State dan usability

Target:

- UI terasa matang walaupun belum terhubung backend

Task:

1. buat empty state
2. buat loading skeleton
3. buat state search tanpa hasil
4. buat feedback visual tombol dan form

### Prioritas 4: Polish visual

Target:

- admin tampil premium, konsisten, dan siap dipresentasikan

Task:

1. rapikan spacing dan hierarchy
2. konsistenkan badge, input, button, dan card
3. tambah preview media yang lebih meyakinkan
4. rapikan mobile dan tablet behavior

## 16. Dummy Data yang Perlu Disiapkan

Agar UI bisa terasa hidup, fase ini sebaiknya memakai data mock terpusat.

Contoh field produk:

- id
- name
- slug
- category
- price
- comparePrice
- status
- isFeatured
- thumbnail
- images
- shortDescription
- description
- leadTime
- minOrder
- customizable
- tags
- updatedAt

Dummy data ini sebaiknya disimpan terpisah agar nanti mudah diganti ke API.

## 17. Rekomendasi Struktur File

Contoh struktur awal:

- `app/admin/page.js`
- `app/admin/login/page.js`
- `app/admin/products/page.js`
- `app/admin/products/new/page.js`
- `app/admin/products/[id]/edit/page.js`
- `components/admin/AdminLayout.js`
- `components/admin/AdminSidebar.js`
- `components/admin/AdminTopbar.js`
- `components/admin/ProductForm.js`
- `components/admin/DataTable.js`
- `lib/admin/mockProducts.js`

Jika admin panel berkembang, komponen admin sebaiknya dipisah jelas dari komponen landing page.

## 18. Risiko Jika Tidak Direncanakan dari Awal

- admin panel terasa seperti tempelan dari landing page
- form produk cepat menjadi berantakan saat field bertambah
- tabel sulit dipakai saat data mulai banyak
- komponen sulit dipakai ulang untuk fitur admin lain
- transisi ke backend nanti jadi lebih mahal secara refactor

## 19. Definisi Selesai untuk Fase UI Ini

Fase admin UI-only dianggap selesai jika:

- sudah ada layout admin yang konsisten
- dashboard menampilkan overview dengan data dummy
- alur CRUD produk sudah lengkap secara visual
- halaman add/edit product sudah usable
- ada state loading, empty, dan delete confirmation
- seluruh flow bisa dipresentasikan tanpa backend

## 20. Saran Eksekusi Iterasi Pertama

Jika ingin mulai dari versi paling impactful, saya sarankan urutannya:

1. bangun `AdminLayout` dengan sidebar dan topbar
2. buat dashboard overview
3. buat product list dengan search, filter, dan action
4. buat form add/edit product
5. tambah delete modal, empty state, dan loading skeleton

Dengan urutan ini, hasilnya cepat terlihat utuh dan nanti lebih mudah disambungkan ke backend saat fase berikutnya dimulai.
