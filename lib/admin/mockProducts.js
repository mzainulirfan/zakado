export const productCategories = [
  "Hampers",
  "Souvenir",
  "Gift Box",
  "Corporate",
  "Wisuda",
];

export const productStatuses = ["active", "draft", "archived"];

export const mockProducts = [
  {
    id: "prd-001",
    name: "Hampers Wisuda Signature",
    slug: "hampers-wisuda-signature",
    category: "Wisuda",
    price: 135000,
    comparePrice: 155000,
    status: "active",
    isFeatured: true,
    thumbnail: "/products/hampers-cermin.png",
    images: [
      "/products/hampers-cermin.png",
      "/products/heroImage.webp",
    ],
    shortDescription: "Hampers wisuda personal dengan nama dan ucapan custom.",
    description:
      "Paket wisuda dengan dekor personal, kartu ucapan, dan packaging premium yang siap diberikan tanpa repot.",
    leadTime: "2-4 hari kerja",
    minOrder: "1 pcs",
    customizable: true,
    tags: ["Best Seller", "Custom Nama", "Wisuda"],
    updatedAt: "2026-05-22T10:30:00+07:00",
  },
  {
    id: "prd-002",
    name: "Frame Gift Box",
    slug: "frame-gift-box",
    category: "Gift Box",
    price: 145000,
    comparePrice: null,
    status: "active",
    isFeatured: true,
    thumbnail: "/products/hampers-frame.webp",
    images: ["/products/hampers-frame.webp"],
    shortDescription: "Gift box dengan frame custom untuk momen spesial.",
    description:
      "Pilihan hadiah hangat untuk ulang tahun, wisuda, dan anniversary dengan tampilan lebih personal.",
    leadTime: "2-5 hari kerja",
    minOrder: "1 pcs",
    customizable: true,
    tags: ["Frame", "Gift Box"],
    updatedAt: "2026-05-21T08:15:00+07:00",
  },
  {
    id: "prd-003",
    name: "Desk Calendar Gift",
    slug: "desk-calendar-gift",
    category: "Souvenir",
    price: 95000,
    comparePrice: 105000,
    status: "draft",
    isFeatured: false,
    thumbnail: "/products/kalender.webp",
    images: ["/products/kalender.webp"],
    shortDescription: "Gift fungsional dengan kalender meja custom.",
    description:
      "Cocok untuk hadiah praktis yang tetap cantik dan punya sentuhan personal.",
    leadTime: "3-5 hari kerja",
    minOrder: "6 pcs",
    customizable: true,
    tags: ["Functional Gift", "Desk Gift"],
    updatedAt: "2026-05-20T15:40:00+07:00",
  },
  {
    id: "prd-004",
    name: "Clock & Keepsake Set",
    slug: "clock-keepsake-set",
    category: "Corporate",
    price: 165000,
    comparePrice: 185000,
    status: "active",
    isFeatured: false,
    thumbnail: "/products/hampers-jam.webp",
    images: ["/products/hampers-jam.webp"],
    shortDescription: "Paket hadiah formal untuk momen apresiasi yang penting.",
    description:
      "Set jam custom dengan tampilan premium untuk hadiah kantor, apresiasi tim, atau peresmian.",
    leadTime: "3-6 hari kerja",
    minOrder: "12 pcs",
    customizable: true,
    tags: ["Corporate", "Premium"],
    updatedAt: "2026-05-19T12:05:00+07:00",
  },
  {
    id: "prd-005",
    name: "Birthday Memory Box",
    slug: "birthday-memory-box",
    category: "Hampers",
    price: 125000,
    comparePrice: null,
    status: "draft",
    isFeatured: false,
    thumbnail: "/products/hampers-frame.webp",
    images: ["/products/hampers-frame.webp", "/products/heroImage.webp"],
    shortDescription: "Hadiah ulang tahun dengan dekor dan ucapan personal.",
    description:
      "Memory box bernuansa hangat untuk surprise kecil yang terasa niat dan mudah dikustomisasi.",
    leadTime: "2-4 hari kerja",
    minOrder: "1 pcs",
    customizable: true,
    tags: ["Birthday", "Custom Theme"],
    updatedAt: "2026-05-18T09:25:00+07:00",
  },
  {
    id: "prd-006",
    name: "Bulk Appreciation Hampers",
    slug: "bulk-appreciation-hampers",
    category: "Corporate",
    price: 0,
    comparePrice: null,
    status: "archived",
    isFeatured: false,
    thumbnail: "/products/hampers-cermin.png",
    images: ["/products/hampers-cermin.png"],
    shortDescription: "Paket custom untuk kebutuhan komunitas dan corporate.",
    description:
      "Hampers branding-ready untuk order jumlah besar dengan penyesuaian konsep dan budget.",
    leadTime: "5-10 hari kerja",
    minOrder: "20 pcs",
    customizable: true,
    tags: ["Bulk Order", "Branding Ready"],
    updatedAt: "2026-05-16T14:10:00+07:00",
  },
];

export const dashboardStats = [
  {
    id: "total-products",
    label: "Total Produk",
    value: "24",
    change: "+4 bulan ini",
  },
  {
    id: "active-products",
    label: "Produk Aktif",
    value: "16",
    change: "3 butuh update foto",
  },
  {
    id: "draft-products",
    label: "Draft",
    value: "5",
    change: "2 siap dipublish",
  },
  {
    id: "attention-products",
    label: "Perlu Perhatian",
    value: "3",
    change: "harga atau kategori belum lengkap",
  },
];

export const recentActivities = [
  {
    id: "act-001",
    title: "Frame Gift Box diperbarui",
    description: "Harga promo dan tag produk sudah diperbarui.",
    time: "10 menit lalu",
  },
  {
    id: "act-002",
    title: "Draft baru dibuat",
    description: "Birthday Memory Box masuk ke kategori Hampers.",
    time: "45 menit lalu",
  },
  {
    id: "act-003",
    title: "Media perlu dilengkapi",
    description: "Desk Calendar Gift baru memiliki 1 gambar utama.",
    time: "2 jam lalu",
  },
];

export const reminders = [
  "3 produk belum punya foto kedua untuk galeri.",
  "2 produk masih draft karena deskripsi lengkap belum diisi.",
  "1 produk corporate belum punya kisaran harga awal.",
];

export const adminMenuItems = [
  { href: "/admin", label: "Dashboard", key: "dashboard", icon: "bx-grid-alt" },
  { href: "/admin/products", label: "Produk", key: "products", icon: "bx-package" },
  { href: "/admin/media", label: "Media", key: "media", icon: "bx-image", disabled: true },
  { href: "/admin/testimonials", label: "Testimoni", key: "testimonials", icon: "bx-message-square-detail", disabled: true },
  { href: "/admin/faq", label: "FAQ", key: "faq", icon: "bx-help-circle", disabled: true },
  { href: "/admin/settings", label: "Pengaturan", key: "settings", icon: "bx-cog", disabled: true },
];
