import React, { useState } from "react";
import {
  ShoppingBag,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Check,
  Heart,
  Tag
} from "lucide-react";
import { LanguageCode } from "../i18n/translations";

interface LuxuryAffiliateShopCuratorProps {
  gender: "men" | "women";
  lang: LanguageCode;
}

export const LuxuryAffiliateShopCurator: React.FC<LuxuryAffiliateShopCuratorProps> = ({
  gender,
  lang,
}) => {
  const [savedItems, setSavedItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "coats" | "umbrellas" | "perfumes" | "knitwear">("all");

  const isRtl = lang === "fa" || lang === "ar";

  const CURATED_PRODUCTS = [
    {
      id: "loro-piana-camel-coat",
      category: "coats",
      badge: lang === "fa" ? "امضای استایل ۲۰۲۶" : "2026 ICONIC ESSENTIAL",
      title: lang === "fa" ? "پالتو کشمیر ۱۰۰٪ شتری Loro Piana" : "Pure Italian Cashmere Camel Overcoat",
      brand: "Loro Piana Atelier",
      price: "$2,850",
      commissionNote: lang === "fa" ? "تضمین اصالت پارچه و الیاف طبیعی" : "100% Pure Virgin Cashmere Guarantee",
      imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=700&q=80",
      description:
        lang === "fa"
          ? "پالتو دست‌دوز با دکمه‌های درخشان صدفی و شاخی، برش راسته ایتالیایی با گرمای بی‌وزن."
          : "Hand-finished tailored silhouette with mother-of-pearl buttons and weightless natural thermal insulation.",
      affiliateUrl: "https://saadat555.github.io/vogue-capsule-wardrobe",
    },
    {
      id: "fox-umbrella-oak",
      category: "umbrellas",
      badge: lang === "fa" ? "مخصوص روزهای بارانی" : "RAINY DAY LUXURY",
      title: lang === "fa" ? "چتر چوبی دست‌ساز بلوط (Fox Umbrellas Style)" : "Artisanal Handcrafted Oak Wood Umbrella",
      brand: "Savile Row London Heritage",
      price: "$420",
      commissionNote: lang === "fa" ? "پارچه آب‌گریز ضدباد با دسته چوب طبیعی" : "Waterproof Silk-Touch Canopy with Solid Oak Handle",
      imageUrl: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=700&q=80",
      description:
        lang === "fa"
          ? "شاهکار بارانی با دسته تراشیده شده از چوب بلوط جنگلی، مکمل استایل‌های پاییز و زمستان."
          : "Hand-carved forest oak handle with high-tensile steel ribs, designed to withstand rainstorms in style.",
      affiliateUrl: "https://saadat555.github.io/vogue-capsule-wardrobe",
    },
    {
      id: "tom-ford-oud-wood",
      category: "perfumes",
      badge: lang === "fa" ? "امضای بویایی نیش" : "NICHE SIGNATURE SCENT",
      title: lang === "fa" ? "عطر تام فورد عود وود (Tom Ford Oud Wood)" : "Tom Ford Oud Wood Private Blend EDP",
      brand: "Tom Ford Private Blend",
      price: "$395",
      commissionNote: lang === "fa" ? "پخش بوی اشرافی چوبی و هل دودی" : "Smoky Rare Oud, Sandalwood & Amber Notes",
      imageUrl: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=80",
      description:
        lang === "fa"
          ? "عطر افسانه‌ای با خط بوی چوب صندل، عود و کهربا که با پالتوهای پشمی و چتر چوبی هارمونی بی‌نظیر می‌سازد."
          : "The quintessential quiet luxury fragrance balancing exotic rosewood, cardamom, and sensual amber.",
      affiliateUrl: "https://saadat555.github.io/vogue-capsule-wardrobe",
    },
    {
      id: "silk-chemise-shirt",
      category: "knitwear",
      badge: lang === "fa" ? "لایه شومیز زیرین" : "SILK FOUNDATION",
      title: lang === "fa" ? "شومیز ابریشم مالبری عاجی با دکمه صدفی" : "Ivory Mulberry Silk Chemise Blouse",
      brand: "Atelier Haute Soie",
      price: "$480",
      commissionNote: lang === "fa" ? "۱۰۰٪ ابریشم طبیعی با درخشش ملایم" : "Grade 6A Mulberry Silk with Pearl Buttons",
      imageUrl: "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?auto=format&fit=crop&w=700&q=80",
      description:
        lang === "fa"
          ? "شومیز لوکس برای لایه‌بندی زیر پالتوهای کشمیر که یقه و سرآستین‌های آن جلوه‌ای شاهانه به استایل می‌بخشد."
          : "Designed for seamless layering beneath double-breasted overcoats with luminous collar definition.",
      affiliateUrl: "https://saadat555.github.io/vogue-capsule-wardrobe",
    },
  ];

  const filtered = selectedCategory === "all"
    ? CURATED_PRODUCTS
    : CURATED_PRODUCTS.filter((p) => p.category === selectedCategory);

  const toggleWishlist = (id: string) => {
    if (savedItems.includes(id)) {
      setSavedItems(savedItems.filter((i) => i !== id));
    } else {
      setSavedItems([...savedItems, id]);
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#171411] to-[#0F0D0B] rounded-3xl p-6 sm:p-9 border border-[#3E352B] shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2D261E] pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 bg-[#272018] text-[#E6CA9E] border border-[#50402E] px-3.5 py-1 rounded-full text-xs font-bold font-cinzel">
            <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{lang === "fa" ? "ملزومات منتخب و اصیل استایل (Shop The Curated Look)" : "CURATED SARTORIAL ESSENTIALS"}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {lang === "fa"
              ? "خرید مستقیم قطعات کلیدی کپسول و اکسسوری‌های اصیل"
              : "Shop the Quiet Luxury Essentials & Artisan Pieces"}
          </h2>
          <p className="text-xs sm:text-sm text-stone-300">
            {lang === "fa"
              ? "مجموعه‌ای منتخب از پالتوهای کشمیر ایتالیایی، چترهای کلاسیک چوبی و عطرهای نیش دست‌چین شده."
              : "Direct acquisition of pure cashmere overcoats, Fox-style wooden umbrellas, and niche perfumes."}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {(
            [
              { id: "all", label: lang === "fa" ? "همه" : "All" },
              { id: "coats", label: lang === "fa" ? "پالتو و بارانی" : "Overcoats" },
              { id: "umbrellas", label: lang === "fa" ? "چتر چوبی" : "Umbrellas" },
              { id: "perfumes", label: lang === "fa" ? "عطرهای نیش" : "Fragrances" },
            ] as const
          ).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? "bg-[#C5A880] text-[#141210] shadow-sm font-extrabold"
                  : "bg-[#1E1914] text-stone-300 hover:bg-[#2A231C] border border-[#3A3025]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((product) => {
          const isSaved = savedItems.includes(product.id);
          return (
            <div
              key={product.id}
              className="bg-[#141210] rounded-2xl border border-[#322A21] hover:border-[#C5A880]/60 transition-all p-4 flex flex-col justify-between group shadow-lg"
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-3 bg-[#0A0908]">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2 left-2 bg-[#1A1612]/90 backdrop-blur-xs text-[#E6CA9E] border border-[#524230] text-[9px] font-bold px-2 py-0.5 rounded-md">
                  {product.badge}
                </span>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 backdrop-blur-xs flex items-center justify-center text-stone-300 hover:text-rose-400 transition-colors cursor-pointer"
                >
                  <Heart className={`w-3.5 h-3.5 ${isSaved ? "fill-rose-500 text-rose-500" : ""}`} />
                </button>
              </div>

              {/* Product Info */}
              <div className="space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] text-[#C5A880] font-cinzel font-bold block">
                      {product.brand}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#E6CA9E]">
                      {product.price}
                    </span>
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm text-white mt-0.5 line-clamp-2 leading-snug">
                    {product.title}
                  </h3>
                  <p className="text-[11px] text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#262019] mt-3 space-y-2">
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400">
                    <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">{product.commissionNote}</span>
                  </div>

                  <a
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#272018] hover:bg-[#C5A880] text-[#E6CA9E] hover:text-[#141210] border border-[#52412F] hover:border-[#C5A880] text-xs font-bold py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <span>{lang === "fa" ? "مشاهده جزئیات و خرید" : "Acquire Piece"}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
