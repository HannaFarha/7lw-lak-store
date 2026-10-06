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
    price: "السعر 1360 ل.س",
    images: ["","/products/1.jpeg"],

    description: "لقطع الخضار والفواكه بسهولة",
  },
  {
    id: 2,
    title: "Magnetic Nose Dilator",
    titleAr:"موسع الانف المغناطيسي",
    price: "السعر 1250 ل.س",
    images: ["","/products/2.jpeg"],
    description: " يساعد على التنفس والنوم الهادئ",
  },
  {
    id: 3,
    title: "Men's Shoulder Bag",
    titleAr: "حقيبة الكتف الرجالية ",
    price: "السعر 1150 ل.س",
    images: ["","/products/3.jpeg"],
    description: "حقيبة كتف بحجم مثالي ومظهر مميز وامان لاغراضك",
  },
  {
    id: 4,
    title: "Magnetic Mesh",
    titleAr: "الشبك المغناطيسي",
    price: "السعر 8,5$",
    images: ["","/products/4.jpeg"],
    description: "نظارات شمسية بتصميم عصري وحماية UV400",
  },
  {
    id: 5,
    title: "The Portable Chair",
    titleAr: "الكرسي المحمول",
    price: "السعر 1000 ل.س",
    images: ["","/products/5.jpeg"],
    description: "كرسي محمول بحجم صغير للاستعمال بأماكن متعددة",
  },
  {
    id: 6,
    title: "Vegetable Grating and Slicing Machine",
    titleAr: "مكنة برش وتقطيع الخضار ",
    price: "السعر 9$",
    images: ["","/products/8.jpeg"],
    description: "مكنة لبرش وتقطيع الخضار بسهولة ",
  },
  {
    id: 7,
    title: "Drinking Water Filter",
    titleAr: "مصفات ماء الشرب",
    price: "السعر 250 ل.س",
    images: ["","/products/7.jpeg"],
    description: "لتصفية ماء الشرب من كل الرواسب الضارة",
  },
  {
    id: 8,
    title: "Plate covers",
    titleAr: "اغطية الاطباق ",
    price: "السعر 250 ل.س",
    images: ["","/products/9.jpeg"],
    description: "اغطية الاطباق المرنة والعملية للحفاظ على الاطعمة",
  },
  {
    id: 9,
    title: "Tic-Tac-Toe",
    titleAr: "لعبة تك تاك تو ",
    price: "السعر 400 ل.س",
    images: ["","/products/10.jpeg"],
    description: "لعبة كلاسيكية تناسب كل الاعمار",
  },
  {
    id: 10,
    title: "Portable Camping Hammock",
    titleAr: "أرجوحة شبكية قماشية للرحلات والتخييم",
    price: "السعر 12$",
    images: ["","/products/11.jpeg"],
    description: "أرجوحة قماشية مريحة وقابلة للطي مع حقيبة حمل مثالية للحدائق والتخييم في الهواء الطلق"
  },{
    id: 11,
    title: "2 in 1 Mini Bag Sealer and Cutter",
    titleAr: "جهاز ختم وقص الأكياس 2 في 1 حراري قابلة للشحن",
    price: "السعر 5,3$",
    images: ["","/products/12.jpeg"],
    description: "جهاز لحام وقص الأكياس البلاستيكية صغير الحجم يعمل بالشحن لحفظ الأطعمة طازجة"
  },{
    id: 12,
    title: "Folding Camping Chair",
    titleAr: "كرسي رحلات وتخييم قابل للطي",
    price: "السعر 10$",
    images: ["","/products/13.jpeg"],
    description: "كرسي رحلات خارجي قابل للطي ومزود بحامل كوب وحقيبة حمل سهلة التنقل"
  },
  {
    id: 13,
    title: "Inflatable Lounge Chair with Footrest",
    titleAr: "كرسي نفخ مريح مع مسند للأقدام",
    price: "السعر 17$",
    images: ["","/products/14.jpeg"],
    description: "طقم كنب ونفخ مريح للاسترخاء داخل المنزل أو في الاستراحة والمقيل"
  },{
    id: 14,
    title: "Sneaker Washing Machine Laundry Bag",
    titleAr: "حقيبة غسيل الأحذية بالغسالة",
    price: "السعر 600 ل.س",
    images: ["","/products/15.jpeg"],
    description: "كيس وحقيبة حماية الأحذية الرياضية عند غسلها داخل الغسالة لحمايتها وتنظيفها بفعالية"
  },{
    id: 15,
    title: "Dental Floss Picks",
    titleAr: "خيط أسنان مائي ومقابض خيط تنظيف الأسنان",
    price: "السعر 150 ل.س 50 قطعة ",
    images: ["","/products/16.jpeg"],
    description: "عصي وخيط تنظيف ما بين الأسنان للعناية بالصحة والتخلص من بقايا الطعام بسهولة"
  },{
    id: 16,
    title: "Potato Slicer & French Fry Cutter",
    titleAr: "قطاعة بطاطس استيل",
    price: "السعر 10$",
    images: ["","/products/17.jpeg"],
    description: "قطاعة بطاطس ومكعبات خضار مصنوعة من الاستانلس ستيل لتقطيع سريع وسهل"
  },{
    id: 17,
    title: "Foldable Phone & Tablet Stand",
    titleAr: "حامل هاتف وتابلت قابل للطي",
    price: "السعر 300 ل.س ",
    images: ["","/products/18.jpeg"],
    description: "قاعدة وحامل مكتبي قابل للطي يناسب الهواتف والأجهزة اللوحية"
  },{
    id: 18,
    title: "Handheld Rechargeable Mini Fan with LED",
    titleAr: "مروحة يد محمولة بشاشة LED قابلة للشحن",
    price: "السعر 4,7$",
    images: ["","/products/19.jpeg"],
    description: "مروحة يد صغيرة محمولة وشاحنة USB مع شاشة ديجيتال لعرض مستوى الشحن"
  },{
    id: 19,
    title: "Disposable Paper Cup Ash Trays",
    titleAr: "طفايات سجائر ورقية للاستخدام مرة واحدة",
    price: "السعر  2,5 $ 25 قطعة",
    images: ["","/products/20.jpeg"],
    description: "أغطية وطفايات ورقية مبتكرة ومقاومة للاستخدام السريع والمرة الواحدة"
  },{
    id: 20,
    title: "Teeth Whitening Strips",
    titleAr: "لصقات تبييض الأسنان",
    price: "السعر 600 ل.س",
    images: ["","/products/21.jpeg"],
    description: "شرائط تبييض الأسنان الآمنة على المينا لنتائج سريعة وابتسامة ناصعة"
  },
  {
    id: 21,
    title: "Disposable Toilet Seat Covers",
    titleAr: "أغطية مقعد التواليت للاستعمال مرة واحدة",
    price: "السعر عند الطلب",
    images: ["","/products/22.jpeg"],
    description: "أغطية مقعد المرحاض البلاستيكية للحماية والنظافة الشخصية أثناء السفر والمرافق العامة"
  },{
    id: 22,
    title: "Silicone Earplugs with Case",
    titleAr: "سدادات أذن سيليكون مع علبة حفظ",
    price: "السعر 150 ل.س 10 قطعة",
    images: ["","/products/23.jpeg"],
    description: "سدادات أذن مريحة لتقليل الضوضاء والحماية أثناء النوم أو السباحة"
  },{
    id: 23,
    title: "Portable Pop-up Mosquito Net Tent",
    titleAr: "خيمة ناموسية قابلة للطي للحدائق والرحلات",
    price: "السعر 10,5 $",
    images: ["","/products/24.jpeg"],
    description: "شبكة ناموسية محمولة وسريعة الفتح للحماية من الحشرات أثناء التخييم والرحلات"
  },{
    id: 24,
    title: "Car Windshield Sunshade Umbrella",
    titleAr: "مظلة شمسية للسيارة على شكل شمسية مطوية",
    price: "السعر 7$",
    images: ["","/products/25.jpeg"],
    description: "مظلة زجاج أمامي للسيارة قابلة للطي لحماية مقصورة السيارة من الحرارة وأشعة الشمس"
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
