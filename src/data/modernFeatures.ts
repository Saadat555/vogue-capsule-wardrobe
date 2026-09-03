import { WeatherCondition, BodyProportionProfile, SkinUndertoneProfile, WardrobeItem } from "../types";

export const WEATHER_CONDITIONS: WeatherCondition[] = [
  {
    id: "warm-sunny",
    nameFa: "آفتابی و گرم (۲۵ تا ۳۵ درجه)",
    tempFa: "۲۵° - ۳۵°C",
    icon: "☀️",
    fabricAdvice: "پارچه‌های تنفس‌پذیر: ۱۰۰٪ لینن، پوپلین پنبه‌ای سبک، کتان نازک و لباس‌های خنک تابستانی بدون آستر ضخیم.",
    layerCount: "تک لایه یا کت سبک خنک"
  },
  {
    id: "mild-spring",
    nameFa: "بهاری و معتدل (۱۸ تا ۲۴ درجه)",
    tempFa: "۱۸° - ۲۴°C",
    icon: "🌤️",
    fabricAdvice: "پارچه‌های چهارفصل: پیراهن‌های کتان آکسفورد، بافت‌های ظریف بهاره و شلوارهای پارچه‌ای یا جین کلاسیک.",
    layerCount: "دو لایه متوازن (پیراهن + کت تک/ژاکت)"
  },
  {
    id: "chilly-autumn",
    nameFa: "خنک و بارانی پاییزی (۱۰ تا ۱۷ درجه)",
    tempFa: "۱۰° - ۱۷°C",
    icon: "🍂",
    fabricAdvice: "بافت‌های گرم پاییزی: پلیور پشم مرینو ظریف، ترنچ‌کت ضدآب، کت‌های جیر و کاردیگان‌های دکمه‌دار.",
    layerCount: "سه لایه هوشمند (پیراهن + بافت ظریف + ترنچ‌کت یا کت تک)"
  },
  {
    id: "cold-rain-snow",
    nameFa: "سرد، برفی و زمستانه (زیر ۱۰ درجه)",
    tempFa: "< ۱۰°C",
    icon: "❄️",
    fabricAdvice: "پوشش‌های گرم زمستانی: پالتو پشمی یا کشمیری، پلیورهای یقه اسکی گرم و بوت‌های چرمی مقاوم.",
    layerCount: "سه یا چهار لایه گرم (یقه اسکی + پلیور/کت + پالتو بلند)"
  }
];

export const BODY_PROPORTIONS: Record<"men" | "women", BodyProportionProfile[]> = {
  men: [
    {
      id: "athletic",
      nameFa: "ورزشکاری و متناسب (سینه پهن، کمر باریک)",
      icon: "⚡",
      silhouetteTip: "لباس‌های با اندازه فیت و متناسب بپوشید تا تعادل بالاتنه حفظ شود و خیلی گشاد یا خیلی جذب نباشد.",
      suitCutRecommendation: "کت‌های تک‌سینه با شلوار راسته استاندارد برای نمایش متناسب فرم بدن."
    },
    {
      id: "lean-tall",
      nameFa: "کشیده و لاغراندام (قد بلند، شانه باریک)",
      icon: "📏",
      silhouetteTip: "استفاده از لباس‌های دارای طرح ملایم یا لایه‌بندی (مانند پیراهن زیر پلیور) به استایل شما جلوه بهتری می‌دهد.",
      suitCutRecommendation: "کت‌های ساختاریافته و شلوارهای پارچه‌ای راسته برای ایجاد تعادل قدی مناسب."
    },
    {
      id: "broad-stout",
      nameFa: "تنومند و چهارشانه / پرحجم",
      icon: "🛡️",
      silhouetteTip: "استفاده از رنگ‌های تیره مات و ست‌های مونوکروم (هم‌رنگ) اندام شما را کشیده‌تر و جمع‌وجورتر نشان می‌دهد.",
      suitCutRecommendation: "کت‌های ساده تک‌رنگ با یقه برگردان استاندارد و شلوارهای فاق‌متوسط راحت."
    },
    {
      id: "petite-compact",
      nameFa: "قد متوسط تا کوتاه",
      icon: "🎯",
      silhouetteTip: "هم‌رنگ بودن شلوار و پیراهن/کت، خط دید پیوسته ایجاد کرده و قد شما را بلندتر نشان می‌دهد.",
      suitCutRecommendation: "شلوارهای بدون تاخوردگی اضافه روی کفش و کت‌های با قد متناسب و دقیق."
    }
  ],
  women: [
    {
      id: "athletic",
      nameFa: "ساعت شنی و متناسب (کمر مشخص)",
      icon: "⏳",
      silhouetteTip: "تأکید بر خط کمر با کمربندهای ظیک یا کت‌های متناسب برای جلوه شیک‌تر.",
      suitCutRecommendation: "کت‌های متناسب کمر و شلوارهای راسته یا فاق‌بلند شکیل."
    },
    {
      id: "lean-tall",
      nameFa: "قدبلند و کشیده",
      icon: "✨",
      silhouetteTip: "استفاده از شلوارهای وایدلگ، دامن‌های میدی و کت‌های شیک با قد بلندتر.",
      suitCutRecommendation: "بلیزرهای بلند همراه با دامن‌های میدی یا شلوارهای پارچه‌ای آزاد."
    },
    {
      id: "broad-stout",
      nameFa: "پر و انحنادار",
      icon: "💎",
      silhouetteTip: "استفاده از یقه‌های هفت (V شکل) و پارچه‌های با ریزش لخت و روان برای کشیدگی بیشتر.",
      suitCutRecommendation: "کت‌های آزاد تک‌سینه با خطوط ساده و شلوارهای راسته تیره."
    },
    {
      id: "petite-compact",
      nameFa: "ظریف و قد کوتاه",
      icon: "🌸",
      silhouetteTip: "استفاده از کفش‌های پنجه نوک‌تیز رنگ نود و ست‌های مونوکروم یکدست.",
      suitCutRecommendation: "کت‌های متناسب با قد استاندارد و شلوارهای فاق‌بلند هماهنگ."
    }
  ]
};

export const SKIN_UNDERTONES: SkinUndertoneProfile[] = [
  {
    id: "warm-olive",
    nameFa: "تنالیته گرم / گندمی و زیتونی",
    description: "رگ‌های دست متمایل به سبز، پوست با آفتاب سریع طلایی و برنزه می‌شود.",
    bestMetals: "طلای زرد، برنج صیقلی، رزگلد و سگک‌های برنزی گرم",
    bestBaseColors: ["سرمه‌ای عمیق", "کرم شتری و نسکافه‌ای", "سبز زیتونی و یشمی", "سفید شیری"],
    colorsToAvoid: ["سفید گچی براق", "طوسی نقره‌ای بی‌روح"]
  },
  {
    id: "cool-fair",
    nameFa: "تنالیته سرد / روشن و صورتی",
    description: "رگ‌های دست متمایل به آبی یا بنفش، پوست در آفتاب زود سرخ می‌شود.",
    bestMetals: "استیل سیلور، طلای سفید و نقره استرلینگ",
    bestBaseColors: ["سرمه‌ای تیره", "طوسی زغالی و دودی", "سفید خالص", "شرابی و زرشکی"],
    colorsToAvoid: ["زرد خردلی تند", "نارنجی تیره و قهوه‌ای مایل به زنگ‌زدگی"]
  },
  {
    id: "neutral-medium",
    nameFa: "تنالیته خنثی / طبیعی",
    description: "تعادل میان سردی و گرمی؛ سازگار با بیشترین گستره پالت‌های رنگی.",
    bestMetals: "هم نقره‌ای براق و هم طلای زرد به زیبایی ست می‌شوند",
    bestBaseColors: ["طوسی سنگی", "سرمه‌ای شب", "شکلاتی تیره", "کرم جو دوسر"],
    colorsToAvoid: ["رنگ‌های نئونی جیغ"]
  }
];

export const CORE_WARDROBE_ITEMS: Record<"men" | "women", WardrobeItem[]> = {
  men: [
    { id: "m-navy-blazer", category: "layer", nameFa: "کت تک سرمه‌ای (Navy Blazer)", icon: "🧥" },
    { id: "m-white-shirt", category: "top", nameFa: "پیراهن سفید کتان آهاردار", icon: "👔" },
    { id: "m-blue-shirt", category: "top", nameFa: "پیراهن آبی روشن آکسفورد", icon: "👔" },
    { id: "m-grey-trousers", category: "bottom", nameFa: "شلوار پارچه‌ای طوسی زغالی", icon: "👖" },
    { id: "m-beige-chinos", category: "bottom", nameFa: "شلوار کتان شنی / بژ", icon: "👖" },
    { id: "m-dark-jeans", category: "bottom", nameFa: "شلوار جین تیره ساده", icon: "👖" },
    { id: "m-merino-knit", category: "top", nameFa: "پلیور بافت ظریف", icon: "🧶" },
    { id: "m-oxford-shoes", category: "shoes", nameFa: "کفش چرم کلاسیک قهوه‌ای", icon: "👞" },
    { id: "m-white-sneaker", category: "shoes", nameFa: "اسنیکر سفید مینیمال", icon: "👟" },
    { id: "m-chelsea-boot", category: "shoes", nameFa: "بوت چرم یا جیر شکلاتی", icon: "👢" }
  ],
  women: [
    { id: "w-tailored-blazer", category: "layer", nameFa: "کت بلیزر مشکی/دودی", icon: "🧥" },
    { id: "w-white-shirt", category: "top", nameFa: "شومیز سفید پنبه‌ای/ابریشمی", icon: "👚" },
    { id: "w-silk-top", category: "top", nameFa: "تاپ یا شومیز ساتن نود", icon: "👚" },
    { id: "w-wide-trousers", category: "bottom", nameFa: "شلوار واید لگ پارچه‌ای", icon: "👖" },
    { id: "w-straight-jeans", category: "bottom", nameFa: "جین راسته آبی کلاسیک", icon: "👖" },
    { id: "w-satin-skirt", category: "bottom", nameFa: "دامن میدی ساتن", icon: "👗" },
    { id: "w-cashmere-knit", category: "top", nameFa: "کاردیگان یا بافت کرمی", icon: "🧶" },
    { id: "w-classic-pumps", category: "shoes", nameFa: "کفش پاشنه‌دار رنگ نود/مشکی", icon: "👠" },
    { id: "w-leather-loafers", category: "shoes", nameFa: "کفش لوفر چرم کلاسیک", icon: "👞" },
    { id: "w-trench-coat", category: "layer", nameFa: "ترنچ‌کت کلاسیک خاکی", icon: "🧥" }
  ]
};

export const MIRROR_CHECKLIST_ITEMS: Record<"men" | "women", { id: string; textFa: string; detailFa: string }[]> = {
  men: [
    {
      id: "c1",
      textFa: "اندازه بیرون بودن سرآستین پیراهن از کت",
      detailFa: "سرآستین پیراهن باید حدود یک سانتی‌متر از انتهای آستین کت بیرون باشد تا استایل مرتب دیده شود."
    },
    {
      id: "c2",
      textFa: "باز بودن دکمه پایینی کت",
      detailFa: "دکمه پایینی کت را باز بگذارید تا فرم لباس روی بدن آزاد و شیک بنشیند."
    },
    {
      id: "c3",
      textFa: "ست بودن رنگ کمربند و کفش",
      detailFa: "چرم کفش و کمربند در یک خانواده رنگی (هر دو قهوه‌ای یا هر دو مشکی) باشند."
    },
    {
      id: "c4",
      textFa: "تنظیم قد کراوات روی سگک کمربند",
      detailFa: "نوک کراوات دقیقاً مماس با مرکز سگک کمربند قرار بگیرد."
    },
    {
      id: "c5",
      textFa: "خالی بودن جیب‌ها و تمیزی کفش‌ها",
      detailFa: "جیب‌ها برجسته نباشند و کفش‌ها پیش از خروج واکس‌خورده و تمیز باشند."
    }
  ],
  women: [
    {
      id: "w1",
      textFa: "مرتب بودن لباس و عدم مشخص بودن درزها",
      detailFa: "لباس زیر مخفی و مناسب انتخاب شود تا فرم پارچه روی تن کاملاً صاف و آراسته بایستد."
    },
    {
      id: "w2",
      textFa: "قانون تک‌نقطه توجه بصری (Single Focal Point)",
      detailFa: "تنها یک آیتم شاخص (یا رژ لب خاص، یا گوشواره چشم‌گیر، یا کیف جذاب) در استایل بدرخشد."
    },
    {
      id: "w3",
      textFa: "هماهنگی قد شلوار با نوع کفش",
      detailFa: "شلوارهای واید تا نزدیکی زمین و شلوارهای راسته مماس با بالای کفش باشند."
    },
    {
      id: "w4",
      textFa: "هماهنگی رنگ فلزات زیورآلات و ساعت",
      detailFa: "سگک کیف، قاب ساعت و زیورآلات همگی در طیف طلایی یا نقره‌ای ست باشند."
    },
    {
      id: "w5",
      textFa: "آراستگی مو و تمیزی ناخن‌ها",
      detailFa: "موهای مرتب و ناخن‌های یکدست تکمیل‌کننده نهایی هر استایل باکلاسی هستند."
    }
  ]
};
