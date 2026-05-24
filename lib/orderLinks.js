const whatsappNumber = "6289677427887";

export const ORDER_LINKS = {
  whatsappNumberDisplay: "089677427887",
  whatsappBase: `https://wa.me/${whatsappNumber}`,
  shopee: "https://shopee.co.id/blueshope",
  tiktokShop: "https://www.tiktok.com/@zakado.id",
};

export function createWhatsAppLink(message) {
  return `${ORDER_LINKS.whatsappBase}?text=${encodeURIComponent(message)}`;
}
