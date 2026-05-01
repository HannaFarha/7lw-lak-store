"use client";

import { useState, useEffect } from "react";

export default function TopSlider() {
  // الجمل المأخوذة من وصف المتجر الخاص بك
  const phrases = [
    "🛍️ منتجات متنوعة وتريند تلبي كافة احتياجاتك",
    "✅ بضاعة مستوردة ومحلية – جودة مضمونة 100%",
    "🏭 أسعار جملة ومفرق.. من المصنع إليكم مباشرة",
    "🚚 شحن وتوصيل سريع لكافة المحافظات السورية"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // إعداد المؤقت ليغير الجملة كل 3.5 ثوانٍ
    const interval = setInterval(() => {
      // 1. إخفاء النص الحالي
      setIsVisible(false);
      
      // 2. الانتظار نصف ثانية (مدة تأثير الإخفاء) ثم تغيير النص وإظهاره
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsVisible(true);
      }, 500);

    }, 3500);

    // تنظيف المؤقت لتجنب مشاكل الذاكرة
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    // الشريط العلوي (يمكنك تغيير الألوان لتناسب تصميمك)
    <div className="w-full bg-gray-950 border-b border-gray-800 text-center flex justify-center items-center h-10 overflow-hidden" dir="rtl">
      <p
        // استخدام Tailwind لعمل تأثير حركي ناعم للشفافية
        className={`text-sm md:text-base font-bold text-yellow-500 transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {phrases[currentIndex]}
      </p>
    </div>
  );
}