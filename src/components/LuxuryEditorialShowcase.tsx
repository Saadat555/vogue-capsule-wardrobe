import React, { useState } from "react";
import {
  Crown,
  Eye,
  Layers,
  Feather,
  ArrowUpRight
} from "lucide-react";
import { LanguageCode } from "../i18n/translations";

interface LookbookPieceLocalized {
  slot: string;
  item: string;
  fabric: string;
  fabricOrigin: string;
  colorHex: string;
  colorName: string;
}

interface FabricHighlightLocalized {
  title: string;
  description: string;
  badge: string;
}

interface LookbookItemLocalized {
  id: string;
  gender: "men" | "women";
  vibe: string;
  season: string;
  title: string;
  subtitle: string;
  primaryTone: string;
  pieces: LookbookPieceLocalized[];
  fabricHighlights: FabricHighlightLocalized[];
  stylingNote: string;
}

const UI_TEXT: Record<LanguageCode, {
  badge: string;
  title: string;
  subtitle: string;
  piecesTitle: string;
  paletteDominant: string;
  fabricOriginLabel: string;
  fabricTypeLabel: string;
  proTipTitle: string;
  techLabel: string;
  applyBtn: string;
}> = {
  fa: {
    badge: "HIGH LUXURY LOOKBOOK 2026 • SARTORIAL EXCELLENCE",
    title: "ژورنال تعاملی استایل مدرن کلاسیک جهانی",
    subtitle: "کالبدشکافی لایه‌به‌لایه ست‌های فاخر، الیاف اصیل طبیعی و هارمونی‌های بصری بدون لوگو",
    piecesTitle: "کالبدشکافی ۴ قطعه این ست اشرافی:",
    paletteDominant: "پالت غالب:",
    fabricOriginLabel: "خاستگاه بافت:",
    fabricTypeLabel: "جنس الیاف:",
    proTipTitle: "نکته کلیدی استایلیست برای این ژورنال:",
    techLabel: "تکنولوژی الیاف و اصالت پارچه‌ها:",
    applyBtn: "اعمال و دریافت فرمول کامل این ست در بخش مشاوره",
  },
  en: {
    badge: "HIGH LUXURY LOOKBOOK 2026 • SARTORIAL EXCELLENCE",
    title: "Interactive Global Sartorial & Editorial Lookbook",
    subtitle: "Layer-by-layer architectural anatomy of noble natural fibers, unbranded aesthetics, and quiet luxury harmonies.",
    piecesTitle: "4-Piece Sartorial Breakdown of this Ensemble:",
    paletteDominant: "Dominant Palette:",
    fabricOriginLabel: "Mill Origin:",
    fabricTypeLabel: "Fiber Composition:",
    proTipTitle: "Stylist's Key Editorial Rule:",
    techLabel: "Fabric Craftsmanship & Mill Heritage:",
    applyBtn: "Apply & Receive Full Formula in Consultation Atelier",
  },
  fr: {
    badge: "LOOKBOOK HAUTE ÉLÉGANCE 2026 • EXCELLENCE SARTORIALE",
    title: "Lookbook Éditorial & Anatomie du Style Moderne Classique",
    subtitle: "Décomposition pièce par pièce des étoffes nobles, fibres pures et harmonies chromatiques sans logo.",
    piecesTitle: "Anatomie des 4 pièces de cette tenue d'exception :",
    paletteDominant: "Palette dominante :",
    fabricOriginLabel: "Provenance :",
    fabricTypeLabel: "Composition noble :",
    proTipTitle: "Règle d'or de notre styliste éditorial :",
    techLabel: "Excellence textile et filatures historiques :",
    applyBtn: "Appliquer et inspecter cette formule dans l'atelier",
  },
  it: {
    badge: "LOOKBOOK ALTA SARTORIA 2026 • ECCELLENZA SARTORIALE",
    title: "Lookbook Editoriale & Anatomia dello Stile Sartoriale",
    subtitle: "Analisi capo per capo delle fibre naturali nobili, manifattura artigianale e lusso discreto.",
    piecesTitle: "Anatomia dei 4 capi di questo completo di prestigio:",
    paletteDominant: "Tavolozza dominante:",
    fabricOriginLabel: "Origine lanificio:",
    fabricTypeLabel: "Composizione:",
    proTipTitle: "Regola fondamentale dello stylist:",
    techLabel: "Tecnologia delle fibre e tradizione sartoriale:",
    applyBtn: "Applica e ricevi la formula completa in consulenza",
  },
  ar: {
    badge: "كتالوج الفخامة الهادئة ۲۰۲۶ • خياطة راقية عالمية",
    title: "الكتالوج التحريري التفاعلي للأناقة الكلاسيكية العالمية",
    subtitle: "تشريح طبقات الأزياء الفاخرة، الألياف الطبيعية العضوية والتناغم البصري الراقي بلا شعارات تجارية.",
    piecesTitle: "تشريح القطع الأربع لهذه الإطلالة الملكية:",
    paletteDominant: "اللوحة اللونية السائدة:",
    fabricOriginLabel: "مصدر الغزل والنسيج:",
    fabricTypeLabel: "نوعية الألياف:",
    proTipTitle: "النصيحة الجوهرية لمستشار الأناقة لهذا الطقم:",
    techLabel: "أصالة النسيج ومعايير الجودة العالمية:",
    applyBtn: "تطبيق واستعراض تفاصيل هذا التنسيق في قسم الاستشارة",
  },
};

const LOOKBOOK_DATABASE: Record<LanguageCode, LookbookItemLocalized[]> = {
  en: [
    {
      id: "men-savile-row",
      gender: "men",
      vibe: "Quiet Power & Heritage",
      season: "Autumn & Winter",
      title: "The Mayfair Sartorial (Navy & Charcoal Slate)",
      subtitle: "Unmatched executive prestige for high-stakes boardrooms and state banquets.",
      primaryTone: "Deep Savile Navy + Crisp Poplin + Rich Cognac Leather",
      pieces: [
        {
          slot: "Outer Layer",
          item: "Super 120s Double-Breasted Navy Blazer",
          fabric: "100% Italian Superfine Merino Wool",
          fabricOrigin: "Lanificio Biella",
          colorHex: "#1A2433",
          colorName: "Deep Savile Navy",
        },
        {
          slot: "Base Top",
          item: "French Semi-Spread 2-Ply Oxford Shirt",
          fabric: "100% Combed Egyptian Giza Cotton",
          fabricOrigin: "Egyptian Giza Cotton",
          colorHex: "#FBFBFA",
          colorName: "Crisp Pure White",
        },
        {
          slot: "Tailored Bottom",
          item: "Flat-Front Slate Flannel Trousers with Sharp Crease",
          fabric: "Worsted Flannel (Wrinkle-Resistant)",
          fabricOrigin: "Worsted Flannel Mill",
          colorHex: "#545B63",
          colorName: "Slate Grey",
        },
        {
          slot: "Footwear",
          item: "Goodyear-Welted Cap-Toe Oxford / Dark Penny Loafers",
          fabric: "Full-Grain Italian Calfskin",
          fabricOrigin: "Full-Grain Italian Leather",
          colorHex: "#45281B",
          colorName: "Rich Oak Cognac",
        },
      ],
      fabricHighlights: [
        {
          title: "Vitale Super 120s Merino Wool",
          description: "Ultra-fine 17.5-micron fibers ensuring natural temperature regulation and day-long structural drape.",
          badge: "Pure Wool",
        },
        {
          title: "Egyptian Giza Cotton",
          description: "Extra-long staple fibers yielding a matte silk-like luster and unmatched structural durability.",
          badge: "Long Staple",
        },
      ],
      stylingNote: "Matte silver steel dress watch with a hand-burnished leather strap matching your footwear, paired with a linear Presidential fold pocket square.",
    },
    {
      id: "men-riviera-smart",
      gender: "men",
      vibe: "Effortless Old Money",
      season: "Spring & Summer",
      title: "The Riviera Leisure Edit (Camel & Ecru)",
      subtitle: "Sprezzatura sophistication for gallery openings, coastal escapes, and high-end weekend brunch.",
      primaryTone: "Camel Melange + Ivory Ecru + Warm Toffee Suede",
      pieces: [
        {
          slot: "Outer Layer",
          item: "Shawl Collar Ribbed Knit Cardigan / Unlined Jacket",
          fabric: "Spring Cashmere & Fine Cotton Blend",
          fabricOrigin: "Spring Cashmere Blend",
          colorHex: "#D8C7B0",
          colorName: "Sand Drift Melange",
        },
        {
          slot: "Base Top",
          item: "Textured Cotton Johnny-Collar Knit Polo",
          fabric: "Japanese Supima Mercerized Cotton",
          fabricOrigin: "Supima Cotton",
          colorHex: "#F5F2EC",
          colorName: "Ivory Cream",
        },
        {
          slot: "Tailored Bottom",
          item: "Single-Pleat Normandy Linen & Cotton Trousers",
          fabric: "Normandy French Flax Linen",
          fabricOrigin: "French Flax Linen",
          colorHex: "#323E37",
          colorName: "Muted Olive Sage",
        },
        {
          slot: "Footwear",
          item: "Hand-Stitched Water-Repellent Tuscan Suede Loafers",
          fabric: "Velvety Calf Suede",
          fabricOrigin: "Tuscan Suede",
          colorHex: "#996644",
          colorName: "Toffee Suede",
        },
      ],
      fabricHighlights: [
        {
          title: "Normandy French Linen",
          description: "Coolest summer drape that softens with age while retaining a noble fluid silhouette.",
          badge: "Eco-Linen",
        },
        {
          title: "Supple Tuscan Suede",
          description: "Molds seamlessly to the foot without socks, delivering exceptional comfort on yacht decks and marble walkways.",
          badge: "Hand-Crafted",
        },
      ],
      stylingNote: "Tortoiseshell acetate sunglasses with anti-reflective bronze lenses and a slim woven leather bracelet.",
    },
    {
      id: "women-parisian-chic",
      gender: "women",
      vibe: "Parisian Chic & Minimalist",
      season: "All Season",
      title: "The Saint-Germain Minimalist (Beige & Obsidian)",
      subtitle: "Understated poise, architectural lines, and effortless elegance.",
      primaryTone: "Ivory Cream + Obsidian Black + Brushed Matte Gold",
      pieces: [
        {
          slot: "Outer Layer",
          item: "Double-Breasted Classic Gabardine Trench Coat",
          fabric: "Water-Repellent English Cotton Gabardine",
          fabricOrigin: "English Cotton Gabardine",
          colorHex: "#C7B39B",
          colorName: "Classic Trench Beige",
        },
        {
          slot: "Base Top",
          item: "Pure Mulberry Silk Blouse / Fine Cashmere Knit",
          fabric: "100% Crepe de Chine Mulberry Silk",
          fabricOrigin: "Mulberry Silk",
          colorHex: "#FBF9F5",
          colorName: "Pearl Ivory",
        },
        {
          slot: "Tailored Bottom",
          item: "High-Waisted Wide-Leg Wool Crepe Trousers",
          fabric: "Fine Four-Season Wool Crepe",
          fabricOrigin: "Fine Wool Crepe",
          colorHex: "#1E1C1A",
          colorName: "Obsidian Charcoal",
        },
        {
          slot: "Footwear",
          item: "Pointed-Toe Slingback / French Box Calf Flats",
          fabric: "Smooth French Box Calf Leather",
          fabricOrigin: "French Box Calf",
          colorHex: "#1E1C1A",
          colorName: "Matte Black",
        },
      ],
      fabricHighlights: [
        {
          title: "Pure Mulberry Silk",
          description: "Naturally hypoallergenic and thermoregulating with an opulent matte sheen.",
          badge: "100% Silk",
        },
        {
          title: "Weatherproof Gabardine",
          description: "Dense diagonal twill weave shedding light rain while preserving razor-sharp lapels.",
          badge: "Weatherproof",
        },
      ],
      stylingNote: "A slim leather belt with a brushed gold buckle, structured leather tote, and micro hoop earrings.",
    },
    {
      id: "women-cashmere-luxe",
      gender: "women",
      vibe: "Pure Warmth & High Status",
      season: "Autumn & Winter",
      title: "The Milanese Cashmere Wrap (Camel & Espresso)",
      subtitle: "The pinnacle of tactile warmth, prestige, and quiet luxury.",
      primaryTone: "Golden Camel + Ivory Melange + Espresso Leather",
      pieces: [
        {
          slot: "Outer Layer",
          item: "Hand-Stitched Double-Face Wool & Cashmere Wrap Coat",
          fabric: "Double-Face Italian Cashmere Blend",
          fabricOrigin: "Double-Face Cashmere",
          colorHex: "#AF7C52",
          colorName: "Golden Camel",
        },
        {
          slot: "Base Top",
          item: "100% Mongolian Cashmere Ribbed Turtleneck Sweater",
          fabric: "Grade-A Mongolian Cashmere",
          fabricOrigin: "Mongolian Cashmere",
          colorHex: "#EDE6DA",
          colorName: "Oatmeal Melange",
        },
        {
          slot: "Tailored Bottom",
          item: "Straight-Cut Tailored Heavy Wool Flannel Trousers",
          fabric: "Worsted Heavy Flannel",
          fabricOrigin: "Worsted Flannel",
          colorHex: "#474C52",
          colorName: "Charcoal Slate",
        },
        {
          slot: "Footwear",
          item: "Full-Grain Leather Ankle Boots with Natural Wax Finish",
          fabric: "Full-Grain Italian Calfskin",
          fabricOrigin: "Vegetable-Tanned Leather",
          colorHex: "#302621",
          colorName: "Espresso Brown",
        },
      ],
      fabricHighlights: [
        {
          title: "Grade-A Mongolian Cashmere",
          description: "Eight times warmer than standard sheep wool with a feather-light touch.",
          badge: "Ultra-Fine",
        },
        {
          title: "Vegetable-Tanned Calfskin",
          description: "Develops a rich organic patina over decades of wear with zero synthetic coatings.",
          badge: "Patina Finish",
        },
      ],
      stylingNote: "An oversized cashmere scarf draped gracefully over shoulders paired with matching leather gloves.",
    },
  ],
  fa: [
    {
      id: "men-savile-row",
      gender: "men",
      vibe: "Quiet Power & Heritage",
      season: "پاییز و زمستان",
      title: "ژورنال نوی و زغالی کلاسیک (The Mayfair Sartorial)",
      subtitle: "استایل لوکس و باوقار برای جلسات رده‌بالا و مذاکرات رسمی",
      primaryTone: "سرمه‌ای عمیق + سفید کتان + چرم دست‌دوز قهوه‌ای",
      pieces: [
        {
          slot: "لایه رویی",
          item: "کت بلیزر شش‌دکمه سرمه‌ای سوپر ۱۲۰",
          fabric: "پشم مرینو ۱۰۰٪ ایتالیایی",
          fabricOrigin: "Lanificio Biella",
          colorHex: "#1A2433",
          colorName: "سرمه‌ای شیک (Deep Navy)",
        },
        {
          slot: "بالاتنه پایه",
          item: "پیراهن آکسفورد یقه پهن فرانسوی",
          fabric: "کتان مصری شانه شده",
          fabricOrigin: "Egyptian Giza Cotton",
          colorHex: "#FBFBFA",
          colorName: "سفید استخوانی (Pure Crisp)",
        },
        {
          slot: "پایین‌تنه",
          item: "شلوار فلانل طوسی راسته با خط اتوی تیز",
          fabric: "پشم فلانل سبک و ضدچروک",
          fabricOrigin: "Worsted Flannel",
          colorHex: "#545B63",
          colorName: "طوسی سنگی (Slate Grey)",
        },
        {
          slot: "پوشش پا",
          item: "کفش آکسفورد یا لوفر پنی تمام چرم",
          fabric: "چرم گوساله ناپا دباغی گیاهی",
          fabricOrigin: "Full-Grain Italian Leather",
          colorHex: "#45281B",
          colorName: "قهوه‌ای بلوطی (Rich Oak)",
        },
      ],
      fabricHighlights: [
        {
          title: "پشم مرینو ۱۲۰ ویتاله",
          description: "لطافت فوق‌العاده با تنفس‌پذیری طبیعی و حفظ فرم بدن در طول کل روز بدون چروک‌شدن.",
          badge: "Pure Wool",
        },
        {
          title: "کتان مصری گیزا",
          description: "الیاف بسیار بلند با درخشش ابریشم‌گون مات و دوام بی‌نظیر برای پیراهن رسمی.",
          badge: "Long Staple",
        },
      ],
      stylingNote: "ساعت مچی بند چرمی با قاب استیل نقره‌ای مات و دستمال جیبی تا شده به شکل خطی هماهنگ با لبه یقه.",
    },
    {
      id: "men-riviera-smart",
      gender: "men",
      vibe: "Effortless Old Money",
      season: "بهار و تابستان",
      title: "استایل اسمارت‌کژوال ریویرا و شتری (Quiet Riviera)",
      subtitle: "ترکیب اشرافی برای قرارهای کافه، گالری‌گردی و سفرهای لوکس",
      primaryTone: "کرم شتری + سفید شیری + چرم عسلی",
      pieces: [
        {
          slot: "لایه رویی",
          item: "ژاکت یا کاردیگان بافت یقه شال‌دار کرم",
          fabric: "ترکیب کتان و کشمیر بهاره",
          fabricOrigin: "Spring Cashmere Blend",
          colorHex: "#D8C7B0",
          colorName: "بژ شنی (Sand Drift)",
        },
        {
          slot: "بالاتنه پایه",
          item: "پلوشرت کتان بافت‌دار یقه بدون دکمه (Johnny Collar)",
          fabric: "کتان ژاپنی شسته‌شده",
          fabricOrigin: "Supima Cotton",
          colorHex: "#F5F2EC",
          colorName: "عاجی شیری (Ivory Cream)",
        },
        {
          slot: "پایین‌تنه",
          item: "شلوار پارچه‌ای پیلی‌دار لینن و کتان",
          fabric: "لینن مرغوب نورماندی",
          fabricOrigin: "French Flax Linen",
          colorHex: "#323E37",
          colorName: "سبز زیتونی باوقار (Muted Olive)",
        },
        {
          slot: "پوشش پا",
          item: "کفش لوفر جیر ضدآب دست‌دوز",
          fabric: "جیر نرم گوساله",
          fabricOrigin: "Tuscan Suede",
          colorHex: "#996644",
          colorName: "جیر تافی (Toffee Suede)",
        },
      ],
      fabricHighlights: [
        {
          title: "لینن بدون چروک فرانسوی",
          description: "خنک‌ترین بافت تابستانه با افتادگی لخت و شیک که به مرور زمان نرم‌تر می‌شود.",
          badge: "Eco-Linen",
        },
        {
          title: "جیر ایتالیایی لطیف",
          description: "انعطاف‌پذیری فوق‌العاده بدون نیاز به جوراب ضخیم، ایده‌آل برای لوفر تابستانی.",
          badge: "Hand-Crafted",
        },
      ],
      stylingNote: "عینک آفتابی با قاب کائوچویی پلنگی تیره و بند ساعت ناتو یا چرم طبیعی عسلی.",
    },
    {
      id: "women-parisian-chic",
      gender: "women",
      vibe: "Parisian Chic & Minimalist",
      season: "چهارفصل",
      title: "استایل پاریسی و مینیمال بژ (The Saint-Germain Minimalist)",
      subtitle: "جذابیت بی‌تکلف، خطوط تمیز و فرمول آراستگی بانوان باکلاس",
      primaryTone: "کرم شیری + مشکی زغالی + اکسسوری طلای مات",
      pieces: [
        {
          slot: "لایه رویی",
          item: "ترنچ‌کت کلاسیک دو ردیف دکمه گاباردین",
          fabric: "گاباردین کتان فشرده ضدآب",
          fabricOrigin: "English Cotton Gabardine",
          colorHex: "#C7B39B",
          colorName: "بژ کلاسیک (Classic Trench)",
        },
        {
          slot: "بالاتنه پایه",
          item: "شومیز ابریشم خالص با درخشش ملایم یا بافت یقه اسکی",
          fabric: "ابریشم ۱۰۰٪ کرپ دوشین",
          fabricOrigin: "Mulberry Silk",
          colorHex: "#FBF9F5",
          colorName: "سفید صدفی (Pearl White)",
        },
        {
          slot: "پایین‌تنه",
          item: "شلوار وایدلگ پارچه‌ای با ریزش لخت و فاق بلند",
          fabric: "کرپ پشم ظریف چهارفصل",
          fabricOrigin: "Fine Wool Crepe",
          colorHex: "#1E1C1A",
          colorName: "مشکی زغالی مات (Obsidian)",
        },
        {
          slot: "پوشش پا",
          item: "کفش اسلینگ‌بک یا کفش تخت چرمی نوک‌باریک",
          fabric: "چرم صاف گوساله فرانسوی",
          fabricOrigin: "French Box Calf",
          colorHex: "#1E1C1A",
          colorName: "مشکی مات (Matte Black)",
        },
      ],
      fabricHighlights: [
        {
          title: "ابریشم طبیعی شاه‌توت",
          description: "ضد حساسیت، تنظیم‌کننده طبیعی دمای بدن و درخشش فوق‌العاده نرم بدون حالت پلاستیکی.",
          badge: "100% Silk",
        },
        {
          title: "گاباردین ضدآب پایدار",
          description: "تراکم بالای بافت که در برابر باران سبک مقاوم است و فرم شق‌ورق خود را حفظ می‌کند.",
          badge: "Weatherproof",
        },
      ],
      stylingNote: "کمربند چرمی باریک با سگک طلایی مات، کیف ساختاریافته چرمی و گوشواره‌های حلقه‌ای بسیار ظریف.",
    },
    {
      id: "women-cashmere-luxe",
      gender: "women",
      vibe: "Pure Warmth & High Status",
      season: "پاییز و زمستان",
      title: "ژورنال شتری و کشمیر (Quiet Luxury Cashmere)",
      subtitle: "نهایت گرما، پرستیژ و لطافت با تناژهای گرم و صمیمی",
      primaryTone: "کرم شتری + طوسی عاجی + قهوه اسپرسو",
      pieces: [
        {
          slot: "لایه رویی",
          item: "پالتو بلند کمربنددار پشم و کشمیر دست‌دوز",
          fabric: "پشم کشمیر دولایه ایتالیایی",
          fabricOrigin: "Double-Face Cashmere",
          colorHex: "#AF7C52",
          colorName: "شتری گرم (Golden Camel)",
        },
        {
          slot: "بالاتنه پایه",
          item: "پلیور یقه اسکی کشمیر خالص با بافت دندانه‌موشی",
          fabric: "کشمیر درجه یک مغولی",
          fabricOrigin: "Mongolian Cashmere",
          colorHex: "#EDE6DA",
          colorName: "عاجی جو دوسر (Oatmeal)",
        },
        {
          slot: "پایین‌تنه",
          item: "شلوار راسته فلانل پشمی سنگین و گرم",
          fabric: "پشم فلانل مرغوب",
          fabricOrigin: "Worsted Flannel",
          colorHex: "#474C52",
          colorName: "طوسی زغالی (Slate)",
        },
        {
          slot: "پوشش پا",
          item: "نیم‌بوت چرم با واکس طبیعی و خطوط ساده",
          fabric: "چرم گاو دانه‌کامل با واکس طبیعی",
          fabricOrigin: "Vegetable-Tanned Leather",
          colorHex: "#302621",
          colorName: "اسپرسو تیره (Espresso)",
        },
      ],
      fabricHighlights: [
        {
          title: "کشمیر درجه یک مغولی",
          description: "۸ برابر گرم‌تر از پشم معمولی با وزنی پرمانند و نرمی که هرگز روی پوست خارش ایجاد نمی‌کند.",
          badge: "Ultra-Fine",
        },
        {
          title: "چرم دباغی گیاهی طبیعی",
          description: "با گذشت زمان پاتینای طبیعی و زیباتری پیدا می‌کند و بوی اصیل چرم لوکس می‌دهد.",
          badge: "Patina Finish",
        },
      ],
      stylingNote: "شال‌گردن بزرگ پشمی با بافت شل و رها روی شانه‌ها و دستکش چرم متناسب با کیف.",
    },
  ],
  fr: [] as any,
  it: [] as any,
  ar: [] as any,
};

// Fallbacks for fr, it, ar
LOOKBOOK_DATABASE.fr = LOOKBOOK_DATABASE.en;
LOOKBOOK_DATABASE.it = LOOKBOOK_DATABASE.en;
LOOKBOOK_DATABASE.ar = LOOKBOOK_DATABASE.fa;

export const LuxuryEditorialShowcase: React.FC<{
  gender: "men" | "women";
  lang?: LanguageCode;
  onApplyOutfit: (title: string) => void;
}> = ({ gender, lang = "en", onApplyOutfit }) => {
  const currentPool = LOOKBOOK_DATABASE[lang] || LOOKBOOK_DATABASE.en;
  const filteredPresets = currentPool.filter((p) => p.gender === gender);
  const [activePresetId, setActivePresetId] = useState<string>(filteredPresets[0]?.id || currentPool[0].id);

  // Sync if gender changes
  const activePreset =
    currentPool.find((p) => p.id === activePresetId && p.gender === gender) ||
    filteredPresets[0] ||
    currentPool[0];

  const t = UI_TEXT[lang] || UI_TEXT.en;
  const isRtl = lang === "fa" || lang === "ar";

  return (
    <section
      id="editorial-showcase-section"
      className="bg-gradient-to-b from-[#181614] to-[#100E0C] text-[#F3EFEA] rounded-3xl p-6 sm:p-9 border border-[#38332C] shadow-2xl space-y-8 relative overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Subtle Background Aesthetic Ornamentation */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge & Title */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 border-b border-[#2C2822] pb-6 relative z-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#2A241C] border border-[#C5A880]/40 text-[#E6CA9E] text-xs font-serif">
              ⚜
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] font-cinzel">
              {t.badge}
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Lookbook Switcher Tabs */}
        <div className="flex items-center gap-2 bg-[#221F1B] p-1.5 rounded-2xl border border-[#38332C] overflow-x-auto max-w-full">
          {filteredPresets.map((preset) => {
            const isSel = activePreset.id === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => setActivePresetId(preset.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isSel
                    ? "bg-[#C5A880] text-[#141210] shadow-md font-extrabold"
                    : "text-stone-300 hover:text-white"
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{preset.vibe} — {preset.season}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* Left / Top (7 cols): Flat-Lay Layer Breakdown with Swatches */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#E6CA9E] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#C5A880]" />
              <span>{t.piecesTitle}</span>
            </span>
            <span className="text-[11px] text-stone-400">
              {t.paletteDominant} <strong>{activePreset.primaryTone}</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {activePreset.pieces.map((piece, idx) => (
              <div
                key={idx}
                className="bg-[#201D19] border border-[#38332C] hover:border-[#C5A880]/50 p-4.5 rounded-2xl transition-all space-y-3 group"
              >
                {/* Slot & Color Indicator */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-[#2C2721] text-[#E6CA9E] border border-[#433B32]">
                    {piece.slot}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-stone-400">{piece.colorName}</span>
                    <div
                      className="w-4 h-4 rounded-full border border-white/20 shadow-xs"
                      style={{ backgroundColor: piece.colorHex }}
                      title={piece.colorName}
                    />
                  </div>
                </div>

                {/* Item Name */}
                <h4 className="font-bold text-sm text-white group-hover:text-[#E6CA9E] transition-colors leading-snug">
                  {piece.item}
                </h4>

                {/* Fabric & Origin Badge */}
                <div className="text-[11px] text-stone-300 bg-[#171513] p-2.5 rounded-xl border border-white/5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400 font-medium">{t.fabricTypeLabel}</span>
                    <span className="text-amber-200 font-bold">{piece.fabric}</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-stone-500">
                    <span>{t.fabricOriginLabel}</span>
                    <span className="font-cinzel text-stone-400">{piece.fabricOrigin}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Golden Styling Rule for this Look */}
          <div className={`bg-[#211E19] border border-[#524534] p-4.5 rounded-2xl ${isRtl ? "text-right" : "text-left"} space-y-1.5`}>
            <span className="text-xs font-bold text-[#E6CA9E] flex items-center gap-1.5">
              <Crown className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{t.proTipTitle}</span>
            </span>
            <p className="text-xs text-stone-300 leading-relaxed font-medium">
              {activePreset.stylingNote}
            </p>
          </div>
        </div>

        {/* Right (5 cols): Fabric Quality Badges & Editorial Look Card */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4 bg-[#201D19] border border-[#3A3329] p-6 rounded-3xl">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#332C24] pb-3">
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A880] font-cinzel">
                  {activePreset.vibe}
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  {activePreset.title}
                </h3>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#322A20] text-[#E6CA9E] border border-[#594833]">
                {activePreset.season}
              </span>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              {activePreset.subtitle}
            </p>

            {/* Fabric Master Badges */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-stone-400 block">
                {t.techLabel}
              </span>

              {activePreset.fabricHighlights.map((fab, fIdx) => (
                <div
                  key={fIdx}
                  className="bg-[#171513] border border-[#2E2821] p-3.5 rounded-2xl space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <Feather className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{fab.title}</span>
                    </span>
                    <span className="text-[10px] font-cinzel tracking-wider px-2 py-0.5 rounded bg-[#2B2319] text-[#E6CA9E] border border-[#483A28]">
                      {fab.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-400 leading-relaxed">
                    {fab.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button: Apply this exact outfit */}
          <button
            onClick={() => onApplyOutfit(activePreset.title)}
            className="w-full bg-gradient-to-r from-[#C5A880] to-[#E3CAA5] hover:from-[#B8986D] hover:to-[#D4B991] text-[#141210] font-bold text-xs py-4 px-6 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-4"
          >
            <span>{t.applyBtn}</span>
            <ArrowUpRight className="w-4 h-4 rotate-45 text-[#141210]" />
          </button>

        </div>

      </div>

    </section>
  );
};
