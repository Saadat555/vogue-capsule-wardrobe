// Advanced styling engine data for Weekly Planner, Travel Packing, Outfit Shuffler, and Pre-Purchase Advisor
import { LanguageCode } from "../i18n/translations";

export interface WeeklyDayPlan {
  dayId: string;
  dayNameFa: string;
  dayNameEn: string;
  defaultOccasionId: string;
  defaultTitleFa: string;
  defaultTitleEn: string;
  recommendedVibeFa: string;
  recommendedVibeEn: string;
}

export const DEFAULT_WEEK_DAYS: WeeklyDayPlan[] = [
  {
    dayId: "sat",
    dayNameFa: "شنبه",
    dayNameEn: "Saturday",
    defaultOccasionId: "business-formal",
    defaultTitleFa: "شروع قدرتمند کاری / جلسات رسمی",
    defaultTitleEn: "Executive Kickoff & High-Stakes Negotiations",
    recommendedVibeFa: "کت سرمه‌ای، پیراهن سفید آهاردار و کفش چرم کلاسیک برای اعتمادبه‌نفس کاری بالا",
    recommendedVibeEn: "Sharp midnight navy blazer, crisp white Oxford shirt, and burnished dark brown oxford shoes for maximum executive presence"
  },
  {
    dayId: "sun",
    dayNameFa: "یک‌شنبه",
    dayNameEn: "Sunday",
    defaultOccasionId: "office-work",
    defaultTitleFa: "روز اداری و تمرکز کاری",
    defaultTitleEn: "Corporate Focus & Strategic Planning",
    recommendedVibeFa: "پیراهن آبی آکسفورد با شلوار پارچه‌ای طوسی یا کتان فیت مرتب",
    recommendedVibeEn: "Sky blue poplin shirt paired with charcoal tropical wool trousers and sleek leather penny loafers"
  },
  {
    dayId: "mon",
    dayNameFa: "دوشنبه",
    dayNameEn: "Monday",
    defaultOccasionId: "smart-casual",
    defaultTitleFa: "جلسات نیمه‌رسمی و اداری راحت",
    defaultTitleEn: "Collaborative Briefings & Smart Tailoring",
    recommendedVibeFa: "ترکیب پلیور بافت ظریف روی پیراهن کتان همراه با شلوار خوش‌دوخت",
    recommendedVibeEn: "Fine-gauge merino crewneck layered over an unbuttoned collar shirt with tailored sand chinos"
  },
  {
    dayId: "tue",
    dayNameFa: "سه‌شنبه",
    dayNameEn: "Tuesday",
    defaultOccasionId: "smart-casual",
    defaultTitleFa: "روز قرارهای تیمی و اسمارت‌کژوال",
    defaultTitleEn: "Creative Workshops & Atelier Engagements",
    recommendedVibeFa: "بلیزر اسپرت خاکی/سرمه‌ای با شلوار کتان شنی و کفش لوفر یا کتونی مینیمال",
    recommendedVibeEn: "Unstructured hopsack sport coat, cream merino knit, pleated trousers, and suede tassel loafers"
  },
  {
    dayId: "wed",
    dayNameFa: "چهارشنبه",
    dayNameEn: "Wednesday",
    defaultOccasionId: "date-evening",
    defaultTitleFa: "عصر دلپذیر و دورهمی پایان هفته کاری",
    defaultTitleEn: "Midweek Twilight Aperitivo & Dinner",
    recommendedVibeFa: "پیراهن تیره یا بافت یقه اسکی با شلوار تیره شیک و عطر گرم دلنشین",
    recommendedVibeEn: "Dark charcoal rollneck sweater, tailored trousers, and a warm woody amber signature scent"
  },
  {
    dayId: "thu",
    dayNameFa: "پنج‌شنبه",
    dayNameEn: "Thursday",
    defaultOccasionId: "date-evening",
    defaultTitleFa: "مهمانی، شام دوستانه یا مراسم ویژه",
    defaultTitleEn: "Soirée, Fine Dining & High-Profile Gatherings",
    recommendedVibeFa: "کت تک باوقار یا پیراهن براق هماهنگ با اکسسوری شاخص",
    recommendedVibeEn: "Tailored velvet or worsted blazer, pristine French-cuff shirt, and polished black calfskin dress shoes"
  },
  {
    dayId: "fri",
    dayNameFa: "جمعه",
    dayNameEn: "Friday",
    defaultOccasionId: "weekend-casual",
    defaultTitleFa: "استراحت، تفریح و هوای آزاد",
    defaultTitleEn: "Weekend Leisure & Countryside Promenade",
    recommendedVibeFa: "هودی یا پیراهن کتان آزاد، شلوار جین راحت و اسنیکر کاملاً تمیز",
    recommendedVibeEn: "Heavyweight French terry knit or relaxed linen shirt, selvedge denim, and minimalist white leather sneakers"
  }
];

export interface TravelTripType {
  id: string;
  titleFa: string;
  titleEn: string;
  icon: string;
  season: "warm" | "cold" | "mild";
  recommendedItems: {
    topsCount: number;
    bottomsCount: number;
    layersCount: number;
    shoesCount: number;
    listFa: string[];
    listEn: string[];
  };
  smartRuleFa: string;
  smartRuleEn: string;
}

export const TRAVEL_PACKING_PRESETS: TravelTripType[] = [
  {
    id: "business-3days",
    titleFa: "مأموریت کاری ۳ روزه (سفر کوتاه رسمی)",
    titleEn: "3-Day Executive Business Mission (Wrinkle-Free Capsule)",
    icon: "💼",
    season: "mild",
    recommendedItems: {
      topsCount: 3,
      bottomsCount: 2,
      layersCount: 1,
      shoesCount: 2,
      listFa: [
        "۱ عدد کت تک سرمه‌ای یا زغالی (چروک‌ناپذیر)",
        "۲ عدد پیراهن سفید/آبی روشن آکسفورد",
        "۱ عدد بافت ظریف سبک برای لایه‌بندی عصرها",
        "۲ عدد شلوار پارچه‌ای یا کتان خوش‌دوخت (طوسی و سرمه‌ای)",
        "۱ جفت کفش رسمی چرم + ۱ جفت لوفر راحت برای مسیر"
      ],
      listEn: [
        "1x Unstructured High-Twist Navy Hopsack Blazer (Wrinkle-Resistant)",
        "2x Crisp Egyptian Cotton Oxford / Poplin Shirts (White & Pale Sky)",
        "1x Fine-Gauge Merino V-Neck for Evening Layering",
        "2x Tailored Tropical Wool Trousers (Charcoal & Navy)",
        "1x Goodyear-Welted Oxford Shoes + 1x Travel Penny Loafers"
      ]
    },
    smartRuleFa: "کت و سنگین‌ترین کفش را هنگام پرواز یا مسیر بپوشید تا چمدان سبک بماند و فضای اضافه اشغال نشود.",
    smartRuleEn: "Wear the tailored blazer and heavier dress shoes during transit to preserve luggage volume and keep garments pristine."
  },
  {
    id: "leisure-weekend",
    titleFa: "سفر تفریحی آخر هفته (۲ تا ۳ روزه بهاری/تابستانی)",
    titleEn: "Weekend Leisure & Riviera Getaway (2-3 Days)",
    icon: "🏖️",
    season: "warm",
    recommendedItems: {
      topsCount: 3,
      bottomsCount: 2,
      layersCount: 1,
      shoesCount: 2,
      listFa: [
        "۲ عدد پیراهن لینن یا تیشرت پنبه‌ای باکیفیت",
        "۱ عدد پیراهن کتان آستین‌بلند برای شب‌های خنک",
        "۱ عدد شلوار کتان روشن + ۱ عدد جین راحت",
        "۱ عدد کاردیگان یا ژاکت سبک بادگیر",
        "۱ جفت کتونی سفید مینیمال + ۱ جفت صندل/لوفر چرمی"
      ],
      listEn: [
        "2x Pure French Flax Linen Shirts / Heavyweight Cotton Tees",
        "1x Long-Sleeve Oxford Shirt for Breezy Evenings",
        "1x Sand Chino Trousers + 1x Classic Selvedge Denim",
        "1x Lightweight Cotton Windbreaker or Fine Cardigan",
        "1x Minimalist White Leather Sneakers + 1x Suede Loafers"
      ]
    },
    smartRuleFa: "تمام رنگ‌های انتخابی در طیف خنثی (سفید، کرم، سرمه‌ای) باشند تا تمام قطعات بتوانند ۲ به ۲ با هم ست شوند.",
    smartRuleEn: "Keep all color choices strictly within neutral tonal harmony (Ecru, Navy, Sand) so every top effortlessly pairs with every bottom."
  },
  {
    id: "winter-holiday-5days",
    titleFa: "سفر زمستانی ۵ روزه (هوای سرد و برفی)",
    titleEn: "5-Day Winter Alpine & Metropole Holiday (Cold Climate)",
    icon: "🏔️",
    season: "cold",
    recommendedItems: {
      topsCount: 4,
      bottomsCount: 2,
      layersCount: 2,
      shoesCount: 2,
      listFa: [
        "۲ عدد پلیور یقه اسکی یا بافت پشم مرینو گرم",
        "۲ عدد پیراهن کتان ضخیم چهارفصل",
        "۱ عدد پالتو بلند پشمی یا کاپشن پر مقاوم",
        "۲ عدد شلوار ضخیم (جین تیره گرم و کتان زمستانه)",
        "۱ جفت بوت چرم ضدآب + ۱ جفت اسنیکر راحت چرمی"
      ],
      listEn: [
        "2x Inner Mongolian Cashmere Rollneck / Chunky Merino Sweaters",
        "2x Heavy Flannel / Brushed Cotton Button-Down Shirts",
        "1x Heavyweight Double-Breasted Wool Overcoat or Insulated Parka",
        "2x Heavyweight Trousers (Raw Denim & Winter Wool Flannel)",
        "1x Weatherproof Leather Chelsea Boots + 1x Padded Leather Trainers"
      ]
    },
    smartRuleFa: "به جای برداشتن چندین لباس خیلی ضخیم، از تکنیک ۳ لایه‌ای استفاده کنید (پوشش زیرین گرم + بافت + پالتو).",
    smartRuleEn: "Rely on 3-tier lightweight micro-layering (thermal base + cashmere knit + wool overcoat) rather than bulky single garments."
  },
  {
    id: "city-break-4days",
    titleFa: "سفر تفریحی شهری و کافه‌گردی (۴ روزه)",
    titleEn: "4-Day European City Break & Cultural Tour",
    icon: "🏙️",
    season: "mild",
    recommendedItems: {
      topsCount: 4,
      bottomsCount: 2,
      layersCount: 2,
      shoesCount: 2,
      listFa: [
        "۲ عدد پیراهن خوش‌دوخت + ۲ عدد بافت/تیشرت کژوال",
        "۱ عدد ترنچ‌کت کلاسیک یا کت بلیزر همه‌کاره",
        "۱ عدد جین کلاسیک + ۱ عدد شلوار پارچه‌ای راسته",
        "۱ جفت کفش پیاده‌روی راحت و شیک + ۱ جفت لوفر عصرگاهی",
        "عینک آفتابی، کمربند چرم و ساعت روزمره"
      ],
      listEn: [
        "2x Tailored Oxford Shirts + 2x Long-Sleeve Cotton Polos / Knits",
        "1x Heritage Water-Repellent Trench Coat or Hopsack Blazer",
        "1x Raw Dark Denim + 1x Pleated Olive/Charcoal Trousers",
        "1x Ergonomic Walkable Leather Sneakers + 1x Twilight Loafers",
        "Classic Sunglasses, Burnished Belt, and Everyday Timepiece"
      ]
    },
    smartRuleFa: "یک پالت سه‌رنگه (مثلاً کرم، سرمه‌ای و طوسی) انتخاب کنید تا با ۴ تکه بالاتنه بتوانید ۸ استایل متنوع ثبت کنید.",
    smartRuleEn: "Select a 3-color palette matrix (e.g., Ivory, Navy, Charcoal) enabling 8 distinct outfit combinations from only 4 tops."
  }
];

export function evaluatePurchaseDecision(
  itemCategory: "blazer" | "shirt" | "pants" | "shoes" | "trendy",
  colorTone: "neutral" | "bright-neon" | "patterned",
  existingMatchesCount: number,
  lang: LanguageCode | string = "fa"
): {
  verdict: "must-buy" | "caution" | "skip";
  badge: string;
  score: number;
  explanation: string;
  actionAdvice: string;
} {
  const isEn = lang !== "fa" && lang !== "ar";

  if (colorTone === "neutral" && existingMatchesCount >= 3) {
    return {
      verdict: "must-buy",
      badge: isEn
        ? "Exceptional Capsule Investment (High Cost-Per-Wear ROI)"
        : "خرید هوشمندانه و باارزش (ارزش خرید بسیار بالا)",
      score: 95,
      explanation: isEn
        ? "Due to its noble neutral tone and immediate compatibility with 3+ existing wardrobe pieces, this garment guarantees frequent wear, driving Cost-per-Wear down to pennies."
        : "این لباس به دلیل رنگ خنثی و هماهنگی با حداقل ۳ آیتم از کمد فعلی شما، حداقل بارها در ماه پوشیده می‌شود و هزینه به ازای هر بار پوشش (Cost per Wear) بسیار پایینی خواهد داشت.",
      actionAdvice: isEn
        ? "Proceed with acquisition confidently, provided fabric composition is 100% natural and stitching is immaculate."
        : "اگر جنس پارچه باکیفیت و دوخت آن تمیز است، با خیال راحت خرید کنید."
    };
  }

  if (colorTone === "bright-neon" || (itemCategory === "trendy" && existingMatchesCount < 2)) {
    return {
      verdict: "skip",
      badge: isEn
        ? "High Risk of Wardrobe Stagnation (Recommend Passing)"
        : "احتمال بالای بی‌استفاده ماندن در کمد (صرف‌نظر کنید)",
      score: 35,
      explanation: isEn
        ? "This piece leans heavily into fleeting micro-trends or high-chroma tones that will clash with quiet luxury rotations. It will likely sit unworn after 1-2 outings."
        : "این آیتم جزو ترندهای زودگذر یا رنگ‌های دشوار برای ست کردن است و به سختی با بیش از یک تکه از کمد شما هماهنگ می‌شود. احتمالاً پس از یک یا دو بار پوشیدن در کمد خاک خواهد خورد.",
      actionAdvice: isEn
        ? "Reallocate this budget toward a timeless foundational asset (e.g., Goodyear-welted leather shoes or a tailored navy blazer)."
        : "بودجه این خرید را برای یک تکه لباس پایه کلاسیک (مثل کفش چرم باکیفیت یا کت سرمه‌ای) پس‌انداز کنید."
    };
  }

  return {
    verdict: "caution",
    badge: isEn
      ? "Prudent Reassessment Advised (Conditional Acquisition)"
      : "نیاز به بررسی دقیق‌تر (خرید محتاطانه)",
    score: 65,
    explanation: isEn
      ? "This piece has potential but requires specific supporting items. Confirm whether it fits your genuine weekly lifestyle or merely catches the eye in showroom lighting."
      : "این لباس پتانسیل خوبی دارد اما برای ست شدن به مکمل‌های خاصی نیاز دارد. دقت کنید که آیا واقعاً برای موقعیت‌های روزمره شما کاربرد دارد یا فقط در ویترین زیبا دیده می‌شود.",
    actionAdvice: isEn
      ? "Before completing checkout, ask yourself: Can I mentally construct 3 distinct outfits with pieces already in my wardrobe? If yes, invest."
      : "پیش از کارت کشیدن، از خود بپرسید: آیا می‌توانم فوراً ۳ ست مختلف با این لباس در ذهنم بسازم؟ اگر پاسخ بله است، بخرید."
  };
}
