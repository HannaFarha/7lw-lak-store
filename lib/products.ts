export interface Product {
  id: number
  title: string
  titleAr: string
  price: string
  images: string[]
  
  description: string
}

export const products: Product[] = [
  {
    
    id: 1,
    title: "Wireless Earbuds Pro",
    titleAr: "قطاعة الخضار والفواكه",
    price: "45,000 SYP",
    images: ["/products/6.png","/products/1.jpeg"],

    description: "لقطع الخضار والفواكه بسهولة",
  },
  {
    id: 2,
    title: "Smart Watch Elite",
    titleAr: "ساعة ذكية إيليت",
    price: "85,000 SYP",
    images: ["/products/6.png","/products/smart-watch.jpg"],
    description: "ساعة ذكية مع شاشة AMOLED ومقاومة للماء",
  },
  {
    id: 3,
    title: "Luxury Perfume",
    titleAr: "عطر فاخر",
    price: "65,000 SYP",
    images: ["/products/6.png","/products/perfume.jpg"],
    description: "عطر فاخر برائحة مميزة تدوم طويلاً",
  },
  {
    id: 4,
    title: "Premium Sunglasses",
    titleAr: "نظارات شمسية فاخرة",
    price: "35,000 SYP",
    images: ["/products/6.png","/products/sunglasses.jpg"],
    description: "نظارات شمسية بتصميم عصري وحماية UV400",
  },
  {
    id: 5,
    title: "Leather Wallet",
    titleAr: "قطاعة خضرات",
    price: "100,000 SYP",
    images: ["/products/6.png","/products/leather-wallet.jpg"],
    description: "لقطع الخضار والفواكه بسهولة",
  },
  {
    id: 6,
    title: "Phone Case Premium",
    titleAr: "كفر هاتف بريميوم",
    price: "15,000 SYP",
    images: ["/products/6.png","/products/phone-case.jpg"],
    description: "كفر حماية فاخر لجميع أنواع الهواتف",
  },
  {
    id: 7,
    title: "Travel Backpack",
    titleAr: "حقيبة ظهر للسفر",
    price: "55,000 SYP",
    images: ["/products/6.png","/products/backpack.jpg"],
    description: "حقيبة ظهر عملية بتصميم عصري للسفر والعمل",
  },
  {
    id: 8,
    title: "Bluetooth Speaker",
    titleAr: "سبيكر بلوتوث",
    price: "40,000 SYP",
    images: ["/products/6.png","/products/bluetooth-speaker.jpg"],
    description: "سبيكر بلوتوث محمول بصوت قوي ومقاوم للماء",
  },
  {
    id: 9,
    title: "LED Desk Lamp",
    titleAr: "مصباح مكتب LED",
    price: "22,000 SYP",
    images: ["/products/6.png","/products/led-lamp.jpg"],
    description: "مصباح مكتب LED بتصميم عصري وإضاءة قابلة للتعديل",
  },
]

export const WHATSAPP_NUMBER = "963956305898"

export function getWhatsAppLink(product?: Product): string {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`
  if (product) {
    const message = encodeURIComponent(
      `مرحباً، أريد الاستفسار عن المنتج: ${product.titleAr} - ${product.price}`
    )
    return `${baseUrl}?text=${message}`
  }
  return baseUrl
}
