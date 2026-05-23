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
    price: "عند الطلب",
    images: ["/products/1.jpeg"],

    description: "لقطع الخضار والفواكه بسهولة",
  },
  {
    id: 2,
    title: "Smart Watch Elite",
    titleAr:"موسع الانف المغناطيسي",
    price: "عند الطلب",
    images: ["/products/2.jpeg"],
    description: " يساعد على التنفس والنوم الهادئ",
  },
  {
    id: 3,
    title: "Luxury Perfume",
    titleAr: "عطر فاخر",
    price: "عند الطلب",
    images: ["/products/3.jpeg"],
    description: "عطر فاخر برائحة مميزة تدوم طويلاً",
  },
  {
    id: 4,
    title: "Premium Sunglasses",
    titleAr: "نظارات شمسية فاخرة",
    price: "عند الطلب",
    images: ["/products/4.jpeg"],
    description: "نظارات شمسية بتصميم عصري وحماية UV400",
  },
  {
    id: 5,
    title: "Leather Wallet",
    titleAr: "قطاعة خضرات",
    price: "عند الطلب",
    images: ["/products/5.jpeg"],
    description: "لقطع الخضار والفواكه بسهولة",
  },
  {
    id: 6,
    title: "Phone Case Premium",
    titleAr: "كفر هاتف بريميوم",
    price: "عند الطلب",
    images: ["/products/7.jpeg"],
    description: "كفر حماية فاخر لجميع أنواع الهواتف",
  },
  {
    id: 7,
    title: "Travel Backpack",
    titleAr: "حقيبة ظهر للسفر",
    price: "عند الطلب",
    images: ["/products/6.png","/products/8.jpeg"],
    description: "حقيبة ظهر عملية بتصميم عصري للسفر والعمل",
  },
  {
    id: 8,
    title: "Bluetooth Speaker",
    titleAr: "سبيكر بلوتوث",
    price: "عند الطلب",
    images: ["/products/6.png","/products/bluetooth-speaker.jpg"],
    description: "سبيكر بلوتوث محمول بصوت قوي ومقاوم للماء",
  },
  {
    id: 9,
    title: "LED Desk Lamp",
    titleAr: "مصباح مكتب LED",
    price: "عند الطلب",
    images: ["/products/6.png","/products/led-lamp.jpg"],
    description: "مصباح مكتب LED بتصميم عصري وإضاءة قابلة للتعديل",
  },
]

export const WHATSAPP_NUMBER = "00963988598523"

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
