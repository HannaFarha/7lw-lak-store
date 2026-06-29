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
    title: "Vegetable and Fruit Slicer",
    titleAr: "قطاعة الخضار والفواكه",
    price: "السعر عند الطلب",
    images: ["","/products/1.jpeg"],

    description: "لقطع الخضار والفواكه بسهولة",
  },
  {
    id: 2,
    title: "Magnetic Nose Dilator",
    titleAr:"موسع الانف المغناطيسي",
    price: "السعر عند الطلب",
    images: ["","/products/2.jpeg"],
    description: " يساعد على التنفس والنوم الهادئ",
  },
  {
    id: 3,
    title: "Men's Shoulder Bag",
    titleAr: "حقيبة الكتف الرجالية ",
    price: "السعر عند الطلب",
    images: ["","/products/3.jpeg"],
    description: "حقيبة كتف بحجم مثالي ومظهر مميز وامان لاغراضك",
  },
  {
    id: 4,
    title: "Magnetic Mesh",
    titleAr: "الشبك المغناطيسي",
    price: "السعر عند الطلب",
    images: ["","/products/4.jpeg"],
    description: "نظارات شمسية بتصميم عصري وحماية UV400",
  },
  {
    id: 5,
    title: "The Portable Chair",
    titleAr: "الكرسي المحمول",
    price: "السعر عند الطلب",
    images: ["","/products/5.jpeg"],
    description: "كرسي محمول بحجم صغير للاستعمال بأماكن متعددة",
  },
  {
    id: 6,
    title: "Vegetable Grating and Slicing Machine",
    titleAr: "مكنة برش وتقطيع الخضار ",
    price: "السعر عند الطلب",
    images: ["","/products/8.jpeg"],
    description: "مكنة لبرش وتقطيع الخضار بسهولة ",
  },
  {
    id: 7,
    title: "Drinking Water Filter",
    titleAr: "مصفات ماء الشرب",
    price: "السعر عند الطلب",
    images: ["","/products/7.jpeg"],
    description: "لتصفية ماء الشرب من كل الرواسب الضارة",
  },
  {
    id: 8,
    title: "Plate covers",
    titleAr: "اغطية الاطباق ",
    price: "السعر عند الطلب",
    images: ["","/products/9.jpeg"],
    description: "اغطية الاطباق المرنة والعملية للحفاظ على الاطعمة",
  },
  {
    id: 9,
    title: "Tic-Tac-Toe",
    titleAr: "لعبة تك تاك تو ",
    price: "السعر عند الطلب",
    images: ["","/products/10.jpeg"],
    description: "لعبة كلاسيكية تناسب كل الاعمار",
  },
]
{/* /products/6.png */}
export const WHATSAPP_NUMBER = "+963988598523"

export function getWhatsAppLink(product?: Product): string {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`
  if (product) {
    const message = encodeURIComponent(
      `مرحباً، أريد الاستفسار عن المنتج: ${product.titleAr} - ${product.title}`
    )
    return `${baseUrl}?text=${message}`
  }
  return baseUrl
}
