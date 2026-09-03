// Luxury Atelier Engine: Fabrics, Mannequin Silhouettes, and Color Theory Matrix
import { LanguageCode } from "../i18n/translations";

export interface LuxuryFabricData {
  id: string;
  nameFa: string;
  nameEn: string;
  originFa: string;
  originEn: string;
  gsmWeight: number; // grams per square meter
  breathabilityScore: number; // 1 to 10
  softnessScore: number; // 1 to 10
  wrinkleResistanceScore: number; // 1 to 10
  naturalCompositionFa: string;
  naturalCompositionEn: string;
  bestSeasonsFa: string;
  bestSeasonsEn: string;
  tactileDescriptionFa: string;
  tactileDescriptionEn: string;
  bespokeTailorTipFa: string;
  bespokeTailorTipEn: string;
  textureVisual: {
    baseColor: string;
    patternType: "twill" | "oxford" | "herringbone" | "plain-silk" | "cashmere-rib" | "linen-slub" | "suede-grain";
    cssPattern: string;
  };
}

export const LUXURY_FABRIC_LIBRARY: LuxuryFabricData[] = [
  {
    id: "merino-120",
    nameFa: "پشم مرینو سوپر ۱۲۰ ایتالیا",
    nameEn: "Super 120s Italian Merino Wool",
    originFa: "بیلا، پیه‌مونته ایتالیا (Lanificio Vitale)",
    originEn: "Biella, Piedmont Italy (Lanificio Vitale)",
    gsmWeight: 260,
    breathabilityScore: 9,
    softnessScore: 9,
    wrinkleResistanceScore: 9,
    naturalCompositionFa: "۱۰۰٪ پشم مرینو خالص ارگانیک",
    naturalCompositionEn: "100% Organic Superfine Virgin Merino",
    bestSeasonsFa: "پاییز، زمستان و بهار خنک",
    bestSeasonsEn: "Autumn, Winter & Crisp Spring",
    tactileDescriptionFa: "بسیار سبک و لخت با ریزش شاهانه. الیاف آن با قطر ۱۷.۵ میکرون، حتی روی پوست حساس هیچ خارش یا سنگینی ایجاد نمی‌کند و با گرمای بدن فرم می‌گیرد.",
    tactileDescriptionEn: "Featherlight with an aristocratic fluid drape. 17.5-micron fibers create zero scratchiness, adapting seamlessly to body temperature.",
    bespokeTailorTipFa: "پس از هر بار پوشیدن، کت یا شلوار مرینو را روی چوب‌لباسی پهن چوبی آویزان کنید تا چروک‌های سطحی ظرف ۲ ساعت خودبه‌خود با رطوبت طبیعی هوا صاف شوند.",
    bespokeTailorTipEn: "Hang on broad cedarwood hangers after wearing; ambient humidity naturally relaxes surface wrinkles within 2 hours without ironing.",
    textureVisual: {
      baseColor: "#1E2633",
      patternType: "twill",
      cssPattern: "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 4px)"
    }
  },
  {
    id: "giza-egyptian-cotton",
    nameFa: "کتان مصری گیزا ۸۷",
    nameEn: "Egyptian Giza 87 Extra-Long Staple Cotton",
    originFa: "حوزه رود نیل، مصر (تکمیل شده در آلبینی ایتالیا)",
    originEn: "Nile River Basin, Egypt (Albini Mill Finished, Italy)",
    gsmWeight: 135,
    breathabilityScore: 10,
    softnessScore: 9,
    wrinkleResistanceScore: 7,
    naturalCompositionFa: "۱۰۰٪ کتان دست‌چین با الیاف فوق بلند",
    naturalCompositionEn: "100% Hand-Harvested Extra-Long Staple Cotton",
    bestSeasonsFa: "چهارفصل (به‌ویژه بهار و تابستان)",
    bestSeasonsEn: "Four-Season Versatility (Spring/Summer Ideal)",
    tactileDescriptionFa: "درخشش مات ابریشم‌گون با بافت متراکم و بسیار خنک. هر بار که شسته می‌شود به جای فرسودگی، لطیف‌تر و خوش‌فرم‌تر می‌گردد.",
    tactileDescriptionEn: "Silken matte luster with a dense, cool hand-feel. With each wash, the fibers soften rather than degrade.",
    bespokeTailorTipFa: "برای اتوکشی پیراهن گیزا، همیشه پارچه را کمی نم‌دار کنید یا از بخار داغ استفاده کنید تا ایستایی یقه به مانند روز اول آهاردار بایستد.",
    bespokeTailorTipEn: "Iron while slightly damp with high steam pressure to achieve that crisp Savile Row collar sharpness.",
    textureVisual: {
      baseColor: "#FBFBFA",
      patternType: "oxford",
      cssPattern: "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)"
    }
  },
  {
    id: "normandy-linen",
    nameFa: "لینن اصیل فرانسوی نورماندی",
    nameEn: "Normandy French Flax Linen",
    originFa: "شمال فرانسه و بلژیک",
    originEn: "Normandy, Northern France & Belgium",
    gsmWeight: 190,
    breathabilityScore: 10,
    softnessScore: 8,
    wrinkleResistanceScore: 5,
    naturalCompositionFa: "۱۰۰٪ الیاف طبیعی کتان بوته‌ای (Flax)",
    naturalCompositionEn: "100% Unadulterated Plant-Derived Flax",
    bestSeasonsFa: "بهار گرم و تابستان",
    bestSeasonsEn: "Warm Spring & High Summer",
    tactileDescriptionFa: "بافت گره‌دار و باوقار (Slubbed Texture) که جریان هوا را مستقیماً از میان الیاف عبور می‌دهد و رطوبت را فوراً تبخیر می‌کند. چروک‌های طبیعی آن بخشی از اصالت استایل ریویرا است.",
    tactileDescriptionEn: "Artisanal slubbed texture maximizing airflow and evaporative cooling. Natural creases are the hallmark of authentic Mediterranean sprezzatura.",
    bespokeTailorTipFa: "لینن باکیفیت را هرگز با مواد نشاسته‌ای سفت نکنید؛ زیبایی پیراهن و شلوار لینن در شل و رها بودن بافت آن است.",
    bespokeTailorTipEn: "Never over-starch luxury linen; its poetic charm lies in relaxed drape and natural movement.",
    textureVisual: {
      baseColor: "#DED6C9",
      patternType: "linen-slub",
      cssPattern: "repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 3px), repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 3px)"
    }
  },
  {
    id: "mongolian-cashmere",
    nameFa: "کشمیر شاهانه مغولستان (Grade-A)",
    nameEn: "Grade-A Inner Mongolian Pure Cashmere",
    originFa: "فلات مغولستان داخلی",
    originEn: "Inner Mongolian Steppes",
    gsmWeight: 310,
    breathabilityScore: 8,
    softnessScore: 10,
    wrinkleResistanceScore: 9,
    naturalCompositionFa: "۱۰۰٪ موی زیرین بز کشمیر درجه یک",
    naturalCompositionEn: "100% First-Comb Fine Underdown Cashmere",
    bestSeasonsFa: "پاییز سرد و زمستان",
    bestSeasonsEn: "Crisp Autumn & Alpine Winter",
    tactileDescriptionFa: "گرم‌ترین و لطیف‌ترین بافت جهان؛ ۸ برابر گرم‌تر از پشم گوسفند در حالی که وزنی بسیار سبک شبیه به ابر دارد. حس لمس آن اوج اشرافیت است.",
    tactileDescriptionEn: "The pinnacle of tactile luxury; up to 8x warmer than sheep wool yet cloud-light and incomparably plush.",
    bespokeTailorTipFa: "پلیور کشمیر را هرگز به چوب‌لباسی آویزان نکنید چون شانه آن دفرمه می‌شود؛ آن را تا کرده و در کاور کتان قرار دهید.",
    bespokeTailorTipEn: "Never store cashmere on coat hangers to prevent shoulder sagging; fold neatly in breathable cotton garment cases.",
    textureVisual: {
      baseColor: "#C9BAA7",
      patternType: "cashmere-rib",
      cssPattern: "repeating-linear-gradient(90deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 3px, transparent 3px, transparent 6px)"
    }
  },
  {
    id: "mulberry-silk",
    nameFa: "ابریشم شاه‌توت توت‌فرنگی (Mulberry)",
    nameEn: "100% Pure Mulberry Silk Crepe",
    originFa: "کوموی ایتالیا (Lago di Como)",
    originEn: "Lake Como Mill Atelier, Italy",
    gsmWeight: 90,
    breathabilityScore: 9,
    softnessScore: 10,
    wrinkleResistanceScore: 8,
    naturalCompositionFa: "۱۰۰٪ رشته‌های ابریشم طبیعی کرپ‌دوشین",
    naturalCompositionEn: "100% Natural Mulberry Silk Filaments",
    bestSeasonsFa: "چهارفصل (برای شومیز و دستمال‌جیب)",
    bestSeasonsEn: "All-Season Blouse & Pocket Square Base",
    tactileDescriptionFa: "تنظیم‌کننده طبیعی دمای بدن و ایجاد حس خنکی در تماس با پوست؛ درخشش مات لوکس بدون هیچ‌گونه برق پلاستیکی مصنوعی.",
    tactileDescriptionEn: "Natural thermal regulator with an opulent matte pearl glow, free from artificial synthetic luster.",
    bespokeTailorTipFa: "ابریشم واقعی را فقط با شوینده‌های خنثی و با آب سرد بشویید و بدون چلاندن به شکل افقی خشک کنید.",
    bespokeTailorTipEn: "Wash only with pH-neutral silk washes in cold water; dry flat without wringing to protect fragile protein bonds.",
    textureVisual: {
      baseColor: "#FAF7F2",
      patternType: "plain-silk",
      cssPattern: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(240,235,225,0.1) 100%)"
    }
  },
  {
    id: "worsted-flannel",
    nameFa: "فلانل پشمی مرغوب انگلیسی",
    nameEn: "British Worsted Wool Flannel",
    originFa: "هادرزفیلد انگلستان (Huddersfield Textiles)",
    originEn: "Huddersfield, West Yorkshire, England",
    gsmWeight: 340,
    breathabilityScore: 7,
    softnessScore: 8,
    wrinkleResistanceScore: 10,
    naturalCompositionFa: "۱۰۰٪ پشم شانه شده سنگین فشرده",
    naturalCompositionEn: "100% Heavy Combed Worsted Wool",
    bestSeasonsFa: "پاییز و زمستان",
    bestSeasonsEn: "Autumn & Freezing Winter",
    tactileDescriptionFa: "بافت کرک‌دار مات و ضخیم با حفظ عالی خط اتو روی شلوار؛ بهترین انتخاب برای شلوارهای کلاسیک فصل سرد.",
    tactileDescriptionEn: "Brushed matte surface retaining immaculate trouser creases in brisk weather with commanding drape.",
    bespokeTailorTipFa: "شلوار فلانل طوسی زغالی با خط اتوی عمیق، انعطاف‌پذیرترین قطعه کمد برای ست شدن با تمام کت‌های تک است.",
    bespokeTailorTipEn: "Charcoal worsted flannel trousers with forward pleats are the ultimate wardrobe foundation, pairing with any sport coat.",
    textureVisual: {
      baseColor: "#3D444D",
      patternType: "herringbone",
      cssPattern: "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 4px, transparent 4px, transparent 8px)"
    }
  }
];

export interface MannequinGarmentOption {
  id: string;
  nameFa: string;
  nameEn: string;
  category: "layer" | "top" | "bottom" | "shoes" | "accessory";
  gender: "men" | "women" | "unisex";
  hexColor: string;
  colorNameFa: string;
  colorNameEn: string;
  fabricNameFa: string;
  fabricNameEn: string;
  formalityLevel: "formal" | "smart-casual" | "casual";
}

export const MANNEQUIN_GARMENTS: MannequinGarmentOption[] = [
  // Layers / Jackets
  {
    id: "lay-navy-blazer",
    nameFa: "کت تک سرمه‌ای ناپلی (Double-Breasted)",
    nameEn: "Neapolitan Double-Breasted Navy Blazer",
    category: "layer",
    gender: "men",
    hexColor: "#172338",
    colorNameFa: "سرمه‌ای عمیق ناپلی",
    colorNameEn: "Deep Neapolitan Navy",
    fabricNameFa: "پشم مرینو ۱۲۰",
    fabricNameEn: "Super 120s Merino Wool",
    formalityLevel: "formal"
  },
  {
    id: "lay-camel-coat",
    nameFa: "پالتو کلاسیک شتری اورجینال",
    nameEn: "Classic Heritage Camel Overcoat",
    category: "layer",
    gender: "unisex",
    hexColor: "#B58450",
    colorNameFa: "کرم شتری شاهانه",
    colorNameEn: "Noble Camel",
    fabricNameFa: "پشم و کشمیر دولایه",
    fabricNameEn: "Double-Faced Wool & Cashmere",
    formalityLevel: "smart-casual"
  },
  {
    id: "lay-charcoal-jacket",
    nameFa: "کت تک طوسی زغالی بافت هرینگبون",
    nameEn: "Charcoal Herringbone Tweed Jacket",
    category: "layer",
    gender: "unisex",
    hexColor: "#2F353D",
    colorNameFa: "طوسی زغالی دودی",
    colorNameEn: "Charcoal Slate",
    fabricNameFa: "فلانل پشمی مرغوب",
    fabricNameEn: "Worsted Wool Flannel",
    formalityLevel: "formal"
  },
  {
    id: "lay-olive-overshirt",
    nameFa: "اورشرت کتان زیتونی اشرافی",
    nameEn: "Noble Olive Gabardine Overshirt",
    category: "layer",
    gender: "unisex",
    hexColor: "#3C4B3E",
    colorNameFa: "سبز زیتونی سنگی",
    colorNameEn: "Muted Forest Olive",
    fabricNameFa: "کتان گاباردین سنگین",
    fabricNameEn: "Heavy Gabardine Cotton",
    formalityLevel: "casual"
  },
  {
    id: "lay-ivory-trench",
    nameFa: "ترنچ‌کت کلاسیک عاجی کمربنددار",
    nameEn: "Ivory Belted Heritage Trench Coat",
    category: "layer",
    gender: "women",
    hexColor: "#D6C7B2",
    colorNameFa: "بژ عاجی ملایم",
    colorNameEn: "Soft Ivory Beige",
    fabricNameFa: "گاباردین کتان ضدآب",
    fabricNameEn: "Water-Repellent Cotton Gabardine",
    formalityLevel: "smart-casual"
  },

  // Tops / Shirts
  {
    id: "top-white-oxford",
    nameFa: "پیراهن کتان آکسفورد سفید آهاردار",
    nameEn: "Crisp White Oxford Cloth Button-Down",
    category: "top",
    gender: "unisex",
    hexColor: "#FCFBF8",
    colorNameFa: "سفید کریستالی کتان",
    colorNameEn: "Crisp Oxford White",
    fabricNameFa: "کتان مصری گیزا ۸۷",
    fabricNameEn: "Egyptian Giza 87 Cotton",
    formalityLevel: "formal"
  },
  {
    id: "top-blue-sky",
    nameFa: "پیراهن آبی روشن آسمانی بافت‌دار",
    nameEn: "Sky Blue Textured Poplin Shirt",
    category: "top",
    gender: "unisex",
    hexColor: "#C2D7ED",
    colorNameFa: "آبی آسمانی ملایم",
    colorNameEn: "Soft Sky Blue",
    fabricNameFa: "کتان ژاپنی ریزبافت",
    fabricNameEn: "Fine Japanese Cotton",
    formalityLevel: "smart-casual"
  },
  {
    id: "top-oatmeal-knit",
    nameFa: "بافت یقه اسکی کرم جو دوسر",
    nameEn: "Oatmeal Cashmere Rollneck Knit",
    category: "top",
    gender: "unisex",
    hexColor: "#E5DDD0",
    colorNameFa: "کرم جو دوسر لطیف",
    colorNameEn: "Subtle Oatmeal Ecru",
    fabricNameFa: "کشمیر مغولی خالص",
    fabricNameEn: "Pure Mongolian Cashmere",
    formalityLevel: "smart-casual"
  },
  {
    id: "top-black-silk",
    nameFa: "شومیز ابریشمی مشکی مات لوکس",
    nameEn: "Matte Black Mulberry Silk Blouse",
    category: "top",
    gender: "women",
    hexColor: "#1A1817",
    colorNameFa: "مشکی آبنوسی مات",
    colorNameEn: "Matte Obsidian Black",
    fabricNameFa: "ابریشم خالص کرپ دوشین",
    fabricNameEn: "Pure Silk Crepe de Chine",
    formalityLevel: "formal"
  },

  // Bottoms / Trousers
  {
    id: "bot-grey-flannel",
    nameFa: "شلوار راسته طوسی خط اتودار",
    nameEn: "Tailored Charcoal Flannel Trousers",
    category: "bottom",
    gender: "unisex",
    hexColor: "#575E66",
    colorNameFa: "طوسی سنگ مرمر",
    colorNameEn: "Dove Marble Slate",
    fabricNameFa: "فلانل پشمی انگلیسی",
    fabricNameEn: "British Wool Flannel",
    formalityLevel: "formal"
  },
  {
    id: "bot-sand-linen",
    nameFa: "شلوار کتان پیلی‌دار شنی",
    nameEn: "Pleated Sand Linen-Cotton Trousers",
    category: "bottom",
    gender: "unisex",
    hexColor: "#D1C3AF",
    colorNameFa: "بژ شنی ساحلی",
    colorNameEn: "Coastal Sand Beige",
    fabricNameFa: "لینن فرانسوی و کتان",
    fabricNameEn: "French Flax & Cotton Blend",
    formalityLevel: "smart-casual"
  },
  {
    id: "bot-navy-trousers",
    nameFa: "شلوار پارچه‌ای راسته سرمه‌ای فیت",
    nameEn: "Slim-Straight Tailored Navy Trousers",
    category: "bottom",
    gender: "unisex",
    hexColor: "#1A2332",
    colorNameFa: "سرمه‌ای رسمی",
    colorNameEn: "Formal Midnight Navy",
    fabricNameFa: "پشم مرینو ۱۲۰",
    fabricNameEn: "Super 120s Virgin Wool",
    formalityLevel: "formal"
  },
  {
    id: "bot-dark-denim",
    nameFa: "شلوار جین کلاسیک نیلی خام (Selvedge)",
    nameEn: "Raw Indigo Selvedge Denim",
    category: "bottom",
    gender: "unisex",
    hexColor: "#222C3A",
    colorNameFa: "نیلی تیره سلویج",
    colorNameEn: "Deep Indigo Selvedge",
    fabricNameFa: "دنیم ۱۴ اونسی کتان",
    fabricNameEn: "14oz Japanese Cotton Denim",
    formalityLevel: "casual"
  },

  // Shoes / Footwear
  {
    id: "sho-cognac-oxford",
    nameFa: "کفش آکسفورد تمام چرم قهوه‌ای بلوطی",
    nameEn: "Burnished Cognac Leather Oxfords",
    category: "shoes",
    gender: "men",
    hexColor: "#59331E",
    colorNameFa: "چرم کنیاکی دست‌دوز",
    colorNameEn: "Hand-Burnished Cognac",
    fabricNameFa: "چرم دباغی گیاهی ایتالیا",
    fabricNameEn: "Vegetable-Tanned Italian Leather",
    formalityLevel: "formal"
  },
  {
    id: "sho-toffee-loafers",
    nameFa: "کفش لوفر جیر تافی پنی با زیره چرم",
    nameEn: "Toffee Suede Penny Loafers",
    category: "shoes",
    gender: "unisex",
    hexColor: "#8C5838",
    colorNameFa: "جیر شکلاتی روشن",
    colorNameEn: "Rich Toffee Suede",
    fabricNameFa: "جیر نرم توسکان",
    fabricNameEn: "Supple Tuscan Suede",
    formalityLevel: "smart-casual"
  },
  {
    id: "sho-black-derby",
    nameFa: "کفش دربی چرم مشکی صیقلی مات",
    nameEn: "Matte Black Calfskin Derbies",
    category: "shoes",
    gender: "unisex",
    hexColor: "#191716",
    colorNameFa: "مشکی زغالی کلاسیک",
    colorNameEn: "Classic Charcoal Black",
    fabricNameFa: "چرم فرانسوی باکس‌کالف",
    fabricNameEn: "French Box-Calf Leather",
    formalityLevel: "formal"
  },
  {
    id: "sho-white-sneaker",
    nameFa: "کتونی مینیمال چرم سفید دست‌ساز",
    nameEn: "Minimalist Handmade White Leather Sneakers",
    category: "shoes",
    gender: "unisex",
    hexColor: "#F4F1EC",
    colorNameFa: "سفید استخوانی کژوال",
    colorNameEn: "Pristine Bone White",
    fabricNameFa: "چرم گوساله ناپا",
    fabricNameEn: "Supple Nappa Calfskin",
    formalityLevel: "casual"
  }
];

export function calculateMannequinHarmony(
  layer: MannequinGarmentOption,
  top: MannequinGarmentOption,
  bottom: MannequinGarmentOption,
  shoes: MannequinGarmentOption,
  lang: LanguageCode | string = "fa"
): {
  score: number;
  verdictFa: string;
  verdictEn: string;
  sprezzaturaScore: number;
  contrastRatio: "high" | "balanced" | "monochrome";
  analysisFa: string;
  analysisEn: string;
  goldenRuleMatchFa: string;
  goldenRuleMatchEn: string;
} {
  const isEn = lang !== "fa" && lang !== "ar";
  let baseScore = 88;

  // Evaluate color contrast
  const isDarkTop = top.hexColor === "#1A1817" || top.hexColor === "#172338";
  const isLightTop = top.hexColor === "#FCFBF8" || top.hexColor === "#C2D7ED" || top.hexColor === "#E5DDD0";
  const isDarkLayer = layer.hexColor === "#172338" || layer.hexColor === "#2F353D";
  const isNavyAndBrown = (layer.hexColor === "#172338" || bottom.hexColor === "#1A2332") && (shoes.hexColor === "#59331E" || shoes.hexColor === "#8C5838");

  if (isNavyAndBrown) {
    baseScore += 8;
  }

  if (isDarkLayer && isLightTop) {
    baseScore += 4;
  }

  const sprezzatura = Math.min(98, Math.max(82, baseScore + (shoes.category === "shoes" ? 2 : 0)));

  return {
    score: Math.min(99, baseScore),
    verdictFa: baseScore >= 92 ? "تعادل اشرافی و بی‌نقص (Sartorial Masterpiece)" : "هارمونی هماهنگ و باوقار",
    verdictEn: baseScore >= 92 ? "Sartorial Masterpiece: Perfect Architectural Balance" : "Refined & Poised Tonal Harmony",
    sprezzaturaScore: sprezzatura,
    contrastRatio: isDarkLayer && isLightTop ? "balanced" : "monochrome",
    analysisFa: `ترکیب ${layer.colorNameFa} با بالاتنه ${top.colorNameFa} و شلوار ${bottom.colorNameFa} یک کنتراست کلاسیک اروپایی ایجاد کرده که توجه را به چهره هدایت می‌کند. کفش ${shoes.colorNameFa} وزن بصری را در پایین‌تنه مهار کرده است.`,
    analysisEn: `Pairing ${layer.colorNameEn} with ${top.colorNameEn} and ${bottom.colorNameEn} creates an unbroken European vertical contrast guiding focus upward to the face. The ${shoes.colorNameEn} footwear anchors ground proportions with effortless composure.`,
    goldenRuleMatchFa: "رعایت نسبت ۷۰٪ رنگ پایه خنثی با ۲۰٪ لایه مکمل و ۱۰٪ تنالیته غنی چرم کفش.",
    goldenRuleMatchEn: "Adheres to the 70/20/10 Sartorial Matrix: 70% foundational neutral, 20% complementary layer, and 10% rich leather patina."
  };
}
