import { createWhatsAppLink, ORDER_LINKS } from "@/lib/orderLinks";

export function createOrderMessage(source, text) {
  return createWhatsAppLink(`[${source}] ${text}`);
}

export function getMarketplaceHelperText() {
  return "Bisa checkout mandiri via Shopee atau TikTok Shop, tetapi WhatsApp tetap jalur tercepat untuk custom dan order mendesak.";
}

export function getMarketplaceLinks() {
  return [
    { label: "Shopee", href: ORDER_LINKS.shopee, icon: "bx-store-alt" },
    { label: "TikTok Shop", href: ORDER_LINKS.tiktokShop, icon: "bxl-tiktok" },
  ];
}
