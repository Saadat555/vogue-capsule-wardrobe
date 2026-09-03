// Quiet Luxury & Modern Classic 2026 Engine Rules & Interactive Explorer
import { LanguageCode } from "../i18n/translations";

export interface QuietLuxuryRule {
  id: string;
  titleFa: string;
  subtitleFa: string;
  icon: string;
  coreRule: string;
  whyItMatters: string;
  practicalExampleMen: string;
  practicalExampleWomen: string;
  forbiddenMistake: string;
  // Localized getters support
  titleEn?: string;
  subtitleEn?: string;
  coreRuleEn?: string;
  whyItMattersEn?: string;
  practicalExampleMenEn?: string;
  practicalExampleWomenEn?: string;
  forbiddenMistakeEn?: string;
}

export const QUIET_LUXURY_PRINCIPLES: QuietLuxuryRule[] = [
  {
    id: "no-logos-fabric-first",
    titleFa: "۱. اصل حذف لوگو و اصالت الیاف طبیعی (No-Logo & Pure Fabrics)",
    subtitleFa: "ارزش لباس در لطافت و بافت پارچه است، نه نام برند چاپ‌شده روی سینه",
    icon: "🧶",
    coreRule: "استفاده از الیاف ۱۰۰٪ طبیعی: کتان آکسفورد، پشم مرینو، ترمه و کشمیر لطیف، لینن بهاره و ابریشم طبیعی مات به جای پارچه‌های براق نایلونی و پلاستیکی.",
    whyItMatters: "لباس‌های با الیاف طبیعی دارای تنفس‌پذیری بالا، ایستایی مجلل و دوام طولانی هستند و حتی پس از سال‌ها شیک باقی می‌مانند.",
    practicalExampleMen: "پلیور بافت مرینو با بافت ریز سرمه‌ای بدون هیچ آرم و لوگو، روی پیراهن کتان سفید آهاردار.",
    practicalExampleWomen: "شومیز ابریشمی مات رنگ کرم شیری با کت پشمی سبک دوخت تمیز و بدون زیپ‌های براق اضافه.",
    forbiddenMistake: "پوشیدن تیشرت‌ها یا کمربندهایی با سگک‌ها و لوگوهای درشت طلایی یا چاپی.",
    titleEn: "1. No-Logo & Noble Pure Natural Fabrics",
    subtitleEn: "A garment's true nobility resides in textile tactile richness, never in ostentatious logo prints.",
    coreRuleEn: "Prioritize 100% natural, unadulterated fibers: crisp Oxford cotton, Super 120s merino wool, Inner Mongolian cashmere, Normandy flax linen, and matte mulberry silk over synthetic polyesters.",
    whyItMattersEn: "Natural fibers possess superior thermal breathability, drape with aristocratic poise, and age gracefully into cherished heirlooms.",
    practicalExampleMenEn: "Unbranded fine-knit midnight merino crewneck draped over a pristine crisp Egyptian cotton Oxford shirt.",
    practicalExampleWomenEn: "Matte ivory mulberry silk blouse paired with an unlined double-faced lightweight virgin wool jacket.",
    forbiddenMistakeEn: "Donning oversized monogram designer belts, flashy metallic hardware, or graphic logo prints."
  },
  {
    id: "tonal-monochrome",
    titleFa: "۲. استایل مونوکروم و تنالیته‌های هماهنگ (Tonal Dressing)",
    subtitleFa: "ایجاد پرستیژ با بازی در یک خانواده رنگی باکلاس",
    icon: "🎨",
    coreRule: "به جای ست کردن رنگ‌های پرکنتراست و تند، از ۳ طیف مختلف یک رنگ اشرافی (سرمه‌ای، طوسی دودی، شتری، کرم و زیتونی) استفاده کنید.",
    whyItMatters: "پوشش مونوکروم قد را کشیده‌تر، اندام را متناسب‌تر و استایل را فوق‌العاده گران‌قیمت و آرام‌بخش نشان می‌دهد.",
    practicalExampleMen: "پالتو شتری تیره + پلیور بافت نسکافه‌ای روشن + شلوار کتان کرم شنی + کفش چرم عسلی مات.",
    practicalExampleWomen: "کت بلیزر دودی + شومیز طوسی ملایم سنگی + شلوار پارچه‌ای راسته زغالی با گوشواره نقره‌ای مات.",
    forbiddenMistake: "استفاده همزمان از بیش از ۲ رنگ تند یا ست کردن رنگ‌های فسفری و نئونی.",
    titleEn: "2. Aristocratic Tonal & Monochrome Dressing",
    subtitleEn: "Effortless prestige cultivated through layered shades of a single refined neutral family.",
    coreRuleEn: "Rather than clashing disparate saturated colors, compose outfits using 3 tonal depths of a single noble neutral: deep navy, charcoal slate, camel oatmeal, or olive taupe.",
    whyItMattersEn: "Tonal dressing creates an unbroken vertical silhouette, elongating proportions and exuding calm, understated affluence.",
    practicalExampleMenEn: "Camel overcoat layered over an oatmeal cashmere rollneck, sand flannel trousers, and burnished cognac leather loafers.",
    practicalExampleWomenEn: "Dove grey tailored blazer over a pearl crepe top, charcoal wide-leg wool trousers, and brushed sterling silver accents.",
    forbiddenMistakeEn: "Mixing more than two conflicting high-chroma tones or fluorescent neon accents in a single ensemble."
  },
  {
    id: "structure-fluidity-balance",
    titleFa: "۳. تعادل ساختار و راحتی (Structure vs. Fluidity)",
    subtitleFa: "تعادل هندسی میان خطوط شق‌ورق و پارچه‌های لخت و روان",
    icon: "⚖️",
    coreRule: "همیشه یک جزء ساختاریافته (کت آهاردار، کفش فرم‌دار یا کیف سفت) را با یک جزء نرم و منعطف (شلوار راسته راحت یا بافت نرم) ترکیب کنید.",
    whyItMatters: "استایل نباید شبیه یونیفرم نظامی سفت باشد و نباید شبیه لباس خواب یا راحتی شلخته دیده شود؛ زیبایی در نقطه تعادل است.",
    practicalExampleMen: "کت تک با ساختار شانه مشخص روی پیراهن کتان یقه باز با شلوار پارچه‌ای راسته نرم و کفش لوفر چرم راحت.",
    practicalExampleWomen: "کت بلیزر با شانه متناسب همراه با شلوار وایدلگ پارچه‌ای با ریزش لخت و کفش پاشنه‌کوتاه مینیمال.",
    forbiddenMistake: "پوشیدن همزمان چند لباس گشاد و بی‌فرم یا بالعکس سر تا پا لباس‌های چسبان و پلاستیکی.",
    titleEn: "3. The Balance of Architectural Structure & Fluidity",
    subtitleEn: "Harmonizing sharp tailored silhouettes with relaxed, draped comfort.",
    coreRuleEn: "Always counterbalance a structured garment (tailored blazer, firm leather tote, welted oxford) with a relaxed, flowing piece (pleated fluid trousers or soft knitwear).",
    whyItMattersEn: "Prevents the outfit from feeling like a rigid military uniform or slipping into unkempt loungewear. Elegance lies in effortless tension.",
    practicalExampleMenEn: "Structured Neapolitan shoulder sport coat over an open-collar linen shirt with fluid pleated trousers and soft suede penny loafers.",
    practicalExampleWomenEn: "Sharp tailored shoulders on a double-breasted blazer contrasted with drape-heavy wide-leg crepe trousers and minimal kitten heels.",
    forbiddenMistakeEn: "Wearing all oversized slouchy garments at once, or head-to-toe skin-tight synthetic stretch wear."
  },
  {
    id: "three-tier-layering",
    titleFa: "۴. هنر لایه‌بندی سه‌سطحی (3-Tier Layering Mastery)",
    subtitleFa: "پوشش باعمق و غنی به جای تیپ‌های تک‌بعدی",
    icon: "🧥",
    coreRule: "لایه‌بندی ۳ جزئی: لایه پایه (پیراهن/تیشرت آستین‌دار) + لایه میانی (بافت یقه گرد، یقه اسکی یا ژاکت دکمه‌دار) + لایه محافظ (ترنچ‌کت، بلیزر یا پالتو).",
    whyItMatters: "لایه‌بندی به استایل عمق بصری، گرما و کارایی در طول روز و تغییرات دمایی می‌دهد.",
    practicalExampleMen: "پیراهن آکسفورد آبی روشن + پلیور یقه هفت طوسی مرینو + کت بلیزر سرمه‌ای کلاسیک.",
    practicalExampleWomen: "تاپ یقه اسکی نود + کاردیگان بافت ظریف + ترنچ‌کت کلاسیک خاکی با کمربند شل بسته شده.",
    forbiddenMistake: "پوشیدن کاپشن بادی پف‌دار اسپرت روی کت‌وشلوار رسمی مجلسی.",
    titleEn: "4. Three-Tier Sartorial Layering Mastery",
    subtitleEn: "Cultivating rich visual dimension, texture interplay, and thermal adaptability.",
    coreRuleEn: "Adopt the 3-Tier Layering formula: Base Layer (crisp cotton shirt or fine tee) + Insulating Mid-Layer (V-neck merino, turtleneck, or waistcoat) + Protective Outer Shell (tailored overcoat, trench, or blazer).",
    whyItMattersEn: "Layering adds rich sartorial depth, allows seamless climate transitions, and displays refined texture pairing.",
    practicalExampleMenEn: "Sky blue Oxford cloth shirt under a mid-grey merino V-neck, topped with an unstructured hopsack navy blazer.",
    practicalExampleWomenEn: "Nude micro-ribbed turtleneck beneath an ivory fine-knit cardigan, shielded by a classic belted trench coat.",
    forbiddenMistakeEn: "Throwing a bulky athletic puff jacket over a structured bespoke tailored suit."
  },
  {
    id: "leather-metal-harmony",
    titleFa: "۵. هارمونی چرم مات و فلزات مینیمال (Subtle Accessories)",
    subtitleFa: "تطابق میلی‌متری متریال‌ها در سکوت کامل بصری",
    icon: "👞",
    coreRule: "قانون چرم با چرم (بند ساعت، کمربند و کفش همگی در یک طیف چرم مات) و قانون فلز با فلز (سگک کمربند، حلقه و قاب ساعت همگی نقره‌ای یا همگی طلای مات).",
    whyItMatters: "چشم بیننده ناخودآگاه ناهماهنگی فلزات یا تضاد رنگ چرم کفش با کمربند را به عنوان بی‌دقتی در آراستگی ثبت می‌کند.",
    practicalExampleMen: "کفش چرم دربی قهوه‌ای سوخته مات + کمربند چرم هم‌رنگ با سگک استیل نقره‌ای + ساعت مچی با بند چرم قهوه‌ای.",
    practicalExampleWomen: "کیف چرم با ساختار هندسی و سگک طلای مات + ساعت بند چرمی ظریف + گوشواره حلقه‌ای کوچک طلایی مات.",
    forbiddenMistake: "پوشیدن کمربند چرم مشکی با کفش قهوه‌ای روشن یا ترکیب همزمان زنجیر نقره‌ای با ساعت طلای براق.",
    titleEn: "5. Matte Leather & Unified Hardware Harmony",
    subtitleEn: "Subtle visual continuity across all leathers, metals, and understated horology.",
    coreRuleEn: "Synchronize leathers with leathers (shoe, belt, watch strap in matching matte tone) and metals with metals (buckle, ring, watch bezel strictly brushed silver or matte gold).",
    whyItMattersEn: "The discerning eye registers mixed hardware metals or conflicting leather hues as uncalculated carelessness.",
    practicalExampleMenEn: "Burnished dark espresso derby shoes + matching full-grain leather belt with brushed palladium buckle + brown leather strap timepiece.",
    practicalExampleWomenEn: "Structured cognac leather tote with brushed brass hardware + delicate leather-strap watch + minimal matte gold huggie earrings.",
    forbiddenMistakeEn: "Teaming a black patent belt with tan brogues, or clashing chunky silver chains with gold-bezel dress watches."
  }
];

export interface ModernPalette {
  nameFa: string;
  nameEn: string;
  vibeFa: string;
  vibeEn: string;
  colors: {
    nameFa: string;
    nameEn: string;
    hex: string;
    share: string;
  }[];
}

export const MODERN_CLASSIC_PALETTES: ModernPalette[] = [
  {
    nameFa: "پالت ریویرا و نوی (Navy & Crisp White)",
    nameEn: "Riviera & Coastal Navy",
    vibeFa: "پرستیژ دریایی، جلسات رسمی و پروازهای بیزینس",
    vibeEn: "Maritime executive prestige, strategic boardrooms & business class travel",
    colors: [
      { nameFa: "سرمه‌ای شیک (Deep Navy)", nameEn: "Midnight Navy", hex: "#1A2536", share: "60%" },
      { nameFa: "سفید خالص کتان (Crisp White)", nameEn: "Crisp Oxford White", hex: "#FDFDFD", share: "30%" },
      { nameFa: "چرم کنیاکی (Cognac Leather)", nameEn: "Rich Cognac Leather", hex: "#8D4F28", share: "10%" }
    ]
  },
  {
    nameFa: "پالت شتری و کاپوچینو (Camel & Cashmere)",
    nameEn: "Camel & Cashmere Warmth",
    vibeFa: "لوکس بدون هیاهو، قرارهای مهم کاری و عصرگاهی",
    vibeEn: "Unspoken luxury, pivotal business dialogues & twilight aperitivos",
    colors: [
      { nameFa: "کرم شتری اصیل (Camel)", nameEn: "Noble Camel", hex: "#B88B58", share: "50%" },
      { nameFa: "کرم جو دوسر (Oatmeal)", nameEn: "Oatmeal Melange", hex: "#E3DAC9", share: "35%" },
      { nameFa: "قهوه اسپرسو تیره (Espresso)", nameEn: "Deep Espresso", hex: "#38281F", share: "15%" }
    ]
  },
  {
    nameFa: "پالت زغالی و سنگ مرمر (Charcoal & Pearl)",
    nameEn: "Charcoal & Pearl Stone",
    vibeFa: "جدیت، قدرت مذاکره و استایل پاییزی باوقار",
    vibeEn: "Gravitas, negotiation power & poise for crisp autumn days",
    colors: [
      { nameFa: "طوسی زغالی مات (Charcoal)", nameEn: "Matte Charcoal Slate", hex: "#2E3338", share: "55%" },
      { nameFa: "طوسی سنگی ابریشمی (Dove Grey)", nameEn: "Dove Grey Silk", hex: "#A8ADB2", share: "35%" },
      { nameFa: "استیل نقره‌ای مات (Brushed Silver)", nameEn: "Brushed Sterling Silver", hex: "#D4D8DD", share: "10%" }
    ]
  },
  {
    nameFa: "پالت جنگل مه آلود و زیتونی (Forest & Sand)",
    nameEn: "Misty Forest & Sand Beige",
    vibeFa: "اسمارت‌کژوال طبیعت، دورهمی آخر هفته و دانشگاه",
    vibeEn: "Tactile countryside smart casual, weekend soirees & cultural events",
    colors: [
      { nameFa: "سبز زیتونی سیر (Deep Olive)", nameEn: "Deep Hunter Olive", hex: "#3B4A3F", share: "50%" },
      { nameFa: "بژ شنی (Sand Beige)", nameEn: "Coastal Sand Beige", hex: "#D6C6B2", share: "40%" },
      { nameFa: "برنز مات (Muted Bronze)", nameEn: "Muted Antique Bronze", hex: "#7A6248", share: "10%" }
    ]
  }
];

export function getLocalizedRule(rule: QuietLuxuryRule, lang: LanguageCode | string = "fa") {
  const isEn = lang !== "fa" && lang !== "ar";
  return {
    id: rule.id,
    icon: rule.icon,
    title: isEn ? (rule.titleEn || rule.titleFa) : rule.titleFa,
    subtitle: isEn ? (rule.subtitleEn || rule.subtitleFa) : rule.subtitleFa,
    coreRule: isEn ? (rule.coreRuleEn || rule.coreRule) : rule.coreRule,
    whyItMatters: isEn ? (rule.whyItMattersEn || rule.whyItMatters) : rule.whyItMatters,
    practicalExampleMen: isEn ? (rule.practicalExampleMenEn || rule.practicalExampleMen) : rule.practicalExampleMen,
    practicalExampleWomen: isEn ? (rule.practicalExampleWomenEn || rule.practicalExampleWomen) : rule.practicalExampleWomen,
    forbiddenMistake: isEn ? (rule.forbiddenMistakeEn || rule.forbiddenMistake) : rule.forbiddenMistake
  };
}

export function getLocalizedPalette(palette: ModernPalette, lang: LanguageCode | string = "fa") {
  const isEn = lang !== "fa" && lang !== "ar";
  return {
    name: isEn ? palette.nameEn : palette.nameFa,
    vibe: isEn ? palette.vibeEn : palette.vibeFa,
    colors: palette.colors.map(c => ({
      name: isEn ? c.nameEn : c.nameFa,
      hex: c.hex,
      share: c.share
    }))
  };
}
