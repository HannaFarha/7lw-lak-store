"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { getWhatsAppLink, products } from "@/lib/products"

export function ProfileInfo() {
  const [isFollowing, setIsFollowing] = useState(false)

  return (
    <section className="px-4 pb-2" dir="rtl">
      {/* Top row: Avatar + Stats */}
      <div className="flex items-center gap-5">
    
        {/* Profile Picture */}
        <div className="shrink-0">
          <div className="size-20 rounded-full p-[2.5px] bg-gradient-to-br from-gold-light via-gold to-gold-dark">
            <div className="size-full rounded-full bg-background p-[6px]">
              <div className="size-full rounded-full overflow-hidden bg-surface flex items-center justify-center"><img src="/7lw-lak-logo.jpeg" height={260}  alt="logo" />
                
                
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-1 justify-around text-center">
          <div>
            <p className="text-lg font-bold text-foreground">{products.length}</p>
            <p className="text-xs text-muted-foreground">{"منشورات"}</p>
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">12Mio</p>
            <p className="text-xs text-muted-foreground">{"متابعين"}</p>
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">48</p>
            <p className="text-xs text-muted-foreground">{"متابعة"}</p>
          </div>
        </div>
      </div>

      {/* Name */}
      <p className="mt-3 text-sm font-semibold text-foreground">
        {"حلولك - منتجات متنوعة في سوريا"}
      </p>

      {/* Bio */}
      <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
        <p>{"🛍️ منتجات متنوعة وتريند"}</p>
        <p>{"✅ مستوردة – جودة مضمونة"}</p>
        <p>{"🏭 من المصنع إليكم مباشرة"}</p>
        <p>{"📦 جملة & مفرق"}</p>
        <p>{"🚚 توصيل سريع لكافة المحافظات"}</p>
        <p>{"👇 للطلب والاستفسار تواصل معنا"}</p>
      </div>

      {/* WhatsApp Link */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 inline-flex items-center gap-1 text-sm text-insta-blue hover:underline"
      >
        <span dir="ltr">wa.me/963956305898</span>
        <ExternalLink className="size-3" />
      </a>

      {/* Action Buttons */}
      <div className="mt-3 flex gap-2" dir="ltr">
        <button
          onClick={() => setIsFollowing(!isFollowing)}
          className={`flex-1 rounded-lg py-2 text-sm font-semibold transition-colors ${
            isFollowing
              ? "bg-secondary text-secondary-foreground"
              : "bg-insta-blue text-foreground"
          }`}
        >
          {isFollowing ? "مو هون ع الانستا " : "هل تابعتنا ؟؟"}
        </button>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-lg py-2 text-sm font-semibold bg-secondary text-secondary-foreground text-center"
        >
          {"مراسلة"}
        </a>
      </div>
    </section>
  )
}
